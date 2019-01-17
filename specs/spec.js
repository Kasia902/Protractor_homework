let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");

describe('Hotline - Login', function() {

  beforeEach(function() {
    browser.waitForAngularEnabled(false);
  });
  
  it('check title', async function() {
    await MainPage.open();
    expect(await browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
  });
  
  it ('login to account', async function() {
    await browser.sleep(5000);
    await MainPage.navigateToLogin();
    await LoginPage.enterEmail('garicozuf@proto2mail.com');
    await LoginPage.enterPassword();
    await LoginPage.submitLoginForm();
    await browser.sleep(5000);
    expect(await MainPage.getUserIconElement().isDisplayed()).toBeTruthy();
  });
});