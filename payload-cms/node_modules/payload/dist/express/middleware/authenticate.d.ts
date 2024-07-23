import type { NextFunction, Request, Response } from 'express';
import type { SanitizedConfig } from '../../config/types';
export type PayloadAuthenticate = (req: Request, res: Response, next: NextFunction) => NextFunction;
declare const _default: (config: SanitizedConfig) => PayloadAuthenticate;
export default _default;
//# sourceMappingURL=authenticate.d.ts.map