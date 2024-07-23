import type { GeneratedTypes } from '../../../';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document, Where } from '../../../types';
export type Options<T extends keyof GeneratedTypes['collections']> = {
    collection: T;
    /**
     * context, which will then be passed to req.context, which can be read by hooks
     */
    context?: RequestContext;
    disableErrors?: boolean;
    locale?: string;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    user?: Document;
    where?: Where;
};
export default function countLocal<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<{
    totalDocs: number;
}>;
//# sourceMappingURL=count.d.ts.map