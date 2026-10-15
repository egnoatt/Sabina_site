# Release & chat closeout — SabinaScattola.com

**Data:** 15 ottobre 2026 · **Natura:** nota di rilascio pubblica, senza informazioni riservate.

**Aggiornamento successivo:** vedere l'addendum in fondo a questa nota per lo stato del registrar Namecheap e della PR privacy #11.

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

## In corso / non approvato — snapshot prima dei merge successivi

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


## Addendum — 15 ottobre 2026, aggiornamento di stato

- **Registrar del dominio `sabinascattola.com`: Namecheap**, confermato dal proprietario indicando il portale [Namecheap](https://ap.www.namecheap.com). Il trasferimento da SiteGround è dichiarato completato, senza dettagli disponibili su data o operazione contrattuale.
- **Provider DNS / nameserver:** distinto dal registrar. Vercel continua a rilevare `ns1.siteground.net` e `ns2.siteground.net` al controllo del 15 ottobre; non è verificato chi oggi abbia il controllo effettivo della zona. Il dominio apex senza `www` risulta non configurato su Vercel. Nessun cambio DNS, NS o redirect è stato eseguito. Attività **rinviata** in [issue #13](https://github.com/egnoatt/Sabina_site/issues/13).
- **PR #11 Privacy & Editorial:** successivamente al closeout originale, l'utente ha effettuato il [merge della PR #11](https://github.com/egnoatt/Sabina_site/pull/11) (`f220a4a5d5bda872b4edf52abe9a69a69773c82d`), con deploy Vercel `READY`. La pagina privacy pubblicata contiene **ancora una bozza esplicitamente in revisione** e richiede integrazioni GDPR documentate in [issue #17](https://github.com/egnoatt/Sabina_site/issues/17). Merge tecnico e conformità privacy sono fatti distinti.
- **Design System:** baseline disponibile in [`docs/design-system.md`](../design-system.md), invariata; nessun redesign introdotto con questo addendum.

**Stato del closeout:** i lavori tecnici completati restano registrati; DNS e informativa definitiva sono open action tracciate, non chiuse.


---

## Addendum di chiusura grafica — Essenza v2.0 (15 ottobre 2026)

> I paragrafi precedenti sono **snapshot storici**. Questo addendum aggiorna lo stato del Design System e riporta i collegamenti alle azioni successive.

- **[PR #23](https://github.com/egnoatt/Sabina_site/pull/23) MERGED**, commit \`524eeea78c570c6ab90f07355e52d7baa367fa71\`; Vercel Production **READY**.
- **Homepage Essenza** e **template editoriale degli articoli** pubblicati; testo dei Markdown invariato; nuovi token cromatici e font-display Georgia di sistema.
- [Design System v2.0 CURRENT](../design-system.md) per le due superfici effettivamente implementate; header/footer, indice Blog e pagine interne restano nello stile precedente finché non migrati con PR.
- CI, test responsive 320/375/768/1280, landmark e campione axe-core PASS. **Non equivale** ad audit WCAG completo o Core Web Vitals.
- Privacy: [PR #19](https://github.com/egnoatt/Sabina_site/pull/19) e [#21](https://github.com/egnoatt/Sabina_site/pull/21) pubblicate; [issue #20](https://github.com/egnoatt/Sabina_site/issues/20) aperta per dati sostanziali GDPR.
- DNS: Namecheap/Vercel operativo; [issue #13](https://github.com/egnoatt/Sabina_site/issues/13) contiene verifiche residue su TXT Google e altri record.
- La [PR #22](https://github.com/egnoatt/Sabina_site/pull/22) è documentazione candidata A/B non integrata, storicamente precedente alla decisione Essenza.

**Decisione:** promuovere documentalmente alla v2.0 soltanto il codice già pubblicato; conservare l'archivio storico senza riscriverne gli snapshot.
