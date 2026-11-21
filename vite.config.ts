import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Vite wants both slashes, so a prefix needs a leading and a trailing one. "/" keeps dev and
// preview as they were. VITE_BASE overrides it; otherwise a GitLab Pages build takes the prefix
// straight from CI_PAGES_URL, which is https://<namespace>.gitlab.io/<slug>/ for a shared-domain
// project site and https://<domain>/ for a unique or custom one.
function pagesBase() {
  if (process.env.VITE_BASE) return process.env.VITE_BASE;
  const url = process.env.CI_PAGES_URL;
  if (!url) return '/';
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

const base = pagesBase();

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
