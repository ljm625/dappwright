import { Page } from 'playwright-core';
export declare const hasNetwork: (page: Page) => (name: string) => Promise<boolean>;
