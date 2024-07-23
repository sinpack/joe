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
class ErrorDeletingFile extends _APIError.default {
    constructor(t){
        super(t ? t('error:deletingFile') : 'There was an error deleting file.', _httpstatus.default.INTERNAL_SERVER_ERROR);
    }
}
const _default = ErrorDeletingFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvRXJyb3JEZWxldGluZ0ZpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBURnVuY3Rpb24gfSBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InXG5cbmNsYXNzIEVycm9yRGVsZXRpbmdGaWxlIGV4dGVuZHMgQVBJRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih0PzogVEZ1bmN0aW9uKSB7XG4gICAgc3VwZXIoXG4gICAgICB0ID8gdCgnZXJyb3I6ZGVsZXRpbmdGaWxlJykgOiAnVGhlcmUgd2FzIGFuIGVycm9yIGRlbGV0aW5nIGZpbGUuJyxcbiAgICAgIGh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckRlbGV0aW5nRmlsZVxuIl0sIm5hbWVzIjpbIkVycm9yRGVsZXRpbmdGaWxlIiwiQVBJRXJyb3IiLCJjb25zdHJ1Y3RvciIsInQiLCJodHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZUE7OztlQUFBOzs7bUVBYnVCO2lFQUVGOzs7Ozs7QUFFckIsTUFBTUEsMEJBQTBCQyxpQkFBUTtJQUN0Q0MsWUFBWUMsQ0FBYSxDQUFFO1FBQ3pCLEtBQUssQ0FDSEEsSUFBSUEsRUFBRSx3QkFBd0IscUNBQzlCQyxtQkFBVSxDQUFDQyxxQkFBcUI7SUFFcEM7QUFDRjtNQUVBLFdBQWVMIn0=