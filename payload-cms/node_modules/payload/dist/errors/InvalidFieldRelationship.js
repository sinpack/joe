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
class InvalidFieldRelationship extends _APIError.default {
    constructor(field, relationship){
        super(`Field ${field.label} has invalid relationship '${relationship}'.`);
    }
}
const _default = InvalidFieldRelationship;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVsYXRpb25zaGlwRmllbGQsIFVwbG9hZEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InXG5cbmNsYXNzIEludmFsaWRGaWVsZFJlbGF0aW9uc2hpcCBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IoZmllbGQ6IFJlbGF0aW9uc2hpcEZpZWxkIHwgVXBsb2FkRmllbGQsIHJlbGF0aW9uc2hpcDogc3RyaW5nKSB7XG4gICAgc3VwZXIoYEZpZWxkICR7ZmllbGQubGFiZWx9IGhhcyBpbnZhbGlkIHJlbGF0aW9uc2hpcCAnJHtyZWxhdGlvbnNoaXB9Jy5gKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludmFsaWRGaWVsZFJlbGF0aW9uc2hpcFxuIl0sIm5hbWVzIjpbIkludmFsaWRGaWVsZFJlbGF0aW9uc2hpcCIsIkFQSUVycm9yIiwiY29uc3RydWN0b3IiLCJmaWVsZCIsInJlbGF0aW9uc2hpcCIsImxhYmVsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQUE7OztpRUFScUI7Ozs7OztBQUVyQixNQUFNQSxpQ0FBaUNDLGlCQUFRO0lBQzdDQyxZQUFZQyxLQUFzQyxFQUFFQyxZQUFvQixDQUFFO1FBQ3hFLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRUQsTUFBTUUsS0FBSyxDQUFDLDJCQUEyQixFQUFFRCxhQUFhLEVBQUUsQ0FBQztJQUMxRTtBQUNGO01BRUEsV0FBZUoifQ==