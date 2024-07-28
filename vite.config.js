import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import moveScript from './vite-plugin-move-script'

export default defineConfig({
  plugins: [react(), moveScript()],
  assetsInclude: ['**/*.jpg', '**/*.png'],
  build: {
    sourcemap: false,
  },
  server: {
    sourcemap: false,
  },
});
