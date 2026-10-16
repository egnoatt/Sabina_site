# Proposta JSON-LD per approvazione — 16 ottobre 2026

**Bozza, non pubblicata.** Riferimento #36; baseline ce2f5dc. Nessuna modifica ai Markdown, titoli, date, descrizioni visibili o privacy.

## Prima / dopo

Prima: tutti gli otto articoli dichiarano `author: Sabina Scattola` ai motori di ricerca, indipendentemente dalla provenienza.

Dopo proposto: omettere `author` su tutti e otto finché non è confermata la paternità della specifica versione locale. Sabina resta `publisher` del sito. Non aggiungere curatore, traduttore, revisore, licenza o date nuove senza prova.

Per i cinque testi approvati in #77 aggiungere `citation` testuale con autore della fonte, testata e lo stesso URL già visibile in fondo:

| Articolo | Fonte citata |
| --- | --- |
| Neuroscienze | Paola Emilia Cicerone, L’Espresso |
| Mamme narciso | Massimo Recalcati, la Repubblica; URL della bibliografia, non presentato come URL dell’originale |
| Prima di andare dallo psicologo | Hannah Ewens, VICE |
| Depressione | Sara Ficocelli, la Repubblica |
| Quindici cose | Casey Gueren, BuzzFeed |

Gli altri tre testi non ricevono fonti inventate. `citation` indica la fonte, non attribuisce automaticamente al suo autore la rielaborazione italiana. Nessun campo `author` della fonte viene confuso con quello del testo locale.

Riferimenti tecnici consultati: [Schema.org citation](https://schema.org/citation) accetta Text; [author](https://schema.org/author) descrive l’autore del contenuto. L’omissione può ridurre la completezza dei dati per i motori di ricerca; evita una certezza non documentata. Non viene promesso un risultato SEO né una verifica dei diritti (#78).

## Decisione richiesta

Sabina approva questa rappresentazione degli otto articoli, inclusa l’omissione dell’autore locale non confermato. Dopo l’approvazione della versione concreta, Enrico autorizza merge e pubblicazione. L’approvazione della PR #77 non viene estesa automaticamente a questa proposta. #36 resta aperta.
