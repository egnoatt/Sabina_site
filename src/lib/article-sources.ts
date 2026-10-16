// Bibliographic sources already credited in the approved visible articles (PR #77).
// These authors belong to the cited source, not automatically to the local adaptation.
const sources: Record<string, { author: string; url: string; publisher: string }> = {
  'neuroscienze-confermano-efficacia-terapia-psicoanalitica': {
    author: 'Paola Emilia Cicerone', publisher: 'L’Espresso',
    url: 'https://lespresso.it/c/idee/2015/9/7/sigmund-freud-aveva-ragione-le-nuove-ricerche-lo-riabilitano/42307',
  },
  '2015-03-02-psicoanalisi-e-societa-le-mamme-narciso': {
    author: 'Massimo Recalcati', publisher: 'la Repubblica',
    url: 'https://www.massimorecalcati.it/articoli',
  },
  'tutto-quello-che-avrei-voluto-sapere-prima-di-andare-dallo-psicologo': {
    author: 'Hannah Ewens', publisher: 'VICE',
    url: 'https://www.vice.com/it/article/cose-da-sapere-prima-di-andare-in-terapia-psicologo-psichiatra/',
  },
  'la-depressione-oscura-il-nostro-futuro': {
    author: 'Sara Ficocelli', publisher: 'la Repubblica',
    url: 'https://inchieste.repubblica.it/it/repubblica/rep-it/2014/10/17/news/la_depressione_al_tempo_della_crisi-97695717/index.html',
  },
  'cosa-devi-sapere': {
    author: 'Casey Gueren', publisher: 'BuzzFeed',
    url: 'https://www.buzzfeed.com/caseygueren/15-things-therapists-actually-want-you-to-know',
  },
};

export function getArticleCitation(slug: string): string | undefined {
  // Text citations keep bibliographic index URLs distinct from original article URLs.
  if (!Object.prototype.hasOwnProperty.call(sources, slug)) return undefined;
  const source = sources[slug];
  return `${source.author}, ${source.publisher}. Fonte: ${source.url}`;
}
