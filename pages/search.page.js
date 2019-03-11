let BasePage = require("./base.page");
let WebInput = require("../elements/webinput.element.js");
let TextContainer = require("../elements/textContainer.element.js");

let EC = protractor.ExpectedConditions;
let viewBoxLocator = by.xpath('//*[@class="viewbox"]');
let listFirstItemLocator = by.xpath('//*[@class="product-item"]');

class SearchPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getViewBoxElement().getProtractorElement()), browser.params.explicitWait);
    }


    // PO Getters
    getViewBoxElement() {
        return new TextContainer(element(viewBoxLocator), "Submit Form Button", this);
    }

    getFirstItemInListElement() {
        return new TextContainer(element(listFirstItemLocator), "First Item in Search List", this);
    }
}

module.exports = new SearchPage();