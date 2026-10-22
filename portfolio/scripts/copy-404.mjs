import { copyFileSync, existsSync } from 'node:fs';

if (!existsSync('dist/index.html')) {
  throw new Error('dist/index.html not found; run vite build before creating the fallback');
}

copyFileSync('dist/index.html', 'dist/404.html');
