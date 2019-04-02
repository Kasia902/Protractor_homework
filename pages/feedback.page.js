// let fs = require('fs-extra');
let path = require('path');
let BasePage = require("./base.page");
let Button = require("../elements/button.element.js");
let WebInput = require("../elements/webinput.element.js");
let TextContainer = require("../elements/textContainer.element");


let EC = protractor.ExpectedConditions;
let sendMessageLocator = by.xpath('//*[@class="viewbox"]');
let chooseFileButtonLocator = by.xpath('//*[@type="file"]');
let choose2ndFileButtonLocator = by.xpath('//*[@class="cell-7 cell-sm"]/div[2]/input');
let errorContainerLocator = by.xpath('//*[@class="cell-7 cell-sm"]/div[2]/div[2]/div');

class FeedbackPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getSendMessageButtonElement().getProtractorElement()), browser.params.explicitWait);
    }

    async attachImage() {
        await allure.createStep("Attach Image to Form", async () => {
            let fileToUpload = ("../Protractor_homework/TestFiles/test_image.png");
            let filepath = path.resolve(fileToUpload);
            await this.getChooseFileButtonElement().sendKeys(filepath);
        })();
    }

    async attachFile() {
        await allure.createStep("Attach .exe file to Form", async () => {
            let fileToUpload = ("../Protractor_homework/TestFiles/test_exe.exe");
            let filepath = path.resolve(fileToUpload);
            await this.getChoose2ndFileButtonElement().sendKeys(filepath);
        })();
    }

    
    // PO Getters
    getSendMessageButtonElement() {
        return new Button(element(sendMessageLocator), "First Item in Search List", this);
    }

    getChooseFileButtonElement() {
        return new WebInput(element(chooseFileButtonLocator), "First Item in Search List", this);
    }

    getChoose2ndFileButtonElement() {
        return new WebInput(element(choose2ndFileButtonLocator), "First Item in Search List", this);
    }

    getErrorContainerElement() {
        return new TextContainer(element(errorContainerLocator), "Error Message", this);
    }
}

module.exports = new FeedbackPage();