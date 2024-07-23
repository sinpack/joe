import type { GeneratedTypes } from '../../../';
import type { PaginatedDocs } from '../../../database/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document, Where } from '../../../types';
export type Options<T extends keyof GeneratedTypes['collections']> = {
    collection: T;
    /**
     * context, which will then be passed to req.context, which can be read by hooks
     */
    context?: RequestContext;
    currentDepth?: number;
    depth?: number;
    disableErrors?: boolean;
    draft?: boolean;
    fallbackLocale?: string;
    limit?: number;
    locale?: string;
    overrideAccess?: boolean;
    page?: number;
    pagination?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    sort?: string;
    user?: Document;
    where?: Where;
};
export default function findLocal<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<PaginatedDocs<GeneratedTypes['collections'][T]>>;
//# sourceMappingURL=find.d.ts.map