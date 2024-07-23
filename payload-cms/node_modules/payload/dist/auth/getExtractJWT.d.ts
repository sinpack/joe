import type { Request } from 'express';
import type { SanitizedConfig } from '../config/types';
declare const getExtractJWT: (config: SanitizedConfig) => (req: Request) => null | string;
export default getExtractJWT;
//# sourceMappingURL=getExtractJWT.d.ts.map