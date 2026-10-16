# Privacy — gate di rilascio e chiusura (Issue #20)

**Aggiornamento:** 15 ottobre 2026; **conferma rapporto hosting:** 16 ottobre 2026. **Stato corrente:** REVIEW IN PROGRESS, non approvazione finale.  
Questo documento **sostituisce le checklist pre-merge della PR #11 e della #19**, ormai superate dalla pubblicazione delle PR #19 e #21. La pagina pubblica `/privacy` **non contiene più il banner “in revisione”**, ma alcuni elementi sostanziali restano da verificare. Per i fatti distinguere [matrice](./privacy-evidence-matrix.md) e [decision register](./privacy-owner-decision-register.md).

## Gate completati

- [x] Sito personale, attività privata chiusa, titolare Sabina e pagina Contatti coerenti nel codice pubblico.
- [x] Vercel hosting identificato; workspace tecnico Pro.
- [x] Nessun form web per prenotazioni o intake clinico.
- [x] Browser testati sulle pagine principali: nessun cookie o host tracking esterno osservato; localStorage del banner (30 giorni).
- [x] Web Analytics Vercel **DISABLED** confermato dalla relativa API.
- [x] Nessun drain o connettore esterno Vercel configurato tramite le API specifiche; nessuna assenza assoluta di log inferibile.
- [x] PR #19 e #21 già integrate; sito pubblico disponibile e senza placeholder editoriale.

## Gate bloccanti per dichiarare completa l'informativa

- [x] **G1 — Criterio di conservazione della titolare:** Sabina elimina le email immediatamente dopo aver risposto e svolge una pulizia mensile anche dei messaggi senza risposta (conferma 16 ottobre 2026). Tempi tecnici del provider e gestione di eventuali eccezioni rimangono in G4/G6.
- [ ] **G2 — Basi giuridiche:** finalità e base art. 6 per navigazione/sicurezza, messaggi, diritti; eventuale legittimo interesse valutato, non presunto.
- [ ] **G3 — Ruoli e contratti (PARZIALE):** confermato dal proprietario che il sito è sul **suo account Vercel Pro, pagato e amministrato per conto di Sabina**; Sabina resta la titolare dei dati del sito. Restano da verificare l'accordo tra le parti, gli accessi effettivi e l'eventuale designazione GDPR, oltre alla corretta catena Vercel/Microsoft.
- [ ] **G4 — Hosting e trasferimenti:** natura/criterio di retention log e categorie di destinatari; DPA, subprocessor e trasferimenti coerenti con gli accordi effettivi.
- [ ] **G5 — Procedura diritti:** ruoli e modalità di risposta effettivi, confermati dalla titolare.
- [ ] **G6 — Verifica finale:** testo pubblico approvato da titolare, confronto puntuale con art. 13, eventuale review specialistica e release QA.

## Checklist per la prossima PR applicativa
- [ ] Le decisioni G1–G5 sono documentate con evidenza/owner sign-off.
- [ ] Il testo della pagina `src/app/privacy/page.tsx` non inventa né elude basi giuridiche, criteri di conservazione, trasferimenti o responsabili.
- [ ] Nessun duplicato di casella nella pagina Privacy: il collegamento a `/contatti` rimane.
- [ ] Test lint, typecheck, build e browser; review della preview.
- [ ] Merge soltanto con esplicita approvazione; Production verificata.
- [ ] Chiudere la #20 *solo allora*, senza creare ulteriori issue duplicate.

**Riferimenti:** [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita), [Garante cookie](https://www.garanteprivacy.it/faq/Cookie), [Vercel DPA](https://vercel.com/legal/dpa), [Vercel shared responsibility](https://vercel.com/docs/security/shared-responsibility), [Microsoft Privacy](https://www.microsoft.com/it-it/privacy/privacystatement).
