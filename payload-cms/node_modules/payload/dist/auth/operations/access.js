"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _commitTransaction = require("../../utilities/commitTransaction");
const _getEntityPolicies = require("../../utilities/getEntityPolicies");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _adminInit = require("../../utilities/telemetry/events/adminInit");
const allOperations = [
    'create',
    'read',
    'update',
    'delete'
];
async function accessOperation(args) {
    const { req, req: { payload: { config }, user } } = args;
    (0, _adminInit.adminInit)(req);
    const results = {};
    const isLoggedIn = !!user;
    const userCollectionConfig = user && user.collection ? config.collections.find((collection)=>collection.slug === user.collection) : null;
    if (userCollectionConfig) {
        results.canAccessAdmin = userCollectionConfig.access.admin ? await userCollectionConfig.access.admin(args) : isLoggedIn;
    } else {
        results.canAccessAdmin = false;
    }
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        await Promise.all(config.collections.map(async (collection)=>{
            const collectionOperations = [
                ...allOperations
            ];
            if (collection.auth && typeof collection.auth.maxLoginAttempts !== 'undefined' && collection.auth.maxLoginAttempts !== 0) {
                collectionOperations.push('unlock');
            }
            if (collection.versions) {
                collectionOperations.push('readVersions');
            }
            const collectionPolicy = await (0, _getEntityPolicies.getEntityPolicies)({
                entity: collection,
                operations: collectionOperations,
                req,
                type: 'collection'
            });
            results.collections = {
                ...results.collections,
                [collection.slug]: collectionPolicy
            };
        }));
        await Promise.all(config.globals.map(async (global)=>{
            const globalOperations = [
                'read',
                'update'
            ];
            if (global.versions) {
                globalOperations.push('readVersions');
            }
            const globalPolicy = await (0, _getEntityPolicies.getEntityPolicies)({
                entity: global,
                operations: globalOperations,
                req,
                type: 'global'
            });
            results.globals = {
                ...results.globals,
                [global.slug]: globalPolicy
            };
        }));
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return results;
    } catch (e) {
        await (0, _killTransaction.killTransaction)(req);
        throw e;
    }
}
const _default = accessOperation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvYWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBBbGxPcGVyYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25zIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgZ2V0RW50aXR5UG9saWNpZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0RW50aXR5UG9saWNpZXMnXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcbmltcG9ydCB7IGFkbWluSW5pdCBhcyBhZG1pbkluaXRUZWxlbWV0cnkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvdGVsZW1ldHJ5L2V2ZW50cy9hZG1pbkluaXQnXG5cbmNvbnN0IGFsbE9wZXJhdGlvbnM6IEFsbE9wZXJhdGlvbnNbXSA9IFsnY3JlYXRlJywgJ3JlYWQnLCAndXBkYXRlJywgJ2RlbGV0ZSddXG5cbnR5cGUgQXJndW1lbnRzID0ge1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFjY2Vzc09wZXJhdGlvbihhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPFBlcm1pc3Npb25zPiB7XG4gIGNvbnN0IHtcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICBwYXlsb2FkOiB7IGNvbmZpZyB9LFxuICAgICAgdXNlcixcbiAgICB9LFxuICB9ID0gYXJnc1xuXG4gIGFkbWluSW5pdFRlbGVtZXRyeShyZXEpXG5cbiAgY29uc3QgcmVzdWx0cyA9IHt9IGFzIFBlcm1pc3Npb25zXG5cbiAgY29uc3QgaXNMb2dnZWRJbiA9ICEhdXNlclxuICBjb25zdCB1c2VyQ29sbGVjdGlvbkNvbmZpZyA9XG4gICAgdXNlciAmJiB1c2VyLmNvbGxlY3Rpb25cbiAgICAgID8gY29uZmlnLmNvbGxlY3Rpb25zLmZpbmQoKGNvbGxlY3Rpb24pID0+IGNvbGxlY3Rpb24uc2x1ZyA9PT0gdXNlci5jb2xsZWN0aW9uKVxuICAgICAgOiBudWxsXG5cbiAgaWYgKHVzZXJDb2xsZWN0aW9uQ29uZmlnKSB7XG4gICAgcmVzdWx0cy5jYW5BY2Nlc3NBZG1pbiA9IHVzZXJDb2xsZWN0aW9uQ29uZmlnLmFjY2Vzcy5hZG1pblxuICAgICAgPyBhd2FpdCB1c2VyQ29sbGVjdGlvbkNvbmZpZy5hY2Nlc3MuYWRtaW4oYXJncylcbiAgICAgIDogaXNMb2dnZWRJblxuICB9IGVsc2Uge1xuICAgIHJlc3VsdHMuY2FuQWNjZXNzQWRtaW4gPSBmYWxzZVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgY29uZmlnLmNvbGxlY3Rpb25zLm1hcChhc3luYyAoY29sbGVjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uT3BlcmF0aW9ucyA9IFsuLi5hbGxPcGVyYXRpb25zXVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb2xsZWN0aW9uLmF1dGggJiZcbiAgICAgICAgICB0eXBlb2YgY29sbGVjdGlvbi5hdXRoLm1heExvZ2luQXR0ZW1wdHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgY29sbGVjdGlvbi5hdXRoLm1heExvZ2luQXR0ZW1wdHMgIT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29sbGVjdGlvbk9wZXJhdGlvbnMucHVzaCgndW5sb2NrJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2xsZWN0aW9uLnZlcnNpb25zKSB7XG4gICAgICAgICAgY29sbGVjdGlvbk9wZXJhdGlvbnMucHVzaCgncmVhZFZlcnNpb25zJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25Qb2xpY3kgPSBhd2FpdCBnZXRFbnRpdHlQb2xpY2llcyh7XG4gICAgICAgICAgZW50aXR5OiBjb2xsZWN0aW9uLFxuICAgICAgICAgIG9wZXJhdGlvbnM6IGNvbGxlY3Rpb25PcGVyYXRpb25zLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICB0eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgIH0pXG4gICAgICAgIHJlc3VsdHMuY29sbGVjdGlvbnMgPSB7XG4gICAgICAgICAgLi4ucmVzdWx0cy5jb2xsZWN0aW9ucyxcbiAgICAgICAgICBbY29sbGVjdGlvbi5zbHVnXTogY29sbGVjdGlvblBvbGljeSxcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBjb25maWcuZ2xvYmFscy5tYXAoYXN5bmMgKGdsb2JhbCkgPT4ge1xuICAgICAgICBjb25zdCBnbG9iYWxPcGVyYXRpb25zOiBBbGxPcGVyYXRpb25zW10gPSBbJ3JlYWQnLCAndXBkYXRlJ11cblxuICAgICAgICBpZiAoZ2xvYmFsLnZlcnNpb25zKSB7XG4gICAgICAgICAgZ2xvYmFsT3BlcmF0aW9ucy5wdXNoKCdyZWFkVmVyc2lvbnMnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2xvYmFsUG9saWN5ID0gYXdhaXQgZ2V0RW50aXR5UG9saWNpZXMoe1xuICAgICAgICAgIGVudGl0eTogZ2xvYmFsLFxuICAgICAgICAgIG9wZXJhdGlvbnM6IGdsb2JhbE9wZXJhdGlvbnMsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHR5cGU6ICdnbG9iYWwnLFxuICAgICAgICB9KVxuICAgICAgICByZXN1bHRzLmdsb2JhbHMgPSB7XG4gICAgICAgICAgLi4ucmVzdWx0cy5nbG9iYWxzLFxuICAgICAgICAgIFtnbG9iYWwuc2x1Z106IGdsb2JhbFBvbGljeSxcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKVxuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgY29tbWl0VHJhbnNhY3Rpb24ocmVxKVxuICAgIHJldHVybiByZXN1bHRzXG4gIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKVxuICAgIHRocm93IGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY2Nlc3NPcGVyYXRpb25cbiJdLCJuYW1lcyI6WyJhbGxPcGVyYXRpb25zIiwiYWNjZXNzT3BlcmF0aW9uIiwiYXJncyIsInJlcSIsInBheWxvYWQiLCJjb25maWciLCJ1c2VyIiwiYWRtaW5Jbml0VGVsZW1ldHJ5IiwicmVzdWx0cyIsImlzTG9nZ2VkSW4iLCJ1c2VyQ29sbGVjdGlvbkNvbmZpZyIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9ucyIsImZpbmQiLCJzbHVnIiwiY2FuQWNjZXNzQWRtaW4iLCJhY2Nlc3MiLCJhZG1pbiIsInNob3VsZENvbW1pdCIsImluaXRUcmFuc2FjdGlvbiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjb2xsZWN0aW9uT3BlcmF0aW9ucyIsImF1dGgiLCJtYXhMb2dpbkF0dGVtcHRzIiwicHVzaCIsInZlcnNpb25zIiwiY29sbGVjdGlvblBvbGljeSIsImdldEVudGl0eVBvbGljaWVzIiwiZW50aXR5Iiwib3BlcmF0aW9ucyIsInR5cGUiLCJnbG9iYWxzIiwiZ2xvYmFsIiwiZ2xvYmFsT3BlcmF0aW9ucyIsImdsb2JhbFBvbGljeSIsImNvbW1pdFRyYW5zYWN0aW9uIiwiZSIsImtpbGxUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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