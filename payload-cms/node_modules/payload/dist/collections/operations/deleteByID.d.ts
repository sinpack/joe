import type { GeneratedTypes } from '../../';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
import type { Collection } from '../config/types';
export type Arguments = {
    collection: Collection;
    depth?: number;
    id: number | string;
    overrideAccess?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
};
declare function deleteByID<TSlug extends keyof GeneratedTypes['collections']>(incomingArgs: Arguments): Promise<Document>;
export default deleteByID;
//# sourceMappingURL=deleteByID.d.ts.map