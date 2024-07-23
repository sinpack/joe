import type { PayloadRequest } from '../../express/types';
import type { SanitizedGlobalConfig } from '../config/types';
type Args = {
    depth?: number;
    draft?: boolean;
    globalConfig: SanitizedGlobalConfig;
    locale?: string;
    overrideAccess?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
    slug: string;
};
declare function findOne<T extends Record<string, unknown>>(args: Args): Promise<T>;
export default findOne;
//# sourceMappingURL=findOne.d.ts.map