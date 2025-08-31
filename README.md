# Sabina Scattola — Sito Ufficiale

Sito web sviluppato con **Next.js 15**, **TypeScript**, **Tailwind CSS 3**, App Router e Vercel.
Include palette brand, accessibilità migliorata, breadcrumb, JSON-LD per SEO avanzata.

## 🚀 Tecnologie

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v3 + Typography
- Markdown blog (`src/content/blog`)
- SEO integrata (sitemap.xml, robots.txt, metadata, OG images, RSS feed)
- Open Sans come font principale
- Heroicons (outline/solid)
- JSON-LD per BreadcrumbList e Article

## ⚡ Setup locale

```bash
npm install
npm run dev
```

Poi apri [http://localhost:3000](http://localhost:3000).

## 📂 Struttura documentazione

La documentazione dettagliata si trova nella cartella [`docs/`](./docs):

- [PROGETTO.md](./docs/PROGETTO.md) → specifica e obiettivi
- [ROADMAP.md](./docs/ROADMAP.md) → evoluzione pianificata
- [ProgressLog.md](./docs/ProgressLog.md) → log tecnico e avanzamento
- [TASKS.md](./docs/TASKS.md) → attività completate e future

## ✅ Stato attuale

- Deploy online su Vercel completato
- Allineata palette brand (verde scuro #1F5C4A, brand.text, brand.bg, brand.accent)
- Tipografia uniforme: H1 `text-3xl md:text-4xl`, testo base `text-base leading-relaxed`
- Breadcrumb + JSON-LD in tutte le pagine (Chi Sono, Formazione, Blog, Contatti, Servizi)
- CTA verdi solide con fallback inline (`bg-[#1F5C4A] text-white`) replicate su tutte le pagine
- Footer coerente con sfondo verde scuro, linea bianca sottile, contatti interattivi
- Blog rifinito: titolo solo in page, lista + CTA robusta in BlogContent, slug sicuri
- Rimosso MotionSection/dynamic dalle pagine server (Formazione, Blog)

## 📌 ToDo a breve

- Verifica finale con Lighthouse (Performance, SEO, Accessibilità, Best Practices)
- Pulizia e allineamento documentazione (site-structure, roadmap, progetto)
- Test caching e immagini ottimizzate con next/image
- Test E2E (Cypress)
- Ottimizzazione performance avanzata
- Analisi analytics e sicurezza

## 📝 Changelog Sintetico

**2025-08-30**

- Uniformata palette colori con brand tokens
- Aggiornata tipografia coerente (H1, testo base)
- Rimossi MotionSection e dynamic dalle pagine server
- Fix Blog: eliminato doppio titolo, slug sicuri, lista + CTA robusta
- Aggiornati CTA in tutte le pagine con pulsanti solidi verdi
- Aggiunti breadcrumb + JSON-LD anche a Servizi
- Footer reso coerente su tutte le pagine

**2025-08-28**

- Fix definitivo configurazione Tailwind CSS (v3.4) e globals.css.
- Aggiunta SEO avanzata: sitemap.xml, robots.txt, metadata dinamici.
- Implementazione immagini OG dinamiche per i post del blog.
- Creazione e pubblicazione del feed RSS per il blog.
- Compattazione documentazione: README semplificato + INDEX centralizzato in /docs.
- Uniformazione struttura e intestazioni dei documenti in /docs.
- Aggiunto JSON-LD Article con keywords, image e dateModified nei post del blog.
