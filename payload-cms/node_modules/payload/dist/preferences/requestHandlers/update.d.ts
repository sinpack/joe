import type { NextFunction, Response } from 'express';
import type { GeneratedTypes } from '../../';
import type { PayloadRequest } from '../../express/types';
export default function updateHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<GeneratedTypes['collections']['_preference']> | void>;
//# sourceMappingURL=update.d.ts.map