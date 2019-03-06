let BasePage = require("./base.page");
let WebInput = require("../elements/webinput.element.js");
let WebButton = require("../elements/button.element");
let TextContainer = require("../elements/textContainer.element");

let EC = protractor.ExpectedConditions;
let emailLocator = by.xpath('//*[@type="email"]');
let passwordLocator = by.xpath('//*[@type="password"]');
let loginLocator = by.xpath('//*[@name="login"]');
let submitButtonLocator = by.xpath('//*[@type="submit"]');
let errorContainerLocator = by.xpath('//*[@class="error-field"]');
let errorMessageLocator = by.xpath('//*[@class="item-error"]');


class RegisterPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getEmailElement().getProtractorElement()), browser.params.explicitWait);
        await browser.wait(EC.visibilityOf(this.getSubmitButtonElement().getProtractorElement()), browser.params.explicitWait);
    }

    async clearForm() {
        await (this.getEmailElement().getProtractorElement()).clear();
        await (this.getPasswordElement().getProtractorElement()).clear();
        await (this.getLoginElement().getProtractorElement()).clear();
    }

    async submitRegisterForm(email, login, password) {
        await allure.createStep("Fill and submit register form", async () => {
            await (this.getEmailElement().getProtractorElement()).sendKeys(email);
            await (this.getLoginElement().getProtractorElement()).sendKeys(login);
            await (this.getPasswordElement().getProtractorElement()).sendKeys(password);
            await (this.getSubmitButtonElement().getProtractorElement()).click();
        })();
    }


    // PO Getters
    getSubmitButtonElement() {
        return new WebButton(element(submitButtonLocator), "Submit Register Form Button", this);
    }

    getEmailElement() {
        return new WebInput(element(emailLocator), "Email Input Field", this);
    }

    getLoginElement() {
        return new WebInput(element(loginLocator), "Login(Nickname) Input Field", this);
    }

    getPasswordElement() {
        return new WebInput(element(passwordLocator), "Password Input Field", this);
    }

    getErrorContainerElement() {
        return new TextContainer(element(errorContainerLocator), "Error Message", this);
    }

    getErrorMessageElement() {
        return new TextContainer(element(errorMessageLocator), "Error Message", this);
    }
}


module.exports = new RegisterPage();
