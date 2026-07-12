import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

const target = process.env.PUBLIC_DEPLOY_TARGET ?? 'local';
const defaults = {
  local: 'http://localhost:4321',
  'hostinger-staging': 'http://localhost:4321',
  'hostinger-production': 'https://shaileshdudala.com',
  'github-pages-mirror': 'https://smgpulse007.github.io',
};
const site = process.env.PUBLIC_SITE_URL ?? defaults[target] ?? defaults.local;
const compatibilityPrefixes = [
  '/data-science-lab/',
  '/professional-systems/',
  '/projects/',
  '/quant-forecasting/',
  '/research-archive/',
  '/systems/',
];

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== '/404/' && !compatibilityPrefixes.some((prefix) => pathname.startsWith(prefix));
      },
    }),
  ],
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
