let BasePage = require("./base.page");
let WebButton = require("../elements/button.element");
let Checkbox = require("../elements/checkbox.element");
let WebInput = require("../elements/webinput.element");
let TextContainer = require("../elements/textContainer.element");

let EC = protractor.ExpectedConditions;
let buyOnHotlineCheckboxLocator = by.xpath('//*[@class="sorting-in"]/li[3]/label');
let addThirdItemToBasketLocator = by.xpath('(//*[@class="icon icon-cart"])[4]');
let shlyamburLocator = by.xpath('//*[@href="/tourism/snaryazhenie-dlya-alpinizma/66171/"]');
let priceFromLocator = by.xpath('//*[@type="number"]');
let priceToLocator = by.xpath('//*[@data-price-max]');
let okButtonLocator = by.xpath('//*[@value="OK"]');
let petzlLocator = by.xpath('//*[@title="Цены на Petzl Rocpec P26"]');
let add2ndItemToBasketLocator = by.xpath('(//*[@class="icon icon-cart"])[3]');
let add1stItemToBasketLocator = by.xpath('(//*[@class="icon icon-cart"])[2]');


class CatalogPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getBuyOnHotlineCheckboxElement().getProtractorElement()), browser.params.explicitWait);
        await browser.wait(EC.visibilityOf(this.getAdd3rdItemToCartElement().getProtractorElement()), browser.params.explicitWait);
    }

    async waitForItemToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getFirstItemInListElement().getProtractorElement()), browser.params.explicitWait);
    }

    async waitForShlyamburToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getShlyamburElement().getProtractorElement()), browser.params.explicitWait);
    }

    async BuyItemOnHotline() {
        await allure.createStep("Add item to Basket", async () => {
            await (this.getBuyOnHotlineCheckboxElement().check());
            await (this.getAdd3rdItemToCartElement().click());
        })();
    }

    async openShlyambur() {
        await allure.createStep("Open All for Alpinizm", async () => {
            await browser.get('https://hotline.ua/tourism/snaryazhenie-dlya-alpinizma');
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


    async Buy2ndItemOnHotline() {
        await allure.createStep("Add item to Basket", async () => {
            await (this.getBuyOnHotlineCheckboxElement().check());
            await (this.getAdd2ndItemToCartElement().click());
        })();
    }

    async Buy1stItemOnHotline() {
        await allure.createStep("Add item to Basket", async () => {
            await (this.getBuyOnHotlineCheckboxElement().check());
            await (this.getAdd1stItemToCartElement().click());
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
  
    getAdd2ndItemToCartElement() {
        return new WebButton(element(add2ndItemToBasketLocator), "Add item to Basket 2nd Button", this);
    }

    getAdd1stItemToCartElement() {
        return new WebButton(element(add1stItemToBasketLocator), "Add item to Basket 1st Button", this);
    }
}

module.exports = new CatalogPage();
