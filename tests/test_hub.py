from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:8787/nosql"


with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    context = browser.new_context(viewport={"width": 1440, "height": 1000}, reduced_motion="reduce")
    page = context.new_page()
    page_errors = []
    page.on("pageerror", lambda error: page_errors.append(str(error)))

    page.goto(f"{BASE_URL}/")
    assert page.locator(".lecture-entry").count() == 2
    assert page.locator('a[href="./big-data-storage/"]').count() == 1
    assert page.locator('a[href="./nosql/"]').count() == 1

    with page.expect_navigation():
        page.locator('a[href="./big-data-storage/"]').click()
    assert "big-data-storage" in page.url
    assert page.locator("#totalSlides").inner_text() == "24"

    page.goto(f"{BASE_URL}/")
    with page.expect_navigation():
        page.locator('a[href="./nosql/"]').click()
    assert "/nosql/nosql/" in page.url
    assert page.locator("#totalSlides").inner_text() == "37"

    page.set_viewport_size({"width": 390, "height": 844})
    page.goto(f"{BASE_URL}/")
    has_overflow = page.evaluate(
        "() => document.documentElement.scrollWidth > document.documentElement.clientWidth"
    )
    if has_overflow:
        overflow_details = page.evaluate(
            "() => ({"
            " page: [document.documentElement.clientWidth, document.documentElement.scrollWidth],"
            " offenders: [...document.querySelectorAll('*')].map((element) => {"
            "   const rect = element.getBoundingClientRect();"
            "   return { tag: element.tagName, cls: element.className, left: rect.left, right: rect.right };"
            " }).filter((item) => item.left < -1 || item.right > innerWidth + 1).slice(0, 12)"
            "})"
        )
        print(f"OVERFLOW: {overflow_details}")
    assert not has_overflow
    assert not page_errors

    context.close()
    browser.close()
    print("PASS: lecture hub links, deck totals, and mobile layout")
