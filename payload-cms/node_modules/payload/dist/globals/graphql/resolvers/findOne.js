/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findOneResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _findOne = /*#__PURE__*/ _interop_require_default(require("../../operations/findOne"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findOneResolver(globalConfig) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req = (0, _isolateObjectProperty.default)(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) req.query = {};
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') req.query.draft = String(draft);
        context.req = req;
        const options = {
            slug: globalConfig.slug,
            depth: 0,
            draft: args.draft,
            globalConfig,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID')
        };
        const result = await (0, _findOne.default)(options);
        return result;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2ZpbmRPbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuaW1wb3J0IHR5cGUgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBmaW5kT25lIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZmluZE9uZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZE9uZVJlc29sdmVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogRG9jdW1lbnQge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGxldCB7IHJlcSB9ID0gY29udGV4dFxuICAgIGNvbnN0IGxvY2FsZSA9IHJlcS5sb2NhbGVcbiAgICBjb25zdCBmYWxsYmFja0xvY2FsZSA9IHJlcS5mYWxsYmFja0xvY2FsZVxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICdsb2NhbGUnKVxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICdmYWxsYmFja0xvY2FsZScpXG4gICAgcmVxLmxvY2FsZSA9IGFyZ3MubG9jYWxlIHx8IGxvY2FsZVxuICAgIHJlcS5mYWxsYmFja0xvY2FsZSA9IGFyZ3MuZmFsbGJhY2tMb2NhbGUgfHwgZmFsbGJhY2tMb2NhbGVcblxuICAgIGlmICghcmVxLnF1ZXJ5KSByZXEucXVlcnkgPSB7fVxuXG4gICAgY29uc3QgZHJhZnQ6IGJvb2xlYW4gPVxuICAgICAgYXJncy5kcmFmdCA/PyByZXEucXVlcnk/LmRyYWZ0ID09PSAnZmFsc2UnXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiByZXEucXVlcnk/LmRyYWZ0ID09PSAndHJ1ZSdcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgIGlmICh0eXBlb2YgZHJhZnQgPT09ICdib29sZWFuJykgcmVxLnF1ZXJ5LmRyYWZ0ID0gU3RyaW5nKGRyYWZ0KVxuXG4gICAgY29udGV4dC5yZXEgPSByZXFcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzbHVnOiBnbG9iYWxDb25maWcuc2x1ZyxcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgZHJhZnQ6IGFyZ3MuZHJhZnQsXG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmluZE9uZShvcHRpb25zKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpbmRPbmVSZXNvbHZlciIsImdsb2JhbENvbmZpZyIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0IiwicmVxIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJxdWVyeSIsImRyYWZ0IiwidW5kZWZpbmVkIiwiU3RyaW5nIiwib3B0aW9ucyIsInNsdWciLCJkZXB0aCIsInJlc3VsdCIsImZpbmRPbmUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQVFwQzs7O2VBQXdCQTs7OzhFQUhVO2dFQUNkOzs7Ozs7QUFFTCxTQUFTQSxnQkFBZ0JDLFlBQW1DO0lBQ3pFLE9BQU8sZUFBZUMsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87UUFDN0MsSUFBSSxFQUFFQyxHQUFHLEVBQUUsR0FBR0Q7UUFDZCxNQUFNRSxTQUFTRCxJQUFJQyxNQUFNO1FBQ3pCLE1BQU1DLGlCQUFpQkYsSUFBSUUsY0FBYztRQUN6Q0YsTUFBTUcsSUFBQUEsOEJBQXFCLEVBQUNILEtBQUs7UUFDakNBLE1BQU1HLElBQUFBLDhCQUFxQixFQUFDSCxLQUFLO1FBQ2pDQSxJQUFJQyxNQUFNLEdBQUdILEtBQUtHLE1BQU0sSUFBSUE7UUFDNUJELElBQUlFLGNBQWMsR0FBR0osS0FBS0ksY0FBYyxJQUFJQTtRQUU1QyxJQUFJLENBQUNGLElBQUlJLEtBQUssRUFBRUosSUFBSUksS0FBSyxHQUFHLENBQUM7UUFFN0IsTUFBTUMsUUFDSlAsS0FBS08sS0FBSyxJQUFJTCxJQUFJSSxLQUFLLEVBQUVDLFVBQVUsVUFDL0IsUUFDQUwsSUFBSUksS0FBSyxFQUFFQyxVQUFVLFNBQ25CLE9BQ0FDO1FBQ1IsSUFBSSxPQUFPRCxVQUFVLFdBQVdMLElBQUlJLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRSxPQUFPRjtRQUV6RE4sUUFBUUMsR0FBRyxHQUFHQTtRQUVkLE1BQU1RLFVBQVU7WUFDZEMsTUFBTWQsYUFBYWMsSUFBSTtZQUN2QkMsT0FBTztZQUNQTCxPQUFPUCxLQUFLTyxLQUFLO1lBQ2pCVjtZQUNBSyxLQUFLRyxJQUFBQSw4QkFBcUIsRUFBQ0gsS0FBSztRQUNsQztRQUVBLE1BQU1XLFNBQVMsTUFBTUMsSUFBQUEsZ0JBQU8sRUFBQ0o7UUFDN0IsT0FBT0c7SUFDVDtBQUNGIn0=