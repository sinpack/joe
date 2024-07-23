import type { TypeWithID } from './collections/config/types';
import type { InitOptions } from './config/types';
import type { BaseDatabaseAdapter } from './database/types';
import type { RequestContext } from './express/types';
import type { TypeWithID as GlobalTypeWithID } from './globals/config/types';
import type { Payload as LocalPayload } from './payload';
import { BasePayload } from './payload';
export { getPayload } from './payload';
export declare class Payload extends BasePayload<GeneratedTypes> {
    init(options: InitOptions): Promise<LocalPayload>;
}
declare const payload: Payload;
export default payload;
type GeneratedTypes = {
    collections: {
        [slug: number | string | symbol]: TypeWithID & Record<string, unknown>;
    };
    globals: {
        [slug: number | string | symbol]: GlobalTypeWithID & Record<string, unknown>;
    };
};
type DatabaseAdapter = BaseDatabaseAdapter;
export type { DatabaseAdapter, GeneratedTypes, RequestContext };
//# sourceMappingURL=index.d.ts.map