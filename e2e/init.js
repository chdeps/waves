/* eslint-env detox/detox */

import detox from 'detox';
import packageFile from '../package.json';
const detoxConfig = packageFile.detox;

jest.setTimeout(120000);

beforeAll(async () => {
  await detox.init(detoxConfig, { launchApp: false });
  await device.launchApp();
});

afterAll(async () => {
  await detox.cleanup();
});

beforeEach(async () => {
  await device.reloadReactNative();
});
