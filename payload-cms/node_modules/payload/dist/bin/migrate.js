"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrate", {
    enumerable: true,
    get: function() {
        return migrate;
    }
});
const _minimist = /*#__PURE__*/ _interop_require_default(require("minimist"));
const _ = /*#__PURE__*/ _interop_require_default(require(".."));
const _logger = require("../utilities/logger");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * The default logger's options did not allow for forcing sync logging
 * Using these options, to force both pretty print and sync logging
 */ const prettySyncLogger = {
    loggerDestination: _logger.prettySyncLoggerDestination,
    loggerOptions: {}
};
const availableCommands = [
    'migrate',
    'migrate:create',
    'migrate:down',
    'migrate:refresh',
    'migrate:reset',
    'migrate:status',
    'migration:fresh'
];
const availableCommandsMsg = `Available commands: ${availableCommands.join(', ')}`;
const migrate = async (parsedArgs)=>{
    const { _: args, file, forceAcceptWarning, help } = parsedArgs;
    if (help) {
        // eslint-disable-next-line no-console
        console.log(`\n\n${availableCommandsMsg}\n`) // Avoid having to init payload to get the logger
        ;
        process.exit(0);
    }
    process.env.PAYLOAD_MIGRATING = 'true';
    // Barebones instance to access database adapter
    await _.default.init({
        disableOnInit: true,
        local: true,
        secret: process.env.PAYLOAD_SECRET || '--unused--',
        ...prettySyncLogger
    });
    const adapter = _.default.db;
    if (!adapter) {
        throw new Error('No database adapter found');
    }
    if (!args.length) {
        _.default.logger.error({
            msg: `No migration command provided. ${availableCommandsMsg}`
        });
        process.exit(1);
    }
    switch(args[0]){
        case 'migrate':
            await adapter.migrate();
            break;
        case 'migrate:status':
            await adapter.migrateStatus();
            break;
        case 'migrate:down':
            await adapter.migrateDown();
            break;
        case 'migrate:refresh':
            await adapter.migrateRefresh();
            break;
        case 'migrate:reset':
            await adapter.migrateReset();
            break;
        case 'migrate:fresh':
            await adapter.migrateFresh({
                forceAcceptWarning
            });
            break;
        case 'migrate:create':
            try {
                await adapter.createMigration({
                    file,
                    forceAcceptWarning,
                    migrationName: args[1],
                    payload: _.default
                });
            } catch (err) {
                throw new Error(`Error creating migration: ${err.message}`);
            }
            break;
        default:
            _.default.logger.error({
                msg: `Unknown migration command: ${args[0]}. ${availableCommandsMsg}`
            });
            process.exit(1);
    }
    _.default.logger.info('Done.');
};
// When launched directly call migrate
if (module.id === require.main.id) {
    const args = (0, _minimist.default)(process.argv.slice(2));
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    migrate(args).then(()=>{
        process.exit(0);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vbWlncmF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBhcnNlZEFyZ3MgfSBmcm9tICdtaW5pbWlzdCdcblxuaW1wb3J0IG1pbmltaXN0IGZyb20gJ21pbmltaXN0J1xuXG5pbXBvcnQgcGF5bG9hZCBmcm9tICcuLidcbmltcG9ydCB7IHByZXR0eVN5bmNMb2dnZXJEZXN0aW5hdGlvbiB9IGZyb20gJy4uL3V0aWxpdGllcy9sb2dnZXInXG5cbi8qKlxuICogVGhlIGRlZmF1bHQgbG9nZ2VyJ3Mgb3B0aW9ucyBkaWQgbm90IGFsbG93IGZvciBmb3JjaW5nIHN5bmMgbG9nZ2luZ1xuICogVXNpbmcgdGhlc2Ugb3B0aW9ucywgdG8gZm9yY2UgYm90aCBwcmV0dHkgcHJpbnQgYW5kIHN5bmMgbG9nZ2luZ1xuICovXG5jb25zdCBwcmV0dHlTeW5jTG9nZ2VyID0ge1xuICBsb2dnZXJEZXN0aW5hdGlvbjogcHJldHR5U3luY0xvZ2dlckRlc3RpbmF0aW9uLFxuICBsb2dnZXJPcHRpb25zOiB7fSxcbn1cblxuY29uc3QgYXZhaWxhYmxlQ29tbWFuZHMgPSBbXG4gICdtaWdyYXRlJyxcbiAgJ21pZ3JhdGU6Y3JlYXRlJyxcbiAgJ21pZ3JhdGU6ZG93bicsXG4gICdtaWdyYXRlOnJlZnJlc2gnLFxuICAnbWlncmF0ZTpyZXNldCcsXG4gICdtaWdyYXRlOnN0YXR1cycsXG4gICdtaWdyYXRpb246ZnJlc2gnLFxuXVxuXG5jb25zdCBhdmFpbGFibGVDb21tYW5kc01zZyA9IGBBdmFpbGFibGUgY29tbWFuZHM6ICR7YXZhaWxhYmxlQ29tbWFuZHMuam9pbignLCAnKX1gXG5cbmV4cG9ydCBjb25zdCBtaWdyYXRlID0gYXN5bmMgKHBhcnNlZEFyZ3M6IFBhcnNlZEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgeyBfOiBhcmdzLCBmaWxlLCBmb3JjZUFjY2VwdFdhcm5pbmcsIGhlbHAgfSA9IHBhcnNlZEFyZ3NcbiAgaWYgKGhlbHApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKGBcXG5cXG4ke2F2YWlsYWJsZUNvbW1hbmRzTXNnfVxcbmApIC8vIEF2b2lkIGhhdmluZyB0byBpbml0IHBheWxvYWQgdG8gZ2V0IHRoZSBsb2dnZXJcbiAgICBwcm9jZXNzLmV4aXQoMClcbiAgfVxuXG4gIHByb2Nlc3MuZW52LlBBWUxPQURfTUlHUkFUSU5HID0gJ3RydWUnXG5cbiAgLy8gQmFyZWJvbmVzIGluc3RhbmNlIHRvIGFjY2VzcyBkYXRhYmFzZSBhZGFwdGVyXG4gIGF3YWl0IHBheWxvYWQuaW5pdCh7XG4gICAgZGlzYWJsZU9uSW5pdDogdHJ1ZSxcbiAgICBsb2NhbDogdHJ1ZSxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlBBWUxPQURfU0VDUkVUIHx8ICctLXVudXNlZC0tJyxcbiAgICAuLi5wcmV0dHlTeW5jTG9nZ2VyLFxuICB9KVxuXG4gIGNvbnN0IGFkYXB0ZXIgPSBwYXlsb2FkLmRiXG5cbiAgaWYgKCFhZGFwdGVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBkYXRhYmFzZSBhZGFwdGVyIGZvdW5kJylcbiAgfVxuXG4gIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICBwYXlsb2FkLmxvZ2dlci5lcnJvcih7XG4gICAgICBtc2c6IGBObyBtaWdyYXRpb24gY29tbWFuZCBwcm92aWRlZC4gJHthdmFpbGFibGVDb21tYW5kc01zZ31gLFxuICAgIH0pXG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICBzd2l0Y2ggKGFyZ3NbMF0pIHtcbiAgICBjYXNlICdtaWdyYXRlJzpcbiAgICAgIGF3YWl0IGFkYXB0ZXIubWlncmF0ZSgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ21pZ3JhdGU6c3RhdHVzJzpcbiAgICAgIGF3YWl0IGFkYXB0ZXIubWlncmF0ZVN0YXR1cygpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ21pZ3JhdGU6ZG93bic6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVEb3duKClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbWlncmF0ZTpyZWZyZXNoJzpcbiAgICAgIGF3YWl0IGFkYXB0ZXIubWlncmF0ZVJlZnJlc2goKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdtaWdyYXRlOnJlc2V0JzpcbiAgICAgIGF3YWl0IGFkYXB0ZXIubWlncmF0ZVJlc2V0KClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbWlncmF0ZTpmcmVzaCc6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVGcmVzaCh7IGZvcmNlQWNjZXB0V2FybmluZyB9KVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdtaWdyYXRlOmNyZWF0ZSc6XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBhZGFwdGVyLmNyZWF0ZU1pZ3JhdGlvbih7XG4gICAgICAgICAgZmlsZSxcbiAgICAgICAgICBmb3JjZUFjY2VwdFdhcm5pbmcsXG4gICAgICAgICAgbWlncmF0aW9uTmFtZTogYXJnc1sxXSxcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgY3JlYXRpbmcgbWlncmF0aW9uOiAke2Vyci5tZXNzYWdlfWApXG4gICAgICB9XG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHBheWxvYWQubG9nZ2VyLmVycm9yKHtcbiAgICAgICAgbXNnOiBgVW5rbm93biBtaWdyYXRpb24gY29tbWFuZDogJHthcmdzWzBdfS4gJHthdmFpbGFibGVDb21tYW5kc01zZ31gLFxuICAgICAgfSlcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9XG5cbiAgcGF5bG9hZC5sb2dnZXIuaW5mbygnRG9uZS4nKVxufVxuXG4vLyBXaGVuIGxhdW5jaGVkIGRpcmVjdGx5IGNhbGwgbWlncmF0ZVxuaWYgKG1vZHVsZS5pZCA9PT0gcmVxdWlyZS5tYWluLmlkKSB7XG4gIGNvbnN0IGFyZ3MgPSBtaW5pbWlzdChwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgbWlncmF0ZShhcmdzKS50aGVuKCgpID0+IHtcbiAgICBwcm9jZXNzLmV4aXQoMClcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJtaWdyYXRlIiwicHJldHR5U3luY0xvZ2dlciIsImxvZ2dlckRlc3RpbmF0aW9uIiwicHJldHR5U3luY0xvZ2dlckRlc3RpbmF0aW9uIiwibG9nZ2VyT3B0aW9ucyIsImF2YWlsYWJsZUNvbW1hbmRzIiwiYXZhaWxhYmxlQ29tbWFuZHNNc2ciLCJqb2luIiwicGFyc2VkQXJncyIsIl8iLCJhcmdzIiwiZmlsZSIsImZvcmNlQWNjZXB0V2FybmluZyIsImhlbHAiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImV4aXQiLCJlbnYiLCJQQVlMT0FEX01JR1JBVElORyIsInBheWxvYWQiLCJpbml0IiwiZGlzYWJsZU9uSW5pdCIsImxvY2FsIiwic2VjcmV0IiwiUEFZTE9BRF9TRUNSRVQiLCJhZGFwdGVyIiwiZGIiLCJFcnJvciIsImxlbmd0aCIsImxvZ2dlciIsImVycm9yIiwibXNnIiwibWlncmF0ZVN0YXR1cyIsIm1pZ3JhdGVEb3duIiwibWlncmF0ZVJlZnJlc2giLCJtaWdyYXRlUmVzZXQiLCJtaWdyYXRlRnJlc2giLCJjcmVhdGVNaWdyYXRpb24iLCJtaWdyYXRpb25OYW1lIiwiZXJyIiwibWVzc2FnZSIsImluZm8iLCJtb2R1bGUiLCJpZCIsInJlcXVpcmUiLCJtYWluIiwibWluaW1pc3QiLCJhcmd2Iiwic2xpY2UiLCJ0aGVuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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