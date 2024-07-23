import type { Payload } from '../../..';
import type { SanitizedCollectionConfig } from '../../../collections/config/types';
import type { PayloadRequest } from '../../../express/types';
type Args = {
    collection: SanitizedCollectionConfig;
    doc: Record<string, unknown>;
    password: string;
    payload: Payload;
    req: PayloadRequest;
};
export declare const registerLocalStrategy: ({ collection, doc, password, payload, req, }: Args) => Promise<Record<string, unknown>>;
export {};
//# sourceMappingURL=register.d.ts.map