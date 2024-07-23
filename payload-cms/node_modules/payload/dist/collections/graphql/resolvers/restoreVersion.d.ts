import type { Response } from 'express';
import type { PayloadRequest } from '../../../express/types';
import type { Collection } from '../../config/types';
export type Resolver = (_: unknown, args: {
    id: number | string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function restoreVersionResolver(collection: Collection): Resolver;
//# sourceMappingURL=restoreVersion.d.ts.map