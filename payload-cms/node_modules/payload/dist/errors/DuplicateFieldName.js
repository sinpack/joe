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
const _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DuplicateFieldName extends _APIError.default {
    constructor(fieldName){
        super(`A field with the name '${fieldName}' was found multiple times on the same level. Field names must be unique.`);
    }
}
const _default = DuplicateFieldName;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvRHVwbGljYXRlRmllbGROYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBEdXBsaWNhdGVGaWVsZE5hbWUgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoXG4gICAgICBgQSBmaWVsZCB3aXRoIHRoZSBuYW1lICcke2ZpZWxkTmFtZX0nIHdhcyBmb3VuZCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBsZXZlbC4gRmllbGQgbmFtZXMgbXVzdCBiZSB1bmlxdWUuYCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHVwbGljYXRlRmllbGROYW1lXG4iXSwibmFtZXMiOlsiRHVwbGljYXRlRmllbGROYW1lIiwiQVBJRXJyb3IiLCJjb25zdHJ1Y3RvciIsImZpZWxkTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBVUE7OztlQUFBOzs7aUVBVnFCOzs7Ozs7QUFFckIsTUFBTUEsMkJBQTJCQyxpQkFBUTtJQUN2Q0MsWUFBWUMsU0FBaUIsQ0FBRTtRQUM3QixLQUFLLENBQ0gsQ0FBQyx1QkFBdUIsRUFBRUEsVUFBVSx5RUFBeUUsQ0FBQztJQUVsSDtBQUNGO01BRUEsV0FBZUgifQ==