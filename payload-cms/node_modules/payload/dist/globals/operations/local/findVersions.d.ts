import type { GeneratedTypes, RequestContext } from '../../../';
import type { PaginatedDocs } from '../../../database/types';
import type { PayloadRequest } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document, Where } from '../../../types';
import type { TypeWithVersion } from '../../../versions/types';
export type Options<T extends keyof GeneratedTypes['globals']> = {
    context?: RequestContext;
    depth?: number;
    fallbackLocale?: string;
    limit?: number;
    locale?: string;
    overrideAccess?: boolean;
    page?: number;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    slug: T;
    sort?: string;
    user?: Document;
    where?: Where;
};
export default function findVersionsLocal<T extends keyof GeneratedTypes['globals']>(payload: Payload, options: Options<T>): Promise<PaginatedDocs<TypeWithVersion<GeneratedTypes['globals'][T]>>>;
//# sourceMappingURL=findVersions.d.ts.map