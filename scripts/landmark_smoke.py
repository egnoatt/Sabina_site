"""Check one main landmark and skip-link target for every public route."""
import urllib.request
import xml.etree.ElementTree as ET
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:3000"

def routes():
    with urllib.request.urlopen(BASE + "/sitemap.xml", timeout=10) as response:
        root = ET.fromstring(response.read())
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    for loc in root.findall(".//s:loc", ns):
        url = loc.text or ""
        yield "/" + url.split("sabinascattola.com", 1)[-1].lstrip("/")

def validate_landmarks(browser):
    context = browser.new_context(viewport={"width": 375, "height": 812})
    page = context.new_page()
    checked = []
    for path in list(routes()) + ["/missing-page-for-a11y-test"]:
        response = page.goto(BASE + path, wait_until="domcontentloaded", timeout=20000)
        assert response is not None, f"No response for {path}"
        assert response.status == (404 if "missing-page" in path else 200), (path, response.status)
        assert page.locator("main").count() == 1, f"Expected one main landmark on {path}"
        assert page.locator("main#main").count() == 1, f"Missing main#main on {path}"
        assert page.locator('a[href="#main"]').count() == 1, f"Skip link missing on {path}"
        checked.append(path)
    context.close()
    return checked

if __name__ == "__main__":
    import subprocess
    import time
    proc = subprocess.Popen(["npm", "run", "start", "--", "-p", "3000"])
    try:
        for _ in range(90):
            try:
                urllib.request.urlopen(BASE, timeout=1)
                break
            except Exception:
                time.sleep(0.5)
        else:
            raise AssertionError("Local server not ready")
        with sync_playwright() as pw:
            browser = pw.chromium.launch(headless=True)
            try:
                for path in validate_landmarks(browser):
                    print("PASS landmark " + path, flush=True)
            finally:
                browser.close()
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()
