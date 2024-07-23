import type { FieldTypes } from '../exports/config';
import type { Field } from '../fields/config/types';
export type FieldSchemaJSON = {
    blocks?: FieldSchemaJSON;
    fields?: FieldSchemaJSON;
    hasMany?: boolean;
    name: string;
    relationTo?: string;
    slug?: string;
    type: keyof FieldTypes;
}[];
export declare const fieldSchemaToJSON: (fields: Field[]) => FieldSchemaJSON;
//# sourceMappingURL=fieldSchemaToJSON.d.ts.map