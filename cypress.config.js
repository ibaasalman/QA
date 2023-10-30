const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : "cypress/e2e/**/*.{js,ts,jsx,tsx,feature}",
    chromeWebSecurity:false,
    excludeSpecPattern : ["cypress/e2e/2-advanced-examples/*.js","cypress/e2e/1-getting-started/*.js"],
    screenshotOnRunFailure:true,
    trashAssetsBeforeRuns:true
    //the last 2 lines are for taking screenshots and delet it before next run
  },
 
});
