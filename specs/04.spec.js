let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");


describe('Hotline - Login:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`04. Unsuccessful login to user's account`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.navigateToLogin();
        await LoginPage.waitForPageToBeAvailable();
        await LoginPage.submitForm(`garicozuf@proto2mail.com`, ``);
        expect(await LoginPage.getErrorContainerElement().getText()).toEqual(`Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить`);
        await LoginPage.clearForm();
        await LoginPage.submitForm(`garicozuf@proto2mail.com`, `123456`);
        expect(await LoginPage.getErrorContainerElement().getText()).toEqual(`Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить`);
        await LoginPage.clearForm();
        await LoginPage.submitForm(`garicozufggg@proto2mail.com`, `123456`);
        expect(await LoginPage.getErrorMessageElement().getText()).toEqual(`Извините, пользователь с указанным e-mail не зарегистрирован, пожалуйста, убедитесь в правильности написания адреса`);
    });
});