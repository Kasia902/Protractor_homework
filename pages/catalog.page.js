let BasePage = require("./base.page");
let WebButton = require("../elements/button.element");
let Checkbox = require("../elements/checkbox.element");

let EC = protractor.ExpectedConditions;
let buyOnHotlineCheckboxLocator = by.xpath('//*[@class="sorting-in"]/li[3]/label');
let addThirdItemToBasketLocator = by.xpath('//*[@id="catalog-products"]/div[2]/ul/li[3]/div[2]');


class CatalogPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getBuyOnHotlineCheckboxElement().getProtractorElement()), browser.params.explicitWait);
        await browser.wait(EC.visibilityOf(this.getAdd3rdItemToCartElement().getProtractorElement()), browser.params.explicitWait);
    }

    async BuyItemOnHotline() {
        await allure.createStep("Add item to Basket", async () => {
            await (this.getBuyOnHotlineCheckboxElement().check());
            await (this.getAdd3rdItemToCartElement().click());
        })();
    }


    // PO Getters
    getBuyOnHotlineCheckboxElement() {
        return new Checkbox(element(buyOnHotlineCheckboxLocator), "Checkbox Kupyty na Hotline", this);
    }

    getAdd3rdItemToCartElement() {
        return new WebButton(element(addThirdItemToBasketLocator), "Add item to Basket 3rd Button", this);
    }
}

module.exports = new CatalogPage();
