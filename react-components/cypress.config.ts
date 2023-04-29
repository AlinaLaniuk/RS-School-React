import { defineConfig } from "cypress";
import codeCoverageTask from '@cypress/code-coverage/task';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    video: false,
    defaultCommandTimeout: 10000,
  screenshotOnRunFailure: false,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
