"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unlockHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _unlock = /*#__PURE__*/ _interop_require_default(require("../operations/unlock"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function unlockHandler(req, res, next) {
    try {
        await (0, _unlock.default)({
            collection: req.collection,
            data: {
                email: req.body.email
            },
            req
        });
        return res.status(_httpstatus.default.OK).json({
            message: 'Success'
        });
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy91bmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgdW5sb2NrIGZyb20gJy4uL29wZXJhdGlvbnMvdW5sb2NrJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1bmxvY2tIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIGF3YWl0IHVubG9jayh7XG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IHsgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0sXG4gICAgICByZXEsXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oe1xuICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3MnLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1bmxvY2tIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInVubG9jayIsImNvbGxlY3Rpb24iLCJkYXRhIiwiZW1haWwiLCJib2R5Iiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFRQTs7O2VBQThCQTs7O21FQU5QOytEQUlKOzs7Ozs7QUFFSixlQUFlQSxjQUM1QkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7SUFFbEIsSUFBSTtRQUNGLE1BQU1DLElBQUFBLGVBQU0sRUFBQztZQUNYQyxZQUFZSixJQUFJSSxVQUFVO1lBQzFCQyxNQUFNO2dCQUFFQyxPQUFPTixJQUFJTyxJQUFJLENBQUNELEtBQUs7WUFBQztZQUM5Qk47UUFDRjtRQUVBLE9BQU9DLElBQUlPLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUM7WUFDcENDLFNBQVM7UUFDWDtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9YLEtBQUtXO0lBQ2Q7QUFDRiJ9