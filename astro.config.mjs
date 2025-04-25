import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://anscg.net',
  integrations: [tailwind(), sitemap()],
  redirects: [
    { source: '/c', destination: 'https://bento.me/anscg', permanent: true }
  ]
});