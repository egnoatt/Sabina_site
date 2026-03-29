import Link from 'next/link';
import { AcademicCapIcon, EnvelopeIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { getAllPosts } from '@/lib/posts';
import { professionalStatus } from '@/config/professionalStatus';
import SiteBanner from '../components/SiteBanner';

type BlogTeaser = {
  title: string;
  date?: string;
  excerpt?: string;
  slug: string;
};

export default function Home() {
  const posts: BlogTeaser[] = getAllPosts().slice(0, 3) as BlogTeaser[];
  const fmt = (iso?: string) =>
    iso ? new Intl.DateTimeFormat('it-IT', { dateStyle: 'medium' }).format(new Date(iso)) : '';

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Site-wide informational banner (non-blocking) */}
      <SiteBanner />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#1F5C4A] via-[#5C8976] to-[#F7FAF9] py-20 md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <svg
            viewBox="0 0 1440 900"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1F5C4A" />
                <stop offset="60%" stopColor="#78A18A" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="wave2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#heroGrad)" />
            <path
              d="M0 610 C 240 560, 480 660, 720 610 C 960 560, 1200 660, 1440 610 L 1440 900 L 0 900 Z"
              fill="url(#wave1)"
            />
            <path
              d="M0 720 C 240 680, 480 760, 720 720 C 960 680, 1200 760, 1440 720 L 1440 900 L 0 900 Z"
              fill="url(#wave2)"
            />
          </svg>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 [background:linear-gradient(to_bottom,rgba(16,32,39,0.32),rgba(16,32,39,0.14),transparent)]"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/20 bg-white/10 px-6 py-10 text-center shadow-[0_24px_80px_rgba(16,32,39,0.12)] backdrop-blur-sm md:px-12 md:py-14">
            <SparklesIcon className="mx-auto mb-6 h-14 w-14 text-white/90" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
              Profilo professionale
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Sabina Scattola
            </h1>
            <p className="mt-4 text-xl font-medium text-white md:text-2xl">
              Psicologa e Psicoterapeuta
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Esperienza clinica, formazione e approfondimenti in ambito psicologico e
              psicoterapeutico.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Il sito resta online come spazio professionale e informativo, con contenuti ordinati
              per ruolo, esperienza clinica e aggiornamento.
            </p>

            <div className="mt-10 flex items-center justify-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-text shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                  {professionalStatus.infoCtaLabel}
                </Link>
                <Link
                  href="/chi-sono"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  <AcademicCapIcon className="h-5 w-5" aria-hidden="true" />
                  Chi sono
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per chi e per cosa (pillars) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold text-brand-text text-center md:text-3xl">
            Ambiti di esperienza clinica
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600">
            Una sintesi dei principali ambiti clinici e professionali maturati nel corso
            dell&apos;esperienza.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Ansia', text: 'Comprendere i sintomi per ritrovare respiro e ritmo.' },
              { title: 'Umore', text: 'Riconnettersi a energie e interessi in modo graduale.' },
              {
                title: 'Stress lavoro',
                text: 'Riorganizzare confini e priorità per maggiore equilibrio.',
              },
              { title: 'Caregiver', text: 'Sostenere chi assiste, senza dimenticare se stessi.' },
              { title: 'Cognitivo', text: 'Valutazioni e interventi in età adulta e anziana.' },
              { title: 'Relazioni', text: 'Leggere i pattern relazionali e trovare nuove strade.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-text">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approccio & nota informativa */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-8 md:grid-cols-12">
            <div className="md:col-span-7 md:pr-6">
              <h2 className="text-2xl font-semibold text-brand-text md:text-3xl">
                Approccio professionale
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                L&apos;approccio psicodinamico e la centralità della relazione terapeutica hanno
                orientato il mio lavoro clinico e istituzionale, con attenzione alla storia della
                persona e al significato dei vissuti emotivi.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Questa prospettiva continua a informare il profilo professionale e i contenuti
                pubblicati su questo sito.
              </p>
            </div>
            <aside className="md:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Nota istituzionale
                </p>
                <h3 className="mt-3 text-lg font-semibold text-brand-text">Stato attuale</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  {professionalStatus.availabilityMessage}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {professionalStatus.sitePurposeMessage}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Credenziali */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3 md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Ruolo
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-text">
                Dirigente Psicologo – AULSS 7 Pedemontana
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Associazione
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-text">Vicepresidente “La Recherche”</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Esperienza
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-text">20+ anni di lavoro clinico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog teaser (dinamico) */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold text-brand-text text-center md:text-3xl">
            Approfondimenti
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600">
            Ultimi articoli dal blog.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.length > 0
              ? posts.map((p) => (
                  <article
                    key={p.slug}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <time className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {fmt(p.date)}
                    </time>
                    <h3 className="mt-2 text-lg font-semibold text-brand-text">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="hover:underline focus-visible:underline underline-offset-4"
                      >
                        {p.title}
                      </Link>
                    </h3>
                    {p.excerpt && <p className="mt-3 text-base leading-relaxed text-slate-700">{p.excerpt}</p>}
                    <Link
                      href={`/blog/${p.slug}`}
                      className="mt-4 inline-block text-sm font-medium text-brand-primary underline underline-offset-4 hover:no-underline focus-visible:underline"
                    >
                      Leggi tutto
                    </Link>
                  </article>
                ))
              : [1, 2, 3].map((i) => (
                  <article
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-brand-text">Titolo articolo {i}</h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-700">
                      Breve estratto di 1–2 righe per invogliare alla lettura.
                    </p>
                    <Link
                      href="/blog"
                      className="mt-4 inline-block text-sm font-medium text-brand-primary underline underline-offset-4 hover:no-underline focus-visible:underline"
                    >
                      Leggi tutto
                    </Link>
                  </article>
                ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-brand-primary underline underline-offset-4 hover:no-underline focus-visible:underline"
            >
              Tutti gli articoli
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200">
            <EnvelopeIcon className="h-5 w-5 text-brand-primary/80" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-semibold text-brand-text md:text-3xl">Hai domande?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
            Per informazioni generali o professionali consulta la pagina{' '}
            <Link
              href="/contatti"
              className="underline underline-offset-4 hover:no-underline focus-visible:underline"
            >
              contatti
            </Link>
            .
          </p>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">
            Vedi l&apos;informativa su{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:no-underline focus-visible:underline"
            >
              privacy
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
