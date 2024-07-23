import type { NextFunction, Response } from 'express';
import type { Logger } from 'pino';
import type { SanitizedConfig } from '../../config/types';
import type { ErrorResponse } from '../responses/formatError';
import type { PayloadRequest } from '../types';
import APIError from '../../errors/APIError';
export type ErrorHandler = (err: APIError, req: PayloadRequest, res: Response, next: NextFunction) => Promise<Response<ErrorResponse> | void>;
declare const errorHandler: (config: SanitizedConfig, logger: Logger) => (err: APIError, req: PayloadRequest, res: Response, next: NextFunction) => Promise<Response<ErrorResponse> | void>;
export default errorHandler;
//# sourceMappingURL=errorHandler.d.ts.map