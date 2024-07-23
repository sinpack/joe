import type { GeneratedTypes } from '../../../';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document } from '../../../types';
import type { TypeWithVersion } from '../../../versions/types';
export type Options<T extends keyof GeneratedTypes['collections']> = {
    collection: T;
    /**
     * context, which will then be passed to req.context, which can be read by hooks
     */
    context?: RequestContext;
    depth?: number;
    disableErrors?: boolean;
    draft?: boolean;
    fallbackLocale?: string;
    id: string;
    locale?: string;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    user?: Document;
};
export default function findVersionByIDLocal<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<TypeWithVersion<GeneratedTypes['collections'][T]>>;
//# sourceMappingURL=findVersionByID.d.ts.map