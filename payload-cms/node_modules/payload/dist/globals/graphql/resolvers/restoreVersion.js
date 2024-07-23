/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../../operations/restoreVersion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function restoreVersionResolver(globalConfig) {
    return async function resolver(_, args, context) {
        const options = {
            id: args.id,
            depth: 0,
            globalConfig,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        };
        const result = await (0, _restoreVersion.default)(options);
        return result;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL3Jlc3RvcmVWZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuLi8uLi9vcGVyYXRpb25zL3Jlc3RvcmVWZXJzaW9uJ1xuXG50eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgaWQ6IG51bWJlciB8IHN0cmluZ1xuICB9LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICAgIHJlczogUmVzcG9uc2VcbiAgfSxcbikgPT4gUHJvbWlzZTxEb2N1bWVudD5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3RvcmVWZXJzaW9uUmVzb2x2ZXIoZ2xvYmFsQ29uZmlnOiBTYW5pdGl6ZWRHbG9iYWxDb25maWcpOiBSZXNvbHZlciB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGlkOiBhcmdzLmlkLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4oY29udGV4dC5yZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzdG9yZVZlcnNpb24ob3B0aW9ucylcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXN0b3JlVmVyc2lvblJlc29sdmVyIiwiZ2xvYmFsQ29uZmlnIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwiaWQiLCJkZXB0aCIsInJlcSIsImlzb2xhdGVPYmplY3RQcm9wZXJ0eSIsInJlc3VsdCIsInJlc3RvcmVWZXJzaW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7OzsrQkFtQnBDOzs7ZUFBd0JBOzs7OEVBYlU7dUVBQ1A7Ozs7OztBQVlaLFNBQVNBLHVCQUF1QkMsWUFBbUM7SUFDaEYsT0FBTyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUM3QyxNQUFNQyxVQUFVO1lBQ2RDLElBQUlILEtBQUtHLEVBQUU7WUFDWEMsT0FBTztZQUNQUDtZQUNBUSxLQUFLQyxJQUFBQSw4QkFBcUIsRUFBaUJMLFFBQVFJLEdBQUcsRUFBRTtRQUMxRDtRQUVBLE1BQU1FLFNBQVMsTUFBTUMsSUFBQUEsdUJBQWMsRUFBQ047UUFDcEMsT0FBT0s7SUFDVDtBQUNGIn0=