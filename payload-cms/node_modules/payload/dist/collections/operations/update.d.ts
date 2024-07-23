import type { DeepPartial } from 'ts-essentials';
import type { GeneratedTypes } from '../../';
import type { PayloadRequest } from '../../express/types';
import type { Where } from '../../types';
import type { BulkOperationResult, Collection } from '../config/types';
import type { CreateUpdateType } from './create';
export type Arguments<T extends CreateUpdateType> = {
    collection: Collection;
    data: DeepPartial<T>;
    depth?: number;
    disableVerificationEmail?: boolean;
    draft?: boolean;
    overrideAccess?: boolean;
    overwriteExistingFiles?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
    where: Where;
};
declare function update<TSlug extends keyof GeneratedTypes['collections']>(incomingArgs: Arguments<GeneratedTypes['collections'][TSlug]>): Promise<BulkOperationResult<TSlug>>;
export default update;
//# sourceMappingURL=update.d.ts.map