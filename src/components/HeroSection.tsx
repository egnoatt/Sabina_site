import { ReactNode } from 'react';

interface HeroSectionProps {
  titolo: string;
  sottotitolo?: string;
  icona?: ReactNode;
}

const HeroSection = ({ titolo, sottotitolo, icona }: HeroSectionProps) => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center py-24 bg-gradient-to-br from-[#1F5C4A] via-[#78A18A] to-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10">
        {icona && <div className="flex justify-center mb-4">{icona}</div>}
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          {titolo}
        </h1>
        {sottotitolo && (
          <p className="mt-4 text-xl md:text-2xl text-white/80 italic drop-shadow-md">
            {sottotitolo}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
