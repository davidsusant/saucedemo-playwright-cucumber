const { Before, After, Status } = require('@cucumber/cucumber');

const fs = require('fs');
const path = require('path');
// const { AllureReporter } = require('allure-cucumberjs');
const { allure } = require('allure-cucumberjs');

// Ensure reports directory exists
const reportsDir = path.join(__dirname, '../../reports');
if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
}

const videosDir = path.join(reportsDir, 'videos');
if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, { recursive: true });
}

const screenshotsDir = path.join(reportsDir, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
}

Before (async function () {
    await this.setUp();

    if (typeof this.allure === 'object') {
        this.allure.addEnvironment('Browser', 'Chrome');
        this.allure.addEnvironment('Browser Version', process.env.BROWSER_VERSION || 'latest');
        this.allure.addEnvironment('Environment', process.env.NODE_ENV || 'test');
    }
    // Add Allure environment info
    // AllureReporter.addEnvironment('Browser', 'Chrome');
    // AllureReporter.addEnvironment('Browser Version', process.env.BROWSER_VERSION || 'latest');
    // AllureReporter.addEnvironment('Environment', process.env.NODE_ENV || 'test');
});

After (async function (scenario) {
    // Take screenshot if scenario failed
    if (scenario.result.status == Status.FAILED) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotPath = path.join(screenshotsDir, `${scenario.pickle.name}-${timestamp}.png`);
        await this.page.screenshot({ path: screenshotPath, fullPage: true });

        // Attach screenshot to Allure report
        // AllureReporter.addAttachment('Screenshot', fs.readFileSync(screenshotPath), 'image/png');
        if (typeof this.allure === 'object') {
            this.allure.addAttachment('Screenshot', fs.readFileSync(screenshotPath), 'image/png');
        }
    }

    await this.tearDown();
})