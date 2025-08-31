import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#1F5C4A]">Pagina non trovata</h1>
      <p className="mt-4 text-base leading-relaxed">
        La pagina richiesta non esiste o è stata spostata.
      </p>
      <Link href="/" className="inline-block mt-8 rounded-2xl px-5 py-3 bg-[#1F5C4A] text-white">
        Torna alla Home
      </Link>
    </main>
  );
}
