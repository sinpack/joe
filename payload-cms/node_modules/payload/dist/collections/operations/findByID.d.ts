import type { PayloadRequest } from '../../express/types';
import type { Collection, TypeWithID } from '../config/types';
export type Arguments = {
    collection: Collection;
    currentDepth?: number;
    depth?: number;
    disableErrors?: boolean;
    draft?: boolean;
    id: number | string;
    overrideAccess?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
};
declare function findByID<T extends TypeWithID>(incomingArgs: Arguments): Promise<T>;
export default findByID;
//# sourceMappingURL=findByID.d.ts.map