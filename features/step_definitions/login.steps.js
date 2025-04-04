const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { LoginPage } = require('../../src/pages/login.page.js');
const { InventoryPage } = require('../../src/pages/inventory.page.js');

When('I enter username {string}', async function (username) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.enterUsername(username);
});

When('I enter password {string}', async function (password) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.enterPassword(password);
});

When('I click the login button', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.clickLogin();
});

Then('I should be redirected to the inventory page', async function () {
    this.inventoryPage = new InventoryPage(this.page);
    const isOnInventoryPage = await this.inventoryPage.verifyOnInventoryPage();
    expect(isOnInventoryPage).toBeTruthy();

    const title = await this.inventoryPage.getPageTitle();
    expect(title).toContain('Product');
});
