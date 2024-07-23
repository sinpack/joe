/* eslint-disable no-restricted-syntax, no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrate", {
    enumerable: true,
    get: function() {
        return migrate;
    }
});
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _getMigrations = require("./getMigrations");
const _readMigrationFiles = require("./readMigrationFiles");
async function migrate() {
    const { payload } = this;
    const migrationFiles = await (0, _readMigrationFiles.readMigrationFiles)({
        payload
    });
    const { existingMigrations, latestBatch } = await (0, _getMigrations.getMigrations)({
        payload
    });
    const newBatch = latestBatch + 1;
    // Execute 'up' function for each migration sequentially
    for (const migration of migrationFiles){
        const existingMigration = existingMigrations.find((existing)=>existing.name === migration.name);
        // Run migration if not found in database
        if (existingMigration) {
            continue; // eslint-disable-line no-continue
        }
        const start = Date.now();
        const req = {
            payload
        };
        payload.logger.info({
            msg: `Migrating: ${migration.name}`
        });
        try {
            await (0, _initTransaction.initTransaction)(req);
            await migration.up({
                payload,
                req
            });
            payload.logger.info({
                msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
            });
            await payload.create({
                collection: 'payload-migrations',
                data: {
                    name: migration.name,
                    batch: newBatch
                },
                req
            });
            await (0, _commitTransaction.commitTransaction)(req);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLWF3YWl0LWluLWxvb3AgKi9cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBCYXNlRGF0YWJhc2VBZGFwdGVyIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBnZXRNaWdyYXRpb25zIH0gZnJvbSAnLi9nZXRNaWdyYXRpb25zJ1xuaW1wb3J0IHsgcmVhZE1pZ3JhdGlvbkZpbGVzIH0gZnJvbSAnLi9yZWFkTWlncmF0aW9uRmlsZXMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWdyYXRlKHRoaXM6IEJhc2VEYXRhYmFzZUFkYXB0ZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBwYXlsb2FkIH0gPSB0aGlzXG4gIGNvbnN0IG1pZ3JhdGlvbkZpbGVzID0gYXdhaXQgcmVhZE1pZ3JhdGlvbkZpbGVzKHsgcGF5bG9hZCB9KVxuICBjb25zdCB7IGV4aXN0aW5nTWlncmF0aW9ucywgbGF0ZXN0QmF0Y2ggfSA9IGF3YWl0IGdldE1pZ3JhdGlvbnMoeyBwYXlsb2FkIH0pXG5cbiAgY29uc3QgbmV3QmF0Y2ggPSBsYXRlc3RCYXRjaCArIDFcblxuICAvLyBFeGVjdXRlICd1cCcgZnVuY3Rpb24gZm9yIGVhY2ggbWlncmF0aW9uIHNlcXVlbnRpYWxseVxuICBmb3IgKGNvbnN0IG1pZ3JhdGlvbiBvZiBtaWdyYXRpb25GaWxlcykge1xuICAgIGNvbnN0IGV4aXN0aW5nTWlncmF0aW9uID0gZXhpc3RpbmdNaWdyYXRpb25zLmZpbmQoXG4gICAgICAoZXhpc3RpbmcpID0+IGV4aXN0aW5nLm5hbWUgPT09IG1pZ3JhdGlvbi5uYW1lLFxuICAgIClcblxuICAgIC8vIFJ1biBtaWdyYXRpb24gaWYgbm90IGZvdW5kIGluIGRhdGFiYXNlXG4gICAgaWYgKGV4aXN0aW5nTWlncmF0aW9uKSB7XG4gICAgICBjb250aW51ZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgcmVxID0geyBwYXlsb2FkIH0gYXMgUGF5bG9hZFJlcXVlc3RcblxuICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRpbmc6ICR7bWlncmF0aW9uLm5hbWV9YCB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpXG4gICAgICBhd2FpdCBtaWdyYXRpb24udXAoeyBwYXlsb2FkLCByZXEgfSlcbiAgICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRlZDogICR7bWlncmF0aW9uLm5hbWV9ICgke0RhdGUubm93KCkgLSBzdGFydH1tcylgIH0pXG4gICAgICBhd2FpdCBwYXlsb2FkLmNyZWF0ZSh7XG4gICAgICAgIGNvbGxlY3Rpb246ICdwYXlsb2FkLW1pZ3JhdGlvbnMnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogbWlncmF0aW9uLm5hbWUsXG4gICAgICAgICAgYmF0Y2g6IG5ld0JhdGNoLFxuICAgICAgICB9LFxuICAgICAgICByZXEsXG4gICAgICB9KVxuICAgICAgYXdhaXQgY29tbWl0VHJhbnNhY3Rpb24ocmVxKVxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICAgIHBheWxvYWQubG9nZ2VyLmVycm9yKHsgZXJyLCBtc2c6IGBFcnJvciBydW5uaW5nIG1pZ3JhdGlvbiAke21pZ3JhdGlvbi5uYW1lfWAgfSlcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGUiLCJwYXlsb2FkIiwibWlncmF0aW9uRmlsZXMiLCJyZWFkTWlncmF0aW9uRmlsZXMiLCJleGlzdGluZ01pZ3JhdGlvbnMiLCJsYXRlc3RCYXRjaCIsImdldE1pZ3JhdGlvbnMiLCJuZXdCYXRjaCIsIm1pZ3JhdGlvbiIsImV4aXN0aW5nTWlncmF0aW9uIiwiZmluZCIsImV4aXN0aW5nIiwibmFtZSIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInJlcSIsImxvZ2dlciIsImluZm8iLCJtc2ciLCJpbml0VHJhbnNhY3Rpb24iLCJ1cCIsImNyZWF0ZSIsImNvbGxlY3Rpb24iLCJkYXRhIiwiYmF0Y2giLCJjb21taXRUcmFuc2FjdGlvbiIsImVyciIsImtpbGxUcmFuc2FjdGlvbiIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7Ozs7K0JBVW5DQTs7O2VBQUFBOzs7bUNBTlk7aUNBQ0Y7aUNBQ0E7K0JBQ0Y7b0NBQ0s7QUFFNUIsZUFBZUE7SUFDcEIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxJQUFJO0lBQ3hCLE1BQU1DLGlCQUFpQixNQUFNQyxJQUFBQSxzQ0FBa0IsRUFBQztRQUFFRjtJQUFRO0lBQzFELE1BQU0sRUFBRUcsa0JBQWtCLEVBQUVDLFdBQVcsRUFBRSxHQUFHLE1BQU1DLElBQUFBLDRCQUFhLEVBQUM7UUFBRUw7SUFBUTtJQUUxRSxNQUFNTSxXQUFXRixjQUFjO0lBRS9CLHdEQUF3RDtJQUN4RCxLQUFLLE1BQU1HLGFBQWFOLGVBQWdCO1FBQ3RDLE1BQU1PLG9CQUFvQkwsbUJBQW1CTSxJQUFJLENBQy9DLENBQUNDLFdBQWFBLFNBQVNDLElBQUksS0FBS0osVUFBVUksSUFBSTtRQUdoRCx5Q0FBeUM7UUFDekMsSUFBSUgsbUJBQW1CO1lBQ3JCLFVBQVMsa0NBQWtDO1FBQzdDO1FBRUEsTUFBTUksUUFBUUMsS0FBS0MsR0FBRztRQUN0QixNQUFNQyxNQUFNO1lBQUVmO1FBQVE7UUFFdEJBLFFBQVFnQixNQUFNLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLENBQUMsV0FBVyxFQUFFWCxVQUFVSSxJQUFJLENBQUMsQ0FBQztRQUFDO1FBRTFELElBQUk7WUFDRixNQUFNUSxJQUFBQSxnQ0FBZSxFQUFDSjtZQUN0QixNQUFNUixVQUFVYSxFQUFFLENBQUM7Z0JBQUVwQjtnQkFBU2U7WUFBSTtZQUNsQ2YsUUFBUWdCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLENBQUMsV0FBVyxFQUFFWCxVQUFVSSxJQUFJLENBQUMsRUFBRSxFQUFFRSxLQUFLQyxHQUFHLEtBQUtGLE1BQU0sR0FBRyxDQUFDO1lBQUM7WUFDcEYsTUFBTVosUUFBUXFCLE1BQU0sQ0FBQztnQkFDbkJDLFlBQVk7Z0JBQ1pDLE1BQU07b0JBQ0paLE1BQU1KLFVBQVVJLElBQUk7b0JBQ3BCYSxPQUFPbEI7Z0JBQ1Q7Z0JBQ0FTO1lBQ0Y7WUFDQSxNQUFNVSxJQUFBQSxvQ0FBaUIsRUFBQ1Y7UUFDMUIsRUFBRSxPQUFPVyxLQUFjO1lBQ3JCLE1BQU1DLElBQUFBLGdDQUFlLEVBQUNaO1lBQ3RCZixRQUFRZ0IsTUFBTSxDQUFDWSxLQUFLLENBQUM7Z0JBQUVGO2dCQUFLUixLQUFLLENBQUMsd0JBQXdCLEVBQUVYLFVBQVVJLElBQUksQ0FBQyxDQUFDO1lBQUM7WUFDN0UsTUFBTWU7UUFDUjtJQUNGO0FBQ0YifQ==