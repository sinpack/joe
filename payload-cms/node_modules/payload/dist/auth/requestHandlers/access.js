"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return accessRequestHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _access = /*#__PURE__*/ _interop_require_default(require("../operations/access"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function accessRequestHandler(req, res, next) {
    try {
        const accessResults = await (0, _access.default)({
            req
        });
        return res.status(_httpstatus.default.OK).json(accessResults);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9hY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9ucyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgYWNjZXNzIGZyb20gJy4uL29wZXJhdGlvbnMvYWNjZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhY2Nlc3NSZXF1ZXN0SGFuZGxlcihcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuKTogUHJvbWlzZTxSZXNwb25zZTxQZXJtaXNzaW9ucz4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWNjZXNzUmVzdWx0cyA9IGF3YWl0IGFjY2Vzcyh7XG4gICAgICByZXEsXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oYWNjZXNzUmVzdWx0cylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChlcnJvcilcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFjY2Vzc1JlcXVlc3RIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImFjY2Vzc1Jlc3VsdHMiLCJhY2Nlc3MiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7OztlQUE4QkE7OzttRUFQUDsrREFLSjs7Ozs7O0FBRUosZUFBZUEscUJBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixJQUFJO1FBQ0YsTUFBTUMsZ0JBQWdCLE1BQU1DLElBQUFBLGVBQU0sRUFBQztZQUNqQ0o7UUFDRjtRQUVBLE9BQU9DLElBQUlJLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUNMO0lBQ3hDLEVBQUUsT0FBT00sT0FBTztRQUNkLE9BQU9QLEtBQUtPO0lBQ2Q7QUFDRiJ9