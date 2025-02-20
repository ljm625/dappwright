import { DappwrightLaunchResponse, OfficialOptions } from './types';
/**
 * Launch Playwright chromium instance with wallet plugin installed
 * */
export declare const sessionPath: string;
export declare function launch(browserName: string, options: OfficialOptions): Promise<DappwrightLaunchResponse>;
