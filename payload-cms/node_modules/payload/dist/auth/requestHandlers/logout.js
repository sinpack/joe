"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return logoutHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _logout = /*#__PURE__*/ _interop_require_default(require("../operations/logout"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function logoutHandler(req, res, next) {
    try {
        const message = await (0, _logout.default)({
            collection: req.collection,
            req,
            res
        });
        return res.status(_httpstatus.default.OK).json({
            message
        });
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9sb2dvdXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgbG9nb3V0IGZyb20gJy4uL29wZXJhdGlvbnMvbG9nb3V0J1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dvdXRIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPFJlc3BvbnNlPHsgbWVzc2FnZTogc3RyaW5nIH0+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBsb2dvdXQoe1xuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICByZXEsXG4gICAgICByZXMsXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oeyBtZXNzYWdlIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJsb2dvdXRIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm1lc3NhZ2UiLCJsb2dvdXQiLCJjb2xsZWN0aW9uIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFRQTs7O2VBQThCQTs7O21FQU5QOytEQUlKOzs7Ozs7QUFFSixlQUFlQSxjQUM1QkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7SUFFbEIsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUMsSUFBQUEsZUFBTSxFQUFDO1lBQzNCQyxZQUFZTCxJQUFJSyxVQUFVO1lBQzFCTDtZQUNBQztRQUNGO1FBRUEsT0FBT0EsSUFBSUssTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQztZQUFFTjtRQUFRO0lBQ2xELEVBQUUsT0FBT08sT0FBTztRQUNkLE9BQU9SLEtBQUtRO0lBQ2Q7QUFDRiJ9