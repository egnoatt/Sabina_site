# Sabina Scattola - Sito ufficiale

[sabinascattola.com](https://www.sabinascattola.com)

Sito web pubblico sviluppato con **Next.js 16**, **TypeScript**, **Tailwind CSS 3**, App Router e Vercel.
Il repository contiene il codice del sito, i contenuti editoriali pubblici e una documentazione tecnica essenziale.

![Anteprima Open Graph](public/og.png)

## Tecnologie

- Next.js 16 con App Router
- TypeScript
- Tailwind CSS v3
- Markdown per gli articoli del blog (`src/content/blog`)
- Metadata SEO, sitemap, robots.txt e Open Graph
- Heroicons
- JSON-LD per breadcrumb e articoli

## Setup locale

```bash
npm install
npm run dev
```

Poi apri [http://localhost:3000](http://localhost:3000).

## Documentazione

- [Documentazione pubblica](./docs/INDEX.md)
- [Struttura del progetto](./docs/site-structure.md)
- [Design System v1.0 — colori, tipografia, componenti e regole](./docs/design-system.md)
- [Nota di release/closeout — 15 ottobre 2026](./docs/releases/2026-10-15-site-hardening.md)

La cartella `docs/` contiene solo documentazione tecnica pubblica, design system e note di rilascio prive di dati riservati. Bozze private, credenziali, log operativi e pianificazioni interne non appartengono a questa documentazione.

## Stato del progetto

- Deploy pubblico su Vercel
- Pagine principali: home, chi sono, formazione, servizi, blog, approfondimenti, contatti, privacy
- Blog basato su Markdown locale
- Metadata SEO con sitemap e robots
- Componenti condivisi per header, footer, contenuti blog, servizi e banner informativo
- Test unitari configurati per le utilità blog

## Contatti progetto

Sito sviluppato e mantenuto da [gnoatto.pro](https://gnoatto.pro).

Per informazioni sul sito pubblico: [sabinascattola.com](https://www.sabinascattola.com)

## Licenza

- **Codice del sito**: rilasciato con licenza [MIT](LICENSE).
- **Contenuti (testi, immagini, articoli)**: © Sabina Scattola - Tutti i diritti riservati.
  Non è consentito il riuso dei contenuti senza autorizzazione.
