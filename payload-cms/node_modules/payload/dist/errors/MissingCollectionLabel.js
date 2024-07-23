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
class MissingCollectionLabel extends _APIError.default {
    constructor(){
        super('payload.config.collection object is missing label');
    }
}
const _default = MissingCollectionLabel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0NvbGxlY3Rpb25MYWJlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcidcblxuY2xhc3MgTWlzc2luZ0NvbGxlY3Rpb25MYWJlbCBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3BheWxvYWQuY29uZmlnLmNvbGxlY3Rpb24gb2JqZWN0IGlzIG1pc3NpbmcgbGFiZWwnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pc3NpbmdDb2xsZWN0aW9uTGFiZWxcbiJdLCJuYW1lcyI6WyJNaXNzaW5nQ29sbGVjdGlvbkxhYmVsIiwiQVBJRXJyb3IiLCJjb25zdHJ1Y3RvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBUUE7OztlQUFBOzs7aUVBUnFCOzs7Ozs7QUFFckIsTUFBTUEsK0JBQStCQyxpQkFBUTtJQUMzQ0MsYUFBYztRQUNaLEtBQUssQ0FBQztJQUNSO0FBQ0Y7TUFFQSxXQUFlRiJ9