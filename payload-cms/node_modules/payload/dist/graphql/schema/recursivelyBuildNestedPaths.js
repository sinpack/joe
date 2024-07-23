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
const _types = require("../../fields/config/types");
const _fieldToWhereInputSchemaMap = /*#__PURE__*/ _interop_require_default(require("./fieldToWhereInputSchemaMap"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const recursivelyBuildNestedPaths = ({ field, nestedFieldName2, parentName, payload })=>{
    const fieldName = (0, _types.fieldAffectsData)(field) ? field.name : undefined;
    const nestedFieldName = fieldName || nestedFieldName2;
    if (field.type === 'tabs') {
        // if the tab has a name, treat it as a group
        // otherwise, treat it as a row
        return field.tabs.reduce((tabSchema, tab)=>{
            tabSchema.push(...recursivelyBuildNestedPaths({
                field: {
                    ...tab,
                    type: 'name' in tab ? 'group' : 'row'
                },
                nestedFieldName2: nestedFieldName,
                parentName,
                payload
            }));
            return tabSchema;
        }, []);
    }
    const nestedPaths = field.fields.reduce((nestedFields, nestedField)=>{
        if (!(0, _types.fieldIsPresentationalOnly)(nestedField)) {
            if (!(0, _types.fieldAffectsData)(nestedField)) {
                return [
                    ...nestedFields,
                    ...recursivelyBuildNestedPaths({
                        field: nestedField,
                        nestedFieldName2: nestedFieldName,
                        parentName,
                        payload
                    })
                ];
            }
            const nestedPathName = (0, _types.fieldAffectsData)(nestedField) ? `${nestedFieldName ? `${nestedFieldName}__` : ''}${nestedField.name}` : undefined;
            const getFieldSchema = (0, _fieldToWhereInputSchemaMap.default)({
                nestedFieldName,
                parentName,
                payload
            })[nestedField.type];
            if (getFieldSchema) {
                const fieldSchema = getFieldSchema({
                    ...nestedField,
                    name: nestedPathName
                });
                if (Array.isArray(fieldSchema)) {
                    return [
                        ...nestedFields,
                        ...fieldSchema
                    ];
                }
                return [
                    ...nestedFields,
                    {
                        key: nestedPathName,
                        type: fieldSchema
                    }
                ];
            }
        }
        return nestedFields;
    }, []);
    return nestedPaths;
};
const _default = recursivelyBuildNestedPaths;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9yZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4nXG5pbXBvcnQgdHlwZSB7IEZpZWxkV2l0aFN1YkZpZWxkcywgVGFic0ZpZWxkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgZmllbGRUb1NjaGVtYU1hcCBmcm9tICcuL2ZpZWxkVG9XaGVyZUlucHV0U2NoZW1hTWFwJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGZpZWxkOiBGaWVsZFdpdGhTdWJGaWVsZHMgfCBUYWJzRmllbGRcbiAgbmVzdGVkRmllbGROYW1lMjogc3RyaW5nXG4gIHBhcmVudE5hbWU6IHN0cmluZ1xuICBwYXlsb2FkOiBQYXlsb2FkXG59XG5cbmNvbnN0IHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyA9ICh7IGZpZWxkLCBuZXN0ZWRGaWVsZE5hbWUyLCBwYXJlbnROYW1lLCBwYXlsb2FkIH06IEFyZ3MpID0+IHtcbiAgY29uc3QgZmllbGROYW1lID0gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgPyBmaWVsZC5uYW1lIDogdW5kZWZpbmVkXG4gIGNvbnN0IG5lc3RlZEZpZWxkTmFtZSA9IGZpZWxkTmFtZSB8fCBuZXN0ZWRGaWVsZE5hbWUyXG5cbiAgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgIC8vIGlmIHRoZSB0YWIgaGFzIGEgbmFtZSwgdHJlYXQgaXQgYXMgYSBncm91cFxuICAgIC8vIG90aGVyd2lzZSwgdHJlYXQgaXQgYXMgYSByb3dcbiAgICByZXR1cm4gZmllbGQudGFicy5yZWR1Y2UoKHRhYlNjaGVtYSwgdGFiOiBhbnkpID0+IHtcbiAgICAgIHRhYlNjaGVtYS5wdXNoKFxuICAgICAgICAuLi5yZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMoe1xuICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICB0eXBlOiAnbmFtZScgaW4gdGFiID8gJ2dyb3VwJyA6ICdyb3cnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmVzdGVkRmllbGROYW1lMjogbmVzdGVkRmllbGROYW1lLFxuICAgICAgICAgIHBhcmVudE5hbWUsXG4gICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgICByZXR1cm4gdGFiU2NoZW1hXG4gICAgfSwgW10pXG4gIH1cblxuICBjb25zdCBuZXN0ZWRQYXRocyA9IGZpZWxkLmZpZWxkcy5yZWR1Y2UoKG5lc3RlZEZpZWxkcywgbmVzdGVkRmllbGQpID0+IHtcbiAgICBpZiAoIWZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkobmVzdGVkRmllbGQpKSB7XG4gICAgICBpZiAoIWZpZWxkQWZmZWN0c0RhdGEobmVzdGVkRmllbGQpKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4ubmVzdGVkRmllbGRzLFxuICAgICAgICAgIC4uLnJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyh7XG4gICAgICAgICAgICBmaWVsZDogbmVzdGVkRmllbGQsXG4gICAgICAgICAgICBuZXN0ZWRGaWVsZE5hbWUyOiBuZXN0ZWRGaWVsZE5hbWUsXG4gICAgICAgICAgICBwYXJlbnROYW1lLFxuICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXN0ZWRQYXRoTmFtZSA9IGZpZWxkQWZmZWN0c0RhdGEobmVzdGVkRmllbGQpXG4gICAgICAgID8gYCR7bmVzdGVkRmllbGROYW1lID8gYCR7bmVzdGVkRmllbGROYW1lfV9fYCA6ICcnfSR7bmVzdGVkRmllbGQubmFtZX1gXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgICBjb25zdCBnZXRGaWVsZFNjaGVtYSA9IGZpZWxkVG9TY2hlbWFNYXAoe1xuICAgICAgICBuZXN0ZWRGaWVsZE5hbWUsXG4gICAgICAgIHBhcmVudE5hbWUsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICB9KVtuZXN0ZWRGaWVsZC50eXBlXVxuXG4gICAgICBpZiAoZ2V0RmllbGRTY2hlbWEpIHtcbiAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSBnZXRGaWVsZFNjaGVtYSh7XG4gICAgICAgICAgLi4ubmVzdGVkRmllbGQsXG4gICAgICAgICAgbmFtZTogbmVzdGVkUGF0aE5hbWUsXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRTY2hlbWEpKSB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5uZXN0ZWRGaWVsZHMsIC4uLmZpZWxkU2NoZW1hXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5uZXN0ZWRGaWVsZHMsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBuZXN0ZWRQYXRoTmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGZpZWxkU2NoZW1hLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmVzdGVkRmllbGRzXG4gIH0sIFtdKVxuXG4gIHJldHVybiBuZXN0ZWRQYXRoc1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHNcbiJdLCJuYW1lcyI6WyJyZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMiLCJmaWVsZCIsIm5lc3RlZEZpZWxkTmFtZTIiLCJwYXJlbnROYW1lIiwicGF5bG9hZCIsImZpZWxkTmFtZSIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwidW5kZWZpbmVkIiwibmVzdGVkRmllbGROYW1lIiwidHlwZSIsInRhYnMiLCJyZWR1Y2UiLCJ0YWJTY2hlbWEiLCJ0YWIiLCJwdXNoIiwibmVzdGVkUGF0aHMiLCJmaWVsZHMiLCJuZXN0ZWRGaWVsZHMiLCJuZXN0ZWRGaWVsZCIsImZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkiLCJuZXN0ZWRQYXRoTmFtZSIsImdldEZpZWxkU2NoZW1hIiwiZmllbGRUb1NjaGVtYU1hcCIsImZpZWxkU2NoZW1hIiwiQXJyYXkiLCJpc0FycmF5Iiwia2V5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBcUZBOzs7ZUFBQTs7O3VCQWxGNEQ7bUZBQy9COzs7Ozs7QUFTN0IsTUFBTUEsOEJBQThCLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxnQkFBZ0IsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQVE7SUFDekYsTUFBTUMsWUFBWUMsSUFBQUEsdUJBQWdCLEVBQUNMLFNBQVNBLE1BQU1NLElBQUksR0FBR0M7SUFDekQsTUFBTUMsa0JBQWtCSixhQUFhSDtJQUVyQyxJQUFJRCxNQUFNUyxJQUFJLEtBQUssUUFBUTtRQUN6Qiw2Q0FBNkM7UUFDN0MsK0JBQStCO1FBQy9CLE9BQU9ULE1BQU1VLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLFdBQVdDO1lBQ25DRCxVQUFVRSxJQUFJLElBQ1RmLDRCQUE0QjtnQkFDN0JDLE9BQU87b0JBQ0wsR0FBR2EsR0FBRztvQkFDTkosTUFBTSxVQUFVSSxNQUFNLFVBQVU7Z0JBQ2xDO2dCQUNBWixrQkFBa0JPO2dCQUNsQk47Z0JBQ0FDO1lBQ0Y7WUFFRixPQUFPUztRQUNULEdBQUcsRUFBRTtJQUNQO0lBRUEsTUFBTUcsY0FBY2YsTUFBTWdCLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDLENBQUNNLGNBQWNDO1FBQ3JELElBQUksQ0FBQ0MsSUFBQUEsZ0NBQXlCLEVBQUNELGNBQWM7WUFDM0MsSUFBSSxDQUFDYixJQUFBQSx1QkFBZ0IsRUFBQ2EsY0FBYztnQkFDbEMsT0FBTzt1QkFDRkQ7dUJBQ0FsQiw0QkFBNEI7d0JBQzdCQyxPQUFPa0I7d0JBQ1BqQixrQkFBa0JPO3dCQUNsQk47d0JBQ0FDO29CQUNGO2lCQUNEO1lBQ0g7WUFFQSxNQUFNaUIsaUJBQWlCZixJQUFBQSx1QkFBZ0IsRUFBQ2EsZUFDcEMsQ0FBQyxFQUFFVixrQkFBa0IsQ0FBQyxFQUFFQSxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFVSxZQUFZWixJQUFJLENBQUMsQ0FBQyxHQUNyRUM7WUFDSixNQUFNYyxpQkFBaUJDLElBQUFBLG1DQUFnQixFQUFDO2dCQUN0Q2Q7Z0JBQ0FOO2dCQUNBQztZQUNGLEVBQUUsQ0FBQ2UsWUFBWVQsSUFBSSxDQUFDO1lBRXBCLElBQUlZLGdCQUFnQjtnQkFDbEIsTUFBTUUsY0FBY0YsZUFBZTtvQkFDakMsR0FBR0gsV0FBVztvQkFDZFosTUFBTWM7Z0JBQ1I7Z0JBRUEsSUFBSUksTUFBTUMsT0FBTyxDQUFDRixjQUFjO29CQUM5QixPQUFPOzJCQUFJTjsyQkFBaUJNO3FCQUFZO2dCQUMxQztnQkFFQSxPQUFPO3VCQUNGTjtvQkFDSDt3QkFDRVMsS0FBS047d0JBQ0xYLE1BQU1jO29CQUNSO2lCQUNEO1lBQ0g7UUFDRjtRQUVBLE9BQU9OO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0Y7QUFDVDtNQUVBLFdBQWVoQiJ9