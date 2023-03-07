import { Page } from 'playwright-core';

import { clickOnButton } from '../../../helpers';

import { performPopupAction } from './util';

export const sign = (page: Page) => async (): Promise<void> => {
  await performPopupAction(page, async (popup) => {
    console.log(popup.url())
    await popup.bringToFront();
    await popup.reload();
    await popup.waitForSelector("div")
    let selector = await popup.locator(".signature-request-message__scroll-button");
    let count = await selector.count();
    if(await selector.count() >=1){
      await popup.click(".signature-request-message__scroll-button");
    }
    await clickOnButton(popup, 'Sign');
  });
};
