import { Page } from 'playwright-core';
import { AddNetwork } from '../../../index';
export declare const addNetwork: (page: Page) => ({ networkName, rpc, chainId, symbol }: AddNetwork) => Promise<void>;
