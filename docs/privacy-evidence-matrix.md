# Privacy — evidence matrix (15 ottobre 2026)

**Status:** DRAFT / NOT APPROVED / NOT DEPLOYABLE. This is a public, non-confidential checklist for owner/legal review. No user-submitted health information or credentials are stored in this document.

| Topic | Evidence or current finding | Status | Owner action |
| --- | --- | --- | --- |
| Informational positioning | `src/config/professionalStatus.ts` specifies private practice suspended; website is informational | VERIFIED_IN_CODE | Confirm wording with Sabina |
| Hosting | Git-connected Vercel project `sabina-site` serves `www.sabinascattola.com` | VERIFIED | Confirm contract, privacy role and subcontractor disclosures |
| Forms / bookings | No contact or medical intake forms in current site source | VERIFIED_IN_CODE | Check any separately connected services |
| Email | A general contact `mailto:` is published on the site | VERIFIED_IN_CODE | Confirm identity, mailbox provider, retention and incoming messages |
| Local browser storage | `SiteBanner.tsx` stores `siteBannerDismissedUntil-v2`, ISO expiry up to 30 days, using localStorage | VERIFIED_IN_CODE | Confirm legal classification under current guidance |
| Cookies / measurement | No explicit analytics packages in `package.json` or analytics code in inspected components | PARTIAL | Audit cookies and third-party requests on production browsers; confirm Vercel Analytics project settings |
| Server / CDN access logs | Hosting can process IP and request metadata | OPERATIONAL_EXPECTATION | Confirm actual log types, retention, security, geography and recipients |
| External links | Facebook / Google Maps appear as links, not confirmed embedded trackers | VERIFIED_IN_CODE | Validate URLs and any further embeds |
| Data controller | Profile name is visible; it has not been verified as the GDPR controller | UNKNOWN | Approve controller identity, physical/contact details, any DPO |
| Legal basis | Not validated | UNKNOWN | Determine purposes and legal bases for email/technical logs |
| Retention | Banner expiry known; server and email retention not verified | PARTIAL | Define or substantiate each category |
| Transfers / processors | Provider subcontractors and cross-border transfers have not been reviewed | UNKNOWN | Verify contractual annexes, legal transfer mechanism where applicable |
| Rights & complaints | GDPR rights are known but the response mechanism is not approved | PARTIAL | Confirm channel and response procedure |
| Editorial copyright | Articles credited to external media, author permissions unverified | OPEN | Sabina to establish rights, replace content if needed |

## Release gate (ALL required before merging PR #11)

- [ ] Owner explicitly approves the full privacy notice with accurate controller information and GDPR Article 13 disclosures.
- [ ] Confirm Vercel/mail provider reality, retention, recipients/subprocessors and cross-border transfers.
- [ ] Check live cookies/localStorage/third-party requests on desktop and mobile and whether a consent mechanism is needed.
- [ ] Confirm the footer contact details and Facebook handle.
- [ ] Confirm reproduction rights and review clinical statements or split that editorial work into a separate PR.
- [ ] Remove every DRAFT label/placeholder from the visitor-facing copy **only after** underlying data is confirmed.
- [ ] CI, preview and technical review PASS; explicit release decision.

Official references:
- [GDPR, Art. 13](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [Garante: Linee guida cookie e strumenti di tracciamento](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876)

No DNS or domain registrar changes are in scope.
