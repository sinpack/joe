import type { SanitizedCollectionConfig } from '../collections/config/types';
import type { PayloadRequest } from '../express/types';
import type { Payload } from '../index';
type Args = {
    collectionConfig: SanitizedCollectionConfig;
    /**
     * User IDs to delete
     */
    ids: (number | string)[];
    payload: Payload;
    req: PayloadRequest;
};
export declare const deleteUserPreferences: ({ collectionConfig, ids, payload, req }: Args) => Promise<void>;
export {};
//# sourceMappingURL=deleteUserPreferences.d.ts.map