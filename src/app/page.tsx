import Link from 'next/link';
import { AcademicCapIcon, EnvelopeIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { getAllPosts } from '@/lib/posts';
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
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#1F5C4A] via-[#78A18A] to-white py-24 md:py-32">
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
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <SparklesIcon className="mx-auto mb-6 h-16 w-16 text-white" aria-hidden="true" />
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-white drop-shadow-md">
            Sabina Scattola
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-white drop-shadow-md">
            Psicologa Psicoterapeuta
          </p>
          <p className="mt-4 text-base md:text-lg text-white/80 drop-shadow-md">
            Valutazione neuropsicologica, sostegno ai caregiver e psicoterapia ad orientamento
            psicodinamico.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 backdrop-blur-sm bg-white/10 rounded-full px-4 py-3">
              <a
                href="mailto:sabinascat@live.com"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
              >
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                Scrivimi
              </a>
              <Link
                href="/chi-sono"
                className="inline-flex items-center gap-2 rounded-full border border-brand-accent px-6 py-3 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
              >
                <AcademicCapIcon className="h-5 w-5" aria-hidden="true" />
                Chi sono
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Per chi e per cosa (pillars) */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text text-center mb-2">
            Per chi e per cosa
          </h2>
          <p className="mt-2 text-gray-600 text-center mx-auto max-w-3xl">
            Ambiti in cui posso essere utile; descrizioni orientate al beneficio, non solo al
            sintomo.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-text">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approccio & primo colloquio */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-text mb-2">
                Approccio e metodo
              </h2>
              <p className="mt-4 text-gray-700">
                Lavoro con un orientamento psicodinamico, ponendo al centro la relazione terapeutica
                e la storia individuale. Il percorso viene definito insieme, con obiettivi
                realistici e rispettosi dei tempi personali.
              </p>
              <p className="mt-3 text-gray-700">
                Il primo passo è ascoltare e comprendere: ciò permette di dare un significato ai
                sintomi e di orientare cambiamenti sostenibili nella vita quotidiana.
              </p>
            </div>
            <aside className="md:col-span-5">
              <div className="rounded-2xl border border-brand-accent bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-text">Primo colloquio</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                  <li>Durata 45–60 minuti</li>
                  <li>Raccolta della domanda e della storia</li>
                  <li>Definizione di obiettivi e passi successivi</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Credenziali */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">Ruolo</p>
              <p className="mt-1 font-semibold text-brand-text">
                Dirigente Psicologo – AULSS 7 Pedemontana
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">Associazione</p>
              <p className="mt-1 font-semibold text-brand-text">Vicepresidente “La Recherche”</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">Esperienza</p>
              <p className="mt-1 font-semibold text-brand-text">20+ anni di lavoro clinico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog teaser (dinamico) */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text text-center mb-2">
            Approfondimenti
          </h2>
          <p className="mt-2 text-gray-600 text-center mx-auto max-w-3xl">
            Ultimi articoli dal blog.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.length > 0
              ? posts.map((p) => (
                  <article
                    key={p.slug}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <time className="text-xs uppercase tracking-wide text-gray-500">
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
                    {p.excerpt && <p className="mt-2 text-gray-700">{p.excerpt}</p>}
                    <Link
                      href={`/blog/${p.slug}`}
                      className="mt-3 inline-block text-brand-primary underline underline-offset-4 hover:no-underline focus-visible:underline"
                    >
                      Leggi tutto
                    </Link>
                  </article>
                ))
              : [1, 2, 3].map((i) => (
                  <article
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-brand-text">Titolo articolo {i}</h3>
                    <p className="mt-2 text-gray-700">
                      Breve estratto di 1–2 righe per invogliare alla lettura.
                    </p>
                    <Link
                      href="/blog"
                      className="mt-3 inline-block text-brand-primary underline underline-offset-4 hover:no-underline focus-visible:underline"
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

      {/* Testimonianze con nota etica */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text text-center mb-2">
            Testimonianze
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 text-left">
            <blockquote className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="italic">
                “La Dottoressa mi ha aiutato a superare un periodo difficile.”
              </p>
              <footer className="mt-3 font-semibold text-brand-primary">— Maria G.</footer>
            </blockquote>
            <blockquote className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="italic">
                “Un sostegno fondamentale in un percorso di crescita personale.”
              </p>
              <footer className="mt-3 font-semibold text-brand-primary">— Luca F.</footer>
            </blockquote>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            Le testimonianze sono riportate nel rispetto della privacy.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/5 ring-1 ring-brand-primary/20">
            <EnvelopeIcon className="h-5 w-5 text-brand-primary/80" aria-hidden="true" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text">Hai domande?</h2>
          <p className="mt-2 text-gray-700">
            Scrivimi per informazioni: ti risponderò al più presto.
          </p>
          <p className="mt-4 text-xs text-gray-500">
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
