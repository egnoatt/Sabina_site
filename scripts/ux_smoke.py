"""Responsive browser smoke tests for the public Sabina website.

Run in CI against a local Next.js build; never reads secrets or live patient data.
"""
from pathlib import Path
import subprocess
import time
import urllib.request

from playwright.sync_api import sync_playwright

ROOT = "http://127.0.0.1:3000"
ARTIFACTS = Path("artifacts/ux")
ARTIFACTS.mkdir(parents=True, exist_ok=True)


def wait_until_ready(timeout_seconds: int = 45) -> None:
    deadline = time.monotonic() + timeout_seconds
    while time.monotonic() < deadline:
        try:
            with urllib.request.urlopen(ROOT, timeout=2) as response:
                if response.status == 200:
                    return
        except Exception:
            time.sleep(0.5)
    raise AssertionError("Local Next.js server did not become ready")


def check_width(browser, width: int) -> None:
    context = browser.new_context(
        viewport={"width": width, "height": 850}, device_scale_factor=1
    )
    page = context.new_page()
    response = page.goto(ROOT, wait_until="networkidle", timeout=20000)
    assert response is not None and response.status == 200

    menu = page.locator("header button[aria-controls='site-navigation-links']")
    nav_links = page.locator("#site-navigation-links")
    if width < 768:
        assert menu.is_visible(), f"Menu button not visible at {width}px"
        assert not nav_links.is_visible(), f"Collapsed menu visible at {width}px"
        assert menu.get_attribute("aria-expanded") == "false"
        banner_text = page.locator('[role="status"] p').first
        assert banner_text.bounding_box()["width"] >= width * 0.62, (
            f"Status banner is too narrow at {width}px"
        )
        menu.click()
        assert nav_links.is_visible(), f"Menu did not open at {width}px"
        assert menu.get_attribute("aria-expanded") == "true"
        page.screenshot(path=str(ARTIFACTS / f"home-mobile-{width}.png"), full_page=True)
        page.keyboard.press("Escape")
        assert not nav_links.is_visible(), "Escape did not close menu"
        menu.click()
        nav_links.get_by_role("link", name="Blog").click()
        page.wait_for_url("**/blog", timeout=10000)
        assert page.url.endswith("/blog"), f"Blog navigation failed: {page.url}"
        assert not nav_links.is_visible(), "Menu did not close on navigation"
        page.screenshot(path=str(ARTIFACTS / f"blog-mobile-{width}.png"), full_page=True)
    else:
        assert not menu.is_visible(), f"Menu button visible on desktop at {width}px"
        assert nav_links.is_visible(), f"Desktop navigation missing at {width}px"
        page.screenshot(path=str(ARTIFACTS / f"home-desktop-{width}.png"), full_page=True)

    # Essenza vertical slice: every responsive size must render one real article.
    article_url = ROOT + "/blog/cosa-devi-sapere"
    article_response = page.goto(article_url, wait_until="networkidle", timeout=20000)
    assert article_response is not None and article_response.status == 200
    assert page.locator("article h1").count() == 1
    assert page.locator("article .editorial-prose").count() == 1
    assert page.get_by_role("link", name="Torna agli articoli").is_visible()
    page.screenshot(path=str(ARTIFACTS / f"article-{width}.png"), full_page=True)

    dimensions = page.evaluate(
        "() => ({screen: document.documentElement.clientWidth,"
        " content: document.documentElement.scrollWidth})"
    )
    assert dimensions["content"] <= dimensions["screen"] + 2, (
        f"Horizontal overflow at {width}px: {dimensions}"
    )

    context.close()


def main() -> None:
    output = open("next-smoke.log", "w", encoding="utf-8")
    server = subprocess.Popen(
        ["npm", "run", "start", "--", "-p", "3000"],
        stdout=output,
        stderr=subprocess.STDOUT,
    )
    try:
        wait_until_ready()
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            try:
                for width in (320, 375, 768, 1280):
                    check_width(browser, width)
                    print(f"PASS responsive viewport {width}px")
            finally:
                browser.close()
    finally:
        server.terminate()
        try:
            server.wait(timeout=5)
        except subprocess.TimeoutExpired:
            server.kill()
        output.close()


if __name__ == "__main__":
    main()
