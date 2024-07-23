import type { SanitizedCollectionConfig } from '../../../collections/config/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../../globals/config/types';
type Args = {
    collection: SanitizedCollectionConfig | null;
    context: RequestContext;
    currentDepth?: number;
    depth: number;
    doc: Record<string, unknown>;
    draft: boolean;
    fallbackLocale: null | string;
    findMany?: boolean;
    flattenLocales?: boolean;
    global: SanitizedGlobalConfig | null;
    locale: string;
    overrideAccess: boolean;
    req: PayloadRequest;
    showHiddenFields: boolean;
};
export declare function afterRead<T = any>(args: Args): Promise<T>;
export {};
//# sourceMappingURL=index.d.ts.map