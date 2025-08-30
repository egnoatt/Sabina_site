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
      <nav className="container mx-auto py-4 flex gap-6 justify-center text-base leading-relaxed">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-1 transition-colors duration-300 focus-visible:underline underline-offset-4 ${
              pathname === link.href
                ? 'text-brand-primary font-semibold'
                : 'text-gray-600 hover:text-brand-primary'
            }`}
            aria-current={pathname === link.href ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
