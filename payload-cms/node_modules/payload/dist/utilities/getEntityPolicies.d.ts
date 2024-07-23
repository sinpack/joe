import type { CollectionPermission, GlobalPermission } from '../auth/types';
import type { SanitizedCollectionConfig } from '../collections/config/types';
import type { PayloadRequest } from '../express/types';
import type { SanitizedGlobalConfig } from '../globals/config/types';
import type { AllOperations } from '../types';
type Args = {
    entity: SanitizedCollectionConfig | SanitizedGlobalConfig;
    id?: string;
    operations: AllOperations[];
    req: PayloadRequest;
    type: 'collection' | 'global';
};
type ReturnType<T extends Args> = T['type'] extends 'global' ? GlobalPermission : CollectionPermission;
export declare function getEntityPolicies<T extends Args>(args: T): Promise<ReturnType<T>>;
export {};
//# sourceMappingURL=getEntityPolicies.d.ts.map