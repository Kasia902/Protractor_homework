class BaseElement {
    constructor(protractorElement, elementName, pageObject) {
        this.protractorElement = protractorElement;
        this.elementName = elementName;
        this.pageObject = pageObject;
    }

    getProtractorElement() {
        return this.protractorElement;
    }

    async click() {
        console.log(`Click ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await this.protractorElement.click();
    }

    async isDisplayed() {
        if (await this.protractorElement.isDisplayed()) {
            console.log(`${this.constructor.name} "${this.elementName}" is visible on "${this.pageObject.constructor.name}"`);
            return true;
        }
    }

    async sendKeys() {
        console.log(`Enter value to ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await this.protractorElement.sendKeys();
    }
}

module.exports = BaseElement;