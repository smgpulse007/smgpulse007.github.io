import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

const target = process.env.PUBLIC_DEPLOY_TARGET ?? 'local';
const defaults = {
  local: {
    site: 'http://localhost:4321',
    canonical: 'http://localhost:4321',
    robots: 'noindex,nofollow',
  },
  'hostinger-production': {
    site: 'https://shaileshdudala.com',
    canonical: 'https://shaileshdudala.com',
    robots: 'index,follow',
  },
  'github-pages-mirror': {
    site: 'https://smgpulse007.github.io',
    canonical: 'https://shaileshdudala.com',
    robots: 'noindex,follow',
  },
};
if (!['local', 'hostinger-staging', 'hostinger-production', 'github-pages-mirror'].includes(target)) {
  throw new Error(`Unknown PUBLIC_DEPLOY_TARGET: ${target}`);
}

const stagingUrl = process.env.PUBLIC_SITE_URL;
if (target === 'hostinger-staging' && !stagingUrl) {
  throw new Error('Hostinger staging builds require PUBLIC_SITE_URL.');
}
const selected = target === 'hostinger-staging'
  ? { site: stagingUrl, canonical: stagingUrl, robots: 'noindex,nofollow' }
  : defaults[target];
const site = process.env.PUBLIC_SITE_URL ?? selected.site;
const canonical = process.env.PUBLIC_CANONICAL_URL ?? selected.canonical;
const robots = process.env.PUBLIC_ROBOTS ?? selected.robots;

for (const [name, value] of [['PUBLIC_SITE_URL', site], ['PUBLIC_CANONICAL_URL', canonical]]) {
  const parsed = new URL(value);
  if (target !== 'local' && (parsed.protocol !== 'https:' || ['localhost', '127.0.0.1'].includes(parsed.hostname) || parsed.hostname.endsWith('.invalid'))) {
    throw new Error(`${name} must be a public HTTPS URL for ${target}.`);
  }
}
if (target === 'hostinger-staging' && canonical !== site) {
  throw new Error('Hostinger staging canonical URL must match its temporary site URL.');
}
if (target !== 'local' && (site !== selected.site || canonical !== selected.canonical || robots !== selected.robots)) {
  throw new Error(`Unsafe deployment environment override for ${target}.`);
}
const compatibilityPrefixes = [
  '/data-science-lab/',
  '/professional-systems/',
  '/projects/',
  '/quant-forecasting/',
  '/research-archive/',
  '/systems/',
  '/my-ai-app-library/',
  '/work/lets-talk-doc/',
];

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    ...(target === 'hostinger-production' ? [sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== '/404/' && !compatibilityPrefixes.some((prefix) => pathname.startsWith(prefix));
      },
    })] : []),
  ],
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
