import type { Field } from '../../../../fields/config/types';
/**
 * **Returns Map with array and block field schemas**
 * - Takes entity fields and returns a Map to retrieve field schemas by path without indexes
 *
 * **Accessing field schemas**
 * - array fields: indexes must be removed from path i.e. `array.innerArray` instead of `array.0.innerArray`
 * - block fields: the block slug must be appended to the path `blocksFieldName.blockSlug` instead of `blocksFieldName`
 *
 * @param entityFields
 * @returns Map<string, Field[]>
 */
export declare const buildFieldSchemaMap: (entityFields: Field[]) => Map<string, Field[]>;
//# sourceMappingURL=buildFieldSchemaMap.d.ts.map