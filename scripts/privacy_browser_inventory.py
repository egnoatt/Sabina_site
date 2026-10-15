"""Read-only privacy audit of the public website.

Reports *names and hosts only*: never captures cookies, identifiers,
message content, request URLs, IP addresses or credentials.
"""
from __future__ import annotations
import json
import os
from pathlib import Path
from urllib.parse import urlsplit
from playwright.sync_api import sync_playwright

ROOT = "https://www.sabinascattola.com"
PAGES = ["/", "/privacy", "/contatti"]
OUTPUT = Path("artifacts/privacy")
OUTPUT.mkdir(parents=True, exist_ok=True)

def run():
    findings = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)
        try:
            for name, width in [("mobile", 375), ("desktop", 1280)]:
                ctx = browser.new_context(
                    viewport={"width": width, "height": 812},
                    ignore_https_errors=False,
                    service_workers="block",
                )
                page = ctx.new_page()
                request_hosts = set()

                def record_request(request):
                    scheme = urlsplit(request.url)
                    if scheme.scheme in ("http", "https") and scheme.hostname:
                        request_hosts.add(scheme.hostname.lower())

                page.on("request", record_request)
                for path in PAGES:
                    response = page.goto(ROOT + path, wait_until="networkidle", timeout=30000)
                    assert response is not None and response.status == 200, (
                        f"Unexpected HTTP response for {path}"
                    )
                    page.wait_for_timeout(1000)

                cookies = ctx.cookies()
                storage_keys = page.evaluate(
                    "() => ({local: Object.keys(localStorage), session: Object.keys(sessionStorage)})"
                )
                details = {
                    "viewport": name,
                    "pages": PAGES,
                    "http_status": "200 for all tested pages",
                    "request_hosts": sorted(request_hosts),
                    "cookie_names": sorted(set(c["name"] for c in cookies)),
                    "local_storage_key_names": sorted(storage_keys["local"]),
                    "session_storage_key_names": sorted(storage_keys["session"]),
                    "limits": [
                        "Production site only; platform settings require owner confirmation",
                        "Browser default context only, not all user regions or consent variants",
                        "No cookie values, request URLs or personal data retained",
                    ],
                }
                findings.append(details)
                print(json.dumps(details, ensure_ascii=False, indent=2))
                ctx.close()
        finally:
            browser.close()
    (OUTPUT / "network-cookie-inventory.json").write_text(
        json.dumps(findings, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

if __name__ == "__main__":
    run()
