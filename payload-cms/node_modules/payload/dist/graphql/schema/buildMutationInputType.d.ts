import type { GraphQLInputFieldConfig, GraphQLScalarType } from 'graphql';
import { GraphQLInputObjectType } from 'graphql';
import type { SanitizedCollectionConfig } from '../../collections/config/types';
import type { Field } from '../../fields/config/types';
import type { Payload } from '../../payload';
export declare const getCollectionIDType: (payload: Payload, collection: SanitizedCollectionConfig) => GraphQLScalarType;
export type InputObjectTypeConfig = {
    [path: string]: GraphQLInputFieldConfig;
};
declare function buildMutationInputType(payload: Payload, name: string, fields: Field[], parentName: string, forceNullable?: boolean): GraphQLInputObjectType | null;
export default buildMutationInputType;
//# sourceMappingURL=buildMutationInputType.d.ts.map