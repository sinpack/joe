import type { DeepPartial } from 'ts-essentials';
import type { GeneratedTypes } from '../../';
import type { PayloadRequest } from '../../express/types';
import type { SanitizedGlobalConfig } from '../config/types';
type Args<T extends {
    [field: number | string | symbol]: unknown;
}> = {
    autosave?: boolean;
    data: DeepPartial<Omit<T, 'id'>>;
    depth?: number;
    draft?: boolean;
    globalConfig: SanitizedGlobalConfig;
    overrideAccess?: boolean;
    req: PayloadRequest;
    showHiddenFields?: boolean;
    slug: string;
};
declare function update<TSlug extends keyof GeneratedTypes['globals']>(args: Args<GeneratedTypes['globals'][TSlug]>): Promise<GeneratedTypes['globals'][TSlug]>;
export default update;
//# sourceMappingURL=update.d.ts.map