const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('../pageobject/page');
const { expect } = require('chai');

class helper extends Page {
  async clickElement(element) {
    await driver.wait(until.elementLocated(By.xpath(element), 5000));
    await driver.findElement(By.xpath(element)).click();
  }

  async write(element, text) {
    await driver.wait(until.elementLocated(By.xpath(element), 5000));
    await driver.findElement(By.xpath(element)).sendKeys(text);
  }

  async writeAndSumbit(element, text) {
    await driver.wait(until.elementLocated(By.xpath(element), 5000));
    await driver.findElement(By.xpath(element)).sendKeys(text, Key.ENTER);
  }

  async choseDroplistElement(droplist, element) {
    await driver.wait(until.elementLocated(By.xpath(droplist), 5000));
    await driver.findElement(By.xpath(droplist)).click();
    await driver.findElement(By.xpath(element)).click();
  }
  async checkTitle(text){
    let pageTitle = await driver.getTitle();
    await expect(pageTitle).to.include(text);
  }

  async checkElementForIncluding(element, text) {
    await driver.wait(until.elementLocated(By.css(element), 5000));
    let checkedElement = await driver.findElement(By.css(element)).getText();
    await expect(checkedElement).to.include(text);
  }

  async checkElementByXpath(element, text) {
    await driver.wait(until.elementLocated(By.xpath(element), 5000));
    let checkedElement = await driver.findElement(By.xpath(element)).getText();
    await expect(checkedElement).to.include(text);
  }

}
module.exports = new helper();
