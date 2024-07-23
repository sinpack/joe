import type { MarkOptional } from 'ts-essentials';
import type { GeneratedTypes } from '../../';
import type { PayloadRequest } from '../../express/types';
import type { Collection } from '../config/types';
export type CreateUpdateType = {
    [field: number | string | symbol]: unknown;
};
export type Arguments<T extends CreateUpdateType> = {
    autosave?: boolean;
    collection: Collection;
    data: MarkOptional<T, 'createdAt' | 'id' | 'sizes' | 'updatedAt'>;
    depth?: number;
    disableVerificationEmail?: boolean;
    draft?: boolean;
    overrideAccess?: boolean;
    overwriteExistingFiles?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
};
declare function create<TSlug extends keyof GeneratedTypes['collections']>(incomingArgs: Arguments<GeneratedTypes['collections'][TSlug]>): Promise<GeneratedTypes['collections'][TSlug]>;
export default create;
//# sourceMappingURL=create.d.ts.map