module.exports = {
  e2e: {
    experimentalSessionAndOrigin: true,
    viewportWidth: 1280,
    viewportHeight: 1400,
    setupNodeEvents(on, config) {
      chromeWebSecurity: false;
      // implement node event listeners here
    }
  }
};
