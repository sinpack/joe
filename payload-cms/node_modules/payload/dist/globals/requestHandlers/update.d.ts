import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
import type { SanitizedGlobalConfig } from '../config/types';
export type UpdateGlobalResult = Promise<Response<Document> | void>;
export type UpdateGlobalResponse = (req: PayloadRequest, res: Response, next: NextFunction) => UpdateGlobalResult;
export default function updateHandler(globalConfig: SanitizedGlobalConfig): UpdateGlobalResponse;
//# sourceMappingURL=update.d.ts.map