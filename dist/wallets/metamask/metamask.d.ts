import Wallet from '../wallet';
import { Step, WalletIdOptions, WalletOptions } from '../wallets';
export declare class MetaMaskWallet extends Wallet {
    static id: WalletIdOptions;
    static recommendedVersion: string;
    static releasesUrl: string;
    static homePath: string;
    options: WalletOptions;
    static download: (options: import("../..").OfficialOptions) => Promise<string>;
    defaultSetupSteps: Step<WalletOptions>[];
    setup: <Options = WalletOptions>(options?: Options, steps?: Step<Options>[]) => Promise<void>;
    addNetwork: ({ networkName, rpc, chainId, symbol }: import("../..").AddNetwork) => Promise<void>;
    addToken: ({ tokenAddress, symbol, decimals }: import("../..").AddToken) => Promise<void>;
    approve: () => Promise<void>;
    createAccount: () => Promise<void>;
    confirmNetworkSwitch: () => Promise<void>;
    confirmTransaction: (options?: import("../..").TransactionOptions) => Promise<void>;
    deleteAccount: (accountNumber: number) => Promise<void>;
    deleteNetwork: (name: string) => Promise<void>;
    getTokenBalance: (tokenSymbol: string) => Promise<number>;
    hasNetwork: (name: string) => Promise<boolean>;
    importPK: (privateKey: string) => Promise<void>;
    lock: () => Promise<void>;
    sign: () => Promise<void>;
    switchAccount: (accountNumber: number) => Promise<void>;
    switchNetwork: (network?: string) => Promise<void>;
    unlock: (password?: string) => Promise<void>;
}
