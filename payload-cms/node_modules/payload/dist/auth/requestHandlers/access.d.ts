import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Permissions } from '../types';
export default function accessRequestHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<Permissions> | void>;
//# sourceMappingURL=access.d.ts.map