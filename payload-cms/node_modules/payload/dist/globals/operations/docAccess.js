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
async function docAccess(args) {
    const { globalConfig, req } = args;
    const globalOperations = [
        'read',
        'update'
    ];
    if (globalConfig.versions) {
        globalOperations.push('readVersions');
    }
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        const result = await (0, _getEntityPolicies.getEntityPolicies)({
            entity: globalConfig,
            operations: globalOperations,
            req,
            type: 'global'
        });
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return result;
    } catch (e) {
        await (0, _killTransaction.killTransaction)(req);
        throw e;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZG9jQWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgR2xvYmFsUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uL2F1dGgnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgQWxsT3BlcmF0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgZ2V0RW50aXR5UG9saWNpZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0RW50aXR5UG9saWNpZXMnXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcblxudHlwZSBBcmd1bWVudHMgPSB7XG4gIGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIHJlcTogUGF5bG9hZFJlcXVlc3Rcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvY0FjY2VzcyhhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPEdsb2JhbFBlcm1pc3Npb24+IHtcbiAgY29uc3QgeyBnbG9iYWxDb25maWcsIHJlcSB9ID0gYXJnc1xuXG4gIGNvbnN0IGdsb2JhbE9wZXJhdGlvbnM6IEFsbE9wZXJhdGlvbnNbXSA9IFsncmVhZCcsICd1cGRhdGUnXVxuXG4gIGlmIChnbG9iYWxDb25maWcudmVyc2lvbnMpIHtcbiAgICBnbG9iYWxPcGVyYXRpb25zLnB1c2goJ3JlYWRWZXJzaW9ucycpXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0RW50aXR5UG9saWNpZXMoe1xuICAgICAgZW50aXR5OiBnbG9iYWxDb25maWcsXG4gICAgICBvcGVyYXRpb25zOiBnbG9iYWxPcGVyYXRpb25zLFxuICAgICAgcmVxLFxuICAgICAgdHlwZTogJ2dsb2JhbCcsXG4gICAgfSlcbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICB0aHJvdyBlXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkb2NBY2Nlc3MiLCJhcmdzIiwiZ2xvYmFsQ29uZmlnIiwicmVxIiwiZ2xvYmFsT3BlcmF0aW9ucyIsInZlcnNpb25zIiwicHVzaCIsInNob3VsZENvbW1pdCIsImluaXRUcmFuc2FjdGlvbiIsInJlc3VsdCIsImdldEVudGl0eVBvbGljaWVzIiwiZW50aXR5Iiwib3BlcmF0aW9ucyIsInR5cGUiLCJjb21taXRUcmFuc2FjdGlvbiIsImUiLCJraWxsVHJhbnNhY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFlc0JBOzs7ZUFBQUE7OzttQ0FWWTttQ0FDQTtpQ0FDRjtpQ0FDQTtBQU96QixlQUFlQSxVQUFVQyxJQUFlO0lBQzdDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQUUsR0FBR0Y7SUFFOUIsTUFBTUcsbUJBQW9DO1FBQUM7UUFBUTtLQUFTO0lBRTVELElBQUlGLGFBQWFHLFFBQVEsRUFBRTtRQUN6QkQsaUJBQWlCRSxJQUFJLENBQUM7SUFDeEI7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsZUFBZSxNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDTDtRQUMzQyxNQUFNTSxTQUFTLE1BQU1DLElBQUFBLG9DQUFpQixFQUFDO1lBQ3JDQyxRQUFRVDtZQUNSVSxZQUFZUjtZQUNaRDtZQUNBVSxNQUFNO1FBQ1I7UUFDQSxJQUFJTixjQUFjLE1BQU1PLElBQUFBLG9DQUFpQixFQUFDWDtRQUMxQyxPQUFPTTtJQUNULEVBQUUsT0FBT00sR0FBWTtRQUNuQixNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDYjtRQUN0QixNQUFNWTtJQUNSO0FBQ0YifQ==