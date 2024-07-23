"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return docAccessRequestHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _docAccess = require("../operations/docAccess");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function docAccessRequestHandler(req, res, next, globalConfig) {
    try {
        const accessResults = await (0, _docAccess.docAccess)({
            globalConfig,
            req
        });
        return res.status(_httpstatus.default.OK).json(accessResults);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9kb2NBY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvblBlcm1pc3Npb24sIEdsb2JhbFBlcm1pc3Npb24gfSBmcm9tICcuLi8uLi9hdXRoJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZG9jQWNjZXNzIH0gZnJvbSAnLi4vb3BlcmF0aW9ucy9kb2NBY2Nlc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRvY0FjY2Vzc1JlcXVlc3RIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gIGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnLFxuKTogUHJvbWlzZTxSZXNwb25zZTxDb2xsZWN0aW9uUGVybWlzc2lvbiB8IEdsb2JhbFBlcm1pc3Npb24+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSBhd2FpdCBkb2NBY2Nlc3Moe1xuICAgICAgZ2xvYmFsQ29uZmlnLFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKGFjY2Vzc1Jlc3VsdHMpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJnbG9iYWxDb25maWciLCJhY2Nlc3NSZXN1bHRzIiwiZG9jQWNjZXNzIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQThCQTs7O21FQVJQOzJCQU1HOzs7Ozs7QUFFWCxlQUFlQSx3QkFDNUJDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCLEVBQ2xCQyxZQUFtQztJQUVuQyxJQUFJO1FBQ0YsTUFBTUMsZ0JBQWdCLE1BQU1DLElBQUFBLG9CQUFTLEVBQUM7WUFDcENGO1lBQ0FIO1FBQ0Y7UUFFQSxPQUFPQyxJQUFJSyxNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFBRUMsSUFBSSxDQUFDTDtJQUN4QyxFQUFFLE9BQU9NLE9BQU87UUFDZCxPQUFPUixLQUFLUTtJQUNkO0FBQ0YifQ==