import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://fileroeco.github.io',
  base: '/elescorial',
  trailingSlash: 'always',
});
