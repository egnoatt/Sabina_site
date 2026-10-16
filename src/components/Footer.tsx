import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { professionalStatus } from '@/config/professionalStatus';

const Footer = () => {
  return (
    <footer className="border-t border-editorial-line bg-editorial-mist py-12 text-brand-text">
      <div className="container mx-auto mt-2 px-6 text-center">
        <p className="text-sm font-medium leading-relaxed text-brand-text md:text-base">
          &copy; {new Date().getFullYear()} Sabina Scattola - Sito personale
        </p>
        <hr className="mx-auto my-8 max-w-5xl border-t border-editorial-line" />
        <div className="mt-6 flex flex-col items-center gap-3 text-sm leading-relaxed text-brand-primary sm:flex-row sm:justify-center sm:gap-6">
          <Link
            href="/contatti"
            className="flex items-center gap-2 text-brand-primary transition hover:text-brand-text focus-visible:underline underline-offset-4"
          >
            Contatti
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-700">Attività privata chiusa; nessuna prestazione o prenotazione privata.</p>
        <div className="mt-3 flex justify-center gap-4 items-center">
          <a
            href="https://www.facebook.com/sabinascattolapsicologa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-primary transition hover:text-brand-text focus-visible:underline underline-offset-4"
          >
            <GlobeAltIcon className="w-5 h-5" aria-hidden="true" /> Facebook
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-700">
          {professionalStatus.availabilityMessage} {professionalStatus.sitePurposeMessage}
        </p>
        <p className="mt-6 text-xs text-slate-600">
          Sito realizzato da{' '}
          <a
            href="https://gnoatto.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-text underline transition hover:text-brand-text focus-visible:underline underline-offset-4"
          >
            gnoatto.pro
          </a>
        </p>
        <p className="mt-2 text-xs text-slate-600">
          <a
            href="/privacy"
            className="text-brand-text underline transition hover:text-brand-text focus-visible:underline underline-offset-4"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
