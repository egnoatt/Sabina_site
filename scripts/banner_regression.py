"""Local storage/prepaint regression with the checked-in Vercel CSP applied."""
import json
import subprocess
import signal
import os
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
from browser_routes import local_requests_only
from ux_smoke import PORT, ROOT, wait_until_ready


def check(browser, width, state, csp):
    context = browser.new_context(viewport={'width': width, 'height': 900}, java_script_enabled=state != 'no-js')
    local_requests_only(context)
    def document_headers(route):
        response = route.fetch()
        route.fulfill(response=response, headers={**response.headers, 'content-security-policy': csp})
    context.route(ROOT + '/', document_headers)
    if state == 'valid':
        context.add_init_script("localStorage.setItem('siteBannerDismissedUntil-v2',new Date(Date.now()+86400000).toISOString())")
    elif state in ('expired', 'malformed'):
        value = '2000-01-01T00:00:00.000Z' if state == 'expired' else 'not-a-date'
        context.add_init_script(f"localStorage.setItem('siteBannerDismissedUntil-v2', {json.dumps(value)})")
    elif state == 'blocked':
        context.add_init_script("Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Blocked','SecurityError')}})")
    page = context.new_page()
    errors = []
    page.on('console', lambda msg: errors.append(msg.text) if msg.type == 'error' else None)
    page.on('pageerror', lambda error: errors.append(str(error)))
    response = page.goto(ROOT, wait_until='networkidle')
    assert response and response.status == 200
    banner = page.locator('.site-banner')
    if state == 'valid':
        expect(banner).to_have_count(0)
        positions = page.evaluate("""() => ({main: document.querySelector('main').getBoundingClientRect().top,
            hero: document.querySelector('main section').getBoundingClientRect().top})""")
        assert abs(positions['hero'] - positions['main']) < 2, positions
    else:
        expect(banner).to_be_visible()
    if state == 'blocked':
        page.get_by_role('button', name='Chiudi avviso').click()
        expect(banner).to_have_count(0)
        page.reload(wait_until='networkidle')
        expect(banner).to_be_visible()
    assert not errors, errors
    context.close()
    return {'width': width, 'state': state, 'consoleErrors': errors, 'passed': True}


def main():
    csp = next(h['value'] for entry in json.loads(Path('vercel.json').read_text())['headers']
               for h in entry['headers'] if h['key'] == 'Content-Security-Policy')
    output = Path('artifacts/banner')
    output.mkdir(parents=True, exist_ok=True)
    with (output / 'server.log').open('w') as log:
        server = subprocess.Popen(['npm','run','start','--','-p',PORT], stdout=log, stderr=log, start_new_session=True)
        try:
            wait_until_ready()
            with sync_playwright() as p:
                browser = p.chromium.launch()
                try:
                    rows = [check(browser, width, state, csp) for width in (375,1280)
                            for state in ('absent','valid','expired','malformed','blocked','no-js')]
                finally:
                    browser.close()
            (output / 'report.json').write_text(json.dumps({'csp':csp,'checks':rows}, indent=2)+'\n')
            print(f'PASS {len(rows)} banner cases with configured CSP; no console/hydration errors')
        finally:
            os.killpg(server.pid, signal.SIGTERM)
            try:
                server.wait(timeout=5)
            except subprocess.TimeoutExpired:
                os.killpg(server.pid, signal.SIGKILL)


if __name__ == '__main__':
    main()
