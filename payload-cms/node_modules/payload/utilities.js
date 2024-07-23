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
    afterReadPromise: function() {
        return _promise.promise;
    },
    afterReadTraverseFields: function() {
        return _traverseFields.traverseFields;
    },
    combineMerge: function() {
        return _combineMerge.combineMerge;
    },
    configToJSONSchema: function() {
        return _configToJSONSchema.configToJSONSchema;
    },
    createArrayFromCommaDelineated: function() {
        return _createArrayFromCommaDelineated.createArrayFromCommaDelineated;
    },
    deepCopyObject: function() {
        return _deepCopyObject.deepCopyObject;
    },
    deepMerge: function() {
        return _deepMerge.deepMerge;
    },
    entityToJSONSchema: function() {
        return _configToJSONSchema.entityToJSONSchema;
    },
    extractTranslations: function() {
        return _extractTranslations.extractTranslations;
    },
    fieldSchemaToJSON: function() {
        return _fieldSchemaToJSON.fieldSchemaToJSON;
    },
    fieldsToJSONSchema: function() {
        return _configToJSONSchema.fieldsToJSONSchema;
    },
    flattenTopLevelFields: function() {
        return _flattenTopLevelFields.default;
    },
    formatLabels: function() {
        return _formatLabels.formatLabels;
    },
    formatNames: function() {
        return _formatLabels.formatNames;
    },
    getCollectionIDFieldTypes: function() {
        return _getCollectionIDFieldTypes.getCollectionIDFieldTypes;
    },
    getIDType: function() {
        return _getIDType.getIDType;
    },
    getTranslation: function() {
        return _getTranslation.getTranslation;
    },
    i18nInit: function() {
        return _init.i18nInit;
    },
    isValidID: function() {
        return _isValidID.isValidID;
    },
    toWords: function() {
        return _formatLabels.toWords;
    },
    withMergedProps: function() {
        return _WithMergedProps.withMergedProps;
    },
    withNullableJSONSchemaType: function() {
        return _configToJSONSchema.withNullableJSONSchemaType;
    }
});
const _WithMergedProps = require("./dist/admin/components/utilities/WithMergedProps");
const _promise = require("./dist/fields/hooks/afterRead/promise");
const _traverseFields = require("./dist/fields/hooks/afterRead/traverseFields");
const _extractTranslations = require("./dist/translations/extractTranslations");
const _init = require("./dist/translations/init");
const _combineMerge = require("./dist/utilities/combineMerge");
const _configToJSONSchema = require("./dist/utilities/configToJSONSchema");
const _createArrayFromCommaDelineated = require("./dist/utilities/createArrayFromCommaDelineated");
const _deepCopyObject = require("./dist/utilities/deepCopyObject");
const _deepMerge = require("./dist/utilities/deepMerge");
const _fieldSchemaToJSON = require("./dist/utilities/fieldSchemaToJSON");
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("./dist/utilities/flattenTopLevelFields"));
const _formatLabels = require("./dist/utilities/formatLabels");
const _getCollectionIDFieldTypes = require("./dist/utilities/getCollectionIDFieldTypes");
const _getIDType = require("./dist/utilities/getIDType");
const _getTranslation = require("./dist/utilities/getTranslation");
const _isValidID = require("./dist/utilities/isValidID");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRzL3V0aWxpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB3aXRoTWVyZ2VkUHJvcHMgfSBmcm9tICcuLi9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9XaXRoTWVyZ2VkUHJvcHMnXG5leHBvcnQgeyBwcm9taXNlIGFzIGFmdGVyUmVhZFByb21pc2UgfSBmcm9tICcuLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL3Byb21pc2UnXG5leHBvcnQgeyB0cmF2ZXJzZUZpZWxkcyBhcyBhZnRlclJlYWRUcmF2ZXJzZUZpZWxkcyB9IGZyb20gJy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQvdHJhdmVyc2VGaWVsZHMnXG5cbmV4cG9ydCB7IGV4dHJhY3RUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi90cmFuc2xhdGlvbnMvZXh0cmFjdFRyYW5zbGF0aW9ucydcbmV4cG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vdHJhbnNsYXRpb25zL2luaXQnXG5leHBvcnQgeyBjb21iaW5lTWVyZ2UgfSBmcm9tICcuLi91dGlsaXRpZXMvY29tYmluZU1lcmdlJ1xuXG5leHBvcnQge1xuICBjb25maWdUb0pTT05TY2hlbWEsXG4gIGVudGl0eVRvSlNPTlNjaGVtYSxcbiAgZmllbGRzVG9KU09OU2NoZW1hLFxuICB3aXRoTnVsbGFibGVKU09OU2NoZW1hVHlwZSxcbn0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbmZpZ1RvSlNPTlNjaGVtYSdcbmV4cG9ydCB7IGNyZWF0ZUFycmF5RnJvbUNvbW1hRGVsaW5lYXRlZCB9IGZyb20gJy4uL3V0aWxpdGllcy9jcmVhdGVBcnJheUZyb21Db21tYURlbGluZWF0ZWQnXG5cbmV4cG9ydCB7IGRlZXBDb3B5T2JqZWN0IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2RlZXBDb3B5T2JqZWN0J1xuZXhwb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2RlZXBNZXJnZSdcbmV4cG9ydCB7IGZpZWxkU2NoZW1hVG9KU09OIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2ZpZWxkU2NoZW1hVG9KU09OJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGF0dGVuVG9wTGV2ZWxGaWVsZHMgfSBmcm9tICcuLi91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzJ1xuZXhwb3J0IHsgZm9ybWF0TGFiZWxzLCBmb3JtYXROYW1lcywgdG9Xb3JkcyB9IGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMnXG5leHBvcnQgeyBnZXRDb2xsZWN0aW9uSURGaWVsZFR5cGVzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dldENvbGxlY3Rpb25JREZpZWxkVHlwZXMnXG5leHBvcnQgeyBnZXRJRFR5cGUgfSBmcm9tICcuLi91dGlsaXRpZXMvZ2V0SURUeXBlJ1xuXG5leHBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmV4cG9ydCB7IGlzVmFsaWRJRCB9IGZyb20gJy4uL3V0aWxpdGllcy9pc1ZhbGlkSUQnXG4iXSwibmFtZXMiOlsiYWZ0ZXJSZWFkUHJvbWlzZSIsInByb21pc2UiLCJhZnRlclJlYWRUcmF2ZXJzZUZpZWxkcyIsInRyYXZlcnNlRmllbGRzIiwiY29tYmluZU1lcmdlIiwiY29uZmlnVG9KU09OU2NoZW1hIiwiY3JlYXRlQXJyYXlGcm9tQ29tbWFEZWxpbmVhdGVkIiwiZGVlcENvcHlPYmplY3QiLCJkZWVwTWVyZ2UiLCJlbnRpdHlUb0pTT05TY2hlbWEiLCJleHRyYWN0VHJhbnNsYXRpb25zIiwiZmllbGRTY2hlbWFUb0pTT04iLCJmaWVsZHNUb0pTT05TY2hlbWEiLCJmbGF0dGVuVG9wTGV2ZWxGaWVsZHMiLCJmb3JtYXRMYWJlbHMiLCJmb3JtYXROYW1lcyIsImdldENvbGxlY3Rpb25JREZpZWxkVHlwZXMiLCJnZXRJRFR5cGUiLCJnZXRUcmFuc2xhdGlvbiIsImkxOG5Jbml0IiwiaXNWYWxpZElEIiwidG9Xb3JkcyIsIndpdGhNZXJnZWRQcm9wcyIsIndpdGhOdWxsYWJsZUpTT05TY2hlbWFUeXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQ29CQSxnQkFBZ0I7ZUFBM0JDLGdCQUFPOztJQUNXQyx1QkFBdUI7ZUFBekNDLDhCQUFjOztJQUlkQyxZQUFZO2VBQVpBLDBCQUFZOztJQUduQkMsa0JBQWtCO2VBQWxCQSxzQ0FBa0I7O0lBS1hDLDhCQUE4QjtlQUE5QkEsOERBQThCOztJQUU5QkMsY0FBYztlQUFkQSw4QkFBYzs7SUFDZEMsU0FBUztlQUFUQSxvQkFBUzs7SUFQaEJDLGtCQUFrQjtlQUFsQkEsc0NBQWtCOztJQU5YQyxtQkFBbUI7ZUFBbkJBLHdDQUFtQjs7SUFjbkJDLGlCQUFpQjtlQUFqQkEsb0NBQWlCOztJQVB4QkMsa0JBQWtCO2VBQWxCQSxzQ0FBa0I7O0lBUUFDLHFCQUFxQjtlQUFyQkEsOEJBQXFCOztJQUNoQ0MsWUFBWTtlQUFaQSwwQkFBWTs7SUFBRUMsV0FBVztlQUFYQSx5QkFBVzs7SUFDekJDLHlCQUF5QjtlQUF6QkEsb0RBQXlCOztJQUN6QkMsU0FBUztlQUFUQSxvQkFBUzs7SUFFVEMsY0FBYztlQUFkQSw4QkFBYzs7SUFuQmRDLFFBQVE7ZUFBUkEsY0FBUTs7SUFvQlJDLFNBQVM7ZUFBVEEsb0JBQVM7O0lBTGtCQyxPQUFPO2VBQVBBLHFCQUFPOztJQXBCbENDLGVBQWU7ZUFBZkEsZ0NBQWU7O0lBWXRCQywwQkFBMEI7ZUFBMUJBLDhDQUEwQjs7O2lDQVpJO3lCQUNZO2dDQUNjO3FDQUV0QjtzQkFDWDs4QkFDSTtvQ0FPdEI7Z0RBQ3dDO2dDQUVoQjsyQkFDTDttQ0FDUTs4RUFDZTs4QkFDRTsyQ0FDVDsyQkFDaEI7Z0NBRUs7MkJBQ0wifQ==