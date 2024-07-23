import type { GraphQLFieldConfig } from 'graphql';
import { GraphQLObjectType } from 'graphql';
import type { Field } from '../../fields/config/types';
import type { Payload } from '../../payload';
export type ObjectTypeConfig = {
    [path: string]: GraphQLFieldConfig<any, any>;
};
type Args = {
    baseFields?: ObjectTypeConfig;
    fields: Field[];
    forceNullable?: boolean;
    name: string;
    parentName: string;
    payload: Payload;
};
declare function buildObjectType({ name, baseFields, fields, forceNullable, parentName, payload, }: Args): GraphQLObjectType;
export default buildObjectType;
//# sourceMappingURL=buildObjectType.d.ts.map