import type { GeneratedTypes } from '../../';
import type { PayloadRequest } from '../../express/types';
import type { Where } from '../../types';
import type { Collection } from '../config/types';
export type Arguments = {
    collection: Collection;
    depth?: number;
    overrideAccess?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
    where: Where;
};
declare function deleteOperation<TSlug extends keyof GeneratedTypes['collections']>(incomingArgs: Arguments): Promise<{
    docs: GeneratedTypes['collections'][TSlug][];
    errors: {
        id: GeneratedTypes['collections'][TSlug]['id'];
        message: string;
    }[];
}>;
export default deleteOperation;
//# sourceMappingURL=delete.d.ts.map