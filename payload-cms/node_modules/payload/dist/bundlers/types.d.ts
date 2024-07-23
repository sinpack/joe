import type { PayloadHandler, SanitizedConfig } from 'payload/config';
import type { Payload } from '../payload';
export interface PayloadBundler {
    build: (payloadConfig: SanitizedConfig) => Promise<void>;
    dev: (payload: Payload) => Promise<PayloadHandler>;
    serve: (payload: Payload) => Promise<PayloadHandler>;
}
//# sourceMappingURL=types.d.ts.map