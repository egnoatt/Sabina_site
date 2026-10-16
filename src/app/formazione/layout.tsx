import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Formazione | Sabina Scattola",
  description: "Formazione, aggiornamento professionale e specializzazione della Dott.ssa Sabina Scattola in psicoterapia psicodinamica e valutazione diagnostica.",
  alternates: { canonical: "/formazione" },
  openGraph: { images: ['/og.png'], title: "Formazione | Sabina Scattola", description: "Formazione, aggiornamento professionale e specializzazione della Dott.ssa Sabina Scattola in psicoterapia psicodinamica e valutazione diagnostica.", url: "/formazione" },
  twitter: { images: ['/og.png'], card: 'summary_large_image', title: "Formazione | Sabina Scattola", description: "Formazione, aggiornamento professionale e specializzazione della Dott.ssa Sabina Scattola in psicoterapia psicodinamica e valutazione diagnostica." },
};

export default function FormazioneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
