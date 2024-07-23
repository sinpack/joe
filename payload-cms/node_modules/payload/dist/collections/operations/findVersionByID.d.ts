import type { PayloadRequest } from '../../express/types';
import type { TypeWithVersion } from '../../versions/types';
import type { Collection, TypeWithID } from '../config/types';
export type Arguments = {
    collection: Collection;
    currentDepth?: number;
    depth?: number;
    disableErrors?: boolean;
    id: number | string;
    overrideAccess?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
};
declare function findVersionByID<T extends TypeWithID = any>(args: Arguments): Promise<TypeWithVersion<T>>;
export default findVersionByID;
//# sourceMappingURL=findVersionByID.d.ts.map