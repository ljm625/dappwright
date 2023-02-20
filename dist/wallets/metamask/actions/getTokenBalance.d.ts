import { Page } from 'playwright-core';
export declare const getTokenBalance: (page: Page) => (tokenSymbol: string) => Promise<number>;
