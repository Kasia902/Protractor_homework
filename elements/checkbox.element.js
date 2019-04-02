let BaseElement = require('./base.element');


class Checkbox extends BaseElement {
    async check() {
        console.log(`Check ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        // check if checkbox is not checked yet
        if ((await this.protractorElement.getAttribute(`checked`)) === null) {
            await this.protractorElement.click();
            console.log(`${this.constructor.name} is checked now!`);
        } else {
            console.log(`${this.constructor.name} is checked already`);
        }
    }

    async uncheck() {
        console.log(`Uncheck ${this.constructor.name} "${this.elementName}" on "${this.pageObject.constructor.name}"`);
        // check if checkbox is checked already
        if ((await this.protractorElement.getAttribute(`checked`)) != null) {
            await this.protractorElement.click();
            console.log(`${this.constructor.name} is unchecked now`);
        } else {
            console.log(`${this.constructor.name} is unchecked already!`);
        }
    }
}

module.exports = Checkbox;