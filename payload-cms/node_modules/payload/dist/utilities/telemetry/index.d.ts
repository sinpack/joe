import type { Payload } from '../../payload';
import type { AdminInitEvent } from './events/adminInit';
import type { ServerInitEvent } from './events/serverInit';
export type BaseEvent = {
    envID: string;
    nodeEnv: string;
    nodeVersion: string;
    payloadVersion: string;
    projectID: string;
};
type PackageJSON = {
    dependencies: Record<string, string | undefined>;
    name: string;
};
type TelemetryEvent = AdminInitEvent | ServerInitEvent;
type Args = {
    event: TelemetryEvent;
    payload: Payload;
};
export declare const sendEvent: ({ event, payload }: Args) => Promise<void>;
export declare const getPayloadVersion: (packageJSON: PackageJSON) => string;
export {};
//# sourceMappingURL=index.d.ts.map