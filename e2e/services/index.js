/* eslint-env detox/detox */

export const checkWelcome = async () => {
  await expect(element(by.id('welcomeTitle'))).toExist();
  await expect(element(by.id('welcomeImage'))).toExist();
  await element(by.id('welcomeButton')).tap();
};

export const checkLogin = async () => {
  await expect(element(by.id('loginTitle'))).toExist();
  await expect(element(by.id('loginImage'))).toExist();
  await element(by.id('loginUsername')).replaceText('wind@waves.com');
  await element(by.id('loginPassword')).typeText('wind&waves');
  await element(by.id('loginButton')).tap();

  await waitFor(element(by.id('addSpotButton')))
    .toExist()
    .withTimeout(2000);
};
