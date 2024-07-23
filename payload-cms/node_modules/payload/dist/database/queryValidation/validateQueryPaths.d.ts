import type { SanitizedCollectionConfig } from '../../collections/config/types';
import type { Field } from '../../fields/config/types';
import type { SanitizedGlobalConfig } from '../../globals/config/types';
import type { PayloadRequest, Where } from '../../types';
import type { EntityPolicies } from './types';
type Args = {
    errors?: {
        path: string;
    }[];
    overrideAccess: boolean;
    policies?: EntityPolicies;
    req: PayloadRequest;
    versionFields?: Field[];
    where: Where;
} & ({
    collectionConfig: SanitizedCollectionConfig;
    globalConfig?: never | undefined;
} | {
    collectionConfig?: never | undefined;
    globalConfig: SanitizedGlobalConfig;
});
export declare function validateQueryPaths({ collectionConfig, errors, globalConfig, overrideAccess, policies, req, versionFields, where, }: Args): Promise<void>;
export {};
//# sourceMappingURL=validateQueryPaths.d.ts.map