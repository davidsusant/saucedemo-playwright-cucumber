const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const allure = require('allure-cucumberjs');

class CustomWorld extends World {
    constructor (options) {
        super(options);
        this.context = {};
        this.attach = options.attach;
    }

    async setUp () {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext({
            viewport: {
                width: 1366,
                height: 768
             },
             recordVideo: {
                dir: 'reports/videos'
             }
        });
        this.page = await this.context.newPage();
    }

    async tearDown () {
        await this.page.close();
        await this.context.close();
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);