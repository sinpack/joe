/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _create = /*#__PURE__*/ _interop_require_default(require("../../operations/create"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req.locale = args.locale || locale;
        if (!req.query) req.query = {};
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') req.query.draft = String(draft);
        context.req = req;
        const options = {
            collection,
            data: args.data,
            depth: 0,
            draft: args.draft,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID')
        };
        const result = await (0, _create.default)(options);
        return result;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9jcmVhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB0eXBlIHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHR5cGUgeyBNYXJrT3B0aW9uYWwgfSBmcm9tICd0cy1lc3NlbnRpYWxzJ1xuXG5pbXBvcnQgdHlwZSB7IEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9jcmVhdGUnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+ID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgZGF0YTogTWFya09wdGlvbmFsPFxuICAgICAgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddLFxuICAgICAgJ2NyZWF0ZWRBdCcgfCAnaWQnIHwgJ3NpemVzJyB8ICd1cGRhdGVkQXQnXG4gICAgPlxuICAgIGRyYWZ0OiBib29sZWFuXG4gICAgbG9jYWxlPzogc3RyaW5nXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gICAgcmVzOiBSZXNwb25zZVxuICB9LFxuKSA9PiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVzb2x2ZXI8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb24sXG4pOiBSZXNvbHZlcjxUU2x1Zz4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGxldCB7IHJlcSB9ID0gY29udGV4dFxuICAgIGNvbnN0IGxvY2FsZSA9IHJlcS5sb2NhbGVcbiAgICByZXEgPSBpc29sYXRlT2JqZWN0UHJvcGVydHkocmVxLCAnbG9jYWxlJylcbiAgICByZXEubG9jYWxlID0gYXJncy5sb2NhbGUgfHwgbG9jYWxlXG4gICAgaWYgKCFyZXEucXVlcnkpIHJlcS5xdWVyeSA9IHt9XG5cbiAgICBjb25zdCBkcmFmdDogYm9vbGVhbiA9XG4gICAgICBhcmdzLmRyYWZ0ID8/IHJlcS5xdWVyeT8uZHJhZnQgPT09ICdmYWxzZSdcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IHJlcS5xdWVyeT8uZHJhZnQgPT09ICd0cnVlJ1xuICAgICAgICA/IHRydWVcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICBpZiAodHlwZW9mIGRyYWZ0ID09PSAnYm9vbGVhbicpIHJlcS5xdWVyeS5kcmFmdCA9IFN0cmluZyhkcmFmdClcblxuICAgIGNvbnRleHQucmVxID0gcmVxXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IGFyZ3MuZGF0YSxcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgZHJhZnQ6IGFyZ3MuZHJhZnQsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4ocmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZShvcHRpb25zKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJyZXEiLCJsb2NhbGUiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJxdWVyeSIsImRyYWZ0IiwidW5kZWZpbmVkIiwiU3RyaW5nIiwib3B0aW9ucyIsImRhdGEiLCJkZXB0aCIsInJlc3VsdCIsImNyZWF0ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBMkJwQzs7O2VBQXdCQTs7OzhFQW5CVTsrREFDZjs7Ozs7O0FBa0JKLFNBQVNBLGVBQ3RCQyxVQUFzQjtJQUV0QixPQUFPLGVBQWVDLFNBQVNDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO1FBQzdDLElBQUksRUFBRUMsR0FBRyxFQUFFLEdBQUdEO1FBQ2QsTUFBTUUsU0FBU0QsSUFBSUMsTUFBTTtRQUN6QkQsTUFBTUUsSUFBQUEsOEJBQXFCLEVBQUNGLEtBQUs7UUFDakNBLElBQUlDLE1BQU0sR0FBR0gsS0FBS0csTUFBTSxJQUFJQTtRQUM1QixJQUFJLENBQUNELElBQUlHLEtBQUssRUFBRUgsSUFBSUcsS0FBSyxHQUFHLENBQUM7UUFFN0IsTUFBTUMsUUFDSk4sS0FBS00sS0FBSyxJQUFJSixJQUFJRyxLQUFLLEVBQUVDLFVBQVUsVUFDL0IsUUFDQUosSUFBSUcsS0FBSyxFQUFFQyxVQUFVLFNBQ3JCLE9BQ0FDO1FBQ04sSUFBSSxPQUFPRCxVQUFVLFdBQVdKLElBQUlHLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRSxPQUFPRjtRQUV6REwsUUFBUUMsR0FBRyxHQUFHQTtRQUVkLE1BQU1PLFVBQVU7WUFDZFo7WUFDQWEsTUFBTVYsS0FBS1UsSUFBSTtZQUNmQyxPQUFPO1lBQ1BMLE9BQU9OLEtBQUtNLEtBQUs7WUFDakJKLEtBQUtFLElBQUFBLDhCQUFxQixFQUFpQkYsS0FBSztRQUNsRDtRQUVBLE1BQU1VLFNBQVMsTUFBTUMsSUFBQUEsZUFBTSxFQUFDSjtRQUU1QixPQUFPRztJQUNUO0FBQ0YifQ==