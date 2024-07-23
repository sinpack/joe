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
const _errors = require("../../errors");
const _afterChange = require("../../fields/hooks/afterChange");
const _afterRead = require("../../fields/hooks/afterRead");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function restoreVersion(args) {
    const { id, depth, globalConfig, overrideAccess, req: { fallbackLocale, locale, payload, t }, req, showHiddenFields } = args;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        if (!overrideAccess) {
            await (0, _executeAccess.default)({
                req
            }, globalConfig.access.update);
        }
        // /////////////////////////////////////
        // Retrieve original raw version
        // /////////////////////////////////////
        const { docs: versionDocs } = await payload.db.findGlobalVersions({
            global: globalConfig.slug,
            limit: 1,
            req,
            where: {
                id: {
                    equals: id
                }
            }
        });
        if (!versionDocs || versionDocs.length === 0) {
            throw new _errors.NotFound(t);
        }
        const rawVersion = versionDocs[0];
        // Patch globalType onto version doc
        rawVersion.version.globalType = globalConfig.slug;
        // /////////////////////////////////////
        // fetch previousDoc
        // /////////////////////////////////////
        const previousDoc = await payload.findGlobal({
            slug: globalConfig.slug,
            depth,
            req
        });
        // /////////////////////////////////////
        // Update global
        // /////////////////////////////////////
        const global = await payload.db.findGlobal({
            slug: globalConfig.slug,
            req
        });
        let result = rawVersion.version;
        if (global) {
            result = await payload.db.updateGlobal({
                slug: globalConfig.slug,
                data: result,
                req
            });
        } else {
            result = await payload.db.createGlobal({
                slug: globalConfig.slug,
                data: result,
                req
            });
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, _afterRead.afterRead)({
            collection: null,
            context: req.context,
            depth,
            doc: result,
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
            data: result,
            doc: result,
            global: globalConfig,
            operation: 'update',
            previousDoc,
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
                previousDoc,
                req
            }) || result;
        }, Promise.resolve());
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return result;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(req);
        throw error;
    }
}
const _default = restoreVersion;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvcmVzdG9yZVZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFR5cGVXaXRoVmVyc2lvbiB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2VzcydcbmltcG9ydCB7IE5vdEZvdW5kIH0gZnJvbSAnLi4vLi4vZXJyb3JzJ1xuaW1wb3J0IHsgYWZ0ZXJDaGFuZ2UgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJDaGFuZ2UnXG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJ1xuaW1wb3J0IHsgY29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbWl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBkZXB0aD86IG51bWJlclxuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBpZDogbnVtYmVyIHwgc3RyaW5nXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxufVxuXG5hc3luYyBmdW5jdGlvbiByZXN0b3JlVmVyc2lvbjxUIGV4dGVuZHMgVHlwZVdpdGhWZXJzaW9uPFQ+ID0gYW55PihhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPFQ+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGRlcHRoLFxuICAgIGdsb2JhbENvbmZpZyxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICByZXE6IHsgZmFsbGJhY2tMb2NhbGUsIGxvY2FsZSwgcGF5bG9hZCwgdCB9LFxuICAgIHJlcSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICB9ID0gYXJnc1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgICBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGdsb2JhbENvbmZpZy5hY2Nlc3MudXBkYXRlKVxuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXRyaWV2ZSBvcmlnaW5hbCByYXcgdmVyc2lvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHsgZG9jczogdmVyc2lvbkRvY3MgfSA9IGF3YWl0IHBheWxvYWQuZGIuZmluZEdsb2JhbFZlcnNpb25zPGFueT4oe1xuICAgICAgZ2xvYmFsOiBnbG9iYWxDb25maWcuc2x1ZyxcbiAgICAgIGxpbWl0OiAxLFxuICAgICAgcmVxLFxuICAgICAgd2hlcmU6IHsgaWQ6IHsgZXF1YWxzOiBpZCB9IH0sXG4gICAgfSlcblxuICAgIGlmICghdmVyc2lvbkRvY3MgfHwgdmVyc2lvbkRvY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgTm90Rm91bmQodClcbiAgICB9XG5cbiAgICBjb25zdCByYXdWZXJzaW9uID0gdmVyc2lvbkRvY3NbMF1cblxuICAgIC8vIFBhdGNoIGdsb2JhbFR5cGUgb250byB2ZXJzaW9uIGRvY1xuICAgIHJhd1ZlcnNpb24udmVyc2lvbi5nbG9iYWxUeXBlID0gZ2xvYmFsQ29uZmlnLnNsdWdcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBmZXRjaCBwcmV2aW91c0RvY1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHByZXZpb3VzRG9jID0gYXdhaXQgcGF5bG9hZC5maW5kR2xvYmFsKHtcbiAgICAgIHNsdWc6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgZGVwdGgsXG4gICAgICByZXEsXG4gICAgfSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBVcGRhdGUgZ2xvYmFsXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgZ2xvYmFsID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kR2xvYmFsKHtcbiAgICAgIHNsdWc6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICBsZXQgcmVzdWx0ID0gcmF3VmVyc2lvbi52ZXJzaW9uXG5cbiAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmRiLnVwZGF0ZUdsb2JhbCh7XG4gICAgICAgIHNsdWc6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgIHJlcSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZGIuY3JlYXRlR2xvYmFsKHtcbiAgICAgICAgc2x1ZzogZ2xvYmFsQ29uZmlnLnNsdWcsXG4gICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgcmVxLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGNvbGxlY3Rpb246IG51bGwsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIGRlcHRoLFxuICAgICAgZG9jOiByZXN1bHQsXG4gICAgICBkcmFmdDogdW5kZWZpbmVkLFxuICAgICAgZmFsbGJhY2tMb2NhbGUsXG4gICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZyxcbiAgICAgIGxvY2FsZSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICB9KVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICByZXN1bHQgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgICAgZ2xvYmFsOiBnbG9iYWxDb25maWcsXG4gICAgICAgICAgcmVxLFxuICAgICAgICB9KSkgfHwgcmVzdWx0XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJDaGFuZ2UgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBhZnRlckNoYW5nZSh7XG4gICAgICBjb2xsZWN0aW9uOiBudWxsLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICBkYXRhOiByZXN1bHQsXG4gICAgICBkb2M6IHJlc3VsdCxcbiAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIHByZXZpb3VzRG9jLFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJDaGFuZ2UgLSBHbG9iYWxcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBnbG9iYWxDb25maWcuaG9va3MuYWZ0ZXJDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICByZXN1bHQgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgICAgZ2xvYmFsOiBnbG9iYWxDb25maWcsXG4gICAgICAgICAgcHJldmlvdXNEb2MsXG4gICAgICAgICAgcmVxLFxuICAgICAgICB9KSkgfHwgcmVzdWx0XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3RvcmVWZXJzaW9uXG4iXSwibmFtZXMiOlsicmVzdG9yZVZlcnNpb24iLCJhcmdzIiwiaWQiLCJkZXB0aCIsImdsb2JhbENvbmZpZyIsIm92ZXJyaWRlQWNjZXNzIiwicmVxIiwiZmFsbGJhY2tMb2NhbGUiLCJsb2NhbGUiLCJwYXlsb2FkIiwidCIsInNob3dIaWRkZW5GaWVsZHMiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJleGVjdXRlQWNjZXNzIiwiYWNjZXNzIiwidXBkYXRlIiwiZG9jcyIsInZlcnNpb25Eb2NzIiwiZGIiLCJmaW5kR2xvYmFsVmVyc2lvbnMiLCJnbG9iYWwiLCJzbHVnIiwibGltaXQiLCJ3aGVyZSIsImVxdWFscyIsImxlbmd0aCIsIk5vdEZvdW5kIiwicmF3VmVyc2lvbiIsInZlcnNpb24iLCJnbG9iYWxUeXBlIiwicHJldmlvdXNEb2MiLCJmaW5kR2xvYmFsIiwicmVzdWx0IiwidXBkYXRlR2xvYmFsIiwiZGF0YSIsImNyZWF0ZUdsb2JhbCIsImFmdGVyUmVhZCIsImNvbGxlY3Rpb24iLCJjb250ZXh0IiwiZG9jIiwiZHJhZnQiLCJ1bmRlZmluZWQiLCJob29rcyIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImFmdGVyQ2hhbmdlIiwib3BlcmF0aW9uIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJlcnJvciIsImtpbGxUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozsr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