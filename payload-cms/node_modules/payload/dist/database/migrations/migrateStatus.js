"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateStatus", {
    enumerable: true,
    get: function() {
        return migrateStatus;
    }
});
const _consoletableprinter = require("console-table-printer");
const _getMigrations = require("./getMigrations");
const _readMigrationFiles = require("./readMigrationFiles");
async function migrateStatus() {
    const { payload } = this;
    const migrationFiles = await (0, _readMigrationFiles.readMigrationFiles)({
        payload
    });
    payload.logger.debug({
        msg: `Found ${migrationFiles.length} migration files.`
    });
    const { existingMigrations } = await (0, _getMigrations.getMigrations)({
        payload
    });
    if (!migrationFiles.length) {
        payload.logger.info({
            msg: 'No migrations found.'
        });
        return;
    }
    // Compare migration files to existing migrations
    const statuses = migrationFiles.map((migration)=>{
        const existingMigration = existingMigrations.find((m)=>m.name === migration.name);
        return {
            Name: migration.name,
            // eslint-disable-next-line perfectionist/sort-objects
            Batch: existingMigration?.batch,
            Ran: existingMigration ? 'Yes' : 'No'
        };
    });
    const p = new _consoletableprinter.Table();
    statuses.forEach((s)=>{
        p.addRow(s, {
            color: s.Ran === 'Yes' ? 'green' : 'red'
        });
    });
    p.printTable();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVTdGF0dXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdjb25zb2xlLXRhYmxlLXByaW50ZXInXG5cbmltcG9ydCB0eXBlIHsgQmFzZURhdGFiYXNlQWRhcHRlciB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRNaWdyYXRpb25zIH0gZnJvbSAnLi9nZXRNaWdyYXRpb25zJ1xuaW1wb3J0IHsgcmVhZE1pZ3JhdGlvbkZpbGVzIH0gZnJvbSAnLi9yZWFkTWlncmF0aW9uRmlsZXMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWdyYXRlU3RhdHVzKHRoaXM6IEJhc2VEYXRhYmFzZUFkYXB0ZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBwYXlsb2FkIH0gPSB0aGlzXG4gIGNvbnN0IG1pZ3JhdGlvbkZpbGVzID0gYXdhaXQgcmVhZE1pZ3JhdGlvbkZpbGVzKHsgcGF5bG9hZCB9KVxuXG4gIHBheWxvYWQubG9nZ2VyLmRlYnVnKHtcbiAgICBtc2c6IGBGb3VuZCAke21pZ3JhdGlvbkZpbGVzLmxlbmd0aH0gbWlncmF0aW9uIGZpbGVzLmAsXG4gIH0pXG5cbiAgY29uc3QgeyBleGlzdGluZ01pZ3JhdGlvbnMgfSA9IGF3YWl0IGdldE1pZ3JhdGlvbnMoeyBwYXlsb2FkIH0pXG5cbiAgaWYgKCFtaWdyYXRpb25GaWxlcy5sZW5ndGgpIHtcbiAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiAnTm8gbWlncmF0aW9ucyBmb3VuZC4nIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBDb21wYXJlIG1pZ3JhdGlvbiBmaWxlcyB0byBleGlzdGluZyBtaWdyYXRpb25zXG4gIGNvbnN0IHN0YXR1c2VzID0gbWlncmF0aW9uRmlsZXMubWFwKChtaWdyYXRpb24pID0+IHtcbiAgICBjb25zdCBleGlzdGluZ01pZ3JhdGlvbiA9IGV4aXN0aW5nTWlncmF0aW9ucy5maW5kKChtKSA9PiBtLm5hbWUgPT09IG1pZ3JhdGlvbi5uYW1lKVxuICAgIHJldHVybiB7XG4gICAgICBOYW1lOiBtaWdyYXRpb24ubmFtZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwZXJmZWN0aW9uaXN0L3NvcnQtb2JqZWN0c1xuICAgICAgQmF0Y2g6IGV4aXN0aW5nTWlncmF0aW9uPy5iYXRjaCxcbiAgICAgIFJhbjogZXhpc3RpbmdNaWdyYXRpb24gPyAnWWVzJyA6ICdObycsXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHAgPSBuZXcgVGFibGUoKVxuXG4gIHN0YXR1c2VzLmZvckVhY2goKHMpID0+IHtcbiAgICBwLmFkZFJvdyhzLCB7XG4gICAgICBjb2xvcjogcy5SYW4gPT09ICdZZXMnID8gJ2dyZWVuJyA6ICdyZWQnLFxuICAgIH0pXG4gIH0pXG4gIHAucHJpbnRUYWJsZSgpXG59XG4iXSwibmFtZXMiOlsibWlncmF0ZVN0YXR1cyIsInBheWxvYWQiLCJtaWdyYXRpb25GaWxlcyIsInJlYWRNaWdyYXRpb25GaWxlcyIsImxvZ2dlciIsImRlYnVnIiwibXNnIiwibGVuZ3RoIiwiZXhpc3RpbmdNaWdyYXRpb25zIiwiZ2V0TWlncmF0aW9ucyIsImluZm8iLCJzdGF0dXNlcyIsIm1hcCIsIm1pZ3JhdGlvbiIsImV4aXN0aW5nTWlncmF0aW9uIiwiZmluZCIsIm0iLCJuYW1lIiwiTmFtZSIsIkJhdGNoIiwiYmF0Y2giLCJSYW4iLCJwIiwiVGFibGUiLCJmb3JFYWNoIiwicyIsImFkZFJvdyIsImNvbG9yIiwicHJpbnRUYWJsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFPc0JBOzs7ZUFBQUE7OztxQ0FQQTsrQkFJUTtvQ0FDSztBQUU1QixlQUFlQTtJQUNwQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHLElBQUk7SUFDeEIsTUFBTUMsaUJBQWlCLE1BQU1DLElBQUFBLHNDQUFrQixFQUFDO1FBQUVGO0lBQVE7SUFFMURBLFFBQVFHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO1FBQ25CQyxLQUFLLENBQUMsTUFBTSxFQUFFSixlQUFlSyxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDeEQ7SUFFQSxNQUFNLEVBQUVDLGtCQUFrQixFQUFFLEdBQUcsTUFBTUMsSUFBQUEsNEJBQWEsRUFBQztRQUFFUjtJQUFRO0lBRTdELElBQUksQ0FBQ0MsZUFBZUssTUFBTSxFQUFFO1FBQzFCTixRQUFRRyxNQUFNLENBQUNNLElBQUksQ0FBQztZQUFFSixLQUFLO1FBQXVCO1FBQ2xEO0lBQ0Y7SUFFQSxpREFBaUQ7SUFDakQsTUFBTUssV0FBV1QsZUFBZVUsR0FBRyxDQUFDLENBQUNDO1FBQ25DLE1BQU1DLG9CQUFvQk4sbUJBQW1CTyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsSUFBSSxLQUFLSixVQUFVSSxJQUFJO1FBQ2xGLE9BQU87WUFDTEMsTUFBTUwsVUFBVUksSUFBSTtZQUNwQixzREFBc0Q7WUFDdERFLE9BQU9MLG1CQUFtQk07WUFDMUJDLEtBQUtQLG9CQUFvQixRQUFRO1FBQ25DO0lBQ0Y7SUFFQSxNQUFNUSxJQUFJLElBQUlDLDBCQUFLO0lBRW5CWixTQUFTYSxPQUFPLENBQUMsQ0FBQ0M7UUFDaEJILEVBQUVJLE1BQU0sQ0FBQ0QsR0FBRztZQUNWRSxPQUFPRixFQUFFSixHQUFHLEtBQUssUUFBUSxVQUFVO1FBQ3JDO0lBQ0Y7SUFDQUMsRUFBRU0sVUFBVTtBQUNkIn0=