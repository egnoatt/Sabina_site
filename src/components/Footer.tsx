import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Sabina Scattola - Psicologa e Psicoterapeuta</p>
        <p className="text-sm mt-2">
          Via XI Settembre 2001 3, 36065 Mussolente (VI) | 
          Telefono: +39 388 4279266 | 
          Email: sabinascat@live.com
        </p>

        <div className="mt-3 flex justify-center gap-4 items-center">
          <a
            href="https://www.facebook.com/sabinascattola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
          >
            <GlobeAltIcon className="w-5 h-5" /> Facebook
          </a>
        </div>

        <p className="text-xs mt-4">
          Sito realizzato da{" "}
          <a
            href="https://gnoatto.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 underline transition"
          >
            gnoatto.pro
          </a>
        </p>
        <p className="text-xs mt-2">
          <a
            href="/privacy"
            className="text-gray-500 hover:text-gray-700 underline transition"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;