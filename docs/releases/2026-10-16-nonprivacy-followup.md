# Stato corrente non privacy — 16 ottobre 2026

**Rilascio tecnico completato; progetto non chiuso.** Questa riconciliazione aggiorna i documenti operativi e preserva il closeout storico della sessione precedente, senza modificare i documenti privacy.

Baseline verificata dal coordinatore: main `aad2f9f8e922571080045667366bd7226b0a11d1`; [release](https://github.com/egnoatt/Sabina_site/releases/tag/essenza-nonprivacy-2026-10-16); Vercel `sabina-site`, deployment `dpl_8DHsWeG68T7J2EEP6B7orXW3qnX6` READY, alias pubblico assegnato senza errore. Il [build](https://github.com/egnoatt/Sabina_site/actions/runs/38947190350) e il [landmark smoke](https://github.com/egnoatt/Sabina_site/actions/runs/38947190324) sullo SHA applicativo sono success. Non sono una certificazione WCAG completa né un'approvazione editoriale.

## Riconciliazione

La release registra integrazione e pubblicazione autorizzate delle 14 PR #59–#72. Le frasi DRAFT/non pubblicato nei documenti di orchestrazione e validazione appartengono allo snapshot preparatorio conservato; non descrivono più quelle PR. Il Design System ora rispecchia il codice pubblicato: blog, profilo, formazione, ambiti, contatti, shell, secondarie e 404. Il redesign Essenza è congelato; ulteriori interventi richiedono un problema comprovato o una nuova decisione.

## Gate di #50, ancora aperta

| Gate | Stato / prova richiesta |
| --- | --- |
| Baseline tecnica Essenza | Rilasciata; prove e limiti nella release e nei workflow sopra |
| Documentazione delle superfici | Riallineata in questa PR; approvazione/merge del proprietario ancora necessari |
| #29/#35/#36 e #51–#58 | Dossier unico, provenienza/diritti, approvazione di Sabina della versione concreta; successivo via libera del proprietario per applicare/pubblicare |
| #47 WCAG | Completare criteri manuali applicabili, screen reader e zoom reale; conservare limiti e incomplete |
| #48 performance | Valutazione bundle e campioni rappresentativi; separare laboratorio da campo |
| #49 link e riferimenti | Funzionamento distinto da titolarità/attualità; Issuu non verificabile non equivale a link eliminabile |
| #73 protezioni | [Proposta concreta](../branch-protection-proposal.md); piano commerciale non esposto, funzione disponibile per repo public anche Free; decisione e applicazione pendenti |
| Accettazione finale | Enrico esamina evidenze e rischi residui, approva merge/rilascio eventuali e verifica l'esito in produzione |

Non chiudere #50, #31 o le issue editoriali per il solo completamento documentale. Nessun consenso editoriale viene dedotto da una risposta generica “procedi”. Non chiedere autorizzazioni a terzi, né cambiare articoli o attribuzioni JSON-LD senza i due gate. #20 e draft #26 restano separate e inalterate.

## Risultati preparatori di questa orchestrazione

Le seguenti PR sono **draft, non integrate**; costituiscono materiali da esaminare, non nuovi rilasci. I check correnti restano consultabili nelle rispettive PR, senza fissare in questo documento uno stato CI destinato a cambiare.

| PR | Risultato concreto | Decisione/residuo |
| --- | --- | --- |
| [#74 Governance](https://github.com/egnoatt/Sabina_site/pull/74) | Design System riconciliato, proposta #73 verificata su permessi e check effettivi | Proprietario: approvare documenti e scegliere protezione A oppure B con revisore; impostazioni ancora inalterate |
| [#75 Dossier editoriale](https://github.com/egnoatt/Sabina_site/pull/75) | Unico dossier con otto schede #51–#58, fonti verificate nei limiti dichiarati, autore/curatore/traduzione distinti, proposta per ogni testo | Sabina: diritti e decisioni/versioni concrete; fonti parziali segnalate e nessuna autorizzazione inventata. Poi via libera del proprietario |
| [#76 Evidenze QA](https://github.com/egnoatt/Sabina_site/pull/76) | Report `docs/qa/2026-10-16/README.md`, 76 scansioni axe senza violazioni, 54 assert focus/testo PASS, 36 incomplete decorative analizzate; matrice WCAG e ispezione browser su tre route | #47 resta aperta: lettore di schermo e zoom browser reale non attestati; test automatici non equivalgono a WCAG completo |
| [#76 Performance e riferimenti](https://github.com/egnoatt/Sabina_site/pull/76) | 12 campioni mobile simulati, 24 locali, inventario bundle (circa 120 KiB gzip JS nel campione); controlli link con risultati HTTP e limiti | #48 aperta: non sono CWV/INP in campo. #49 aperta: Issuu 404/403 inconclusivi, policy del browser impedisce verifica manuale; titolarità non dedotta |

Il coordinatore ha verificato dopo il push di #74 che Vercel non ha creato deployment per il ramo preparatorio. Le nuove PR non cambiano la baseline di produzione. L'accettazione #50 resta aperta finché evidenze, limiti e decisioni umane non sono risolti o esplicitamente accettati nel loro ambito.
