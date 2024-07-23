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
const _errors = require("../../../errors");
const _createLocalReq = require("../../../utilities/createLocalReq");
const _verifyEmail = /*#__PURE__*/ _interop_require_default(require("../verifyEmail"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function localVerifyEmail(payload, options) {
    const { collection: collectionSlug, token } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new _errors.APIError(`The collection with slug ${String(collectionSlug)} can't be found. Verify Email Operation.`);
    }
    const req = (0, _createLocalReq.createLocalReq)(options, payload);
    return (0, _verifyEmail.default)({
        collection,
        req,
        token
    });
}
const _default = localVerifyEmail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9jYWwvdmVyaWZ5RW1haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZW5lcmF0ZWRUeXBlcywgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8nXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnXG5cbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJ1xuaW1wb3J0IHsgY3JlYXRlTG9jYWxSZXEgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlTG9jYWxSZXEnXG5pbXBvcnQgdmVyaWZ5RW1haWwgZnJvbSAnLi4vdmVyaWZ5RW1haWwnXG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IHtcbiAgY29sbGVjdGlvbjogVFxuICBjb250ZXh0PzogUmVxdWVzdENvbnRleHRcbiAgcmVxPzogUGF5bG9hZFJlcXVlc3RcbiAgdG9rZW46IHN0cmluZ1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2NhbFZlcmlmeUVtYWlsPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VD4sXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uU2x1ZywgdG9rZW4gfSA9IG9wdGlvbnNcblxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z11cblxuICBpZiAoIWNvbGxlY3Rpb24pIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoXG4gICAgICBgVGhlIGNvbGxlY3Rpb24gd2l0aCBzbHVnICR7U3RyaW5nKGNvbGxlY3Rpb25TbHVnKX0gY2FuJ3QgYmUgZm91bmQuIFZlcmlmeSBFbWFpbCBPcGVyYXRpb24uYCxcbiAgICApXG4gIH1cblxuICBjb25zdCByZXEgPSBjcmVhdGVMb2NhbFJlcShvcHRpb25zLCBwYXlsb2FkKVxuXG4gIHJldHVybiB2ZXJpZnlFbWFpbCh7XG4gICAgY29sbGVjdGlvbixcbiAgICByZXEsXG4gICAgdG9rZW4sXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsVmVyaWZ5RW1haWxcbiJdLCJuYW1lcyI6WyJsb2NhbFZlcmlmeUVtYWlsIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvblNsdWciLCJ0b2tlbiIsImNvbGxlY3Rpb25zIiwiQVBJRXJyb3IiLCJTdHJpbmciLCJyZXEiLCJjcmVhdGVMb2NhbFJlcSIsInZlcmlmeUVtYWlsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBc0NBOzs7ZUFBQTs7O3dCQWxDeUI7Z0NBQ007b0VBQ1A7Ozs7OztBQVN4QixlQUFlQSxpQkFDYkMsT0FBZ0IsRUFDaEJDLE9BQW1CO0lBRW5CLE1BQU0sRUFBRUMsWUFBWUMsY0FBYyxFQUFFQyxLQUFLLEVBQUUsR0FBR0g7SUFFOUMsTUFBTUMsYUFBYUYsUUFBUUssV0FBVyxDQUFDRixlQUFlO0lBRXRELElBQUksQ0FBQ0QsWUFBWTtRQUNmLE1BQU0sSUFBSUksZ0JBQVEsQ0FDaEIsQ0FBQyx5QkFBeUIsRUFBRUMsT0FBT0osZ0JBQWdCLHdDQUF3QyxDQUFDO0lBRWhHO0lBRUEsTUFBTUssTUFBTUMsSUFBQUEsOEJBQWMsRUFBQ1IsU0FBU0Q7SUFFcEMsT0FBT1UsSUFBQUEsb0JBQVcsRUFBQztRQUNqQlI7UUFDQU07UUFDQUo7SUFDRjtBQUNGO01BRUEsV0FBZUwifQ==