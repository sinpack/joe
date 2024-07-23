import type { SanitizedCollectionConfig } from '../../../collections/config/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../../globals/config/types';
type Args<T> = {
    collection: SanitizedCollectionConfig | null;
    context: RequestContext;
    data: Record<string, unknown> | T;
    doc: Record<string, unknown> | T;
    global: SanitizedGlobalConfig | null;
    operation: 'create' | 'update';
    previousDoc: Record<string, unknown> | T;
    req: PayloadRequest;
};
export declare const afterChange: <T extends Record<string, unknown>>({ collection, context, data, doc: incomingDoc, global, operation, previousDoc, req, }: Args<T>) => Promise<T>;
export {};
//# sourceMappingURL=index.d.ts.map