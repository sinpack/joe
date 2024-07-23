import type { GeneratedTypes, RequestContext } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Payload } from '../../../payload';
export type Options<T extends keyof GeneratedTypes['collections']> = {
    collection: T;
    context?: RequestContext;
    data: {
        email: any;
    };
    overrideAccess: boolean;
    req?: PayloadRequest;
};
declare function localUnlock<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<boolean>;
export default localUnlock;
//# sourceMappingURL=unlock.d.ts.map