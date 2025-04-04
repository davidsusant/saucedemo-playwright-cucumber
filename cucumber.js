module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: [
            'features/step_definitions/**/*.js', 
            'features/support/**/*.js'
        ],
        format: [
            'json:reports/cucumber-report.json',
            'html:reports/cucumber-report.html',
            '@cucumber/pretty-formatter'
        ],
        parallel: 4
    }
};
