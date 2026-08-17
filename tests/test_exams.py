from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:8787/nosql/exams/"


with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    context = browser.new_context(viewport={"width": 1440, "height": 1000}, reduced_motion="reduce")
    page = context.new_page()
    page_errors = []
    page.on("pageerror", lambda error: page_errors.append(str(error)))

    page.goto(BASE_URL, wait_until="domcontentloaded")
    assert page.locator("[data-exam]").count() == 8
    assert page.locator(".truefalse-question").count() == 5
    assert page.locator(".fill-question").count() == 6
    assert page.locator(".essay-question").count() == 1
    assert page.locator(".blank-input").count() == 9
    assert page.locator("#variantLetter").inner_text() == "D"

    true_false_d = ["true", "false", "false", "true", "true"]
    for index, answer in enumerate(true_false_d):
        page.locator(f'input[name="tf-{index}"][value="{answer}"]').check()

    answers_d = [
        "volume",
        "velocity",
        "variety",
        "scaling up",
        "load-balancing clusters",
        "symmetric",
        "asymmetric",
        "db",
        "show collections",
    ]
    inputs = page.locator(".blank-input")
    for index, answer in enumerate(answers_d):
        inputs.nth(index).fill(answer)
    page.locator("#checkButton").click()
    assert page.locator("#scoreValue").inner_text() == "14"
    assert page.locator(".blank-input.is-correct").count() == 9
    assert page.locator(".truefalse-question.is-correct").count() == 5

    page.locator("#answersButton").click()
    assert page.locator("#examPaper").get_attribute("class").find("show-answers") >= 0
    assert page.locator(".tf-answer").first.is_visible()
    assert page.locator(".model-answer").first.is_visible()

    page.locator('[data-exam="0"]').click()
    assert page.locator("#variantLetter").inner_text() == "A"
    assert page.locator(".fill-question").count() == 7
    assert page.locator(".essay-question").count() == 3
    assert page.locator(".blank-input").count() == 10
    assert page.locator(".truefalse-question").count() == 0

    page.locator('[data-exam="4"]').click()
    assert page.locator("#variantLetter").inner_text() == "E"
    assert page.locator(".truefalse-question").count() == 5
    assert page.locator(".fill-question").count() == 6
    assert page.locator(".essay-question").count() == 1
    assert page.locator(".blank-input").count() == 12

    page.locator('[data-exam="5"]').click()
    assert page.locator("#variantLetter").inner_text() == "F"
    assert page.locator(".truefalse-question").count() == 5
    assert page.locator(".fill-question").count() == 6
    assert page.locator(".essay-question").count() == 1
    assert page.locator(".blank-input").count() == 9

    page.locator('[data-exam="6"]').click()
    assert page.locator("#variantLetter").inner_text() == "G"
    assert page.locator("#variantLabel").inner_text() == "Original Samples Collection"
    assert page.locator(".truefalse-question").count() == 12
    assert page.locator(".fill-question").count() == 11
    assert page.locator(".essay-question").count() == 2
    assert page.locator(".blank-input").count() == 22
    assert page.locator("#scoreTotal").inner_text() == "34"
    assert page.locator("#timerOutput").inner_text() == "45:00"
    page.locator("#answersButton").click()
    assert page.locator(".tf-answer").first.is_visible()
    assert page.locator(".answer-hint").first.is_visible()
    assert page.locator(".model-answer").count() == 2
    assert page.locator(".model-answer").first.is_visible()

    page.locator('[data-exam="7"]').click()
    assert page.locator("#variantLetter").inner_text() == "H"
    assert page.locator("#variantLabel").inner_text() == "Unseen Questions Challenge"
    assert page.locator(".truefalse-question").count() == 5
    assert page.locator(".fill-question").count() == 6
    assert page.locator(".essay-question").count() == 1
    assert page.locator(".blank-input").count() == 8
    assert page.locator("#scoreTotal").inner_text() == "13"
    page.locator("#answersButton").click()
    model_query = page.locator(".model-answer pre").inner_text()
    assert "$lte: 30" in model_query
    assert '$ne: "blocked"' in model_query
    assert ".sort({ age: -1 })" in model_query

    page.set_viewport_size({"width": 390, "height": 844})
    page.reload(wait_until="domcontentloaded")
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
            " }).filter((item) => item.left < -1 || item.right > innerWidth + 1).slice(0, 15)"
            "})"
        )
        print(f"OVERFLOW: {overflow_details}")

    assert not has_overflow
    assert not page_errors

    context.close()
    browser.close()
    print("PASS: all exam variants, grading, answer key, and mobile layout")
