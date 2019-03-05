let BasePage = require("./base.page");
let WebInput = require("../elements/webinput.element.js");
let WebButton = require("../elements/button.element");

let EC = protractor.ExpectedConditions;
let emailLocator = by.xpath('//*[@type="email"]');
let passwordLocator = by.xpath('//*[@type="password"]');
let submitButtonLocator = by.xpath('//*[@type="submit"]');
let registerLinkLocator = by.xpath('//a[.="Зарегистрироваться"]');


class LoginPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getEmailElement().getProtractorElement()), browser.params.explicitWait);
        await browser.wait(EC.visibilityOf(this.getSubmitButtonElement().getProtractorElement()), browser.params.explicitWait);
    }

    async submitForm(email, password) {
        await allure.createStep("Fill and submit form", async () => {
            await (this.getEmailElement().getProtractorElement()).sendKeys(email);
            await (this.getPasswordElement().getProtractorElement()).sendKeys(password);
            await (this.getSubmitButtonElement().getProtractorElement()).click();
        })();
    }

    async navigateToRegister() {
        await allure.createStep("Click Register link", async () => {
            await this.getRegisterLinkElement().click();
        })();
    }

    // PO Getters
    getSubmitButtonElement() {
        return new WebButton(element(submitButtonLocator), "Submit Form Button", this);
    }

    getEmailElement() {
        return new WebInput(element(emailLocator), "Email Input Field", this);
    }

    getPasswordElement() {
        return new WebInput(element(passwordLocator), "Password Input Field", this);
    }

    getRegisterLinkElement() {
        return new WebButton(element(registerLinkLocator), "Register Link", this);
    }
}

module.exports = new LoginPage();