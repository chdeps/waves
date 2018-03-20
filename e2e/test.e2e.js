/* eslint-env detox/detox */
import { checkLogin, checkWelcome } from './services';

describe('Login', () => {
  it.skip('should test logout', async () => {
    await checkWelcome();
    await checkLogin();
  });

  it('should add a spot to the list', async () => {
    await checkWelcome();
    await checkLogin();
    await element(by.id('addSpotButton')).tap();
    await element(by.id('addSpotName')).tap();
    await element(by.id('addSpotName')).typeText('LaSeine');
    await element(by.id('addSpotStyle')).tap();
    await element(by.id('addSpotStyle')).typeText('Bronzette');
    await element(by.id('addSpotConfirm')).tap();
    await expect(element(by.label('LaSeine'))).toExist();
  });
});
