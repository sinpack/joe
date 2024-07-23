import type { SanitizedCollectionConfig } from '../collections/config/types';
import type { SanitizedConfig } from '../config/types';
import type { PayloadRequest } from '../express/types';
type Args = {
    collectionConfig: SanitizedCollectionConfig;
    config: SanitizedConfig;
    req: PayloadRequest;
};
/**
 * Remove temp files if enabled, as express-fileupload does not do this automatically
 */
export declare const unlinkTempFiles: (args: Args) => Promise<void>;
export {};
//# sourceMappingURL=unlinkTempFiles.d.ts.map