import type { PaginatedDocs } from '../../database/types';
import type { PayloadRequest } from '../../express/types';
import type { Where } from '../../types';
import type { TypeWithVersion } from '../../versions/types';
import type { Collection } from '../config/types';
export type Arguments = {
    collection: Collection;
    depth?: number;
    limit?: number;
    overrideAccess?: boolean;
    page?: number;
    pagination?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    sort?: string;
    where?: Where;
};
declare function findVersions<T extends TypeWithVersion<T>>(args: Arguments): Promise<PaginatedDocs<T>>;
export default findVersions;
//# sourceMappingURL=findVersions.d.ts.map