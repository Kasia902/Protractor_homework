let BasePage = require("./base.page");

// let EC = protractor.ExpectedConditions;
let emailLocator = by.xpath('//*[@type="email"]');
let passwordLocator = by.xpath('//*[@type="password"]');
let submitButtonLocator = by.xpath('//*[@type="submit"]');

class LoginPage extends BasePage {
    // PO Actions
    submitForm(email, password) {
        allure.createStep("Fill and submit form", async () => {
            let screenshotFile = await browser.takeScreenshot();
            await allure.createAttachment('Screenshot', () => {
                return new Buffer(screenshotFile, 'base64')
            }, 'image/png')();
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