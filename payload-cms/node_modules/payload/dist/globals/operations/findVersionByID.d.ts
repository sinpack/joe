import type { PayloadRequest } from '../../express/types';
import type { TypeWithVersion } from '../../versions/types';
import type { SanitizedGlobalConfig } from '../config/types';
export type Arguments = {
    currentDepth?: number;
    depth?: number;
    disableErrors?: boolean;
    globalConfig: SanitizedGlobalConfig;
    id: number | string;
    overrideAccess?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
};
declare function findVersionByID<T extends TypeWithVersion<T> = any>(args: Arguments): Promise<T>;
export default findVersionByID;
//# sourceMappingURL=findVersionByID.d.ts.map