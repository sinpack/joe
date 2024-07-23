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
        return _errors.APIError;
    },
    AuthenticationError: function() {
        return _errors.AuthenticationError;
    },
    DuplicateCollection: function() {
        return _errors.DuplicateCollection;
    },
    DuplicateGlobal: function() {
        return _errors.DuplicateGlobal;
    },
    ErrorDeletingFile: function() {
        return _errors.ErrorDeletingFile;
    },
    FileUploadError: function() {
        return _errors.FileUploadError;
    },
    Forbidden: function() {
        return _errors.Forbidden;
    },
    InvalidConfiguration: function() {
        return _errors.InvalidConfiguration;
    },
    InvalidFieldName: function() {
        return _errors.InvalidFieldName;
    },
    InvalidFieldRelationship: function() {
        return _errors.InvalidFieldRelationship;
    },
    LockedAuth: function() {
        return _errors.LockedAuth;
    },
    MissingCollectionLabel: function() {
        return _errors.MissingCollectionLabel;
    },
    MissingFieldInputOptions: function() {
        return _errors.MissingFieldInputOptions;
    },
    MissingFieldType: function() {
        return _errors.MissingFieldType;
    },
    MissingFile: function() {
        return _errors.MissingFile;
    },
    NotFound: function() {
        return _errors.NotFound;
    },
    QueryError: function() {
        return _errors.QueryError;
    },
    ValidationError: function() {
        return _errors.ValidationError;
    }
});
const _errors = require("../errors");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRzL2Vycm9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge1xuICBBUElFcnJvcixcbiAgQXV0aGVudGljYXRpb25FcnJvcixcbiAgRHVwbGljYXRlQ29sbGVjdGlvbixcbiAgRHVwbGljYXRlR2xvYmFsLFxuICBFcnJvckRlbGV0aW5nRmlsZSxcbiAgRmlsZVVwbG9hZEVycm9yLFxuICBGb3JiaWRkZW4sXG4gIEludmFsaWRDb25maWd1cmF0aW9uLFxuICBJbnZhbGlkRmllbGROYW1lLFxuICBJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAsXG4gIExvY2tlZEF1dGgsXG4gIE1pc3NpbmdDb2xsZWN0aW9uTGFiZWwsXG4gIE1pc3NpbmdGaWVsZElucHV0T3B0aW9ucyxcbiAgTWlzc2luZ0ZpZWxkVHlwZSxcbiAgTWlzc2luZ0ZpbGUsXG4gIE5vdEZvdW5kLFxuICBRdWVyeUVycm9yLFxuICBWYWxpZGF0aW9uRXJyb3IsXG59IGZyb20gJy4uL2Vycm9ycydcbiJdLCJuYW1lcyI6WyJBUElFcnJvciIsIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJEdXBsaWNhdGVDb2xsZWN0aW9uIiwiRHVwbGljYXRlR2xvYmFsIiwiRXJyb3JEZWxldGluZ0ZpbGUiLCJGaWxlVXBsb2FkRXJyb3IiLCJGb3JiaWRkZW4iLCJJbnZhbGlkQ29uZmlndXJhdGlvbiIsIkludmFsaWRGaWVsZE5hbWUiLCJJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAiLCJMb2NrZWRBdXRoIiwiTWlzc2luZ0NvbGxlY3Rpb25MYWJlbCIsIk1pc3NpbmdGaWVsZElucHV0T3B0aW9ucyIsIk1pc3NpbmdGaWVsZFR5cGUiLCJNaXNzaW5nRmlsZSIsIk5vdEZvdW5kIiwiUXVlcnlFcnJvciIsIlZhbGlkYXRpb25FcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQ0VBLFFBQVE7ZUFBUkEsZ0JBQVE7O0lBQ1JDLG1CQUFtQjtlQUFuQkEsMkJBQW1COztJQUNuQkMsbUJBQW1CO2VBQW5CQSwyQkFBbUI7O0lBQ25CQyxlQUFlO2VBQWZBLHVCQUFlOztJQUNmQyxpQkFBaUI7ZUFBakJBLHlCQUFpQjs7SUFDakJDLGVBQWU7ZUFBZkEsdUJBQWU7O0lBQ2ZDLFNBQVM7ZUFBVEEsaUJBQVM7O0lBQ1RDLG9CQUFvQjtlQUFwQkEsNEJBQW9COztJQUNwQkMsZ0JBQWdCO2VBQWhCQSx3QkFBZ0I7O0lBQ2hCQyx3QkFBd0I7ZUFBeEJBLGdDQUF3Qjs7SUFDeEJDLFVBQVU7ZUFBVkEsa0JBQVU7O0lBQ1ZDLHNCQUFzQjtlQUF0QkEsOEJBQXNCOztJQUN0QkMsd0JBQXdCO2VBQXhCQSxnQ0FBd0I7O0lBQ3hCQyxnQkFBZ0I7ZUFBaEJBLHdCQUFnQjs7SUFDaEJDLFdBQVc7ZUFBWEEsbUJBQVc7O0lBQ1hDLFFBQVE7ZUFBUkEsZ0JBQVE7O0lBQ1JDLFVBQVU7ZUFBVkEsa0JBQVU7O0lBQ1ZDLGVBQWU7ZUFBZkEsdUJBQWU7Ozt3QkFDViJ9