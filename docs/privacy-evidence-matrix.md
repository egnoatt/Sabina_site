# Privacy — stato verifiche (15 ottobre 2026)

La versione attualmente pubblicata è una **bozza**. La PR correttiva della issue [#17](https://github.com/egnoatt/Sabina_site/issues/17) separa i fatti tecnici dalle dichiarazioni del titolare da approvare.

Per dettagli e gate vedere [privacy-release-gate.md](./privacy-release-gate.md).

| Area | Stato | Fonte |
| --- | --- | --- |
| Vercel come hosting del sito | VERIFIED | Deployment e Vercel Project |
| Email generale `sabinascat@live.com` | VERIFIED | Contatti / comunicazione owner |
| Nessun form sanitario nell'app | VERIFIED IN CODE | `src/app` |
| Banner localStorage 30 giorni | VERIFIED IN CODE | `src/components/SiteBanner.tsx` |
| Assenza SDK analytics espliciti | VERIFIED IN SOURCE ONLY | `package.json` |
| Cookie e richieste lato browser nel percorso di test | VERIFIED IN LIMITED BROWSER RUN | Chromium mobile/desktop: solo host proprio, zero cookie su fresh session; localStorage creato dopo chiusura banner. [Run #38785135545](https://github.com/egnoatt/Sabina_site/actions/runs/38785135545) |
| Analytics/cookie/requests effettivi della piattaforma | PARTIAL / ACCOUNT SETTINGS UNKNOWN | Test browser circoscritto completato; Vercel Analytics e altre opzioni account da verificare |
| Titolare privacy (identità e recapiti) | UNKNOWN | Decisione del titolare |
| Basi giuridiche / interesse legittimo | UNKNOWN | Approvazione legale |
| Retention email, log e servizi | UNKNOWN | Policy del titolare/fornitori |
| Subresponsabili, trasferimenti, DPA applicabile | UNKNOWN | Contratti effettivi |
| Diritti e canale richieste | PARTIAL | Titolare deve approvare |
| Diritti editoriali dei testi storici | OPEN / SEPARATE ISSUE | Revisione autrice |

**NON RILASCIABILE COME INFORMATIVA DEFINITIVA** finché le decisioni non sono validate.
