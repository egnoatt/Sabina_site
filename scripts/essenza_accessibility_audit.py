"""Automated local axe-core audit for public pages and all articles.

This checks selected WCAG-tagged rules at responsive breakpoints. It is not
a substitute for a manual WCAG 2.2 AA audit or assistive technology testing.
No request data, cookie values or personal information is recorded.
"""
from __future__ import annotations
import json
import subprocess
import os
import time
import urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright
from browser_routes import public_routes, local_requests_only

PORT = os.environ.get("QA_PORT", "3000")
ROOT = f"http://127.0.0.1:{PORT}"
SIZES = (320, 375, 768, 1280)
ROUTES = public_routes()
ARTIFACTS = Path("artifacts/essenza-a11y")
ARTIFACTS.mkdir(parents=True, exist_ok=True)

def wait_ready(seconds=60):
    stop = time.monotonic() + seconds
    while time.monotonic() < stop:
        try:
            with urllib.request.urlopen(ROOT, timeout=2) as response:
                if response.status == 200:
                    return
        except Exception:
            time.sleep(0.5)
    raise AssertionError("Preview server did not start")

def audit():
    axe_script = Path("node_modules/axe-core/axe.min.js").read_text(encoding="utf-8")
    results = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        try:
            for width in SIZES:
                context = browser.new_context(viewport={"width": width, "height": 900}, bypass_csp=True)
                local_requests_only(context)
                page = context.new_page()
                for route in ROUTES:
                    response = page.goto(ROOT + route, wait_until="networkidle", timeout=30000)
                    assert response is not None and response.status == 200
                    page.add_script_tag(content=axe_script)
                    report = page.evaluate("""async () => {
                      const result = await window.axe.run(document, {
                        runOnly: {type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']}
                      });
                      return {
                        violations: result.violations.map(v => ({
                          id: v.id,
                          impact: v.impact,
                          description: v.description,
                          helpUrl: v.helpUrl,
                          nodes: v.nodes.map(n => ({target: n.target, html: n.html, failureSummary: n.failureSummary}))
                        })),
                        passes: result.passes.length,
                        incomplete: result.incomplete.map(v => ({
                          id: v.id, impact: v.impact, help: v.help, helpUrl: v.helpUrl,
                          nodes: v.nodes.map(n => ({target: n.target, html: n.html,
                            failureSummary: n.failureSummary, any: n.any, all: n.all, none: n.none}))
                        })),
                      };
                    }""")
                    result = {"viewport": width, "route": route, **report}
                    results.append(result)
                    # Persist after every route, including when a later navigation fails.
                    (ARTIFACTS / "axe-report.json").write_text(
                        json.dumps(results, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
                    print(f"{width}px {route}: {len(report['violations'])} violations, "
                          f"{len(report['incomplete'])} manual-review findings")
                context.close()
        finally:
            browser.close()

    (ARTIFACTS / "axe-report.json").write_text(
        json.dumps(results, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    blocking = [
        (r["viewport"], r["route"], v["id"], v["impact"])
        for r in results for v in r["violations"]
        if v["impact"] in ("serious", "critical")
    ]
    if blocking:
        raise AssertionError(f"Serious or critical axe findings: {blocking}")

def main():
    output = open("essenza-a11y-server.log", "w", encoding="utf-8")
    server = subprocess.Popen(
        ["npm", "run", "start", "--", "-p", PORT],
        stdout=output, stderr=subprocess.STDOUT,
    )
    try:
        wait_ready()
        audit()
    finally:
        server.terminate()
        try:
            server.wait(timeout=5)
        except subprocess.TimeoutExpired:
            server.kill()
        output.close()

if __name__ == "__main__":
    main()
