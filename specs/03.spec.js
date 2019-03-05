
let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");


describe('03.Hotline - Login:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`Login to user's account`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.navigateToLogin();
        await LoginPage.waitForPageToBeAvailable();
        await LoginPage.submitForm(`garicozuf@proto2mail.com`, `123456Aa`);
        await MainPage.waitForPageToBeAvailable();
        expect(await MainPage.getUserIconElement().isDisplayed()).toBe(true);
    });
});