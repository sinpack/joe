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
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
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
    const { id, collection: { config: collectionConfig }, currentDepth, depth, disableErrors, overrideAccess, req: { fallbackLocale, locale, payload, t }, req, showHiddenFields } = args;
    if (!id) {
        throw new _errors.APIError('Missing ID of version.', _httpstatus.default.BAD_REQUEST);
    }
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, _executeAccess.default)({
            id,
            disableErrors,
            req
        }, collectionConfig.access.readVersions) : true;
        // If errors are disabled, and access returns false, return null
        if (accessResults === false) return null;
        const hasWhereAccess = typeof accessResults === 'object';
        const fullWhere = (0, _combineQueries.combineQueries)({
            id: {
                equals: id
            }
        }, accessResults);
        // /////////////////////////////////////
        // Find by ID
        // /////////////////////////////////////
        const versionsQuery = await payload.db.findVersions({
            collection: collectionConfig.slug,
            limit: 1,
            locale,
            pagination: false,
            req,
            where: fullWhere
        });
        const result = versionsQuery.docs[0];
        if (!result) {
            if (!disableErrors) {
                if (!hasWhereAccess) throw new _errors.NotFound(t);
                if (hasWhereAccess) throw new _errors.Forbidden(t);
            }
            return null;
        }
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        await collectionConfig.hooks.beforeRead.reduce(async (priorHook, hook)=>{
            await priorHook;
            result.version = await hook({
                collection: collectionConfig,
                context: req.context,
                doc: result.version,
                query: fullWhere,
                req
            }) || result.version;
        }, Promise.resolve());
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result.version = await (0, _afterRead.afterRead)({
            collection: collectionConfig,
            context: req.context,
            currentDepth,
            depth,
            doc: result.version,
            draft: undefined,
            fallbackLocale,
            global: null,
            locale,
            overrideAccess,
            req,
            showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        await collectionConfig.hooks.afterRead.reduce(async (priorHook, hook)=>{
            await priorHook;
            result.version = await hook({
                collection: collectionConfig,
                context: req.context,
                doc: result.version,
                query: fullWhere,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2ZpbmRWZXJzaW9uQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBUeXBlV2l0aFZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy90eXBlcydcbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiwgVHlwZVdpdGhJRCB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJ1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcydcbmltcG9ydCB7IEFQSUVycm9yLCBGb3JiaWRkZW4sIE5vdEZvdW5kIH0gZnJvbSAnLi4vLi4vZXJyb3JzJ1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCdcbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nXG5cbmV4cG9ydCB0eXBlIEFyZ3VtZW50cyA9IHtcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvblxuICBjdXJyZW50RGVwdGg/OiBudW1iZXJcbiAgZGVwdGg/OiBudW1iZXJcbiAgZGlzYWJsZUVycm9ycz86IGJvb2xlYW5cbiAgaWQ6IG51bWJlciB8IHN0cmluZ1xuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxufVxuXG5hc3luYyBmdW5jdGlvbiBmaW5kVmVyc2lvbkJ5SUQ8VCBleHRlbmRzIFR5cGVXaXRoSUQgPSBhbnk+KFxuICBhcmdzOiBBcmd1bWVudHMsXG4pOiBQcm9taXNlPFR5cGVXaXRoVmVyc2lvbjxUPj4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgY29sbGVjdGlvbjogeyBjb25maWc6IGNvbGxlY3Rpb25Db25maWcgfSxcbiAgICBjdXJyZW50RGVwdGgsXG4gICAgZGVwdGgsXG4gICAgZGlzYWJsZUVycm9ycyxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICByZXE6IHsgZmFsbGJhY2tMb2NhbGUsIGxvY2FsZSwgcGF5bG9hZCwgdCB9LFxuICAgIHJlcSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICB9ID0gYXJnc1xuXG4gIGlmICghaWQpIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoJ01pc3NpbmcgSUQgb2YgdmVyc2lvbi4nLCBodHRwU3RhdHVzLkJBRF9SRVFVRVNUKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3NcbiAgICAgID8gYXdhaXQgZXhlY3V0ZUFjY2Vzcyh7IGlkLCBkaXNhYmxlRXJyb3JzLCByZXEgfSwgY29sbGVjdGlvbkNvbmZpZy5hY2Nlc3MucmVhZFZlcnNpb25zKVxuICAgICAgOiB0cnVlXG5cbiAgICAvLyBJZiBlcnJvcnMgYXJlIGRpc2FibGVkLCBhbmQgYWNjZXNzIHJldHVybnMgZmFsc2UsIHJldHVybiBudWxsXG4gICAgaWYgKGFjY2Vzc1Jlc3VsdHMgPT09IGZhbHNlKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgaGFzV2hlcmVBY2Nlc3MgPSB0eXBlb2YgYWNjZXNzUmVzdWx0cyA9PT0gJ29iamVjdCdcblxuICAgIGNvbnN0IGZ1bGxXaGVyZSA9IGNvbWJpbmVRdWVyaWVzKHsgaWQ6IHsgZXF1YWxzOiBpZCB9IH0sIGFjY2Vzc1Jlc3VsdHMpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRmluZCBieSBJRFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHZlcnNpb25zUXVlcnkgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRWZXJzaW9uczxUPih7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICBsaW1pdDogMSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgcmVxLFxuICAgICAgd2hlcmU6IGZ1bGxXaGVyZSxcbiAgICB9KVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdmVyc2lvbnNRdWVyeS5kb2NzWzBdXG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgaWYgKCFkaXNhYmxlRXJyb3JzKSB7XG4gICAgICAgIGlmICghaGFzV2hlcmVBY2Nlc3MpIHRocm93IG5ldyBOb3RGb3VuZCh0KVxuICAgICAgICBpZiAoaGFzV2hlcmVBY2Nlc3MpIHRocm93IG5ldyBGb3JiaWRkZW4odClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlUmVhZCAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmJlZm9yZVJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICByZXN1bHQudmVyc2lvbiA9XG4gICAgICAgIChhd2FpdCBob29rKHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIGRvYzogcmVzdWx0LnZlcnNpb24sXG4gICAgICAgICAgcXVlcnk6IGZ1bGxXaGVyZSxcbiAgICAgICAgICByZXEsXG4gICAgICAgIH0pKSB8fCByZXN1bHQudmVyc2lvblxuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdC52ZXJzaW9uID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgIGRlcHRoLFxuICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgIGRyYWZ0OiB1bmRlZmluZWQsXG4gICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgIGdsb2JhbDogbnVsbCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICB9KVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIHJlc3VsdC52ZXJzaW9uID1cbiAgICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgICAgICBxdWVyeTogZnVsbFdoZXJlLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSkpIHx8IHJlc3VsdC52ZXJzaW9uXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRWZXJzaW9uQnlJRFxuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9uQnlJRCIsImFyZ3MiLCJpZCIsImNvbGxlY3Rpb24iLCJjb25maWciLCJjb2xsZWN0aW9uQ29uZmlnIiwiY3VycmVudERlcHRoIiwiZGVwdGgiLCJkaXNhYmxlRXJyb3JzIiwib3ZlcnJpZGVBY2Nlc3MiLCJyZXEiLCJmYWxsYmFja0xvY2FsZSIsImxvY2FsZSIsInBheWxvYWQiLCJ0Iiwic2hvd0hpZGRlbkZpZWxkcyIsIkFQSUVycm9yIiwiaHR0cFN0YXR1cyIsIkJBRF9SRVFVRVNUIiwic2hvdWxkQ29tbWl0IiwiaW5pdFRyYW5zYWN0aW9uIiwiYWNjZXNzUmVzdWx0cyIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJyZWFkVmVyc2lvbnMiLCJoYXNXaGVyZUFjY2VzcyIsImZ1bGxXaGVyZSIsImNvbWJpbmVRdWVyaWVzIiwiZXF1YWxzIiwidmVyc2lvbnNRdWVyeSIsImRiIiwiZmluZFZlcnNpb25zIiwic2x1ZyIsImxpbWl0IiwicGFnaW5hdGlvbiIsIndoZXJlIiwicmVzdWx0IiwiZG9jcyIsIk5vdEZvdW5kIiwiRm9yYmlkZGVuIiwiaG9va3MiLCJiZWZvcmVSZWFkIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsInZlcnNpb24iLCJjb250ZXh0IiwiZG9jIiwicXVlcnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFmdGVyUmVhZCIsImRyYWZ0IiwidW5kZWZpbmVkIiwiZ2xvYmFsIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJlcnJvciIsImtpbGxUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7Ozs7K0JBeUp2Qzs7O2VBQUE7OzttRUF4SnVCO3NFQU1HO2dDQUNLO3dCQUNlOzJCQUNwQjttQ0FDUTtpQ0FDRjtpQ0FDQTs7Ozs7O0FBYWhDLGVBQWVBLGdCQUNiQyxJQUFlO0lBRWYsTUFBTSxFQUNKQyxFQUFFLEVBQ0ZDLFlBQVksRUFBRUMsUUFBUUMsZ0JBQWdCLEVBQUUsRUFDeENDLFlBQVksRUFDWkMsS0FBSyxF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