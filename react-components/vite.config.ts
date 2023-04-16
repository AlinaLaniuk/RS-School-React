import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.test.tsx'],
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
    },
  },
});
