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
    params: {
        implicitWait: 5000,
        explicitWait: 15000
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
    onPrepare: async () => {
        await browser.restart();
        browser.waitForAngularEnabled(false);
        await browser.manage().setTimeouts({implicit: browser.params.implicitWait});

        jasmine.getEnv().addReporter(new AllureReporter());

        /*
        let screenshotFile = await browser.takeScreenshot();
        await allure.createAttachment('Screenshot', () => {
            return Buffer.from(screenshotFile, 'base64')
        }, 'image/png')();
        */
    }
}