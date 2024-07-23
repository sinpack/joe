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
class DuplicateGlobal extends _APIError.default {
    constructor(config){
        super(`Global label "${config.label}" is already in use`);
    }
}
const _default = DuplicateGlobal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvRHVwbGljYXRlR2xvYmFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBEdXBsaWNhdGVHbG9iYWwgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogR2xvYmFsQ29uZmlnKSB7XG4gICAgc3VwZXIoYEdsb2JhbCBsYWJlbCBcIiR7Y29uZmlnLmxhYmVsfVwiIGlzIGFscmVhZHkgaW4gdXNlYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEdXBsaWNhdGVHbG9iYWxcbiJdLCJuYW1lcyI6WyJEdXBsaWNhdGVHbG9iYWwiLCJBUElFcnJvciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwibGFiZWwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVVBOzs7ZUFBQTs7O2lFQVJxQjs7Ozs7O0FBRXJCLE1BQU1BLHdCQUF3QkMsaUJBQVE7SUFDcENDLFlBQVlDLE1BQW9CLENBQUU7UUFDaEMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFQSxPQUFPQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7SUFDMUQ7QUFDRjtNQUVBLFdBQWVKIn0=