const { BasePage } = require('../pages/base.page.js');

class LoginPage extends BasePage {
    constructor (page) {
        super(page);
        this.url = 'https://www.saucedemo.com';
        this.usernameInput = '[data-test="username"]';
        this.passwordInput = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
    }

    async navigateToLogin () {
        await this.navigate(this.url);
    }

    async enterUsername (username) {
        await this.fill(this.usernameInput, username);
    }

    async enterPassword (password) {
        await this.fill(this.passwordInput, password);
    }

    async clickLogin () {
        await this.click(this.loginButton);
    }
}

module.exports = { LoginPage };