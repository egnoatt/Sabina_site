'use client';

import Link from 'next/link';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#1F5C4A]">
        Si è verificato un errore
      </h1>
      <p className="mt-4 text-base leading-relaxed">
        Riprova a caricare la pagina o torna alla Home.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button onClick={reset} className="rounded-2xl px-5 py-3 bg-[#1F5C4A] text-white">
          Riprova
        </button>
        <Link href="/" className="rounded-2xl px-5 py-3 ring-1 ring-[#1F5C4A]">
          Home
        </Link>
      </div>
    </main>
  );
}
