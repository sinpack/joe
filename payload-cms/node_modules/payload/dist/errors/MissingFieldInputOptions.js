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
class MissingFieldInputOptions extends _APIError.default {
    constructor(field){
        super(`Field ${field.label} is missing options.`);
    }
}
const _default = MissingFieldInputOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0ZpZWxkSW5wdXRPcHRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmFkaW9GaWVsZCwgU2VsZWN0RmllbGQgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcidcblxuY2xhc3MgTWlzc2luZ0ZpZWxkSW5wdXRPcHRpb25zIGV4dGVuZHMgQVBJRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihmaWVsZDogUmFkaW9GaWVsZCB8IFNlbGVjdEZpZWxkKSB7XG4gICAgc3VwZXIoYEZpZWxkICR7ZmllbGQubGFiZWx9IGlzIG1pc3Npbmcgb3B0aW9ucy5gKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pc3NpbmdGaWVsZElucHV0T3B0aW9uc1xuIl0sIm5hbWVzIjpbIk1pc3NpbmdGaWVsZElucHV0T3B0aW9ucyIsIkFQSUVycm9yIiwiY29uc3RydWN0b3IiLCJmaWVsZCIsImxhYmVsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQUE7OztpRUFScUI7Ozs7OztBQUVyQixNQUFNQSxpQ0FBaUNDLGlCQUFRO0lBQzdDQyxZQUFZQyxLQUErQixDQUFFO1FBQzNDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRUEsTUFBTUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0lBQ2xEO0FBQ0Y7TUFFQSxXQUFlSiJ9