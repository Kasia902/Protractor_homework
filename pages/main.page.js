let BasePage = require("./base.page");
let WebButton = require("../elements/button.element");
let WebInput = require("../elements/webinput.element.js");
let TextContainer = require("../elements/textContainer.element.js");

let EC = protractor.ExpectedConditions;
let loginButtonLocator = by.xpath('//*[@class="item-login"]');
let userIconLocator = by.xpath('//*[@class="name ellipsis"]');
let searchFieldLocator = by.xpath('//*[@id="searchbox"]');
let submitSearchButtonLocator = by.xpath('//*[@id="doSearch"]');
let cityBannerCloseLocator = by.xpath('//*[@class="close"]');
let feedbackLocator = by.xpath('//a[@href="/feedback/"]');
let dachasadLocator = by.xpath('//*[@class="level-1 dacha_sad"]');
let baseynyLocator = by.xpath('//*[@data-menu-id="2952"]');
let nasosyLocator = by.xpath('//a[@href="/dacha_sad/nasosy-vodosnabzheniya/46036/"]');
let cartLocator = by.xpath('//*[@class="item-cart"]');
let loadCartLocator = by.xpath('//*[contains(@class,"busy")][@data-dropdown-target="cart"]');
let deleteFromCartLocator = by.xpath('//*[@class="viewbox-striped border-t"]/ul/li/i');
let lastDeleteFromCartLocator = by.xpath('//*[@class="row-indent"][last()]/i');
let ItemsCountLocator = by.xpath('//*[@class="box-in"]/span[contains(text(),"1")]');
let goToCartButtonLocator = by.xpath('//*[@class="dropdown-bd active"]');


class MainPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getUserIconElement().getProtractorElement()), browser.params.explicitWait);
    }

    async waitForCartToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getItemCountElement().getProtractorElement()), browser.params.explicitWait);
    }

    async waitForDeleteToBeAvailable() {
        await browser.wait(EC.elementToBeClickable(this.getGoToCartElement().getProtractorElement()), browser.params.explicitWait);
    }

    async waitForLastDeleteToBeAvailable() {
        await browser.wait(EC.elementToBeClickable(this.getLastDeleteFromCartIconElement().getProtractorElement()), browser.params.explicitWait);
    }

    async open() {
        await allure.createStep("Open main Hotline page", async () => {
            await browser.get('https://hotline.ua/');
        })();
    }


    async openFeedback() {
        await allure.createStep("Open Feedback Page", async () => {
            await this.getFeedbackLinkLocator().click();
            let handles = (await browser.getAllWindowHandles());
            await browser.switchTo().window(handles[1]);
        })();
    }

    async navigateToLogin() {
        await allure.createStep("Click Login link", async () => {
            await this.getLoginButtonElement().click();
        })();
    }

    async searchItem(searchText) {
        await allure.createStep("Search for item", async () => {
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

    async openCart() {
        await allure.createStep("OpenCart", async () => {
            await this.getCartElement().click();
            await browser.wait(EC.presenceOf(this.getLoadCartElement().getProtractorElement()), browser.params.explicitWait);
            await browser.wait(EC.stalenessOf(this.getLoadCartElement().getProtractorElement()), browser.params.explicitWait);
            await console.log('open cart');
        })();
    }

    async deleteFromCart() {
        await allure.createStep("Delete from Cart", async () => {
            await this.getDeleteFromCartIconElement().click();
        })();
    }

    async deleteLastItemFromCart() {
        await allure.createStep("Delete from Cart", async () => {
            await this.getLastDeleteFromCartIconElement().click();
        })();
    }

    async getCartItemsCount() {
        await allure.createStep("Check Items Count in Cart", async () => {
            await (this.getItemCountElement().getText());
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

    getFeedbackLinkLocator() {
        return new WebButton(element(feedbackLocator), "Navigate Feedback Form Link", this);
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

    getCartElement() {
        return new WebButton(element(cartLocator), "Cart Button", this);
    }

    getDeleteFromCartIconElement() {
        return new WebButton(element(deleteFromCartLocator), "Delete Item in Cart Button", this);
    }

    getLastDeleteFromCartIconElement() {
        return new WebButton(element(lastDeleteFromCartLocator), "Delete Item in Cart Button", this);
    }

    getItemCountElement() {
        return new TextContainer(element(ItemsCountLocator), "Items Count in Cart", this);
    }

    getGoToCartElement() {
        return new WebButton(element(goToCartButtonLocator), "Items Count in Cart", this);
    }

    getLoadCartElement() {
        return new WebButton(element(loadCartLocator), "Items Count in Cart", this);
    }
}

module.exports = new MainPage();
