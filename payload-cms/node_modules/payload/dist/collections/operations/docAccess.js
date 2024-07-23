"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "docAccess", {
    enumerable: true,
    get: function() {
        return docAccess;
    }
});
const _commitTransaction = require("../../utilities/commitTransaction");
const _getEntityPolicies = require("../../utilities/getEntityPolicies");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const allOperations = [
    'create',
    'read',
    'update',
    'delete'
];
async function docAccess(args) {
    const { id, req, req: { collection: { config } } } = args;
    const collectionOperations = [
        ...allOperations
    ];
    if (config.auth && typeof config.auth.maxLoginAttempts !== 'undefined' && config.auth.maxLoginAttempts !== 0) {
        collectionOperations.push('unlock');
    }
    if (config.versions) {
        collectionOperations.push('readVersions');
    }
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        const result = await (0, _getEntityPolicies.getEntityPolicies)({
            id,
            entity: config,
            operations: collectionOperations,
            req,
            type: 'collection'
        });
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return result;
    } catch (e) {
        await (0, _killTransaction.killTransaction)(req);
        throw e;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2RvY0FjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbGxlY3Rpb25QZXJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vYXV0aCdcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBBbGxPcGVyYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgZ2V0RW50aXR5UG9saWNpZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0RW50aXR5UG9saWNpZXMnXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcblxuY29uc3QgYWxsT3BlcmF0aW9uczogQWxsT3BlcmF0aW9uc1tdID0gWydjcmVhdGUnLCAncmVhZCcsICd1cGRhdGUnLCAnZGVsZXRlJ11cblxudHlwZSBBcmd1bWVudHMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9jQWNjZXNzKGFyZ3M6IEFyZ3VtZW50cyk6IFByb21pc2U8Q29sbGVjdGlvblBlcm1pc3Npb24+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIGNvbGxlY3Rpb246IHsgY29uZmlnIH0sXG4gICAgfSxcbiAgfSA9IGFyZ3NcblxuICBjb25zdCBjb2xsZWN0aW9uT3BlcmF0aW9ucyA9IFsuLi5hbGxPcGVyYXRpb25zXVxuXG4gIGlmIChcbiAgICBjb25maWcuYXV0aCAmJlxuICAgIHR5cGVvZiBjb25maWcuYXV0aC5tYXhMb2dpbkF0dGVtcHRzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGNvbmZpZy5hdXRoLm1heExvZ2luQXR0ZW1wdHMgIT09IDBcbiAgKSB7XG4gICAgY29sbGVjdGlvbk9wZXJhdGlvbnMucHVzaCgndW5sb2NrJylcbiAgfVxuXG4gIGlmIChjb25maWcudmVyc2lvbnMpIHtcbiAgICBjb2xsZWN0aW9uT3BlcmF0aW9ucy5wdXNoKCdyZWFkVmVyc2lvbnMnKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0RW50aXR5UG9saWNpZXMoe1xuICAgICAgaWQsXG4gICAgICBlbnRpdHk6IGNvbmZpZyxcbiAgICAgIG9wZXJhdGlvbnM6IGNvbGxlY3Rpb25PcGVyYXRpb25zLFxuICAgICAgcmVxLFxuICAgICAgdHlwZTogJ2NvbGxlY3Rpb24nLFxuICAgIH0pXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKVxuICAgIHRocm93IGVcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRvY0FjY2VzcyIsImFsbE9wZXJhdGlvbnMiLCJhcmdzIiwiaWQiLCJyZXEiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiY29sbGVjdGlvbk9wZXJhdGlvbnMiLCJhdXRoIiwibWF4TG9naW5BdHRlbXB0cyIsInB1c2giLCJ2ZXJzaW9ucyIsInNob3VsZENvbW1pdCIsImluaXRUcmFuc2FjdGlvbiIsInJlc3VsdCIsImdldEVudGl0eVBvbGljaWVzIiwiZW50aXR5Iiwib3BlcmF0aW9ucyIsInR5cGUiLCJjb21taXRUcmFuc2FjdGlvbiIsImUiLCJraWxsVHJhbnNhY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQnNCQTs7O2VBQUFBOzs7bUNBWlk7bUNBQ0E7aUNBQ0Y7aUNBQ0E7QUFFaEMsTUFBTUMsZ0JBQWlDO0lBQUM7SUFBVTtJQUFRO0lBQVU7Q0FBUztBQU90RSxlQUFlRCxVQUFVRSxJQUFlO0lBQzdDLE1BQU0sRUFDSkMsRUFBRSxFQUNGQyxHQUFHLEVBQ0hBLEtBQUssRUFDSEMsWUFBWSxFQUFFQyxNQUFNLEVBQUUsRUFDdkIsRUFDRixHQUFHSjtJQUVKLE1BQU1LLHVCQUF1QjtXQUFJTjtLQUFjO0lBRS9DLElBQ0VLLE9BQU9FLElBQUksSUFDWCxPQUFPRixPQUFPRSxJQUFJLENBQUNDLGdCQUFnQixLQUFLLGVBQ3hDSCxPQUFPRSxJQUFJLENBQUNDLGdCQUFnQixLQUFLLEdBQ2pDO1FBQ0FGLHFCQUFxQkcsSUFBSSxDQUFDO0lBQzVCO0lBRUEsSUFBSUosT0FBT0ssUUFBUSxFQUFFO1FBQ25CSixxQkFBcUJHLElBQUksQ0FBQztJQUM1QjtJQUVBLElBQUk7UUFDRixNQUFNRSxlQUFlLE1BQU1DLElBQUFBLGdDQUFlLEVBQUNUO1FBRTNDLE1BQU1VLFNBQVMsTUFBTUMsSUFBQUEsb0NBQWlCLEVBQUM7WUFDckNaO1lBQ0FhLFFBQVFWO1lBQ1JXLFlBQVlWO1lBQ1pIO1lBQ0FjLE1BQU07UUFDUjtRQUVBLElBQUlOLGNBQWMsTUFBTU8sSUFBQUEsb0NBQWlCLEVBQUNmO1FBRTFDLE9BQU9VO0lBQ1QsRUFBRSxPQUFPTSxHQUFZO1FBQ25CLE1BQU1DLElBQUFBLGdDQUFlLEVBQUNqQjtRQUN0QixNQUFNZ0I7SUFDUjtBQUNGIn0=