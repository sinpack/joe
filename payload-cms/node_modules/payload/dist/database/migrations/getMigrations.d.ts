import type { Payload } from '../..';
import type { MigrationData } from '../types';
/**
 * Gets all existing migrations from the database, excluding the dev migration
 */
export declare function getMigrations({ payload, }: {
    payload: Payload;
}): Promise<{
    existingMigrations: MigrationData[];
    latestBatch: number;
}>;
//# sourceMappingURL=getMigrations.d.ts.map