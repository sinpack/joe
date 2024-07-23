/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getDeleteResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _deleteByID = /*#__PURE__*/ _interop_require_default(require("../../operations/deleteByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getDeleteResolver(collection) {
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
            collection,
            depth: 0,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID')
        };
        const result = await (0, _deleteByID.default)(options);
        return result;
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9kZWxldGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB0eXBlIHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgdHlwZSB7IEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBkZWxldGVCeUlEIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZGVsZXRlQnlJRCdcblxuZXhwb3J0IHR5cGUgUmVzb2x2ZXI8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4gPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBmYWxsYmFja0xvY2FsZT86IHN0cmluZ1xuICAgIGxvY2FsZT86IHN0cmluZ1xuICB9LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICAgIHJlczogUmVzcG9uc2VcbiAgfSxcbikgPT4gUHJvbWlzZTxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlbGV0ZVJlc29sdmVyPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uLFxuKTogUmVzb2x2ZXI8VFNsdWc+IHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGxldCB7IHJlcSB9ID0gY29udGV4dFxuICAgIGNvbnN0IGxvY2FsZSA9IHJlcS5sb2NhbGVcbiAgICBjb25zdCBmYWxsYmFja0xvY2FsZSA9IHJlcS5mYWxsYmFja0xvY2FsZVxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICdsb2NhbGUnKVxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICdmYWxsYmFja0xvY2FsZScpXG4gICAgcmVxLmxvY2FsZSA9IGFyZ3MubG9jYWxlIHx8IGxvY2FsZVxuICAgIHJlcS5mYWxsYmFja0xvY2FsZSA9IGFyZ3MuZmFsbGJhY2tMb2NhbGUgfHwgZmFsbGJhY2tMb2NhbGVcbiAgICBpZiAoIXJlcS5xdWVyeSkgcmVxLnF1ZXJ5ID0ge31cblxuICAgIGNvbnN0IGRyYWZ0OiBib29sZWFuID1cbiAgICAgIGFyZ3MuZHJhZnQgPz8gcmVxLnF1ZXJ5Py5kcmFmdCA9PT0gJ2ZhbHNlJ1xuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogcmVxLnF1ZXJ5Py5kcmFmdCA9PT0gJ3RydWUnXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIGlmICh0eXBlb2YgZHJhZnQgPT09ICdib29sZWFuJykgcmVxLnF1ZXJ5LmRyYWZ0ID0gU3RyaW5nKGRyYWZ0KVxuXG4gICAgY29udGV4dC5yZXEgPSByZXFcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpZDogYXJncy5pZCxcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBkZXB0aDogMCxcbiAgICAgIHJlcTogaXNvbGF0ZU9iamVjdFByb3BlcnR5PFBheWxvYWRSZXF1ZXN0PihyZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlQnlJRChvcHRpb25zKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyXG59XG4iXSwibmFtZXMiOlsiZ2V0RGVsZXRlUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJyZXEiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsImlzb2xhdGVPYmplY3RQcm9wZXJ0eSIsInF1ZXJ5IiwiZHJhZnQiLCJ1bmRlZmluZWQiLCJTdHJpbmciLCJvcHRpb25zIiwiaWQiLCJkZXB0aCIsInJlc3VsdCIsImRlbGV0ZUJ5SUQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQXNCcEM7OztlQUF3QkE7Ozs4RUFmVTttRUFDWDs7Ozs7O0FBY1IsU0FBU0Esa0JBQ3RCQyxVQUFzQjtJQUV0QixlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHRDtRQUNkLE1BQU1FLFNBQVNELElBQUlDLE1BQU07UUFDekIsTUFBTUMsaUJBQWlCRixJQUFJRSxjQUFjO1FBQ3pDRixNQUFNRyxJQUFBQSw4QkFBcUIsRUFBQ0gsS0FBSztRQUNqQ0EsTUFBTUcsSUFBQUEsOEJBQXFCLEVBQUNILEtBQUs7UUFDakNBLElBQUlDLE1BQU0sR0FBR0gsS0FBS0csTUFBTSxJQUFJQTtRQUM1QkQsSUFBSUUsY0FBYyxHQUFHSixLQUFLSSxjQUFjLElBQUlBO1FBQzVDLElBQUksQ0FBQ0YsSUFBSUksS0FBSyxFQUFFSixJQUFJSSxLQUFLLEdBQUcsQ0FBQztRQUU3QixNQUFNQyxRQUNKUCxLQUFLTyxLQUFLLElBQUlMLElBQUlJLEtBQUssRUFBRUMsVUFBVSxVQUMvQixRQUNBTCxJQUFJSSxLQUFLLEVBQUVDLFVBQVUsU0FDckIsT0FDQUM7UUFDTixJQUFJLE9BQU9ELFVBQVUsV0FBV0wsSUFBSUksS0FBSyxDQUFDQyxLQUFLLEdBQUdFLE9BQU9GO1FBRXpETixRQUFRQyxHQUFHLEdBQUdBO1FBRWQsTUFBTVEsVUFBVTtZQUNkQyxJQUFJWCxLQUFLVyxFQUFFO1lBQ1hkO1lBQ0FlLE9BQU87WUFDUFYsS0FBS0csSUFBQUEsOEJBQXFCLEVBQWlCSCxLQUFLO1FBQ2xEO1FBRUEsTUFBTVcsU0FBUyxNQUFNQyxJQUFBQSxtQkFBVSxFQUFDSjtRQUVoQyxPQUFPRztJQUNUO0lBRUEsT0FBT2Y7QUFDVCJ9