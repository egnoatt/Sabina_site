import { GlobeAltIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { professionalStatus } from '@/config/professionalStatus';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-100">
      <div className="container mx-auto mt-2 px-6 text-center">
        <p className="text-sm font-medium leading-relaxed text-slate-100 md:text-base">
          &copy; {new Date().getFullYear()} Sabina Scattola - Psicologa e Psicoterapeuta
        </p>
        <hr className="mx-auto my-8 max-w-5xl border-t border-slate-700" />
        <div className="mt-6 flex flex-col items-center gap-3 text-sm leading-relaxed text-slate-200 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+XI+Settembre+2001+3,+36065+Mussolente+VI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-200 transition hover:text-white focus-visible:underline underline-offset-4"
          >
            <MapPinIcon className="w-4 h-4" aria-hidden="true" />
            Via XI Settembre 2001 3, 36065 Mussolente (VI)
          </a>
          <a
            href="tel:+393884279266"
            className="flex items-center gap-2 text-slate-200 transition hover:text-white focus-visible:underline underline-offset-4"
          >
            <PhoneIcon className="w-4 h-4" aria-hidden="true" />
            +39 388 4279266
          </a>
          <a
            href="mailto:sabinascat@live.com"
            className="flex items-center gap-2 text-slate-200 transition hover:text-white focus-visible:underline underline-offset-4"
          >
            <EnvelopeIcon className="w-4 h-4" aria-hidden="true" />
            sabinascat@live.com
          </a>
        </div>
        <div className="mt-3 flex justify-center gap-4 items-center">
          <a
            href="https://www.facebook.com/sabinascattola"
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
