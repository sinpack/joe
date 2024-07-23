import type { Value } from './types';
type RelationMap = {
    [relation: string]: (number | string)[];
};
type CreateRelationMap = (args: {
    hasMany: boolean;
    relationTo: string | string[];
    value: Value | Value[] | null;
}) => RelationMap;
export declare const createRelationMap: CreateRelationMap;
export {};
//# sourceMappingURL=createRelationMap.d.ts.map