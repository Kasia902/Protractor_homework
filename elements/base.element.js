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

    async hoverElement() {
        console.log(`Hover ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await browser.actions().mouseMove(this.protractorElement).perform();
    }

    async isPresent() {
        if (await this.protractorElement.isPresent()) {
            console.log(`${this.constructor.name} "${this.elementName}" is present on "${this.pageObject.constructor.name}"`);
            return true;
        }
    }
}

module.exports = BaseElement;