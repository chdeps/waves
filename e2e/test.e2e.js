/* eslint-env detox/detox */

describe('Test 1st screen', () => {
  it('should test the first screen', async () => {
    await expect(element(by.id('title'))).toExist();
  });
});
