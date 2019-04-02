let BasePage = require("./base.page");
// let WebInput = require("../elements/webinput.element.js");
let WebButton = require("../elements/button.element");
let Dropdown = require("../elements/dropdown.element");
// let TextContainer = require("../elements/textContainer.element");
// let Checkbox = require("../elements/checkbox.element");

let EC = protractor.ExpectedConditions;
let makeOrderLocator = by.xpath('//*[@class="total-sum cell-sm"]/div[3]');
let deliverDropdownLocator = by.xpath('//*[@class="form-group"]/div[1]');
let NPWarehouseLocator = by.xpath('//*[@name="warehouseNP"]');
let payByCardLocator = by.xpath('//*[@type="submit"]');


class CartPage extends BasePage {
    // PO Actions

    async waitForPageToBeAvailable() {
        await browser.wait(EC.visibilityOf(this.getMakeOrderElement().getProtractorElement()), browser.params.explicitWait);
    }

    async makeOrder() {
        await allure.createStep("Start Completing Order", async () => {
            await (this.getMakeOrderElement().click());
        })();
    }

    async selectShippingMethod(text) {
        await allure.createStep("Select Shipping Method", async () => {
            await this.getDeliveryDropdownElement().click();
            await (this.getDeliveryDropdownElement().selectDropdownOption(text));
            await this.getDeliveryDropdownElement().click();
        })();
    }

    async selectShippingMethodByMenuNumber(index) {
        await allure.createStep("Select Shipping Method by Item # in List", async () => {
            await this.getDeliveryDropdownElement().click();
            await this.getDeliveryDropdownElement().selectDropdownOptionByNumber(index);
        })();
    }

    async selectDeliveryPointMenuNumber(index) {
        await allure.createStep("Select NP Warehouse by Item # in List", async () => {
            await (this.getNPWarehouseElement().click());
            await this.getNPWarehouseElement().selectDropdownOptionByNumber(index);
        })();
    }


    // PO Getters
    getMakeOrderElement() {
        return new WebButton(element(makeOrderLocator), "Make Order Button", this);
    }

    getDeliveryDropdownElement() {
        return new Dropdown(element(deliverDropdownLocator), "Shipping Methods Dropdownlist", this);
    }

    getNPWarehouseElement() {
        return new Dropdown(element(NPWarehouseLocator), "NP Warehouses Dropdownlist", this);
    }

    getPayByCardElement() {
        return new WebButton(element(payByCardLocator), "Pay By Card Button", this);
    }
}

module.exports = new CartPage();
