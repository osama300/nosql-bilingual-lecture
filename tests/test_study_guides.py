from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:8787/nosql"


def assert_no_page_overflow(page, label):
    has_overflow = page.evaluate(
        "() => document.documentElement.scrollWidth > document.documentElement.clientWidth"
    )
    if has_overflow:
        details = page.evaluate(
            "() => ({"
            " page: [document.documentElement.clientWidth, document.documentElement.scrollWidth],"
            " offenders: [...document.querySelectorAll('*')].map((element) => {"
            "   const rect = element.getBoundingClientRect();"
            "   return { tag: element.tagName, cls: element.className, left: rect.left, right: rect.right };"
            " }).filter((item) => item.left < -1 || item.right > innerWidth + 1).slice(0, 12)"
            "})"
        )
        print(f"{label} OVERFLOW: {details}")
    assert not has_overflow


with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    context = browser.new_context(viewport={"width": 1440, "height": 1000}, reduced_motion="reduce")
    page = context.new_page()
    page_errors = []
    page.on("pageerror", lambda error: page_errors.append(str(error)))

    page.goto(f"{BASE_URL}/mongo-query-guide/")
    assert "$gt: 50" in page.locator("#generatedQuery").inner_text()
    assert page.locator("#resultCount").inner_text() == "3 documents"
    assert page.locator(".document-result").count() == 3

    page.locator('[data-preset="lecture"]').click()
    query = page.locator("#generatedQuery").inner_text()
    assert "db.users.find" in query
    assert "$gt: 18" in query
    assert ".sort({ age: 1 })" in query
    assert page.locator("#resultCount").inner_text() == "4 documents"

    page.locator(".micro-question").first.locator("select").select_option("$gt")
    assert page.locator(".micro-question").first.locator("output").inner_text() == "صحيح ✓"

    page.set_viewport_size({"width": 390, "height": 844})
    page.reload()
    assert_no_page_overflow(page, "QUERY GUIDE")

    page.set_viewport_size({"width": 1440, "height": 1000})
    page.goto(f"{BASE_URL}/nosql-comparison/")
    assert page.locator(".model-head").count() == 4
    assert page.locator(".data-cell").count() == 28
    assert page.locator(".scenario").count() == 4
    page.locator('[data-scenario="friends"]').click()
    assert page.locator("#decisionAnswer h3").inner_text() == "GRAPH"

    page.set_viewport_size({"width": 390, "height": 844})
    page.reload()
    assert_no_page_overflow(page, "COMPARISON GUIDE")
    assert not page_errors

    context.close()
    browser.close()
    print("PASS: MongoDB query guide and NoSQL comparison sheet")
