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
class LockedAuth extends _APIError.default {
    constructor(t){
        super(t ? t('error:userLocked') : 'This user is locked due to having too many failed login attempts.', _httpstatus.default.UNAUTHORIZED);
    }
}
const _default = LockedAuth;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTG9ja2VkQXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcidcblxuY2xhc3MgTG9ja2VkQXV0aCBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IodD86IFRGdW5jdGlvbikge1xuICAgIHN1cGVyKFxuICAgICAgdFxuICAgICAgICA/IHQoJ2Vycm9yOnVzZXJMb2NrZWQnKVxuICAgICAgICA6ICdUaGlzIHVzZXIgaXMgbG9ja2VkIGR1ZSB0byBoYXZpbmcgdG9vIG1hbnkgZmFpbGVkIGxvZ2luIGF0dGVtcHRzLicsXG4gICAgICBodHRwU3RhdHVzLlVOQVVUSE9SSVpFRCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9ja2VkQXV0aFxuIl0sIm5hbWVzIjpbIkxvY2tlZEF1dGgiLCJBUElFcnJvciIsImNvbnN0cnVjdG9yIiwidCIsImh0dHBTdGF0dXMiLCJVTkFVVEhPUklaRUQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQkE7OztlQUFBOzs7bUVBZnVCO2lFQUVGOzs7Ozs7QUFFckIsTUFBTUEsbUJBQW1CQyxpQkFBUTtJQUMvQkMsWUFBWUMsQ0FBYSxDQUFFO1FBQ3pCLEtBQUssQ0FDSEEsSUFDSUEsRUFBRSxzQkFDRixxRUFDSkMsbUJBQVUsQ0FBQ0MsWUFBWTtJQUUzQjtBQUNGO01BRUEsV0FBZUwifQ==