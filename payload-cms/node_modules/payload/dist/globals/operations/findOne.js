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
const _afterRead = require("../../fields/hooks/afterRead");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _replaceWithDraftIfAvailable = /*#__PURE__*/ _interop_require_default(require("../../versions/drafts/replaceWithDraftIfAvailable"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function findOne(args) {
    const { slug, depth, draft: draftEnabled = false, globalConfig, overrideAccess = false, req: { fallbackLocale, locale, payload }, req, showHiddenFields } = args;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        // /////////////////////////////////////
        // Retrieve and execute access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, _executeAccess.default)({
                req
            }, globalConfig.access.read);
        }
        // /////////////////////////////////////
        // Perform database operation
        // /////////////////////////////////////
        let doc = await req.payload.db.findGlobal({
            slug,
            locale,
            req,
            where: overrideAccess ? undefined : accessResult
        });
        if (!doc) {
            doc = {};
        }
        // /////////////////////////////////////
        // Replace document with draft if available
        // /////////////////////////////////////
        if (globalConfig.versions?.drafts && draftEnabled) {
            doc = await (0, _replaceWithDraftIfAvailable.default)({
                accessResult,
                doc,
                entity: globalConfig,
                entityType: 'global',
                overrideAccess,
                req
            });
        }
        // /////////////////////////////////////
        // Execute before global hook
        // /////////////////////////////////////
        await globalConfig.hooks.beforeRead.reduce(async (priorHook, hook)=>{
            await priorHook;
            doc = await hook({
                context: req.context,
                doc,
                global: globalConfig,
                req
            }) || doc;
        }, Promise.resolve());
        // /////////////////////////////////////
        // Execute field-level hooks and access
        // /////////////////////////////////////
        doc = await (0, _afterRead.afterRead)({
            collection: null,
            context: req.context,
            depth,
            doc,
            draft: draftEnabled,
            fallbackLocale,
            global: globalConfig,
            locale,
            overrideAccess,
            req,
            showHiddenFields
        });
        // /////////////////////////////////////
        // Execute after global hook
        // /////////////////////////////////////
        await globalConfig.hooks.afterRead.reduce(async (priorHook, hook)=>{
            await priorHook;
            doc = await hook({
                context: req.context,
                doc,
                global: globalConfig,
                req
            }) || doc;
        }, Promise.resolve());
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return doc;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(req);
        throw error;
    }
}
const _default = findOne;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZmluZE9uZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFjY2Vzc1Jlc3VsdCB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2VzcydcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnXG5pbXBvcnQgeyBjb21taXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21taXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHJlcGxhY2VXaXRoRHJhZnRJZkF2YWlsYWJsZSBmcm9tICcuLi8uLi92ZXJzaW9ucy9kcmFmdHMvcmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGRlcHRoPzogbnVtYmVyXG4gIGRyYWZ0PzogYm9vbGVhblxuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgc2x1Zzogc3RyaW5nXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRPbmU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihhcmdzOiBBcmdzKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHtcbiAgICBzbHVnLFxuICAgIGRlcHRoLFxuICAgIGRyYWZ0OiBkcmFmdEVuYWJsZWQgPSBmYWxzZSxcbiAgICBnbG9iYWxDb25maWcsXG4gICAgb3ZlcnJpZGVBY2Nlc3MgPSBmYWxzZSxcbiAgICByZXE6IHsgZmFsbGJhY2tMb2NhbGUsIGxvY2FsZSwgcGF5bG9hZCB9LFxuICAgIHJlcSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICB9ID0gYXJnc1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXRyaWV2ZSBhbmQgZXhlY3V0ZSBhY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgYWNjZXNzUmVzdWx0OiBBY2Nlc3NSZXN1bHRcblxuICAgIGlmICghb3ZlcnJpZGVBY2Nlc3MpIHtcbiAgICAgIGFjY2Vzc1Jlc3VsdCA9IGF3YWl0IGV4ZWN1dGVBY2Nlc3MoeyByZXEgfSwgZ2xvYmFsQ29uZmlnLmFjY2Vzcy5yZWFkKVxuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQZXJmb3JtIGRhdGFiYXNlIG9wZXJhdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGxldCBkb2MgPSBhd2FpdCByZXEucGF5bG9hZC5kYi5maW5kR2xvYmFsKHtcbiAgICAgIHNsdWcsXG4gICAgICBsb2NhbGUsXG4gICAgICByZXEsXG4gICAgICB3aGVyZTogb3ZlcnJpZGVBY2Nlc3MgPyB1bmRlZmluZWQgOiAoYWNjZXNzUmVzdWx0IGFzIFdoZXJlKSxcbiAgICB9KVxuICAgIGlmICghZG9jKSB7XG4gICAgICBkb2MgPSB7fVxuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXBsYWNlIGRvY3VtZW50IHdpdGggZHJhZnQgaWYgYXZhaWxhYmxlXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKGdsb2JhbENvbmZpZy52ZXJzaW9ucz8uZHJhZnRzICYmIGRyYWZ0RW5hYmxlZCkge1xuICAgICAgZG9jID0gYXdhaXQgcmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlKHtcbiAgICAgICAgYWNjZXNzUmVzdWx0LFxuICAgICAgICBkb2MsXG4gICAgICAgIGVudGl0eTogZ2xvYmFsQ29uZmlnLFxuICAgICAgICBlbnRpdHlUeXBlOiAnZ2xvYmFsJyxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHJlcSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEV4ZWN1dGUgYmVmb3JlIGdsb2JhbCBob29rXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgZ2xvYmFsQ29uZmlnLmhvb2tzLmJlZm9yZVJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICBkb2MgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZG9jLFxuICAgICAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSkpIHx8IGRvY1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEV4ZWN1dGUgZmllbGQtbGV2ZWwgaG9va3MgYW5kIGFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGRvYyA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBjb2xsZWN0aW9uOiBudWxsLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICBkZXB0aCxcbiAgICAgIGRvYyxcbiAgICAgIGRyYWZ0OiBkcmFmdEVuYWJsZWQsXG4gICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLFxuICAgICAgbG9jYWxlLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIH0pXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRXhlY3V0ZSBhZnRlciBnbG9iYWwgaG9va1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICBkb2MgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZG9jLFxuICAgICAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSkpIHx8IGRvY1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgY29tbWl0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmV0dXJuIGRvY1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kT25lXG4iXSwibmFtZXMiOlsiZmluZE9uZSIsImFyZ3MiLCJzbHVnIiwiZGVwdGgiLCJkcmFmdCIsImRyYWZ0RW5hYmxlZCIsImdsb2JhbENvbmZpZyIsIm92ZXJyaWRlQWNjZXNzIiwicmVxIiwiZmFsbGJhY2tMb2NhbGUiLCJsb2NhbGUiLCJwYXlsb2FkIiwic2hvd0hpZGRlbkZpZWxkcyIsInNob3VsZENvbW1pdCIsImluaXRUcmFuc2FjdGlvbiIsImFjY2Vzc1Jlc3VsdCIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJyZWFkIiwiZG9jIiwiZGIiLCJmaW5kR2xvYmFsIiwid2hlcmUiLCJ1bmRlZmluZWQiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsInJlcGxhY2VXaXRoRHJhZnRJZkF2YWlsYWJsZSIsImVudGl0eSIsImVudGl0eVR5cGUiLCJob29rcyIsImJlZm9yZVJlYWQiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwiY29udGV4dCIsImdsb2JhbCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWZ0ZXJSZWFkIiwiY29sbGVjdGlvbiIsImNvbW1pdFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJraWxsVHJhbnNhY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnSkE7OztlQUFBOzs7c0VBM0kwQjsyQkFDQTttQ0FDUTtpQ0FDRjtpQ0FDQTtvRkFDUTs7Ozs7O0FBYXhDLGVBQWVBLFFBQTJDQyxJQUFVO0lBQ2xFLE1BQU0sRUFDSkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLE9BQU9DLGVBQWUsS0FBSyxFQUMzQkMsWUFBWSxFQUNaQyxpQkFBaUIsS0FBSyxFQUN0QkMsS0FBSyxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQ3hDSCxHQUFHLEVBQ0hJLGdCQUFnQixFQUNqQixHQUFHWDtJQUVKLElBQUk7UUFDRixNQUFNWSxlQUFlLE1BQU1DLElBQUFBLGdDQUFlLEVBQUNOO1FBRTNDLHdDQUF3QztRQUN4Qyw4QkFBOEI7UUFDOUIsd0NBQXdDO1FBRXhDLElBQUlPO1FBRUosSUFBSSxDQUFDUixnQkFBZ0I7WUFDbkJRLGVBQWUsTUFBTUMsSUFBQUEsc0JBQWEsRUFBQztnQkFBRVI7WUFBSSxHQUFHRixhQUFhVyxNQUFNLENBQUNDLElBQUk7UUFDdEU7UUFFQSx3Q0FBd0M7UUFDeEMsNkJBQTZCO1FBQzdCLHdDQUF3QztRQUV4QyxJQUFJQyxNQUFNLE1BQU1YLElBQUlHLE9BQU8sQ0FBQ1MsRUFBRSxDQUFDQyxVQUFVLENBQUM7WUFDeENuQjtZQUNBUTtZQUNBRjtZQUNBYyxPQUFPZixpQkFBaUJnQixZQUFhUjtRQUN2QztRQUNBLElBQUksQ0FBQ0ksS0FBSztZQUNSQSxNQUFNLENBQUM7UUFDVDtRQUVBLHdDQUF3QztRQUN4QywyQ0FBMkM7UUFDM0Msd0NBQXdDO1FBRXhDLElBQUliLGFBQWFrQixRQUFRLEVBQUVDLFVBQVVwQixjQUFjO1lBQ2pEYyxNQUFNLE1BQU1PLElBQUFBLG9DQUEyQixFQUFDO2dCQUN0Q1g7Z0JBQ0FJO2dCQUNBUSxRQUFRckI7Z0JBQ1JzQixZQUFZO2dCQUNackI7Z0JBQ0FDO1lBQ0Y7UUFDRjtRQUVBLHdDQUF3QztRQUN4Qyw2QkFBNkI7UUFDN0Isd0NBQXdDO1FBRXhDLE1BQU1GLGFBQWF1QixLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDLE9BQU9DLFdBQVdDO1lBQzNELE1BQU1EO1lBRU5iLE1BQ0UsQUFBQyxNQUFNYyxLQUFLO2dCQUNWQyxTQUFTMUIsSUFBSTBCLE9BQU87Z0JBQ3BCZjtnQkFDQWdCLFFBQVE3QjtnQkFDUkU7WUFDRixNQUFPVztRQUNYLEdBQUdpQixRQUFRQyxPQUFPO1FBRWxCLHdDQUF3QztRQUN4Qyx1Q0FBdUM7UUFDdkMsd0NBQXdDO1FBRXhDbEIsTUFBTSxNQUFNbUIsSUFBQUEsb0JBQVMsRUFBQztZQUNwQkMsWUFBWTtZQUNaTCxTQUFTMUIsSUFBSTBCLE9BQU87WUFDcEIvQjtZQUNBZ0I7WUFDQWYsT0FBT0M7WUFDUEk7WUFDQTBCLFFBQVE3QjtZQUNSSTtZQUNBSDtZQUNBQztZQUNBSTtRQUNGO1FBRUEsd0NBQXdDO1FBQ3hDLDRCQUE0QjtRQUM1Qix3Q0FBd0M7UUFFeEMsTUFBTU4sYUFBYXVCLEtBQUssQ0FBQ1MsU0FBUyxDQUFDUCxNQUFNLENBQUMsT0FBT0MsV0FBV0M7WUFDMUQsTUFBTUQ7WUFFTmIsTUFDRSxBQUFDLE1BQU1jLEtBQUs7Z0JBQ1ZDLFNBQVMxQixJQUFJMEIsT0FBTztnQkFDcEJmO2dCQUNBZ0IsUUFBUTdCO2dCQUNSRTtZQUNGLE1BQU9XO1FBQ1gsR0FBR2lCLFFBQVFDLE9BQU87UUFFbEIsd0NBQXdDO1FBQ3hDLGlCQUFpQjtRQUNqQix3Q0FBd0M7UUFFeEMsSUFBSXhCLGNBQWMsTUFBTTJCLElBQUFBLG9DQUFpQixFQUFDaEM7UUFFMUMsd0NBQXdDO1FBQ3hDLGlCQUFpQjtRQUNqQix3Q0FBd0M7UUFFeEMsT0FBT1c7SUFDVCxFQUFFLE9BQU9zQixPQUFnQjtRQUN2QixNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDbEM7UUFDdEIsTUFBTWlDO0lBQ1I7QUFDRjtNQUVBLFdBQWV6QyJ9