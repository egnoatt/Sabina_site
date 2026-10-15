# Documentazione pubblica - Sabina Scattola Site

Questa cartella raccoglie solo documentazione pubblica e tecnica essenziale del sito.

## Contenuto

- [README principale](../README.md): panoramica del progetto, stack e setup locale.
- [Struttura del progetto](./site-structure.md): mappa sintetica dei file principali.
- [Design System v1.0](./design-system.md): baseline visuale implementata e regole di modifica.
- [Release / closeout 15 ottobre 2026](./releases/2026-10-15-site-hardening.md): risultati pubblicati e backlog non risolto.

## Stato pubblico

- Il sito è una presenza web pubblica e informativa.
- I contenuti editoriali pubblicati sono in `src/content/blog`.
- La configurazione SEO principale è distribuita tra `src/app/layout.tsx`, `src/app/sitemap.ts` e `src/app/robots.ts`.
- L'anteprima social usa un'immagine Open Graph statica in `public/og.png`.

## Confini della documentazione

Non mantenere in questa cartella bozze private, log operativi, dati personali non necessari, credenziali, file esportati temporanei o pianificazioni interne. Le note di release sono pubbliche e limitate allo stato dei cambiamenti del sito.
