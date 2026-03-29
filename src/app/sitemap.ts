import type { MetadataRoute } from 'next';

const baseUrl = 'https://sabinascattola.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/chi-sono',
    '/servizi',
    '/contatti',
    '/formazione',
    '/news',
    '/blog',
    '/approfondimenti/clinici',
    '/approfondimenti/curiosita',
    '/approfondimenti/curiosita/clinici',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
