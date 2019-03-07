let BaseElement = require('./base.element');


class TextContainer extends BaseElement {
    async getText() {
        let text = await this.protractorElement.getText();
        // console.log(text);
        return (text);
    }
}

module.exports = TextContainer;