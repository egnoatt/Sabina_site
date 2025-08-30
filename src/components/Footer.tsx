import { GlobeAltIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1F5C4A] via-[#78A18A] to-white py-12 text-white">
      <div className="container mx-auto text-center mt-2">
        <p className="text-gray-100 text-sm md:text-base font-medium leading-relaxed">
          &copy; {new Date().getFullYear()} Sabina Scattola - Psicologa e Psicoterapeuta
        </p>
        <hr className="my-8 border-t border-white/30 max-w-5xl mx-auto" />
        <div className="mt-6 flex flex-col items-center gap-2 text-sm leading-relaxed text-white sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+XI+Settembre+2001+3,+36065+Mussolente+VI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-white transition focus-visible:underline underline-offset-4"
          >
            <MapPinIcon className="w-4 h-4" aria-hidden="true" />
            Via XI Settembre 2001 3, 36065 Mussolente (VI)
          </a>
          <a
            href="tel:+393884279266"
            className="flex items-center gap-1 text-white hover:text-white transition focus-visible:underline underline-offset-4"
          >
            <PhoneIcon className="w-4 h-4" aria-hidden="true" />
            +39 388 4279266
          </a>
          <a
            href="mailto:sabinascat@live.com"
            className="flex items-center gap-1 text-white hover:text-white transition focus-visible:underline underline-offset-4"
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
            className="flex items-center gap-1 text-white hover:text-white transition focus-visible:underline underline-offset-4"
          >
            <GlobeAltIcon className="w-5 h-5" /> Facebook
          </a>
        </div>
        <p className="text-xs mt-4">
          Sito realizzato da{' '}
          <a
            href="https://gnoatto.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white underline transition focus-visible:underline underline-offset-4"
          >
            gnoatto.pro
          </a>
        </p>
        <p className="text-xs mt-2">
          <a
            href="/privacy"
            className="text-white hover:text-white underline transition focus-visible:underline underline-offset-4"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
