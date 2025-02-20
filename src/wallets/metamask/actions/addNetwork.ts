import { Page } from 'playwright-core';
import { clickOnButton } from '../../../helpers';

import { AddNetwork } from '../../../index';
import { clickOnLogo, getErrorMessage, openNetworkDropdown } from './helpers';

export const addNetwork =
  (page: Page) =>
  async ({ networkName, rpc, chainId, symbol }: AddNetwork): Promise<void> => {
    await page.bringToFront();
    await openNetworkDropdown(page);
    await clickOnButton(page, 'Add network');

    await page.getByTestId('network-display').click();
    await page.getByRole('button', { name: 'Add network' }).click();
    await page.getByTestId('add-network-manually').click();
    await page.getByLabel('Network name').fill(networkName);
    await page.getByLabel('New RPC URL').fill(rpc);
    await page.getByLabel('Chain ID').fill(String(chainId));
    await page.getByLabel('Currency symbol').fill(symbol);

    const errorMessage = await getErrorMessage(page);
    if (errorMessage) {
      await clickOnLogo(page);
      throw new SyntaxError(errorMessage);
    }

    await clickOnButton(page, 'Save');

    await page.waitForSelector(`//*[text() = '${networkName}']`);

    const gotItButtonVisible = await page.isVisible(`//button[contains(text(), 'Got it')]`);
    if (gotItButtonVisible) await clickOnButton(page, 'Got it');
  };
