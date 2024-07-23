import type { Response } from 'express';
import type { PaginatedDocs } from '../../../database/types';
import type { PayloadRequest } from '../../../express/types';
import type { Where } from '../../../types';
import type { Collection } from '../../config/types';
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
}) => Promise<PaginatedDocs<any>>;
export default function findVersionsResolver(collection: Collection): Resolver;
//# sourceMappingURL=findVersions.d.ts.map