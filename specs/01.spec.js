let randomstring = require("randomstring");
let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let RegisterPage = require("../pages/register.page");
let ConfirmPage = require("../pages/confirm.page");


describe('01. Hotline - Register Successfully:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`Register with new email`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.navigateToLogin();
        await LoginPage.waitForPageToBeAvailable();
        await LoginPage.navigateToRegister();
        await RegisterPage.waitForPageToBeAvailable();
        await RegisterPage.submitRegisterForm(randomstring.generate(6) + `@testmail.com`, randomstring.generate(5) + `_test_user`, `123456Aa`);
        await ConfirmPage.waitForPageToBeAvailable();
        expect(await ConfirmPage.getSubmitButtonElement().isDisplayed()).toBe(true);
    });
});