# Evidenze tecniche non privacy — 16 ottobre 2026

**Preparato per review, non rilasciato.** Nessun merge o deploy autorizzato. Baseline main `d52cf42dd3485d8a0478cbe5665a96d4b6b3ae3d` invariata durante la preparazione.

## PR e ordine proposto

| PR | Contenuto | Base / dipendenza |
| --- | --- | --- |
| #59 | Governance, dossier e blocco deploy rami | main |
| #60 | 404 e lettore archivio/date | #59 |
| #61 | Immagini social | #59 |
| #63 | Token e classi Essenza | #59 |
| #64 / #65 / #66 / #67 | Profilo / formazione / ambiti / contatti | #63 |
| #68 | Blog, presentazione e rendering server | #63; coordinare #60 |
| #69 | News, approfondimenti e 404 | #63 |
| #70 | Header/footer/banner e focus Escape | #63 |
| #71 | Banner senza spostamento al ritorno | #70 |
| #62 | Copertura e regressioni browser complete | #71, perché le nuove prove richiedono le correzioni focus/banner |
| #72 | Reflow testo e focus non coperto dall'header | #71 |

Le PR sono DRAFT. Non unirle nei rami padre: dopo autorizzazione e integrazione della dipendenza, retarget main, verificare il diff e rieseguire i check sul risultato. La copertura QA iniziale è stata eseguita anche prima delle correzioni; la versione finale #62 dipende dalle correzioni che verifica. Nessun auto-merge.

## Prove riproducibili

| Prova | Candidato / strumento | Esito locale |
| --- | --- | --- |
| lint senza warning, TypeScript, Jest, build | integrazione locale `52c196a` | PASS; 10 test Jest |
| Responsive/tastiera/menu/banner/overflow | integrazione `161b9f1`, script QA `3f7c715` | 19 rotte × 4 larghezze = 76 combinazioni PASS |
| axe WCAG-tagged | stessa integrazione | 76 scansioni, 0 violazioni; 36 incomplete conservati, relativi alle frecce decorative |
| Banner e CSP | stessa integrazione | 12 casi PASS: storage assente/valido/scaduto/malformato/bloccato e JS disabilitato; 375/1280 px; nessun errore console/idratazione o spazio vuoto |
| Performance diagnostica | design prima `cdd98e1`, dopo `e6de07e`, riconfermato integrazione `161b9f1` | 24 campioni locali; 3 contesti per scenario |
| Reflow, spaziatura, carattere aumentato e focus | integrazione `52c196a`, script `974b326` | 54/54 assert: 33 layout su 11 rotte e 21 tastiera a 320/1280/carattere 200% |
| Slug inesistente e metadati | integrazione `161b9f1` | articolo mancante 404; sei superfici valide 200 con immagini OG/Twitter |
| Testi e href | confronto AST design con baseline | invariati nei 14 TSX modificati; articoli, stato professionale e pagina privacy invariati |

Gli SHA di integrazione identificano assemblaggi locali per validare la compatibilità: non sono merge remoti né release. Le PR conservano gli SHA effettivi dei singoli pacchetti. Le azioni GitHub registrano i check su ciascuna PR; non dedurre che i vecchi workflow coprano ogni superficie. #62 estende i trigger, #72 aggiunge test indipendente di testo/focus.

## Miglioramento misurato del banner

La somma degli spostamenti osservati al ritorno con chiusura salvata passa da **0,196421 a 0,00000717** a 375 px e da **0,088373 a 0,00010256** a 1280 px. I tre campioni per dispositivo hanno lo stesso valore. Sono misure locali senza throttling, non CLS con finestre di sessione né CWV in campo. LCP locale non è rappresentativo della rete reale; nessun INP in campo misurato. Non è stato introdotto tracking.

## Link esterni

Controllo HTTP: Facebook e i due link YouTube rispondono 200; gnoatto.pro reindirizza 308 alla versione www, poi 200. Issuu risponde 403: **non verificabile**, non rimosso. HTTP 200 non dimostra titolarità Facebook, diritti editoriali né riproducibilità del video. Conferme Sabina in #49 e dossier #35.

## Limiti e gate ancora aperti

- Approvazione grafica Enrico e successivo via libera esplicito a merge/pubblicazione.
- Otto decisioni editoriali Sabina (#51–#58), provenienza/diritti e fonti scientifiche; attribuzione JSON-LD per autore ancora invariata, quindi #36 non conclusa.
- Audit manuale completo WCAG, tecnologie assistive e zoom browser reale 200/400%; il test del carattere radice 200% non equivale a zoom. I risultati incomplete non sono certificazioni.
- Dati CWV reali sufficienti; eventuale osservazione senza introdurre strumenti privacy fuori perimetro.
- Gate GitHub proposti #34 non applicati. Nessuna modifica impostazioni Vercel o dominio.
- Closeout e Design System CURRENT solo dopo rilascio verificato. #20 e #26 restano separati.
