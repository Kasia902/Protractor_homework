let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let CatalogPage = require("../pages/catalog.page");
let ProductPage = require("../pages/product.page");
let CartPage = require("../pages/cart.page");

describe('Buy Item:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`Buy Nasos`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        // we need to log in
        await MainPage.navigateToLogin();
        await LoginPage.waitForPageToBeAvailable();
        await LoginPage.submitForm(`garicozuf@proto2mail.com`, `123456Aa`);
        await MainPage.waitForPageToBeAvailable();
        // now we are logged in
        // await MainPage.closeCityBanner();
        await MainPage.openNasosyCatalog();
        await CatalogPage.waitForPageToBeAvailable();
        await CatalogPage.BuyItemOnHotline();
        await ProductPage.waitForPageToBeAvailable();
        browser.sleep(5000);
        await ProductPage.BuyItemNow();
        await CartPage.waitForPageToBeAvailable();
        await CartPage.selectShippingMethod('по тарифам перевозчика - До склада Новой почты в Львове (4-9 дней)');
        await CartPage.selectDeliveryPointMenuNumber(2);
        await CartPage.makeOrder();
        expect(await CartPage.getPayByCardElement().isDisplayed());
    });
});