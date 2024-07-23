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
class FileUploadError extends _APIError.default {
    constructor(t){
        super(t ? t('error:problemUploadingFile') : 'There was a problem while uploading the file.', _httpstatus.default.BAD_REQUEST);
    }
}
const _default = FileUploadError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvRmlsZVVwbG9hZEVycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBGaWxlVXBsb2FkRXJyb3IgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHQ/OiBURnVuY3Rpb24pIHtcbiAgICBzdXBlcihcbiAgICAgIHQgPyB0KCdlcnJvcjpwcm9ibGVtVXBsb2FkaW5nRmlsZScpIDogJ1RoZXJlIHdhcyBhIHByb2JsZW0gd2hpbGUgdXBsb2FkaW5nIHRoZSBmaWxlLicsXG4gICAgICBodHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkRXJyb3JcbiJdLCJuYW1lcyI6WyJGaWxlVXBsb2FkRXJyb3IiLCJBUElFcnJvciIsImNvbnN0cnVjdG9yIiwidCIsImh0dHBTdGF0dXMiLCJCQURfUkVRVUVTVCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWVBOzs7ZUFBQTs7O21FQWJ1QjtpRUFFRjs7Ozs7O0FBRXJCLE1BQU1BLHdCQUF3QkMsaUJBQVE7SUFDcENDLFlBQVlDLENBQWEsQ0FBRTtRQUN6QixLQUFLLENBQ0hBLElBQUlBLEVBQUUsZ0NBQWdDLGlEQUN0Q0MsbUJBQVUsQ0FBQ0MsV0FBVztJQUUxQjtBQUNGO01BRUEsV0FBZUwifQ==