import { getArticleCitation } from '../article-sources';
import { getAllPosts, getPostContent } from '../posts';

it('only cites sources that are visibly credited on the corresponding published article', () => {
  const cited = getAllPosts().filter(post => getArticleCitation(post.slug));
  expect(cited).toHaveLength(5);
  for (const post of cited) {
    const citation = getArticleCitation(post.slug)!;
    const content = getPostContent(post.slug)!.content;
    const [credit, url] = citation.split('. Fonte: ');
    expect(content).toContain(url);
    expect(content).toContain(credit.split(', ')[0]);
  }
});

it('does not invent sources for unresolved articles or inherited object keys', () => {
  for (const slug of ['8-segnali-per-andare-dallo-psicoterapeuta',
    'psicoterapia-gruppo-coppia-individuale-informazioni-trattamenti',
    'navigare-tra-piacere-e-dovere', 'unknown', 'toString', '__proto__']) {
    expect(getArticleCitation(slug)).toBeUndefined();
  }
});
