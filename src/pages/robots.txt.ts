import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  const sitemap = siteConfig.isProduction
    ? `Sitemap: ${new URL('/sitemap-index.xml', siteConfig.siteUrl)}\n`
    : '';
  const body = `User-agent: *\nAllow: /\n${sitemap}`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
