const { defineConfig } = require("cypress");
require("dotenv/config");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8484",
  },

  env: {
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
  },
});
