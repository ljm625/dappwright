import { Page } from 'playwright-core';
export declare const performPopupAction: (page: Page, action: (popup: Page) => Promise<void>) => Promise<void>;
