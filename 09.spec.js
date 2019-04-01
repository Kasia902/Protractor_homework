let MainPage = require("../pages/main.page");
let SearchPage = require("../pages/search.page.js");


describe('Send a message:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`With attached file`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.openFeedback();
        await SearchPage.waitForPageToBeAvailable();
        // expect(await SearchPage.getFirstItemInListElement().getText()).toContain('Samsung Galaxy');
    });
});