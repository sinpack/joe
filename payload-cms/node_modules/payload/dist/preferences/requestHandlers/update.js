"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
const _update = /*#__PURE__*/ _interop_require_default(require("../operations/update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function updateHandler(req, res, next) {
    try {
        const doc = await (0, _update.default)({
            key: req.params.key,
            req,
            user: req.user,
            value: req.body.value || req.body
        });
        return res.status(_httpstatus.default.OK).json({
            ...(0, _formatSuccess.default)(req.t('general:updatedSuccessfully'), 'message'),
            doc
        });
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAnLi4vLi4vJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5cbmltcG9ydCBmb3JtYXRTdWNjZXNzUmVzcG9uc2UgZnJvbSAnLi4vLi4vZXhwcmVzcy9yZXNwb25zZXMvZm9ybWF0U3VjY2VzcydcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi4vb3BlcmF0aW9ucy91cGRhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bJ19wcmVmZXJlbmNlJ10+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvYyA9IGF3YWl0IHVwZGF0ZSh7XG4gICAgICBrZXk6IHJlcS5wYXJhbXMua2V5LFxuICAgICAgcmVxLFxuICAgICAgdXNlcjogcmVxLnVzZXIsXG4gICAgICB2YWx1ZTogcmVxLmJvZHkudmFsdWUgfHwgcmVxLmJvZHksXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oe1xuICAgICAgLi4uZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlKHJlcS50KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKSwgJ21lc3NhZ2UnKSxcbiAgICAgIGRvYyxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsidXBkYXRlSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJkb2MiLCJ1cGRhdGUiLCJrZXkiLCJwYXJhbXMiLCJ1c2VyIiwidmFsdWUiLCJib2R5Iiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsImZvcm1hdFN1Y2Nlc3NSZXNwb25zZSIsInQiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBVUE7OztlQUE4QkE7OzttRUFSUDtzRUFLVzsrREFDZjs7Ozs7O0FBRUosZUFBZUEsY0FDNUJDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCO0lBRWxCLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1DLElBQUFBLGVBQU0sRUFBQztZQUN2QkMsS0FBS0wsSUFBSU0sTUFBTSxDQUFDRCxHQUFHO1lBQ25CTDtZQUNBTyxNQUFNUCxJQUFJTyxJQUFJO1lBQ2RDLE9BQU9SLElBQUlTLElBQUksQ0FBQ0QsS0FBSyxJQUFJUixJQUFJUyxJQUFJO1FBQ25DO1FBRUEsT0FBT1IsSUFBSVMsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQztZQUNwQyxHQUFHQyxJQUFBQSxzQkFBcUIsRUFBQ2QsSUFBSWUsQ0FBQyxDQUFDLGdDQUFnQyxVQUFVO1lBQ3pFWjtRQUNGO0lBQ0YsRUFBRSxPQUFPYSxPQUFPO1FBQ2QsT0FBT2QsS0FBS2M7SUFDZDtBQUNGIn0=