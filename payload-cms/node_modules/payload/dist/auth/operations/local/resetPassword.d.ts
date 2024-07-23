import type { GeneratedTypes, RequestContext } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Result } from '../resetPassword';
export type Options<T extends keyof GeneratedTypes['collections']> = {
    collection: T;
    context?: RequestContext;
    data: {
        password: string;
        token: string;
    };
    overrideAccess: boolean;
    req?: PayloadRequest;
};
declare function localResetPassword<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<Result>;
export default localResetPassword;
//# sourceMappingURL=resetPassword.d.ts.map