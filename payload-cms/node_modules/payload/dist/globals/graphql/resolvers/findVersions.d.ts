import type { Response } from 'express';
import type { PayloadRequest } from '../../../express/types';
import type { Document, Where } from '../../../types';
import type { SanitizedGlobalConfig } from '../../config/types';
export type Resolver = (_: unknown, args: {
    fallbackLocale?: string;
    limit?: number;
    locale?: string;
    page?: number;
    sort?: string;
    where: Where;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function findVersionsResolver(globalConfig: SanitizedGlobalConfig): Resolver;
//# sourceMappingURL=findVersions.d.ts.map