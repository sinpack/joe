import type { Response } from 'express';
import type { GeneratedTypes } from '../../';
import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
import type { User } from '../types';
export type Result = {
    exp?: number;
    token?: string;
    user?: User;
};
export type Arguments = {
    collection: Collection;
    data: {
        email: string;
        password: string;
    };
    depth?: number;
    overrideAccess?: boolean;
    req: PayloadRequest;
    res?: Response;
    showHiddenFields?: boolean;
};
declare function login<TSlug extends keyof GeneratedTypes['collections']>(incomingArgs: Arguments): Promise<Result & {
    user: GeneratedTypes['collections'][TSlug];
}>;
export default login;
//# sourceMappingURL=login.d.ts.map