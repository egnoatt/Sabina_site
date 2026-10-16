# Verifiche estese non privacy — 16 ottobre 2026

Base: `aae8c18913507ff12e23853a4b1c9b008c3cd9c0`. Build locale production PASS. Avvisi sui database browser datati, nessun errore di compilazione. Nessuna modifica al runtime, agli articoli, al JSON-LD o alla privacy.

## Test automatici supplementari

[Report grezzo](final-text-focus.json): **75 controlli PASS, zero fallimenti**. Lo script esistente `scripts/text_focus_regression.py` è eseguito con ROUTES impostato a tutte le 18 route restituite da `public_routes()`, esclusa `/privacy`.

- 54 controlli: 18 pagine × reflow 320 px, spaziatura testo aumentata a 320 px, font radice al 200% a 1280 px. Ogni risposta HTTP200 e larghezza documento non superiore al viewport (tolleranza 1 px).
- 21 controlli: skip link visibile, avanzamento oltre header e chiusura banner nei campioni home/blog/contatti, a 320/1280 px e testo aumentato.
- Browser Chromium Playwright locale; richieste terze bloccate. Il font radice al 200% non equivale allo zoom nativo del browser. Nessun risultato su media esterni da questo test.

Riproduzione dopo `npm run build`, con Python Playwright disponibile:

```sh
QA_PORT=3137 FOCUS_REPORT=docs/qa/2026-10-16/final-text-focus.json python -c "import sys; sys.path.insert(0,'scripts'); import text_focus_regression as t; from browser_routes import public_routes; t.ROUTES=tuple(r for r in public_routes() if r!='/privacy'); t.main()"
```

## Verifica nativa supplementare

Chrome su produzione: Tab raggiunge “Salta al contenuto”, focus visibile osservato. VoiceOver temporaneamente attivato; non è stato possibile osservare annunci vocali o trascrizioni sufficienti per attestare il percorso di lettura. **Prova inconclusiva, non PASS screen reader.** VoiceOver ripristinato OFF (stato iniziale verificato) e scheda di test chiusa. Nessuna preferenza dell’Utility VoiceOver modificata.

I campioni precedenti di zoom nativo 200/400% restano descritti nel [verbale precedente](post77-manual.md). Non si estendono automaticamente a ogni stato o criterio WCAG.

## Cosa resta

#47: sessione assistiva osservabile e matrice manuale completa (ordine di lettura, annunci, contrasto e focus in tutti gli stati, target e alternative media). Nessun difetto nuovo comprovato da questi 75 controlli; non è una certificazione di conformità.

#49: Issuu resta inconclusivo dopo il precedente blocco, non aggirato. Conferma di Sabina sul profilo Facebook, sul riferimento gnoatto.pro e sull’attualità dei ruoli AULSS 7 Pedemontana / La Recherche ancora assente. I due video erano avviabili nel campione precedente; alternative accessibili non attestate. La conferma degli articoli invariati non viene estesa a questi dati.

#78: diritti non documentati, aperta fuori dalla chiusura operativa per scelta esplicita del proprietario. Non richiede un’ulteriore identica decisione. #52/#56/#58, #35 e #29 chiuse dopo conferma del mantenimento invariato. #31/#50 rimangono aperte per #47/#49 e accettazione finale. Privacy esclusa.
