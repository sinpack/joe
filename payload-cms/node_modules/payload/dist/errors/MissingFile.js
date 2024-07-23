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
class MissingFile extends _APIError.default {
    constructor(t){
        super(t ? t('error:noFilesUploaded') : 'No files were uploaded.', _httpstatus.default.BAD_REQUEST);
    }
}
const _default = MissingFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0ZpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBURnVuY3Rpb24gfSBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InXG5cbmNsYXNzIE1pc3NpbmdGaWxlIGV4dGVuZHMgQVBJRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih0PzogVEZ1bmN0aW9uKSB7XG4gICAgc3VwZXIodCA/IHQoJ2Vycm9yOm5vRmlsZXNVcGxvYWRlZCcpIDogJ05vIGZpbGVzIHdlcmUgdXBsb2FkZWQuJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaXNzaW5nRmlsZVxuIl0sIm5hbWVzIjpbIk1pc3NpbmdGaWxlIiwiQVBJRXJyb3IiLCJjb25zdHJ1Y3RvciIsInQiLCJodHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFZQTs7O2VBQUE7OzttRUFWdUI7aUVBRUY7Ozs7OztBQUVyQixNQUFNQSxvQkFBb0JDLGlCQUFRO0lBQ2hDQyxZQUFZQyxDQUFhLENBQUU7UUFDekIsS0FBSyxDQUFDQSxJQUFJQSxFQUFFLDJCQUEyQiwyQkFBMkJDLG1CQUFVLENBQUNDLFdBQVc7SUFDMUY7QUFDRjtNQUVBLFdBQWVMIn0=