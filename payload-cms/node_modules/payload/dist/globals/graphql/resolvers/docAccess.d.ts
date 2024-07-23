import type { CollectionPermission, GlobalPermission } from '../../../auth';
import type { PayloadRequest } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../config/types';
export type Resolver = (_: unknown, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<CollectionPermission | GlobalPermission>;
export declare function docAccessResolver(global: SanitizedGlobalConfig): Resolver;
//# sourceMappingURL=docAccess.d.ts.map