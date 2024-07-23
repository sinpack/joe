/* eslint-disable no-underscore-dangle */ "use strict";
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
const _errors = require("../../errors");
const _afterRead = require("../../fields/hooks/afterRead");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function findVersionByID(args) {
    const { id, currentDepth, depth, disableErrors, globalConfig, overrideAccess, req: { fallbackLocale, locale, payload, t }, req, showHiddenFields } = args;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, _executeAccess.default)({
            id,
            disableErrors,
            req
        }, globalConfig.access.readVersions) : true;
        // If errors are disabled, and access returns false, return null
        if (accessResults === false) return null;
        const hasWhereAccess = typeof accessResults === 'object';
        const findGlobalVersionsArgs = {
            global: globalConfig.slug,
            limit: 1,
            locale,
            req,
            where: (0, _combineQueries.combineQueries)({
                id: {
                    equals: id
                }
            }, accessResults)
        };
        // /////////////////////////////////////
        // Find by ID
        // /////////////////////////////////////
        if (!findGlobalVersionsArgs.where.and[0].id) throw new _errors.NotFound(t);
        const { docs: results } = await payload.db.findGlobalVersions(findGlobalVersionsArgs);
        if (!results || results?.length === 0) {
            if (!disableErrors) {
                if (!hasWhereAccess) throw new _errors.NotFound(t);
                if (hasWhereAccess) throw new _errors.Forbidden(t);
            }
            return null;
        }
        // Clone the result - it may have come back memoized
        let result = JSON.parse(JSON.stringify(results[0]));
        // Patch globalType onto version doc
        result.version.globalType = globalConfig.slug;
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        await globalConfig.hooks.beforeRead.reduce(async (priorHook, hook)=>{
            await priorHook;
            result = await hook({
                context: req.context,
                doc: result.version,
                global: globalConfig,
                req
            }) || result.version;
        }, Promise.resolve());
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result.version = await (0, _afterRead.afterRead)({
            collection: null,
            context: req.context,
            currentDepth,
            depth,
            doc: result.version,
            draft: undefined,
            fallbackLocale,
            global: globalConfig,
            locale,
            overrideAccess,
            req,
            showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        await globalConfig.hooks.afterRead.reduce(async (priorHook, hook)=>{
            await priorHook;
            result.version = await hook({
                context: req.context,
                doc: result.version,
                global: globalConfig,
                query: findGlobalVersionsArgs.where,
                req
            }) || result.version;
        }, Promise.resolve());
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return result;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(req);
        throw error;
    }
}
const _default = findVersionByID;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZmluZFZlcnNpb25CeUlELnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgdHlwZSB7IEZpbmRHbG9iYWxWZXJzaW9uc0FyZ3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBUeXBlV2l0aFZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2V4ZWN1dGVBY2Nlc3MnXG5pbXBvcnQgeyBjb21iaW5lUXVlcmllcyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL2NvbWJpbmVRdWVyaWVzJ1xuaW1wb3J0IHsgRm9yYmlkZGVuLCBOb3RGb3VuZCB9IGZyb20gJy4uLy4uL2Vycm9ycydcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnXG5pbXBvcnQgeyBjb21taXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21taXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJ1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICBkZXB0aD86IG51bWJlclxuICBkaXNhYmxlRXJyb3JzPzogYm9vbGVhblxuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBpZDogbnVtYmVyIHwgc3RyaW5nXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRWZXJzaW9uQnlJRDxUIGV4dGVuZHMgVHlwZVdpdGhWZXJzaW9uPFQ+ID0gYW55PihhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPFQ+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGN1cnJlbnREZXB0aCxcbiAgICBkZXB0aCxcbiAgICBkaXNhYmxlRXJyb3JzLFxuICAgIGdsb2JhbENvbmZpZyxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICByZXE6IHsgZmFsbGJhY2tMb2NhbGUsIGxvY2FsZSwgcGF5bG9hZCwgdCB9LFxuICAgIHJlcSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICB9ID0gYXJnc1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBhY2Nlc3NSZXN1bHRzID0gIW92ZXJyaWRlQWNjZXNzXG4gICAgICA/IGF3YWl0IGV4ZWN1dGVBY2Nlc3MoeyBpZCwgZGlzYWJsZUVycm9ycywgcmVxIH0sIGdsb2JhbENvbmZpZy5hY2Nlc3MucmVhZFZlcnNpb25zKVxuICAgICAgOiB0cnVlXG5cbiAgICAvLyBJZiBlcnJvcnMgYXJlIGRpc2FibGVkLCBhbmQgYWNjZXNzIHJldHVybnMgZmFsc2UsIHJldHVybiBudWxsXG4gICAgaWYgKGFjY2Vzc1Jlc3VsdHMgPT09IGZhbHNlKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgaGFzV2hlcmVBY2Nlc3MgPSB0eXBlb2YgYWNjZXNzUmVzdWx0cyA9PT0gJ29iamVjdCdcblxuICAgIGNvbnN0IGZpbmRHbG9iYWxWZXJzaW9uc0FyZ3M6IEZpbmRHbG9iYWxWZXJzaW9uc0FyZ3MgPSB7XG4gICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgbGltaXQ6IDEsXG4gICAgICBsb2NhbGUsXG4gICAgICByZXEsXG4gICAgICB3aGVyZTogY29tYmluZVF1ZXJpZXMoeyBpZDogeyBlcXVhbHM6IGlkIH0gfSwgYWNjZXNzUmVzdWx0cyksXG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEZpbmQgYnkgSURcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoIWZpbmRHbG9iYWxWZXJzaW9uc0FyZ3Mud2hlcmUuYW5kWzBdLmlkKSB0aHJvdyBuZXcgTm90Rm91bmQodClcblxuICAgIGNvbnN0IHsgZG9jczogcmVzdWx0cyB9ID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kR2xvYmFsVmVyc2lvbnMoZmluZEdsb2JhbFZlcnNpb25zQXJncylcbiAgICBpZiAoIXJlc3VsdHMgfHwgcmVzdWx0cz8ubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoIWRpc2FibGVFcnJvcnMpIHtcbiAgICAgICAgaWYgKCFoYXNXaGVyZUFjY2VzcykgdGhyb3cgbmV3IE5vdEZvdW5kKHQpXG4gICAgICAgIGlmIChoYXNXaGVyZUFjY2VzcykgdGhyb3cgbmV3IEZvcmJpZGRlbih0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIENsb25lIHRoZSByZXN1bHQgLSBpdCBtYXkgaGF2ZSBjb21lIGJhY2sgbWVtb2l6ZWRcbiAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHRzWzBdKSlcblxuICAgIC8vIFBhdGNoIGdsb2JhbFR5cGUgb250byB2ZXJzaW9uIGRvY1xuICAgIHJlc3VsdC52ZXJzaW9uLmdsb2JhbFR5cGUgPSBnbG9iYWxDb25maWcuc2x1Z1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgZ2xvYmFsQ29uZmlnLmhvb2tzLmJlZm9yZVJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICByZXN1bHQgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgICAgICByZXEsXG4gICAgICAgIH0pKSB8fCByZXN1bHQudmVyc2lvblxuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdC52ZXJzaW9uID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGNvbGxlY3Rpb246IG51bGwsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgIGRlcHRoLFxuICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgIGRyYWZ0OiB1bmRlZmluZWQsXG4gICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLFxuICAgICAgbG9jYWxlLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIH0pXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gR2xvYmFsXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgZ2xvYmFsQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIHJlc3VsdC52ZXJzaW9uID1cbiAgICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIGRvYzogcmVzdWx0LnZlcnNpb24sXG4gICAgICAgICAgZ2xvYmFsOiBnbG9iYWxDb25maWcsXG4gICAgICAgICAgcXVlcnk6IGZpbmRHbG9iYWxWZXJzaW9uc0FyZ3Mud2hlcmUsXG4gICAgICAgICAgcmVxLFxuICAgICAgICB9KSkgfHwgcmVzdWx0LnZlcnNpb25cbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXR1cm4gcmVzdWx0c1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IGNvbW1pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZFZlcnNpb25CeUlEXG4iXSwibmFtZXMiOlsiZmluZFZlcnNpb25CeUlEIiwiYXJncyIsImlkIiwiY3VycmVudERlcHRoIiwiZGVwdGgiLCJkaXNhYmxlRXJyb3JzIiwiZ2xvYmFsQ29uZmlnIiwib3ZlcnJpZGVBY2Nlc3MiLCJyZXEiLCJmYWxsYmFja0xvY2FsZSIsImxvY2FsZSIsInBheWxvYWQiLCJ0Iiwic2hvd0hpZGRlbkZpZWxkcyIsInNob3VsZENvbW1pdCIsImluaXRUcmFuc2FjdGlvbiIsImFjY2Vzc1Jlc3VsdHMiLCJleGVjdXRlQWNjZXNzIiwiYWNjZXNzIiwicmVhZFZlcnNpb25zIiwiaGFzV2hlcmVBY2Nlc3MiLCJmaW5kR2xvYmFsVmVyc2lvbnNBcmdzIiwiZ2xvYmFsIiwic2x1ZyIsImxpbWl0Iiwid2hlcmUiLCJjb21iaW5lUXVlcmllcyIsImVxdWFscyIsImFuZCIsIk5vdEZvdW5kIiwiZG9jcyIsInJlc3VsdHMiLCJkYiIsImZpbmRHbG9iYWxWZXJzaW9ucyIsImxlbmd0aCIsIkZvcmJpZGRlbiIsInJlc3VsdCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInZlcnNpb24iLCJnbG9iYWxUeXBlIiwiaG9va3MiLCJiZWZvcmVSZWFkIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsImNvbnRleHQiLCJkb2MiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFmdGVyUmVhZCIsImNvbGxlY3Rpb24iLCJkcmFmdCIsInVuZGVmaW5lZCIsInF1ZXJ5IiwiY29tbWl0VHJhbnNhY3Rpb24iLCJlcnJvciIsImtpbGxUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDOzs7OytCQXFKdkM7OztlQUFBOzs7c0VBL0kwQjtnQ0FDSzt3QkFDSzsyQkFDVjttQ0FDUTtpQ0FD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