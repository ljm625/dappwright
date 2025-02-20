import { OfficialOptions } from '../../../types';
import { WalletIdOptions } from '../../wallets';
export declare const EXTENSION_ID = "gadekpdjmpjjnnemgnhkbjgnjpdaakgh";
export declare const EXTENSION_PUB_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnpiOcYGaEp02v5On5luCk/4g9j+ujgWeGlpZVibaSz6kUlyiZvcVNIIUXR568uv5NrEi5+j9+HbzshLALhCn9S43E7Ha6Xkdxs3kOEPBu8FRNwFh2S7ivVr6ixnl2FCGwfkP1S1r7k665eC1/xYdJKGCc8UByfSw24Rtl5odUqZX1SaE6CsQEMymCFcWhpE3fV+LZ6RWWJ63Zm1ac5KmKzXdj7wZzN3onI0Csc8riBZ0AujkThJmCR8tZt2PkVUDX9exa0XkJb79pe0Ken5Bt2jylJhmQB7R3N1pVNhNQt17Sytnwz6zG2YsB2XNd/1VYJe52cPNJc7zvhQJpHjh5QIDAQAB";
export type Path = string | {
    download: string;
    extract: string;
};
declare const _default: (walletId: WalletIdOptions, releasesUrl: string, recommendedVersion: string) => (options: OfficialOptions) => Promise<string>;
export default _default;
export declare const downloadDir: (walletId: WalletIdOptions) => string;
