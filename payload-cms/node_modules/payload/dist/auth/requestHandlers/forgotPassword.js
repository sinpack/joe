"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return forgotPasswordHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _forgotPassword = /*#__PURE__*/ _interop_require_default(require("../operations/forgotPassword"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function forgotPasswordHandler(req, res, next) {
    try {
        await (0, _forgotPassword.default)({
            collection: req.collection,
            data: {
                email: req.body.email
            },
            disableEmail: req.body.disableEmail,
            expiration: req.body.expiration,
            req
        });
        return res.status(_httpstatus.default.OK).json({
            message: 'Success'
        });
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9mb3Jnb3RQYXNzd29yZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5cbmltcG9ydCBmb3Jnb3RQYXNzd29yZCBmcm9tICcuLi9vcGVyYXRpb25zL2ZvcmdvdFBhc3N3b3JkJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZEhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZm9yZ290UGFzc3dvcmQoe1xuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiB7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9LFxuICAgICAgZGlzYWJsZUVtYWlsOiByZXEuYm9keS5kaXNhYmxlRW1haWwsXG4gICAgICBleHBpcmF0aW9uOiByZXEuYm9keS5leHBpcmF0aW9uLFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZm9yZ290UGFzc3dvcmRIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImZvcmdvdFBhc3N3b3JkIiwiY29sbGVjdGlvbiIsImRhdGEiLCJlbWFpbCIsImJvZHkiLCJkaXNhYmxlRW1haWwiLCJleHBpcmF0aW9uIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVFBOzs7ZUFBOEJBOzs7bUVBTlA7dUVBSUk7Ozs7OztBQUVaLGVBQWVBLHNCQUM1QkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7SUFFbEIsSUFBSTtRQUNGLE1BQU1DLElBQUFBLHVCQUFjLEVBQUM7WUFDbkJDLFlBQVlKLElBQUlJLFVBQVU7WUFDMUJDLE1BQU07Z0JBQUVDLE9BQU9OLElBQUlPLElBQUksQ0FBQ0QsS0FBSztZQUFDO1lBQzlCRSxjQUFjUixJQUFJTyxJQUFJLENBQUNDLFlBQVk7WUFDbkNDLFlBQVlULElBQUlPLElBQUksQ0FBQ0UsVUFBVTtZQUMvQlQ7UUFDRjtRQUVBLE9BQU9DLElBQUlTLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUM7WUFDcENDLFNBQVM7UUFDWDtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9iLEtBQUthO0lBQ2Q7QUFDRiJ9