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
const _nodemailer = /*#__PURE__*/ _interop_require_default(require("nodemailer"));
const _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const mockEmailHandler = async (emailConfig)=>{
    const testAccount = await _nodemailer.default.createTestAccount();
    const smtpOptions = {
        ...emailConfig,
        auth: {
            pass: testAccount.pass,
            user: testAccount.user
        },
        fromAddress: emailConfig?.fromAddress || _defaults.defaults.fromAddress,
        fromName: emailConfig?.fromName || _defaults.defaults.fromName,
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false
    };
    return {
        account: testAccount,
        transport: _nodemailer.default.createTransport(smtpOptions)
    };
};
const _default = mockEmailHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9tb2NrSGFuZGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJ1xuXG5pbXBvcnQgdHlwZSB7IEVtYWlsT3B0aW9ucyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgTW9ja0VtYWlsSGFuZGxlciB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGRlZmF1bHRzIGFzIGVtYWlsRGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzJ1xuXG5jb25zdCBtb2NrRW1haWxIYW5kbGVyID0gYXN5bmMgKGVtYWlsQ29uZmlnOiBFbWFpbE9wdGlvbnMpOiBQcm9taXNlPE1vY2tFbWFpbEhhbmRsZXI+ID0+IHtcbiAgY29uc3QgdGVzdEFjY291bnQgPSBhd2FpdCBub2RlbWFpbGVyLmNyZWF0ZVRlc3RBY2NvdW50KClcblxuICBjb25zdCBzbXRwT3B0aW9ucyA9IHtcbiAgICAuLi5lbWFpbENvbmZpZyxcbiAgICBhdXRoOiB7XG4gICAgICBwYXNzOiB0ZXN0QWNjb3VudC5wYXNzLFxuICAgICAgdXNlcjogdGVzdEFjY291bnQudXNlcixcbiAgICB9LFxuICAgIGZyb21BZGRyZXNzOiBlbWFpbENvbmZpZz8uZnJvbUFkZHJlc3MgfHwgZW1haWxEZWZhdWx0cy5mcm9tQWRkcmVzcyxcbiAgICBmcm9tTmFtZTogZW1haWxDb25maWc/LmZyb21OYW1lIHx8IGVtYWlsRGVmYXVsdHMuZnJvbU5hbWUsXG4gICAgaG9zdDogJ3NtdHAuZXRoZXJlYWwuZW1haWwnLFxuICAgIHBvcnQ6IDU4NyxcbiAgICBzZWN1cmU6IGZhbHNlLFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50OiB0ZXN0QWNjb3VudCxcbiAgICB0cmFuc3BvcnQ6IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHNtdHBPcHRpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb2NrRW1haWxIYW5kbGVyXG4iXSwibmFtZXMiOlsibW9ja0VtYWlsSGFuZGxlciIsImVtYWlsQ29uZmlnIiwidGVzdEFjY291bnQiLCJub2RlbWFpbGVyIiwiY3JlYXRlVGVzdEFjY291bnQiLCJzbXRwT3B0aW9ucyIsImF1dGgiLCJwYXNzIiwidXNlciIsImZyb21BZGRyZXNzIiwiZW1haWxEZWZhdWx0cyIsImZyb21OYW1lIiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhY2NvdW50IiwidHJhbnNwb3J0IiwiY3JlYXRlVHJhbnNwb3J0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE2QkE7OztlQUFBOzs7bUVBN0J1QjswQkFLbUI7Ozs7OztBQUUxQyxNQUFNQSxtQkFBbUIsT0FBT0M7SUFDOUIsTUFBTUMsY0FBYyxNQUFNQyxtQkFBVSxDQUFDQyxpQkFBaUI7SUFFdEQsTUFBTUMsY0FBYztRQUNsQixHQUFHSixXQUFXO1FBQ2RLLE1BQU07WUFDSkMsTUFBTUwsWUFBWUssSUFBSTtZQUN0QkMsTUFBTU4sWUFBWU0sSUFBSTtRQUN4QjtRQUNBQyxhQUFhUixhQUFhUSxlQUFlQyxrQkFBYSxDQUFDRCxXQUFXO1FBQ2xFRSxVQUFVVixhQUFhVSxZQUFZRCxrQkFBYSxDQUFDQyxRQUFRO1FBQ3pEQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsUUFBUTtJQUNWO0lBRUEsT0FBTztRQUNMQyxTQUFTYjtRQUNUYyxXQUFXYixtQkFBVSxDQUFDYyxlQUFlLENBQUNaO0lBQ3hDO0FBQ0Y7TUFFQSxXQUFlTCJ9