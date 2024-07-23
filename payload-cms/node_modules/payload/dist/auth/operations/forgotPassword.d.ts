import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
export type Arguments = {
    collection: Collection;
    data: {
        [key: string]: unknown;
        email: string;
    };
    disableEmail?: boolean;
    expiration?: number;
    req: PayloadRequest;
};
export type Result = string;
declare function forgotPassword(incomingArgs: Arguments): Promise<null | string>;
export default forgotPassword;
//# sourceMappingURL=forgotPassword.d.ts.map