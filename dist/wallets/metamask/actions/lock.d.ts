import { Page } from 'playwright-core';
export declare const lock: (page: Page) => () => Promise<void>;
