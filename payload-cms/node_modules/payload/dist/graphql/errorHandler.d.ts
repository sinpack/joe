import type { GraphQLFormattedError } from 'graphql';
import type { AfterErrorHook } from '../collections/config/types';
import type { Payload } from '../payload';
declare const errorHandler: (payload: Payload, err: any, debug: boolean, afterErrorHook: AfterErrorHook) => Promise<GraphQLFormattedError>;
export default errorHandler;
//# sourceMappingURL=errorHandler.d.ts.map