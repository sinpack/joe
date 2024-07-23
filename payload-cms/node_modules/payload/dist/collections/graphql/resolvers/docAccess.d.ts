import type { CollectionPermission, GlobalPermission } from '../../../auth';
import type { PayloadRequest } from '../../../express/types';
export type Resolver = (_: unknown, args: {
    id: number | string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<CollectionPermission | GlobalPermission>;
export declare function docAccessResolver(): Resolver;
//# sourceMappingURL=docAccess.d.ts.map