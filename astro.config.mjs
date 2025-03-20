import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: "https://angelzc790347.github.io/",
  integrations: [vue({
    jsx: true,
    devtools: true
  })],
  output: 'static',

});