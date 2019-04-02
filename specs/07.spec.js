let MainPage = require("../pages/main.page");
let CatalogPage = require("../pages/catalog.page");
let ProductPage = require("../pages/product.page");
let CartPage = require("../pages/cart.page");

describe('Delete from cart:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`Delete Items From Cart`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.closeCityBanner();
        await MainPage.openNasosyCatalog();
        await CatalogPage.waitForPageToBeAvailable();
        await CatalogPage.Buy1stItemOnHotline(); // add 1st item to cart
        await ProductPage.waitForPageToBeAvailable();
        await ProductPage.BuyItemNow();
        await CartPage.waitForPageToBeAvailable();
        await browser.navigate().back();
        await browser.navigate().back();
        await CatalogPage.waitForPageToBeAvailable();
        await CatalogPage.Buy2ndItemOnHotline(); // add 2nd item to cart
        await ProductPage.waitForPageToBeAvailable();
        await ProductPage.BuyItemNow();
        await CartPage.waitForPageToBeAvailable();
        await browser.navigate().back();
        await browser.navigate().back();
        await CatalogPage.waitForPageToBeAvailable();
        await CatalogPage.BuyItemOnHotline(); // add 3rd item to cart
        await ProductPage.waitForPageToBeAvailable();
        await ProductPage.BuyItemNow();
        await CartPage.waitForPageToBeAvailable();
        await MainPage.open();
        await MainPage.openCart(); // open cart
        await browser.sleep(5000);
        // await MainPage.waitForDeleteToBeAvailable();
        await MainPage.deleteFromCart(); // delete first item in cart
        // await MainPage.open();
        // await MainPage.openCart(); // open cart
        // await browser.sleep(5000);
        // await MainPage.waitForLastDeleteToBeAvailable();
        await MainPage.deleteLastItemFromCart(); // delete last item from cart
        // await MainPage.open();
        // await MainPage.waitForCartToBeAvailable();
        expect(await MainPage.getItemCountElement().getText()).toEqual('1');
    });
});