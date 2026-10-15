# Release & chat closeout — SabinaScattola.com

**Data:** 15 ottobre 2026 · **Natura:** nota di rilascio pubblica, senza informazioni riservate.

## Obiettivo della sessione

Migliorare affidabilità tecnica, SEO, navigazione mobile e accessibilità del sito informativo; predisporre la revisione privacy/editoriale; registrare la baseline visuale per cambi futuri.

## Cambiamenti già integrati e pubblicati

| PR | Stato | Evidenza |
| --- | --- | --- |
| [#10 — SEO & quality](https://github.com/egnoatt/Sabina_site/pull/10) | MERGED | Sitemap articoli, meta per post, canonical sul dominio `www`, test in CI |
| [#12 — UX & Design System](https://github.com/egnoatt/Sabina_site/pull/12) | MERGED | Header responsive, banner mobile, palette e tipografia, browser smoke 320/375/768/1280 |
| [#15 — Landmark accessibility](https://github.com/egnoatt/Sabina_site/pull/15) | MERGED | Unico `main#main`, skip link mantenuto, browser/landmark smoke su sitemap e 404 |

Produzione osservata su **https://www.sabinascattola.com**, Vercel `sabina-site`. L'ultima integrazione tecnica della sessione è `e86c25fc72de674acd4dd2f3db63f4689d595de7` (PR #15). Verificare il commit Production effettivo a ogni nuova pubblicazione.

## Design baseline

Il riferimento versionato è [Design System v1.0](../design-system.md). I token CURRENT sono su `tailwind.config.js`; tipografia OpenSans locale su `globals.css`. La pagina di design è una specifica **descrittiva**: un redesign futuro richiede nuova proposta, screenshot e verifiche.

## In corso / non approvato

- [PR #11 — Privacy & Editorial](https://github.com/egnoatt/Sabina_site/pull/11): **DRAFT / BLOCKED**. Preparati inventario e struttura articolo 13 GDPR in bozza; nessun merge automatico. Mancano conferma del titolare, retentions, fornitori, diritti, cookie/analytics e validazione editoriale di Sabina. Non dichiarare conformità GDPR o pubblicare una bozza incompleta.
- [Issue #13 — Dominio apex](https://github.com/egnoatt/Sabina_site/issues/13): **DEFERRED** per volontà del proprietario. È stato riferito un trasferimento del registrar da SiteGround a fornitore non ancora confermato; i nameserver visibili in Vercel possono rimanere SiteGround. Nessuna modifica DNS richiesta.
- [Issue #14 — Landmark](https://github.com/egnoatt/Sabina_site/issues/14): **CLOSED**, risolta con PR #15.

## Evidenze e limiti

- CI automatizzate GitHub verdi per PR integrate.
- Smoke test responsive su 320/375/768/1280; menu e assenza di overflow.
- Pagine SEO e canonical verificati; sitemap e 404 controllati.
- Nessuna attestazione di audit WCAG completo, analisi Core Web Vitals o conformità legale definitiva.
- Nessuna modifica DNS, gestione email o trasferimento dominio in questa sessione.

## Condizioni per riprendere il lavoro

1. **Privacy:** convalidare `docs/privacy-evidence-matrix.md` nella PR #11, approvare testi e verificare le condizioni di pubblicazione.
2. **Editoriale:** confermare copyright e aggiornamento scientifico dei contenuti storici, senza riscrittura automatica non approvata.
3. **Dominio:** identificare il nuovo registrar e chi gestisce il DNS; intervenire solo a fronte di autorizzazione separata.
4. **Evoluzione grafica:** partire da `docs/design-system.md`, creare candidate e review senza alterare silenziosamente la baseline.

**Decisione di closeout:** sessione tecnica/documentale registrata; attività aperte tracciate su GitHub. Closeout di documentazione non equivale alla chiusura della PR #11 o della issue #13.
