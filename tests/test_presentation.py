from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:8787/nosql"


def check(condition, message):
    if not condition:
        raise AssertionError(message)


with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    context = browser.new_context(
        viewport={"width": 1440, "height": 1000},
        reduced_motion="reduce",
    )
    page = context.new_page()
    browser_errors = []
    page.on("pageerror", lambda error: browser_errors.append(str(error)))

    page.goto(f"{BASE_URL}/#slide-1")
    page.add_style_tag(content="*, *::before, *::after { animation: none !important; }")
    scrollable_slides = []

    for slide in range(1, 38):
        page.evaluate("(number) => { window.location.hash = `slide-${number}`; }", slide)
        page.wait_for_function(
            "(number) => document.querySelector('#currentSlide')?.textContent === String(number).padStart(2, '0')",
            arg=slide,
        )
        check(page.locator("#slide-content .slide").count() == 1, f"Slide {slide} did not render")
        geometry = page.locator("#slide-content").evaluate(
            "(element) => ({"
            "  vertical: element.scrollHeight - element.clientHeight,"
            "  horizontal: element.scrollWidth - element.clientWidth"
            "})"
        )
        check(geometry["horizontal"] <= 1, f"Desktop slide {slide} has horizontal overflow")
        if geometry["vertical"] > 2:
            scrollable_slides.append((slide, geometry["vertical"]))

    page.get_by_role("button", name="EN", exact=True).click()
    check(page.locator("html").get_attribute("data-language") == "en", "English mode failed")
    check(not page.locator(".language-column.lang-ar").is_visible(), "Arabic content stayed visible")

    page.get_by_role("button", name="عربي", exact=True).click()
    check(page.locator("html").get_attribute("data-language") == "ar", "Arabic mode failed")
    check(not page.locator(".language-column.lang-en").is_visible(), "English content stayed visible")

    page.get_by_role("button", name="AR + EN", exact=True).click()
    check(page.locator("html").get_attribute("data-language") == "both", "Bilingual mode failed")

    page.get_by_role("button", name="فتح فهرس الشرائح").click()
    check(page.locator("#tocDialog").get_attribute("open") is not None, "Lecture map did not open")
    page.locator("#tocList [data-slide='36']").click()
    check(page.locator("#currentSlide").inner_text() == "37", "Lecture map navigation failed")

    page.set_viewport_size({"width": 390, "height": 844})
    for slide in range(1, 38):
        page.goto(f"{BASE_URL}/#slide-{slide}")
        has_page_overflow = page.evaluate(
            "() => document.documentElement.scrollWidth > document.documentElement.clientWidth"
        )
        check(not has_page_overflow, f"Mobile slide {slide} has horizontal page overflow")

    check(not browser_errors, f"Browser errors: {browser_errors}")
    context.close()
    browser.close()

    print(f"INFO: desktop slides with intentional inner scrolling: {scrollable_slides}")
    print("PASS: 37 slides, language modes, lecture map, and mobile layout")
