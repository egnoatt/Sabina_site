# Privacy — matrice delle evidenze (Issue #20)

**Snapshot originale:** 15 ottobre 2026; **aggiornamento owner:** 16 ottobre 2026. **Stato:** REVIEW REQUIRED — non è un'attestazione di conformità legale.  
**Ambito:** sito pubblico personale `sabinascattola.com`, hosting Vercel, comunicazioni volontarie mediante contatti; nessuna attività privata attiva.

La pagina `/privacy` è **pubblicata e senza avviso DRAFT** dopo le PR #19 e #21. La versione pubblica non va confusa con una validazione sostanziale. Questo documento è il registro attuale; [gate di rilascio](./privacy-release-gate.md) e [decisioni del titolare](./privacy-owner-decision-register.md).

## Risultati accertati

| Tema | Stato | Evidenza, limiti e conseguenza |
| --- | --- | --- |
| Persona titolare | **OWNER CONFIRMED** | Dott.ssa Sabina Scattola. Un sito personale non è automaticamente esente da GDPR per i trattamenti diretti al pubblico. |
| Attività | **OWNER CONFIRMED** | Attività privata chiusa, non sospesa; nessuna P.IVA attiva; sito informativo, non raccoglie prenotazioni. |
| Recapiti | **CONFIRMED** | Recapito generale su `/contatti` anche per richieste privacy; niente casella dedicata obbligatoria. Procedura operativa di risposta ancora da definire. |
| Hosting | **VERIFIED** | Vercel Project `sabina-site`; workspace con piano **Pro** (API account), CDN/dominio personalizzato. |
| Relazione contrattuale effettiva | **OPEN** | Il progetto Vercel risiede in un workspace tecnico; titolare dichiarata è Sabina. Da chiarire titolarità dell'accordo, ruolo dell'amministratore e relazione contrattuale tra eventuali soggetti. |
| Vercel DPA | **PROVIDER-DOCUMENTED / ACCOUNT APPLICATION OPEN** | La DPA Vercel pubblica è prevista per Pro/Enterprise e tratta separatamente Customer Data e Service-Generated Data. Confermare applicabilità e catena controller/processor allo specifico rapporto contrattuale; non dedurla solo dal piano. [Vercel DPA](https://vercel.com/legal/dpa). |
| Fornitori subordinati | **PROVIDER LIST AVAILABLE / ACCOUNT VALIDATION OPEN** | Vercel rinvia a [security.vercel.com](https://security.vercel.com) per la lista subprocessor. Ruoli/paesi e trasferimenti per il caso concreto ancora da documentare. |
| Web Analytics | **VERIFIED DISABLED** | L'API Vercel `count_pageviews` sul progetto restituisce `400 web_analytics_not_enabled`. Non è necessario abilitarlo per verifiche privacy. |
| Analytics e tracker nel codice | **VERIFIED IN CODE** | Assenza `@vercel/analytics`, `@vercel/speed-insights` e SDK analytics espliciti in `package.json`; nessuna forma d'intake clinico nelle route. Altre configurazioni future richiedono nuova verifica. |
| Cookie e reti nei browser testati | **OBSERVED LIMITED SCOPE** | [Run Chromium #38785135545](https://github.com/egnoatt/Sabina_site/actions/runs/38785135545), home/privacy/contatti, mobile/desktop: zero cookie in sessioni nuove, solo host del sito, nessun endpoint tracking esterno osservato. Non certifica ogni browser/percorso. |
| LocalStorage | **VERIFIED IN CODE/BROWSER** | `siteBannerDismissedUntil-v2` appare solo dopo scelta di chiudere il banner; durata di efficacia 30 giorni. Non significa che i log/server abbiano retention 30 giorni. |
| Funzioni di contatto | **VERIFIED IN CODE** | Solo collegamento `mailto:`; nessun modulo web per appuntamenti o dati sanitari. I contenuti delle email ricevute sono un trattamento distinto. |
| Casella email | **OWNER CONFIRMED / PROVIDER POLICY** | `sabinascat@live.com`, servizio Outlook.com consumer secondo informativa Microsoft. Il proprietario riferisce ora che **Sabina cancella le email ricevute**; tempi e modalità della cancellazione non confermati. [Microsoft Privacy](https://www.microsoft.com/it-it/privacy/privacystatement). |
| Retention dei messaggi della titolare | **PRACTICE OWNER-REPORTED / CRITERION OPEN** | **16 ottobre 2026 — conferma del proprietario:** «Sabina cancella le email». È chiarita la pratica generale di cancellazione, **non** il momento (dopo risposta / periodicamente / altro), né la cancellazione da cestino, backup o provider. Non inventare una durata. Resta da concordare un criterio effettivamente applicato e gestibile. |
| Retention tecnica Vercel | **PARTIAL / BLOCKING** | [Vercel Runtime Logs](https://vercel.com/docs/logs/runtime) indica **1 giorno** di retention runtime sul piano Pro standard e **30 giorni** con Observability Plus; la presenza dell'add-on nel workspace non è verificata. Questo limite di visibilità dei *runtime logs* **non descrive necessariamente tutti i log CDN/rete, build log o service-generated data**. Nessun drain configurato. [Shared responsibility](https://vercel.com/docs/security/shared-responsibility). |
| Log Drains e project connectors | **VERIFIED NONE** | API Vercel: `list_drains(projectId)` vuoto, `list_project_connector_connections` vuoto. La mancata presenza non esclude subprocessor della piattaforma o destinatari della posta elettronica. |
| Base giuridica per navigazione/sicurezza | **CANDIDATE, NOT APPROVED** | Art. 6(1)(f) GDPR (legittimo interesse alla sicurezza e alla fruizione tecnica), da valutare e documentare con relativo bilanciamento. Non attribuire una base a Vercel automaticamente. |
| Base giuridica per comunicazioni volontarie | **CANDIDATE, NOT APPROVED** | Art. 6(1)(f) per gestire e rispondere a contatti generali, previa valutazione. Art. 6(1)(b) non si presume quando non esiste offerta di prestazioni private. Il solo invio di un'email non equivale automaticamente a consenso GDPR. |
| Richieste diritti privacy | **CANDIDATE, NOT APPROVED** | Gestione degli adempimenti ex GDPR può poggiare su art. 6(1)(c), dove pertinente. Canale via Contatti confermato; tempi operativi e workflow da formalizzare. |
| Trasferimenti fuori SEE | **UNKNOWN / BLOCKING** | Verificare ruoli/paesi e garanzie concretamente applicabili a Vercel, subprocessor e servizio Microsoft consumer, evitando l'affermazione generica «nessun trasferimento». |
| Diritti degli interessati | **PARTIAL** | Pagina pubblica rinvia ai Contatti e al Garante; procedura di risposta e completezza art. 13 ancora da validare. |
| Revisione editoriale/diritti d'autore | **OUT OF SCOPE** | Tracciamento editoriale separato; non confondere con il completamento privacy. |

## Gap della pagina pubblica `/privacy` (non risolti solo eliminando il banner)

1. Non indica una base giuridica **approvata** distinta per navigazione, comunicazioni e richieste privacy.
2. Indica la conservazione «secondo impostazioni e criteri dei servizi»: art. 13 richiede la durata o, se impossibile, i criteri **effettivi** per ogni categoria di dati.
3. Nomina Vercel e il provider email in forma generica senza convalidare categorie di destinatari, responsabilità contrattuali e informazioni sui trasferimenti.
4. Il fatto che Web Analytics sia disattivato e il sito sia minimale semplifica la parte cookie, ma non prova l'assenza di trattamento IP/log da parte della rete.

## Riferimenti normativi e provider

- [GDPR artt. 6, 12–13, 28](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita)
- [Garante — Cookie e strumenti di tracciamento](https://www.garanteprivacy.it/faq/Cookie)
- [Vercel — Data Processing Addendum](https://vercel.com/legal/dpa)
- [Vercel — Runtime Logs, limiti di retention](https://vercel.com/docs/logs/runtime)
- [Vercel — Observability Plus](https://vercel.com/docs/observability/observability-plus)
- [Vercel — Shared Responsibility](https://vercel.com/docs/security/shared-responsibility)
- [Microsoft — Informativa privacy](https://www.microsoft.com/it-it/privacy/privacystatement)

**Decisione di governance:** questa analisi è documentale e non modifica produzione o dichiarazioni pubbliche. Verifiche normative e owner sign-off prima di qualsiasi aggiornamento dichiarato «definitivo».
