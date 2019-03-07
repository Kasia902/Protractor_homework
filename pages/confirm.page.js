let BasePage = require("./base.page");
let WebButton = require("../elements/button.element");

let EC = protractor.ExpectedConditions;
let confirmTextLocator = by.xpath('//*[@class="text cell-8 cell-md"]');

class ConfirmPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getSubmitButtonElement().getProtractorElement()), browser.params.explicitWait);
    }

    // PO Getters
    getSubmitButtonElement() {
        return new WebButton(element(confirmTextLocator), "Confirmation Text", this);
    }
}


module.exports = new ConfirmPage();