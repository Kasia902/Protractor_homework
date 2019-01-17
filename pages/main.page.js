let BasePage = require("./base.page");

let loginButtonLocator = by.xpath('//*[@class="item-login"]');
let userIconLocator = by.xpath('//*[@class="name ellipsis"]');

class MainPage extends BasePage {
    constructor(){
        super();
    }

    //PO Actions
    async open() {
        await browser.get('https://hotline.ua/');
    };

    async navigateToLogin () {
        await this.getLoginButtonElement().click();
    };

    //PO Getters
    getLoginButtonElement() {
        return element (loginButtonLocator);
    };
    getUserIconElement() {
        return element (userIconLocator);
    };
}

module.exports = new MainPage();