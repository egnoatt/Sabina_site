# Revisione privacy ed editoriale — DRAFT / NOT APPROVED

Questa PR propone una mitigazione delle affermazioni assolute sulla privacy e della comunicazione di uno studio attivo. **Non fare merge né deploy prima delle approvazioni esplicite** elencate qui.

## Gate A — informativa privacy (owner del sito / consulente privacy)

- [ ] Identificare il titolare del trattamento e relativo recapito.
- [ ] Verificare log, indirizzi IP e retention su Vercel e relativi eventuali subfornitori.
- [ ] Verificare trattamenti della casella email e contenuti inviati spontaneamente.
- [ ] Documentare finalità, basi giuridiche, destinatari, trasferimenti e periodi di conservazione.
- [ ] Inserire diritti dell'interessato, modalità di esercizio e autorità di controllo.
- [ ] Confermare assenza/presenza di analytics, cookie, tecnologie di tracking, inclusa memoria locale del banner.
- [ ] Sostituire il testo *in revisione* con un'informativa completa e approvata.

La versione precedente dichiarava in modo assoluto che nessun dato personale venisse trattato, anche via email: affermazione non dimostrata dal repository.

## Gate B — diritti editoriali e qualità scientifica (Sabina / aventi diritto)

- [ ] Verificare il diritto alla ripubblicazione integrale del testo attribuito a Paola Emilia Cicerone / L'Espresso in `src/content/blog/neuroscienze-confermano-efficacia-terapia-psicoanalitica.md`. Se manca autorizzazione, rimuovere il testo integrale e sostituire con sintesi originale e link alla fonte legittima.
- [ ] Verificare la corretta attribuzione/permesso del testo derivato da Huffington Post in `src/content/blog/8-segnali-per-andare-dallo-psicoterapeuta.md`.
- [ ] Riesaminare affermazioni clinico-scientifiche datate, distinguendo archivio storico e conoscenze attuali.
- [ ] Verificare link social Facebook (due handle diversi nella versione precedente) e autorizzazione all'uso.
- [ ] Confermare la scelta di nascondere in footer indirizzo/telefono, che potrebbero far pensare a un'attività privata attiva.

**Non sono stati rimossi i post originali né modificati i loro contenuti scientifici senza revisione dell'autrice.**

## Gate C — QA

- [ ] Lint, TypeScript, Jest, build
- [ ] Controllo navigazione e leggibilità desktop/mobile
- [ ] Conferma esplicita del contenuto da parte di Sabina prima del merge

## Allineamento al baseline GitHub (15 ottobre 2026)

- Branch riallineato ai merge SEO #10, UX #12 e accessibilità #15, senza pubblicare alcun contenuto di questa PR.
- Tutte le pagine conservano un unico landmark `main` fornito dal layout globale.
- **Stato: ancora DRAFT/BLOCKED.** Informativa provvisoria non idonea al merge finché non viene approvata e completata.
