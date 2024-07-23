"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APIError: function() {
        return _APIError.default;
    },
    AuthenticationError: function() {
        return _AuthenticationError.default;
    },
    DuplicateCollection: function() {
        return _DuplicateCollection.default;
    },
    DuplicateFieldName: function() {
        return _DuplicateFieldName.default;
    },
    DuplicateGlobal: function() {
        return _DuplicateGlobal.default;
    },
    ErrorDeletingFile: function() {
        return _ErrorDeletingFile.default;
    },
    FileUploadError: function() {
        return _FileUploadError.default;
    },
    Forbidden: function() {
        return _Forbidden.default;
    },
    InvalidConfiguration: function() {
        return _InvalidConfiguration.default;
    },
    InvalidFieldName: function() {
        return _InvalidFieldName.default;
    },
    InvalidFieldRelationship: function() {
        return _InvalidFieldRelationship.default;
    },
    LockedAuth: function() {
        return _LockedAuth.default;
    },
    MissingCollectionLabel: function() {
        return _MissingCollectionLabel.default;
    },
    MissingFieldInputOptions: function() {
        return _MissingFieldInputOptions.default;
    },
    MissingFieldType: function() {
        return _MissingFieldType.default;
    },
    MissingFile: function() {
        return _MissingFile.default;
    },
    NotFound: function() {
        return _NotFound.default;
    },
    QueryError: function() {
        return _QueryError.default;
    },
    ValidationError: function() {
        return _ValidationError.default;
    },
    errorHandler: function() {
        return _errorHandler.default;
    }
});
const _errorHandler = /*#__PURE__*/ _interop_require_default(require("../express/middleware/errorHandler"));
const _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
const _AuthenticationError = /*#__PURE__*/ _interop_require_default(require("./AuthenticationError"));
const _DuplicateCollection = /*#__PURE__*/ _interop_require_default(require("./DuplicateCollection"));
const _DuplicateFieldName = /*#__PURE__*/ _interop_require_default(require("./DuplicateFieldName"));
const _DuplicateGlobal = /*#__PURE__*/ _interop_require_default(require("./DuplicateGlobal"));
const _ErrorDeletingFile = /*#__PURE__*/ _interop_require_default(require("./ErrorDeletingFile"));
const _FileUploadError = /*#__PURE__*/ _interop_require_default(require("./FileUploadError"));
const _Forbidden = /*#__PURE__*/ _interop_require_default(require("./Forbidden"));
const _InvalidConfiguration = /*#__PURE__*/ _interop_require_default(require("./InvalidConfiguration"));
const _InvalidFieldName = /*#__PURE__*/ _interop_require_default(require("./InvalidFieldName"));
const _InvalidFieldRelationship = /*#__PURE__*/ _interop_require_default(require("./InvalidFieldRelationship"));
const _LockedAuth = /*#__PURE__*/ _interop_require_default(require("./LockedAuth"));
const _MissingCollectionLabel = /*#__PURE__*/ _interop_require_default(require("./MissingCollectionLabel"));
const _MissingFieldInputOptions = /*#__PURE__*/ _interop_require_default(require("./MissingFieldInputOptions"));
const _MissingFieldType = /*#__PURE__*/ _interop_require_default(require("./MissingFieldType"));
const _MissingFile = /*#__PURE__*/ _interop_require_default(require("./MissingFile"));
const _NotFound = /*#__PURE__*/ _interop_require_default(require("./NotFound"));
const _QueryError = /*#__PURE__*/ _interop_require_default(require("./QueryError"));
const _ValidationError = /*#__PURE__*/ _interop_require_default(require("./ValidationError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBlcnJvckhhbmRsZXIgfSBmcm9tICcuLi9leHByZXNzL21pZGRsZXdhcmUvZXJyb3JIYW5kbGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBUElFcnJvciB9IGZyb20gJy4vQVBJRXJyb3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF1dGhlbnRpY2F0aW9uRXJyb3IgfSBmcm9tICcuL0F1dGhlbnRpY2F0aW9uRXJyb3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIER1cGxpY2F0ZUNvbGxlY3Rpb24gfSBmcm9tICcuL0R1cGxpY2F0ZUNvbGxlY3Rpb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIER1cGxpY2F0ZUZpZWxkTmFtZSB9IGZyb20gJy4vRHVwbGljYXRlRmllbGROYW1lJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEdXBsaWNhdGVHbG9iYWwgfSBmcm9tICcuL0R1cGxpY2F0ZUdsb2JhbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JEZWxldGluZ0ZpbGUgfSBmcm9tICcuL0Vycm9yRGVsZXRpbmdGaWxlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaWxlVXBsb2FkRXJyb3IgfSBmcm9tICcuL0ZpbGVVcGxvYWRFcnJvcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9yYmlkZGVuIH0gZnJvbSAnLi9Gb3JiaWRkZW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEludmFsaWRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9JbnZhbGlkQ29uZmlndXJhdGlvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW52YWxpZEZpZWxkTmFtZSB9IGZyb20gJy4vSW52YWxpZEZpZWxkTmFtZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwIH0gZnJvbSAnLi9JbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvY2tlZEF1dGggfSBmcm9tICcuL0xvY2tlZEF1dGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pc3NpbmdDb2xsZWN0aW9uTGFiZWwgfSBmcm9tICcuL01pc3NpbmdDb2xsZWN0aW9uTGFiZWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pc3NpbmdGaWVsZElucHV0T3B0aW9ucyB9IGZyb20gJy4vTWlzc2luZ0ZpZWxkSW5wdXRPcHRpb25zJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNaXNzaW5nRmllbGRUeXBlIH0gZnJvbSAnLi9NaXNzaW5nRmllbGRUeXBlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNaXNzaW5nRmlsZSB9IGZyb20gJy4vTWlzc2luZ0ZpbGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdEZvdW5kIH0gZnJvbSAnLi9Ob3RGb3VuZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUXVlcnlFcnJvciB9IGZyb20gJy4vUXVlcnlFcnJvcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi9WYWxpZGF0aW9uRXJyb3InXG4iXSwibmFtZXMiOlsiQVBJRXJyb3IiLCJBdXRoZW50aWNhdGlvbkVycm9yIiwiRHVwbGljYXRlQ29sbGVjdGlvbiIsIkR1cGxpY2F0ZUZpZWxkTmFtZSIsIkR1cGxpY2F0ZUdsb2JhbCIsIkVycm9yRGVsZXRpbmdGaWxlIiwiRmlsZVVwbG9hZEVycm9yIiwiRm9yYmlkZGVuIiwiSW52YWxpZENvbmZpZ3VyYXRpb24iLCJJbnZhbGlkRmllbGROYW1lIiwiSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwIiwiTG9ja2VkQXV0aCIsIk1pc3NpbmdDb2xsZWN0aW9uTGFiZWwiLCJNaXNzaW5nRmllbGRJbnB1dE9wdGlvbnMiLCJNaXNzaW5nRmllbGRUeXBlIiwiTWlzc2luZ0ZpbGUiLCJOb3RGb3VuZCIsIlF1ZXJ5RXJyb3IiLCJWYWxpZGF0aW9uRXJyb3IiLCJlcnJvckhhbmRsZXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFDb0JBLFFBQVE7ZUFBUkEsaUJBQVE7O0lBQ1JDLG1CQUFtQjtlQUFuQkEsNEJBQW1COztJQUNuQkMsbUJBQW1CO2VBQW5CQSw0QkFBbUI7O0lBQ25CQyxrQkFBa0I7ZUFBbEJBLDJCQUFrQjs7SUFDbEJDLGVBQWU7ZUFBZkEsd0JBQWU7O0lBQ2ZDLGlCQUFpQjtlQUFqQkEsMEJBQWlCOztJQUNqQkMsZUFBZTtlQUFmQSx3QkFBZTs7SUFDZkMsU0FBUztlQUFUQSxrQkFBUzs7SUFDVEMsb0JBQW9CO2VBQXBCQSw2QkFBb0I7O0lBQ3BCQyxnQkFBZ0I7ZUFBaEJBLHlCQUFnQjs7SUFDaEJDLHdCQUF3QjtlQUF4QkEsaUNBQXdCOztJQUN4QkMsVUFBVTtlQUFWQSxtQkFBVTs7SUFDVkMsc0JBQXNCO2VBQXRCQSwrQkFBc0I7O0lBQ3RCQyx3QkFBd0I7ZUFBeEJBLGlDQUF3Qjs7SUFDeEJDLGdCQUFnQjtlQUFoQkEseUJBQWdCOztJQUNoQkMsV0FBVztlQUFYQSxvQkFBVzs7SUFDWEMsUUFBUTtlQUFSQSxpQkFBUTs7SUFDUkMsVUFBVTtlQUFWQSxtQkFBVTs7SUFDVkMsZUFBZTtlQUFmQSx3QkFBZTs7SUFuQmZDLFlBQVk7ZUFBWkEscUJBQVk7OztxRUFBUTtpRUFDSjs0RUFDVzs0RUFDQTsyRUFDRDt3RUFDSDswRUFDRTt3RUFDRjtrRUFDTjs2RUFDVzt5RUFDSjtpRkFDUTttRUFDZDsrRUFDWTtpRkFDRTt5RUFDUjtvRUFDTDtpRUFDSDttRUFDRTt3RUFDSyJ9