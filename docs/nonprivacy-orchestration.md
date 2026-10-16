# Orchestrazione non privacy — 16 ottobre 2026

**Riconciliazione 16 ottobre 2026:** le indicazioni DRAFT/non pubblicato e la baseline `d52cf42` qui sotto descrivono la preparazione storica. Le 14 PR #59–#72 sono state integrate e pubblicate nella [release essenza-nonprivacy-2026-10-16](https://github.com/egnoatt/Sabina_site/releases/tag/essenza-nonprivacy-2026-10-16), commit `aad2f9f8e922571080045667366bd7226b0a11d1`. La release registra l'approvazione grafica e il via libera di Enrico per quella tranche. Le nuove PR preparatorie richiedono un nuovo via libera: nessuna autorizzazione permanente a merge/deploy. Restano aperti editoriale #29/#35/#36/#51–#58, QA #47–#49, accettazione #50 e protezioni #73. Vedere [stato corrente](./releases/2026-10-16-nonprivacy-followup.md).

## Snapshot della preparazione, conservato per tracciabilità

Stato: perimetro e preparazione PR autorizzati; **NON MERGED / NON PUBBLICATO**.
Baseline produzione: `d52cf42dd3485d8a0478cbe5665a96d4b6b3ae3d`.

L'owner ha approvato l'estensione Essenza a blog, Chi sono, Formazione, Ambiti, Contatti, header/footer/banner, news, approfondimenti e 404; revisione articolo per articolo con approvazione editoriale di Sabina. Ha autorizzato backlog e PR tecniche in parallelo, vietando merge e pubblicazione senza successivo via libera. Nessuna nuova autorizzazione per ogni ordinario passaggio tecnico entro questo perimetro.

## Backlog e responsabilità

| Epic | Pacchetti | Owner operativo |
| --- | --- | --- |
| [Governance #28](https://github.com/egnoatt/Sabina_site/issues/28) | #32 registro; #33 copertura QA; #34 proposta gate | Coordinatore, Enrico |
| [Editoriale #29](https://github.com/egnoatt/Sabina_site/issues/29) | #35 dossier; #36 modello dati; #51–#58 singoli articoli | Work, Sabina, aventi diritto |
| [Essenza #30](https://github.com/egnoatt/Sabina_site/issues/30) | #37 token; #38 blog; #39 profilo; #40 formazione; #41 ambiti; #42 contatti; #43 shell; #44 secondarie | Codex UI, Enrico |
| [Qualità #31](https://github.com/egnoatt/Sabina_site/issues/31) | #45 404; #46 metadati; #47 WCAG; #48 performance; #49 link; #50 accettazione | Codex, QA, Enrico |

Gli owner indicano responsabilità operative, non account GitHub inventati. Ogni issue conserva priorità, criteri, dipendenze e fonte. Work è il ruolo editoriale proposto: nessuna chat separata o richiesta esterna è stata avviata automaticamente.

## Sequenza e isolamento

La [matrice PR ed evidenze](./nonprivacy-validation.md) registra le dipendenze effettive. La versione finale dei test QA dipende dalle correzioni che verifica; la preparazione e i controlli locali sono avvenuti in parallelo.

1. Governance, controllo deploy e copertura QA.
2. Robustezza archivio e metadati; in parallelo fondazioni Essenza e dossier editoriale.
3. PR per pagina sopra le fondazioni; shell condivisa separata; secondarie in un pacchetto distinto.
4. Test integrati, correzioni da evidenze, performance e link.
5. Approvazioni, eventuale merge/rilascio espressamente autorizzato e verifica post-rilascio.

Ogni ramo tecnico parte da una base verificata. Le PR dipendenti dichiarano la base: prima di un futuro merge, integrare la dipendenza autorizzata, retarget su main e rieseguire controlli sul commit risultante. Non unire una PR dipendente nel ramo padre come scorciatoia. Non utilizzare auto-merge. I testi scientifici e le attribuzioni restano invariati fino alla decisione Sabina. Il modello dati tecnico non chiude da solo #36.

## Blocco dei deploy dei rami di lavoro

`vercel.json` contiene `git.deploymentEnabled: {"codex/nonprivacy-*": false}`. Tutti i nuovi rami di questo lavoro adottano quel prefisso e includono la regola **prima del primo push**. La regola non cambia il comportamento di main o della PR privacy. Nessun deploy CLI né promozione autorizzati.

Riferimento: https://vercel.com/docs/project-configuration/git-configuration . Una PR draft non disabilita da sola i deploy. Verificare le attività Vercel dopo i push; se la regola non viene rispettata interrompere ulteriori push e segnalare. La produzione preesistente resta invariata. L'eventuale merge su main può pubblicare: serve via libera esplicito.

## Gate proposti, non impostazioni già applicate

La ricognizione GitHub ha restituito main non protetto e nessun ruleset. Proposta #34: PR obbligatorie, review prima del merge, dismiss stale approvals, conversazioni risolte, divieto force-push e cancellazione, check obbligatori dopo verifica dei loro nomi effettivi e delle capacità del piano GitHub. Definire il revisore umano: se autore e owner coincidono, non assumere che l'auto-approvazione GitHub sia disponibile. Le impostazioni non sono state mutate.

Gate di ogni PR: lint senza warning, TypeScript, unit test pertinenti, build; per UI responsive 320/375/768/1280, tastiera e axe; evidenze sul commit corrente. Archiviare incomplete e limiti, non trasformare un pass automatico in certificazione. QA indipendente e approvazione visiva Enrico; Sabina approva contenuti/versione prima della PR editoriale pronta al merge. Nessun ticket di rilascio chiuso prima della verifica autorizzata in produzione.

## Perimetro separato e limiti

Issue #20 e PR #26 privacy non sono dipendenze da integrare né da chiudere. Nessuna modifica alla pagina privacy o ai documenti privacy; i componenti globali richiedono comunque test di regressione su quella pagina. Nessun nuovo analytics, cookie, font remoto, modulo o servizio.

Il Design System resta CURRENT solo per le superfici già pubblicate. Le nuove superfici sono candidate nelle PR fino al rilascio verificato. CWV di laboratorio e dati reali sono distinti: senza dati reali sufficienti non attestare INP/CWV in campo. Test di lettore di schermo e criteri manuali devono avere evidenza o restare pendenti.
