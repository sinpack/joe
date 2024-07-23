"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return refreshHandler;
    }
});
const _refresh = /*#__PURE__*/ _interop_require_default(require("../operations/refresh"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function refreshHandler(req, res, next) {
    try {
        const result = await (0, _refresh.default)({
            collection: req.collection,
            req,
            res
        });
        return res.status(200).json({
            message: 'Token refresh successful',
            ...result
        });
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZWZyZXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgcmVmcmVzaCBmcm9tICcuLi9vcGVyYXRpb25zL3JlZnJlc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlZnJlc2goe1xuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICByZXEsXG4gICAgICByZXMsXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBtZXNzYWdlOiAnVG9rZW4gcmVmcmVzaCBzdWNjZXNzZnVsJyxcbiAgICAgIC4uLnJlc3VsdCxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsicmVmcmVzaEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVzdWx0IiwicmVmcmVzaCIsImNvbGxlY3Rpb24iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFNQTs7O2VBQThCQTs7O2dFQUZWOzs7Ozs7QUFFTCxlQUFlQSxlQUM1QkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7SUFFbEIsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTUMsSUFBQUEsZ0JBQU8sRUFBQztZQUMzQkMsWUFBWUwsSUFBSUssVUFBVTtZQUMxQkw7WUFDQUM7UUFDRjtRQUVBLE9BQU9BLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDMUJDLFNBQVM7WUFDVCxHQUFHTCxNQUFNO1FBQ1g7SUFDRixFQUFFLE9BQU9NLE9BQU87UUFDZCxPQUFPUCxLQUFLTztJQUNkO0FBQ0YifQ==