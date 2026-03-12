import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: './resources',
  vite: {
    plugins: [tailwindcss()],
  },
});
