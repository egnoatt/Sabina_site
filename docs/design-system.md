# Design System — SabinaScattola.com

**Versione:** **v2.0 — Essenza** · **15 ottobre 2026**  
**Baseline:** **CURRENT / IMPLEMENTED per homepage e template articoli**; le restanti pagine conservano i componenti della v1.0.  
**Release verificata:** [PR #23](https://github.com/egnoatt/Sabina_site/pull/23), merge `524eeea78c570c6ab90f07355e52d7baa367fa71`.

> **Governance:** CURRENT significa implementato in `main` e pubblicato; CANDIDATE significa proposta. La v2.0 è una **baseline parziale**, non l'attestazione di un redesign dell'intero sito, né una certificazione WCAG.

## 1. Identità e obiettivi

Il sito è **personale, informativo e divulgativo**, di Sabina Scattola. L'attività libero-professionale privata è **chiusa**, non sospesa. Non proporre prenotazioni o prestazioni private.

**Essenza:** impostazione editoriale luminosa, prevalenza dei contenuti, spaziature generose, bordi sottili e decorazioni minimali. Nessuna foto sintetica di Sabina: la figura botanica della homepage è un **SVG astratto** e decorativo.

## 2. Stato reale delle superfici

| Superficie | Baseline | Sorgente |
| --- | --- | --- |
| Home `/` | **v2.0 CURRENT** | [`src/app/page.tsx`](../src/app/page.tsx) |
| Decorazione del hero | **v2.0 CURRENT** | [`EditorialBotanical.tsx`](../src/components/EditorialBotanical.tsx) |
| Template `/blog/[slug]` | **v2.0 CURRENT** | [articolo](../src/app/blog/%5Bslug%5D/page.tsx) |
| Prosa degli articoli | **v2.0 CURRENT**, selettore `.editorial-prose` | [`globals.css`](../src/app/globals.css) |
| Elenco `/blog` | **Layout precedente** | [`BlogContent.tsx`](../src/components/BlogContent.tsx) |
| Header, banner, footer | **Componenti precedenti mantenuti** | `src/components` |
| Chi sono, formazione, servizi, contatti, privacy e altre route | **Layout precedenti mantenuti** | `src/app` |

La presenza di un token v2.0 nella configurazione non significa che ogni pagina utilizzi già Essenza.

## 3. Palette effettivamente implementata

**Fonte autoritativa:** `theme.extend.colors` in [`tailwind.config.js`](../tailwind.config.js).

| Token Tailwind | Colore | Uso |
| --- | --- | --- |
| `brand-primary` | `#1F5C4A` | Link, focus, CTA, illustrazione |
| `brand-text` | `#172E29` | Testo e titoli principali |
| `brand-accent` | `#BFD8CC` | Componenti legacy, stato attivo |
| `editorial-paper` | `#FAF8F4` | Fondo caldo di hero e articoli |
| `editorial-mist` | `#F0F2EA` | Sezioni e superfici chiare |
| `editorial-line` | `#D8DCD2` | Divisori sottili |
| `white` | `#FFFFFF` | Sezioni neutre, CTA inverse |
| `slate-700` | `#334155` | Testo lungo |

I token editoriali vivono in `colors.editorial.paper/mist/line` e generano classi come `bg-editorial-paper` e `border-editorial-line`.

**Debiti esistenti, non risolti dal closeout documentale:** il commento nel config etichetta ancora i token come `candidate` benché siano in produzione; la tipografia globale degli articoli non migrati usa ancora un blu `#007BFF`; la classe `.editorial-prose` ripete esadecimali in CSS anziché usare direttamente i token. Correggere in una PR tecnica distinta se necessario.

## 4. Tipografia

- **Interfaccia e corpo:** OpenSans da `public/fonts/OpenSans/*.woff2`, `font-display: swap`, fallback Arial/sans-serif.
- **Titoli editoriali:** `font-display` Tailwind → **Georgia, Times New Roman, serif**. Sono font di sistema, non nuove risorse distribuite.
- **H1 homepage:** `clamp(3.35rem, 7vw, 6.5rem)`, line-height 1.03, serif.
- **H1 articolo:** `clamp(2.55rem, 5.5vw, 4.85rem)`, line-height 1.08, serif.
- **Titoli di sezione:** serif fluido, gerarchia H2/H3 semantica e visiva.
- **Corpo articolo:** `prose prose-lg editorial-prose`, line-height **1.85**, larghezza massima **70ch**.
- **H2/H3/H4 negli articoli:** Georgia, peso normale, line-height 1.2, tracking -0.02em.
- **Link editoriali:** verde brand con sottolineatura, focus evidente.

Le differenze di resa della famiglia Georgia tra browser/sistemi restano accettate fino a una decisione tipografica successiva. Non scaricare font non autorizzati e non introdurre Google Fonts senza gate dedicato.

## 5. Contratti dei componenti

### Homepage `/`

- **Hero:** superficie `editorial-paper`, griglia a due colonne desktop e una mobile, contenitore `max-w-6xl`; nessun precedente pannello scuro e gradiente a onde.
- **`EditorialBotanical`:** SVG astratto inline, `aria-hidden=true`, senza chiamate a servizi esterni né ritratto.
- **CTA:** solo collegamenti informativi (articoli e percorso), non prenotazioni.
- **Porte d'accesso:** “Il mio percorso”, “Formazione”, “Gli articoli” con divisori sottili; mobile impilato.
- **Esperienza clinica:** contenuti esistenti distribuiti in sezioni con bordo superiore, senza ombre marcate.
- **Approccio:** area `editorial-mist`, testo storico conservato, sezione laterale sullo stato dell'attività.
- **Profilo, articoli e contatti:** gerarchia editoriale e collegamenti funzionanti.
- **`SiteBanner`:** banner legacy mantenuto; chiusura persistente tramite `localStorage.siteBannerDismissedUntil-v2` per 30 giorni.

### Articolo `/blog/[slug]`

- Contenitore `max-w-5xl`, area di lettura `max-w-[70ch]`.
- Breadcrumb Home → Blog → Titolo; testo lungo spezzabile in mobile.
- Titolo fluido serif, data, metadati SEO (canonical, OpenGraph, JSON-LD Article).
- `react-markdown` e sorgenti `src/content/blog/*.md` **non modificati** dalla v2.0.
- Link “Torna agli articoli” con focus di tastiera.
- Evitare la precedente card bianca con ombra pesante sull'articolo.

### Non ancora uniformato

La navigazione globale, il footer, il banner, `/blog`, `/chi-sono`, `/formazione`, `/servizi`, `/contatti` e `/privacy` non sono stati riprogettati con il vertical slice. Non attribuire loro proprietà visive nuove senza verifica del codice.

## 6. Test e accessibilità

Evidenze dal ramo/merge [PR #23](https://github.com/egnoatt/Sabina_site/pull/23):

- CI build, lint, typecheck, unit test e landmark smoke: **PASS**.
- Playwright responsive: **320 / 375 / 768 / 1280 px**, menu, navigazione, articolo e verifica overflow orizzontale: **PASS**.
- Test axe-core con regole WCAG-tagged su home e articolo, a 4 larghezze: **0 violazioni rilevate nelle 8 combinazioni**; **1 controllo incompleto per combinazione**. [Run / evidenze](https://github.com/egnoatt/Sabina_site/actions/runs/38794130852).
- Palette principale: campioni di contrasto misurati con risultati conformi AA nelle combinazioni esaminate, non estendibili automaticamente a tutti gli stati.
- Dopo il merge, Vercel Production **READY** sul commit `524eeea78c570c6ab90f07355e52d7baa367fa71`; home, articolo campione, contatti e privacy verificati HTTP 200.

**Non certificati:** audit WCAG 2.2 AA completo, tutti gli scenari di screen reader, zoom 200%/400%, focus nei casi estremi e Core Web Vitals in campo. Nessuna indicazione di conformità universale ricavata dai soli smoke test.

## 7. Processo di evoluzione

1. Definire esigenza, superfici e decisione di design.
2. Proporre token e mockup CANDIDATE separati dalla baseline corrente.
3. Implementare un vertical slice su branch, con preview e test.
4. Verificare responsive, tastiera, contrasto, SEO, privacy e regressioni.
5. Richiedere approvazione esplicita prima del merge.
6. Verificare produzione e **solo dopo** aggiornare questo Design System e le note di rilascio.

Modifiche ai contenuti clinici, permessi editoriali e informativa privacy sono processi separati.

## 8. Backlog, non CURRENT

- Estendere il layout a indice `/blog`, profilo, formazione, ambiti di esperienza e altre pagine, senza forzare una migrazione globale simultanea.
- Centralizzare ulteriormente componenti editoriali e scala tipografica.
- Risolvere il blu legacy dei link e il commento storico `candidate` in Tailwind.
- Misurare performance/Core Web Vitals e condurre audit WCAG esteso.
- Revisionare gli articoli storici e le fonti solo con autorizzazioni editoriali.

## 9. Tracciabilità

- **V1 storica:** [PR #16](https://github.com/egnoatt/Sabina_site/pull/16).
- **Concept A vs B:** [PR #22](https://github.com/egnoatt/Sabina_site/pull/22), proposta originaria separata.
- **Decisione:** direzione A — Essenza approvata per la Fase B.
- **Implementazione, QA e pubblicazione:** [PR #23](https://github.com/egnoatt/Sabina_site/pull/23), MERGED, commit `524eeea`.
- **Documento CURRENT:** questo file, che riflette le sole superfici implementate.

**Responsabilità:** GitHub registra la baseline tecnica; identità e contenuti pubblici restano soggetti alla review del proprietario e, dove appropriato, di Sabina.
