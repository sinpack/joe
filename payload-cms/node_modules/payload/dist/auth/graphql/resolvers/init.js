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
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _init = /*#__PURE__*/ _interop_require_default(require("../../operations/init"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        };
        return (0, _init.default)(options);
    }
    return resolver;
}
const _default = initResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2luaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBpbml0IGZyb20gJy4uLy4uL29wZXJhdGlvbnMvaW5pdCdcblxuZnVuY3Rpb24gaW5pdFJlc29sdmVyKGNvbGxlY3Rpb246IHN0cmluZykge1xuICBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4oY29udGV4dC5yZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXQob3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlclxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0UmVzb2x2ZXJcbiJdLCJuYW1lcyI6WyJpbml0UmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwicmVxIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwiaW5pdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBa0JBOzs7ZUFBQTs7OzhFQWhCa0M7NkRBQ2pCOzs7Ozs7QUFFakIsU0FBU0EsYUFBYUMsVUFBa0I7SUFDdEMsZUFBZUMsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87UUFDdEMsTUFBTUMsVUFBVTtZQUNkTDtZQUNBTSxLQUFLQyxJQUFBQSw4QkFBcUIsRUFBaUJILFFBQVFFLEdBQUcsRUFBRTtRQUMxRDtRQUVBLE9BQU9FLElBQUFBLGFBQUksRUFBQ0g7SUFDZDtJQUVBLE9BQU9KO0FBQ1Q7TUFFQSxXQUFlRiJ9