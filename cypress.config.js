const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'eitkub',
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);


    },
  },
});
