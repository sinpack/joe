import type { NextFunction, Response } from 'express';
import type { CollectionPermission, GlobalPermission } from '../../auth';
import type { PayloadRequest } from '../../express/types';
export default function docAccessRequestHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<CollectionPermission | GlobalPermission> | void>;
//# sourceMappingURL=docAccess.d.ts.map