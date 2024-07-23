import type { SanitizedCollectionConfig } from '../collections/config/types';
import type { SanitizedGlobalConfig } from '../globals/config/types';
import type { Payload } from '../payload';
import type { PayloadRequest } from '../types';
type Args = {
    collection?: SanitizedCollectionConfig;
    global?: SanitizedGlobalConfig;
    id?: number | string;
    max: number;
    payload: Payload;
    req?: PayloadRequest;
};
export declare const enforceMaxVersions: ({ id, collection, global, max, payload, req, }: Args) => Promise<void>;
export {};
//# sourceMappingURL=enforceMaxVersions.d.ts.map