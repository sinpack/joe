import type { NextFunction, Response } from 'express';
import type { SanitizedCollectionConfig } from '../collections/config/types';
import type { PayloadRequest } from '../express/types';
declare const getExecuteStaticAccess: (config: SanitizedCollectionConfig) => (req: PayloadRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default getExecuteStaticAccess;
//# sourceMappingURL=getExecuteStaticAccess.d.ts.map