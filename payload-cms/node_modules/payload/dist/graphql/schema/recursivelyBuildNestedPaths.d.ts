import type { Payload } from '../..';
import type { FieldWithSubFields, TabsField } from '../../fields/config/types';
type Args = {
    field: FieldWithSubFields | TabsField;
    nestedFieldName2: string;
    parentName: string;
    payload: Payload;
};
declare const recursivelyBuildNestedPaths: ({ field, nestedFieldName2, parentName, payload }: Args) => any;
export default recursivelyBuildNestedPaths;
//# sourceMappingURL=recursivelyBuildNestedPaths.d.ts.map