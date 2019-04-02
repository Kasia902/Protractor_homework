let CatalogPage = require("../pages/catalog.page.js");
let MainPage = require("../pages/main.page.js");


describe('Hotline - Filter:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`Filter items`, async () => {
        await browser.get('https://hotline.ua/tourism/snaryazhenie-dlya-alpinizma/');
        await MainPage.closeCityBanner();
        await CatalogPage.filterShlyambur();
        await browser.sleep(5000);
        await CatalogPage.setPriceRange('1200', '2000');
        await browser.sleep(5000);
        expect(await CatalogPage.getFirstItemInListElement().getText()).toContain('Petzl Rocpec P26');
    });
});