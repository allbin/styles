import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import path from 'path';

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
    TanStackRouterVite(),
  ],
  server: {
    port: 3001,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
