import type { MarkOptional } from 'ts-essentials';
import type { BaseDatabaseAdapter } from './types';
export declare function createDatabaseAdapter<T extends BaseDatabaseAdapter>(args: MarkOptional<T, 'createMigration' | 'migrate' | 'migrateDown' | 'migrateFresh' | 'migrateRefresh' | 'migrateReset' | 'migrateStatus' | 'migrationDir'>): T;
//# sourceMappingURL=createDatabaseAdapter.d.ts.map