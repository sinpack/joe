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
const _resetPassword = /*#__PURE__*/ _interop_require_default(require("../operations/resetPassword"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function resetPasswordHandler(req, res, next) {
    try {
        const result = await (0, _resetPassword.default)({
            collection: req.collection,
            data: req.body,
            req,
            res
        });
        return res.status(_httpstatus.default.OK).json({
            message: 'Password reset successfully.',
            token: result.token,
            user: result.user
        });
    } catch (error) {
        return next(error);
    }
}
const _default = resetPasswordHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZXNldFBhc3N3b3JkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IHJlc2V0UGFzc3dvcmQgZnJvbSAnLi4vb3BlcmF0aW9ucy9yZXNldFBhc3N3b3JkJ1xuXG5hc3luYyBmdW5jdGlvbiByZXNldFBhc3N3b3JkSGFuZGxlcihcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNldFBhc3N3b3JkKHtcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgZGF0YTogcmVxLmJvZHksXG4gICAgICByZXEsXG4gICAgICByZXMsXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oe1xuICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWxseS4nLFxuICAgICAgdG9rZW46IHJlc3VsdC50b2tlbixcbiAgICAgIHVzZXI6IHJlc3VsdC51c2VyLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzZXRQYXNzd29yZEhhbmRsZXJcbiJdLCJuYW1lcyI6WyJyZXNldFBhc3N3b3JkSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJyZXN1bHQiLCJyZXNldFBhc3N3b3JkIiwiY29sbGVjdGlvbiIsImRhdGEiLCJib2R5Iiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVzZXIiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQStCQTs7O2VBQUE7OzttRUE3QnVCO3NFQUlHOzs7Ozs7QUFFMUIsZUFBZUEscUJBQ2JDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCO0lBRWxCLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1DLElBQUFBLHNCQUFhLEVBQUM7WUFDakNDLFlBQVlMLElBQUlLLFVBQVU7WUFDMUJDLE1BQU1OLElBQUlPLElBQUk7WUFDZFA7WUFDQUM7UUFDRjtRQUVBLE9BQU9BLElBQUlPLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUM7WUFDcENDLFNBQVM7WUFDVEMsT0FBT1YsT0FBT1UsS0FBSztZQUNuQkMsTUFBTVgsT0FBT1csSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9iLEtBQUthO0lBQ2Q7QUFDRjtNQUVBLFdBQWVoQiJ9