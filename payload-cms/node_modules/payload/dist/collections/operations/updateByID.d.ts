import type { DeepPartial } from 'ts-essentials';
import type { PayloadRequest } from '../../express/types';
import type { GeneratedTypes } from '../../index';
import type { Collection } from '../config/types';
export type Arguments<T extends {
    [field: number | string | symbol]: unknown;
}> = {
    autosave?: boolean;
    collection: Collection;
    data: DeepPartial<T>;
    depth?: number;
    disableVerificationEmail?: boolean;
    draft?: boolean;
    id: number | string;
    overrideAccess?: boolean;
    overwriteExistingFiles?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
};
declare function updateByID<TSlug extends keyof GeneratedTypes['collections']>(incomingArgs: Arguments<GeneratedTypes['collections'][TSlug]>): Promise<GeneratedTypes['collections'][TSlug]>;
export default updateByID;
//# sourceMappingURL=updateByID.d.ts.map