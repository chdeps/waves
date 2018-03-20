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
  });
});
