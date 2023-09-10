const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: 15,
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
