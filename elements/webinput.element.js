let BaseElement = require('./base.element');


class WebInput extends BaseElement {
    async sendKeys(text) {
        console.log(`Enter value to ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await this.protractorElement.sendKeys(text);
    }


    async clear() {
        console.log(`Cleared ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        await this.protractorElement.clear();
    }
}

module.exports = WebInput;