
describe('Hotline - Login', function() {
  let email = element(by.xpath('//*[@type="email"]'));
  let password = element(by.xpath('//*[@type="password"]'));
  let submitButton = element(by.xpath('//*[@type="submit"]'));
  let loginButton = element(by.xpath('//*[@class="item-login"]'));
  let latestResult = element(by.xpath('//*[@class="name ellipsis"]'));
  
  beforeEach(function() {
    browser.ignoreSynchronization = true;
  });
  
  it('should have a title', function() {
    browser.get('https://hotline.ua/');
    expect(browser.getTitle()).toEqual('Hotline - сравнить цены в интернет-магазинах Украины');
  });

  it('enter email and password', function() {
    browser.sleep(5000);
    loginButton.click();
    email.sendKeys('garicozuf@proto2mail.com');
    password.sendKeys('123456Aa');
    submitButton.click();
    browser.sleep(5000);
    expect(latestResult.isDisplayed()).toBe(true);
  });
});