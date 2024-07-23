import type { Payload } from '../../..';
import type { SanitizedCollectionConfig, TypeWithID } from '../../../collections/config/types';
import type { PayloadRequest } from '../../../express/types';
type Args = {
    collection: SanitizedCollectionConfig;
    doc: TypeWithID & Record<string, unknown>;
    payload: Payload;
    req: PayloadRequest;
};
export declare const resetLoginAttempts: ({ collection, doc, payload, req, }: Args) => Promise<void>;
export {};
//# sourceMappingURL=resetLoginAttempts.d.ts.map