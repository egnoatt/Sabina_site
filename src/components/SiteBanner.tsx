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
  // Keep server/client markup identical. The head pre-paint script hides a
  // previously dismissed banner before layout; this effect then removes it.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (professionalStatus.isPrivatePracticeActive) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentionally hides the hydrated banner when public availability changes.
      setVisible(false);
      return;
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        return;
      }

      const now = new Date();
      const until = new Date(raw);

      if (until > now) {
        setVisible(false);
      }
    } catch {
      // Storage unavailable (privacy mode, blocked storage): keep visible
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
    <div className="site-banner w-full border-b border-editorial-line bg-editorial-paper" role="status" aria-live="polite">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex min-h-[7rem] flex-wrap items-start gap-3 border border-editorial-line bg-editorial-mist px-4 py-4 text-sm text-slate-700 sm:flex-nowrap md:min-h-[5.5rem] md:px-5 md:py-4 md:text-base">
          <span className="order-1 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 sm:order-none">
            Aggiornamento
          </span>
          <div className="order-3 w-full min-w-0 sm:order-none sm:w-auto sm:flex-1">
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
            className="order-2 ml-auto shrink-0 min-h-11 rounded-full border border-editorial-line bg-white px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-primary sm:order-none sm:ml-0"
            aria-label="Chiudi avviso"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
