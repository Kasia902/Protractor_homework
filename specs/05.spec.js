let MainPage = require("../pages/main.page");
let SearchPage = require("../pages/search.page.js");


describe('Hotline - Search:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`Search item`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.closeCityBanner();
        // await MainPage.clearForm();
        await MainPage.searchItem('samsung galaxy');
        await SearchPage.waitForPageToBeAvailable();
        expect(await SearchPage.getFirstItemInListElement().getText()).toContain('Samsung Galaxy');
    });
});