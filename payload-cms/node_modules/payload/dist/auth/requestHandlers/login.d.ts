import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Result } from '../operations/login';
export default function loginHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<Result & {
    message: string;
}> | void>;
//# sourceMappingURL=login.d.ts.map