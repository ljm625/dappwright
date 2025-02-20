import { Page } from 'playwright-core';
import { Step, WalletOptions } from '../wallets';
/**
 * Setup MetaMask with base account
 * */
export declare const setup: (page: Page, defaultMetamaskSteps: Step<WalletOptions>[]) => <Options = WalletOptions>(options?: Options, steps?: Step<Options>[]) => Promise<void>;
