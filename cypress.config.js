const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: 15,
  viewportWidth: 1280,
  viewportHeight: 1400,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportPageTitle: 'CEPSA - CYPRESS',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
