import type { CollectionPermission } from '../../auth';
import type { PayloadRequest } from '../../express/types';
type Arguments = {
    id: string;
    req: PayloadRequest;
};
export declare function docAccess(args: Arguments): Promise<CollectionPermission>;
export {};
//# sourceMappingURL=docAccess.d.ts.map