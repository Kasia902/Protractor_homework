let AllureReporter = require("jasmine-allure-reporter");

exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["window-size=1920,1080"]
        }
    },
    onPrepare: async () => {
        jasmine.getEnv().addReporter(new AllureReporter());
    }
}