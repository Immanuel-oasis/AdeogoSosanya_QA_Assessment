import { defineConfig } from "cypress";


import { registerTestDocumentation } from 'cypress_test_documenter/src/node'
export default defineConfig({

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      registerTestDocumentation(on, config)
      return config
    },
  },
});
