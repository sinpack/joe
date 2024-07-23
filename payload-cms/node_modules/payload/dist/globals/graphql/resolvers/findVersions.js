"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionsResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _findVersions = /*#__PURE__*/ _interop_require_default(require("../../operations/findVersions"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findVersionsResolver(globalConfig) {
    return async function resolver(_, args, context) {
        const options = {
            depth: 0,
            globalConfig,
            limit: args.limit,
            page: args.page,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID'),
            sort: args.sort,
            where: args.where
        };
        const result = await (0, _findVersions.default)(options);
        return result;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2ZpbmRWZXJzaW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50LCBXaGVyZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbnMnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgICBsaW1pdD86IG51bWJlclxuICAgIGxvY2FsZT86IHN0cmluZ1xuICAgIHBhZ2U/OiBudW1iZXJcbiAgICBzb3J0Pzogc3RyaW5nXG4gICAgd2hlcmU6IFdoZXJlXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gICAgcmVzOiBSZXNwb25zZVxuICB9LFxuKSA9PiBQcm9taXNlPERvY3VtZW50PlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kVmVyc2lvbnNSZXNvbHZlcihnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZyk6IFJlc29sdmVyIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgZGVwdGg6IDAsXG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICBsaW1pdDogYXJncy5saW1pdCxcbiAgICAgIHBhZ2U6IGFyZ3MucGFnZSxcbiAgICAgIHJlcTogaXNvbGF0ZU9iamVjdFByb3BlcnR5PFBheWxvYWRSZXF1ZXN0Pihjb250ZXh0LnJlcSwgJ3RyYW5zYWN0aW9uSUQnKSxcbiAgICAgIHNvcnQ6IGFyZ3Muc29ydCxcbiAgICAgIHdoZXJlOiBhcmdzLndoZXJlLFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbmRWZXJzaW9ucyhvcHRpb25zKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG4iXSwibmFtZXMiOlsiZmluZFZlcnNpb25zUmVzb2x2ZXIiLCJnbG9iYWxDb25maWciLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsIm9wdGlvbnMiLCJkZXB0aCIsImxpbWl0IiwicGFnZSIsInJlcSIsImlzb2xhdGVPYmplY3RQcm9wZXJ0eSIsInNvcnQiLCJ3aGVyZSIsInJlc3VsdCIsImZpbmRWZXJzaW9ucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXlCQTs7O2VBQXdCQTs7OzhFQW5CVTtxRUFDVDs7Ozs7O0FBa0JWLFNBQVNBLHFCQUFxQkMsWUFBbUM7SUFDOUUsT0FBTyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUM3QyxNQUFNQyxVQUFVO1lBQ2RDLE9BQU87WUFDUE47WUFDQU8sT0FBT0osS0FBS0ksS0FBSztZQUNqQkMsTUFBTUwsS0FBS0ssSUFBSTtZQUNmQyxLQUFLQyxJQUFBQSw4QkFBcUIsRUFBaUJOLFFBQVFLLEdBQUcsRUFBRTtZQUN4REUsTUFBTVIsS0FBS1EsSUFBSTtZQUNmQyxPQUFPVCxLQUFLUyxLQUFLO1FBQ25CO1FBRUEsTUFBTUMsU0FBUyxNQUFNQyxJQUFBQSxxQkFBWSxFQUFDVDtRQUVsQyxPQUFPUTtJQUNUO0FBQ0YifQ==