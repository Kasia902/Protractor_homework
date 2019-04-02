let MainPage = require("../pages/main.page");
let FeedbackPage = require("../pages/feedback.page.js");


describe('Send a message:', () => {
    beforeAll(async () => {
        // empty
    });
    it(`With attached file`, async () => {
        await MainPage.open();
        expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
        await MainPage.openFeedback();
        await FeedbackPage.waitForPageToBeAvailable();
        await FeedbackPage.attachImage();
        await FeedbackPage.attachFile();
        expect(await FeedbackPage.getErrorContainerElement().getText()).toEqual(`Расширение загружаемого файла нет в списке разрешенных`);
    });
});