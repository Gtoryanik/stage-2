var Page = require('../pageobject/page');
var helper = require('../functions/helper');
var PastebinPage = require('../pageobject/pastebin.page');

class PastebinPageFn extends Page{
    async createPaste(){
        await helper.write(PastebinPage.postform, PastebinPage.postformText);
        await helper.clickElement(PastebinPage.highlighterDroplist);
        await helper.writeAndSumbit(PastebinPage.syntaxInput, "Bash");
      
        await helper.choseDroplistElement(PastebinPage.expirationDroplist, PastebinPage.neededExpiration);
        await helper.writeAndSumbit(PastebinPage.pasteName, PastebinPage.title);
  }
    async checkPaste(){
        await helper.checkElementByXpath(PastebinPage.pasteText, PastebinPage.postformText);
        await helper.checkElementByXpath(PastebinPage.highlighterElement,PastebinPage.bashHighlighter);
        await helper.checkTitle(PastebinPage.title);
        await driver.quit();
  }
}

module.exports = new PastebinPageFn();
