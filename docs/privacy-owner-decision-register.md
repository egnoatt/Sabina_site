# Issue #20 — Decision register per Sabina Scattola

**Data iniziale:** 15 ottobre 2026. **Aggiornamento dichiarazione owner:** 16 ottobre 2026. **Stato:** OWNER REVIEW REQUIRED — non contiene autorizzazioni presunte.  
Scopo: completare il testo GDPR senza duplicare gli indirizzi email sul sito o riscrivere pagine già pubblicate senza evidenze.

## Decisioni già confermate

- [x] Sabina Scattola è la titolare per il sito personale.
- [x] Attività privata definitivamente chiusa, nessuna P.IVA attiva, nessuna prenotazione.
- [x] Recapiti pubblici raggruppati nella pagina `/contatti`, utilizzati anche per le richieste privacy.
- [x] Sito ospitato su Vercel e casella generale `@live.com` (non casella sul dominio).

## Decisioni richieste alla titolare prima di chiudere la #20

### DR-01 — Criterio di conservazione delle email — OWNER CONFIRMED

**Conferma del proprietario, 16 ottobre 2026:**
- [x] Sabina cancella le email cui risponde **subito dopo aver risposto**.
- [x] Effettua una **pulizia mensile**, che include anche le email alle quali non ha risposto.
- [x] Il criterio dichiarato è quindi: eliminazione dopo risposta e revisione/cancellazione mensile della posta residua.

**Distinzioni operative:** queste indicazioni descrivono la pratica di Sabina, non i tempi di eliminazione dal Cestino, dalle copie o dai backup del provider Microsoft. In presenza di eventuali dati sanitari ricevuti spontaneamente occorre seguire una gestione prudente, senza avviare trattamenti clinici sul sito.

**Gate:** criterio della titolare documentato; resta la convalida del testo pubblico e delle eventuali eccezioni motivate.

### DR-02 — Basi giuridiche dei trattamenti — BLOCKING
**Candidate, non verificate né automaticamente applicabili:**
- Navigazione tecnica / sicurezza del sito: valutare art. 6(1)(f) e documentare l'interesse legittimo concreto e il bilanciamento.
- Contatti email generali: valutare art. 6(1)(f) per ricevere/rispondere, con valutazione appropriata; non chiamare «consenso» l'email spontanea.
- Richieste privacy: art. 6(1)(c) per la parte strettamente necessaria all'adempimento di obblighi legali, se confermato.
- Se emergessero dati di categorie particolari (es. dati sanitari non richiesti) servirà considerare separatamente art. 9 e minimizzazione.

**Gate:** validazione della titolare, preferibilmente con consulente GDPR, prima del rilascio.

### DR-03 — Hosting, responsabilità e contratti — VERBAL AGREEMENT CONFIRMED / WRITTEN FORM OPEN

**Conferma del proprietario del 16 ottobre 2026:**
- [x] Il sito di Sabina è ospitato nel **proprio account Vercel** del gestore tecnico, che **paga il servizio**.
- [x] Il gestore tecnico amministra il sito e l'hosting **per conto di Sabina**.
- [x] La titolare del trattamento per il sito resta la Dott.ssa Sabina Scattola; intestatario/pagante del servizio hosting e titolare privacy non coincidono.

**Da confermare, senza dedurre automaticamente qualifiche dalla titolarità del conto:**
- [x] **Accordo attuale soltanto verbale**, confermato dal proprietario il 16 ottobre 2026: non è stato riferito un documento sottoscritto.
- [ ] **Valutare la qualifica effettiva del gestore** in base ad accessi ai dati personali, attività affidate, finalità e mezzi decisi da Sabina. La proprietà e il pagamento di Vercel, da soli, non comportano automaticamente una designazione GDPR.
- [ ] **Formalizzare per iscritto il perimetro operativo**: manutenzione del sito, accessi ai log e al progetto, istruzioni e autorizzazioni, gestione incidenti, riservatezza e regole alla cessazione.
- [ ] Se il gestore tratta dati personali **per conto** di Sabina come responsabile, predisporre e sottoscrivere un accordo vincolante ai sensi dell'**art. 28(3) e (9) GDPR** (anche in formato elettronico), con subresponsabili e autorizzazioni pertinenti; l'accordo esclusivamente verbale non soddisferebbe tale requisito.
- [ ] Stabilire se e a quali dati personali il gestore abbia effettivamente accesso, chi definisce finalità e mezzi, e documentare le istruzioni ove necessarie.
- [ ] Verificare applicabilità al rapporto contrattuale concreto delle condizioni e della [DPA Vercel](https://vercel.com/legal/dpa), inclusa l'eventuale catena di responsabili/sub-responsabili.
- [ ] Verificare [subprocessor Vercel](https://security.vercel.com) e trasferimenti/garanzie effettivamente applicabili.
- [ ] Per l'indirizzo Live.com consumer, applicare [l'informativa Microsoft](https://www.microsoft.com/it-it/privacy/privacystatement) senza presumere un DPA business o una qualifica ex art. 28 già accertata.

**Gate:** relazione economico-tecnica e natura **solo verbale** dell'accordo confermate; qualifica GDPR, accessi effettivi e relativa formalizzazione ancora da validare. Riferimenti: [art. 28 GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita) e [linee guida EDPB 07/2020](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_it).

### DR-04 — Log e tempi — BLOCKING
- I log CDN/sicurezza che Vercel tratta per conto del servizio non sono uguali alla preferenza di banner 30 giorni.
- Nessun drain Vercel attivo: non è prova dell'assenza di log.
- Il [documento Runtime Logs](https://vercel.com/docs/logs/runtime) indica **1 giorno sul Pro standard**, e 30 giorni con Observability Plus. **Add-on non verificato**; il limite runtime non copre per definizione tutte le possibili categorie di dati tecnici della piattaforma.
- Richiedere/chiarire retention tecnica applicabile al piano/account/servizio, incluso CDN/service-generated data, o quantomeno il **criterio reale** di conservazione da descrivere nell'informativa.
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
