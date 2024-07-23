import type { CollectionConfig } from '../collections/config/types';
import type { Config } from '../config/types';
import type { Field } from '../fields/config/types';
type Options = {
    collection: CollectionConfig;
    config: Config;
};
declare const getBaseUploadFields: ({ collection, config }: Options) => Field[];
export default getBaseUploadFields;
//# sourceMappingURL=getBaseFields.d.ts.map