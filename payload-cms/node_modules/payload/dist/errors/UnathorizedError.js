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
const _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class UnauthorizedError extends _APIError.default {
    constructor(t){
        super(t ? t('error:unauthorized') : 'Unauthorized, you must be logged in to make this request.', _httpstatus.default.UNAUTHORIZED);
    }
}
const _default = UnauthorizedError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvVW5hdGhvcml6ZWRFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcidcblxuY2xhc3MgVW5hdXRob3JpemVkRXJyb3IgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHQ/OiBURnVuY3Rpb24pIHtcbiAgICBzdXBlcihcbiAgICAgIHQgPyB0KCdlcnJvcjp1bmF1dGhvcml6ZWQnKSA6ICdVbmF1dGhvcml6ZWQsIHlvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBtYWtlIHRoaXMgcmVxdWVzdC4nLFxuICAgICAgaHR0cFN0YXR1cy5VTkFVVEhPUklaRUQsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVuYXV0aG9yaXplZEVycm9yXG4iXSwibmFtZXMiOlsiVW5hdXRob3JpemVkRXJyb3IiLCJBUElFcnJvciIsImNvbnN0cnVjdG9yIiwidCIsImh0dHBTdGF0dXMiLCJVTkFVVEhPUklaRUQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFlQTs7O2VBQUE7OzttRUFidUI7aUVBRUY7Ozs7OztBQUVyQixNQUFNQSwwQkFBMEJDLGlCQUFRO0lBQ3RDQyxZQUFZQyxDQUFhLENBQUU7UUFDekIsS0FBSyxDQUNIQSxJQUFJQSxFQUFFLHdCQUF3Qiw2REFDOUJDLG1CQUFVLENBQUNDLFlBQVk7SUFFM0I7QUFDRjtNQUVBLFdBQWVMIn0=