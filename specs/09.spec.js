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
        await browser.sleep(5000);
        // expect(await SearchPage.getFirstItemInListElement().getText()).toContain('Samsung Galaxy');
    });
});