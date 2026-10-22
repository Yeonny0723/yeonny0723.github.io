import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { contentPlugin } from './plugins/content.js';

export default defineConfig({
  // GitHub 사용자 사이트(yeonny0723.github.io) 루트에 배포한다.
  base: '/',
  plugins: [contentPlugin(), react()],
});
