import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Vite wants both slashes, so a prefix needs a leading and a trailing one. "/" keeps dev and
// preview as they were. GitHub Pages serves a project site from /<repo>/, so the workflow sets
// VITE_BASE to that; a custom domain or an onmony.github.io root site needs it set to "/".
const rawBase = process.env.VITE_BASE || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
