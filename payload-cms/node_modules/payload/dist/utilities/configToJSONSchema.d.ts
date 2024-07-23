import type { JSONSchema4, JSONSchema4TypeName } from 'json-schema';
import type { SanitizedCollectionConfig } from '../collections/config/types';
import type { SanitizedConfig } from '../exports/config';
import type { Field } from '../fields/config/types';
import type { SanitizedGlobalConfig } from '../globals/config/types';
import type { Payload } from '../payload';
/**
 * Returns a JSON Schema Type with 'null' added if the field is not required.
 */
export declare function withNullableJSONSchemaType(fieldType: JSONSchema4TypeName, isRequired: boolean): JSONSchema4TypeName | JSONSchema4TypeName[];
export declare function fieldsToJSONSchema(
/**
 * Used for relationship fields, to determine whether to use a string or number type for the ID.
 * While there is a default ID field type set by the db adapter, they can differ on a collection-level
 * if they have custom ID fields.
 */
collectionIDFieldTypes: {
    [key: string]: 'number' | 'string';
}, fields: Field[], 
/**
 * Allows you to define new top-level interfaces that can be re-used in the output schema.
 */
interfaceNameDefinitions: Map<string, JSONSchema4>, payload?: Payload, config?: SanitizedConfig): {
    properties: {
        [k: string]: JSONSchema4;
    };
    required: string[];
};
export declare function entityToJSONSchema(config: SanitizedConfig, incomingEntity: SanitizedCollectionConfig | SanitizedGlobalConfig, interfaceNameDefinitions: Map<string, JSONSchema4>, defaultIDType: 'number' | 'text', payload?: Payload): JSONSchema4;
/**
 * This is used for generating the TypeScript types (payload-types.ts) with the payload generate:types command.
 */
export declare function configToJSONSchema(config: SanitizedConfig, defaultIDType?: 'number' | 'text', payload?: Payload): JSONSchema4;
//# sourceMappingURL=configToJSONSchema.d.ts.map