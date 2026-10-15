import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { professionalStatus } from '@/config/professionalStatus';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-100">
      <div className="container mx-auto mt-2 px-6 text-center">
        <p className="text-sm font-medium leading-relaxed text-slate-100 md:text-base">
          &copy; {new Date().getFullYear()} Sabina Scattola - Sito personale
        </p>
        <hr className="mx-auto my-8 max-w-5xl border-t border-slate-700" />
        <div className="mt-6 flex flex-col items-center gap-3 text-sm leading-relaxed text-slate-200 sm:flex-row sm:justify-center sm:gap-6">
          <Link
            href="/contatti"
            className="flex items-center gap-2 text-slate-200 transition hover:text-white focus-visible:underline underline-offset-4"
          >
            Contatti
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-300">Attività privata chiusa; nessuna prestazione o prenotazione privata.</p>
        <div className="mt-3 flex justify-center gap-4 items-center">
          <a
            href="https://www.facebook.com/sabinascattolapsicologa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-200 transition hover:text-white focus-visible:underline underline-offset-4"
          >
            <GlobeAltIcon className="w-5 h-5" /> Facebook
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-300">
          {professionalStatus.availabilityMessage} {professionalStatus.sitePurposeMessage}
        </p>
        <p className="mt-6 text-xs text-slate-400">
          Sito realizzato da{' '}
          <a
            href="https://gnoatto.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 underline transition hover:text-white focus-visible:underline underline-offset-4"
          >
            gnoatto.pro
          </a>
        </p>
        <p className="mt-2 text-xs text-slate-400">
          <a
            href="/privacy"
            className="text-slate-100 underline transition hover:text-white focus-visible:underline underline-offset-4"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
