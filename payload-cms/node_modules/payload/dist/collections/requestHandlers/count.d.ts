import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
export default function countHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<{
    totalDocs: number;
}> | void>;
//# sourceMappingURL=count.d.ts.map