/* eslint-disable no-restricted-syntax, no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateDown", {
    enumerable: true,
    get: function() {
        return migrateDown;
    }
});
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _getMigrations = require("./getMigrations");
const _readMigrationFiles = require("./readMigrationFiles");
async function migrateDown() {
    const { payload } = this;
    const migrationFiles = await (0, _readMigrationFiles.readMigrationFiles)({
        payload
    });
    const { existingMigrations, latestBatch } = await (0, _getMigrations.getMigrations)({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to rollback.'
        });
        return;
    }
    payload.logger.info({
        msg: `Rolling back batch ${latestBatch} consisting of ${existingMigrations.length} migration(s).`
    });
    const latestBatchMigrations = existingMigrations.filter(({ batch })=>batch === latestBatch);
    for (const migration of latestBatchMigrations){
        const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
        if (!migrationFile) {
            throw new Error(`Migration ${migration.name} not found locally.`);
        }
        const start = Date.now();
        const req = {
            payload
        };
        try {
            payload.logger.info({
                msg: `Migrating down: ${migrationFile.name}`
            });
            await (0, _initTransaction.initTransaction)(req);
            await migrationFile.down({
                payload,
                req
            });
            payload.logger.info({
                msg: `Migrated down:  ${migrationFile.name} (${Date.now() - start}ms)`
            });
            // Waiting for implementation here
            await payload.delete({
                id: migration.id,
                collection: 'payload-migrations',
                req
            });
            await (0, _commitTransaction.commitTransaction)(req);
        } catch (err) {
            await (0, _killTransaction.killTransaction)(req);
            payload.logger.error({
                err,
                msg: `Error running migration ${migrationFile.name}`
            });
            process.exit(1);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVEb3duLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby1hd2FpdC1pbi1sb29wICovXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgQmFzZURhdGFiYXNlQWRhcHRlciB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBjb21taXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21taXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgZ2V0TWlncmF0aW9ucyB9IGZyb20gJy4vZ2V0TWlncmF0aW9ucydcbmltcG9ydCB7IHJlYWRNaWdyYXRpb25GaWxlcyB9IGZyb20gJy4vcmVhZE1pZ3JhdGlvbkZpbGVzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlncmF0ZURvd24odGhpczogQmFzZURhdGFiYXNlQWRhcHRlcik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHBheWxvYWQgfSA9IHRoaXNcbiAgY29uc3QgbWlncmF0aW9uRmlsZXMgPSBhd2FpdCByZWFkTWlncmF0aW9uRmlsZXMoeyBwYXlsb2FkIH0pXG5cbiAgY29uc3QgeyBleGlzdGluZ01pZ3JhdGlvbnMsIGxhdGVzdEJhdGNoIH0gPSBhd2FpdCBnZXRNaWdyYXRpb25zKHtcbiAgICBwYXlsb2FkLFxuICB9KVxuXG4gIGlmICghZXhpc3RpbmdNaWdyYXRpb25zPy5sZW5ndGgpIHtcbiAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiAnTm8gbWlncmF0aW9ucyB0byByb2xsYmFjay4nIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBwYXlsb2FkLmxvZ2dlci5pbmZvKHtcbiAgICBtc2c6IGBSb2xsaW5nIGJhY2sgYmF0Y2ggJHtsYXRlc3RCYXRjaH0gY29uc2lzdGluZyBvZiAke2V4aXN0aW5nTWlncmF0aW9ucy5sZW5ndGh9IG1pZ3JhdGlvbihzKS5gLFxuICB9KVxuXG4gIGNvbnN0IGxhdGVzdEJhdGNoTWlncmF0aW9ucyA9IGV4aXN0aW5nTWlncmF0aW9ucy5maWx0ZXIoKHsgYmF0Y2ggfSkgPT4gYmF0Y2ggPT09IGxhdGVzdEJhdGNoKVxuXG4gIGZvciAoY29uc3QgbWlncmF0aW9uIG9mIGxhdGVzdEJhdGNoTWlncmF0aW9ucykge1xuICAgIGNvbnN0IG1pZ3JhdGlvbkZpbGUgPSBtaWdyYXRpb25GaWxlcy5maW5kKChtKSA9PiBtLm5hbWUgPT09IG1pZ3JhdGlvbi5uYW1lKVxuICAgIGlmICghbWlncmF0aW9uRmlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaWdyYXRpb24gJHttaWdyYXRpb24ubmFtZX0gbm90IGZvdW5kIGxvY2FsbHkuYClcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KClcbiAgICBjb25zdCByZXEgPSB7IHBheWxvYWQgfSBhcyBQYXlsb2FkUmVxdWVzdFxuXG4gICAgdHJ5IHtcbiAgICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRpbmcgZG93bjogJHttaWdyYXRpb25GaWxlLm5hbWV9YCB9KVxuICAgICAgYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSlcbiAgICAgIGF3YWl0IG1pZ3JhdGlvbkZpbGUuZG93bih7IHBheWxvYWQsIHJlcSB9KVxuICAgICAgcGF5bG9hZC5sb2dnZXIuaW5mbyh7XG4gICAgICAgIG1zZzogYE1pZ3JhdGVkIGRvd246ICAke21pZ3JhdGlvbkZpbGUubmFtZX0gKCR7RGF0ZS5ub3coKSAtIHN0YXJ0fW1zKWAsXG4gICAgICB9KVxuICAgICAgLy8gV2FpdGluZyBmb3IgaW1wbGVtZW50YXRpb24gaGVyZVxuICAgICAgYXdhaXQgcGF5bG9hZC5kZWxldGUoe1xuICAgICAgICBpZDogbWlncmF0aW9uLmlkLFxuICAgICAgICBjb2xsZWN0aW9uOiAncGF5bG9hZC1taWdyYXRpb25zJyxcbiAgICAgICAgcmVxLFxuICAgICAgfSlcblxuICAgICAgYXdhaXQgY29tbWl0VHJhbnNhY3Rpb24ocmVxKVxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICAgIHBheWxvYWQubG9nZ2VyLmVycm9yKHtcbiAgICAgICAgZXJyLFxuICAgICAgICBtc2c6IGBFcnJvciBydW5uaW5nIG1pZ3JhdGlvbiAke21pZ3JhdGlvbkZpbGUubmFtZX1gLFxuICAgICAgfSlcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGVEb3duIiwicGF5bG9hZCIsIm1pZ3JhdGlvbkZpbGVzIiwicmVhZE1pZ3JhdGlvbkZpbGVzIiwiZXhpc3RpbmdNaWdyYXRpb25zIiwibGF0ZXN0QmF0Y2giLCJnZXRNaWdyYXRpb25zIiwibGVuZ3RoIiwibG9nZ2VyIiwiaW5mbyIsIm1zZyIsImxhdGVzdEJhdGNoTWlncmF0aW9ucyIsImZpbHRlciIsImJhdGNoIiwibWlncmF0aW9uIiwibWlncmF0aW9uRmlsZSIsImZpbmQiLCJtIiwibmFtZSIsIkVycm9yIiwic3RhcnQiLCJEYXRlIiwibm93IiwicmVxIiwiaW5pdFRyYW5zYWN0aW9uIiwiZG93biIsImRlbGV0ZSIsImlkIiwiY29sbGVjdGlvbiIsImNvbW1pdFRyYW5zYWN0aW9uIiwiZXJyIiwia2lsbFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJwcm9jZXNzIiwiZXhpdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7Ozs7K0JBVW5DQTs7O2VBQUFBOzs7bUNBTlk7aUNBQ0Y7aUNBQ0E7K0JBQ0Y7b0NBQ0s7QUFFNUIsZUFBZUE7SUFDcEIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxJQUFJO0lBQ3hCLE1BQU1DLGlCQUFpQixNQUFNQyxJQUFBQSxzQ0FBa0IsRUFBQztRQUFFRjtJQUFRO0lBRTFELE1BQU0sRUFBRUcsa0JBQWtCLEVBQUVDLFdBQVcsRUFBRSxHQUFHLE1BQU1DLElBQUFBLDRCQUFhLEVBQUM7UUFDOURMO0lBQ0Y7SUFFQSxJQUFJLENBQUNHLG9CQUFvQkcsUUFBUTtRQUMvQk4sUUFBUU8sTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSztRQUE2QjtRQUN4RDtJQUNGO0lBRUFULFFBQVFPLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1FBQ2xCQyxLQUFLLENBQUMsbUJBQW1CLEVBQUVMLFlBQVksZUFBZSxFQUFFRCxtQkFBbUJHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDbkc7SUFFQSxNQUFNSSx3QkFBd0JQLG1CQUFtQlEsTUFBTSxDQUFDLENBQUMsRUFBRUMsS0FBSyxFQUFFLEdBQUtBLFVBQVVSO0lBRWpGLEtBQUssTUFBTVMsYUFBYUgsc0JBQXVCO1FBQzdDLE1BQU1JLGdCQUFnQmIsZUFBZWMsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLElBQUksS0FBS0osVUFBVUksSUFBSTtRQUMxRSxJQUFJLENBQUNILGVBQWU7WUFDbEIsTUFBTSxJQUFJSSxNQUFNLENBQUMsVUFBVSxFQUFFTCxVQUFVSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEU7UUFFQSxNQUFNRSxRQUFRQyxLQUFLQyxHQUFHO1FBQ3RCLE1BQU1DLE1BQU07WUFBRXRCO1FBQVE7UUFFdEIsSUFBSTtZQUNGQSxRQUFRTyxNQUFNLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFSyxjQUFjRyxJQUFJLENBQUMsQ0FBQztZQUFDO1lBQ25FLE1BQU1NLElBQUFBLGdDQUFlLEVBQUNEO1lBQ3RCLE1BQU1SLGNBQWNVLElBQUksQ0FBQztnQkFBRXhCO2dCQUFTc0I7WUFBSTtZQUN4Q3RCLFFBQVFPLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dCQUNsQkMsS0FBSyxDQUFDLGdCQUFnQixFQUFFSyxjQUFjRyxJQUFJLENBQUMsRUFBRSxFQUFFRyxLQUFLQyxHQUFHLEtBQUtGLE1BQU0sR0FBRyxDQUFDO1lBQ3hFO1lBQ0Esa0NBQWtDO1lBQ2xDLE1BQU1uQixRQUFReUIsTUFBTSxDQUFDO2dCQUNuQkMsSUFBSWIsVUFBVWEsRUFBRTtnQkFDaEJDLFlBQVk7Z0JBQ1pMO1lBQ0Y7WUFFQSxNQUFNTSxJQUFBQSxvQ0FBaUIsRUFBQ047UUFDMUIsRUFBRSxPQUFPTyxLQUFjO1lBQ3JCLE1BQU1DLElBQUFBLGdDQUFlLEVBQUNSO1lBQ3RCdEIsUUFBUU8sTUFBTSxDQUFDd0IsS0FBSyxDQUFDO2dCQUNuQkY7Z0JBQ0FwQixLQUFLLENBQUMsd0JBQXdCLEVBQUVLLGNBQWNHLElBQUksQ0FBQyxDQUFDO1lBQ3REO1lBQ0FlLFFBQVFDLElBQUksQ0FBQztRQUNmO0lBQ0Y7QUFDRiJ9