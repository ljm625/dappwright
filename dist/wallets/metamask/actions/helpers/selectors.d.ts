import { ElementHandle, Page } from 'playwright-core';
export declare const getSettingsSwitch: (page: Page, text: string) => Promise<ElementHandle | null>;
export declare const getErrorMessage: (page: Page) => Promise<string | false>;
export declare const getAccountMenuButton: (page: Page) => Promise<ElementHandle | null>;
