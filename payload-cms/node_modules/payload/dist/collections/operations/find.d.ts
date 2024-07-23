import type { PaginatedDocs } from '../../database/types';
import type { PayloadRequest } from '../../express/types';
import type { Where } from '../../types';
import type { Collection, TypeWithID } from '../config/types';
export type Arguments = {
    collection: Collection;
    currentDepth?: number;
    depth?: number;
    disableErrors?: boolean;
    draft?: boolean;
    limit?: number;
    overrideAccess?: boolean;
    page?: number;
    pagination?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    sort?: string;
    where?: Where;
};
declare function find<T extends TypeWithID & Record<string, unknown>>(incomingArgs: Arguments): Promise<PaginatedDocs<T>>;
export default find;
//# sourceMappingURL=find.d.ts.map