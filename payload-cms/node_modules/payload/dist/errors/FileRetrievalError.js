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
class FileRetrievalError extends _APIError.default {
    constructor(t, message){
        let msg = t ? t('error:problemUploadingFile') : 'There was a problem while retrieving the file.';
        if (message) {
            msg += ` ${message}`;
        }
        super(msg, _httpstatus.default.BAD_REQUEST);
    }
}
const _default = FileRetrievalError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvRmlsZVJldHJpZXZhbEVycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBGaWxlUmV0cmlldmFsRXJyb3IgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHQ/OiBURnVuY3Rpb24sIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBsZXQgbXNnID0gdCA/IHQoJ2Vycm9yOnByb2JsZW1VcGxvYWRpbmdGaWxlJykgOiAnVGhlcmUgd2FzIGEgcHJvYmxlbSB3aGlsZSByZXRyaWV2aW5nIHRoZSBmaWxlLidcblxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICBtc2cgKz0gYCAke21lc3NhZ2V9YFxuICAgIH1cbiAgICBzdXBlcihtc2csIGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVJldHJpZXZhbEVycm9yXG4iXSwibmFtZXMiOlsiRmlsZVJldHJpZXZhbEVycm9yIiwiQVBJRXJyb3IiLCJjb25zdHJ1Y3RvciIsInQiLCJtZXNzYWdlIiwibXNnIiwiaHR0cFN0YXR1cyIsIkJBRF9SRVFVRVNUIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWlCQTs7O2VBQUE7OzttRUFmdUI7aUVBRUY7Ozs7OztBQUVyQixNQUFNQSwyQkFBMkJDLGlCQUFRO0lBQ3ZDQyxZQUFZQyxDQUFhLEVBQUVDLE9BQWdCLENBQUU7UUFDM0MsSUFBSUMsTUFBTUYsSUFBSUEsRUFBRSxnQ0FBZ0M7UUFFaEQsSUFBSUMsU0FBUztZQUNYQyxPQUFPLENBQUMsQ0FBQyxFQUFFRCxRQUFRLENBQUM7UUFDdEI7UUFDQSxLQUFLLENBQUNDLEtBQUtDLG1CQUFVLENBQUNDLFdBQVc7SUFDbkM7QUFDRjtNQUVBLFdBQWVQIn0=