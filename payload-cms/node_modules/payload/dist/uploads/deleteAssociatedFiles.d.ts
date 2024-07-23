import type { TFunction } from 'i18next';
import type { SanitizedCollectionConfig } from '../collections/config/types';
import type { SanitizedConfig } from '../config/types';
import type { FileToSave } from './types';
type Args = {
    collectionConfig: SanitizedCollectionConfig;
    config: SanitizedConfig;
    doc: Record<string, unknown>;
    files?: FileToSave[];
    overrideDelete: boolean;
    t: TFunction;
};
export declare const deleteAssociatedFiles: (args: Args) => Promise<void>;
export {};
//# sourceMappingURL=deleteAssociatedFiles.d.ts.map