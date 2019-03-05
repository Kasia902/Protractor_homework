let randomstring = require("randomstring");
let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let RegisterPage = require("../pages/register.page");


describe('01. Hotline - Register unsuccessfully:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`Register with existing email`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.navigateToLogin();
        await LoginPage.waitForPageToBeAvailable();
        await LoginPage.navigateToRegister();
        await RegisterPage.waitForPageToBeAvailable();
        await RegisterPage.submitRegisterForm(``, ``, ``);
        expect(await RegisterPage.getErrorContainerElement().getText()).toEqual(`Заполните это поле`);
        await RegisterPage.submitRegisterForm(`eeheh`, ``, ``);
        expect(await RegisterPage.getErrorContainerElement().getText()).toEqual(`Поле не соответствует формату`);
        await RegisterPage.clearForm();
        await RegisterPage.submitRegisterForm(`garicozuf@proto2mail.com`, ``, ``);
        expect(await RegisterPage.getErrorContainerElement().getText()).toEqual(`Извините, но такой e-mail уже занят`);
        await RegisterPage.clearForm();
        await RegisterPage.submitRegisterForm(randomstring.generate(6) + `@testmail.com`, randomstring.generate(5) + `_test_user`, `1`);
        expect(await RegisterPage.getErrorContainerElement().getText()).toEqual(`Длина поля не может быть меньше 4 и больше 16 символов`);
    });
});