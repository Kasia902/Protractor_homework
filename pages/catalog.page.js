let BasePage = require("./base.page");
let WebButton = require("../elements/button.element");
let Checkbox = require("../elements/checkbox.element");
let WebInput = require("../elements/webinput.element");
let TextContainer = require("../elements/textContainer.element");

let EC = protractor.ExpectedConditions;
let buyOnHotlineCheckboxLocator = by.xpath('//*[@class="sorting-in"]/li[3]/label');
let addThirdItemToBasketLocator = by.xpath('//*[@id="catalog-products"]/div[2]/ul/li[3]/div[2]');
let shlyamburLocator = by.xpath('//*[@href="/tourism/snaryazhenie-dlya-alpinizma/66171/"]');
let priceFromLocator = by.xpath('//*[@type="number"]');
let priceToLocator = by.xpath('//*[@data-price-max]');
let okButtonLocator = by.xpath('//*[@value="OK"]');
let petzlLocator = by.xpath('//*[@title="Цены на Petzl Rocpec P26"]');


class CatalogPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getBuyOnHotlineCheckboxElement().getProtractorElement()), browser.params.explicitWait);
        await browser.wait(EC.visibilityOf(this.getAdd3rdItemToCartElement().getProtractorElement()), browser.params.explicitWait);
    }

    async waitForItemToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getFirstItemInListElement().getProtractorElement()), browser.params.explicitWait);
    }

    async BuyItemOnHotline() {
        await allure.createStep("Add item to Basket", async () => {
            await (this.getBuyOnHotlineCheckboxElement().check());
            await (this.getAdd3rdItemToCartElement().click());
        })();
    }

    async filterShlyambur() {
        await allure.createStep("Filter by Shlyambur equipment", async () => {
            await (this.getShlyamburElement().check());
        })();
    }

    async setPriceRange(priceFrom, priceTo) {
        await allure.createStep("Add item to Basket", async () => {
            await this.getPriceFromElement().click();
            await this.getPriceFromElement().sendKeys(protractor.Key.CONTROL + 'a');
            await this.getPriceFromElement().sendKeys(protractor.Key.BACK_SPACE);
            await this.getPriceFromElement().sendKeys(priceFrom);
            await this.getPriceFromElement().click();
            await this.getPriceToElement().click();
            await this.getPriceToElement().sendKeys(protractor.Key.CONTROL + 'a');
            await this.getPriceToElement().sendKeys(protractor.Key.BACK_SPACE);
            await this.getPriceToElement().sendKeys(priceTo);
            await this.getOKButtonElement().click();
        })();
    }


    // PO Getters
    getBuyOnHotlineCheckboxElement() {
        return new Checkbox(element(buyOnHotlineCheckboxLocator), "Checkbox Kupyty na Hotline", this);
    }

    getAdd3rdItemToCartElement() {
        return new WebButton(element(addThirdItemToBasketLocator), "Add item to Basket 3rd Button", this);
    }

    getShlyamburElement() {
        return new Checkbox(element(shlyamburLocator), "Shlyambur equipment checkbox", this);
    }

    getPriceFromElement() {
        return new WebInput(element(priceFromLocator), "Price From Input", this);
    }

    getPriceToElement() {
        return new WebInput(element(priceToLocator), "Price To Input", this);
    }

    getOKButtonElement() {
        return new WebButton(element(okButtonLocator), "Submit Price Range Button", this);
    }

    getFirstItemInListElement() {
        return new TextContainer(element(petzlLocator), "Item in List", this);
    }
}

module.exports = new CatalogPage();
