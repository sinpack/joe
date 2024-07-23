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
const _types = require("../fields/config/types");
const _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MissingEditorProp extends _APIError.default {
    constructor(field){
        super(`RichText field${(0, _types.fieldAffectsData)(field) ? ` "${field.name}"` : ''} is missing the editor prop`);
    }
}
const _default = MissingEditorProp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0VkaXRvclByb3BzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBNaXNzaW5nRWRpdG9yUHJvcCBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IoZmllbGQ6IEZpZWxkKSB7XG4gICAgc3VwZXIoXG4gICAgICBgUmljaFRleHQgZmllbGQke1xuICAgICAgICBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSA/IGAgXCIke2ZpZWxkLm5hbWV9XCJgIDogJydcbiAgICAgIH0gaXMgbWlzc2luZyB0aGUgZWRpdG9yIHByb3BgLFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaXNzaW5nRWRpdG9yUHJvcFxuIl0sIm5hbWVzIjpbIk1pc3NpbmdFZGl0b3JQcm9wIiwiQVBJRXJyb3IiLCJjb25zdHJ1Y3RvciIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFlQTs7O2VBQUE7Ozt1QkFiaUM7aUVBQ1o7Ozs7OztBQUVyQixNQUFNQSwwQkFBMEJDLGlCQUFRO0lBQ3RDQyxZQUFZQyxLQUFZLENBQUU7UUFDeEIsS0FBSyxDQUNILENBQUMsY0FBYyxFQUNiQyxJQUFBQSx1QkFBZ0IsRUFBQ0QsU0FBUyxDQUFDLEVBQUUsRUFBRUEsTUFBTUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQ2hELDJCQUEyQixDQUFDO0lBRWpDO0FBQ0Y7TUFFQSxXQUFlTCJ9