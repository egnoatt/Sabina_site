# 📑 PROGRESS LOG — Sabina Scattola Site

**2025-08-30**

- Allineata palette colori con brand tokens (brand.primary, brand.text, brand.accent, brand.bg).
- Aggiornati tutti i titoli e tipografia per coerenza: H1 `text-3xl md:text-4xl`, testo base `text-base leading-relaxed`.
- Rimossi MotionSection e dynamic import dalle pagine server (Formazione, Blog).
- Fix pagina Blog: rimosso doppio titolo, lista articoli e CTA robusta solo in BlogContent, slug gestiti con encodeURIComponent.
- Aggiornati CTA in tutte le pagine (Chi Sono, Servizi, Formazione, Blog) con pulsanti solidi verdi (`bg-[#1F5C4A] text-white`) e focus ring.
- Aggiunti breadcrumb + JSON-LD su Servizi (mancante) per uniformità con le altre pagine.
- Aggiornata documentazione in /docs e README alla versione v1.1.

## Data: 2025-08-30

### Partecipanti:

- Enrico Gnoatto

### Argomenti Discussi:

- Uniformità grafica e tipografica tra tutte le pagine.
- Introduzione breadcrumb mancante su Servizi.
- Revisione blog: eliminazione movimento anomalo, gestione slug sicura, CTA coerente.
- Revisione ServiziContent per coerenza visiva (icone, colori, CTA finale).
- Aggiornamento documentazione tecnica e README.

### Decisioni Prese:

- Standardizzare CTA con colore verde brand e testo bianco forzato.
- Mantenere breadcrumb + JSON-LD come parte obbligatoria di tutte le pagine.
- Non utilizzare MotionSection o wrapper dinamici in pagine server.
- Mantenere palette brand aggiornata con fallback inline in CTA per robustezza.

### Azioni da Intraprendere:

- Introdurre pagine 404/500 personalizzate eleganti.
- Aggiungere security headers (HSTS, Permissions-Policy, Referrer-Policy).
- Configurare CI minimale con lint/typecheck/build su GitHub Actions.

## 📝 Changelog Sintetico

**2025-08-28**

- Fix definitivo configurazione Tailwind CSS (v3.4) e globals.css.
- Aggiunta SEO avanzata: sitemap.xml, robots.txt, metadata dinamici.
- Implementazione immagini OG dinamiche per i post del blog.
- Creazione e pubblicazione del feed RSS per il blog.
- Compattazione documentazione: README semplificato + INDEX centralizzato in /docs.
- Uniformazione struttura e intestazioni dei documenti in /docs.
- Aggiunto JSON-LD Article con keywords, image e dateModified nei post del blog.

## Data: 2025-08-28

### Partecipanti:

- Enrico Gnoatto

### Argomenti Discussi:

- Correzione definitiva del file `tailwind.config.js` (problemi di commento e parsing).
- Ripulitura e semplificazione di `globals.css` per eliminare import non validi e garantire compatibilità con Tailwind v3.4.
- Integrazione SEO avanzata: aggiunta di sitemap.xml, robots.txt e metadata dinamici.
- Creazione immagini OG dinamiche per i post del blog con `@vercel/og`.
- Implementazione di un feed RSS automatico per il blog.
- Compattazione e uniformazione della documentazione: README semplificato e INDEX centralizzato in `/docs`.

### Decisioni Prese:

- Mantenere Tailwind CSS v3.4 con plugin Typography attivo per migliorare la resa dei contenuti.
- Utilizzare OG images e feed RSS come strumenti standard di distribuzione contenuti.
- Continuare a uniformare la documentazione tecnica con intestazioni e link coerenti.

### Azioni da Intraprendere:

- Aggiungere JSON-LD per Organization e Article per potenziare la SEO semantica.
- Implementare test end-to-end (Cypress) per la validazione delle funzionalità principali.
- Ottimizzare le performance (monitoraggio LCP, CLS, TBT) e introdurre analytics per il monitoraggio post-lancio.

# Meeting Notes - Sabina Scattola Site

Data: 2025-04-18

Partecipanti:
• Enrico Gnoatto

Argomenti Discussi:
• Risoluzione definitiva degli errori relativi alla gestione dinamica dei parametri (params.slug) nelle pagine dinamiche del blog su Next.js 15.
• Correzioni effettuate nella generazione statica delle pagine del blog (problemi di generateStaticParams e percorso file Markdown).
• Integrazione completa e funzionante del plugin Tailwind CSS Typography per una migliore formattazione estetica degli articoli.
• Standardizzazione e documentazione dettagliata degli stili tipografici (font, dimensioni testo e classi CSS), ora definiti chiaramente nel file PROGETTO.md.
• Conferma definitiva della struttura dei contenuti Markdown all’interno della cartella src/content/blog.
• Risoluzione completa e funzionante della visualizzazione dei contenuti Markdown tramite React-Markdown.

Decisioni Prese:
• Confermare definitivamente la gestione dei contenuti Markdown in src/content/blog.
• Continuare a utilizzare Tailwind Typography per una presentazione chiara ed elegante degli articoli.
• Standardizzare e rispettare scrupolosamente le nuove specifiche tipografiche indicate nella documentazione (PROGETTO.md).

Azioni da Intraprendere:
• Continuare la verifica cross-browser e su dispositivi mobili per confermare la piena compatibilità e fruibilità.
• Aggiornare la documentazione tecnica (Docs) con le procedure dettagliate per la creazione e formattazione corretta degli articoli Markdown.
• Proseguire con lo sviluppo estetico e la revisione delle pagine rimanenti, confermando coerenza UI/UX.
• Programmare una sessione finale di revisione e validazione estetica prima del rilascio ufficiale del sito.

## Data: 2025-04-15 (seconda sessione)

### Partecipanti:

- Enrico Gnoatto

### Argomenti Discussi:

- Verifica dell'applicazione degli stili Tailwind CSS su Next.js.
- Rimozione di file CSS duplicati e consolidamento in `/src/app/globals.css`.
- Corretto caricamento degli stili globali tramite il layout.
- Miglioramento estetico e tipografico della pagina `page.tsx`.
- Test di compilazione e revisione della struttura delle sezioni della homepage.

### Decisioni Prese:

- Mantenere `globals.css` unificato in `src/app`.
- Correggere `tailwind.config.js` per includere correttamente i percorsi `app` e `components`.
- Utilizzare Google Font (`Inter`) per migliorare l’aspetto testuale.
- Rifinire il layout per renderlo più armonico e visivamente coerente.

### Azioni da Intraprendere:

- Verificare impatto delle modifiche grafiche su dispositivi mobili.
- Rifinire la versione mobile delle sezioni: Hero, Chi Sono, Servizi.
- Continuare con aggiornamenti incrementali fino alla validazione definitiva.
- Eventuale revisione della palette colori.
- Aggiornare `PROGETTO.md` e verificare la sezione "UI/UX".

## Data: 2025-04-15

### Partecipanti:

- Enrico Gnoatto
- Nome 1
- Nome 2
- Altri

### Argomenti Discussi:

- Revisione e aggiornamento del documento di specifica (PROGETTO.md) e degli altri file di progetto.
- Conferma degli strumenti da utilizzare: VS Code, Canva, Next.js e Tailwind CSS.
- Discussione sul mantenimento e aggiornamento dei log e documenti di progetto (TASKS.md, ROADMAP.md, ProgressLog.md) per gestire il lavoro tra le diverse sessioni.
- Pianificazione della prototipazione interattiva per la homepage tramite Canva.

### Decisioni Prese:

- Aggiornare la specifica del progetto per includere sezioni sulla sicurezza, performance e testing.
- Confermare l'utilizzo di VS Code e Canva come strumenti principali, evitando di introdurre ulteriori software non necessari.
- Integrare i documenti di tracciamento (TASKS.md, ROADMAP.md e questo ProgressLog.md) nel repository Git per avere una visione completa dello stato del progetto.
- Pianificare una sessione di testing a breve termine, da effettuare tra due settimane.

### Azioni da Intraprendere:

- Aggiornare il file TASKS.md con le nuove attività emerse durante il meeting.
- Aggiornare il ROADMAP.md con ulteriori dettagli su milestone e scadenze.
- Preparare un prototipo interattivo della homepage con Canva.
- Organizzare il prossimo meeting di revisione e aggiornamento (data da definire).

## Data: YYYY-MM-DD

### Partecipanti:

- Nome 1
- Nome 2
- Altri

### Argomenti Discussi:

- Revisione della specifica del sito.
- Aggiornamento sulle attività completate e in corso.
- Decisione di mantenere VS Code e Canva come strumenti principali.

### Decisioni Prese:

- Approfondire la sezione "Sicurezza e Performance" nel documento di specifica.
- Pianificare una sessione di testing in due settimane.

### Azioni da Intraprendere:

- Aggiornare il TASKS.md con le nuove attività.
- Preparare un prototipo interattivo con Canva per la homepage.

Data: 2025-04-17

Partecipanti:
Enrico Gnoatto
Argomenti Discussi:
Problemi riscontrati durante l'implementazione e configurazione di Tailwind CSS versione 4, che hanno portato alla decisione di utilizzare Tailwind CSS versione 3.
Chiarimento sulla corretta configurazione del file postcss.config.js e delle direttive Tailwind CSS.
Analisi della root cause dei problemi di formattazione e visualizzazione delle pagine del sito web.
Discussione sulle lesson learned per prevenire problemi simili in futuro.
Decisioni Prese:
Confermata l'adozione della versione 3 di Tailwind CSS per garantire stabilità e velocità di sviluppo.
Confermata la configurazione definitiva del file postcss.config.js come segue:
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
};
Aggiornamento della documentazione di progetto (PROGETTO.md) con informazioni dettagliate sulla configurazione Tailwind CSS e sulle motivazioni della scelta della versione 3.
Azioni da Intraprendere:
Proseguire con lo sviluppo estetico delle pagine del sito, migliorando ulteriormente UI e UX.
Verificare il rendering e l'usabilità delle pagine su dispositivi mobili.
Inserire nella documentazione la nota sulle lesson learned per chiarire l'importanza di mantenere le versioni di tecnologia stabili e chiaramente documentate.
Aggiornare la ROADMAP.md per riflettere chiaramente i prossimi step operativi, incluso un focus sulla revisione estetica e funzionale.

## Data: 2025-04-26

### Partecipanti:

- Enrico Gnoatto

### Argomenti Discussi:

- Completamento e verifica finale delle modifiche apportate al sito.
- Aggiornamento del menu in modalità "sticky" per migliorare la navigazione e l'usabilità del sito.
- Revisione e conferma definitiva dei testi relativi a "Chi Sono", "Consulenza Psicologica", "Psicoterapia Individuale", "Supervisione Clinica" e "Disturbi Trattati" per enfatizzare l'approccio psicodinamico e psicoanalitico.
- Revisione della documentazione tecnica e funzionale del progetto per assicurare allineamento completo con le recenti modifiche.

### Decisioni Prese:

- Confermare l'implementazione del menu sticky per una migliore esperienza utente.
- Confermare l'aggiornamento definitivo dei testi per valorizzare chiaramente l'approccio psicodinamico e psicoanalitico.
- Procedere con il deploy finale su Vercel dopo aver verificato la compatibilità cross-browser e su dispositivi mobili.

### Azioni da Intraprendere:

- Effettuare il deploy finale del sito su Vercel.
- Condurre una verifica finale completa post-deploy per confermare la corretta implementazione e fruibilità di tutte le modifiche effettuate.
- Aggiornare ulteriormente la documentazione tecnica finale del progetto con indicazioni precise sul deployment e configurazioni effettuate.

---

## Data: 2025-05-02

### Partecipanti:

- Enrico Gnoatto

### Argomenti Discussi:

- Aggiornamenti finali e correzioni prima del deploy definitivo.
- Risoluzione errori ESLint e TypeScript per garantire una build pulita.
- Aggiornamento della documentazione tecnica dettagliata (PROGETTO.md) con le modifiche più recenti.
- Conferma della stabilità e compatibilità completa della configurazione attuale con Next.js 15 e Tailwind CSS v3.

### Decisioni Prese:

- Confermare definitivamente la risoluzione degli errori di build e validazione ESLint.
- Confermare l'aggiornamento definitivo di PROGETTO.md con tutte le modifiche recenti.
- Procedere al deploy finale su Vercel, data la conferma della stabilità attuale.

### Azioni da Intraprendere:

- Effettuare il deploy finale del sito web su Vercel.
- Testare e validare accuratamente il sito dopo il deploy finale.
- Monitorare e raccogliere eventuali feedback post-deploy per eventuali miglioramenti successivi.
