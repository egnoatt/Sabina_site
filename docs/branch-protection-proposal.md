# Proposta concreta protezioni main — #73

Stato: **PROPOSTA NON APPLICATA**, ricognizione 16 ottobre 2026. Nessuna modifica a settings, ruleset o collaborator.

## Evidenze e fattibilità

Letture REST `GET /repos/egnoatt/Sabina_site`, `/branches/main`, `/rulesets`, `/collaborators` e `/user` con identità autenticata `egnoatt`: repository **public**, main **protected=false**, rulesets **[]**, permesso **admin=true**. Un solo collaboratore restituito: `egnoatt`, ruolo admin. Il campo account `plan` non è esposto nella risposta (`null` nella proiezione): **piano commerciale non verificabile con questo token**, non presumere Pro. Le [protezioni dei branch pubblici sono disponibili anche su GitHub Free](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches); questa proposta non richiede di presumere un piano a pagamento.

Sul commit `aad2f9f8`, il check `build` dell'app **GitHub Actions** (app ID 15368) è [success](https://github.com/egnoatt/Sabina_site/actions/runs/38947190350/job/117129176613). Il workflow `ci.yml` si avvia su ogni PR senza filtri paths. `landmark-smoke`, `axe-sample`, `responsive-smoke` e `text-focus` invece hanno filtri sulle PR: non renderli obbligatori globalmente senza prima rendere il loro reporting universale. [Un workflow saltato per filtro può lasciare un check richiesto Pending](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/troubleshooting-required-status-checks). Non richiedere Vercel Preview: i rami preparatori hanno deployment disabilitato.

## Configurazione A raccomandata per l'attuale unico amministratore

Una sola regola classic branch protection con pattern esatto `main`:

| Opzione | Valore proposto |
| --- | --- |
| Require a pull request before merging | Sì |
| Required approving reviews | **0**; approvazione esplicita del proprietario registrata sulla versione concreta come gate procedurale |
| Require review from Code Owners / most recent push approval | No; nessun revisore indipendente verificato |
| Dismiss stale approvals | No con zero review; da attivare nella configurazione B |
| Require status checks | `build`, origine GitHub Actions (15368) |
| Require branches to be up to date | Sì; aggiornare con merge ordinario, senza force-push o rebase distruttivi |
| Require conversation resolution | Sì |
| Include administrators / Do not allow bypassing | Sì, nessuna eccezione ordinaria |
| Allow force pushes / Allow deletions | No / No |
| Require linear history / signed commits / deployment / merge queue | No: non necessari al gate proposto e non verificati nel flusso attuale |

Questa configurazione consente al proprietario di completare PR e CI senza una review impossibile del proprio account. Non impone tecnicamente il consenso umano: il proprietario e un agente autenticato con il suo account condividono l'identità GitHub; resta vietato agli agenti effettuare merge senza via libera. Non equivale a separazione delle responsabilità.

## Configurazione B dopo scelta di un secondo revisore

Solo dopo che il proprietario abbia identificato e autorizzato un revisore con accesso idoneo: required approving reviews **1**, dismiss stale approvals **true**, e test di una PR dell'owner approvata dall'altro account. Le [review richieste](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) devono essere soddisfatte da identità abilitate; non progettare il flusso contando sull'auto-approvazione dell'autore. Non sono stati invitati collaboratori.

## Decisione e verifica prima dell'attivazione

Il proprietario sceglie **A** oppure **B con revisore identificato** e approva il set di valori sopra. Prima di qualsiasi scrittura: rileggere main, collaboratori, regole e check effettivi, salvare lo stato precedente e verificare che `build` abbia un'esecuzione recente. Dopo eventuale attivazione autorizzata: leggere la regola restituita e verificare con PR documentale che `build` compaia e che nessun check filtrato blocchi la PR. Non testare force-push o cancellazioni reali. Qualsiasi ripristino di impostazioni richiede l'autorizzazione del proprietario; questa proposta non è un'autorizzazione al bypass.

#73 rimane aperta fino alla decisione, applicazione autorizzata e verifica. Nessun gate privacy viene modificato.
