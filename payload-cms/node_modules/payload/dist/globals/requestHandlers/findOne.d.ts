import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
import type { SanitizedGlobalConfig } from '../config/types';
export type FindOneGlobalResult = Promise<Response<Document> | void>;
export type FindOneGlobalResponse = (req: PayloadRequest, res: Response, next: NextFunction) => FindOneGlobalResult;
export default function findOneHandler(globalConfig: SanitizedGlobalConfig): FindOneGlobalResponse;
//# sourceMappingURL=findOne.d.ts.map