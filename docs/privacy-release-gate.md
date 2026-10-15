# Privacy — gate di rilascio (Issue #17)

**Stato:** TECHNICAL DRAFT / OWNER & LEGAL SIGN-OFF REQUIRED.  
**Aggiornato:** 15 ottobre 2026. Nessuna modifica ai DNS. Non pubblicare la PR prima di completare e verificare la scheda.

## Evidenze verificate

| Voce | Evidenza | Esito |
| --- | --- | --- |
| Sito | `www.sabinascattola.com` distribuito da Vercel, Next.js e Vercel Project `sabina-site` | VERIFIED |
| Stato del servizio | Il proprietario conferma attività privata definitivamente chiusa, nessuna partita IVA attiva, sito personale non commerciale; testi del sito aggiornati nella PR | OWNER CONFIRMED + UPDATED IN PR |
| Contatti e privacy | L'owner conferma Sabina Scattola quale titolare GDPR e preferisce rimandare alla pagina Contatti anche per i diritti, senza ripetere l'email nell'informativa | OWNER CONFIRMED + LINKED |
| Moduli | Nessuna form di registrazione/prenotazione/intake sanitario nell'app attuale | VERIFIED IN CODE |
| Storage banner | Chiave `siteBannerDismissedUntil-v2`, con scadenza di 30 giorni tramite `localStorage` | VERIFIED IN CODE |
| Librerie analytics | Assenza di SDK analytics/tracking espliciti in `package.json` e nei componenti esaminati | VERIFIED IN SOURCE ONLY |
| Analytics piattaforma / cookie live | La lettura HTML e dell'app non dimostra impostazioni account o browser in ogni contesto | UNKNOWN / REQUIRE BROWSER AUDIT |
| Hosting/Vercel | Piattaforma identificata; i contratti privacy e sottoprocessori specifici dipendono da piano e condizioni effettive | CONTRACT UNVERIFIED |
| Mail | Indirizzo Live.com, provider contrattuale e retention non verificati | PARTIAL |
| SEO/domains | Redirect apex → www, Namecheap gestisce nameserver | NOT PERSONAL DATA POLICY |

## Informazioni e decisioni necessarie al titolare

- [x] **Titolare GDPR:** Dott.ssa Sabina Scattola, confermato dall'owner del progetto; inserito nell'informativa, non confondere con webmaster.
- [x] **Canale richieste privacy:** stessa pagina Contatti usata per comunicazioni generali, come richiesto dall'owner; nessuna duplicazione email nella pagina Privacy. La gestione delle richieste rimane da organizzare operativamente. Un DPO va indicato solo se applicabile.
- [ ] **Basi giuridiche:** approvare, per ogni finalità, base articolo 6 (navigazione/sicurezza, risposte ai messaggi e altri eventuali trattamenti) e l'eventuale legittimo interesse.
- [ ] **Conservazione log:** identificare livello di piano Vercel, log accessibili, categorie di dati, retention effettiva e destinatari.
- [ ] **Conservazione email:** definire durata o criterio di cancellazione dei messaggi, e procedure per richieste di cancellazione.
- [ ] **Fornitori e trasferimenti:** verificare ruolo Vercel e provider email, DPA applicabile al contratto effettivo, subprocessor list, trasferimenti SEE/extra SEE e garanzie applicabili.
- [ ] **Cookie e strumenti di misura:** validare configurazione Vercel Web Analytics/Speed Insights ed eventuali strumenti gestiti dall'account; verificare nel browser requests, cookies e storage prima/dopo la visita con più sessioni.
- [ ] **Diritti:** approvare canale, processo interno e comunicazione degli interessati.
- [ ] **Contenuti:** verificare che nessun flusso distinto raccolga dati sanitari tramite sito. Copyright e testi clinici restano un filone separato.

## Gate tecnico / pubblicazione

- [ ] Tutti gli UNKNOWN sopra risolti con evidenze, non con ipotesi.
- [ ] Aggiornare la pagina `src/app/privacy/page.tsx` con i dati finali e rimuovere frasi provvisorie **solo dopo** approvazione.
- [ ] Verificare struttura informativa ex artt. 12–13 GDPR con professionista competente; non dichiarare conformità automaticamente.
- [ ] CI build, lint, typecheck, test; QA browser e verifica preview.
- [ ] Review esplicita del proprietario per il rilascio, quindi merge; verifica Production.

## Riferimenti

- [Regolamento UE 2016/679 — testo ufficiale](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [Garante — Linee guida cookie e altri strumenti di tracciamento](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876)
- [Vercel — Data Processing Addendum](https://vercel.com/legal/dpa) (verificare applicabilità in base al piano reale)

**Nota:** La PR #11 è stata già integrata e ha pubblicato una bozza; questa PR correttiva non è un'autorizzazione a rendere definitiva la privacy senza i dati mancanti.

## Test browser ripetibile — evidenza osservata (15 ottobre 2026)

Workflow GitHub [Privacy browser inventory — run #38785135545](https://github.com/egnoatt/Sabina_site/actions/runs/38785135545) contro **Production**, Chromium headless in contesto nuovo, viewport 375 e 1280 px, visitando `/`, `/privacy`, `/contatti`:

- [x] HTTP 200 per tutte le pagine visitate.
- [x] Host delle richieste osservate: solo `www.sabinascattola.com`.
- [x] Cookie rilevati all'arrivo: nessuno. Session/local storage iniziale: vuoto.
- [x] Dopo clic su «Chiudi avviso»: presente unicamente `localStorage.siteBannerDismissedUntil-v2` (nome chiave, nessun valore registrato).
- [x] Nessuna richiesta a terzi rilevata durante le sessioni testate.

**Limite:** il test non certifica tutte le possibili regioni, browser, impostazioni Vercel, servizi attivi nel dashboard o percorsi non visitati. Nessun cookie value o dato personale è stato salvato. Conferma contrattuale/privacy della piattaforma **ancora necessaria**.

## Conferma owner — attività privata chiusa (15 ottobre 2026)

- Sabina Scattola è titolare dei dati connessi al proprio sito personale: conferma esplicita del proprietario nella chat.
- Attività privata definitivamente chiusa, partita IVA non più attiva; il sito non vende prestazioni e non accetta prenotazioni. Nessun numero IVA inserito nel sito.
- Recapiti raggruppati sulla pagina Contatti; nessuna casella dedicata o duplicata sull'informativa Privacy. I diritti GDPR si richiedono attraverso gli stessi contatti.
- **Restano aperti:** basi giuridiche, log/retention email e Vercel, destinatari/responsabili, eventuali trasferimenti, validazione finale. Non considerare il solo stato personale come esenzione automatica da obblighi GDPR.
