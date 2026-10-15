"""One-off read-only verification of the public DNS TXT verification record.

No credentials, account APIs, cookies, or private data are accessed.
Queries run from a GitHub Actions hosted runner, separate from the chat runtime.
"""
import json
import urllib.parse
import urllib.request
import dns.resolver

DOMAIN = "sabinascattola.com"
EXPECTED = "google-site-verification=NtUhyU8AZzUEBrpLJAozCQqkHBDh4Ms_MEPV22fpiYQ"

def report(name, values):
    clean = sorted(set(values))
    has = EXPECTED in clean
    print(json.dumps({"resolver": name, "query": DOMAIN, "type": "TXT",
                      "expected_google_verification_present": has,
                      "txt_values": clean}, ensure_ascii=False))
    return has

def recursive():
    answer = dns.resolver.resolve(DOMAIN, "TXT", lifetime=12)
    return [
        b"".join(item.strings).decode("utf-8", errors="replace")
        for item in answer
    ]

def doh(url):
    request = urllib.request.Request(
        url + "?" + urllib.parse.urlencode({"name": DOMAIN, "type": "TXT"}),
        headers={"accept": "application/dns-json", "user-agent": "SabinaDNSAudit/1.0"},
    )
    with urllib.request.urlopen(request, timeout=14) as response:
        obj = json.load(response)
    if obj.get("Status") != 0:
        raise RuntimeError("Resolver returned DNS status " + str(obj.get("Status")))
    return [
        (item.get("data") or "").strip('"').replace('" "', "")
        for item in obj.get("Answer", [])
        if item.get("type") == 16
    ]

def main():
    methods = [
        ("default-recursive", recursive),
        ("Google Public DNS HTTPS", lambda: doh("https://dns.google/resolve")),
        ("Cloudflare Public DNS HTTPS", lambda: doh("https://cloudflare-dns.com/dns-query")),
    ]
    positive = []
    answered = []
    for name, fn in methods:
        try:
            values = fn()
            answered.append(name)
            if report(name, values):
                positive.append(name)
        except Exception as exc:
            print(json.dumps({"resolver": name, "error": type(exc).__name__,
                              "details": str(exc)[:180]}))
    if not answered:
        raise SystemExit("INCONCLUSIVE: all resolver requests failed")
    if positive:
        print("DNS_TXT_RESULT=PASS; verification TXT found via " + ", ".join(positive))
    else:
        raise SystemExit("DNS_TXT_RESULT=FAIL; valid DNS replies, Google TXT missing/mismatched")

if __name__ == "__main__":
    main()
