import type { GeneratedTypes, RequestContext } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document } from '../../../types';
import type { TypeWithVersion } from '../../../versions/types';
export type Options<T extends keyof GeneratedTypes['globals']> = {
    context?: RequestContext;
    depth?: number;
    disableErrors?: boolean;
    fallbackLocale?: string;
    id: string;
    locale?: string;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    slug: T;
    user?: Document;
};
export default function findVersionByIDLocal<T extends keyof GeneratedTypes['globals']>(payload: Payload, options: Options<T>): Promise<TypeWithVersion<GeneratedTypes['globals'][T]>>;
//# sourceMappingURL=findVersionByID.d.ts.map