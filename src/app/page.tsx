"use client";

import { useState, useEffect } from 'react';
import {
  AcademicCapIcon,
  EnvelopeIcon,
  SparklesIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">Attenzione</h2>
            <p className="text-gray-700">
            L'attività clinica privata è temporaneamente sospesa. La ripresa delle consulenze e delle sedute in libera professione è prevista entro il 2025.
            </p>
            <div className="text-right mt-4">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-32 bg-gradient-to-r from-[#2e7d32] to-[#102027]">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <SparklesIcon className="h-16 w-16 text-green-100 mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Sabina Scattola
          </h1>
          <p className="text-xl md:text-3xl mt-4 text-green-100 drop-shadow-sm">
            Psicologa e Psicoterapeuta
          </p>
          <p className="mt-4 text-lg md:text-xl text-green-200 italic drop-shadow-sm">
            "Una presenza accogliente per il tuo benessere psicologico."
          </p>
          <p className="text-xl md:text-3xl mt-4 text-green-100 drop-shadow-sm">
            Studio di Psicodiagnosi e Trattamenti personalizzati di Psicoterapia
          </p>
        </div>
      </section>

      {/* Introduzione personale generica */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4">Benvenuti nel mio sito</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Sono una psicologa e psicoterapeuta con oltre vent'anni di esperienza clinica e formativa in diversi contesti. Nel mio percorso ho affrontato molteplici sfide e tematiche psicologiche, mettendo sempre al centro la persona nella sua unicità.
          </p>
        </div>
      </section>

      {/* Chi Sono aggiornato */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-6 border-b-2 border-green-300 pb-2 flex justify-center items-center gap-2">
            <AcademicCapIcon className="h-7 w-7" /> Mi presento
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
            Sono una Psicologa ad indirizzo clinico e di comunità e Psicoterapeuta ad orientamento psicodinamico.<br />
            Attualmente lavoro come dirigente psicologo presso l'AULSS 7 Pedemontana (servizio di Neuropsicologia clinica).<br />
            Sono inoltre vicepresidente dell'Associazione ”La Recherche" per lo studio e la ricerca in psicoterapia psicoanalitica.<br />
            Ho maturato una lunga esperienza clinica in vari contesti terapeutici riabilitativi della salute mentale pubblica e privata. Dal 2008 al 2025 ho esercitato anche attività libera professionale presso il mio studio privato.
          </p>
          <div className="text-center mt-8">
            <a href="mailto:sabinascat@live.com" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
              <EnvelopeIcon className="h-6 w-6" /> Contattami
            </a>
          </div>
        </div>
      </section>

      {/* Testimonianze (RECUPERATE E COMPLETE) */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-10 flex justify-center items-center gap-2">
            <UserGroupIcon className="h-7 w-7" /> Testimonianze
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <p className="italic">"La Dottoressa mi ha aiutato a superare un periodo difficile. La consiglio vivamente!"</p>
              <p className="font-semibold text-green-700 mt-4">— Maria G.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <p className="italic">"Un sostegno fondamentale in un percorso di crescita personale."</p>
              <p className="font-semibold text-green-700 mt-4">— Luca F.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}