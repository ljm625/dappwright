import { Page } from 'playwright-core';
import { AddToken } from '../../../types';
export declare const addToken: (page: Page) => ({ tokenAddress, symbol, decimals }: AddToken) => Promise<void>;
