let BasePage = require("./base.page");

let EC = protractor.ExpectedConditions;
let emailLocator = by.xpath('//*[@type="email"]');
let passwordLocator = by.xpath('//*[@type="password"]');
let submitButtonLocator = by.xpath('//*[@type="submit"]');


class LoginPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getEmailElement()), browser.params.explicitWait);
        await browser.wait(EC.visibilityOf(this.getSubmitButtonElement()), browser.params.explicitWait);
    }

    async submitForm(email, password) {
        await allure.createStep("Fill and submit form", async () => {
            await this.getEmailElement().sendKeys(email);
            await this.getPasswordElement().sendKeys(password);
            await this.getSubmitButtonElement().click();
        })();
    }

    // PO Getters
    getSubmitButtonElement() {
        return element(submitButtonLocator);
    }

    getEmailElement() {
        return element(emailLocator);
    }

    getPasswordElement() {
        return element(passwordLocator);
    }
}

module.exports = new LoginPage();