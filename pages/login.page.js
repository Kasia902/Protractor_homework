let BasePage = require("./base.page");
let WebInput = require("../elements/webinput.element.js");
let WebButton = require("../elements/button.element");
let TextContainer = require("../elements/textContainer.element");

let EC = protractor.ExpectedConditions;
let registerLinkLocator = by.xpath('//a[@href="/register/"]');
let emailLocator = by.xpath('//*[@type="email"]');
let passwordLocator = by.xpath('//*[@type="password"]');
let submitButtonLocator = by.xpath('//*[@type="submit"]');
let errorContainerLocator = by.xpath('//*[@class="error-field"]');
let errorMessageLocator = by.xpath('//*[@class="item-error"]');


class LoginPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getEmailElement().getProtractorElement()), browser.params.explicitWait);
        await browser.wait(EC.visibilityOf(this.getSubmitButtonElement().getProtractorElement()), browser.params.explicitWait);
    }

    async clearForm() {
        await (this.getEmailElement().getProtractorElement()).clear();
        await (this.getPasswordElement().getProtractorElement()).clear();
    }

    async submitForm(email, password) {
        await allure.createStep("Fill and submit form", async () => {
            await this.getEmailElement().sendKeys(email);
            await this.getPasswordElement().sendKeys(password);
            await this.getSubmitButtonElement().click();
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

    getErrorContainerElement() {
        return new TextContainer(element(errorContainerLocator), "Error Message", this);
    }

    getErrorMessageElement() {
        return new TextContainer(element(errorMessageLocator), "Error Message", this);
    }
}

module.exports = new LoginPage();
