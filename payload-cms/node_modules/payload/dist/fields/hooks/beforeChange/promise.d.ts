import type { SanitizedCollectionConfig } from '../../../collections/config/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../../globals/config/types';
import type { Operation } from '../../../types';
import type { Field, TabAsField } from '../../config/types';
type Args = {
    collection: SanitizedCollectionConfig | null;
    context: RequestContext;
    data: Record<string, unknown>;
    doc: Record<string, unknown>;
    docWithLocales: Record<string, unknown>;
    errors: {
        field: string;
        message: string;
    }[];
    field: Field | TabAsField;
    global: SanitizedGlobalConfig | null;
    id?: number | string;
    mergeLocaleActions: (() => void)[];
    operation: Operation;
    path: string;
    req: PayloadRequest;
    siblingData: Record<string, unknown>;
    siblingDoc: Record<string, unknown>;
    siblingDocWithLocales?: Record<string, unknown>;
    skipValidation: boolean;
};
export declare const promise: ({ id, collection, context, data, doc, docWithLocales, errors, field, global, mergeLocaleActions, operation, path, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation, }: Args) => Promise<void>;
export {};
//# sourceMappingURL=promise.d.ts.map