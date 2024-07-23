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
const _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
const _combineQueries = require("../../database/combineQueries");
const _validateQueryPaths = require("../../database/queryValidation/validateQueryPaths");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _utils = require("./utils");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function count(incomingArgs) {
    let args = incomingArgs;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(args.req);
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        await args.collection.config.hooks.beforeOperation.reduce(async (priorHook, hook)=>{
            await priorHook;
            args = await hook({
                args,
                collection: args.collection.config,
                context: args.req.context,
                operation: 'count',
                req: args.req
            }) || args;
        }, Promise.resolve());
        const { collection: { config: collectionConfig }, disableErrors, overrideAccess, req: { payload }, req, where } = args;
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, _executeAccess.default)({
                disableErrors,
                req
            }, collectionConfig.access.read);
            // If errors are disabled, and access returns false, return empty results
            if (accessResult === false) {
                return {
                    totalDocs: 0
                };
            }
        }
        let result;
        const fullWhere = (0, _combineQueries.combineQueries)(where, accessResult);
        await (0, _validateQueryPaths.validateQueryPaths)({
            collectionConfig,
            overrideAccess,
            req,
            where
        });
        result = await payload.db.count({
            collection: collectionConfig.slug,
            req,
            where: fullWhere
        });
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, _utils.buildAfterOperation)({
            args,
            collection: collectionConfig,
            operation: 'count',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return result;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(args.req);
        throw error;
    }
}
const _default = count;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2NvdW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQWNjZXNzUmVzdWx0IH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCwgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcy9pbmRleCdcbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiwgVHlwZVdpdGhJRCB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJ1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcydcbmltcG9ydCB7IHZhbGlkYXRlUXVlcnlQYXRocyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3F1ZXJ5VmFsaWRhdGlvbi92YWxpZGF0ZVF1ZXJ5UGF0aHMnXG5pbXBvcnQgeyBjb21taXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21taXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCB0eXBlIEFyZ3VtZW50cyA9IHtcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvblxuICBkaXNhYmxlRXJyb3JzPzogYm9vbGVhblxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgcmVxPzogUGF5bG9hZFJlcXVlc3RcbiAgd2hlcmU/OiBXaGVyZVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3VudDxUIGV4dGVuZHMgVHlwZVdpdGhJRCAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihcbiAgaW5jb21pbmdBcmdzOiBBcmd1bWVudHMsXG4pOiBQcm9taXNlPHsgdG90YWxEb2NzOiBudW1iZXIgfT4ge1xuICBsZXQgYXJncyA9IGluY29taW5nQXJnc1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKGFyZ3MucmVxKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZU9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIGFyZ3MgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgYXJncyxcbiAgICAgICAgICBjb2xsZWN0aW9uOiBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLFxuICAgICAgICAgIGNvbnRleHQ6IGFyZ3MucmVxLmNvbnRleHQsXG4gICAgICAgICAgb3BlcmF0aW9uOiAnY291bnQnLFxuICAgICAgICAgIHJlcTogYXJncy5yZXEsXG4gICAgICAgIH0pKSB8fCBhcmdzXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICBjb25zdCB7XG4gICAgICBjb2xsZWN0aW9uOiB7IGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyB9LFxuICAgICAgZGlzYWJsZUVycm9ycyxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxOiB7IHBheWxvYWQgfSxcbiAgICAgIHJlcSxcbiAgICAgIHdoZXJlLFxuICAgIH0gPSBhcmdzXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQWNjZXNzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgbGV0IGFjY2Vzc1Jlc3VsdDogQWNjZXNzUmVzdWx0XG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgICBhY2Nlc3NSZXN1bHQgPSBhd2FpdCBleGVjdXRlQWNjZXNzKHsgZGlzYWJsZUVycm9ycywgcmVxIH0sIGNvbGxlY3Rpb25Db25maWcuYWNjZXNzLnJlYWQpXG5cbiAgICAgIC8vIElmIGVycm9ycyBhcmUgZGlzYWJsZWQsIGFuZCBhY2Nlc3MgcmV0dXJucyBmYWxzZSwgcmV0dXJuIGVtcHR5IHJlc3VsdHNcbiAgICAgIGlmIChhY2Nlc3NSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWxEb2NzOiAwLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdDogeyB0b3RhbERvY3M6IG51bWJlciB9XG5cbiAgICBjb25zdCBmdWxsV2hlcmUgPSBjb21iaW5lUXVlcmllcyh3aGVyZSwgYWNjZXNzUmVzdWx0KVxuXG4gICAgYXdhaXQgdmFsaWRhdGVRdWVyeVBhdGhzKHtcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHJlcSxcbiAgICAgIHdoZXJlLFxuICAgIH0pXG5cbiAgICByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmRiLmNvdW50KHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHJlcSxcbiAgICAgIHdoZXJlOiBmdWxsV2hlcmUsXG4gICAgfSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlck9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBidWlsZEFmdGVyT3BlcmF0aW9uPFQ+KHtcbiAgICAgIGFyZ3MsXG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAnY291bnQnLFxuICAgICAgcmVzdWx0LFxuICAgIH0pXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKGFyZ3MucmVxKVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY291bnRcbiJdLCJuYW1lcyI6WyJjb3VudCIsImluY29taW5nQXJncyIsImFyZ3MiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJyZXEiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwiY29udGV4dCIsIm9wZXJhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29sbGVjdGlvbkNvbmZpZyIsImRpc2FibGVFcnJvcnMiLCJvdmVycmlkZUFjY2VzcyIsInBheWxvYWQiLCJ3aGVyZSIsImFjY2Vzc1Jlc3VsdCIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJyZWFkIiwidG90YWxEb2NzIiwicmVzdWx0IiwiZnVsbFdoZXJlIiwiY29tYmluZVF1ZXJpZXMiLCJ2YWxpZGF0ZVF1ZXJ5UGF0aHMiLCJkYiIsInNsdWciLCJidWlsZEFmdGVyT3BlcmF0aW9uIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJlcnJvciIsImtpbGxUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWdIQTs7O2VBQUE7OztzRUE1RzBCO2dDQUNLO29DQUNJO21DQUNEO2lDQUNGO2lDQUNBO3VCQUNJOzs7Ozs7QUFVcEMsZUFBZUEsTUFDYkMsWUFBdUI7SUFFdkIsSUFBSUMsT0FBT0Q7SUFFWCxJQUFJO1FBQ0YsTUFBTUUsZUFBZSxNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDRixLQUFLRyxHQUFHO1FBRW5ELHdDQUF3QztRQUN4QywrQkFBK0I7UUFDL0Isd0NBQXdDO1FBRXhDLE1BQU1ILEtBQUtJLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUNDLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDLE9BQU9DLFdBQVdDO1lBQzFFLE1BQU1EO1lBRU5ULE9BQ0UsQUFBQyxNQUFNVSxLQUFLO2dCQUNWVjtnQkFDQUksWUFBWUosS0FBS0ksVUFBVSxDQUFDQyxNQUFNO2dCQUNsQ00sU0FBU1gsS0FBS0csR0FBRyxDQUFDUSxPQUFPO2dCQUN6QkMsV0FBVztnQkFDWFQsS0FBS0gsS0FBS0csR0FBRztZQUNmLE1BQU9IO1FBQ1gsR0FBR2EsUUFBUUMsT0FBTztRQUVsQixNQUFNLEVBQ0pWLFlBQVksRUFBRUMsUUFBUVUsZ0JBQWdCLEVBQUUsRUFDeENDLGFBQWEsRUFDYkMsY0FBYyxFQUNkZCxLQUFLLEVBQUVlLE9BQU8sRUFBRSxFQUNoQmYsR0FBRyxFQUNIZ0IsS0FBSyxFQUNOLEdBQUduQjtRQUVKLHdDQUF3QztRQUN4QyxTQUFTO1FBQ1Qsd0NBQXdDO1FBRXhDLElBQUlvQjtRQUVKLElBQUksQ0FBQ0gsZ0JBQWdCO1lBQ25CRyxlQUFlLE1BQU1DLElBQUFBLHNCQUFhLEVBQUM7Z0JBQUVMO2dCQUFlYjtZQUFJLEdBQUdZLGlCQUFpQk8sTUFBTSxDQUFDQyxJQUFJO1lBRXZGLHlFQUF5RTtZQUN6RSxJQUFJSCxpQkFBaUIsT0FBTztnQkFDMUIsT0FBTztvQkFDTEksV0FBVztnQkFDYjtZQUNGO1FBQ0Y7UUFFQSxJQUFJQztRQUVKLE1BQU1DLFlBQVlDLElBQUFBLDhCQUFjLEVBQUNSLE9BQU9DO1FBRXhDLE1BQU1RLElBQUFBLHNDQUFrQixFQUFDO1lBQ3ZCYjtZQUNBRTtZQUNBZDtZQUNBZ0I7UUFDRjtRQUVBTSxTQUFTLE1BQU1QLFFBQVFXLEVBQUUsQ0FBQy9CLEtBQUssQ0FBQztZQUM5Qk0sWUFBWVcsaUJBQWlCZSxJQUFJO1lBQ2pDM0I7WUFDQWdCLE9BQU9PO1FBQ1Q7UUFFQSx3Q0FBd0M7UUFDeEMsOEJBQThCO1FBQzlCLHdDQUF3QztRQUV4Q0QsU0FBUyxNQUFNTSxJQUFBQSwwQkFBbUIsRUFBSTtZQUNwQy9CO1lBQ0FJLFlBQVlXO1lBQ1pILFdBQVc7WUFDWGE7UUFDRjtRQUVBLHdDQUF3QztRQUN4QyxpQkFBaUI7UUFDakIsd0NBQXdDO1FBRXhDLElBQUl4QixjQUFjLE1BQU0rQixJQUFBQSxvQ0FBaUIsRUFBQzdCO1FBRTFDLE9BQU9zQjtJQUNULEVBQUUsT0FBT1EsT0FBZ0I7UUFDdkIsTUFBTUMsSUFBQUEsZ0NBQWUsRUFBQ2xDLEtBQUtHLEdBQUc7UUFDOUIsTUFBTThCO0lBQ1I7QUFDRjtNQUVBLFdBQWVuQyJ9