import type { NextFunction, Response } from 'express';
import type { GeneratedTypes } from '../../';
import type { PayloadRequest } from '../../express/types';
export default function findOneHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<GeneratedTypes['collections']['_preference']> | void>;
//# sourceMappingURL=findOne.d.ts.map