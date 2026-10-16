"""Responsive browser smoke tests for the public Sabina website.

Run in CI against a local Next.js build; never reads secrets or live patient data.
"""
from pathlib import Path
import subprocess
import signal
import os
import time
import urllib.request

from playwright.sync_api import sync_playwright, expect
from browser_routes import public_routes, local_requests_only

PORT = os.environ.get("QA_PORT", "3000")
ROOT = f"http://127.0.0.1:{PORT}"
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
    local_requests_only(context)
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
        menu.focus()
        page.keyboard.press("Enter")
        assert nav_links.is_visible(), f"Menu did not open at {width}px"
        assert menu.get_attribute("aria-expanded") == "true"
        page.screenshot(path=str(ARTIFACTS / f"home-mobile-{width}.png"), full_page=True)
        nav_links.get_by_role("link", name="Blog").focus()
        page.keyboard.press("Escape")
        expect(menu).to_be_focused()
        assert not nav_links.is_visible(), "Escape did not close menu"
        menu.focus()
        page.keyboard.press("Enter")
        nav_links.get_by_role("link", name="Blog").click()
        page.wait_for_url("**/blog", timeout=10000)
        assert page.url.endswith("/blog"), f"Blog navigation failed: {page.url}"
        assert not nav_links.is_visible(), "Menu did not close on navigation"
        page.screenshot(path=str(ARTIFACTS / f"blog-mobile-{width}.png"), full_page=True)
    else:
        assert not menu.is_visible(), f"Menu button visible on desktop at {width}px"
        assert nav_links.is_visible(), f"Desktop navigation missing at {width}px"
        page.screenshot(path=str(ARTIFACTS / f"home-desktop-{width}.png"), full_page=True)

    # Dismiss with the keyboard, then verify persistence after a full reload.
    page.goto(ROOT, wait_until="networkidle")
    close = page.get_by_role("button", name="Chiudi avviso")
    expect(close).to_be_visible()
    close.focus()
    page.keyboard.press("Enter")
    expect(close).to_have_count(0)
    page.reload(wait_until="networkidle")
    expect(close).to_have_count(0)

    for route in public_routes():
        response = page.goto(ROOT + route, wait_until="networkidle", timeout=20000)
        assert response is not None and response.status == 200, route
        assert page.locator("main").count() == 1, f"Main landmark: {route}"
        assert page.locator("main h1").count() == 1, f"Page heading: {route}"
        if route.startswith("/blog/"):
            assert page.locator("article .editorial-prose").count() == 1, route
            expect(page.get_by_role("link", name="Torna agli articoli")).to_be_visible()
        dimensions = page.evaluate(
            "() => ({screen: document.documentElement.clientWidth,"
            " content: document.documentElement.scrollWidth})"
        )
        assert dimensions["content"] <= dimensions["screen"] + 2, (
            f"Horizontal overflow at {width}px on {route}: {dimensions}"
        )
        slug = route.strip('/').replace('/', '-') or 'home'
        page.screenshot(path=str(ARTIFACTS / f"{slug}-{width}.png"), full_page=True)
        print(f"PASS {width}px {route}")

    assert page.goto(ROOT + "/missing-page-qa-check").status == 404

    context.close()


def main() -> None:
    output = open("next-smoke.log", "w", encoding="utf-8")
    server = subprocess.Popen(
        ["npm", "run", "start", "--", "-p", PORT],
        stdout=output,
        stderr=subprocess.STDOUT, start_new_session=True,
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
        os.killpg(server.pid, signal.SIGTERM)
        try:
            server.wait(timeout=5)
        except subprocess.TimeoutExpired:
            os.killpg(server.pid, signal.SIGKILL)
        output.close()


if __name__ == "__main__":
    main()
