import { Page } from 'playwright-core';
export declare const waitForChromeState: (page: Page) => Promise<void>;
export declare const clickOnElement: (page: Page, text: string, type?: string) => Promise<void>;
export declare const clickOnButton: (page: Page, text: string) => Promise<void>;
/**
 *
 * @param page
 * @param label
 * @param text
 * @param clear
 * @param excludeSpan
 * @param optional
 * @returns true if found and updated, false otherwise
 */
export declare const typeOnInputField: (page: Page, label: string, text: string, clear?: boolean, excludeSpan?: boolean, optional?: boolean) => Promise<boolean>;
