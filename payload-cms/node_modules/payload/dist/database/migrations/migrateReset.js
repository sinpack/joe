/* eslint-disable no-restricted-syntax, no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateReset", {
    enumerable: true,
    get: function() {
        return migrateReset;
    }
});
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _getMigrations = require("./getMigrations");
const _readMigrationFiles = require("./readMigrationFiles");
async function migrateReset() {
    const { payload } = this;
    const migrationFiles = await (0, _readMigrationFiles.readMigrationFiles)({
        payload
    });
    const { existingMigrations } = await (0, _getMigrations.getMigrations)({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to reset.'
        });
        return;
    }
    const req = {
        payload
    };
    // Rollback all migrations in order
    for (const migration of migrationFiles){
        // Create or update migration in database
        const existingMigration = existingMigrations.find((existing)=>existing.name === migration.name);
        if (existingMigration) {
            payload.logger.info({
                msg: `Migrating down: ${migration.name}`
            });
            try {
                const start = Date.now();
                await (0, _initTransaction.initTransaction)(req);
                await migration.down({
                    payload,
                    req
                });
                await payload.delete({
                    collection: 'payload-migrations',
                    req,
                    where: {
                        id: {
                            equals: existingMigration.id
                        }
                    }
                });
                await (0, _commitTransaction.commitTransaction)(req);
                payload.logger.info({
                    msg: `Migrated down:  ${migration.name} (${Date.now() - start}ms)`
                });
            } catch (err) {
                await (0, _killTransaction.killTransaction)(req);
                payload.logger.error({
                    err,
                    msg: `Error running migration ${migration.name}`
                });
                throw err;
            }
        }
    }
    // Delete dev migration
    try {
        await payload.delete({
            collection: 'payload-migrations',
            where: {
                batch: {
                    equals: -1
                }
            }
        });
    } catch (err) {
        payload.logger.error({
            error: err,
            msg: 'Error deleting dev migration'
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVSZXNldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tYXdhaXQtaW4tbG9vcCAqL1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEJhc2VEYXRhYmFzZUFkYXB0ZXIgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IHsgY29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbWl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcbmltcG9ydCB7IGdldE1pZ3JhdGlvbnMgfSBmcm9tICcuL2dldE1pZ3JhdGlvbnMnXG5pbXBvcnQgeyByZWFkTWlncmF0aW9uRmlsZXMgfSBmcm9tICcuL3JlYWRNaWdyYXRpb25GaWxlcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZ3JhdGVSZXNldCh0aGlzOiBCYXNlRGF0YWJhc2VBZGFwdGVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgcGF5bG9hZCB9ID0gdGhpc1xuICBjb25zdCBtaWdyYXRpb25GaWxlcyA9IGF3YWl0IHJlYWRNaWdyYXRpb25GaWxlcyh7IHBheWxvYWQgfSlcblxuICBjb25zdCB7IGV4aXN0aW5nTWlncmF0aW9ucyB9ID0gYXdhaXQgZ2V0TWlncmF0aW9ucyh7IHBheWxvYWQgfSlcblxuICBpZiAoIWV4aXN0aW5nTWlncmF0aW9ucz8ubGVuZ3RoKSB7XG4gICAgcGF5bG9hZC5sb2dnZXIuaW5mbyh7IG1zZzogJ05vIG1pZ3JhdGlvbnMgdG8gcmVzZXQuJyB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgcmVxID0geyBwYXlsb2FkIH0gYXMgUGF5bG9hZFJlcXVlc3RcblxuICAvLyBSb2xsYmFjayBhbGwgbWlncmF0aW9ucyBpbiBvcmRlclxuICBmb3IgKGNvbnN0IG1pZ3JhdGlvbiBvZiBtaWdyYXRpb25GaWxlcykge1xuICAgIC8vIENyZWF0ZSBvciB1cGRhdGUgbWlncmF0aW9uIGluIGRhdGFiYXNlXG4gICAgY29uc3QgZXhpc3RpbmdNaWdyYXRpb24gPSBleGlzdGluZ01pZ3JhdGlvbnMuZmluZChcbiAgICAgIChleGlzdGluZykgPT4gZXhpc3RpbmcubmFtZSA9PT0gbWlncmF0aW9uLm5hbWUsXG4gICAgKVxuICAgIGlmIChleGlzdGluZ01pZ3JhdGlvbikge1xuICAgICAgcGF5bG9hZC5sb2dnZXIuaW5mbyh7IG1zZzogYE1pZ3JhdGluZyBkb3duOiAke21pZ3JhdGlvbi5uYW1lfWAgfSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgICAgICBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKVxuICAgICAgICBhd2FpdCBtaWdyYXRpb24uZG93bih7IHBheWxvYWQsIHJlcSB9KVxuICAgICAgICBhd2FpdCBwYXlsb2FkLmRlbGV0ZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgICBlcXVhbHM6IGV4aXN0aW5nTWlncmF0aW9uLmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG4gICAgICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRlZCBkb3duOiAgJHttaWdyYXRpb24ubmFtZX0gKCR7RGF0ZS5ub3coKSAtIHN0YXJ0fW1zKWAgfSlcbiAgICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgICAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKVxuICAgICAgICBwYXlsb2FkLmxvZ2dlci5lcnJvcih7IGVyciwgbXNnOiBgRXJyb3IgcnVubmluZyBtaWdyYXRpb24gJHttaWdyYXRpb24ubmFtZX1gIH0pXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERlbGV0ZSBkZXYgbWlncmF0aW9uXG4gIHRyeSB7XG4gICAgYXdhaXQgcGF5bG9hZC5kZWxldGUoe1xuICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgICB3aGVyZToge1xuICAgICAgICBiYXRjaDoge1xuICAgICAgICAgIGVxdWFsczogLTEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIHBheWxvYWQubG9nZ2VyLmVycm9yKHsgZXJyb3I6IGVyciwgbXNnOiAnRXJyb3IgZGVsZXRpbmcgZGV2IG1pZ3JhdGlvbicgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGVSZXNldCIsInBheWxvYWQiLCJtaWdyYXRpb25GaWxlcyIsInJlYWRNaWdyYXRpb25GaWxlcyIsImV4aXN0aW5nTWlncmF0aW9ucyIsImdldE1pZ3JhdGlvbnMiLCJsZW5ndGgiLCJsb2dnZXIiLCJpbmZvIiwibXNnIiwicmVxIiwibWlncmF0aW9uIiwiZXhpc3RpbmdNaWdyYXRpb24iLCJmaW5kIiwiZXhpc3RpbmciLCJuYW1lIiwic3RhcnQiLCJEYXRlIiwibm93IiwiaW5pdFRyYW5zYWN0aW9uIiwiZG93biIsImRlbGV0ZSIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImlkIiwiZXF1YWxzIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJlcnIiLCJraWxsVHJhbnNhY3Rpb24iLCJlcnJvciIsImJhdGNoIl0sInJh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