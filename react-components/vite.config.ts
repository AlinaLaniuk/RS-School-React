import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';
/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.test.tsx'],
    coverage: {
      enabled: true,
      reporter: 'text',
      all: true,
      provider: 'istanbul',
      reportsDirectory: '/coverage',
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
    port: 3000,
  },
});
