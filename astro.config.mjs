// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Rimba-maker.github.io',
  base: '/legalize-id',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
