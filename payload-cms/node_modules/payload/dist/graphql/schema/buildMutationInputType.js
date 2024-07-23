/* eslint-disable no-use-before-define */ "use strict";
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
    default: function() {
        return _default;
    },
    getCollectionIDType: function() {
        return getCollectionIDType;
    }
});
const _graphql = require("graphql");
const _graphqltypejson = require("graphql-type-json");
const _types = require("../../fields/config/types");
const _formatLabels = require("../../utilities/formatLabels");
const _groupOrTabHasRequiredSubfield = require("../../utilities/groupOrTabHasRequiredSubfield");
const _combineParentName = /*#__PURE__*/ _interop_require_default(require("../utilities/combineParentName"));
const _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
const _withNullableType = /*#__PURE__*/ _interop_require_default(require("./withNullableType"));
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/flattenTopLevelFields"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const idFieldTypes = {
    number: _graphql.GraphQLInt,
    text: _graphql.GraphQLString
};
const getCollectionIDType = (payload, collection)=>{
    const idField = (0, _flattenTopLevelFields.default)(collection.fields).find((field)=>(0, _types.fieldAffectsData)(field) && field.name === 'id');
    if (!idField) {
        return idFieldTypes[payload.db.defaultIDType];
    }
    return idFieldTypes[idField.type];
};
function buildMutationInputType(payload, name, fields, parentName, forceNullable = false) {
    const fieldToSchemaMap = {
        array: (inputObjectTypeConfig, field)=>{
            const fullName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            let type = buildMutationInputType(payload, fullName, field.fields, fullName);
            if (!type) return inputObjectTypeConfig;
            type = new _graphql.GraphQLList((0, _withNullableType.default)(field, type, forceNullable));
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type
                }
            };
        },
        blocks: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: _graphqltypejson.GraphQLJSON
                }
            }),
        checkbox: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: _graphql.GraphQLBoolean
                }
            }),
        code: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
                }
            }),
        collapsible: (inputObjectTypeConfig, field)=>field.fields.reduce((acc, subField)=>{
                const addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) return addSubField(acc, subField);
                return acc;
            }, inputObjectTypeConfig),
        date: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
                }
            }),
        email: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
                }
            }),
        group: (inputObjectTypeConfig, field)=>{
            const requiresAtLeastOneField = (0, _groupOrTabHasRequiredSubfield.groupOrTabHasRequiredSubfield)(field);
            const fullName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            let type = buildMutationInputType(payload, fullName, field.fields, fullName);
            if (!type) return inputObjectTypeConfig;
            if (requiresAtLeastOneField) type = new _graphql.GraphQLNonNull(type);
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type
                }
            };
        },
        json: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, _graphqltypejson.GraphQLJSON, forceNullable)
                }
            }),
        number: (inputObjectTypeConfig, field)=>{
            const type = field.name === 'id' ? _graphql.GraphQLInt : _graphql.GraphQLFloat;
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, field.hasMany === true ? new _graphql.GraphQLList(type) : type, forceNullable)
                }
            };
        },
        point: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, new _graphql.GraphQLList(_graphql.GraphQLFloat), forceNullable)
                }
            }),
        radio: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
                }
            }),
        relationship: (inputObjectTypeConfig, field)=>{
            const { relationTo } = field;
            let type;
            if (Array.isArray(relationTo)) {
                const fullName = `${(0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true))}RelationshipInput`;
                type = new _graphql.GraphQLInputObjectType({
                    name: fullName,
                    fields: {
                        relationTo: {
                            type: new _graphql.GraphQLEnumType({
                                name: `${fullName}RelationTo`,
                                values: relationTo.reduce((values, option)=>({
                                        ...values,
                                        [(0, _formatName.default)(option)]: {
                                            value: option
                                        }
                                    }), {})
                            })
                        },
                        value: {
                            type: _graphqltypejson.GraphQLJSON
                        }
                    }
                });
            } else {
                type = getCollectionIDType(payload, payload.collections[relationTo].config);
            }
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: field.hasMany ? new _graphql.GraphQLList(type) : type
                }
            };
        },
        richText: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, _graphqltypejson.GraphQLJSON, forceNullable)
                }
            }),
        row: (inputObjectTypeConfig, field)=>field.fields.reduce((acc, subField)=>{
                const addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) return addSubField(acc, subField);
                return acc;
            }, inputObjectTypeConfig),
        select: (inputObjectTypeConfig, field)=>{
            const formattedName = `${(0, _combineParentName.default)(parentName, field.name)}_MutationInput`;
            let type = new _graphql.GraphQLEnumType({
                name: formattedName,
                values: field.options.reduce((values, option)=>{
                    if ((0, _types.optionIsObject)(option)) {
                        return {
                            ...values,
                            [(0, _formatName.default)(option.value)]: {
                                value: option.value
                            }
                        };
                    }
                    return {
                        ...values,
                        [(0, _formatName.default)(option)]: {
                            value: option
                        }
                    };
                }, {})
            });
            type = field.hasMany ? new _graphql.GraphQLList(type) : type;
            type = (0, _withNullableType.default)(field, type, forceNullable);
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type
                }
            };
        },
        tabs: (inputObjectTypeConfig, field)=>{
            return field.tabs.reduce((acc, tab)=>{
                if ((0, _types.tabHasName)(tab)) {
                    const fullName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(tab.name, true));
                    const requiresAtLeastOneField = (0, _groupOrTabHasRequiredSubfield.groupOrTabHasRequiredSubfield)(field);
                    let type = buildMutationInputType(payload, fullName, tab.fields, fullName);
                    if (!type) return acc;
                    if (requiresAtLeastOneField) type = new _graphql.GraphQLNonNull(type);
                    return {
                        ...acc,
                        [tab.name]: {
                            type
                        }
                    };
                }
                return {
                    ...acc,
                    ...tab.fields.reduce((subFieldSchema, subField)=>{
                        const addSubField = fieldToSchemaMap[subField.type];
                        if (addSubField) return addSubField(subFieldSchema, subField);
                        return subFieldSchema;
                    }, acc)
                };
            }, inputObjectTypeConfig);
        },
        text: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, field.hasMany === true ? new _graphql.GraphQLList(_graphql.GraphQLString) : _graphql.GraphQLString, forceNullable)
                }
            }),
        textarea: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
                }
            }),
        upload: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
                }
            })
    };
    const fieldName = (0, _formatName.default)(name);
    const fieldSchemas = fields.reduce((inputObjectTypeConfig, field)=>{
        const fieldSchema = fieldToSchemaMap[field.type];
        if (typeof fieldSchema !== 'function') {
            return inputObjectTypeConfig;
        }
        const schema = fieldSchema(inputObjectTypeConfig, field);
        if (Object.keys(schema).length === 0) {
            return inputObjectTypeConfig;
        }
        return {
            ...inputObjectTypeConfig,
            ...fieldSchema(inputObjectTypeConfig, field)
        };
    }, {});
    if (Object.keys(fieldSchemas).length === 0) {
        return null;
    }
    return new _graphql.GraphQLInputObjectType({
        name: `mutation${fieldName}Input`,
        fields: fieldSchemas
    });
}
const _default = buildMutationInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZE11dGF0aW9uSW5wdXRUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxJbnB1dEZpZWxkQ29uZmlnLCBHcmFwaFFMU2NhbGFyVHlwZSwgR3JhcGhRTFR5cGUgfSBmcm9tICdncmFwaHFsJ1xuXG5pbXBvcnQge1xuICBHcmFwaFFMQm9vbGVhbixcbiAgR3JhcGhRTEVudW1UeXBlLFxuICBHcmFwaFFMRmxvYXQsXG4gIEdyYXBoUUxJbnB1dE9iamVjdFR5cGUsXG4gIEdyYXBoUUxJbnQsXG4gIEdyYXBoUUxMaXN0LFxuICBHcmFwaFFMTm9uTnVsbCxcbiAgR3JhcGhRTFN0cmluZyxcbn0gZnJvbSAnZ3JhcGhxbCdcbmltcG9ydCB7IEdyYXBoUUxKU09OIH0gZnJvbSAnZ3JhcGhxbC10eXBlLWpzb24nXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHtcbiAgQXJyYXlGaWVsZCxcbiAgQmxvY2tGaWVsZCxcbiAgQ2hlY2tib3hGaWVsZCxcbiAgQ29kZUZpZWxkLFxuICBDb2xsYXBzaWJsZUZpZWxkLFxuICBEYXRlRmllbGQsXG4gIEVtYWlsRmllbGQsXG4gIEZpZWxkLFxuICBHcm91cEZpZWxkLFxuICBKU09ORmllbGQsXG4gIE51bWJlckZpZWxkLFxuICBQb2ludEZpZWxkLFxuICBSYWRpb0ZpZWxkLFxuICBSZWxhdGlvbnNoaXBGaWVsZCxcbiAgUmljaFRleHRGaWVsZCxcbiAgUm93RmllbGQsXG4gIFNlbGVjdEZpZWxkLFxuICBUYWJzRmllbGQsXG4gIFRleHRGaWVsZCxcbiAgVGV4dGFyZWFGaWVsZCxcbiAgVXBsb2FkRmllbGQsXG59IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi9wYXlsb2FkJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhLCBvcHRpb25Jc09iamVjdCwgdGFiSGFzTmFtZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdExhYmVscydcbmltcG9ydCB7IGdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkJ1xuaW1wb3J0IGNvbWJpbmVQYXJlbnROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9jb21iaW5lUGFyZW50TmFtZSdcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJ1xuaW1wb3J0IHdpdGhOdWxsYWJsZVR5cGUgZnJvbSAnLi93aXRoTnVsbGFibGVUeXBlJ1xuaW1wb3J0IGZsYXR0ZW5GaWVsZHMgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2ZsYXR0ZW5Ub3BMZXZlbEZpZWxkcydcblxuY29uc3QgaWRGaWVsZFR5cGVzID0ge1xuICBudW1iZXI6IEdyYXBoUUxJbnQsXG4gIHRleHQ6IEdyYXBoUUxTdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb2xsZWN0aW9uSURUeXBlID0gKFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLFxuKTogR3JhcGhRTFNjYWxhclR5cGUgPT4ge1xuICBjb25zdCBpZEZpZWxkID0gZmxhdHRlbkZpZWxkcyhjb2xsZWN0aW9uLmZpZWxkcykuZmluZChcbiAgICAoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdpZCcsXG4gIClcblxuICBpZiAoIWlkRmllbGQpIHtcbiAgICByZXR1cm4gaWRGaWVsZFR5cGVzW3BheWxvYWQuZGIuZGVmYXVsdElEVHlwZV1cbiAgfVxuXG4gIHJldHVybiBpZEZpZWxkVHlwZXNbaWRGaWVsZC50eXBlXVxufVxuXG5leHBvcnQgdHlwZSBJbnB1dE9iamVjdFR5cGVDb25maWcgPSB7XG4gIFtwYXRoOiBzdHJpbmddOiBHcmFwaFFMSW5wdXRGaWVsZENvbmZpZ1xufVxuXG5mdW5jdGlvbiBidWlsZE11dGF0aW9uSW5wdXRUeXBlKFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBuYW1lOiBzdHJpbmcsXG4gIGZpZWxkczogRmllbGRbXSxcbiAgcGFyZW50TmFtZTogc3RyaW5nLFxuICBmb3JjZU51bGxhYmxlID0gZmFsc2UsXG4pOiBHcmFwaFFMSW5wdXRPYmplY3RUeXBlIHwgbnVsbCB7XG4gIGNvbnN0IGZpZWxkVG9TY2hlbWFNYXAgPSB7XG4gICAgYXJyYXk6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IEFycmF5RmllbGQpID0+IHtcbiAgICAgIGNvbnN0IGZ1bGxOYW1lID0gY29tYmluZVBhcmVudE5hbWUocGFyZW50TmFtZSwgdG9Xb3JkcyhmaWVsZC5uYW1lLCB0cnVlKSlcbiAgICAgIGxldCB0eXBlOiBHcmFwaFFMTGlzdDxHcmFwaFFMVHlwZT4gfCBHcmFwaFFMVHlwZSA9IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUoXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIGZ1bGxOYW1lLFxuICAgICAgICBmaWVsZC5maWVsZHMsXG4gICAgICAgIGZ1bGxOYW1lLFxuICAgICAgKVxuXG4gICAgICBpZiAoIXR5cGUpIHJldHVybiBpbnB1dE9iamVjdFR5cGVDb25maWdcblxuICAgICAgdHlwZSA9IG5ldyBHcmFwaFFMTGlzdCh3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCB0eXBlLCBmb3JjZU51bGxhYmxlKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGUgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGJsb2NrczogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQmxvY2tGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiBHcmFwaFFMSlNPTiB9LFxuICAgIH0pLFxuICAgIGNoZWNrYm94OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBDaGVja2JveEZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgfSksXG4gICAgY29kZTogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQ29kZUZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxTdHJpbmcsIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAgY29sbGFwc2libGU6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IENvbGxhcHNpYmxlRmllbGQpID0+XG4gICAgICBmaWVsZC5maWVsZHMucmVkdWNlKChhY2MsIHN1YkZpZWxkOiBDb2xsYXBzaWJsZUZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFN1YkZpZWxkID0gZmllbGRUb1NjaGVtYU1hcFtzdWJGaWVsZC50eXBlXVxuICAgICAgICBpZiAoYWRkU3ViRmllbGQpIHJldHVybiBhZGRTdWJGaWVsZChhY2MsIHN1YkZpZWxkKVxuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9LCBpbnB1dE9iamVjdFR5cGVDb25maWcpLFxuICAgIGRhdGU6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IERhdGVGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIGVtYWlsOiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBFbWFpbEZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxTdHJpbmcsIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAgZ3JvdXA6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IEdyb3VwRmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkID0gZ3JvdXBPclRhYkhhc1JlcXVpcmVkU3ViZmllbGQoZmllbGQpXG4gICAgICBjb25zdCBmdWxsTmFtZSA9IGNvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIHRvV29yZHMoZmllbGQubmFtZSwgdHJ1ZSkpXG4gICAgICBsZXQgdHlwZTogR3JhcGhRTFR5cGUgPSBidWlsZE11dGF0aW9uSW5wdXRUeXBlKHBheWxvYWQsIGZ1bGxOYW1lLCBmaWVsZC5maWVsZHMsIGZ1bGxOYW1lKVxuXG4gICAgICBpZiAoIXR5cGUpIHJldHVybiBpbnB1dE9iamVjdFR5cGVDb25maWdcblxuICAgICAgaWYgKHJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkKSB0eXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKHR5cGUpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlIH0sXG4gICAgICB9XG4gICAgfSxcbiAgICBqc29uOiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBKU09ORmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTEpTT04sIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAgbnVtYmVyOiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBOdW1iZXJGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGZpZWxkLm5hbWUgPT09ICdpZCcgPyBHcmFwaFFMSW50IDogR3JhcGhRTEZsb2F0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXToge1xuICAgICAgICAgIHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoXG4gICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgIGZpZWxkLmhhc01hbnkgPT09IHRydWUgPyBuZXcgR3JhcGhRTExpc3QodHlwZSkgOiB0eXBlLFxuICAgICAgICAgICAgZm9yY2VOdWxsYWJsZSxcbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0sXG4gICAgcG9pbnQ6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFBvaW50RmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgbmV3IEdyYXBoUUxMaXN0KEdyYXBoUUxGbG9hdCksIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAgcmFkaW86IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFJhZGlvRmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTFN0cmluZywgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICByZWxhdGlvbnNoaXA6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFJlbGF0aW9uc2hpcEZpZWxkKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbGF0aW9uVG8gfSA9IGZpZWxkXG4gICAgICB0eXBlIFBheWxvYWRHcmFwaFFMUmVsYXRpb25zaGlwVHlwZSA9XG4gICAgICAgIHwgR3JhcGhRTElucHV0T2JqZWN0VHlwZVxuICAgICAgICB8IEdyYXBoUUxMaXN0PEdyYXBoUUxTY2FsYXJUeXBlPlxuICAgICAgICB8IEdyYXBoUUxTY2FsYXJUeXBlXG4gICAgICBsZXQgdHlwZTogUGF5bG9hZEdyYXBoUUxSZWxhdGlvbnNoaXBUeXBlXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pKSB7XG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7Y29tYmluZVBhcmVudE5hbWUoXG4gICAgICAgICAgcGFyZW50TmFtZSxcbiAgICAgICAgICB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpLFxuICAgICAgICApfVJlbGF0aW9uc2hpcElucHV0YFxuICAgICAgICB0eXBlID0gbmV3IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUoe1xuICAgICAgICAgIG5hbWU6IGZ1bGxOYW1lLFxuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgcmVsYXRpb25Ubzoge1xuICAgICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHtmdWxsTmFtZX1SZWxhdGlvblRvYCxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHJlbGF0aW9uVG8ucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgKHZhbHVlcywgb3B0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKG9wdGlvbildOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IHsgdHlwZTogR3JhcGhRTEpTT04gfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IGdldENvbGxlY3Rpb25JRFR5cGUocGF5bG9hZCwgcGF5bG9hZC5jb2xsZWN0aW9uc1tyZWxhdGlvblRvXS5jb25maWcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IGZpZWxkLmhhc01hbnkgPyBuZXcgR3JhcGhRTExpc3QodHlwZSkgOiB0eXBlIH0sXG4gICAgICB9XG4gICAgfSxcbiAgICByaWNoVGV4dDogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogUmljaFRleHRGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMSlNPTiwgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICByb3c6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFJvd0ZpZWxkKSA9PlxuICAgICAgZmllbGQuZmllbGRzLnJlZHVjZSgoYWNjLCBzdWJGaWVsZDogRmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgYWRkU3ViRmllbGQgPSBmaWVsZFRvU2NoZW1hTWFwW3N1YkZpZWxkLnR5cGVdXG4gICAgICAgIGlmIChhZGRTdWJGaWVsZCkgcmV0dXJuIGFkZFN1YkZpZWxkKGFjYywgc3ViRmllbGQpXG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH0sIGlucHV0T2JqZWN0VHlwZUNvbmZpZyksXG4gICAgc2VsZWN0OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBTZWxlY3RGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IGAke2NvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIGZpZWxkLm5hbWUpfV9NdXRhdGlvbklucHV0YFxuICAgICAgbGV0IHR5cGU6IEdyYXBoUUxUeXBlID0gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gICAgICAgIG5hbWU6IGZvcm1hdHRlZE5hbWUsXG4gICAgICAgIHZhbHVlczogZmllbGQub3B0aW9ucy5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbklzT2JqZWN0KG9wdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgW2Zvcm1hdE5hbWUob3B0aW9uLnZhbHVlKV06IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBbZm9ybWF0TmFtZShvcHRpb24pXToge1xuICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHt9KSxcbiAgICAgIH0pXG5cbiAgICAgIHR5cGUgPSBmaWVsZC5oYXNNYW55ID8gbmV3IEdyYXBoUUxMaXN0KHR5cGUpIDogdHlwZVxuICAgICAgdHlwZSA9IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIHR5cGUsIGZvcmNlTnVsbGFibGUpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGUgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYnM6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFRhYnNGaWVsZCkgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkLnRhYnMucmVkdWNlKChhY2MsIHRhYikgPT4ge1xuICAgICAgICBpZiAodGFiSGFzTmFtZSh0YWIpKSB7XG4gICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKHRhYi5uYW1lLCB0cnVlKSlcbiAgICAgICAgICBjb25zdCByZXF1aXJlc0F0TGVhc3RPbmVGaWVsZCA9IGdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkKGZpZWxkKVxuICAgICAgICAgIGxldCB0eXBlOiBHcmFwaFFMVHlwZSA9IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUocGF5bG9hZCwgZnVsbE5hbWUsIHRhYi5maWVsZHMsIGZ1bGxOYW1lKVxuXG4gICAgICAgICAgaWYgKCF0eXBlKSByZXR1cm4gYWNjXG5cbiAgICAgICAgICBpZiAocmVxdWlyZXNBdExlYXN0T25lRmllbGQpIHR5cGUgPSBuZXcgR3JhcGhRTE5vbk51bGwodHlwZSlcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgICAgW3RhYi5uYW1lXTogeyB0eXBlIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgLi4udGFiLmZpZWxkcy5yZWR1Y2UoKHN1YkZpZWxkU2NoZW1hLCBzdWJGaWVsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkU3ViRmllbGQgPSBmaWVsZFRvU2NoZW1hTWFwW3N1YkZpZWxkLnR5cGVdXG4gICAgICAgICAgICBpZiAoYWRkU3ViRmllbGQpIHJldHVybiBhZGRTdWJGaWVsZChzdWJGaWVsZFNjaGVtYSwgc3ViRmllbGQpXG4gICAgICAgICAgICByZXR1cm4gc3ViRmllbGRTY2hlbWFcbiAgICAgICAgICB9LCBhY2MpLFxuICAgICAgICB9XG4gICAgICB9LCBpbnB1dE9iamVjdFR5cGVDb25maWcpXG4gICAgfSxcbiAgICB0ZXh0OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBUZXh0RmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHtcbiAgICAgICAgdHlwZTogd2l0aE51bGxhYmxlVHlwZShcbiAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICBmaWVsZC5oYXNNYW55ID09PSB0cnVlID8gbmV3IEdyYXBoUUxMaXN0KEdyYXBoUUxTdHJpbmcpIDogR3JhcGhRTFN0cmluZyxcbiAgICAgICAgICBmb3JjZU51bGxhYmxlLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB0ZXh0YXJlYTogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogVGV4dGFyZWFGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIHVwbG9hZDogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogVXBsb2FkRmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTFN0cmluZywgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgfVxuXG4gIGNvbnN0IGZpZWxkTmFtZSA9IGZvcm1hdE5hbWUobmFtZSlcblxuICBjb25zdCBmaWVsZFNjaGVtYXMgPSBmaWVsZHMucmVkdWNlKChpbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgZmllbGRTY2hlbWEgPSBmaWVsZFRvU2NoZW1hTWFwW2ZpZWxkLnR5cGVdXG5cbiAgICBpZiAodHlwZW9mIGZpZWxkU2NoZW1hICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaW5wdXRPYmplY3RUeXBlQ29uZmlnXG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hID0gZmllbGRTY2hlbWEoaW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZClcbiAgICBpZiAoT2JqZWN0LmtleXMoc2NoZW1hKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBpbnB1dE9iamVjdFR5cGVDb25maWdcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgLi4uZmllbGRTY2hlbWEoaW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZCksXG4gICAgfVxuICB9LCB7fSlcblxuICBpZiAoT2JqZWN0LmtleXMoZmllbGRTY2hlbWFzKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICBuYW1lOiBgbXV0YXRpb24ke2ZpZWxkTmFtZX1JbnB1dGAsXG4gICAgZmllbGRzOiBmaWVsZFNjaGVtYXMsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGVcbiJdLCJuYW1lcyI6WyJnZXRDb2xsZWN0aW9uSURUeXBlIiwiaWRGaWVsZFR5cGVzIiwibnVtYmVyIiwiR3JhcGhRTEludCIsInRleHQiLCJHcmFwaFFMU3RyaW5nIiwicGF5bG9hZCIsImNvbGxlY3Rpb24iLCJpZEZpZWxkIiwiZmxhdHRlbkZpZWxkcyIsImZpZWxkcyIsImZpbmQiLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwiZGIiLCJkZWZhdWx0SURUeXBlIiwidHlwZSIsImJ1aWxkTXV0YXRpb25JbnB1dFR5cGUiLCJwYXJlbnROYW1lIiwiZm9yY2VOdWxsYWJsZSIsImZpZWxkVG9TY2hlbWFNYXAiLCJhcnJheSIsImlucHV0T2JqZWN0VHlwZUNvbmZpZyIsImZ1bGxOYW1lIiwiY29tYmluZVBhcmVudE5hbWUiLCJ0b1dvcmRzIiwiR3JhcGhRTExpc3QiLCJ3aXRoTnVsbGFibGVUeXBlIiwiYmxvY2tzIiwiR3JhcGhRTEpTT04iLCJjaGVja2JveCIsIkdyYXBoUUxCb29sZWFuIiwiY29kZSIsImNvbGxhcHNpYmxlIiwicmVkdWNlIiwiYWNjIiwic3ViRmllbGQiLCJhZGRTdWJGaWVsZCIsImRhdGUiLCJlbWFpbCIsImdyb3VwIiwicmVxdWlyZXNBdExlYXN0T25lRmllbGQiLCJncm91cE9yVGFiSGFzUmVxdWlyZWRTdWJmaWVsZCIsIkdyYXBoUUxOb25OdWxsIiwianNvbiIsIkdyYXBoUUxGbG9hdCIsImhhc01hbnkiLCJwb2ludCIsInJhZGlvIiwicmVsYXRpb25zaGlwIiwicmVsYXRpb25UbyIsIkFycmF5IiwiaXNBcnJheSIsIkdyYXBoUUxJbnB1dE9iamVjdFR5cGUiLCJHcmFwaFFMRW51bVR5cGUiLCJ2YWx1ZXMiLCJvcHRpb24iLCJmb3JtYXROYW1lIiwidmFsdWUiLCJjb2xsZWN0aW9ucyIsImNvbmZpZyIsInJpY2hUZXh0Iiwicm93Iiwic2VsZWN0IiwiZm9ybWF0dGVkTmFtZSIsIm9wdGlvbnMiLCJvcHRpb25Jc09iamVjdCIsInRhYnMiLCJ0YWIiLCJ0YWJIYXNOYW1lIiwic3ViRmllbGRTY2hlbWEiLCJ0ZXh0YXJlYSIsInVwbG9hZCIsImZpZWxkTmFtZSIsImZpZWxkU2NoZW1hcyIsImZpZWxkU2NoZW1hIiwic2NoZW1hIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7Ozs7Ozs7Ozs7O0lBaVV2QyxPQUFxQztlQUFyQzs7SUEzUWFBLG1CQUFtQjtlQUFuQkE7Ozt5QkExQ047aUNBQ3FCO3VCQTRCaUM7OEJBQ3JDOytDQUNzQjswRUFDaEI7bUVBQ1A7eUVBQ007OEVBQ0g7Ozs7OztBQUUxQixNQUFNQyxlQUFlO0lBQ25CQyxRQUFRQyxtQkFBVTtJQUNsQkMsTUFBTUMsc0JBQWE7QUFDckI7QUFFTyxNQUFNTCxzQkFBc0IsQ0FDakNNLFNBQ0FDO0lBRUEsTUFBTUMsVUFBVUMs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