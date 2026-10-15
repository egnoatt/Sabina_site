'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chi sono', href: '/chi-sono' },
  { label: 'Ambiti di esperienza', href: '/servizi' },
  { label: 'Formazione', href: '/formazione' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Navigazione principale"
        className="mx-auto max-w-6xl px-4 py-3"
        onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }}
      >
        <div className="flex items-center justify-between md:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="py-2 text-base font-semibold text-brand-text focus-visible:underline">
            Sabina Scattola
          </Link>
          <button
            type="button"
            aria-controls="site-navigation-links"
            aria-expanded={open}
            aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-300 text-brand-text transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            {open ? <XMarkIcon aria-hidden="true" className="h-6 w-6" /> : <Bars3Icon aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
        <div
          id="site-navigation-links"
          className={`${open ? 'flex' : 'hidden'} flex-col gap-1 pt-3 md:flex md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-4 md:pt-0`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary md:py-2 ${pathname === link.href ? 'bg-brand-accent/40 text-brand-primary' : 'text-slate-700 hover:bg-slate-100 hover:text-brand-primary'}`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
