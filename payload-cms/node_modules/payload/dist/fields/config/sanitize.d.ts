import type { Config } from '../../config/types';
import type { Field } from './types';
type Args = {
    config: Config;
    existingFieldNames?: Set<string>;
    fields: Field[];
    /**
     * If true, a richText field will require an editor property to be set, as the sanitizeFields function will not add it from the payload config if not present.
     *
     * @default false
     */
    requireFieldLevelRichTextEditor?: boolean;
    /**
     * If not null, will validate that upload and relationship fields do not relate to a collection that is not in this array.
     * This validation will be skipped if validRelationships is null.
     */
    validRelationships: null | string[];
};
export declare const sanitizeFields: ({ config, existingFieldNames, fields, requireFieldLevelRichTextEditor, validRelationships, }: Args) => Field[];
export {};
//# sourceMappingURL=sanitize.d.ts.map