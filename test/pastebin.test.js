const PastebinPageFn = require('../functions/pastebinPageFn');

describe('Bring it on task for selenium webdriver tutorial', function () {
  this.timeout(50000);

  it('should create new paste', async () => {
    await PastebinPageFn.createPaste();
    await PastebinPageFn.checkPaste();
  });

});
