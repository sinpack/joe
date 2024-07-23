import type pino from 'pino';
import type { SanitizedConfig } from './types';
import Logger from '../utilities/logger';
declare const loadConfig: (logger?: pino.Logger) => Promise<SanitizedConfig>;
export default loadConfig;
//# sourceMappingURL=load.d.ts.map