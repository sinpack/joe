import type { PaginatedDocs } from '../../database/types';
import type { PayloadRequest } from '../../express/types';
import type { Where } from '../../types';
import type { TypeWithVersion } from '../../versions/types';
import type { SanitizedGlobalConfig } from '../config/types';
export type Arguments = {
    depth?: number;
    globalConfig: SanitizedGlobalConfig;
    limit?: number;
    overrideAccess?: boolean;
    page?: number;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    sort?: string;
    where?: Where;
};
declare function findVersions<T extends TypeWithVersion<T>>(args: Arguments): Promise<PaginatedDocs<T>>;
export default findVersions;
//# sourceMappingURL=findVersions.d.ts.map