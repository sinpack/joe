import type { PayloadRequest } from '../express/types';
/**
 * Rollback the transaction from the req using the db adapter and removes it from the req
 */
export declare function killTransaction(req: PayloadRequest): Promise<void>;
//# sourceMappingURL=killTransaction.d.ts.map