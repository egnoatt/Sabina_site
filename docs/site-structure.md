# Struttura del progetto - Sabina Scattola Site

Mappa sintetica dei file principali nel repository pubblico.

```text
.
├── .github/workflows/ci.yml
├── docs/
│   ├── INDEX.md
│   ├── design-system.md
│   ├── releases/2026-10-15-site-hardening.md
│   └── site-structure.md
├── public/
│   ├── fonts/OpenSans/
│   └── og.png
├── src/
│   ├── app/
│   │   ├── approfondimenti/
│   │   ├── blog/
│   │   ├── chi-sono/
│   │   ├── contatti/
│   │   ├── formazione/
│   │   ├── news/
│   │   ├── privacy/
│   │   ├── servizi/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── BlogContent.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ServiziContent.tsx
│   │   └── SiteBanner.tsx
│   ├── config/
│   │   └── professionalStatus.ts
│   ├── content/blog/
│   └── lib/
├── eslint.config.mjs
├── jest.config.js
├── next.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## Note

- I contenuti editoriali pubblici sono file Markdown in `src/content/blog`.
- I metadata globali e l'immagine Open Graph sono configurati in `src/app/layout.tsx`.
- `docs/` non contiene roadmap, appunti di lavoro o log operativi.
