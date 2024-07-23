import type { GeneratedTypes, RequestContext } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Payload } from '../../../payload';
export type Options<T extends keyof GeneratedTypes['collections']> = {
    collection: T;
    context?: RequestContext;
    req?: PayloadRequest;
    token: string;
};
declare function localVerifyEmail<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<boolean>;
export default localVerifyEmail;
//# sourceMappingURL=verifyEmail.d.ts.map