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
const _afterChange = require("../../fields/hooks/afterChange");
const _afterRead = require("../../fields/hooks/afterRead");
const _beforeChange = require("../../fields/hooks/beforeChange");
const _beforeValidate = require("../../fields/hooks/beforeValidate");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _getLatestGlobalVersion = require("../../versions/getLatestGlobalVersion");
const _saveVersion = require("../../versions/saveVersion");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function update(args) {
    const { slug, autosave, depth, draft: draftArg, globalConfig, overrideAccess, req: { fallbackLocale, locale, payload }, req, showHiddenFields } = args;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        let { data } = args;
        const shouldSaveDraft = Boolean(draftArg && globalConfig.versions?.drafts);
        // /////////////////////////////////////
        // 1. Retrieve and execute access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, _executeAccess.default)({
            data,
            req
        }, globalConfig.access.update) : true;
        // /////////////////////////////////////
        // Retrieve document
        // /////////////////////////////////////
        const query = overrideAccess ? undefined : accessResults;
        // /////////////////////////////////////
        // 2. Retrieve document
        // /////////////////////////////////////
        const { global, globalExists } = await (0, _getLatestGlobalVersion.getLatestGlobalVersion)({
            slug,
            config: globalConfig,
            locale,
            payload,
            req,
            where: query
        });
        let globalJSON = {};
        if (global) {
            globalJSON = JSON.parse(JSON.stringify(global));
            if (globalJSON._id) {
                delete globalJSON._id;
            }
        }
        const originalDoc = await (0, _afterRead.afterRead)({
            collection: null,
            context: req.context,
            depth: 0,
            doc: globalJSON,
            draft: draftArg,
            fallbackLocale,
            global: globalConfig,
            locale,
            overrideAccess: true,
            req,
            showHiddenFields
        });
        // /////////////////////////////////////
        // beforeValidate - Fields
        // /////////////////////////////////////
        data = await (0, _beforeValidate.beforeValidate)({
            collection: null,
            context: req.context,
            data,
            doc: originalDoc,
            global: globalConfig,
            operation: 'update',
            overrideAccess,
            req
        });
        // /////////////////////////////////////
        // beforeValidate - Global
        // /////////////////////////////////////
        await globalConfig.hooks.beforeValidate.reduce(async (priorHook, hook)=>{
            await priorHook;
            data = await hook({
                context: req.context,
                data,
                global: globalConfig,
                originalDoc,
                req
            }) || data;
        }, Promise.resolve());
        // /////////////////////////////////////
        // beforeChange - Global
        // /////////////////////////////////////
        await globalConfig.hooks.beforeChange.reduce(async (priorHook, hook)=>{
            await priorHook;
            data = await hook({
                context: req.context,
                data,
                global: globalConfig,
                originalDoc,
                req
            }) || data;
        }, Promise.resolve());
        // /////////////////////////////////////
        // beforeChange - Fields
        // /////////////////////////////////////
        let result = await (0, _beforeChange.beforeChange)({
            collection: null,
            context: req.context,
            data,
            doc: originalDoc,
            docWithLocales: globalJSON,
            global: globalConfig,
            operation: 'update',
            req,
            skipValidation: shouldSaveDraft && globalConfig.versions.drafts && !globalConfig.versions.drafts.validate
        });
        // /////////////////////////////////////
        // Update
        // /////////////////////////////////////
        if (!shouldSaveDraft) {
            if (globalExists) {
                result = await payload.db.updateGlobal({
                    slug,
                    data: result,
                    req
                });
            } else {
                result = await payload.db.createGlobal({
                    slug,
                    data: result,
                    req
                });
            }
        }
        // /////////////////////////////////////
        // Create version
        // /////////////////////////////////////
        if (globalConfig.versions) {
            const { globalType } = result;
            result = await (0, _saveVersion.saveVersion)({
                autosave,
                docWithLocales: {
                    ...result,
                    createdAt: result.createdAt,
                    updatedAt: result.updatedAt
                },
                draft: shouldSaveDraft,
                global: globalConfig,
                payload,
                req
            });
            result.globalType = globalType;
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, _afterRead.afterRead)({
            collection: null,
            context: req.context,
            depth,
            doc: result,
            draft: draftArg,
            fallbackLocale: null,
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
            result = await hook({
                context: req.context,
                doc: result,
                global: globalConfig,
                req
            }) || result;
        }, Promise.resolve());
        // /////////////////////////////////////
        // afterChange - Fields
        // /////////////////////////////////////
        result = await (0, _afterChange.afterChange)({
            collection: null,
            context: req.context,
            data,
            doc: result,
            global: globalConfig,
            operation: 'update',
            previousDoc: originalDoc,
            req
        });
        // /////////////////////////////////////
        // afterChange - Global
        // /////////////////////////////////////
        await globalConfig.hooks.afterChange.reduce(async (priorHook, hook)=>{
            await priorHook;
            result = await hook({
                context: req.context,
                doc: result,
                global: globalConfig,
                previousDoc: originalDoc,
                req
            }) || result;
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
const _default = update;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRGVlcFBhcnRpYWwgfSBmcm9tICd0cy1lc3NlbnRpYWxzJ1xuXG5pbXBvcnQgdHlwZSB7IEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAnLi4vLi4vJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJ1xuaW1wb3J0IHsgYWZ0ZXJDaGFuZ2UgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJDaGFuZ2UnXG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJ1xuaW1wb3J0IHsgYmVmb3JlQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2JlZm9yZUNoYW5nZSdcbmltcG9ydCB7IGJlZm9yZVZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2JlZm9yZVZhbGlkYXRlJ1xuaW1wb3J0IHsgY29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbWl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcbmltcG9ydCB7IGdldExhdGVzdEdsb2JhbFZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9nZXRMYXRlc3RHbG9iYWxWZXJzaW9uJ1xuaW1wb3J0IHsgc2F2ZVZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9zYXZlVmVyc2lvbidcblxudHlwZSBBcmdzPFQgZXh0ZW5kcyB7IFtmaWVsZDogbnVtYmVyIHwgc3RyaW5nIHwgc3ltYm9sXTogdW5rbm93biB9PiA9IHtcbiAgYXV0b3NhdmU/OiBib29sZWFuXG4gIGRhdGE6IERlZXBQYXJ0aWFsPE9taXQ8VCwgJ2lkJz4+XG4gIGRlcHRoPzogbnVtYmVyXG4gIGRyYWZ0PzogYm9vbGVhblxuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxuICBzbHVnOiBzdHJpbmdcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4oXG4gIGFyZ3M6IEFyZ3M8R2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUU2x1Z10+LFxuKTogUHJvbWlzZTxHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddW1RTbHVnXT4ge1xuICBjb25zdCB7XG4gICAgc2x1ZyxcbiAgICBhdXRvc2F2ZSxcbiAgICBkZXB0aCxcbiAgICBkcmFmdDogZHJhZnRBcmcsXG4gICAgZ2xvYmFsQ29uZmlnLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHJlcTogeyBmYWxsYmFja0xvY2FsZSwgbG9jYWxlLCBwYXlsb2FkIH0sXG4gICAgcmVxLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gIH0gPSBhcmdzXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgbGV0IHsgZGF0YSB9ID0gYXJnc1xuXG4gICAgY29uc3Qgc2hvdWxkU2F2ZURyYWZ0ID0gQm9vbGVhbihkcmFmdEFyZyAmJiBnbG9iYWxDb25maWcudmVyc2lvbnM/LmRyYWZ0cylcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAxLiBSZXRyaWV2ZSBhbmQgZXhlY3V0ZSBhY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBhY2Nlc3NSZXN1bHRzID0gIW92ZXJyaWRlQWNjZXNzXG4gICAgICA/IGF3YWl0IGV4ZWN1dGVBY2Nlc3MoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdsb2JhbENvbmZpZy5hY2Nlc3MudXBkYXRlLFxuICAgICAgICApXG4gICAgICA6IHRydWVcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXRyaWV2ZSBkb2N1bWVudFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHF1ZXJ5OiBXaGVyZSA9IG92ZXJyaWRlQWNjZXNzID8gdW5kZWZpbmVkIDogKGFjY2Vzc1Jlc3VsdHMgYXMgV2hlcmUpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gMi4gUmV0cmlldmUgZG9jdW1lbnRcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgY29uc3QgeyBnbG9iYWwsIGdsb2JhbEV4aXN0cyB9ID0gYXdhaXQgZ2V0TGF0ZXN0R2xvYmFsVmVyc2lvbih7XG4gICAgICBzbHVnLFxuICAgICAgY29uZmlnOiBnbG9iYWxDb25maWcsXG4gICAgICBsb2NhbGUsXG4gICAgICBwYXlsb2FkLFxuICAgICAgcmVxLFxuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pXG5cbiAgICBsZXQgZ2xvYmFsSlNPTjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gICAgaWYgKGdsb2JhbCkge1xuICAgICAgZ2xvYmFsSlNPTiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2xvYmFsKSlcblxuICAgICAgaWYgKGdsb2JhbEpTT04uX2lkKSB7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxKU09OLl9pZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9yaWdpbmFsRG9jID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGNvbGxlY3Rpb246IG51bGwsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgZG9jOiBnbG9iYWxKU09OLFxuICAgICAgZHJhZnQ6IGRyYWZ0QXJnLFxuICAgICAgZmFsbGJhY2tMb2NhbGUsXG4gICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgIGxvY2FsZSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzOiB0cnVlLFxuICAgICAgcmVxLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICB9KVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVZhbGlkYXRlIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZGF0YSA9IGF3YWl0IGJlZm9yZVZhbGlkYXRlKHtcbiAgICAgIGNvbGxlY3Rpb246IG51bGwsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgZ2xvYmFsOiBnbG9iYWxDb25maWcsXG4gICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgfSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVWYWxpZGF0ZSAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5iZWZvcmVWYWxpZGF0ZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIGRhdGEgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgICAgICBvcmlnaW5hbERvYyxcbiAgICAgICAgICByZXEsXG4gICAgICAgIH0pKSB8fCBkYXRhXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlQ2hhbmdlIC0gR2xvYmFsXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgZ2xvYmFsQ29uZmlnLmhvb2tzLmJlZm9yZUNoYW5nZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIGRhdGEgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgICAgICBvcmlnaW5hbERvYyxcbiAgICAgICAgICByZXEsXG4gICAgICAgIH0pKSB8fCBkYXRhXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlQ2hhbmdlIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGJlZm9yZUNoYW5nZSh7XG4gICAgICBjb2xsZWN0aW9uOiBudWxsLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICBkYXRhLFxuICAgICAgZG9jOiBvcmlnaW5hbERvYyxcbiAgICAgIGRvY1dpdGhMb2NhbGVzOiBnbG9iYWxKU09OLFxuICAgICAgZ2xvYmFsOiBnbG9iYWxDb25maWcsXG4gICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgcmVxLFxuICAgICAgc2tpcFZhbGlkYXRpb246XG4gICAgICAgIHNob3VsZFNhdmVEcmFmdCAmJiBnbG9iYWxDb25maWcudmVyc2lvbnMuZHJhZnRzICYmICFnbG9iYWxDb25maWcudmVyc2lvbnMuZHJhZnRzLnZhbGlkYXRlLFxuICAgIH0pXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVXBkYXRlXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKCFzaG91bGRTYXZlRHJhZnQpIHtcbiAgICAgIGlmIChnbG9iYWxFeGlzdHMpIHtcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgcGF5bG9hZC5kYi51cGRhdGVHbG9iYWwoe1xuICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZGIuY3JlYXRlR2xvYmFsKHtcbiAgICAgICAgICBzbHVnLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgICByZXEsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIENyZWF0ZSB2ZXJzaW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKGdsb2JhbENvbmZpZy52ZXJzaW9ucykge1xuICAgICAgY29uc3QgeyBnbG9iYWxUeXBlIH0gPSByZXN1bHRcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHNhdmVWZXJzaW9uKHtcbiAgICAgICAgYXV0b3NhdmUsXG4gICAgICAgIGRvY1dpdGhMb2NhbGVzOiB7XG4gICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcbiAgICAgICAgICB1cGRhdGVkQXQ6IHJlc3VsdC51cGRhdGVkQXQsXG4gICAgICAgIH0sXG4gICAgICAgIGRyYWZ0OiBzaG91bGRTYXZlRHJhZnQsXG4gICAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICByZXEsXG4gICAgICB9KVxuICAgICAgcmVzdWx0Lmdsb2JhbFR5cGUgPSBnbG9iYWxUeXBlXG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBjb2xsZWN0aW9uOiBudWxsLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgZHJhZnQ6IGRyYWZ0QXJnLFxuICAgICAgZmFsbGJhY2tMb2NhbGU6IG51bGwsXG4gICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgIGxvY2FsZSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICB9KVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICByZXN1bHQgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgICAgZ2xvYmFsOiBnbG9iYWxDb25maWcsXG4gICAgICAgICAgcmVxLFxuICAgICAgICB9KSkgfHwgcmVzdWx0XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJDaGFuZ2UgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBhZnRlckNoYW5nZSh7XG4gICAgICBjb2xsZWN0aW9uOiBudWxsLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICBkYXRhLFxuICAgICAgZG9jOiByZXN1bHQsXG4gICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICBwcmV2aW91c0RvYzogb3JpZ2luYWxEb2MsXG4gICAgICByZXEsXG4gICAgfSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckNoYW5nZSAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5hZnRlckNoYW5nZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIHJlc3VsdCA9XG4gICAgICAgIChhd2FpdCBob29rKHtcbiAgICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgICAgICBwcmV2aW91c0RvYzogb3JpZ2luYWxEb2MsXG4gICAgICAgICAgcmVxLFxuICAgICAgICB9KSkgfHwgcmVzdWx0XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVxuIl0sIm5hbWVzIjpbInVwZGF0ZSIsImFyZ3MiLCJzbHVnIiwiYXV0b3NhdmUiLCJkZXB0aCIsImRyYWZ0IiwiZHJhZnRBcmciLCJnbG9iYWxDb25maWciLCJvdmVycmlkZUFjY2VzcyIsInJlcSIsImZhbGxiYWNrTG9jYWxlIiwibG9jYWxlIiwicGF5bG9hZCIsInNob3dIaWRkZW5GaWVsZHMiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJkYXRhIiwic2hvdWxkU2F2ZURyYWZ0IiwiQm9vbGVhbiIsInZlcnNpb25zIiwiZHJhZnRzIiwiYWNjZXNzUmVzdWx0cyIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJxdWVyeSIsInVuZGVmaW5lZCIsImdsb2JhbCIsImdsb2JhbEV4aXN0cyIsImdldExhdGVzdEdsb2JhbFZlcnNpb24iLCJjb25maWciLCJ3aGVyZSIsImdsb2JhbEpTT04iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJfaWQiLCJvcmlnaW5hbERvYyIsImFmdGVyUmVhZCIsImNvbGxlY3Rpb24iLCJjb250ZXh0IiwiZG9jIiwiYmVmb3JlVmFsaWRhdGUiLCJvcGVyYXRpb24iLCJob29rcyIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImJlZm9yZUNoYW5nZSIsInJlc3VsdCIsImRvY1dpdGhMb2NhbGVzIiwic2tpcFZhbGlkYXRpb24iLCJ2YWxpZGF0ZSIsImRiIiwidXBkYXRlR2xvYmFsIiwiY3JlYXRlR2xvYmFsIiwiZ2xvYmFsVHlwZSIsInNhdmVWZXJzaW9uIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiYWZ0ZXJDaGFuZ2UiLCJwcmV2aW91c0RvYyIsImNvbW1pdFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJraWxsVHJhbnNhY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBc1NBOzs7ZUFBQTs7O3NFQS9SMEI7NkJBQ0U7MkJBQ0Y7OEJBQ0c7Z0NBQ0U7bUNBQ0c7aUNBQ0Y7aUNBQ0E7d0NBQ087NkJBQ1g7Ozs7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