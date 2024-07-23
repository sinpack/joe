import type { PayloadRequest } from '../../../express/types';
import type { Where } from '../../../types';
import type { Collection } from '../../config/types';
export type Resolver = (_: unknown, args: {
    data: Record<string, unknown>;
    locale?: string;
    where?: Where;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<{
    totalDocs: number;
}>;
export default function findResolver(collection: Collection): Resolver;
//# sourceMappingURL=count.d.ts.map