import type { SanitizedCollectionConfig, TypeWithID } from '../../collections/config/types';
import type { AccessResult } from '../../config/types';
import type { SanitizedGlobalConfig } from '../../globals/config/types';
import type { PayloadRequest } from '../../types';
type Arguments<T> = {
    accessResult: AccessResult;
    doc: T;
    entity: SanitizedCollectionConfig | SanitizedGlobalConfig;
    entityType: 'collection' | 'global';
    overrideAccess: boolean;
    req: PayloadRequest;
};
declare const replaceWithDraftIfAvailable: <T extends TypeWithID>({ accessResult, doc, entity, entityType, req, }: Arguments<T>) => Promise<T>;
export default replaceWithDraftIfAvailable;
//# sourceMappingURL=replaceWithDraftIfAvailable.d.ts.map