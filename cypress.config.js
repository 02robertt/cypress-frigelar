const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'seu-project-id',
  e2e: {
    defaultCommandTimeout: 8000,
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://a7833275c1tst-store.occa.ocs.oraclecloud.com',
    setupNodeEvents(on, config) {
    },
    video: true,
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
        
    },
   
  }
});