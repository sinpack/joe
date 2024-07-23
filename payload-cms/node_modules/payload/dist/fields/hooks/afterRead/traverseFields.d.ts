import type { SanitizedCollectionConfig } from '../../../collections/config/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../../globals/config/types';
import type { Field, TabAsField } from '../../config/types';
type Args = {
    collection: SanitizedCollectionConfig | null;
    context: RequestContext;
    currentDepth: number;
    depth: number;
    doc: Record<string, unknown>;
    draft: boolean;
    fallbackLocale: null | string;
    fieldPromises: Promise<void>[];
    fields: (Field | TabAsField)[];
    findMany: boolean;
    flattenLocales: boolean;
    global: SanitizedGlobalConfig | null;
    locale: null | string;
    overrideAccess: boolean;
    populationPromises: Promise<void>[];
    req: PayloadRequest;
    showHiddenFields: boolean;
    siblingDoc: Record<string, unknown>;
    triggerAccessControl?: boolean;
    triggerHooks?: boolean;
};
export declare const traverseFields: ({ collection, context, currentDepth, depth, doc, draft, fallbackLocale, fieldPromises, fields, findMany, flattenLocales, global, locale, overrideAccess, populationPromises, req, showHiddenFields, siblingDoc, triggerAccessControl, triggerHooks, }: Args) => void;
export {};
//# sourceMappingURL=traverseFields.d.ts.map