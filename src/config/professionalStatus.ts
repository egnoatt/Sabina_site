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
    "L'attività libero-professionale e psicoterapeutica è attualmente sospesa. Al momento non è prevista una data certa di ripresa.",
  institutionalRoleMessage:
    'La Dott.ssa Sabina Scattola ricopre attualmente un incarico a tempo indeterminato con contratto esclusivo presso ULSS 7 Pedemontana.',
  sitePurposeMessage: 'Il sito resta online come profilo professionale e informativo.',
  contactMessage:
    'Per comunicazioni generali o professionali è possibile utilizzare i contatti indicati. Non sono attive prese in carico private.',
  infoCtaLabel: 'Informazioni (attività privata sospesa)',
  infoLinkLabel: 'Maggiori informazioni',
};
