# QA di chiusura non privacy — 16 ottobre 2026

Baseline verificata: `aad2f9f8e922571080045667366bd7226b0a11d1`, release `essenza-nonprivacy-2026-10-16`. Issue #47/#48/#49; #50 resta aperta. Questa PR contiene prove e una sonda locale, senza modifiche alle pagine, alle attribuzioni, al design o alla produzione. Nessuna attestazione di conformità WCAG o di Core Web Vitals sul campo.

## Risultati riproducibili

| Verifica | Esito e prova | Limite |
|---|---|---|
| Build e lint | PASS, `npm ci`, `npm run build`, `npm run lint:ci`; ambiente in [environment.json](environment.json) | Esecuzione locale sulla baseline; CI della PR separata |
| Axe WCAG A/AA 2.0/2.1/2.2 | PASS automatico: 76 combinazioni, 19 route x 320/375/768/1280px, zero violazioni; [report completo](axe-report.json) | 36 occorrenze `incomplete` color-contrast, analizzate sotto; axe non copre tutti i criteri |
| Reflow/testo/spaziatura/focus | PASS automatico: 54/54; [text-focus.json](text-focus.json) | 320px e font root 200% NON sono zoom browser reale 200/400%; prova geometrica, non verifica visiva di tutto il contenuto |
| Tastiera pubblica | PASS sul campione manuale descritto sotto | Verbale CUA del coordinatore, non test completo di ogni pagina |
| Prestazioni | 24 misure locali non limitate e 12 mobile simulate; [locale](performance-local.json), [mobile/bundle](performance-mobile-bundle.json) | Nessun confronto causale prima/dopo: nessuna ottimizzazione introdotta. Nessun INP o CWV campo |
| Link esterni | Facebook e due YouTube HTTP200, gnoatto.pro redirect→200; Issuu non verificabile | HTTP200 non dimostra disponibilità player, correttezza profilo, titolarità o diritti; [risposte](links.json) |

Gli script generici esistenti includono anche `/privacy` come semplice route di regressione: non è stata modificata o valutata la sostanza della privacy. Il redirect storico `/approfondimenti/curiosita/clinici` è contato fra le 19 route e arriva alla destinazione con HTTP200.

## #47 — criteri, controlli manuali e residui

Riferimento: [W3C WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/), consultato il 16 ottobre 2026. La matrice seguente è un registro di copertura; **parziale** non significa conforme. Le voci N/A sono candidate sulla base delle funzionalità presenti, da confermare nel sign-off finale.

| Criteri A/AA | Applicabilità / evidenza / decisione |
|---|---|
| 1.1.1 | Applicabile. Axe non rileva assenza di alternative; significato degli alt da revisione umana. Frecce decorative ridondanti valutate sotto. |
| 1.2.1–1.2.5 | Media esterni collegati: verificare disponibilità, sottotitoli e alternative dei due video e del libretto; nessuna attestazione sul player esterno. |
| 1.3.1, 1.3.2 | Applicabili. Struttura automatica senza violazioni; sequenza semantica/lettura con screen reader ancora da eseguire. |
| 1.3.3, 1.3.4 | Applicabili. Istruzioni sensoriali/orientamento da review manuale completa; quattro larghezze non equivalgono a entrambe le orientazioni. |
| 1.3.5 | N/A candidata: nessun modulo di raccolta dati personali nel flusso verificato. |
| 1.4.1, 1.4.3, 1.4.5, 1.4.11 | Applicabili. Axe PASS per le regole eseguibili; colore non unico segnale, immagini di testo, contrasto non testuale e tutti gli stati interattivi richiedono review completa. |
| 1.4.2 | N/A candidata: nessun audio automatico nel sito locale. Media esterni fuori dalla prova. |
| 1.4.4, 1.4.10, 1.4.12 | Applicabili. 54 prove automatiche focus/reflow/testo/spaziatura PASS; zoom browser reale 200/400% non verificato. |
| 1.4.13 | Applicabile agli stati hover/focus; nessuna verifica esaustiva dei contenuti aggiuntivi. |
| 2.1.1, 2.1.2, 2.4.1, 2.4.3, 2.4.7, 2.4.11 | Applicabili. Campione manuale skip/menu/Escape/banner/link PASS; automatismi sul focus PASS. Restano percorso completo tastiera e tutti gli stati/viewport. |
| 2.1.4 | N/A candidata: nessuna scorciatoia a singolo carattere rilevata nel flusso. |
| 2.2.1, 2.2.2, 2.3.1 | N/A candidata per limiti di tempo, autoplay e lampeggiamenti; conferma visiva integrale pendente. Il banner è chiudibile. |
| 2.4.2, 2.4.4, 2.4.5, 2.4.6 | Applicabili. Titoli/link/headings senza violazioni axe; navigazione e indice blog disponibili. Chiarezza di tutti i testi e percorsi multipli da review manuale. |
| 2.5.1, 2.5.4, 2.5.7 | N/A candidata: nessun gesto complesso, azione da movimento o trascinamento richiesto nel campione. |
| 2.5.2, 2.5.3, 2.5.8 | Applicabili. Controlli nativi e nomi valutati automaticamente; verificare annullamento pointer e target/spaziatura di tutti gli stati, inclusi link inline. |
| 3.1.1, 3.1.2 | Applicabili. Lingua pagina automatica PASS; lingua delle parti/citazioni da revisione editoriale e screen reader. |
| 3.2.1–3.2.4, 3.2.6 | Applicabili. Campione navigazione coerente e nessun cambio inatteso al focus; conferma completa e aiuto coerente pendenti. |
| 3.3.1–3.3.4, 3.3.7, 3.3.8 | N/A candidata: nessun form, transazione o autenticazione nel sito verificato; mailto non equivale a form interno. |
| 4.1.2, 4.1.3 | Applicabili. Axe e aria-expanded menu nel campione PASS; annunci dinamici con tecnologie assistive non verificati. |

### Disposizione delle 36 segnalazioni incomplete

Tutte le occorrenze hanno causa `nonBmp` e riguardano solamente frecce `→`/`←` con `aria-hidden="true"`, adiacenti a etichette testuali complete. Sono 4 larghezze x (home + 8 articoli). Verifica sorgente: `src/app/page.tsx:79` («Il mio percorso»), `:206` («Leggi l'articolo»), `src/app/blog/[slug]/page.tsx:120` («Torna agli articoli»). Le frecce sono decorative/ridondanti e non costituiscono l'unica informazione per usare il collegamento: **triage chiuso senza modifica** per questi nodi. Il report originale conserva tutte le segnalazioni. Questa valutazione non chiude il contrasto non testuale di ogni altra superficie/stato.

### Verbale manuale CUA in produzione

Eseguito dal coordinatore il 16 ottobre su home, `/blog`, `/blog/cosa-devi-sapere`:

- Home: Tab iniziale rende visibile «Salta al contenuto»; Enter porta a `#main`; Tab va a «Maggiori informazioni», saltando la navigazione. Tab su «Chiudi avviso», Enter chiude il banner; Tab su «Leggi gli articoli» con focus visibile.
- Menu stretto: focus da Shift+Tab su «Apri menu»; Enter espande; Tab raggiunge Home; Escape collassa e restituisce focus al toggle. Navigazione da menu con cinque Tab fino a Blog ed Enter: `/blog`, menu chiuso.
- Blog: skip con Enter; Tab sul breadcrumb Home, poi sul primo articolo; Enter apre `/blog/cosa-devi-sapere`. Intestazioni/testo nel campione visuale senza clipping.

Viewport CUA richiesto 320px ma effettivo misurato 355px: `innerWidth = clientWidth = scrollWidth = 355`. Non chiamare questa prova «320px». Shortcut zoom IAB senza percentuale verificabile: **zoom reale 200/400% non eseguito con evidenza**. Nessun lettore di schermo. Serve sessione umana VoiceOver/Safari o NVDA/Firefox con versione, pagine, operazioni e risultati registrati; zoom reale verificato nella UI del browser. #47 resta aperta.

## #48 — prestazioni e bundle

Le misure non limitate servono per regressioni della build locale; quelle mobile simulano 375x812, CPU4x, RTT150ms, download1.6Mbps/upload0.75Mbps e cache disabilitata, tre contesti nuovi per stato. Home con banner visibile e già chiuso, blog e articolo campione. Nessun tracking introdotto. Terze parti bloccate. Mac/Chromium non equivale a dispositivo reale; LCP locale non misura CDN, rete e pubblico reali. `layoutShiftSum` somma gli shift senza input recente, non implementa la finestra di sessione CLS. Nessun dato INP, CrUX o campo disponibile in questo audit. Non viene dichiarato superamento soglie CWV.

| Stato mobile simulato | LCP mediana (min–max), ms | Shift sum max | JS caricati, KiB gzip offline |
|---|---:|---:|---:|
| `/` banner iniziale | 540 (532–556) | 0.000243 | 120.6 |
| `/` banner chiuso | 516 (508–524) | 0.000009 | 120.4 |
| `/blog` banner iniziale | 436 (432–436) | 0.000646 | 120.4 |
| `/blog/cosa-devi-sapere` banner iniziale | 436 (436–444) | 0.000014 | 120.2 |

Build: 41 chunk JS, 823.9 KiB raw e 256.6 KiB gzip totale; **non sono tutti scaricati da ogni pagina**. I cinque più grandi (gzip offline):

- `static/chunks/4bd1b696-deba172d32c79f82.js`: 194.0 KiB raw / 60.9 KiB gzip.
- `static/chunks/framework-c80f5add3549a761.js`: 178.4 KiB raw / 56.3 KiB gzip.
- `static/chunks/794-e02d285919b32be1.js`: 190.5 KiB raw / 51.2 KiB gzip.
- `static/chunks/polyfills-42372ed130431b0a.js`: 110.0 KiB raw / 38.5 KiB gzip.
- `static/chunks/main-e641ba692e8b109d.js`: 126.0 KiB raw / 36.4 KiB gzip.

Il JSON registra anche transfer/encoded/decoded size osservati delle risorse: distinguere i chunk precaricati dal codice eseguito. Senza profiler di utilizzo non attribuire causalità o proporre rimozioni dal solo peso. Nessun problema comprovato richiede qui una correzione runtime; conservare baseline per il prossimo confronto. #48 resta aperta per accettazione delle misure e limiti; eventuale campione reale di dispositivi/rete e dati campo solo se già disponibili, senza introdurre raccolta.

## #49 — collegamenti e riferimenti

L'inventario copre i cinque URL esterni unici presenti nei Markdown del blog, Footer e Contatti. Due YouTube e Facebook rispondono200; non sono stati riprodotti i video e non è verificata l'identità del profilo. gnoatto.pro risponde308 verso www, poi200 (curl segue; urllib del runtime no). Issuu risponde404 con urllib/Mozilla e403 con curl: disponibilità **inconclusiva**, non rimuovere. Il successivo tentativo manuale CUA del coordinatore è stato bloccato dalla policy di sicurezza del browser; nessuna riproduzione o tentativo alternativo dopo il blocco.

Occorrono conferma Sabina sul profilo Facebook corretto, attualità dei riferimenti e disponibilità/diritti dei media. Gli articoli e il dossier editoriale restano separati: #29/#35/#36 e #51–#58. Un nome nell'URL Issuu non prova la titolarità. Non sono stati contattati terzi. #49 resta aperta.

## Riproduzione e gate

Dopo `npm ci` e `npm run build`, installare Playwright Python e Chromium in ambiente di test e axe-core 4.10.3 senza modificare manifest/lockfile. Eseguire separatamente gli script `essenza_accessibility_audit.py`, `text_focus_regression.py`, `performance_probe.py` con `QA_PORT` libero. La nuova sonda `closeout_performance.py http://127.0.0.1:PORT` richiede un server `npm run start` già avviato; produce direttamente il JSON mobile/bundle. Evitare benchmark in parallelo con carichi variabili per confronti fini. In questa sessione il primo avvio sandbox senza permesso socket è fallito; le esecuzioni autorizzate successive sono terminate correttamente. Nessun fallimento iniziale è contato come PASS.

Prima della chiusura #47: sessione assistive technology, zoom reale, revisione completa matrice e accettazione del residuo. Prima di #48: accettazione proprietario delle misure e del limite sul campo. Prima di #49: conferme Sabina e media verificabili. #50 non si chiude con questa PR. Merge e pubblicazione richiedono via libera Enrico; nessun merge/deploy/settings autorizzato o eseguito qui. Privacy #20/#26 invariata.
