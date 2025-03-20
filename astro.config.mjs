import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  base:'/',
  outDir: 'dist',
  integrations: [vue({
    jsx:true,
    devtools:true
  })],
  output: 'static'
});