'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'siteBannerDismissedUntil'; // ISO timestamp
const DISMISS_DAYS = 30; // days to keep banner hidden after dismiss

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export default function SiteBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const now = new Date();
      if (raw) {
        const until = new Date(raw);
        if (until > now) {
          setVisible(false);
          return;
        }
      }
      setVisible(true);
    } catch {
      // Storage unavailable (SSR or privacy mode): show the banner
      setVisible(true);
    }
  }, []);

  const onClose = () => {
    try {
      const until = addDays(new Date(), DISMISS_DAYS).toISOString();
      localStorage.setItem(STORAGE_KEY, until);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="w-full bg-amber-50 border-b border-amber-200 text-amber-900"
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto max-w-5xl px-4 py-2 text-sm md:text-base flex items-start gap-3">
        <span className="font-medium">Aggiornamento:</span>
        <p className="flex-1">
          L&apos;attività clinica privata è temporaneamente sospesa. La ripresa è prevista entro il
          2025{' '}
          <Link
            href="/news"
            className="underline underline-offset-4 hover:no-underline focus-visible:underline"
          >
            Dettagli
          </Link>
        </p>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-md border border-amber-300 px-2 py-1 text-amber-900 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Chiudi avviso"
        >
          Chiudi
        </button>
      </div>
    </div>
  );
}
