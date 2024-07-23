import type { GeneratedTypes, RequestContext } from '../../..';
import type { PayloadRequest } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Result } from '../forgotPassword';
export type Options<T extends keyof GeneratedTypes['collections']> = {
    collection: T;
    context?: RequestContext;
    data: {
        email: string;
    };
    disableEmail?: boolean;
    expiration?: number;
    req?: PayloadRequest;
};
declare function localForgotPassword<T extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<T>): Promise<Result>;
export default localForgotPassword;
//# sourceMappingURL=forgotPassword.d.ts.map