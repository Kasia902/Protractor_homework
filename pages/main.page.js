let BasePage = require("./base.page");
let WebButton = require("../elements/button.element");
let WebInput = require("../elements/webinput.element.js");

let EC = protractor.ExpectedConditions;
let loginButtonLocator = by.xpath('//*[@class="item-login"]');
let userIconLocator = by.xpath('//*[@class="name ellipsis"]');
let searchFieldLocator = by.xpath('//*[@id="searchbox"]');
let submitSearchButtonLocator = by.xpath('//*[@id="doSearch"]');
let cityBannerCloseLocator = by.xpath('//*[@class="close"]');
let dachasadLocator = by.xpath('//*[@class="level-1 dacha_sad"]');
let baseynyLocator = by.xpath('//*[@data-menu-id="2952"]');
let nasosyLocator = by.xpath('//a[@href="/dacha_sad/nasosy-vodosnabzheniya/46036/"]');


class MainPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getUserIconElement().getProtractorElement()), browser.params.explicitWait);
    }

    async open() {
        await allure.createStep("Open main Hotline page", async () => {
            await browser.get('https://hotline.ua/');
        })();
    }

    async navigateToLogin() {
        await allure.createStep("Click Login link", async () => {
            await this.getLoginButtonElement().click();
        })();
    }

    async searchItem(searchText) {
        await allure.createStep("Search for item", async () => {
            // await this.geSearchFieldElement().clear();
            await this.geSearchFieldElement().sendKeys(searchText);
            await this.getSubmitSearchButtonElement().click();
        })();
    }

    async closeCityBanner() {
        await allure.createStep("Close annoying city banner", async () => {
            await this.getCityBannerCloseButtonElement().click();
        })();
    }

    async clearForm() {
        await this.geSearchFieldElement().clear();
    }

    async openNasosyCatalog() {
        await allure.createStep("OpenNasosyMenu", async () => {
            await this.getDachaSadMenuElement().hoverElement();
            await this.getBaseynyMenuElement().click();
            await this.getNasosyMenuElement().click();
        })();
    }


    // PO Getters

    getLoginButtonElement() {
        return new WebButton(element(loginButtonLocator), "Navigate Login Button", this);
    }

    getUserIconElement() {
        return new WebButton(element(userIconLocator), "User Icon Button", this);
    }

    geSearchFieldElement() {
        return new WebInput(element(searchFieldLocator), "Search Field", this);
    }

    getSubmitSearchButtonElement() {
        return new WebButton(element(submitSearchButtonLocator), "Submit Search Button", this);
    }

    getCityBannerCloseButtonElement() {
        return new WebButton(element(cityBannerCloseLocator), "Navigate Login Button", this);
    }

    getDachaSadMenuElement() {
        return new WebButton(element(dachasadLocator), "Dacha Sad Menu Item", this);
    }

    getBaseynyMenuElement() {
        return new WebButton(element(baseynyLocator), "Baseyny, Stavky, Fontany Sub-menu Item", this);
    }

    getNasosyMenuElement() {
        return new WebButton(element(nasosyLocator), "Nasosy Sub-menu Item", this);
    }
}

module.exports = new MainPage();