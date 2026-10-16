"""Local unthrottled diagnostic, not a field CWV/INP certification.

Run after npm run build with the same Python Playwright dependency as ux_smoke.
Third-party requests are blocked. Three cold contexts per route/state are recorded.
"""
import json
import subprocess
import signal
import os
from pathlib import Path
from playwright.sync_api import sync_playwright
from browser_routes import local_requests_only
from ux_smoke import PORT, ROOT, wait_until_ready


def main():
    output = Path('artifacts/performance')
    output.mkdir(parents=True, exist_ok=True)
    rows = []
    with (output / 'server.log').open('w') as log:
        server = subprocess.Popen(['npm', 'run', 'start', '--', '-p', PORT], stdout=log, stderr=log, start_new_session=True)
        try:
            wait_until_ready()
            with sync_playwright() as p:
                browser = p.chromium.launch()
                try:
                    for width in (375, 1280):
                        for route in ('/', '/blog', '/blog/cosa-devi-sapere'):
                            for dismissed in ((False, True) if route == '/' else (False,)):
                                for run in range(3):
                                    context = browser.new_context(viewport={'width': width, 'height': 900})
                                    local_requests_only(context)
                                    if dismissed:
                                        context.add_init_script("localStorage.setItem('siteBannerDismissedUntil-v2', new Date(Date.now()+86400000).toISOString())")
                                    context.add_init_script("""window.__probe = {lcpMs: null, layoutShiftSum: 0};
                                      new PerformanceObserver(list => { for (const e of list.getEntries()) window.__probe.lcpMs = e.startTime; }).observe({type:'largest-contentful-paint', buffered:true});
                                      new PerformanceObserver(list => { for (const e of list.getEntries()) if (!e.hadRecentInput) window.__probe.layoutShiftSum += e.value; }).observe({type:'layout-shift', buffered:true});""")
                                    page = context.new_page()
                                    response = page.goto(ROOT + route, wait_until='networkidle')
                                    assert response and response.status == 200
                                    page.wait_for_timeout(1000)
                                    values = page.evaluate('window.__probe')
                                    rows.append({'width': width, 'route': route, 'bannerDismissed': dismissed, 'run': run + 1, **values})
                                    context.close()
                finally:
                    browser.close()
            (output / 'probe.json').write_text(json.dumps({'method': 'Local Chromium, unthrottled; 3 cold contexts; 1s after networkidle; no interactions. layoutShiftSum is a diagnostic sum, not session-window field CLS. No INP measurement.', 'results': rows}, indent=2) + '\n')
            print(f'Wrote {len(rows)} diagnostic samples to {output}/probe.json')
        finally:
            os.killpg(server.pid, signal.SIGTERM)
            try:
                server.wait(timeout=5)
            except subprocess.TimeoutExpired:
                os.killpg(server.pid, signal.SIGKILL)


if __name__ == '__main__':
    main()
