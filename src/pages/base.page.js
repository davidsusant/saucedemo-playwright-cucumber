class BasePage {
    constructor (page) {
        this.page = page;
    }

    async navigate (url) {
        await this.page.goto(url);
    }

    async waitForElement (selector, timeout = 30000) {
        await this.page.waitForSelector(selector, { timeout });
    }

    async fill (selector, value) {
        await this.waitForElement(selector);
        await this.page.fill(selector, value);
    }

    async click (selector) {
        await this.waitForElement(selector);
        await this.page.click(selector);
    }

    async getUrl () {
        return this.page.url();
    }

    async getText (selector) {
        await this.waitForElement(selector);
        return this.page.locator(selector).innerText();
    }
}

module.exports = { BasePage };