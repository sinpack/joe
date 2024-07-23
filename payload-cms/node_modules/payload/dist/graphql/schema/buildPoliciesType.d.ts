import { GraphQLObjectType } from 'graphql';
import type { CollectionConfig } from '../../collections/config/types';
import type { Field } from '../../fields/config/types';
import type { GlobalConfig } from '../../globals/config/types';
import type { Payload } from '../../payload';
type OperationType = 'create' | 'delete' | 'read' | 'readVersions' | 'unlock' | 'update';
type AccessScopes = 'docAccess' | undefined;
type BuildEntityPolicy = {
    entityFields: Field[];
    name: string;
    operations: OperationType[];
    scope: AccessScopes;
};
export declare const buildEntityPolicy: (args: BuildEntityPolicy) => {
    fields: {
        type: GraphQLObjectType<any, any>;
    };
};
type BuildPolicyType = {
    scope?: AccessScopes;
    typeSuffix?: string;
} & ({
    entity: CollectionConfig;
    type: 'collection';
} | {
    entity: GlobalConfig;
    type: 'global';
});
export declare function buildPolicyType(args: BuildPolicyType): GraphQLObjectType;
export default function buildPoliciesType(payload: Payload): GraphQLObjectType;
export {};
//# sourceMappingURL=buildPoliciesType.d.ts.map