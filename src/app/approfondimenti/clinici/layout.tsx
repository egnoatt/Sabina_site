import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Approfondimenti Clinici - Sabina Scattola",
  description: "Approfondimenti sulle tecniche e le esperienze cliniche per il benessere psicologico con la Dott.ssa Sabina Scattola.",
};

export default function CliniciLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
