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
class NotFound extends _APIError.default {
    constructor(t){
        super(t ? t('error:notFound') : 'The requested resource was not found.', _httpstatus.default.NOT_FOUND);
    }
}
const _default = NotFound;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTm90Rm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBURnVuY3Rpb24gfSBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InXG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQVBJRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih0PzogVEZ1bmN0aW9uKSB7XG4gICAgc3VwZXIodCA/IHQoJ2Vycm9yOm5vdEZvdW5kJykgOiAnVGhlIHJlcXVlc3RlZCByZXNvdXJjZSB3YXMgbm90IGZvdW5kLicsIGh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kXG4iXSwibmFtZXMiOlsiTm90Rm91bmQiLCJBUElFcnJvciIsImNvbnN0cnVjdG9yIiwidCIsImh0dHBTdGF0dXMiLCJOT1RfRk9VTkQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFZQTs7O2VBQUE7OzttRUFWdUI7aUVBRUY7Ozs7OztBQUVyQixNQUFNQSxpQkFBaUJDLGlCQUFRO0lBQzdCQyxZQUFZQyxDQUFhLENBQUU7UUFDekIsS0FBSyxDQUFDQSxJQUFJQSxFQUFFLG9CQUFvQix5Q0FBeUNDLG1CQUFVLENBQUNDLFNBQVM7SUFDL0Y7QUFDRjtNQUVBLFdBQWVMIn0=