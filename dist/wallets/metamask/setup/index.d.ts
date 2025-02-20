import { BrowserContext, Page } from 'playwright-core';
import { Dappwright, OfficialOptions } from '../../../types';
import { WalletOptions } from '../metamask';
export * from '../../../launch';
export * from '../setup';
export declare const bootstrap: (browserName: string, { seed, password, showTestNets, ...launchOptions }: OfficialOptions & WalletOptions) => Promise<[Dappwright, Page, BrowserContext]>;
