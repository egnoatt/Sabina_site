# Verifiche supplementari dopo PR #77 — 16 ottobre 2026

Produzione `ce2f5dc0e22833f35d43533420248e8025bba674`. Privacy esclusa. Browser nativo Chrome 155.0.8059.80 su macOS; CUA con albero accessibilità e screenshot osservati nella conversazione. Non è una sessione con lettore di schermo. Nessuna modifica al sito o alle impostazioni server.

## HTTP pubblico

[public-post77.json](public-post77.json): 17 route non privacy HTTP200 diretti, un redirect storico 308 e una route inesistente HTTP404 corretta. Il redirect non seguito da urllib è stato verificato con curl -L: HTTP200 su `/approfondimenti/clinici`. Nessun errore di pagina comprovato; questo test riguarda HTTP, non tutte le interazioni.

## Zoom reale, campione manuale

- Home: zoom 200% impostato con i pulsanti del browser; percentuale confermata sia dal menu visibile sia dal controllo accessibile «Zoom: 200%». Controllati visivamente navigazione/banner e footer dopo scorrimento: testi rientrano nella larghezza e link leggibili nel campione.
- Home: zoom 400% confermato dalla UI «Zoom: 400%». Menu passa alla versione mobile. Pulsante «Apri il menu» attivato; link Blog raggiunto e attivato; pagina blog caricata e menu richiuso.
- Blog → articolo `cosa-devi-sapere` a 400%: link attivato, breadcrumb e titolo vanno a capo; paragrafo iniziale dopo scorrimento leggibile senza taglio orizzontale osservato. Header resta fisso; non verificata esaustivamente l’occlusione del focus in ogni stato.
- Zoom ripristinato al 100%, confermato dalla UI, prima di lasciare il sito; scheda di prova chiusa al termine.

Le scorciatoie iniziali per lo zoom non hanno modificato la pagina: non contate come prova. Si è usato il comando nativo verificato. Screenshot finestra 3456×1990 pixel, viewport CSS non misurato: **400% non viene dichiarato equivalente al requisito a 320 CSS px**. Il campione non copre tutte le route, il loro intero contenuto o ogni stato tastiera. Restano completamento matrice, percorso con lettore di schermo e prove integrali di reflow/focus. #47 resta aperta; nessuna certificazione WCAG.

## Media esterni #49

- `https://www.youtube.com/watch?v=mQaqXK7z9LM`: pagina «PSICOTERAPIA - Sigmund Freud», canale The School of Life con badge verificato. Player avviato, avanzamento osservato 0:02 / 7:19 e pulsante Pausa; quindi messo in pausa. Identità del canale e disponibilità del campione ora riscontrate, non diritti di riproduzione.
- `https://www.youtube.com/watch?v=2VRRx7Mtep8`: pagina «Living with a black dog», canale World Health Organization (WHO). Player avviato, avanzamento osservato 0:02 / 5:56 e pulsante Pausa; quindi messo in pausa.
- Entrambi i player nel campione espongono «Sottotitoli/sottotitoli codificati non disponibili». Non completata verifica di eventuali alternative o qualità/accessibilità dell’intero video. Non attestare accessibilità audiovisiva completa.
- Issuu: resta l’esito inconclusivo 403/404 e il blocco browser documentato nel rapporto precedente; non aggirato, non rimosso.
- Facebook e riferimenti personali/professionali: disponibilità HTTP già documentata; identità e attualità restano da confermare con Sabina. Non inferite dall’account o dall’URL.

## Proposta JSON-LD separata

[PR #79](https://github.com/egnoatt/Sabina_site/pull/79), draft: 12 test, lint, build locali PASS; verifica degli otto HTML generati, cinque citazioni, nessun autore locale inferito. I test della proposta non sostituiscono le prove di produzione. Nessuna approvazione né pubblicazione della proposta dedotta dalle precedenti PR.
