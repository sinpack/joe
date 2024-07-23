"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findOneHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _findOne = /*#__PURE__*/ _interop_require_default(require("../operations/findOne"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function findOneHandler(req, res, next) {
    try {
        const result = await (0, _findOne.default)({
            key: req.params.key,
            req,
            user: req.user
        });
        return res.status(_httpstatus.default.OK).json(result || {
            message: req.t('general:notFound'),
            value: null
        });
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9yZXF1ZXN0SGFuZGxlcnMvZmluZE9uZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IHR5cGUgeyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJy4uLy4uLydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgZmluZE9uZSBmcm9tICcuLi9vcGVyYXRpb25zL2ZpbmRPbmUnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRPbmVIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPFJlc3BvbnNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddWydfcHJlZmVyZW5jZSddPiB8IHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kT25lKHtcbiAgICAgIGtleTogcmVxLnBhcmFtcy5rZXksXG4gICAgICByZXEsXG4gICAgICB1c2VyOiByZXEudXNlcixcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cyhodHRwU3RhdHVzLk9LKVxuICAgICAgLmpzb24ocmVzdWx0IHx8IHsgbWVzc2FnZTogcmVxLnQoJ2dlbmVyYWw6bm90Rm91bmQnKSwgdmFsdWU6IG51bGwgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChlcnJvcilcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpbmRPbmVIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInJlc3VsdCIsImZpbmRPbmUiLCJrZXkiLCJwYXJhbXMiLCJ1c2VyIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsIm1lc3NhZ2UiLCJ0IiwidmFsdWUiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVNBOzs7ZUFBOEJBOzs7bUVBUFA7Z0VBS0g7Ozs7OztBQUVMLGVBQWVBLGVBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNQyxJQUFBQSxnQkFBTyxFQUFDO1lBQzNCQyxLQUFLTCxJQUFJTSxNQUFNLENBQUNELEdBQUc7WUFDbkJMO1lBQ0FPLE1BQU1QLElBQUlPLElBQUk7UUFDaEI7UUFFQSxPQUFPTixJQUNKTyxNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFDcEJDLElBQUksQ0FBQ1IsVUFBVTtZQUFFUyxTQUFTWixJQUFJYSxDQUFDLENBQUM7WUFBcUJDLE9BQU87UUFBSztJQUN0RSxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPYixLQUFLYTtJQUNkO0FBQ0YifQ==