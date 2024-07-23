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
class InvalidConfiguration extends _APIError.default {
    constructor(message){
        super(message, _httpstatus.default.INTERNAL_SERVER_ERROR);
    }
}
const _default = InvalidConfiguration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZENvbmZpZ3VyYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBJbnZhbGlkQ29uZmlndXJhdGlvbiBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSwgaHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZENvbmZpZ3VyYXRpb25cbiJdLCJuYW1lcyI6WyJJbnZhbGlkQ29uZmlndXJhdGlvbiIsIkFQSUVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwiaHR0cFN0YXR1cyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVVBOzs7ZUFBQTs7O21FQVZ1QjtpRUFFRjs7Ozs7O0FBRXJCLE1BQU1BLDZCQUE2QkMsaUJBQVE7SUFDekNDLFlBQVlDLE9BQWUsQ0FBRTtRQUMzQixLQUFLLENBQUNBLFNBQVNDLG1CQUFVLENBQUNDLHFCQUFxQjtJQUNqRDtBQUNGO01BRUEsV0FBZUwifQ==