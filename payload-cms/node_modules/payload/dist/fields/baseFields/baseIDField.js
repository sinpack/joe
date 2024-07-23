"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "baseIDField", {
    enumerable: true,
    get: function() {
        return baseIDField;
    }
});
const _bsonobjectid = /*#__PURE__*/ _interop_require_default(require("bson-objectid"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const generateID = ({ operation, value })=>(operation !== 'create' ? value : false) || new _bsonobjectid.default().toHexString();
const baseIDField = {
    name: 'id',
    admin: {
        disabled: true
    },
    hooks: {
        beforeChange: [
            generateID
        ]
    },
    label: 'ID',
    type: 'text'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvYmFzZUZpZWxkcy9iYXNlSURGaWVsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2JqZWN0SUQgZnJvbSAnYnNvbi1vYmplY3RpZCdcblxuaW1wb3J0IHR5cGUgeyBGaWVsZCwgRmllbGRIb29rIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuXG5jb25zdCBnZW5lcmF0ZUlEOiBGaWVsZEhvb2sgPSAoeyBvcGVyYXRpb24sIHZhbHVlIH0pID0+XG4gIChvcGVyYXRpb24gIT09ICdjcmVhdGUnID8gdmFsdWUgOiBmYWxzZSkgfHwgbmV3IE9iamVjdElEKCkudG9IZXhTdHJpbmcoKVxuXG5leHBvcnQgY29uc3QgYmFzZUlERmllbGQ6IEZpZWxkID0ge1xuICBuYW1lOiAnaWQnLFxuICBhZG1pbjoge1xuICAgIGRpc2FibGVkOiB0cnVlLFxuICB9LFxuICBob29rczoge1xuICAgIGJlZm9yZUNoYW5nZTogW2dlbmVyYXRlSURdLFxuICB9LFxuICBsYWJlbDogJ0lEJyxcbiAgdHlwZTogJ3RleHQnLFxufVxuIl0sIm5hbWVzIjpbImJhc2VJREZpZWxkIiwiZ2VuZXJhdGVJRCIsIm9wZXJhdGlvbiIsInZhbHVlIiwiT2JqZWN0SUQiLCJ0b0hleFN0cmluZyIsIm5hbWUiLCJhZG1pbiIsImRpc2FibGVkIiwiaG9va3MiLCJiZWZvcmVDaGFuZ2UiLCJsYWJlbCIsInR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzs7ZUFBQUE7OztxRUFQUTs7Ozs7O0FBSXJCLE1BQU1DLGFBQXdCLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FDakQsQUFBQ0QsQ0FBQUEsY0FBYyxXQUFXQyxRQUFRLEtBQUksS0FBTSxJQUFJQyxxQkFBUSxHQUFHQyxXQUFXO0FBRWpFLE1BQU1MLGNBQXFCO0lBQ2hDTSxNQUFNO0lBQ05DLE9BQU87UUFDTEMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTEMsY0FBYztZQUFDVDtTQUFXO0lBQzVCO0lBQ0FVLE9BQU87SUFDUEMsTUFBTTtBQUNSIn0=