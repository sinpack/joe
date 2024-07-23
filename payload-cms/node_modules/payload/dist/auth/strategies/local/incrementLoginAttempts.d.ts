import type { Payload } from '../../..';
import type { SanitizedCollectionConfig, TypeWithID } from '../../../collections/config/types';
import type { PayloadRequest } from '../../../express/types';
type Args = {
    collection: SanitizedCollectionConfig;
    doc: TypeWithID & Record<string, unknown>;
    payload: Payload;
    req: PayloadRequest;
};
export declare const incrementLoginAttempts: ({ collection, doc, payload, req, }: Args) => Promise<void>;
export {};
//# sourceMappingURL=incrementLoginAttempts.d.ts.map