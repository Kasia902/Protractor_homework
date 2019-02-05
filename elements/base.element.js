class BaseElement {
    constructor(protractorElement, elementName, pageObject) {
        this.protractorElement = protractorElement;
        this.elementName = elementName;
        this.pageObject = pageObject;
    }

    async click() {
        console.log(`Click ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await this.protractorElement.click();
    }
}

module.exports = BaseElement;