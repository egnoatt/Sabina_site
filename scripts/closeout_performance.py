"""Lab diagnostics on an already-running LOCAL production build; no field CWV claims.
Usage: python scripts/closeout_performance.py http://127.0.0.1:3131
Third-party requests blocked. Browser cache disabled. 12 mobile samples, 3 per state.
"""
import gzip,json,sys,time
from pathlib import Path
from playwright.sync_api import sync_playwright
from browser_routes import local_requests_only
root=sys.argv[1]
assert root.startswith('http://127.0.0.1:')
rows=[]
with sync_playwright() as p:
 browser=p.chromium.launch()
 for route in ('/','/blog','/blog/cosa-devi-sapere'):
  for dismissed in ((False,True) if route=='/' else (False,)):
   for run in range(3):
    context=browser.new_context(viewport={'width':375,'height':812},device_scale_factor=1,is_mobile=True,has_touch=True)
    local_requests_only(context)
    if dismissed:context.add_init_script("localStorage.setItem('siteBannerDismissedUntil-v2',new Date(Date.now()+86400000).toISOString())")
    context.add_init_script("""window.__probe={lcpMs:null,layoutShiftSum:0};new PerformanceObserver(l=>{for(const e of l.getEntries())window.__probe.lcpMs=e.startTime}).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(l=>{for(const e of l.getEntries())if(!e.hadRecentInput)window.__probe.layoutShiftSum+=e.value}).observe({type:'layout-shift',buffered:true});""")
    page=context.new_page();cdp=context.new_cdp_session(page)
    cdp.send('Network.enable');cdp.send('Network.setCacheDisabled',{'cacheDisabled':True})
    cdp.send('Network.emulateNetworkConditions',{'offline':False,'latency':150,'downloadThroughput':200000,'uploadThroughput':93750})
    cdp.send('Emulation.setCPUThrottlingRate',{'rate':4})
    response=page.goto(root+route,wait_until='networkidle');page.wait_for_timeout(1000)
    data=page.evaluate("({probe:window.__probe,resources:performance.getEntriesByType('resource').filter(e=>e.initiatorType==='script'||e.initiatorType==='link').map(e=>({name:new URL(e.name).pathname,transferSize:e.transferSize,encodedBodySize:e.encodedBodySize,decodedBodySize:e.decodedBodySize}))})")
    rows.append({'route':route,'bannerDismissed':dismissed,'run':run+1,'status':response.status,**data});context.close()
 browser.close()
chunks=[]
for f in sorted(Path('.next/static').rglob('*.js')):
 b=f.read_bytes();chunks.append({'path':str(f.relative_to('.next')),'bytes':len(b),'gzipBytes':len(gzip.compress(b,mtime=0))})
Path('docs/qa/2026-10-16/performance-mobile-bundle.json').write_text(json.dumps({'method':'Chromium 148 local production build; mobile viewport375x812 DPR1, cache disabled, CDP CPU4x and network150ms/1.6Mbps down/0.75Mbps up, 3 cold contexts/state; sample at networkidle+1s. Third parties blocked. Shift sum is not session-window CLS; no INP or field data. Bundle gzip computed offline, not actual transfer encoding.','samples':rows,'buildChunks':chunks},indent=2)+'\n')
print('saved',len(rows),'samples,',len(chunks),'chunks')
