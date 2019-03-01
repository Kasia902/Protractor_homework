class BaseElement {
    constructor(protractorElement, elementName, pageObject) {
        this.protractorElement = protractorElement;
        this.elementName = elementName;
        this.pageObject = pageObject;
    }

<<<<<<< HEAD
    getProtractorElement() {
        return this.protractorElement;
    }

=======
>>>>>>> ec5cb32d5a0124684e163293a4fa0670eedc0c55
    async click() {
        console.log(`Click ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await this.protractorElement.click();
    }
<<<<<<< HEAD

    async isDisplayed() {
        console.log(`${this.constructor.name} "${this.elementName}" is visible on "${this.pageObject.constructor.name}"`);
        await this.protractorElement.isDisplayed();
        return true;
    }

    async sendKeys() {
        console.log(`Enter value to ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await this.protractorElement.sendKeys();
    }
=======
>>>>>>> ec5cb32d5a0124684e163293a4fa0670eedc0c55
}

module.exports = BaseElement;