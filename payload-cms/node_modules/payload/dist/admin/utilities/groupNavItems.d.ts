import type { i18n as Ii18n } from 'i18next';
import type { Permissions } from '../../auth';
import type { SanitizedCollectionConfig } from '../../collections/config/types';
import type { SanitizedGlobalConfig } from '../../globals/config/types';
export declare enum EntityType {
    collection = "collections",
    global = "globals"
}
export type EntityToGroup = {
    entity: SanitizedCollectionConfig;
    type: EntityType.collection;
} | {
    entity: SanitizedGlobalConfig;
    type: EntityType.global;
};
export type Group = {
    entities: EntityToGroup[];
    label: string;
};
export declare function groupNavItems(entities: EntityToGroup[], permissions: Permissions, i18n: Ii18n): Group[];
//# sourceMappingURL=groupNavItems.d.ts.map