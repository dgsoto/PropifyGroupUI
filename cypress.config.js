const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: "test@test.com",
    password: "test12345",
    apiBaseUrl: 'https://api.propifygroup.com',
    userEndpoint: '/api/users',
    loginEndpoint: '/api/auth/login',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
