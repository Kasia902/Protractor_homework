// let fs = require('fs-extra');
let path = require('path');
let BasePage = require("./base.page");
let Button = require("../elements/button.element.js");
let TextContainer = require("../elements/textContainer.element.js");


let EC = protractor.ExpectedConditions;
let sendMessageLocator = by.xpath('//*[@class="viewbox"]');
let chooseFileButtonLocator = by.xpath('//*[@type="file"]');
let choose2ndFileButtonLocator = by.xpath('//*[@type="file"]');
// let errorContainerLocator = by.xpath('//*[@class="error-field"]');

class FeedbackPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getSendMessageButtonElement().getProtractorElement()), browser.params.explicitWait);
    }

    async attachImage() {
        await allure.createStep("Attach Image to Form", async () => {
            // await this.getChooseFileButtonElement().click();
            await (this.getChooseFileButtonElement.sendKeys('C:/TestFiles/test_image.jpg'));
            // await this.getChooseFileButtonElement().sendKeys(fileToUpload);
        })();
    }

    
    // PO Getters
    getSendMessageButtonElement() {
        return new Button(element(sendMessageLocator), "First Item in Search List", this);
    }

    getChooseFileButtonElement() {
        return new Button(element(chooseFileButtonLocator), "First Item in Search List", this);
    }

    getChoose2ndFileButtonElement() {
        return new Button(element(choose2ndFileButtonLocator), "First Item in Search List", this);
    }
}

module.exports = new FeedbackPage();