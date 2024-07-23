import type { GeneratedTypes } from '../../../';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document } from '../../../types';
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
    id: number | string;
    locale?: string;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    user?: Document;
};
export default function findByIDLocal<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<GeneratedTypes['collections'][T]>;
//# sourceMappingURL=findByID.d.ts.map