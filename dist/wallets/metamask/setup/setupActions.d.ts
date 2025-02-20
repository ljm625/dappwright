import { Page } from 'playwright-core';
import { WalletOptions } from '../../wallets';
export declare function showTestNets(metamaskPage: Page): Promise<void>;
export declare function importWallet(metamaskPage: Page): Promise<void>;
export declare function noThanksTelemetry(metamaskPage: Page): Promise<void>;
export declare function importAccount(metamaskPage: Page, { seed }: WalletOptions): Promise<void>;
export declare function createPassword(metamaskPage: Page, { password }: WalletOptions): Promise<void>;
export declare function clearOnboardingHelp(metamaskPage: Page): Promise<void>;
export declare const closePopup: (page: Page) => Promise<void>;
