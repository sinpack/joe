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
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _verifyEmail = /*#__PURE__*/ _interop_require_default(require("../operations/verifyEmail"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function verifyEmailHandler(req, res, next) {
    try {
        await (0, _verifyEmail.default)({
            collection: req.collection,
            req,
            token: req.params.token
        });
        return res.status(_httpstatus.default.OK).json({
            message: 'Email verified successfully.'
        });
    } catch (error) {
        return next(error);
    }
}
const _default = verifyEmailHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy92ZXJpZnlFbWFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5cbmltcG9ydCB2ZXJpZnlFbWFpbCBmcm9tICcuLi9vcGVyYXRpb25zL3ZlcmlmeUVtYWlsJ1xuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlFbWFpbEhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5RW1haWwoe1xuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICByZXEsXG4gICAgICB0b2tlbjogcmVxLnBhcmFtcy50b2tlbixcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbih7XG4gICAgICBtZXNzYWdlOiAnRW1haWwgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlFbWFpbEhhbmRsZXJcbiJdLCJuYW1lcyI6WyJ2ZXJpZnlFbWFpbEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwidmVyaWZ5RW1haWwiLCJjb2xsZWN0aW9uIiwidG9rZW4iLCJwYXJhbXMiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwibWVzc2FnZSIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNEJBOzs7ZUFBQTs7O21FQTFCdUI7b0VBSUM7Ozs7OztBQUV4QixlQUFlQSxtQkFDYkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7SUFFbEIsSUFBSTtRQUNGLE1BQU1DLElBQUFBLG9CQUFXLEVBQUM7WUFDaEJDLFlBQVlKLElBQUlJLFVBQVU7WUFDMUJKO1lBQ0FLLE9BQU9MLElBQUlNLE1BQU0sQ0FBQ0QsS0FBSztRQUN6QjtRQUVBLE9BQU9KLElBQUlNLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUM7WUFDcENDLFNBQVM7UUFDWDtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9WLEtBQUtVO0lBQ2Q7QUFDRjtNQUVBLFdBQWViIn0=