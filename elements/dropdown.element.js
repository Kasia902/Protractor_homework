let BaseElement = require('./base.element');
let WebButton = require("../elements/button.element");

let dropdownTextLocator = '//option[contains(text(),"placeholder")]';
let dropdownIndexLocator = '//*[@class="form-group"]/div[2]/div/select/option[placeholder]';


class Dropdown extends BaseElement {
    async selectDropdownOption(text) {
        console.log(`Selecting option from ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await new WebButton(element(by.xpath(dropdownTextLocator.replace(`placeholder`, text))), "Dropdownoption", this).click(); // click on item containing text
    }


    async selectDropdownOptionByNumber(index) {
        console.log(`Selecting option from ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await new WebButton(element(by.xpath(dropdownIndexLocator.replace(`placeholder`, index))), "Dropdownoption", this).click();
    }
}

module.exports = Dropdown;