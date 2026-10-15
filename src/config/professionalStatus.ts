export type ProfessionalStatus = {
  isPrivatePracticeActive: boolean;
  availabilityMessage: string;
  institutionalRoleMessage: string;
  sitePurposeMessage: string;
  contactMessage: string;
  infoCtaLabel: string;
  infoLinkLabel: string;
};

export const professionalStatus: ProfessionalStatus = {
  isPrivatePracticeActive: false,
  availabilityMessage:
    "L'attività libero-professionale privata è chiusa. Questo sito personale non offre prestazioni o prenotazioni private.",
  institutionalRoleMessage:
    'La Dott.ssa Sabina Scattola ricopre attualmente un incarico a tempo indeterminato con contratto esclusivo presso ULSS 7 Pedemontana.',
  sitePurposeMessage: 'Questo è un sito personale, dedicato al percorso, all’esperienza e ai contenuti informativi di Sabina Scattola.',
  contactMessage:
    'Per comunicazioni generali e richieste relative al sito, consulta la pagina Contatti. Non sono disponibili prestazioni private.',
  infoCtaLabel: 'Contatti',
  infoLinkLabel: 'Maggiori informazioni',
};
