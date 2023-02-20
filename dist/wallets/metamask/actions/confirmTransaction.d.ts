import { Page } from 'playwright-core';
import { TransactionOptions } from '../../..';
export declare const confirmTransaction: (page: Page) => (options?: TransactionOptions) => Promise<void>;
