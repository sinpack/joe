import type { Response } from 'express';
import type { PayloadRequest } from '../../../express/types';
import type { Document } from '../../../types';
import type { SanitizedGlobalConfig } from '../../config/types';
export type Resolver = (_: unknown, args: {
    draft?: boolean;
    fallbackLocale?: string;
    id: number | string;
    locale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function findVersionByIDResolver(globalConfig: SanitizedGlobalConfig): Resolver;
//# sourceMappingURL=findVersionByID.d.ts.map