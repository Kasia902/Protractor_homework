let BasePage = require("./base.page");

let loginButtonLocator = by.xpath('//*[@class="item-login"]');
let userIconLocator = by.xpath('//*[@class="name ellipsis"]');

class MainPage extends BasePage {
    // PO Actions
    async open() {
        await allure.createStep("Open main Hotline page", async () => {
            await browser.get('https://hotline.ua/');
        })();
    }

    async navigateToLogin() {
        await allure.createStep("Click Login link", async () => {
            await this.getLoginButtonElement().click();
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