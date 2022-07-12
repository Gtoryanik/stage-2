let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: 100000 });

class Page {
  constructor() {
    global.driver = driver;
  }
  async open(url) {
    await driver.get(url);
  }
}

module.exports = Page;
