import type { DeepPartial } from 'ts-essentials';
import type { GeneratedTypes } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { SanitizedGlobalConfig } from '../../config/types';
type Resolver<TSlug extends keyof GeneratedTypes['globals']> = (_: unknown, args: {
    data?: DeepPartial<Omit<GeneratedTypes['globals'][TSlug], 'id'>>;
    draft?: boolean;
    fallbackLocale?: string;
    locale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<GeneratedTypes['globals'][TSlug]>;
export default function updateResolver<TSlug extends keyof GeneratedTypes['globals']>(globalConfig: SanitizedGlobalConfig): Resolver<TSlug>;
export {};
//# sourceMappingURL=update.d.ts.map