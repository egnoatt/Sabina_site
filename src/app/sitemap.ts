import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

const baseUrl = 'https://sabinascattola.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/chi-sono',
    '/servizi',
    '/contatti',
    '/formazione',
    '/news',
    '/blog',
    '/privacy',
    '/approfondimenti/clinici',
    '/approfondimenti/curiosita',
  ];

  const pages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const articles: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${encodeURIComponent(post.slug)}`,
    // Last significant edit only; publication date alone is not a reliable lastmod.
    ...(typeof post.updated === 'string' && !Number.isNaN(Date.parse(post.updated))
      ? { lastModified: new Date(post.updated) }
      : {}),
  }));

  return [...pages, ...articles];
}
