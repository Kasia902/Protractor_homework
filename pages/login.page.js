let BasePage = require("./base.page");

let emailLocator = by.xpath('//*[@type="email"]');
let passwordLocator = by.xpath('//*[@type="password"]');
let submitButtonLocator = by.xpath('//*[@type="submit"]');

class LoginPage extends BasePage {
    constructor(){
        super();
    }

    //PO Actions
    async enterEmail() {
        await this.getEmailElement().sendKeys('garicozuf@proto2mail.com');
    };

    async enterPassword() {
        await this.getPasswordElement().sendKeys('123456Aa');
    };

    async submitLoginForm () {
        await this.getSubmitButtonElement().click();
    };
    //PO Getters
    getSubmitButtonElement() {
        return element(submitButtonLocator);
    };
    getEmailElement() {
        return element(emailLocator);
    };
    getPasswordElement() {
        return element(passwordLocator);
    };
}

module.exports = new LoginPage();