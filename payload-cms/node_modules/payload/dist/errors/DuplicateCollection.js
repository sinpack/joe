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
class DuplicateCollection extends _APIError.default {
    constructor(propertyName, duplicates){
        super(`Collection ${propertyName} already in use: "${duplicates.join(', ')}"`);
    }
}
const _default = DuplicateCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvRHVwbGljYXRlQ29sbGVjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcidcblxuY2xhc3MgRHVwbGljYXRlQ29sbGVjdGlvbiBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcsIGR1cGxpY2F0ZXM6IHN0cmluZ1tdKSB7XG4gICAgc3VwZXIoYENvbGxlY3Rpb24gJHtwcm9wZXJ0eU5hbWV9IGFscmVhZHkgaW4gdXNlOiBcIiR7ZHVwbGljYXRlcy5qb2luKCcsICcpfVwiYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEdXBsaWNhdGVDb2xsZWN0aW9uXG4iXSwibmFtZXMiOlsiRHVwbGljYXRlQ29sbGVjdGlvbiIsIkFQSUVycm9yIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0eU5hbWUiLCJkdXBsaWNhdGVzIiwiam9pbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBUUE7OztlQUFBOzs7aUVBUnFCOzs7Ozs7QUFFckIsTUFBTUEsNEJBQTRCQyxpQkFBUTtJQUN4Q0MsWUFBWUMsWUFBb0IsRUFBRUMsVUFBb0IsQ0FBRTtRQUN0RCxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUVELGFBQWEsa0JBQWtCLEVBQUVDLFdBQVdDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRTtBQUNGO01BRUEsV0FBZUwifQ==