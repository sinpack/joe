import type { PayloadRequest } from '../../express/types';
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
declare function restoreVersion<T extends TypeWithID = any>(args: Arguments): Promise<T>;
export default restoreVersion;
//# sourceMappingURL=restoreVersion.d.ts.map