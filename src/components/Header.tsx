'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Chi Sono', href: '/chi-sono' },
    { label: 'Servizi', href: '/servizi' },
    { label: 'Formazione', href: '/formazione' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contatti', href: '/contatti' },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50 w-full">
      <nav className="container mx-auto py-4 flex gap-6 justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg font-medium transition-colors duration-300 ${
              pathname === link.href
                ? 'text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:text-green-700'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;