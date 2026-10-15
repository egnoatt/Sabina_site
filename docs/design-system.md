# Design System — SabinaScattola.com

**Baseline:** v1.0 · 15 ottobre 2026 · **CURRENT IMPLEMENTED / DOCUMENTED**  
**Scopo:** pagina di riferimento GitHub per tipografia, colori, componenti, contenuti e futuri cambiamenti visuali. Non è una nuova veste grafica e non modifica il sito da sola.

> **Principio di governo:** il design documentato descrive lo stato implementato. Le nuove proposte diventano *CANDIDATE* e si trasformano in *CURRENT* soltanto dopo PR, verifiche e approvazione. Non confondere il gusto grafico con una verifica WCAG.

## 1. Identità e principi

Sito professionale **informativo**, non canale di acquisizione o prenotazione di pazienti privati. Priorità: fiducia, sobrietà, leggibilità, leggerezza tecnica e trasparenza sullo stato dell'attività.

- Linguaggio calmo e preciso, senza promesse di risultati clinici.
- Il nome e le competenze di Sabina precedono elementi decorativi.
- L'attività privata sospesa deve rimanere riconoscibile senza trasformare ogni pagina in una schermata di avviso.
- Accessibile prima che scenografico: ordine semantico, tastiera, contrasto, zoom, viewport mobile.
- Niente cambi di design casuali: il cambiamento deve avere una ragione e una verifica.

## 2. Palette CURRENT

I token sono definiti in [`tailwind.config.js`](../tailwind.config.js), sotto `theme.extend.colors.brand`.

| Token Tailwind | Esadecimale | Uso previsto | Note |
| --- | --- | --- | --- |
| `brand-primary` | **`#1F5C4A`** | Link, focus, icone, azioni primarie | Verde scuro |
| `brand-text` | **`#172E29`** | Titoli e testo in evidenza | Verde quasi nero |
| `brand-accent` | **`#BFD8CC`** | Elementi secondari e stati delicati | Verde salvia chiaro |
| `white` | **`#FFFFFF`** | Background di pagina e card | Base |
| `slate-50` | **`#F8FAFC`** | Fondi di sezioni e card | Neutro |
| `slate-700` | **`#334155`** | Testi secondari | Neutro |
| `slate-900` | **`#0F172A`** | Footer e superfici scure | Neutro |
| Hero panel locale | **`#102027`** con opacità 90% | Protegge la leggibilità dell'hero | Classe presente in `src/app/page.tsx` |

**Non sono ancora tutti token semantici centralizzati.** Colori di sfondi, bordi e gradienti possono essere specificati direttamente nei componenti; in un eventuale redesign v2 vanno inventariati e razionalizzati prima di modificare gli stili.

### Regola per i futuri colori

Per aggiungere o cambiare un colore: motivazione → proposta con campioni visuali → misura contrasto WCAG → aggiornamento dei token → aggiornamento di questa pagina → test screenshot e PR. Non introdurre nuovi esadecimali inline senza motivazione.

## 3. Tipografia CURRENT

- **Font di interfaccia:** `OpenSans` locale, fallback `Arial, sans-serif`.
- **File fonte nel repository:** `public/fonts/OpenSans/*.woff2` (Regular, Bold, Italic).
- **Definizioni:** `src/app/globals.css`, `@font-face` con `font-display: swap`.
- **Font del tema Tailwind:** `fontFamily.sans` in `tailwind.config.js`.
- **Nessun caricamento Google Fonts Inter nel layout corrente.**
- **Titolo hero:** `text-4xl md:text-6xl font-bold`; **H1 interni:** di norma `text-3xl md:text-4xl`.
- **Corpo:** generalmente `text-base leading-relaxed`; **note:** `text-sm` / `text-xs` in base alla gerarchia.
- **Articoli:** classi `prose` da `@tailwindcss/typography`.

Da valutare in una futura revisione: scala tipografica unica, larghezza del testo lungo e spaziatura verticale per gli articoli. Il design attuale NON usa ancora una scala tokenizzata completa.

## 4. Layout, spaziatura e responsive

| Ambito | Regola corrente / riferimento |
| --- | --- |
| Contenitore principale | spesso `max-w-5xl mx-auto px-6` |
| Contenuto lungo | `max-w-3xl` o `max-w-4xl` |
| Sezioni | `py-12`, `py-16` e `py-20` secondo la pagina |
| Card | `rounded-xl` / `rounded-2xl`, bordi `slate-200` e ombre leggere |
| Griglie | mobile a una colonna; `sm:` o `md:` per due/tre colonne |
| Header mobile | menu apribile/chiudibile; pulsante da almeno `min-h-11 min-w-11` |
| Breakpoint menu | switch desktop a `md` (768px con configurazione Tailwind standard) |
| Viewport di regressione | **320 / 375 / 768 / 1280px**, test Playwright in CI |

Sono ammessi layout differenti solo quando rispondono a una necessità di contenuto documentata.

## 5. Componenti e comportamento

| Componente | Codice fonte | Contratto di design |
| --- | --- | --- |
| Header / menu | [`src/components/Header.tsx`](../src/components/Header.tsx) | Desktop orizzontale; mobile espandibile, `aria-expanded`, stato attivo `aria-current`, Escape |
| Avviso stato attività | [`src/components/SiteBanner.tsx`](../src/components/SiteBanner.tsx) | Informazione ben visibile; layout mobile senza testo schiacciato; dismiss locale fino a 30 giorni |
| Footer | [`src/components/Footer.tsx`](../src/components/Footer.tsx) | Contatti e riferimenti coerenti con lo stato reale; rinvio privacy |
| Home | [`src/app/page.tsx`](../src/app/page.tsx) | Hero sobrio, competenze, approccio, approfondimenti, CTA informative |
| Blog | [`src/app/blog/page.tsx`](../src/app/blog/page.tsx) e [articolo](../src/app/blog/%5Bslug%5D/page.tsx) | Gerarchia titolo, data, contenuto leggibile, riferimenti verificabili |
| Status testo | [`src/config/professionalStatus.ts`](../src/config/professionalStatus.ts) | Fonte centralizzata per stato professionale; nessun invito a prenotazioni private |

## 6. Accessibilità e qualità non negoziabili

- Un solo `<main id="main">` per pagina; skip link `#main` sempre attivo (PR #15).
- Navigazione utilizzabile da tastiera; target cliccabili su mobile; focus visibile.
- Contrasto del testo da misurare in contesto, non dedurre solo dalla palette.
- Titoli semanticamente gerarchici; immagini informative con testo alternativo; icone decorative `aria-hidden`.
- Evitare overflow orizzontale tra 320 e 1280px.
- Test automatici: `.github/workflows/ci.yml`, `ux-smoke.yml`, `landmarks.yml`.
- Audit WCAG 2.2 AA completo e Core Web Vitals **non attestati** dal solo smoke test: restano verifiche specifiche future.

## 7. Processo di cambiamento design (governance)

1. **Issue o breve decisione:** obiettivo, utenti, componente, vincoli, problema osservato.
2. **CANDIDATE:** screenshot/bozza desktop e mobile; differenze rispetto a CURRENT; nessun contenuto clinico inventato.
3. **IMPLEMENTATION:** modifiche su branch e PR; se un nuovo token diventa stabile, aggiornare prima/insieme `tailwind.config.js`.
4. **VALIDATION:** lint, typecheck, build, test browser, contrasto, focus e controllo di 404/contatti/privacy.
5. **REVIEW / APPROVAL:** verificare con il proprietario identità visiva, testi e impatti comunicativi. Privacy e affermazioni cliniche richiedono gate separati.
6. **MERGE:** solo dopo verifiche; confermare deploy Production, controllo URL e nessuna regressione.
7. **BASELINE:** aggiornare questa pagina, le evidenze e la nota di rilascio.

## 8. Prossime ipotesi (NON approvate)

- Scala tipografica coerente per hero/H1/H2/H3/body/article.
- Token semantici per `surface`, `muted`, `border`, `focus`, `danger`.
- Variante visuale più editoriale, eventualmente con foto professionale autorizzata.
- Maggiore coerenza di spaziatura tra `/formazione`, `/servizi` e blog.
- Revisione degli articoli storici con distinzione tra archivio e conoscenze aggiornate.

**Queste idee NON sono parte del design CURRENT** e non vanno introdotte senza nuova PR.

---

**Responsabilità:** il repository `egnoatt/Sabina_site` contiene la baseline tecnica, mentre l'identità visiva e i contenuti pubblici devono essere convalidati da Sabina prima dei cambiamenti sostanziali.
