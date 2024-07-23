import pino from 'pino';
import prettifier from 'pino-pretty';
export type PayloadLogger = pino.Logger;
export declare const defaultLoggerOptions: pino.LoggerOptions;
export declare const prettySyncLoggerDestination: prettifier.PrettyStream;
declare const getLogger: (name?: string, options?: pino.LoggerOptions, destination?: pino.DestinationStream) => PayloadLogger;
export default getLogger;
//# sourceMappingURL=logger.d.ts.map