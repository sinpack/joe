import type { SanitizedCollectionConfig } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
import type { Field } from '../../fields/config/types';
import type { SanitizedGlobalConfig } from '../../globals/config/types';
import type { EntityPolicies } from './types';
type Args = {
    collectionConfig?: SanitizedCollectionConfig;
    errors: {
        path: string;
    }[];
    fields: Field[];
    globalConfig?: SanitizedGlobalConfig;
    operator: string;
    overrideAccess: boolean;
    path: string;
    policies: EntityPolicies;
    req: PayloadRequest;
    val: unknown;
    versionFields?: Field[];
};
/**
 * Validate the Payload key / value / operator
 */
export declare function validateSearchParam({ collectionConfig, errors, fields, globalConfig, operator, overrideAccess, path: incomingPath, policies, req, val, versionFields, }: Args): Promise<void>;
export {};
//# sourceMappingURL=validateSearchParams.d.ts.map