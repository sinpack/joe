import type { SanitizedCollectionConfig } from '../../../collections/config/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../../globals/config/types';
import type { Field, TabAsField } from '../../config/types';
type Args<T> = {
    collection: SanitizedCollectionConfig | null;
    context: RequestContext;
    data: T;
    doc: T;
    field: Field | TabAsField;
    global: SanitizedGlobalConfig | null;
    id?: number | string;
    operation: 'create' | 'update';
    overrideAccess: boolean;
    req: PayloadRequest;
    siblingData: Record<string, unknown>;
    siblingDoc: Record<string, unknown>;
    siblingDocKeys: Set<string>;
};
export declare const promise: <T>({ id, collection, context, data, doc, field, global, operation, overrideAccess, req, siblingData, siblingDoc, siblingDocKeys, }: Args<T>) => Promise<void>;
export {};
//# sourceMappingURL=promise.d.ts.map