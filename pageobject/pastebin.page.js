const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var HelpIt = require('../functions/helpit');

class PastebinPage extends Page {
  constructor(){
    super()
    this.postform = '//*[@id="postform-text"]';
    this.expirationDroplist = '//*[@id="select2-postform-expiration-container"]';
    this.neededExpiration = '//*[@id="select2-postform-expiration-results"]/li[3]';
    this.pasteName = '//input[@id="postform-name"]';
    this.pasteText = '//textarea[@class="textarea"]';

    this.open(this.pastebinUrl);
    driver.manage().window().maximize();
  }

  async createPaste(){
    await HelpIt.write(this.postform, this.postformText);
    await HelpIt.choseDroplistElement(this.expirationDroplist, this.neededExpiration);
    await HelpIt.writeAndSumbit(this.pasteName, this.title);
  }
  
  async checkPaste(){
    await HelpIt.checkElementByXpath(this.pasteText, this.postformText)
    await driver.quit();
  }
  
  get postformText(){ return 'Hello from WebDriver';}
  get pastebinUrl() { return 'http://pastebin.com/';}
  get title() { return 'helloweb';}
}

module.exports = new PastebinPage();