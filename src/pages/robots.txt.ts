import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  const disallow = siteConfig.target === 'local' || siteConfig.target === 'hostinger-staging'
    ? 'Disallow: /'
    : 'Allow: /';
  const body = `User-agent: *\n${disallow}\nSitemap: ${new URL('/sitemap-index.xml', siteConfig.siteUrl)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
