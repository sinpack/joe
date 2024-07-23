import type { GlobalPermission } from '../../auth';
import type { PayloadRequest } from '../../express/types';
import type { SanitizedGlobalConfig } from '../config/types';
type Arguments = {
    globalConfig: SanitizedGlobalConfig;
    req: PayloadRequest;
};
export declare function docAccess(args: Arguments): Promise<GlobalPermission>;
export {};
//# sourceMappingURL=docAccess.d.ts.map