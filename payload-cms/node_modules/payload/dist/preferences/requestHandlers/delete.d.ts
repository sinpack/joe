import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
export default function deleteHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<{
    message: string;
}> | void>;
//# sourceMappingURL=delete.d.ts.map