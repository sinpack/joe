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
class MissingFieldType extends _APIError.default {
    constructor(field){
        super(`Field${(0, _types.fieldAffectsData)(field) ? ` "${field.name}"` : ''} is either missing a field type or it does not match an available field type`);
    }
}
const _default = MissingFieldType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0ZpZWxkVHlwZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcidcblxuY2xhc3MgTWlzc2luZ0ZpZWxkVHlwZSBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IoZmllbGQ6IEZpZWxkKSB7XG4gICAgc3VwZXIoXG4gICAgICBgRmllbGQke1xuICAgICAgICBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSA/IGAgXCIke2ZpZWxkLm5hbWV9XCJgIDogJydcbiAgICAgIH0gaXMgZWl0aGVyIG1pc3NpbmcgYSBmaWVsZCB0eXBlIG9yIGl0IGRvZXMgbm90IG1hdGNoIGFuIGF2YWlsYWJsZSBmaWVsZCB0eXBlYCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZ0ZpZWxkVHlwZVxuIl0sIm5hbWVzIjpbIk1pc3NpbmdGaWVsZFR5cGUiLCJBUElFcnJvciIsImNvbnN0cnVjdG9yIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWVBOzs7ZUFBQTs7O3VCQWJpQztpRUFDWjs7Ozs7O0FBRXJCLE1BQU1BLHlCQUF5QkMsaUJBQVE7SUFDckNDLFlBQVlDLEtBQVksQ0FBRTtRQUN4QixLQUFLLENBQ0gsQ0FBQyxLQUFLLEVBQ0pDLElBQUFBLHVCQUFnQixFQUFDRCxTQUFTLENBQUMsRUFBRSxFQUFFQSxNQUFNRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FDaEQsNEVBQTRFLENBQUM7SUFFbEY7QUFDRjtNQUVBLFdBQWVMIn0=