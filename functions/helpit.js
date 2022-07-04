const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('../pageobject/page');
const { expect } = require('chai');

class HelpIt extends Page {
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
    await driver.findElement(By.xpath(element)).sendKeys(text, Key.RETURN);
  }

  async choseDroplistElement(droplist, element) {
    await driver.wait(until.elementLocated(By.xpath(droplist), 5000));
    await driver.findElement(By.xpath(droplist)).click();
    await driver.findElement(By.xpath(element)).click();
  }

  async checkElementByXpath(element, text) {
    await driver.wait(until.elementLocated(By.xpath(element), 5000));
    let checkedElement = await driver.findElement(By.xpath(element)).getText();
    await expect(checkedElement).to.equal(text);
  }
}
module.exports = new HelpIt();