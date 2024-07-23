import type { SanitizedCollectionConfig } from '../../../collections/config/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../../globals/config/types';
type Args<T> = {
    collection: SanitizedCollectionConfig | null;
    context: RequestContext;
    data: Record<string, unknown> | T;
    doc?: Record<string, unknown> | T;
    global: SanitizedGlobalConfig | null;
    id?: number | string;
    operation: 'create' | 'update';
    overrideAccess: boolean;
    req: PayloadRequest;
};
export declare const beforeValidate: <T extends Record<string, unknown>>({ id, collection, context, data: incomingData, doc, global, operation, overrideAccess, req, }: Args<T>) => Promise<T>;
export {};
//# sourceMappingURL=index.d.ts.map