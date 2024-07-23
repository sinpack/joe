import type { SanitizedCollectionConfig } from '../../../collections/config/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../../globals/config/types';
import type { Operation } from '../../../types';
type Args<T> = {
    collection: SanitizedCollectionConfig | null;
    context: RequestContext;
    data: Record<string, unknown> | T;
    doc: Record<string, unknown> | T;
    docWithLocales: Record<string, unknown>;
    global: SanitizedGlobalConfig | null;
    id?: number | string;
    operation: Operation;
    req: PayloadRequest;
    skipValidation?: boolean;
};
export declare const beforeChange: <T extends Record<string, unknown>>({ id, collection, context, data: incomingData, doc, docWithLocales, global, operation, req, skipValidation, }: Args<T>) => Promise<T>;
export {};
//# sourceMappingURL=index.d.ts.map