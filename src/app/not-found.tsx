import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="editorial-page text-center">
      <h1 className="editorial-title">Pagina non trovata</h1>
      <p className="mt-4 text-base leading-relaxed">
        La pagina richiesta non esiste o è stata spostata.
      </p>
      <Link href="/" className="editorial-button mt-8">
        Torna alla Home
      </Link>
    </div>
  );
}
