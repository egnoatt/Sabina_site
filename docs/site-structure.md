# 📂 Struttura del progetto — Sabina Scattola Site

.
├── .devcontainer
│ ├── devcontainer.json
│ └── postCreate.sh
├── .editorconfig
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── .vscode/ # Configurazioni editor (settings, tasks, snippets)
│ ├── extensions.json
│ ├── keybindings.json
│ ├── launch.json
│ ├── settings.json
│ ├── snippets
│ │ ├── fastapi.json
│ │ ├── react_next.json
│ │ └── tailwind.json
│ └── tasks.json
├── docs/ # Documentazione di progetto
│ ├── articolo-1000.md
│ ├── INDEX.md
│ ├── PROGETTO.md
│ ├── ProgressLog.md
│ ├── ROADMAP.md
│ ├── site-structure.md
│ └── TASKS.md
├── eslint.config.mjs
├── jest.config.js
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/ # File statici (immagini, font)
│ ├── file.svg
│ ├── fonts/OpenSans/\*.ttf|woff2
│ ├── globe.svg
│ ├── hero-image.jpg
│ ├── next.svg
│ ├── test-image.jpg
│ ├── vercel.svg
│ └── window.svg
├── pyproject.toml
├── src/
│ ├── app/ # Pagine Next.js (App Router)
│ │ ├── approfondimenti/
│ │ │ ├── clinici/
│ │ │ └── curiosita/
│ │ ├── blog/
│ │ │ ├── [slug]/
│ │ │ └── page.tsx
│ │ ├── chi-sono/
│ │ ├── contatti/
│ │ ├── formazione/
│ │ ├── privacy/
│ │ ├── servizi/
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx # Home page
│ ├── components/ # Componenti riusabili
│ ├── content/blog/ # Articoli Markdown
│ └── lib/ # Funzioni di supporto
├── tailwind.config.js
├── tsconfig.json
└── tsconfig.tsbuildinfo
