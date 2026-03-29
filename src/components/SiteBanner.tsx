'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { professionalStatus } from '@/config/professionalStatus';

const STORAGE_KEY = 'siteBannerDismissedUntil-v2'; // ISO timestamp
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

  if (professionalStatus.isPrivatePracticeActive || !visible) return null;

  return (
    <div className="w-full border-b border-slate-200 bg-white/95" role="status" aria-live="polite">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 shadow-sm md:px-5 md:py-4 md:text-base">
          <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
            Aggiornamento
          </span>
          <div className="flex-1">
            <p className="leading-relaxed">
              {professionalStatus.availabilityMessage}{' '}
              <Link
                href="/contatti"
                className="font-medium text-slate-800 underline underline-offset-4 hover:no-underline focus-visible:underline"
              >
                {professionalStatus.infoLinkLabel}
              </Link>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Chiudi avviso"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
