let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let EC = protractor.ExpectedConditions;

describe('Hotline - Login:', function() {

  beforeEach(function() {
    browser.waitForAngularEnabled(false);
  });
  
  it('Сheck page title', async function() {
    await MainPage.open();
    await browser.sleep(5000);
    expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
  });
  
  it (`Login to user's account`, async function() {
    //await browser.sleep(5000);
    await MainPage.navigateToLogin();
    await browser.sleep(10000);
    await LoginPage.submitForm(`garicozuf@proto2mail.com`,`123456Aa`);
    await browser.sleep(10000);
    expect(await MainPage.getUserIconElement().isDisplayed()).toBeTruthy();
  });
});