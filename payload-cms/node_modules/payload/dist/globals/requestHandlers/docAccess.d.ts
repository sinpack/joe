import type { NextFunction, Response } from 'express';
import type { CollectionPermission, GlobalPermission } from '../../auth';
import type { PayloadRequest } from '../../express/types';
import type { SanitizedGlobalConfig } from '../config/types';
export default function docAccessRequestHandler(req: PayloadRequest, res: Response, next: NextFunction, globalConfig: SanitizedGlobalConfig): Promise<Response<CollectionPermission | GlobalPermission> | void>;
//# sourceMappingURL=docAccess.d.ts.map