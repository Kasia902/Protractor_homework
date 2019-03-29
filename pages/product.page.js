let BasePage = require("./base.page");
let WebButton = require("../elements/button.element");

let EC = protractor.ExpectedConditions;
let buyNowButtonLocator = by.xpath('//*[@class="resume-item resume-checkout hidden"]/div[2]/span');


class ProductPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getBuyNowElement().getProtractorElement()), browser.params.explicitWait);
    }

    async BuyItemNow() {
        await allure.createStep("Buy Item Now", async () => {
            await (this.getBuyNowElement().click());
        })();
    }


    // PO Getters
    getBuyNowElement() {
        return new WebButton(element(buyNowButtonLocator), "Buy Now Button", this);
    }
}

module.exports = new ProductPage();
