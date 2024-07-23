import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
export default function logoutHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<{
    message: string;
}> | void>;
//# sourceMappingURL=logout.d.ts.map