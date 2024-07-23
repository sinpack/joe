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
    buildEntityPolicy: function() {
        return buildEntityPolicy;
    },
    buildPolicyType: function() {
        return buildPolicyType;
    },
    default: function() {
        return buildPoliciesType;
    }
});
const _graphql = require("graphql");
const _graphqltypejson = require("graphql-type-json");
const _formatLabels = require("../../utilities/formatLabels");
const _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const buildFields = (label, fieldsToBuild)=>fieldsToBuild.reduce((builtFields, field)=>{
        const includeField = !field.hidden && field.type !== 'ui';
        if (includeField) {
            if (field.name) {
                const fieldName = (0, _formatName.default)(field.name);
                const objectTypeFields = [
                    'create',
                    'read',
                    'update',
                    'delete'
                ].reduce((operations, operation)=>{
                    const capitalizedOperation = operation.charAt(0).toUpperCase() + operation.slice(1);
                    return {
                        ...operations,
                        [operation]: {
                            type: new _graphql.GraphQLObjectType({
                                name: `${label}_${fieldName}_${capitalizedOperation}`,
                                fields: {
                                    permission: {
                                        type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)
                                    }
                                }
                            })
                        }
                    };
                }, {});
                if (field.fields) {
                    objectTypeFields.fields = {
                        type: new _graphql.GraphQLObjectType({
                            name: `${label}_${fieldName}_Fields`,
                            fields: buildFields(`${label}_${fieldName}`, field.fields)
                        })
                    };
                }
                return {
                    ...builtFields,
                    [field.name]: {
                        type: new _graphql.GraphQLObjectType({
                            name: `${label}_${fieldName}`,
                            fields: objectTypeFields
                        })
                    }
                };
            }
            if (!field.name && field.fields) {
                const subFields = buildFields(label, field.fields);
                return {
                    ...builtFields,
                    ...subFields
                };
            }
            if (field.type === 'tabs') {
                return field.tabs.reduce((fieldsWithTabFields, tab)=>{
                    return {
                        ...fieldsWithTabFields,
                        ...buildFields(label, tab.fields)
                    };
                }, {
                    ...builtFields
                });
            }
        }
        return builtFields;
    }, {});
const buildEntityPolicy = (args)=>{
    const { name, entityFields, operations, scope } = args;
    const fieldsTypeName = (0, _formatLabels.toWords)(`${name}-${scope || ''}-Fields`, true);
    const fields = {
        fields: {
            type: new _graphql.GraphQLObjectType({
                name: fieldsTypeName,
                fields: buildFields(fieldsTypeName, entityFields)
            })
        }
    };
    operations.forEach((operation)=>{
        const operationTypeName = (0, _formatLabels.toWords)(`${name}-${operation}-${scope || 'Access'}`, true);
        fields[operation] = {
            type: new _graphql.GraphQLObjectType({
                name: operationTypeName,
                fields: {
                    permission: {
                        type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)
                    },
                    where: {
                        type: _graphqltypejson.GraphQLJSONObject
                    }
                }
            })
        };
    });
    return fields;
};
function buildPolicyType(args) {
    const { entity, scope, type, typeSuffix } = args;
    const { fields, graphQL, slug, versions } = entity;
    let operations = [];
    if (graphQL === false) return null;
    if (type === 'collection') {
        operations = [
            'create',
            'read',
            'update',
            'delete'
        ];
        if (entity.auth && typeof entity.auth === 'object' && typeof entity.auth.maxLoginAttempts !== 'undefined' && entity.auth.maxLoginAttempts !== 0) {
            operations.push('unlock');
        }
        if (versions) {
            operations.push('readVersions');
        }
        const collectionTypeName = (0, _formatName.default)(`${slug}${typeSuffix || ''}`);
        return new _graphql.GraphQLObjectType({
            name: collectionTypeName,
            fields: buildEntityPolicy({
                name: slug,
                entityFields: fields,
                operations,
                scope
            })
        });
    }
    // else create global type
    operations = [
        'read',
        'update'
    ];
    if (entity.versions) {
        operations.push('readVersions');
    }
    const globalTypeName = (0, _formatName.default)(`${global?.graphQL?.name || slug}${typeSuffix || ''}`);
    return new _graphql.GraphQLObjectType({
        name: globalTypeName,
        fields: buildEntityPolicy({
            name: entity.graphQL ? entity?.graphQL?.name || slug : slug,
            entityFields: entity.fields,
            operations,
            scope
        })
    });
}
function buildPoliciesType(payload) {
    const fields = {
        canAccessAdmin: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)
        }
    };
    Object.values(payload.config.collections).forEach((collection)=>{
        if (collection.graphQL === false) {
            return;
        }
        const collectionPolicyType = buildPolicyType({
            entity: collection,
            type: 'collection',
            typeSuffix: 'Access'
        });
        fields[(0, _formatName.default)(collection.slug)] = {
            type: collectionPolicyType
        };
    });
    Object.values(payload.config.globals).forEach((global1)=>{
        if (global1.graphQL === false) {
            return;
        }
        const globalPolicyType = buildPolicyType({
            entity: global1,
            type: 'global',
            typeSuffix: 'Access'
        });
        fields[(0, _formatName.default)(global1.slug)] = {
            type: globalPolicyType
        };
    });
    return new _graphql.GraphQLObjectType({
        name: 'Access',
        fields
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZFBvbGljaWVzVHlwZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMQm9vbGVhbiwgR3JhcGhRTE5vbk51bGwsIEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSAnZ3JhcGhxbCdcbmltcG9ydCB7IEdyYXBoUUxKU09OT2JqZWN0IH0gZnJvbSAnZ3JhcGhxbC10eXBlLWpzb24nXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkNvbmZpZywgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBHbG9iYWxDb25maWcsIFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCdcblxuaW1wb3J0IHsgdG9Xb3JkcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMnXG5pbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0TmFtZSdcblxudHlwZSBPcGVyYXRpb25UeXBlID0gJ2NyZWF0ZScgfCAnZGVsZXRlJyB8ICdyZWFkJyB8ICdyZWFkVmVyc2lvbnMnIHwgJ3VubG9jaycgfCAndXBkYXRlJ1xuXG50eXBlIEFjY2Vzc1Njb3BlcyA9ICdkb2NBY2Nlc3MnIHwgdW5kZWZpbmVkXG5cbnR5cGUgT2JqZWN0VHlwZUZpZWxkcyA9IHtcbiAgW2tleSBpbiAnZmllbGRzJyB8IE9wZXJhdGlvblR5cGVdPzogeyB0eXBlOiBHcmFwaFFMT2JqZWN0VHlwZSB9XG59XG5cbmNvbnN0IGJ1aWxkRmllbGRzID0gKGxhYmVsLCBmaWVsZHNUb0J1aWxkKSA9PlxuICBmaWVsZHNUb0J1aWxkLnJlZHVjZSgoYnVpbHRGaWVsZHMsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgaW5jbHVkZUZpZWxkID0gIWZpZWxkLmhpZGRlbiAmJiBmaWVsZC50eXBlICE9PSAndWknXG4gICAgaWYgKGluY2x1ZGVGaWVsZCkge1xuICAgICAgaWYgKGZpZWxkLm5hbWUpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gZm9ybWF0TmFtZShmaWVsZC5uYW1lKVxuXG4gICAgICAgIGNvbnN0IG9iamVjdFR5cGVGaWVsZHM6IE9iamVjdFR5cGVGaWVsZHMgPSBbJ2NyZWF0ZScsICdyZWFkJywgJ3VwZGF0ZScsICdkZWxldGUnXS5yZWR1Y2UoXG4gICAgICAgICAgKG9wZXJhdGlvbnMsIG9wZXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRPcGVyYXRpb24gPSBvcGVyYXRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBvcGVyYXRpb24uc2xpY2UoMSlcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ub3BlcmF0aW9ucyxcbiAgICAgICAgICAgICAgW29wZXJhdGlvbl06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgICAgICAgICAgICAgbmFtZTogYCR7bGFiZWx9XyR7ZmllbGROYW1lfV8ke2NhcGl0YWxpemVkT3BlcmF0aW9ufWAsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMQm9vbGVhbiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgIClcblxuICAgICAgICBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgb2JqZWN0VHlwZUZpZWxkcy5maWVsZHMgPSB7XG4gICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgICAgICAgICBuYW1lOiBgJHtsYWJlbH1fJHtmaWVsZE5hbWV9X0ZpZWxkc2AsXG4gICAgICAgICAgICAgIGZpZWxkczogYnVpbGRGaWVsZHMoYCR7bGFiZWx9XyR7ZmllbGROYW1lfWAsIGZpZWxkLmZpZWxkcyksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmJ1aWx0RmllbGRzLFxuICAgICAgICAgIFtmaWVsZC5uYW1lXToge1xuICAgICAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgICAgICAgbmFtZTogYCR7bGFiZWx9XyR7ZmllbGROYW1lfWAsXG4gICAgICAgICAgICAgIGZpZWxkczogb2JqZWN0VHlwZUZpZWxkcyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFmaWVsZC5uYW1lICYmIGZpZWxkLmZpZWxkcykge1xuICAgICAgICBjb25zdCBzdWJGaWVsZHMgPSBidWlsZEZpZWxkcyhsYWJlbCwgZmllbGQuZmllbGRzKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYnVpbHRGaWVsZHMsXG4gICAgICAgICAgLi4uc3ViRmllbGRzLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLnRhYnMucmVkdWNlKFxuICAgICAgICAgIChmaWVsZHNXaXRoVGFiRmllbGRzLCB0YWIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmZpZWxkc1dpdGhUYWJGaWVsZHMsXG4gICAgICAgICAgICAgIC4uLmJ1aWxkRmllbGRzKGxhYmVsLCB0YWIuZmllbGRzKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLi4uYnVpbHRGaWVsZHMgfSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnVpbHRGaWVsZHNcbiAgfSwge30pXG5cbnR5cGUgQnVpbGRFbnRpdHlQb2xpY3kgPSB7XG4gIGVudGl0eUZpZWxkczogRmllbGRbXVxuICBuYW1lOiBzdHJpbmdcbiAgb3BlcmF0aW9uczogT3BlcmF0aW9uVHlwZVtdXG4gIHNjb3BlOiBBY2Nlc3NTY29wZXNcbn1cbmV4cG9ydCBjb25zdCBidWlsZEVudGl0eVBvbGljeSA9IChhcmdzOiBCdWlsZEVudGl0eVBvbGljeSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGVudGl0eUZpZWxkcywgb3BlcmF0aW9ucywgc2NvcGUgfSA9IGFyZ3NcblxuICBjb25zdCBmaWVsZHNUeXBlTmFtZSA9IHRvV29yZHMoYCR7bmFtZX0tJHtzY29wZSB8fCAnJ30tRmllbGRzYCwgdHJ1ZSlcbiAgY29uc3QgZmllbGRzID0ge1xuICAgIGZpZWxkczoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgbmFtZTogZmllbGRzVHlwZU5hbWUsXG4gICAgICAgIGZpZWxkczogYnVpbGRGaWVsZHMoZmllbGRzVHlwZU5hbWUsIGVudGl0eUZpZWxkcyksXG4gICAgICB9KSxcbiAgICB9LFxuICB9XG5cbiAgb3BlcmF0aW9ucy5mb3JFYWNoKChvcGVyYXRpb24pID0+IHtcbiAgICBjb25zdCBvcGVyYXRpb25UeXBlTmFtZSA9IHRvV29yZHMoYCR7bmFtZX0tJHtvcGVyYXRpb259LSR7c2NvcGUgfHwgJ0FjY2Vzcyd9YCwgdHJ1ZSlcblxuICAgIGZpZWxkc1tvcGVyYXRpb25dID0ge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgbmFtZTogb3BlcmF0aW9uVHlwZU5hbWUsXG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIHBlcm1pc3Npb246IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxCb29sZWFuKSB9LFxuICAgICAgICAgIHdoZXJlOiB7IHR5cGU6IEdyYXBoUUxKU09OT2JqZWN0IH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGZpZWxkc1xufVxuXG50eXBlIEJ1aWxkUG9saWN5VHlwZSA9IHtcbiAgc2NvcGU/OiBBY2Nlc3NTY29wZXNcbiAgdHlwZVN1ZmZpeD86IHN0cmluZ1xufSAmIChcbiAgfCB7XG4gICAgICBlbnRpdHk6IENvbGxlY3Rpb25Db25maWdcbiAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJ1xuICAgIH1cbiAgfCB7XG4gICAgICBlbnRpdHk6IEdsb2JhbENvbmZpZ1xuICAgICAgdHlwZTogJ2dsb2JhbCdcbiAgICB9XG4pXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQb2xpY3lUeXBlKGFyZ3M6IEJ1aWxkUG9saWN5VHlwZSk6IEdyYXBoUUxPYmplY3RUeXBlIHtcbiAgY29uc3QgeyBlbnRpdHksIHNjb3BlLCB0eXBlLCB0eXBlU3VmZml4IH0gPSBhcmdzXG4gIGNvbnN0IHsgZmllbGRzLCBncmFwaFFMLCBzbHVnLCB2ZXJzaW9ucyB9ID0gZW50aXR5XG5cbiAgbGV0IG9wZXJhdGlvbnMgPSBbXVxuXG4gIGlmIChncmFwaFFMID09PSBmYWxzZSkgcmV0dXJuIG51bGxcblxuICBpZiAodHlwZSA9PT0gJ2NvbGxlY3Rpb24nKSB7XG4gICAgb3BlcmF0aW9ucyA9IFsnY3JlYXRlJywgJ3JlYWQnLCAndXBkYXRlJywgJ2RlbGV0ZSddXG5cbiAgICBpZiAoXG4gICAgICBlbnRpdHkuYXV0aCAmJlxuICAgICAgdHlwZW9mIGVudGl0eS5hdXRoID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIGVudGl0eS5hdXRoLm1heExvZ2luQXR0ZW1wdHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBlbnRpdHkuYXV0aC5tYXhMb2dpbkF0dGVtcHRzICE9PSAwXG4gICAgKSB7XG4gICAgICBvcGVyYXRpb25zLnB1c2goJ3VubG9jaycpXG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb25zKSB7XG4gICAgICBvcGVyYXRpb25zLnB1c2goJ3JlYWRWZXJzaW9ucycpXG4gICAgfVxuXG4gICAgY29uc3QgY29sbGVjdGlvblR5cGVOYW1lID0gZm9ybWF0TmFtZShgJHtzbHVnfSR7dHlwZVN1ZmZpeCB8fCAnJ31gKVxuXG4gICAgcmV0dXJuIG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICBuYW1lOiBjb2xsZWN0aW9uVHlwZU5hbWUsXG4gICAgICBmaWVsZHM6IGJ1aWxkRW50aXR5UG9saWN5KHtcbiAgICAgICAgbmFtZTogc2x1ZyxcbiAgICAgICAgZW50aXR5RmllbGRzOiBmaWVsZHMsXG4gICAgICAgIG9wZXJhdGlvbnMsXG4gICAgICAgIHNjb3BlLFxuICAgICAgfSksXG4gICAgfSlcbiAgfVxuXG4gIC8vIGVsc2UgY3JlYXRlIGdsb2JhbCB0eXBlXG4gIG9wZXJhdGlvbnMgPSBbJ3JlYWQnLCAndXBkYXRlJ11cblxuICBpZiAoZW50aXR5LnZlcnNpb25zKSB7XG4gICAgb3BlcmF0aW9ucy5wdXNoKCdyZWFkVmVyc2lvbnMnKVxuICB9XG5cbiAgY29uc3QgZ2xvYmFsVHlwZU5hbWUgPSBmb3JtYXROYW1lKGAke2dsb2JhbD8uZ3JhcGhRTD8ubmFtZSB8fCBzbHVnfSR7dHlwZVN1ZmZpeCB8fCAnJ31gKVxuXG4gIHJldHVybiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgIG5hbWU6IGdsb2JhbFR5cGVOYW1lLFxuICAgIGZpZWxkczogYnVpbGRFbnRpdHlQb2xpY3koe1xuICAgICAgbmFtZTogZW50aXR5LmdyYXBoUUwgPyBlbnRpdHk/LmdyYXBoUUw/Lm5hbWUgfHwgc2x1ZyA6IHNsdWcsXG4gICAgICBlbnRpdHlGaWVsZHM6IGVudGl0eS5maWVsZHMsXG4gICAgICBvcGVyYXRpb25zLFxuICAgICAgc2NvcGUsXG4gICAgfSksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkUG9saWNpZXNUeXBlKHBheWxvYWQ6IFBheWxvYWQpOiBHcmFwaFFMT2JqZWN0VHlwZSB7XG4gIGNvbnN0IGZpZWxkcyA9IHtcbiAgICBjYW5BY2Nlc3NBZG1pbjoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxCb29sZWFuKSxcbiAgICB9LFxuICB9XG5cbiAgT2JqZWN0LnZhbHVlcyhwYXlsb2FkLmNvbmZpZy5jb2xsZWN0aW9ucykuZm9yRWFjaCgoY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZykgPT4ge1xuICAgIGlmIChjb2xsZWN0aW9uLmdyYXBoUUwgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY29sbGVjdGlvblBvbGljeVR5cGUgPSBidWlsZFBvbGljeVR5cGUoe1xuICAgICAgZW50aXR5OiBjb2xsZWN0aW9uLFxuICAgICAgdHlwZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgdHlwZVN1ZmZpeDogJ0FjY2VzcycsXG4gICAgfSlcblxuICAgIGZpZWxkc1tmb3JtYXROYW1lKGNvbGxlY3Rpb24uc2x1ZyldID0ge1xuICAgICAgdHlwZTogY29sbGVjdGlvblBvbGljeVR5cGUsXG4gICAgfVxuICB9KVxuXG4gIE9iamVjdC52YWx1ZXMocGF5bG9hZC5jb25maWcuZ2xvYmFscykuZm9yRWFjaCgoZ2xvYmFsOiBTYW5pdGl6ZWRHbG9iYWxDb25maWcpID0+IHtcbiAgICBpZiAoZ2xvYmFsLmdyYXBoUUwgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZ2xvYmFsUG9saWN5VHlwZSA9IGJ1aWxkUG9saWN5VHlwZSh7XG4gICAgICBlbnRpdHk6IGdsb2JhbCxcbiAgICAgIHR5cGU6ICdnbG9iYWwnLFxuICAgICAgdHlwZVN1ZmZpeDogJ0FjY2VzcycsXG4gICAgfSlcblxuICAgIGZpZWxkc1tmb3JtYXROYW1lKGdsb2JhbC5zbHVnKV0gPSB7XG4gICAgICB0eXBlOiBnbG9iYWxQb2xpY3lUeXBlLFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICBuYW1lOiAnQWNjZXNzJyxcbiAgICBmaWVsZHMsXG4gIH0pXG59XG4iXSwibmFtZXMiOlsiYnVpbGRFbnRpdHlQb2xpY3kiLCJidWlsZFBvbGljeVR5cGUiLCJidWlsZFBvbGljaWVzVHlwZSIsImJ1aWxkRmllbGRzIiwibGFiZWwiLCJmaWVsZHNUb0J1aWxkIiwicmVkdWNlIiwiYnVpbHRGaWVsZHMiLCJmaWVsZCIsImluY2x1ZGVGaWVsZCIsImhpZGRlbiIsInR5cGUiLCJuYW1lIiwiZmllbGROYW1lIiwiZm9ybWF0TmFtZSIsIm9iamVjdFR5cGVGaWVsZHMiLCJvcGVyYXRpb25zIiwib3BlcmF0aW9uIiwiY2FwaXRhbGl6ZWRPcGVyYXRpb24iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiR3JhcGhRTE9iamVjdFR5cGUiLCJmaWVsZHMiLCJwZXJtaXNzaW9uIiwiR3JhcGhRTE5vbk51bGwiLCJHcmFwaFFMQm9vbGVhbiIsInN1YkZpZWxkcyIsInRhYnMiLCJmaWVsZHNXaXRoVGFiRmllbGRzIiwidGFiIiwiYXJncyIsImVudGl0eUZpZWxkcyIsInNjb3BlIiwiZmllbGRzVHlwZU5hbWUiLCJ0b1dvcmRzIiwiZm9yRWFjaCIsIm9wZXJhdGlvblR5cGVOYW1lIiwid2hlcmUiLCJHcmFwaFFMSlNPTk9iamVjdCIsImVudGl0eSIsInR5cGVTdWZmaXgiLCJncmFwaFFMIiwic2x1ZyIsInZlcnNpb25zIiwiYXV0aCIsIm1heExvZ2luQXR0ZW1wdHMiLCJwdXNoIiwiY29sbGVjdGlvblR5cGVOYW1lIiwiZ2xvYmFsVHlwZU5hbWUiLCJnbG9iYWwiLCJwYXlsb2FkIiwiY2FuQWNjZXNzQWRtaW4iLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25maWciLCJjb2xsZWN0aW9ucyIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uUG9saWN5VHlwZSIsImdsb2JhbHMiLCJnbG9iYWxQb2xpY3lUeXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFpR2FBLGlCQUFpQjtlQUFqQkE7O0lBMkNHQyxlQUFlO2VBQWZBOztJQXlEaEIsT0F5Q0M7ZUF6Q3VCQzs7O3lCQXJNMEM7aUNBQ2hDOzhCQU9WO21FQUNEOzs7Ozs7QUFVdkIsTUFBTUMsY0FBYyxDQUFDQyxPQUFPQyxnQkFDMUJBLGNBQWNDLE1BQU0sQ0FBQyxDQUFDQyxhQUFhQztRQUNqQyxNQUFNQyxlQUFlLENBQUNELE1BQU1FLE1BQU0sSUFBSUYsTUFBTUcsSUFBSSxLQUFLO1FBQ3JELElBQUlGLGNBQWM7WUFDaEIsSUFBSUQsTUFBTUksSUFBSSxFQUFFO2dCQUNkLE1BQU1DLFlBQVlDLElBQUFBLG1CQUFVLEVBQUNOLE1BQU1JLElBQUk7Z0JBRXZDLE1BQU1HLG1CQUFxQztvQkFBQztvQkFBVTtvQkFBUTtvQkFBVTtpQkFBUyxDQUFDVCxNQUFNLENBQ3RGLENBQUNVLFlBQVlDO29CQUNYLE1BQU1DLHVCQUF1QkQsVUFBVUUsTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS0gsVUFBVUksS0FBSyxDQUFDO29CQUVqRixPQUFPO3dCQUNMLEdBQUdMLFVBQVU7d0JBQ2IsQ0FBQ0MsVUFBVSxFQUFFOzRCQUNYTixNQUFNLElBQUlXLDBC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