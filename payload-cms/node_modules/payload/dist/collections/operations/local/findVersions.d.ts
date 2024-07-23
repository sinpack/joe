import type { GeneratedTypes } from '../../../';
import type { PaginatedDocs } from '../../../database/types';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document, Where } from '../../../types';
import type { TypeWithVersion } from '../../../versions/types';
export type Options<T extends keyof GeneratedTypes['collections']> = {
    collection: T;
    /**
     * context, which will then be passed to req.context, which can be read by hooks
     */
    context?: RequestContext;
    depth?: number;
    draft?: boolean;
    fallbackLocale?: string;
    limit?: number;
    locale?: string;
    overrideAccess?: boolean;
    page?: number;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    sort?: string;
    user?: Document;
    where?: Where;
};
export default function findVersionsLocal<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<PaginatedDocs<TypeWithVersion<GeneratedTypes['collections'][T]>>>;
//# sourceMappingURL=findVersions.d.ts.map