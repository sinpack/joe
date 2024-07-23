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
class InvalidFieldName extends _APIError.default {
    constructor(field, fieldName){
        super(`Field ${field.label} has invalid name '${fieldName}'. Field names can not include periods (.) and must be alphanumeric.`);
    }
}
const _default = InvalidFieldName;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZEZpZWxkTmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkQWZmZWN0aW5nRGF0YSB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBJbnZhbGlkRmllbGROYW1lIGV4dGVuZHMgQVBJRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihmaWVsZDogRmllbGRBZmZlY3RpbmdEYXRhLCBmaWVsZE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKFxuICAgICAgYEZpZWxkICR7ZmllbGQubGFiZWx9IGhhcyBpbnZhbGlkIG5hbWUgJyR7ZmllbGROYW1lfScuIEZpZWxkIG5hbWVzIGNhbiBub3QgaW5jbHVkZSBwZXJpb2RzICguKSBhbmQgbXVzdCBiZSBhbHBoYW51bWVyaWMuYCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZEZpZWxkTmFtZVxuIl0sIm5hbWVzIjpbIkludmFsaWRGaWVsZE5hbWUiLCJBUElFcnJvciIsImNvbnN0cnVjdG9yIiwiZmllbGQiLCJmaWVsZE5hbWUiLCJsYWJlbCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBWUE7OztlQUFBOzs7aUVBVnFCOzs7Ozs7QUFFckIsTUFBTUEseUJBQXlCQyxpQkFBUTtJQUNyQ0MsWUFBWUMsS0FBeUIsRUFBRUMsU0FBaUIsQ0FBRTtRQUN4RCxLQUFLLENBQ0gsQ0FBQyxNQUFNLEVBQUVELE1BQU1FLEtBQUssQ0FBQyxtQkFBbUIsRUFBRUQsVUFBVSxvRUFBb0UsQ0FBQztJQUU3SDtBQUNGO01BRUEsV0FBZUoifQ==