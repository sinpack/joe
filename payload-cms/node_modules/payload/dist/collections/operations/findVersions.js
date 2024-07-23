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
const _afterRead = require("../../fields/hooks/afterRead");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/sanitizeInternalFields"));
const _buildCollectionFields = require("../../versions/buildCollectionFields");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function findVersions(args) {
    const { collection: { config: collectionConfig }, depth, limit, overrideAccess, page, pagination = true, req: { fallbackLocale, locale, payload }, req, showHiddenFields, sort, where } = args;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResults;
        if (!overrideAccess) {
            accessResults = await (0, _executeAccess.default)({
                req
            }, collectionConfig.access.readVersions);
        }
        const versionFields = (0, _buildCollectionFields.buildVersionCollectionFields)(collectionConfig);
        await (0, _validateQueryPaths.validateQueryPaths)({
            collectionConfig,
            overrideAccess,
            req,
            versionFields,
            where
        });
        const fullWhere = (0, _combineQueries.combineQueries)(where, accessResults);
        // /////////////////////////////////////
        // Find
        // /////////////////////////////////////
        const paginatedDocs = await payload.db.findVersions({
            collection: collectionConfig.slug,
            limit: limit ?? 10,
            locale,
            page: page || 1,
            pagination,
            req,
            sort,
            where: fullWhere
        });
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        let result = {
            ...paginatedDocs,
            docs: await Promise.all(paginatedDocs.docs.map(async (doc)=>{
                const docRef = doc;
                await collectionConfig.hooks.beforeRead.reduce(async (priorHook, hook)=>{
                    await priorHook;
                    docRef.version = await hook({
                        collection: collectionConfig,
                        context: req.context,
                        doc: docRef.version,
                        query: fullWhere,
                        req
                    }) || docRef.version;
                }, Promise.resolve());
                return docRef;
            }))
        };
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = {
            ...result,
            docs: await Promise.all(result.docs.map(async (data)=>({
                    ...data,
                    version: await (0, _afterRead.afterRead)({
                        collection: collectionConfig,
                        context: req.context,
                        depth,
                        doc: data.version,
                        draft: undefined,
                        fallbackLocale,
                        findMany: true,
                        global: null,
                        locale,
                        overrideAccess,
                        req,
                        showHiddenFields
                    })
                })))
        };
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        result = {
            ...result,
            docs: await Promise.all(result.docs.map(async (doc)=>{
                const docRef = doc;
                await collectionConfig.hooks.afterRead.reduce(async (priorHook, hook)=>{
                    await priorHook;
                    docRef.version = await hook({
                        collection: collectionConfig,
                        context: req.context,
                        doc: doc.version,
                        findMany: true,
                        query: fullWhere,
                        req
                    }) || doc.version;
                }, Promise.resolve());
                return docRef;
            }))
        };
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        result = {
            ...result,
            docs: result.docs.map((doc)=>(0, _sanitizeInternalFields.default)(doc))
        };
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return result;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(req);
        throw error;
    }
}
const _default = findVersions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2ZpbmRWZXJzaW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBUeXBlV2l0aFZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy90eXBlcydcbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJ1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcydcbmltcG9ydCB7IHZhbGlkYXRlUXVlcnlQYXRocyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3F1ZXJ5VmFsaWRhdGlvbi92YWxpZGF0ZVF1ZXJ5UGF0aHMnXG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJ1xuaW1wb3J0IHsgY29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbWl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcbmltcG9ydCBzYW5pdGl6ZUludGVybmFsRmllbGRzIGZyb20gJy4uLy4uL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJ1xuaW1wb3J0IHsgYnVpbGRWZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL2J1aWxkQ29sbGVjdGlvbkZpZWxkcydcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIGRlcHRoPzogbnVtYmVyXG4gIGxpbWl0PzogbnVtYmVyXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBwYWdlPzogbnVtYmVyXG4gIHBhZ2luYXRpb24/OiBib29sZWFuXG4gIHJlcT86IFBheWxvYWRSZXF1ZXN0XG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIHNvcnQ/OiBzdHJpbmdcbiAgd2hlcmU/OiBXaGVyZVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaW5kVmVyc2lvbnM8VCBleHRlbmRzIFR5cGVXaXRoVmVyc2lvbjxUPj4oXG4gIGFyZ3M6IEFyZ3VtZW50cyxcbik6IFByb21pc2U8UGFnaW5hdGVkRG9jczxUPj4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjogeyBjb25maWc6IGNvbGxlY3Rpb25Db25maWcgfSxcbiAgICBkZXB0aCxcbiAgICBsaW1pdCxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBwYWdlLFxuICAgIHBhZ2luYXRpb24gPSB0cnVlLFxuICAgIHJlcTogeyBmYWxsYmFja0xvY2FsZSwgbG9jYWxlLCBwYXlsb2FkIH0sXG4gICAgcmVxLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgc29ydCxcbiAgICB3aGVyZSxcbiAgfSA9IGFyZ3NcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQWNjZXNzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgbGV0IGFjY2Vzc1Jlc3VsdHNcblxuICAgIGlmICghb3ZlcnJpZGVBY2Nlc3MpIHtcbiAgICAgIGFjY2Vzc1Jlc3VsdHMgPSBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGNvbGxlY3Rpb25Db25maWcuYWNjZXNzLnJlYWRWZXJzaW9ucylcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJzaW9uRmllbGRzID0gYnVpbGRWZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyhjb2xsZWN0aW9uQ29uZmlnKVxuXG4gICAgYXdhaXQgdmFsaWRhdGVRdWVyeVBhdGhzKHtcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHJlcSxcbiAgICAgIHZlcnNpb25GaWVsZHMsXG4gICAgICB3aGVyZSxcbiAgICB9KVxuXG4gICAgY29uc3QgZnVsbFdoZXJlID0gY29tYmluZVF1ZXJpZXMod2hlcmUsIGFjY2Vzc1Jlc3VsdHMpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRmluZFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHBhZ2luYXRlZERvY3MgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRWZXJzaW9uczxUPih7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICBsaW1pdDogbGltaXQgPz8gMTAsXG4gICAgICBsb2NhbGUsXG4gICAgICBwYWdlOiBwYWdlIHx8IDEsXG4gICAgICBwYWdpbmF0aW9uLFxuICAgICAgcmVxLFxuICAgICAgc29ydCxcbiAgICAgIHdoZXJlOiBmdWxsV2hlcmUsXG4gICAgfSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAuLi5wYWdpbmF0ZWREb2NzLFxuICAgICAgZG9jczogYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHBhZ2luYXRlZERvY3MuZG9jcy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvY1xuICAgICAgICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgICAgICAgIGRvY1JlZi52ZXJzaW9uID1cbiAgICAgICAgICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgZG9jOiBkb2NSZWYudmVyc2lvbixcbiAgICAgICAgICAgICAgICBxdWVyeTogZnVsbFdoZXJlLFxuICAgICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgfSkpIHx8IGRvY1JlZi52ZXJzaW9uXG4gICAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAgICAgICByZXR1cm4gZG9jUmVmXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICB9IGFzIFBhZ2luYXRlZERvY3M8VD5cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkb2NzOiBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgcmVzdWx0LmRvY3MubWFwKGFzeW5jIChkYXRhKSA9PiAoe1xuICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgdmVyc2lvbjogYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgZG9jOiBkYXRhLnZlcnNpb24sXG4gICAgICAgICAgICBkcmFmdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGUsXG4gICAgICAgICAgICBmaW5kTWFueTogdHJ1ZSxcbiAgICAgICAgICAgIGdsb2JhbDogbnVsbCxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSkpLFxuICAgICAgKSxcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRvY3M6IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICByZXN1bHQuZG9jcy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvY1xuXG4gICAgICAgICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICAgICAgICBkb2NSZWYudmVyc2lvbiA9XG4gICAgICAgICAgICAgIChhd2FpdCBob29rKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgICAgICAgIGRvYzogZG9jLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgZmluZE1hbnk6IHRydWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IGZ1bGxXaGVyZSxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgIH0pKSB8fCBkb2MudmVyc2lvblxuICAgICAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuXG4gICAgICAgICAgcmV0dXJuIGRvY1JlZlxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZG9jczogcmVzdWx0LmRvY3MubWFwKChkb2MpID0+IHNhbml0aXplSW50ZXJuYWxGaWVsZHM8VD4oZG9jKSksXG4gICAgfVxuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgY29tbWl0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kVmVyc2lvbnNcbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbnMiLCJhcmdzIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsImNvbGxlY3Rpb25Db25maWciLCJkZXB0aCIsImxpbWl0Iiwib3ZlcnJpZGVBY2Nlc3MiLCJwYWdlIiwicGFnaW5hdGlvbiIsInJlcSIsImZhbGxiYWNrTG9jYWxlIiwibG9jYWxlIiwicGF5bG9hZCIsInNob3dIaWRkZW5GaWVsZHMiLCJzb3J0Iiwid2hlcmUiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJhY2Nlc3NSZXN1bHRzIiwiZXhlY3V0ZUFjY2VzcyIsImFjY2VzcyIsInJlYWRWZXJzaW9ucyIsInZlcnNpb25GaWVsZHMiLCJidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwidmFsaWRhdGVRdWVyeVBhdGhzIiwiZnVsbFdoZXJlIiwiY29tYmluZVF1ZXJpZXMiLCJwYWdpbmF0ZWREb2NzIiwiZGIiLCJzbHVnIiwicmVzdWx0IiwiZG9jcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJkb2MiLCJkb2NSZWYiLCJob29rcyIsImJlZm9yZVJlYWQiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwidmVyc2lvbiIsImNvbnRleHQiLCJxdWVyeSIsInJlc29sdmUiLCJkYXRhIiwiYWZ0ZXJSZWFkIiwiZHJhZnQiLCJ1bmRlZmluZWQiLCJmaW5kTWFueSIsImdsb2JhbCIsInNhbml0aXplSW50ZXJuYWxGaWVsZHMiLCJjb21taXRUcmFuc2FjdGlvbiIsImVycm9yIiwia2lsbFRyYW5zYWN0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTJMQTs7O2VBQUE7OztzRUFyTDBCO2dDQUNLO29DQUNJOzJCQUNUO21DQUNRO2lDQUNGO2lDQUNBOytFQUNHO3VDQUNVOzs7Ozs7QUFlN0MsZUFBZUEsYUFDYkMsSUFBZTtJQUVmLE1BQU0sRUFDSkMsWUFBWSxFQUFFQyxRQUFRQyxnQkFBZ0IsRUFBRSxFQUN4Q0MsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLGNBQWMsRUFDZEMsSUFB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