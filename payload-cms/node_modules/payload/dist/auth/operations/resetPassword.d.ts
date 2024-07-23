import type { Response } from 'express';
import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
export type Result = {
    token?: string;
    user: Record<string, unknown>;
};
export type Arguments = {
    collection: Collection;
    data: {
        password: string;
        token: string;
    };
    depth?: number;
    overrideAccess?: boolean;
    req: PayloadRequest;
    res?: Response;
};
declare function resetPassword(args: Arguments): Promise<Result>;
export default resetPassword;
//# sourceMappingURL=resetPassword.d.ts.map