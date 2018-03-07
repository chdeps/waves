/* eslint-env detox/detox */

describe('Login', () => {
  it('should test logout', async () => {
    await expect(element(by.id('welcomeTitle'))).toExist();
    await expect(element(by.id('welcomeImage'))).toExist();
    await element(by.id('welcomeButton')).tap();

    await expect(element(by.id('loginTitle'))).toExist();
    await expect(element(by.id('loginImage'))).toExist();
    await element(by.id('loginUsername')).replaceText('wind@waves.com');
    await element(by.id('loginPassword')).typeText('wind&waves');
    await element(by.id('loginButton')).tap();

    await expect(element(by.id('addSpotButton'))).toExist();
    await element(by.id('logoutButton')).tap();

    await expect(element(by.id('welcomeTitle'))).toExist();
  });
});
