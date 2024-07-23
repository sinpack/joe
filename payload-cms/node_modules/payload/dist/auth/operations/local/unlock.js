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
const _unlock = /*#__PURE__*/ _interop_require_default(require("../unlock"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function localUnlock(payload, options) {
    const { collection: collectionSlug, data, overrideAccess = true } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new _errors.APIError(`The collection with slug ${String(collectionSlug)} can't be found. Unlock Operation.`);
    }
    const req = (0, _createLocalReq.createLocalReq)(options, payload);
    return (0, _unlock.default)({
        collection,
        data,
        overrideAccess,
        req
    });
}
const _default = localUnlock;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9jYWwvdW5sb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgR2VuZXJhdGVkVHlwZXMsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLi9wYXlsb2FkJ1xuXG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uLy4uL2Vycm9ycydcbmltcG9ydCB7IGNyZWF0ZUxvY2FsUmVxIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUxvY2FsUmVxJ1xuaW1wb3J0IHVubG9jayBmcm9tICcuLi91bmxvY2snXG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IHtcbiAgY29sbGVjdGlvbjogVFxuICBjb250ZXh0PzogUmVxdWVzdENvbnRleHRcbiAgZGF0YToge1xuICAgIGVtYWlsXG4gIH1cbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgcmVxPzogUGF5bG9hZFJlcXVlc3Rcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9jYWxVbmxvY2s8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgcGF5bG9hZDogUGF5bG9hZCxcbiAgb3B0aW9uczogT3B0aW9uczxUPixcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb246IGNvbGxlY3Rpb25TbHVnLCBkYXRhLCBvdmVycmlkZUFjY2VzcyA9IHRydWUgfSA9IG9wdGlvbnNcblxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z11cblxuICBpZiAoIWNvbGxlY3Rpb24pIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoXG4gICAgICBgVGhlIGNvbGxlY3Rpb24gd2l0aCBzbHVnICR7U3RyaW5nKGNvbGxlY3Rpb25TbHVnKX0gY2FuJ3QgYmUgZm91bmQuIFVubG9jayBPcGVyYXRpb24uYCxcbiAgICApXG4gIH1cblxuICBjb25zdCByZXEgPSBjcmVhdGVMb2NhbFJlcShvcHRpb25zLCBwYXlsb2FkKVxuXG4gIHJldHVybiB1bmxvY2soe1xuICAgIGNvbGxlY3Rpb24sXG4gICAgZGF0YSxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICByZXEsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsVW5sb2NrXG4iXSwibmFtZXMiOlsibG9jYWxVbmxvY2siLCJwYXlsb2FkIiwib3B0aW9ucyIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uU2x1ZyIsImRhdGEiLCJvdmVycmlkZUFjY2VzcyIsImNvbGxlY3Rpb25zIiwiQVBJRXJyb3IiLCJTdHJpbmciLCJyZXEiLCJjcmVhdGVMb2NhbFJlcSIsInVubG9jayJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEwQ0E7OztlQUFBOzs7d0JBdEN5QjtnQ0FDTTsrREFDWjs7Ozs7O0FBWW5CLGVBQWVBLFlBQ2JDLE9BQWdCLEVBQ2hCQyxPQUFtQjtJQUVuQixNQUFNLEVBQUVDLFlBQVlDLGNBQWMsRUFBRUMsSUFBSSxFQUFFQyxpQkFBaUIsSUFBSSxFQUFFLEdBQUdKO0lBRXBFLE1BQU1DLGFBQWFGLFFBQVFNLFdBQVcsQ0FBQ0gsZUFBZTtJQUV0RCxJQUFJLENBQUNELFlBQVk7UUFDZixNQUFNLElBQUlLLGdCQUFRLENBQ2hCLENBQUMseUJBQXlCLEVBQUVDLE9BQU9MLGdCQUFnQixrQ0FBa0MsQ0FBQztJQUUxRjtJQUVBLE1BQU1NLE1BQU1DLElBQUFBLDhCQUFjLEVBQUNULFNBQVNEO0lBRXBDLE9BQU9XLElBQUFBLGVBQU0sRUFBQztRQUNaVDtRQUNBRTtRQUNBQztRQUNBSTtJQUNGO0FBQ0Y7TUFFQSxXQUFlViJ9