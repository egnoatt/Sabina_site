# Issue #20 — Decision register per Sabina Scattola

**Data:** 15 ottobre 2026. **Stato:** OWNER REVIEW REQUIRED — non contiene autorizzazioni presunte.  
Scopo: completare il testo GDPR senza duplicare gli indirizzi email sul sito o riscrivere pagine già pubblicate senza evidenze.

## Decisioni già confermate

- [x] Sabina Scattola è la titolare per il sito personale.
- [x] Attività privata definitivamente chiusa, nessuna P.IVA attiva, nessuna prenotazione.
- [x] Recapiti pubblici raggruppati nella pagina `/contatti`, utilizzati anche per le richieste privacy.
- [x] Sito ospitato su Vercel e casella generale `@live.com` (non casella sul dominio).

## Decisioni richieste alla titolare prima di chiudere la #20

### DR-01 — Politica concreta per le email ricevute — BLOCKING
**Da confermare con Sabina:**
- I messaggi ordinari vengono normalmente cancellati dopo la risposta, archiviati, oppure conservati senza routine di cancellazione?
- Definire un **termine o criterio** di cancellazione effettivamente attuabile (non inventare un periodo).
- Per email involontariamente contenenti dati sanitari: definire gestione prudente e non trattare come richieste cliniche.
- Eventuali eccezioni per contestazioni/obblighi legali devono essere approvate, senza inventare categorie.

### DR-02 — Basi giuridiche dei trattamenti — BLOCKING
**Candidate, non verificate né automaticamente applicabili:**
- Navigazione tecnica / sicurezza del sito: valutare art. 6(1)(f) e documentare l'interesse legittimo concreto e il bilanciamento.
- Contatti email generali: valutare art. 6(1)(f) per ricevere/rispondere, con valutazione appropriata; non chiamare «consenso» l'email spontanea.
- Richieste privacy: art. 6(1)(c) per la parte strettamente necessaria all'adempimento di obblighi legali, se confermato.
- Se emergessero dati di categorie particolari (es. dati sanitari non richiesti) servirà considerare separatamente art. 9 e minimizzazione.

**Gate:** validazione della titolare, preferibilmente con consulente GDPR, prima del rilascio.

### DR-03 — Hosting, responsabilità e contratti — BLOCKING
Il sito è su Vercel **Pro** (verificato per il workspace tecnico) mentre il titolare indicato è Sabina. Chiarire chi sottoscrive il servizio, eventuale rapporto tra manutentore e titolare, responsabilità del trattamento, accessi ai dati e istruzioni; verifica contrattuale DPA dove applicabile.

Vercel pubblica [DPA per Pro/Enterprise](https://vercel.com/legal/dpa), ma l'applicazione al rapporto specifico va confermata. Subprocessor e trasferimenti: consultare [security.vercel.com](https://security.vercel.com) e documentare le categorie pertinenti. Per Microsoft Live.com consumer consultare le [informazioni privacy Microsoft](https://www.microsoft.com/it-it/privacy/privacystatement); **non assumere automaticamente** che Microsoft sia un responsabile ex art. 28 con DPA business.

### DR-04 — Log e tempi — BLOCKING
- I log CDN/sicurezza che Vercel tratta per conto del servizio non sono uguali alla preferenza di banner 30 giorni.
- Nessun drain Vercel attivo: non è prova dell'assenza di log.
- Richiedere/chiarire retention tecnica applicabile al piano/account/servizio, o quantomeno **criterio reale** di conservazione da descrivere nell'informativa.
- Valutare accesso log e configurazione secondo principio di minimizzazione.

### DR-05 — Strumenti di misurazione — PARZIALMENTE RISOLTO
- [x] `count_pageviews` API Vercel restituisce `web_analytics_not_enabled`: Web Analytics **disattivato**.
- [x] Nessun SDK tracciamento esplicito nel repo; nessun cookie/tracker nelle sessioni browser campionate; localStorage solo dopo scelta utente.
- [ ] Confermare che Speed Insights o altri prodotti non siano stati attivati al di fuori della configurazione del codice e rieseguire i test in caso di nuove integrazioni.

### DR-06 — Diritti e risposta operativa — BLOCKING
- La pagina Contatti è il canale indicato anche per i diritti privacy.
- Definire chi prende in carico le richieste e come viene rispettato il termine normalmente previsto dall'art. 12(3) GDPR; definire identificazione proporzionata, risposta e cancellazione dati di lavorazione.
- Eventuale DPO va indicato soltanto se effettivamente nominato o obbligatorio.

## Regola di rilascio

Non modificare in produzione la pagina privacy né chiudere la issue finché DR-01/02/03/04/06 non sono verificati. Dopo approvazione creare PR dedicata per il testo esatto, con QA e review. La conclusione legale non si può dedurre dal verde della CI.

## Fonti
- [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita)
- [Vercel DPA](https://vercel.com/legal/dpa)
- [Microsoft privacy](https://www.microsoft.com/it-it/privacy/privacystatement)
