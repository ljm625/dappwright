import { BrowserContext, Page } from 'playwright-core';
import { CoinbaseWallet } from './coinbase/coinbase';
import { MetaMaskWallet } from './metamask/metamask';
export type Step<Options> = (page: Page, options?: Options) => void;
export type WalletIdOptions = 'metamask' | 'coinbase';
export type WalletTypes = typeof CoinbaseWallet | typeof MetaMaskWallet;
export type WalletOptions = {
    seed?: string;
    password?: string;
    showTestNets?: boolean;
};
export declare const WALLETS: WalletTypes[];
export declare const getWalletType: (id: WalletIdOptions) => WalletTypes;
export declare const getWallet: (id: WalletIdOptions, browserContext: BrowserContext) => Promise<MetaMaskWallet>;
