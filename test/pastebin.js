const PastebinPageFn = require('../functions/pastebinPageFn');

describe('I can win', function () {
  this.timeout(50000);

  it('should create new paste and check the result', async () => {
    await PastebinPageFn.createPaste();
  });

});