let BasePage = require("./base.page");

let loginButtonLocator = by.xpath('//*[@class="item-login"]');
let userIconLocator = by.xpath('//*[@class="name ellipsis"]');

class MainPage extends BasePage {
    // PO Actions
    open() {
        allure.createStep("Open main Hotline page", async () => {
            await browser.get('https://hotline.ua/');
            let screenshotFile = await browser.takeScreenshot();
            await allure.createAttachment('Screenshot', () => {
                return new Buffer(screenshotFile, 'base64')
            }, 'image/png')();
        })();
    }

    navigateToLogin() {
        allure.createStep("Click Login link", async () => {
            await this.getLoginButtonElement().click();
            let screenshotFile = await browser.takeScreenshot();
            await allure.createAttachment('Screenshot', () => {
                return new Buffer(screenshotFile, 'base64')
            }, 'image/png')();
        })();
    }
    // PO Getters

    getLoginButtonElement() {
        return element(loginButtonLocator);
    }

    getUserIconElement() {
        return element(userIconLocator);
    }
}

module.exports = new MainPage();