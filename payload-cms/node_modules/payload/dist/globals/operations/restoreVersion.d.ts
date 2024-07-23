import type { PayloadRequest } from '../../express/types';
import type { TypeWithVersion } from '../../versions/types';
import type { SanitizedGlobalConfig } from '../config/types';
export type Arguments = {
    depth?: number;
    globalConfig: SanitizedGlobalConfig;
    id: number | string;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
};
declare function restoreVersion<T extends TypeWithVersion<T> = any>(args: Arguments): Promise<T>;
export default restoreVersion;
//# sourceMappingURL=restoreVersion.d.ts.map