import type { PaginatedDocs } from '../../../database/types';
import type { PayloadRequest } from '../../../express/types';
import type { Where } from '../../../types';
import type { Collection } from '../../config/types';
export type Resolver = (_: unknown, args: {
    data: Record<string, unknown>;
    draft: boolean;
    fallbackLocale?: string;
    limit?: number;
    locale?: string;
    page?: number;
    sort?: string;
    where?: Where;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<PaginatedDocs<any>>;
export default function findResolver(collection: Collection): Resolver;
//# sourceMappingURL=find.d.ts.map