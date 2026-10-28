import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://otg-website.vercel.app',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
});
