import Wallet from '../wallet';
import { Step, WalletIdOptions, WalletOptions } from '../wallets';
export declare class CoinbaseWallet extends Wallet {
    static id: WalletIdOptions;
    static recommendedVersion: string;
    static releasesUrl: string;
    static homePath: string;
    options: WalletOptions;
    static download: (options: import("@tenkeylabs/dappwright/src").OfficialOptions) => Promise<string>;
    defaultSetupSteps: Step<WalletOptions>[];
    setup: <Options = WalletOptions>(options?: Options, steps?: Step<Options>[]) => Promise<void>;
    addNetwork: (options: import("@tenkeylabs/dappwright/src").AddNetwork) => Promise<void>;
    addToken: (_: import("@tenkeylabs/dappwright/src").AddToken) => Promise<void>;
    approve: () => Promise<void>;
    createAccount: () => Promise<void>;
    confirmNetworkSwitch: () => Promise<void>;
    confirmTransaction: () => Promise<void>;
    deleteAccount: (_i: number) => Promise<void>;
    deleteNetwork: (name: string) => Promise<void>;
    getTokenBalance: (tokenSymbol: string) => Promise<number>;
    hasNetwork: (name: string) => Promise<boolean>;
    importPK: (_: string) => Promise<void>;
    lock: () => Promise<void>;
    sign: () => Promise<void>;
    switchAccount: (i: number) => Promise<void>;
    switchNetwork: (_: string) => Promise<void>;
    unlock: (password?: string) => Promise<void>;
}
