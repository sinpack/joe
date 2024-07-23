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
const _graphql = require("graphql");
const _graphqltypejson = /*#__PURE__*/ _interop_require_default(require("graphql-type-json"));
const _combineParentName = /*#__PURE__*/ _interop_require_default(require("../utilities/combineParentName"));
const _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
const _recursivelyBuildNestedPaths = /*#__PURE__*/ _interop_require_default(require("./recursivelyBuildNestedPaths"));
const _withOperators = require("./withOperators");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const fieldToSchemaMap = ({ nestedFieldName, parentName, payload })=>({
        array: (field)=>(0, _recursivelyBuildNestedPaths.default)({
                field,
                nestedFieldName2: nestedFieldName,
                parentName,
                payload
            }),
        checkbox: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        code: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        collapsible: (field)=>(0, _recursivelyBuildNestedPaths.default)({
                field,
                nestedFieldName2: nestedFieldName,
                parentName,
                payload
            }),
        date: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        email: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        group: (field)=>(0, _recursivelyBuildNestedPaths.default)({
                field,
                nestedFieldName2: nestedFieldName,
                parentName,
                payload
            }),
        json: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        number: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        point: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        radio: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        relationship: (field)=>{
            if (Array.isArray(field.relationTo)) {
                return {
                    type: new _graphql.GraphQLInputObjectType({
                        name: `${(0, _combineParentName.default)(parentName, field.name)}_Relation`,
                        fields: {
                            relationTo: {
                                type: new _graphql.GraphQLEnumType({
                                    name: `${(0, _combineParentName.default)(parentName, field.name)}_Relation_RelationTo`,
                                    values: field.relationTo.reduce((values, relation)=>({
                                            ...values,
                                            [(0, _formatName.default)(relation)]: {
                                                value: relation
                                            }
                                        }), {})
                                })
                            },
                            value: {
                                type: _graphqltypejson.default
                            }
                        }
                    })
                };
            }
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        richText: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        row: (field)=>(0, _recursivelyBuildNestedPaths.default)({
                field,
                nestedFieldName2: nestedFieldName,
                parentName,
                payload
            }),
        select: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        tabs: (field)=>(0, _recursivelyBuildNestedPaths.default)({
                field,
                nestedFieldName2: nestedFieldName,
                parentName,
                payload
            }),
        text: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        textarea: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            }),
        upload: (field)=>({
                type: (0, _withOperators.withOperators)(field, parentName)
            })
    });
const _default = fieldToSchemaMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9maWVsZFRvV2hlcmVJbnB1dFNjaGVtYU1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMRW51bVR5cGUsIEdyYXBoUUxJbnB1dE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcgfSBmcm9tICdncmFwaHFsJ1xuaW1wb3J0IEdyYXBoUUxKU09OIGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi8uLidcbmltcG9ydCB0eXBlIHtcbiAgQXJyYXlGaWVsZCxcbiAgQ2hlY2tib3hGaWVsZCxcbiAgQ29kZUZpZWxkLFxuICBDb2xsYXBzaWJsZUZpZWxkLFxuICBEYXRlRmllbGQsXG4gIEVtYWlsRmllbGQsXG4gIEdyb3VwRmllbGQsXG4gIEpTT05GaWVsZCxcbiAgTnVtYmVyRmllbGQsXG4gIFBvaW50RmllbGQsXG4gIFJhZGlvRmllbGQsXG4gIFJlbGF0aW9uc2hpcEZpZWxkLFxuICBSaWNoVGV4dEZpZWxkLFxuICBSb3dGaWVsZCxcbiAgU2VsZWN0RmllbGQsXG4gIFRhYnNGaWVsZCxcbiAgVGV4dEZpZWxkLFxuICBUZXh0YXJlYUZpZWxkLFxuICBVcGxvYWRGaWVsZCxcbn0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGNvbWJpbmVQYXJlbnROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9jb21iaW5lUGFyZW50TmFtZSdcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJ1xuaW1wb3J0IHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyBmcm9tICcuL3JlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocydcbmltcG9ydCB7IHdpdGhPcGVyYXRvcnMgfSBmcm9tICcuL3dpdGhPcGVyYXRvcnMnXG5cbnR5cGUgQXJncyA9IHtcbiAgbmVzdGVkRmllbGROYW1lPzogc3RyaW5nXG4gIHBhcmVudE5hbWU6IHN0cmluZ1xuICBwYXlsb2FkOiBQYXlsb2FkXG59XG5cbmNvbnN0IGZpZWxkVG9TY2hlbWFNYXAgPSAoeyBuZXN0ZWRGaWVsZE5hbWUsIHBhcmVudE5hbWUsIHBheWxvYWQgfTogQXJncyk6IGFueSA9PiAoe1xuICBhcnJheTogKGZpZWxkOiBBcnJheUZpZWxkKSA9PlxuICAgIHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyh7XG4gICAgICBmaWVsZCxcbiAgICAgIG5lc3RlZEZpZWxkTmFtZTI6IG5lc3RlZEZpZWxkTmFtZSxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgICBwYXlsb2FkLFxuICAgIH0pLFxuICBjaGVja2JveDogKGZpZWxkOiBDaGVja2JveEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoZmllbGQsIHBhcmVudE5hbWUpLFxuICB9KSxcbiAgY29kZTogKGZpZWxkOiBDb2RlRmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhmaWVsZCwgcGFyZW50TmFtZSksXG4gIH0pLFxuICBjb2xsYXBzaWJsZTogKGZpZWxkOiBDb2xsYXBzaWJsZUZpZWxkKSA9PlxuICAgIHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyh7XG4gICAgICBmaWVsZCxcbiAgICAgIG5lc3RlZEZpZWxkTmFtZTI6IG5lc3RlZEZpZWxkTmFtZSxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgICBwYXlsb2FkLFxuICAgIH0pLFxuICBkYXRlOiAoZmllbGQ6IERhdGVGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKGZpZWxkLCBwYXJlbnROYW1lKSxcbiAgfSksXG4gIGVtYWlsOiAoZmllbGQ6IEVtYWlsRmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhmaWVsZCwgcGFyZW50TmFtZSksXG4gIH0pLFxuICBncm91cDogKGZpZWxkOiBHcm91cEZpZWxkKSA9PlxuICAgIHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyh7XG4gICAgICBmaWVsZCxcbiAgICAgIG5lc3RlZEZpZWxkTmFtZTI6IG5lc3RlZEZpZWxkTmFtZSxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgICBwYXlsb2FkLFxuICAgIH0pLFxuICBqc29uOiAoZmllbGQ6IEpTT05GaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKGZpZWxkLCBwYXJlbnROYW1lKSxcbiAgfSksXG4gIG51bWJlcjogKGZpZWxkOiBOdW1iZXJGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKGZpZWxkLCBwYXJlbnROYW1lKSxcbiAgfSksXG4gIHBvaW50OiAoZmllbGQ6IFBvaW50RmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhmaWVsZCwgcGFyZW50TmFtZSksXG4gIH0pLFxuICByYWRpbzogKGZpZWxkOiBSYWRpb0ZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoZmllbGQsIHBhcmVudE5hbWUpLFxuICB9KSxcbiAgcmVsYXRpb25zaGlwOiAoZmllbGQ6IFJlbGF0aW9uc2hpcEZpZWxkKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQucmVsYXRpb25UbykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fUmVsYXRpb25gLFxuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgcmVsYXRpb25Ubzoge1xuICAgICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fUmVsYXRpb25fUmVsYXRpb25Ub2AsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBmaWVsZC5yZWxhdGlvblRvLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgICh2YWx1ZXMsIHJlbGF0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKHJlbGF0aW9uKV06IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbHVlOiB7IHR5cGU6IEdyYXBoUUxKU09OIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoZmllbGQsIHBhcmVudE5hbWUpLFxuICAgIH1cbiAgfSxcbiAgcmljaFRleHQ6IChmaWVsZDogUmljaFRleHRGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKGZpZWxkLCBwYXJlbnROYW1lKSxcbiAgfSksXG4gIHJvdzogKGZpZWxkOiBSb3dGaWVsZCkgPT5cbiAgICByZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMoe1xuICAgICAgZmllbGQsXG4gICAgICBuZXN0ZWRGaWVsZE5hbWUyOiBuZXN0ZWRGaWVsZE5hbWUsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICAgcGF5bG9hZCxcbiAgICB9KSxcbiAgc2VsZWN0OiAoZmllbGQ6IFNlbGVjdEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoZmllbGQsIHBhcmVudE5hbWUpLFxuICB9KSxcbiAgdGFiczogKGZpZWxkOiBUYWJzRmllbGQpID0+XG4gICAgcmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzKHtcbiAgICAgIGZpZWxkLFxuICAgICAgbmVzdGVkRmllbGROYW1lMjogbmVzdGVkRmllbGROYW1lLFxuICAgICAgcGFyZW50TmFtZSxcbiAgICAgIHBheWxvYWQsXG4gICAgfSksXG4gIHRleHQ6IChmaWVsZDogVGV4dEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoZmllbGQsIHBhcmVudE5hbWUpLFxuICB9KSxcbiAgdGV4dGFyZWE6IChmaWVsZDogVGV4dGFyZWFGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKGZpZWxkLCBwYXJlbnROYW1lKSxcbiAgfSksXG4gIHVwbG9hZDogKGZpZWxkOiBVcGxvYWRGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKGZpZWxkLCBwYXJlbnROYW1lKSxcbiAgfSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmaWVsZFRvU2NoZW1hTWFwXG4iXSwibmFtZXMiOlsiZmllbGRUb1NjaGVtYU1hcCIsIm5lc3RlZEZpZWxkTmFtZSIsInBhcmVudE5hbWUiLCJwYXlsb2FkIiwiYXJyYXkiLCJmaWVsZCIsInJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyIsIm5lc3RlZEZpZWxkTmFtZTIiLCJjaGVja2JveCIsInR5cGUiLCJ3aXRoT3BlcmF0b3JzIiwiY29kZSIsImNvbGxhcHNpYmxlIiwiZGF0ZSIsImVtYWlsIiwiZ3JvdXAiLCJqc29uIiwibnVtYmVyIiwicG9pbnQiLCJyYWRpbyIsInJlbGF0aW9uc2hpcCIsIkFycmF5IiwiaXNBcnJheSIsInJlbGF0aW9uVG8iLCJHcmFwaFFMSW5wdXRPYmplY3RUeXBlIiwibmFtZSIsImNvbWJpbmVQYXJlbnROYW1lIiwiZmllbGRzIiwiR3JhcGhRTEVudW1UeXBlIiwidmFsdWVzIiwicmVkdWNlIiwicmVsYXRpb24iLCJmb3JtYXROYW1lIiwidmFsdWUiLCJHcmFwaFFMSlNPTiIsInJpY2hUZXh0Iiwicm93Iiwic2VsZWN0IiwidGFicyIsInRleHQiLCJ0ZXh0YXJlYSIsInVwbG9hZCJdLCJyYW5nZU1h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