const { Given } = require('@cucumber/cucumber');

const { LoginPage } = require('../../src/pages/login.page.js');

Given('I am on the login page', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.navigateToLogin();
});
