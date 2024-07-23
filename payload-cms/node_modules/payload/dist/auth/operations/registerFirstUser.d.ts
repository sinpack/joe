import type { Response } from 'express';
import type { MarkOptional } from 'ts-essentials';
import type { GeneratedTypes } from '../../';
import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
export type Arguments<T extends {
    [field: number | string | symbol]: unknown;
}> = {
    collection: Collection;
    data: MarkOptional<T, 'createdAt' | 'id' | 'sizes' | 'updatedAt'> & {
        email: string;
        password: string;
    };
    req: PayloadRequest;
    res: Response;
};
export type Result<T> = {
    message: string;
    user: T;
};
declare function registerFirstUser<TSlug extends keyof GeneratedTypes['collections']>(args: Arguments<GeneratedTypes['collections'][TSlug]>): Promise<Result<GeneratedTypes['collections'][TSlug]>>;
export default registerFirstUser;
//# sourceMappingURL=registerFirstUser.d.ts.map