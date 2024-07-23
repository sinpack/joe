/* eslint-disable no-restricted-syntax, no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateRefresh", {
    enumerable: true,
    get: function() {
        return migrateRefresh;
    }
});
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _getMigrations = require("./getMigrations");
const _readMigrationFiles = require("./readMigrationFiles");
async function migrateRefresh() {
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
    const req = {
        payload
    };
    // Reverse order of migrations to rollback
    existingMigrations.reverse();
    for (const migration of existingMigrations){
        try {
            const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
            if (!migrationFile) {
                throw new Error(`Migration ${migration.name} not found locally.`);
            }
            payload.logger.info({
                msg: `Migrating down: ${migration.name}`
            });
            const start = Date.now();
            await (0, _initTransaction.initTransaction)(req);
            await migrationFile.down({
                payload,
                req
            });
            payload.logger.info({
                msg: `Migrated down:  ${migration.name} (${Date.now() - start}ms)`
            });
            await payload.delete({
                collection: 'payload-migrations',
                req,
                where: {
                    name: {
                        equals: migration.name
                    }
                }
            });
        } catch (err) {
            await (0, _killTransaction.killTransaction)(req);
            let msg = `Error running migration ${migration.name}. Rolling back.`;
            if (err instanceof Error) {
                msg += ` ${err.message}`;
            }
            payload.logger.error({
                err,
                msg
            });
            process.exit(1);
        }
    }
    // Run all migrate up
    for (const migration of migrationFiles){
        payload.logger.info({
            msg: `Migrating: ${migration.name}`
        });
        try {
            const start = Date.now();
            await (0, _initTransaction.initTransaction)(req);
            await migration.up({
                payload,
                req
            });
            await payload.create({
                collection: 'payload-migrations',
                data: {
                    name: migration.name,
                    executed: true
                },
                req
            });
            await (0, _commitTransaction.commitTransaction)(req);
            payload.logger.info({
                msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
            });
        } catch (err) {
            await (0, _killTransaction.killTransaction)(req);
            let msg = `Error running migration ${migration.name}. Rolling back.`;
            if (err instanceof Error) {
                msg += ` ${err.message}`;
            }
            payload.logger.error({
                err,
                msg
            });
            process.exit(1);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVSZWZyZXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby1hd2FpdC1pbi1sb29wICovXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgQmFzZURhdGFiYXNlQWRhcHRlciB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBjb21taXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21taXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgZ2V0TWlncmF0aW9ucyB9IGZyb20gJy4vZ2V0TWlncmF0aW9ucydcbmltcG9ydCB7IHJlYWRNaWdyYXRpb25GaWxlcyB9IGZyb20gJy4vcmVhZE1pZ3JhdGlvbkZpbGVzJ1xuXG4vKipcbiAqIFJ1biBhbGwgbWlncmF0aW9uIGRvd24gZnVuY3Rpb25zIGJlZm9yZSBydW5uaW5nIHVwXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWdyYXRlUmVmcmVzaCh0aGlzOiBCYXNlRGF0YWJhc2VBZGFwdGVyKSB7XG4gIGNvbnN0IHsgcGF5bG9hZCB9ID0gdGhpc1xuICBjb25zdCBtaWdyYXRpb25GaWxlcyA9IGF3YWl0IHJlYWRNaWdyYXRpb25GaWxlcyh7IHBheWxvYWQgfSlcblxuICBjb25zdCB7IGV4aXN0aW5nTWlncmF0aW9ucywgbGF0ZXN0QmF0Y2ggfSA9IGF3YWl0IGdldE1pZ3JhdGlvbnMoe1xuICAgIHBheWxvYWQsXG4gIH0pXG5cbiAgaWYgKCFleGlzdGluZ01pZ3JhdGlvbnM/Lmxlbmd0aCkge1xuICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6ICdObyBtaWdyYXRpb25zIHRvIHJvbGxiYWNrLicgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBheWxvYWQubG9nZ2VyLmluZm8oe1xuICAgIG1zZzogYFJvbGxpbmcgYmFjayBiYXRjaCAke2xhdGVzdEJhdGNofSBjb25zaXN0aW5nIG9mICR7ZXhpc3RpbmdNaWdyYXRpb25zLmxlbmd0aH0gbWlncmF0aW9uKHMpLmAsXG4gIH0pXG5cbiAgY29uc3QgcmVxID0geyBwYXlsb2FkIH0gYXMgUGF5bG9hZFJlcXVlc3RcblxuICAvLyBSZXZlcnNlIG9yZGVyIG9mIG1pZ3JhdGlvbnMgdG8gcm9sbGJhY2tcbiAgZXhpc3RpbmdNaWdyYXRpb25zLnJldmVyc2UoKVxuXG4gIGZvciAoY29uc3QgbWlncmF0aW9uIG9mIGV4aXN0aW5nTWlncmF0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtaWdyYXRpb25GaWxlID0gbWlncmF0aW9uRmlsZXMuZmluZCgobSkgPT4gbS5uYW1lID09PSBtaWdyYXRpb24ubmFtZSlcbiAgICAgIGlmICghbWlncmF0aW9uRmlsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pZ3JhdGlvbiAke21pZ3JhdGlvbi5uYW1lfSBub3QgZm91bmQgbG9jYWxseS5gKVxuICAgICAgfVxuXG4gICAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiBgTWlncmF0aW5nIGRvd246ICR7bWlncmF0aW9uLm5hbWV9YCB9KVxuICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgICBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKVxuICAgICAgYXdhaXQgbWlncmF0aW9uRmlsZS5kb3duKHsgcGF5bG9hZCwgcmVxIH0pXG4gICAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHtcbiAgICAgICAgbXNnOiBgTWlncmF0ZWQgZG93bjogICR7bWlncmF0aW9uLm5hbWV9ICgke0RhdGUubm93KCkgLSBzdGFydH1tcylgLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IHBheWxvYWQuZGVsZXRlKHtcbiAgICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgICAgIHJlcSxcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICBlcXVhbHM6IG1pZ3JhdGlvbi5uYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICAgIGxldCBtc2cgPSBgRXJyb3IgcnVubmluZyBtaWdyYXRpb24gJHttaWdyYXRpb24ubmFtZX0uIFJvbGxpbmcgYmFjay5gXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgbXNnICs9IGAgJHtlcnIubWVzc2FnZX1gXG4gICAgICB9XG4gICAgICBwYXlsb2FkLmxvZ2dlci5lcnJvcih7XG4gICAgICAgIGVycixcbiAgICAgICAgbXNnLFxuICAgICAgfSlcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbiAgfVxuXG4gIC8vIFJ1biBhbGwgbWlncmF0ZSB1cFxuICBmb3IgKGNvbnN0IG1pZ3JhdGlvbiBvZiBtaWdyYXRpb25GaWxlcykge1xuICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRpbmc6ICR7bWlncmF0aW9uLm5hbWV9YCB9KVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KClcbiAgICAgIGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpXG4gICAgICBhd2FpdCBtaWdyYXRpb24udXAoeyBwYXlsb2FkLCByZXEgfSlcbiAgICAgIGF3YWl0IHBheWxvYWQuY3JlYXRlKHtcbiAgICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBtaWdyYXRpb24ubmFtZSxcbiAgICAgICAgICBleGVjdXRlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVxLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IGNvbW1pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgICAgcGF5bG9hZC5sb2dnZXIuaW5mbyh7IG1zZzogYE1pZ3JhdGVkOiAgJHttaWdyYXRpb24ubmFtZX0gKCR7RGF0ZS5ub3coKSAtIHN0YXJ0fW1zKWAgfSlcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpXG4gICAgICBsZXQgbXNnID0gYEVycm9yIHJ1bm5pbmcgbWlncmF0aW9uICR7bWlncmF0aW9uLm5hbWV9LiBSb2xsaW5nIGJhY2suYFxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIG1zZyArPSBgICR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgfVxuICAgICAgcGF5bG9hZC5sb2dnZXIuZXJyb3Ioe1xuICAgICAgICBlcnIsXG4gICAgICAgIG1zZyxcbiAgICAgIH0pXG4gICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtaWdyYXRlUmVmcmVzaCIsInBheWxvYWQiLCJtaWdyYXRpb25GaWxlcyIsInJlYWRNaWdyYXRpb25GaWxlcyIsImV4aXN0aW5nTWlncmF0aW9ucyIsImxhdGVzdEJhdGNoIiwiZ2V0TWlncmF0aW9ucyIsImxlbmd0aCIsImxvZ2dlciIsImluZm8iLCJtc2ciLCJyZXEiLCJyZXZlcnNlIiwibWlncmF0aW9uIiwibWlncmF0aW9uRmlsZSIsImZpbmQiLCJtIiwibmFtZSIsIkVycm9yIiwic3RhcnQiLCJEYXRlIiwibm93IiwiaW5pdFRyYW5zYWN0aW9uIiwiZG93biIsImRlbGV0ZSIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImVxdWFscyIsImVyciIsImtpbGxUcmFuc2FjdGlvbiIsIm1lc3NhZ2UiLCJlcnJvciIsInByb2Nlc3MiLCJleGl0IiwidXAiLCJjcmVhdGUiLCJkYXRhIiwiZXhlY3V0ZWQiLCJjb21taXRUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDs7OzsrQkFhbkNBOzs7ZUFBQUE7OzttQ0FUWTtpQ0FDRjtpQ0FDQTsrQkFDRjtvQ0FDSztBQUs1QixlQUFlQTtJQUNwQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHLElBQUk7SUFDeEIsTUFBTUMsaUJBQWlCLE1BQU1DLElBQUFBLHNDQUFrQixFQUFDO1FBQUVGO0lBQVE7SUFFMUQsTUFBTSxFQUFFRyxrQkFBa0IsRUFBRUMsV0FBVyxFQUFFLEdBQUcsTUFBTUMsSUFBQUEsNEJBQWEsRUFBQztRQUM5REw7SUFDRjtJQUVBLElBQUksQ0FBQ0csb0JBQW9CRyxRQUFRO1FBQy9CTixRQUFRTyxNQUFNLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLO1FBQTZCO1FBQ3hEO0lBQ0Y7SUFFQVQsUUFBUU8sTUFBTSxDQUFDQyxJQUFJLENBQUM7UUFDbEJDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRUwsWUFBWSxlQUFlLEVBQUVELG1CQUFtQkcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUNuRztJQUVBLE1BQU1JLE1BQU07UUFBRVY7SUFBUTtJQUV0QiwwQ0FBMEM7SUFDMUNHLG1CQUFtQlEsT0FBTztJQUUxQixLQUFLLE1BQU1DLGFBQWFULG1CQUFvQjtRQUMxQyxJQUFJO1lBQ0YsTUFBTVUsZ0JBQWdCWixlQUFlYSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsSUFBSSxLQUFLSixVQUFVSSxJQUFJO1lBQzFFLElBQUksQ0FBQ0gsZUFBZTtnQkFDbEIsTUFB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