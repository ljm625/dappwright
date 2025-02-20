import { ElementHandle, Page } from 'playwright-core';
export declare const getElementByContent: (page: Page, text: string, type?: string) => Promise<ElementHandle | null>;
export declare const getInputByLabel: (page: Page, text: string, excludeSpan?: boolean, timeout?: number) => Promise<ElementHandle>;
export declare const getInputByLabelSelector: (text: string, excludeSpan?: boolean) => string;
