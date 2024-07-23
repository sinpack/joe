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
class AuthenticationError extends _APIError.default {
    constructor(t){
        super(t ? t('error:emailOrPasswordIncorrect') : 'The email or password provided is incorrect.', _httpstatus.default.UNAUTHORIZED);
    }
}
const _default = AuthenticationError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvQXV0aGVudGljYXRpb25FcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcidcblxuY2xhc3MgQXV0aGVudGljYXRpb25FcnJvciBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IodD86IFRGdW5jdGlvbikge1xuICAgIHN1cGVyKFxuICAgICAgdCA/IHQoJ2Vycm9yOmVtYWlsT3JQYXNzd29yZEluY29ycmVjdCcpIDogJ1RoZSBlbWFpbCBvciBwYXNzd29yZCBwcm92aWRlZCBpcyBpbmNvcnJlY3QuJyxcbiAgICAgIGh0dHBTdGF0dXMuVU5BVVRIT1JJWkVELFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoZW50aWNhdGlvbkVycm9yXG4iXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb25FcnJvciIsIkFQSUVycm9yIiwiY29uc3RydWN0b3IiLCJ0IiwiaHR0cFN0YXR1cyIsIlVOQVVUSE9SSVpFRCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWVBOzs7ZUFBQTs7O21FQWJ1QjtpRUFFRjs7Ozs7O0FBRXJCLE1BQU1BLDRCQUE0QkMsaUJBQVE7SUFDeENDLFlBQVlDLENBQWEsQ0FBRTtRQUN6QixLQUFLLENBQ0hBLElBQUlBLEVBQUUsb0NBQW9DLGdEQUMxQ0MsbUJBQVUsQ0FBQ0MsWUFBWTtJQUUzQjtBQUNGO01BRUEsV0FBZUwifQ==