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
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class InvalidSchema extends _APIError.default {
    constructor(message, results){
        super(message, _httpstatus.default.INTERNAL_SERVER_ERROR, results);
    }
}
const _default = InvalidSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZFNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InXG5cbmNsYXNzIEludmFsaWRTY2hlbWEgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgcmVzdWx0czogYW55KSB7XG4gICAgc3VwZXIobWVzc2FnZSwgaHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIHJlc3VsdHMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZFNjaGVtYVxuIl0sIm5hbWVzIjpbIkludmFsaWRTY2hlbWEiLCJBUElFcnJvciIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsInJlc3VsdHMiLCJodHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBVUE7OztlQUFBOzs7bUVBVnVCO2lFQUVGOzs7Ozs7QUFFckIsTUFBTUEsc0JBQXNCQyxpQkFBUTtJQUNsQ0MsWUFBWUMsT0FBZSxFQUFFQyxPQUFZLENBQUU7UUFDekMsS0FBSyxDQUFDRCxTQUFTRSxtQkFBVSxDQUFDQyxxQkFBcUIsRUFBRUY7SUFDbkQ7QUFDRjtNQUVBLFdBQWVKIn0=