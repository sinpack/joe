/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _updateByID = /*#__PURE__*/ _interop_require_default(require("../../operations/updateByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function updateResolver(collection) {
    async function resolver(_, args, context) {
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
            id: args.id,
            autosave: args.autosave,
            collection,
            data: args.data,
            depth: 0,
            draft: args.draft,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID')
        };
        const result = await (0, _updateByID.default)(options);
        return result;
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy91cGRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB0eXBlIHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgdHlwZSB7IEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCB1cGRhdGVCeUlEIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvdXBkYXRlQnlJRCdcblxuZXhwb3J0IHR5cGUgUmVzb2x2ZXI8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4gPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBhdXRvc2F2ZTogYm9vbGVhblxuICAgIGRhdGE6IEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXVxuICAgIGRyYWZ0OiBib29sZWFuXG4gICAgaWQ6IG51bWJlciB8IHN0cmluZ1xuICAgIGxvY2FsZT86IHN0cmluZ1xuICB9LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICAgIHJlczogUmVzcG9uc2VcbiAgfSxcbikgPT4gUHJvbWlzZTxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVJlc29sdmVyPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uLFxuKTogUmVzb2x2ZXI8VFNsdWc+IHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGxldCB7IHJlcSB9ID0gY29udGV4dFxuICAgIGNvbnN0IGxvY2FsZSA9IHJlcS5sb2NhbGVcbiAgICBjb25zdCBmYWxsYmFja0xvY2FsZSA9IHJlcS5mYWxsYmFja0xvY2FsZVxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICdsb2NhbGUnKVxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICdmYWxsYmFja0xvY2FsZScpXG4gICAgcmVxLmxvY2FsZSA9IGFyZ3MubG9jYWxlIHx8IGxvY2FsZVxuICAgIHJlcS5mYWxsYmFja0xvY2FsZSA9IGFyZ3MuZmFsbGJhY2tMb2NhbGUgfHwgZmFsbGJhY2tMb2NhbGVcbiAgICBpZiAoIXJlcS5xdWVyeSkgcmVxLnF1ZXJ5ID0ge31cblxuICAgIGNvbnN0IGRyYWZ0OiBib29sZWFuID1cbiAgICAgIGFyZ3MuZHJhZnQgPz8gcmVxLnF1ZXJ5Py5kcmFmdCA9PT0gJ2ZhbHNlJ1xuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogcmVxLnF1ZXJ5Py5kcmFmdCA9PT0gJ3RydWUnXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIGlmICh0eXBlb2YgZHJhZnQgPT09ICdib29sZWFuJykgcmVxLnF1ZXJ5LmRyYWZ0ID0gU3RyaW5nKGRyYWZ0KVxuXG4gICAgY29udGV4dC5yZXEgPSByZXFcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpZDogYXJncy5pZCxcbiAgICAgIGF1dG9zYXZlOiBhcmdzLmF1dG9zYXZlLFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IGFyZ3MuZGF0YSxcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgZHJhZnQ6IGFyZ3MuZHJhZnQsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4ocmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZUJ5SUQ8VFNsdWc+KG9wdGlvbnMpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXJcbn1cbiJdLCJuYW1lcyI6WyJ1cGRhdGVSZXNvbHZlciIsImNvbGxlY3Rpb24iLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsInJlcSIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwicXVlcnkiLCJkcmFmdCIsInVuZGVmaW5lZCIsIlN0cmluZyIsIm9wdGlvbnMiLCJpZCIsImF1dG9zYXZlIiwiZGF0YSIsImRlcHRoIiwicmVzdWx0IiwidXBkYXRlQnlJRCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBeUJwQzs7O2VBQXdCQTs7OzhFQWxCVTttRUFDWDs7Ozs7O0FBaUJSLFNBQVNBLGVBQ3RCQyxVQUFzQjtJQUV0QixlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHRDtRQUNkLE1BQU1FLFNBQVNELElBQUlDLE1BQU07UUFDekIsTUFBTUMsaUJBQWlCRixJQUFJRSxjQUFjO1FBQ3pDRixNQUFNRyxJQUFBQSw4QkFBcUIsRUFBQ0gsS0FBSztRQUNqQ0EsTUFBTUcsSUFBQUEsOEJBQXFCLEVBQUNILEtBQUs7UUFDakNBLElBQUlDLE1BQU0sR0FBR0gsS0FBS0csTUFBTSxJQUFJQTtRQUM1QkQsSUFBSUUsY0FBYyxHQUFHSixLQUFLSSxjQUFjLElBQUlBO1FBQzVDLElBQUksQ0FBQ0YsSUFBSUksS0FBSyxFQUFFSixJQUFJSSxLQUFLLEdBQUcsQ0FBQztRQUU3QixNQUFNQyxRQUNKUCxLQUFLTyxLQUFLLElBQUlMLElBQUlJLEtBQUssRUFBRUMsVUFBVSxVQUMvQixRQUNBTCxJQUFJSSxLQUFLLEVBQUVDLFVBQVUsU0FDckIsT0FDQUM7UUFDTixJQUFJLE9BQU9ELFVBQVUsV0FBV0wsSUFBSUksS0FBSyxDQUFDQyxLQUFLLEdBQUdFLE9BQU9GO1FBRXpETixRQUFRQyxHQUFHLEdBQUdBO1FBRWQsTUFBTVEsVUFBVTtZQUNkQyxJQUFJWCxLQUFLVyxFQUFFO1lBQ1hDLFVBQVVaLEtBQUtZLFFBQVE7WUFDdkJmO1lBQ0FnQixNQUFNYixLQUFLYSxJQUFJO1lBQ2ZDLE9BQU87WUFDUFAsT0FBT1AsS0FBS08sS0FBSztZQUNqQkwsS0FBS0csSUFBQUEsOEJBQXFCLEVBQWlCSCxLQUFLO1FBQ2xEO1FBRUEsTUFBTWEsU0FBUyxNQUFNQyxJQUFBQSxtQkFBVSxFQUFRTjtRQUV2QyxPQUFPSztJQUNUO0lBRUEsT0FBT2pCO0FBQ1QifQ==