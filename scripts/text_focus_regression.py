"""Local Chromium text/reflow/focus probe, not WCAG or screen-reader certification.
Run after npm run build: QA_PORT=3123 python scripts/text_focus_regression.py.
Starts/stops its own localhost server. Text scaling changes root font size, not browser zoom.
Requires Python Playwright. No source mutation or third-party network requests.
"""
import json, os, signal, socket, subprocess, time, urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT = 'http://127.0.0.1:' + os.environ.get('QA_PORT', '3123')
ROUTES = ('/', '/blog', '/chi-sono', '/formazione', '/servizi', '/contatti', '/news', '/approfondimenti/clinici', '/approfondimenti/curiosita', '/blog/cosa-devi-sapere', '/privacy')
SPACING = '* {line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important} p {margin-bottom:2em!important}'
HIT = '''()=>{const e=document.activeElement,r=e.getBoundingClientRect(),h=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return {text:e.textContent.trim().slice(0,80),tag:e.tagName,visibleCenter:!!h&&(h===e||e.contains(h)),top:r.top,bottom:r.bottom}}'''
def audit():
 results=[]
 with sync_playwright() as p:
  browser=p.chromium.launch()
  for mode,width,css in [('reflow320',320,''),('spacing320',320,SPACING),('text200',1280,'html {font-size:200%!important}')]:
   context=browser.new_context(viewport={'width':width,'height':900})
   context.route('**/*',lambda r:r.continue_() if r.request.url.startswith(ROOT+'/') or r.request.url.startswith('data:') else r.abort())
   page=context.new_page()
   for route in ROUTES:
    response=page.goto(ROOT+route,wait_until='networkidle')
    if css:page.add_style_tag(content=css)
    size=page.evaluate('({viewport:innerWidth,content:document.documentElement.scrollWidth})')
    results.append({'check':mode,'route':route,'pass':response.status==200 and size['content']<=size['viewport']+1,**size})
   context.close()
  for focus_width,scale in ((320,False),(1280,False),(1280,True)):
   context=browser.new_context(viewport={'width':focus_width,'height':900});page=context.new_page()
   context.route('**/*',lambda r:r.continue_() if r.request.url.startswith(ROOT+'/') or r.request.url.startswith('data:') else r.abort())
   for route in ('/','/blog','/contatti'):
    page.goto(ROOT+route,wait_until='networkidle')
    if scale:page.add_style_tag(content='html {font-size:200%!important}')
    page.keyboard.press('Tab');skip=page.evaluate(HIT)
    results.append({'check':'skip-link-visible','route':route,'width':focus_width,'textScale':2 if scale else 1,'pass':skip['visibleCenter'] and skip['text']=='Salta al contenuto',**skip})
    page.keyboard.press('Enter');page.keyboard.press('Tab');first=page.evaluate(HIT)
    results.append({'check':'skip-advances-past-header','route':route,'width':focus_width,'textScale':2 if scale else 1,'pass':page.evaluate("!document.activeElement.closest('header')") and first['tag'] in ('A','BUTTON'),**first})
    if route=='/':
     page.keyboard.press('Tab');close=page.evaluate(HIT)
     results.append({'check':'banner-close-focus-visible-after-skip','route':route,'width':focus_width,'textScale':2 if scale else 1,'pass':close['text']=='Chiudi' and close['visibleCenter'],**close})
   context.close()
  browser.close()
 output=Path(os.environ.get('FOCUS_REPORT','artifacts/text-focus/report.json'));output.parent.mkdir(parents=True,exist_ok=True);output.write_text(json.dumps(results,indent=2)+'\n')
 failures=[r for r in results if not r['pass']]
 print(json.dumps({'checks':len(results),'failures':failures,'report':str(output)},indent=2))
 assert not failures, f'{len(failures)} failed local text/focus checks'


def main():
    port = int(os.environ.get('QA_PORT', '3123'))
    with socket.socket() as probe:
        if probe.connect_ex(('127.0.0.1', port)) == 0:
            raise RuntimeError(f'QA port {port} is occupied; choose another QA_PORT')
    output = Path('artifacts/text-focus')
    output.mkdir(parents=True, exist_ok=True)
    with (output / 'server.log').open('w') as log:
        server = subprocess.Popen(['npm', 'run', 'start', '--', '--hostname', '127.0.0.1', '--port', str(port)], stdout=log, stderr=log, start_new_session=True)
        try:
            deadline = time.monotonic() + 60
            while time.monotonic() < deadline:
                if server.poll() is not None:
                    raise RuntimeError('Local server exited before readiness; inspect server.log')
                try:
                    with urllib.request.urlopen(ROOT, timeout=2) as response:
                        if response.status == 200:
                            break
                except (OSError, urllib.error.URLError):
                    time.sleep(.25)
            else:
                raise RuntimeError('Local server did not become ready')
            audit()
        finally:
            try:
                os.killpg(server.pid, signal.SIGTERM)
            except ProcessLookupError:
                pass
            try:
                server.wait(timeout=5)
            except subprocess.TimeoutExpired:
                os.killpg(server.pid, signal.SIGKILL)
                server.wait(timeout=5)


if __name__ == '__main__':
    main()
