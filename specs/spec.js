let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");


describe('Hotline - Login:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`Login to user's account`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.navigateToLogin();
        await LoginPage.waitForPageToBeAvailable();
        await LoginPage.submitForm(`garicozuf@proto2mail.com`, `123456Aa`);
        expect(await MainPage.getUserIconElement().isDisplayed()).toBeTruthy();
    });
});