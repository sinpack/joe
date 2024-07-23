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
const _buildGlobalFields = require("../../versions/buildGlobalFields");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function findVersions(args) {
    const { depth, globalConfig, limit, overrideAccess, page, req: { fallbackLocale, locale, payload }, req, showHiddenFields, sort, where } = args;
    const versionFields = (0, _buildGlobalFields.buildVersionGlobalFields)(globalConfig);
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, _executeAccess.default)({
            req
        }, globalConfig.access.readVersions) : true;
        await (0, _validateQueryPaths.validateQueryPaths)({
            globalConfig,
            overrideAccess,
            req,
            versionFields,
            where
        });
        const fullWhere = (0, _combineQueries.combineQueries)(where, accessResults);
        // /////////////////////////////////////
        // Find
        // /////////////////////////////////////
        const paginatedDocs = await payload.db.findGlobalVersions({
            global: globalConfig.slug,
            limit: limit ?? 10,
            locale,
            page: page || 1,
            req,
            sort,
            where: fullWhere
        });
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        let result = {
            ...paginatedDocs,
            docs: await Promise.all(paginatedDocs.docs.map(async (data)=>({
                    ...data,
                    version: await (0, _afterRead.afterRead)({
                        collection: null,
                        context: req.context,
                        depth,
                        doc: {
                            ...data.version,
                            // Patch globalType onto version doc
                            globalType: globalConfig.slug
                        },
                        draft: undefined,
                        fallbackLocale,
                        findMany: true,
                        global: globalConfig,
                        locale,
                        overrideAccess,
                        req,
                        showHiddenFields
                    })
                })))
        };
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        result = {
            ...result,
            docs: await Promise.all(result.docs.map(async (doc)=>{
                const docRef = doc;
                await globalConfig.hooks.afterRead.reduce(async (priorHook, hook)=>{
                    await priorHook;
                    docRef.version = await hook({
                        context: req.context,
                        doc: doc.version,
                        findMany: true,
                        global: globalConfig,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZmluZFZlcnNpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGFnaW5hdGVkRG9jcyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFR5cGVXaXRoVmVyc2lvbiB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2VzcydcbmltcG9ydCB7IGNvbWJpbmVRdWVyaWVzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvY29tYmluZVF1ZXJpZXMnXG5pbXBvcnQgeyB2YWxpZGF0ZVF1ZXJ5UGF0aHMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9xdWVyeVZhbGlkYXRpb24vdmFsaWRhdGVRdWVyeVBhdGhzJ1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCdcbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nXG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuLi8uLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcydcbmltcG9ydCB7IGJ1aWxkVmVyc2lvbkdsb2JhbEZpZWxkcyB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL2J1aWxkR2xvYmFsRmllbGRzJ1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGRlcHRoPzogbnVtYmVyXG4gIGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIGxpbWl0PzogbnVtYmVyXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBwYWdlPzogbnVtYmVyXG4gIHJlcT86IFBheWxvYWRSZXF1ZXN0XG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIHNvcnQ/OiBzdHJpbmdcbiAgd2hlcmU/OiBXaGVyZVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaW5kVmVyc2lvbnM8VCBleHRlbmRzIFR5cGVXaXRoVmVyc2lvbjxUPj4oXG4gIGFyZ3M6IEFyZ3VtZW50cyxcbik6IFByb21pc2U8UGFnaW5hdGVkRG9jczxUPj4ge1xuICBjb25zdCB7XG4gICAgZGVwdGgsXG4gICAgZ2xvYmFsQ29uZmlnLFxuICAgIGxpbWl0LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHBhZ2UsXG4gICAgcmVxOiB7IGZhbGxiYWNrTG9jYWxlLCBsb2NhbGUsIHBheWxvYWQgfSxcbiAgICByZXEsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBzb3J0LFxuICAgIHdoZXJlLFxuICB9ID0gYXJnc1xuXG4gIGNvbnN0IHZlcnNpb25GaWVsZHMgPSBidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMoZ2xvYmFsQ29uZmlnKVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBhY2Nlc3NSZXN1bHRzID0gIW92ZXJyaWRlQWNjZXNzXG4gICAgICA/IGF3YWl0IGV4ZWN1dGVBY2Nlc3MoeyByZXEgfSwgZ2xvYmFsQ29uZmlnLmFjY2Vzcy5yZWFkVmVyc2lvbnMpXG4gICAgICA6IHRydWVcblxuICAgIGF3YWl0IHZhbGlkYXRlUXVlcnlQYXRocyh7XG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHJlcSxcbiAgICAgIHZlcnNpb25GaWVsZHMsXG4gICAgICB3aGVyZSxcbiAgICB9KVxuXG4gICAgY29uc3QgZnVsbFdoZXJlID0gY29tYmluZVF1ZXJpZXMod2hlcmUsIGFjY2Vzc1Jlc3VsdHMpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRmluZFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHBhZ2luYXRlZERvY3MgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRHbG9iYWxWZXJzaW9uczxUPih7XG4gICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgbGltaXQ6IGxpbWl0ID8/IDEwLFxuICAgICAgbG9jYWxlLFxuICAgICAgcGFnZTogcGFnZSB8fCAxLFxuICAgICAgcmVxLFxuICAgICAgc29ydCxcbiAgICAgIHdoZXJlOiBmdWxsV2hlcmUsXG4gICAgfSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgLi4ucGFnaW5hdGVkRG9jcyxcbiAgICAgIGRvY3M6IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBwYWdpbmF0ZWREb2NzLmRvY3MubWFwKGFzeW5jIChkYXRhKSA9PiAoe1xuICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgdmVyc2lvbjogYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IG51bGwsXG4gICAgICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgZG9jOiB7XG4gICAgICAgICAgICAgIC4uLmRhdGEudmVyc2lvbixcbiAgICAgICAgICAgICAgLy8gUGF0Y2ggZ2xvYmFsVHlwZSBvbnRvIHZlcnNpb24gZG9jXG4gICAgICAgICAgICAgIGdsb2JhbFR5cGU6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyYWZ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgICAgICAgIGZpbmRNYW55OiB0cnVlLFxuICAgICAgICAgICAgZ2xvYmFsOiBnbG9iYWxDb25maWcsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pKSxcbiAgICAgICksXG4gICAgfSBhcyBQYWdpbmF0ZWREb2NzPFQ+XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gR2xvYmFsXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZG9jczogYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHJlc3VsdC5kb2NzLm1hcChhc3luYyAoZG9jKSA9PiB7XG4gICAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jXG5cbiAgICAgICAgICBhd2FpdCBnbG9iYWxDb25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBwcmlvckhvb2tcblxuICAgICAgICAgICAgZG9jUmVmLnZlcnNpb24gPVxuICAgICAgICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgZG9jOiBkb2MudmVyc2lvbixcbiAgICAgICAgICAgICAgICBmaW5kTWFueTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgICAgICAgICAgICBxdWVyeTogZnVsbFdoZXJlLFxuICAgICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgfSkpIHx8IGRvYy52ZXJzaW9uXG4gICAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAgICAgICByZXR1cm4gZG9jUmVmXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkb2NzOiByZXN1bHQuZG9jcy5tYXAoKGRvYykgPT4gc2FuaXRpemVJbnRlcm5hbEZpZWxkczxUPihkb2MpKSxcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRWZXJzaW9uc1xuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9ucyIsImFyZ3MiLCJkZXB0aCIsImdsb2JhbENvbmZpZyIsImxpbWl0Iiwib3ZlcnJpZGVBY2Nlc3MiLCJwYWdlIiwicmVxIiwiZmFsbGJhY2tMb2NhbGUiLCJsb2NhbGUiLCJwYXlsb2FkIiwic2hvd0hpZGRlbkZpZWxkcyIsInNvcnQiLCJ3aGVyZSIsInZlcnNpb25GaWVsZHMiLCJidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJhY2Nlc3NSZXN1bHRzIiwiZXhlY3V0ZUFjY2VzcyIsImFjY2VzcyIsInJlYWRWZXJzaW9ucyIsInZhbGlkYXRlUXVlcnlQYXRocyIsImZ1bGxXaGVyZSIsImNvbWJpbmVRdWVyaWVzIiwicGFnaW5hdGVkRG9jcyIsImRiIiwiZmluZEdsb2JhbFZlcnNpb25zIiwiZ2xvYmFsIiwic2x1ZyIsInJlc3VsdCIsImRvY3MiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZGF0YSIsInZlcnNpb24iLCJhZnRlclJlYWQiLCJjb2xsZWN0aW9uIiwiY29udGV4dCIsImRvYyIsImdsb2JhbFR5cGUiLCJkcmFmdCIsInVuZGVmaW5lZCIsImZpbmRNYW55IiwiZG9jUmVmIiwiaG9va3MiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwicXVlcnkiLCJyZXNvbHZlIiwic2FuaXRpemVJbnRlcm5hbEZpZWxkcyIsImNvbW1pdFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJraWxsVHJhbnNhY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQStKQTs7O2VBQUE7OztzRUF6SjBCO2dDQUNLO29DQUNJOzJCQUNUO21DQUNRO2lDQUNGO2lDQUNBOytFQUNHO21DQUNNOzs7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