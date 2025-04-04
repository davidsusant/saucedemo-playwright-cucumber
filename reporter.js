import { AllureRuntime } from ('allure-cucumberjs');
import { CucumberJSAllureFormatter } from ('allure-cucumberjs');

module.exports = class AlllureReporter extends CucumberJSAllureFormatter {
    constructor (options) {
        super (
            options, 
            new AllureRuntime ({ resultDir: './reports/allure-results' }),
            {
                labels: {
                    feature: [/@feature:(.*)/],
                    epic: [/@epic:(.*)/],
                    severity: [/@severity:(.*)/]
                },
                links: {
                    issue: {
                        pattern: [/@issue=(.*)/],
                        urlTemplate: 'https://example.org/issue/%s'
                    },
                    tms: {
                        pattern: [/@tms=(.*)/],
                        urlTemplate: 'https://example.org/tms/%s'
                    }
                }
            }
        );
    }
};
