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
    '/approfondimenti/curiosita/clinici',
  ];

  const pages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const articles: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${encodeURIComponent(post.slug)}`,
    // Use the editorial date, not the current build date.
    ...(post.date ? { lastModified: new Date(post.date) } : {}),
  }));

  return [...pages, ...articles];
}
