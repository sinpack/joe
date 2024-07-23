import type { Collection } from '../collections/config/types';
import type { SanitizedConfig } from '../config/types';
import type { PayloadRequest } from '../express/types';
import type { FileToSave } from './types';
type Args<T> = {
    collection: Collection;
    config: SanitizedConfig;
    data: T;
    operation: 'create' | 'update';
    originalDoc?: T;
    overwriteExistingFiles?: boolean;
    req: PayloadRequest;
    throwOnMissingFile?: boolean;
};
type Result<T> = Promise<{
    data: T;
    files: FileToSave[];
}>;
export declare const generateFileData: <T>({ collection: { config: collectionConfig }, config, data, operation, originalDoc, overwriteExistingFiles, req, throwOnMissingFile, }: Args<T>) => Result<T>;
export {};
//# sourceMappingURL=generateFileData.d.ts.map