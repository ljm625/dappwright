import { BrowserContext, Page } from 'playwright-core';
import { Dappwright, OfficialOptions } from './types';
import { WalletOptions } from './wallets/wallets';
export declare const bootstrap: (browserName: string, { seed, password, showTestNets, ...launchOptions }: OfficialOptions & WalletOptions) => Promise<[Dappwright, Page, BrowserContext]>;
