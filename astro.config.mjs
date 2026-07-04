import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://smgpulse007.github.io',
  output: 'static',
  integrations: [react(), sitemap()],
});

