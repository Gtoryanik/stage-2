var Page = require('../pageobject/page');
var HelpIt = require('./helpit');
var PastebinPage = require('../pageobject/pastebin.page')

class PastebinPageFn extends Page{
    async createPaste(){
        await HelpIt.write(PastebinPage.postform, PastebinPage.postformText);
        await HelpIt.choseDroplistElement(PastebinPage.expirationDroplist, PastebinPage.neededExpiration);
        await HelpIt.writeAndSumbit(PastebinPage.pasteName, PastebinPage.title);
  }
  
    async checkPaste(){
        await HelpIt.checkElementByXpath(PastebinPage.pasteText, PastebinPage.postformText)
        await driver.quit();
  }
}

module.exports = new PastebinPageFn();