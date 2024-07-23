/* eslint-disable no-param-reassign */ "use strict";
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
const _forgotPassword = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/forgotPassword"));
const _init = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/init"));
const _login = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/login"));
const _logout = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/logout"));
const _me = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/me"));
const _refresh = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/refresh"));
const _resetPassword = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/resetPassword"));
const _unlock = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/unlock"));
const _verifyEmail = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/verifyEmail"));
const _types = require("../../fields/config/types");
const _buildMutationInputType = /*#__PURE__*/ _interop_require_wildcard(require("../../graphql/schema/buildMutationInputType"));
const _buildObjectType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildObjectType"));
const _buildPaginatedListType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildPaginatedListType"));
const _buildPoliciesType = require("../../graphql/schema/buildPoliciesType");
const _buildWhereInputType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildWhereInputType"));
const _formatName = /*#__PURE__*/ _interop_require_default(require("../../graphql/utilities/formatName"));
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/flattenTopLevelFields"));
const _formatLabels = require("../../utilities/formatLabels");
const _buildCollectionFields = require("../../versions/buildCollectionFields");
const _count = /*#__PURE__*/ _interop_require_default(require("./resolvers/count"));
const _create = /*#__PURE__*/ _interop_require_default(require("./resolvers/create"));
const _delete = /*#__PURE__*/ _interop_require_default(require("./resolvers/delete"));
const _docAccess = require("./resolvers/docAccess");
const _find = /*#__PURE__*/ _interop_require_default(require("./resolvers/find"));
const _findByID = /*#__PURE__*/ _interop_require_default(require("./resolvers/findByID"));
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./resolvers/findVersionByID"));
const _findVersions = /*#__PURE__*/ _interop_require_default(require("./resolvers/findVersions"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./resolvers/restoreVersion"));
const _update = /*#__PURE__*/ _interop_require_default(require("./resolvers/update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function initCollectionsGraphQL(payload) {
    Object.keys(payload.collections).forEach((slug)=>{
        const collection = payload.collections[slug];
        const { config, config: { fields, graphQL = {}, versions } } = collection;
        if (!graphQL) return;
        const draftsEnabled = collection.config.versions?.drafts;
        let singularName;
        let pluralName;
        const fromSlug = (0, _formatLabels.formatNames)(collection.config.slug);
        if (graphQL.singularName) {
            singularName = (0, _formatLabels.toWords)(graphQL.singularName, true);
        } else {
            singularName = fromSlug.singular;
        }
        if (graphQL.pluralName) {
            pluralName = (0, _formatLabels.toWords)(graphQL.pluralName, true);
        } else {
            pluralName = fromSlug.plural;
        }
        // For collections named 'Media' or similar,
        // there is a possibility that the singular name
        // will equal the plural name. Append `all` to the beginning
        // of potential conflicts
        if (singularName === pluralName) {
            pluralName = `all${singularName}`;
        }
        collection.graphQL = {};
        const hasIDField = (0, _flattenTopLevelFields.default)(fields).findIndex((field)=>(0, _types.fieldAffectsData)(field) && field.name === 'id') > -1;
        const idType = (0, _buildMutationInputType.getCollectionIDType)(payload, config);
        const baseFields = {};
        const whereInputFields = [
            ...fields
        ];
        if (!hasIDField) {
            baseFields.id = {
                type: idType
            };
            whereInputFields.push({
                name: 'id',
                type: payload.db.defaultIDType
            });
        }
        const forceNullableObjectType = Boolean(versions?.drafts);
        collection.graphQL.type = (0, _buildObjectType.default)({
            name: singularName,
            baseFields,
            fields,
            forceNullable: forceNullableObjectType,
            parentName: singularName,
            payload
        });
        collection.graphQL.paginatedType = (0, _buildPaginatedListType.default)(pluralName, collection.graphQL.type);
        collection.graphQL.whereInputType = (0, _buildWhereInputType.default)({
            name: singularName,
            fields: whereInputFields,
            parentName: singularName,
            payload
        });
        if (config.auth && !config.auth.disableLocalStrategy) {
            fields.push({
                name: 'password',
                type: 'text',
                label: 'Password',
                required: true
            });
        }
        const createMutationInputType = (0, _buildMutationInputType.default)(payload, singularName, fields, singularName);
        if (createMutationInputType) {
            collection.graphQL.mutationInputType = new _graphql.GraphQLNonNull(createMutationInputType);
        }
        const updateMutationInputType = (0, _buildMutationInputType.default)(payload, `${singularName}Update`, fields.filter((field)=>!((0, _types.fieldAffectsData)(field) && field.name === 'id')), `${singularName}Update`, true);
        if (updateMutationInputType) {
            collection.graphQL.updateMutationInputType = new _graphql.GraphQLNonNull(updateMutationInputType);
        }
        payload.Query.fields[singularName] = {
            type: collection.graphQL.type,
            args: {
                id: {
                    type: new _graphql.GraphQLNonNull(idType)
                },
                ...draftsEnabled ? {
                    draft: {
                        type: _graphql.GraphQLBoolean
                    }
                } : {},
                ...payload.config.localization ? {
                    fallbackLocale: {
                        type: payload.types.fallbackLocaleInputType
                    },
                    locale: {
                        type: payload.types.localeInputType
                    }
                } : {}
            },
            resolve: (0, _findByID.default)(collection)
        };
        payload.Query.fields[pluralName] = {
            type: (0, _buildPaginatedListType.default)(pluralName, collection.graphQL.type),
            args: {
                ...draftsEnabled ? {
                    draft: {
                        type: _graphql.GraphQLBoolean
                    }
                } : {},
                where: {
                    type: collection.graphQL.whereInputType
                },
                ...payload.config.localization ? {
                    fallbackLocale: {
                        type: payload.types.fallbackLocaleInputType
                    },
                    locale: {
                        type: payload.types.localeInputType
                    }
                } : {},
                limit: {
                    type: _graphql.GraphQLInt
                },
                page: {
                    type: _graphql.GraphQLInt
                },
                sort: {
                    type: _graphql.GraphQLString
                }
            },
            resolve: (0, _find.default)(collection)
        };
        payload.Query.fields[`count${pluralName}`] = {
            type: new _graphql.GraphQLObjectType({
                name: `count${pluralName}`,
                fields: {
                    totalDocs: {
                        type: _graphql.GraphQLInt
                    }
                }
            }),
            args: {
                ...draftsEnabled ? {
                    draft: {
                        type: _graphql.GraphQLBoolean
                    }
                } : {},
                where: {
                    type: collection.graphQL.whereInputType
                },
                ...payload.config.localization ? {
                    locale: {
                        type: payload.types.localeInputType
                    }
                } : {}
            },
            resolve: (0, _count.default)(collection)
        };
        payload.Query.fields[`docAccess${singularName}`] = {
            type: (0, _buildPoliciesType.buildPolicyType)({
                type: 'collection',
                entity: config,
                scope: 'docAccess',
                typeSuffix: 'DocAccess'
            }),
            args: {
                id: {
                    type: new _graphql.GraphQLNonNull(idType)
                }
            },
            resolve: (0, _docAccess.docAccessResolver)()
        };
        payload.Mutation.fields[`create${singularName}`] = {
            type: collection.graphQL.type,
            args: {
                ...createMutationInputType ? {
                    data: {
                        type: collection.graphQL.mutationInputType
                    }
                } : {},
                ...draftsEnabled ? {
                    draft: {
                        type: _graphql.GraphQLBoolean
                    }
                } : {},
                ...payload.config.localization ? {
                    locale: {
                        type: payload.types.localeInputType
                    }
                } : {}
            },
            resolve: (0, _create.default)(collection)
        };
        payload.Mutation.fields[`update${singularName}`] = {
            type: collection.graphQL.type,
            args: {
                id: {
                    type: new _graphql.GraphQLNonNull(idType)
                },
                autosave: {
                    type: _graphql.GraphQLBoolean
                },
                ...updateMutationInputType ? {
                    data: {
                        type: collection.graphQL.updateMutationInputType
                    }
                } : {},
                ...draftsEnabled ? {
                    draft: {
                        type: _graphql.GraphQLBoolean
                    }
                } : {},
                ...payload.config.localization ? {
                    locale: {
                        type: payload.types.localeInputType
                    }
                } : {}
            },
            resolve: (0, _update.default)(collection)
        };
        payload.Mutation.fields[`delete${singularName}`] = {
            type: collection.graphQL.type,
            args: {
                id: {
                    type: new _graphql.GraphQLNonNull(idType)
                }
            },
            resolve: (0, _delete.default)(collection)
        };
        if (config.versions) {
            const versionIDType = payload.db.defaultIDType === 'text' ? _graphql.GraphQLString : _graphql.GraphQLInt;
            const versionCollectionFields = [
                ...(0, _buildCollectionFields.buildVersionCollectionFields)(config),
                {
                    name: 'id',
                    type: payload.db.defaultIDType
                },
                {
                    name: 'createdAt',
                    type: 'date',
                    label: 'Created At'
                },
                {
                    name: 'updatedAt',
                    type: 'date',
                    label: 'Updated At'
                }
            ];
            collection.graphQL.versionType = (0, _buildObjectType.default)({
                name: `${singularName}Version`,
                fields: versionCollectionFields,
                forceNullable: forceNullableObjectType,
                parentName: `${singularName}Version`,
                payload
            });
            payload.Query.fields[`version${(0, _formatName.default)(singularName)}`] = {
                type: collection.graphQL.versionType,
                args: {
                    id: {
                        type: versionIDType
                    },
                    ...payload.config.localization ? {
                        fallbackLocale: {
                            type: payload.types.fallbackLocaleInputType
                        },
                        locale: {
                            type: payload.types.localeInputType
                        }
                    } : {}
                },
                resolve: (0, _findVersionByID.default)(collection)
            };
            payload.Query.fields[`versions${pluralName}`] = {
                type: (0, _buildPaginatedListType.default)(`versions${(0, _formatName.default)(pluralName)}`, collection.graphQL.versionType),
                args: {
                    where: {
                        type: (0, _buildWhereInputType.default)({
                            name: `versions${singularName}`,
                            fields: versionCollectionFields,
                            parentName: `versions${singularName}`,
                            payload
                        })
                    },
                    ...payload.config.localization ? {
                        fallbackLocale: {
                            type: payload.types.fallbackLocaleInputType
                        },
                        locale: {
                            type: payload.types.localeInputType
                        }
                    } : {},
                    limit: {
                        type: _graphql.GraphQLInt
                    },
                    page: {
                        type: _graphql.GraphQLInt
                    },
                    sort: {
                        type: _graphql.GraphQLString
                    }
                },
                resolve: (0, _findVersions.default)(collection)
            };
            payload.Mutation.fields[`restoreVersion${(0, _formatName.default)(singularName)}`] = {
                type: collection.graphQL.type,
                args: {
                    id: {
                        type: versionIDType
                    }
                },
                resolve: (0, _restoreVersion.default)(collection)
            };
        }
        if (config.auth) {
            const authFields = config.auth.disableLocalStrategy ? [] : [
                {
                    name: 'email',
                    type: 'email',
                    required: true
                }
            ];
            collection.graphQL.JWT = (0, _buildObjectType.default)({
                name: (0, _formatName.default)(`${slug}JWT`),
                fields: [
                    ...config.fields.filter((field)=>(0, _types.fieldAffectsData)(field) && field.saveToJWT),
                    ...authFields,
                    {
                        name: 'collection',
                        type: 'text',
                        required: true
                    }
                ],
                parentName: (0, _formatName.default)(`${slug}JWT`),
                payload
            });
            payload.Query.fields[`me${singularName}`] = {
                type: new _graphql.GraphQLObjectType({
                    name: (0, _formatName.default)(`${slug}Me`),
                    fields: {
                        collection: {
                            type: _graphql.GraphQLString
                        },
                        exp: {
                            type: _graphql.GraphQLInt
                        },
                        strategy: {
                            type: _graphql.GraphQLString
                        },
                        token: {
                            type: _graphql.GraphQLString
                        },
                        user: {
                            type: collection.graphQL.type
                        }
                    }
                }),
                resolve: (0, _me.default)(collection)
            };
            payload.Query.fields[`initialized${singularName}`] = {
                type: _graphql.GraphQLBoolean,
                resolve: (0, _init.default)(collection.config.slug)
            };
            payload.Mutation.fields[`refreshToken${singularName}`] = {
                type: new _graphql.GraphQLObjectType({
                    name: (0, _formatName.default)(`${slug}Refreshed${singularName}`),
                    fields: {
                        exp: {
                            type: _graphql.GraphQLInt
                        },
                        refreshedToken: {
                            type: _graphql.GraphQLString
                        },
                        strategy: {
                            type: _graphql.GraphQLString
                        },
                        user: {
                            type: collection.graphQL.JWT
                        }
                    }
                }),
                resolve: (0, _refresh.default)(collection)
            };
            payload.Mutation.fields[`logout${singularName}`] = {
                type: _graphql.GraphQLString,
                resolve: (0, _logout.default)(collection)
            };
            if (!config.auth.disableLocalStrategy) {
                if (config.auth.maxLoginAttempts > 0) {
                    payload.Mutation.fields[`unlock${singularName}`] = {
                        type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean),
                        args: {
                            email: {
                                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
                            }
                        },
                        resolve: (0, _unlock.default)(collection)
                    };
                }
                payload.Mutation.fields[`login${singularName}`] = {
                    type: new _graphql.GraphQLObjectType({
                        name: (0, _formatName.default)(`${slug}LoginResult`),
                        fields: {
                            exp: {
                                type: _graphql.GraphQLInt
                            },
                            token: {
                                type: _graphql.GraphQLString
                            },
                            user: {
                                type: collection.graphQL.type
                            }
                        }
                    }),
                    args: {
                        email: {
                            type: _graphql.GraphQLString
                        },
                        password: {
                            type: _graphql.GraphQLString
                        }
                    },
                    resolve: (0, _login.default)(collection)
                };
                payload.Mutation.fields[`forgotPassword${singularName}`] = {
                    type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean),
                    args: {
                        disableEmail: {
                            type: _graphql.GraphQLBoolean
                        },
                        email: {
                            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
                        },
                        expiration: {
                            type: _graphql.GraphQLInt
                        }
                    },
                    resolve: (0, _forgotPassword.default)(collection)
                };
                payload.Mutation.fields[`resetPassword${singularName}`] = {
                    type: new _graphql.GraphQLObjectType({
                        name: (0, _formatName.default)(`${slug}ResetPassword`),
                        fields: {
                            token: {
                                type: _graphql.GraphQLString
                            },
                            user: {
                                type: collection.graphQL.type
                            }
                        }
                    }),
                    args: {
                        password: {
                            type: _graphql.GraphQLString
                        },
                        token: {
                            type: _graphql.GraphQLString
                        }
                    },
                    resolve: (0, _resetPassword.default)(collection)
                };
                payload.Mutation.fields[`verifyEmail${singularName}`] = {
                    type: _graphql.GraphQLBoolean,
                    args: {
                        token: {
                            type: _graphql.GraphQLString
                        }
                    },
                    resolve: (0, _verifyEmail.default)(collection)
                };
            }
        }
    });
}
const _default = initCollectionsGraphQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL2luaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7XG4gIEdyYXBoUUxCb29sZWFuLFxuICBHcmFwaFFMSW50LFxuICBHcmFwaFFMTm9uTnVsbCxcbiAgR3JhcGhRTE9iamVjdFR5cGUsXG4gIEdyYXBoUUxTdHJpbmcsXG59IGZyb20gJ2dyYXBocWwnXG5cbmltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBPYmplY3RUeXBlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRPYmplY3RUeXBlJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCdcbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiwgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGZvcmdvdFBhc3N3b3JkIGZyb20gJy4uLy4uL2F1dGgvZ3JhcGhxbC9yZXNvbHZlcnMvZm9yZ290UGFzc3dvcmQnXG5pbXBvcnQgaW5pdCBmcm9tICcuLi8uLi9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2luaXQnXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9sb2dpbidcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9sb2dvdXQnXG5pbXBvcnQgbWUgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9tZSdcbmltcG9ydCByZWZyZXNoIGZyb20gJy4uLy4uL2F1dGgvZ3JhcGhxbC9yZXNvbHZlcnMvcmVmcmVzaCdcbmltcG9ydCByZXNldFBhc3N3b3JkIGZyb20gJy4uLy4uL2F1dGgvZ3JhcGhxbC9yZXNvbHZlcnMvcmVzZXRQYXNzd29yZCdcbmltcG9ydCB1bmxvY2sgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy91bmxvY2snXG5pbXBvcnQgdmVyaWZ5RW1haWwgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy92ZXJpZnlFbWFpbCdcbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUsIHtcbiAgZ2V0Q29sbGVjdGlvbklEVHlwZSxcbn0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRNdXRhdGlvbklucHV0VHlwZSdcbmltcG9ydCBidWlsZE9iamVjdFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRPYmplY3RUeXBlJ1xuaW1wb3J0IGJ1aWxkUGFnaW5hdGVkTGlzdFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSdcbmltcG9ydCB7IGJ1aWxkUG9saWN5VHlwZSB9IGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hL2J1aWxkUG9saWNpZXNUeXBlJ1xuaW1wb3J0IGJ1aWxkV2hlcmVJbnB1dFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRXaGVyZUlucHV0VHlwZSdcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uLy4uL2dyYXBocWwvdXRpbGl0aWVzL2Zvcm1hdE5hbWUnXG5pbXBvcnQgZmxhdHRlbkZpZWxkcyBmcm9tICcuLi8uLi91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzJ1xuaW1wb3J0IHsgZm9ybWF0TmFtZXMsIHRvV29yZHMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZm9ybWF0TGFiZWxzJ1xuaW1wb3J0IHsgYnVpbGRWZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL2J1aWxkQ29sbGVjdGlvbkZpZWxkcydcbmltcG9ydCBjb3VudFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2NvdW50J1xuaW1wb3J0IGNyZWF0ZVJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2NyZWF0ZSdcbmltcG9ydCBnZXREZWxldGVSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9kZWxldGUnXG5pbXBvcnQgeyBkb2NBY2Nlc3NSZXNvbHZlciB9IGZyb20gJy4vcmVzb2x2ZXJzL2RvY0FjY2VzcydcbmltcG9ydCBmaW5kUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZmluZCdcbmltcG9ydCBmaW5kQnlJRFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2ZpbmRCeUlEJ1xuaW1wb3J0IGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2ZpbmRWZXJzaW9uQnlJRCdcbmltcG9ydCBmaW5kVmVyc2lvbnNSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9maW5kVmVyc2lvbnMnXG5pbXBvcnQgcmVzdG9yZVZlcnNpb25SZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9yZXN0b3JlVmVyc2lvbidcbmltcG9ydCB1cGRhdGVSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy91cGRhdGUnXG5cbmZ1bmN0aW9uIGluaXRDb2xsZWN0aW9uc0dyYXBoUUwocGF5bG9hZDogUGF5bG9hZCk6IHZvaWQge1xuICBPYmplY3Qua2V5cyhwYXlsb2FkLmNvbGxlY3Rpb25zKS5mb3JFYWNoKChzbHVnKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbjogQ29sbGVjdGlvbiA9IHBheWxvYWQuY29sbGVjdGlvbnNbc2x1Z11cbiAgICBjb25zdCB7XG4gICAgICBjb25maWcsXG4gICAgICBjb25maWc6IHsgZmllbGRzLCBncmFwaFFMID0ge30gYXMgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1snZ3JhcGhRTCddLCB2ZXJzaW9ucyB9LFxuICAgIH0gPSBjb2xsZWN0aW9uXG5cbiAgICBpZiAoIWdyYXBoUUwpIHJldHVyblxuXG4gICAgY29uc3QgZHJhZnRzRW5hYmxlZCA9IGNvbGxlY3Rpb24uY29uZmlnLnZlcnNpb25zPy5kcmFmdHNcblxuICAgIGxldCBzaW5ndWxhck5hbWVcbiAgICBsZXQgcGx1cmFsTmFtZVxuICAgIGNvbnN0IGZyb21TbHVnID0gZm9ybWF0TmFtZXMoY29sbGVjdGlvbi5jb25maWcuc2x1ZylcbiAgICBpZiAoZ3JhcGhRTC5zaW5ndWxhck5hbWUpIHtcbiAgICAgIHNpbmd1bGFyTmFtZSA9IHRvV29yZHMoZ3JhcGhRTC5zaW5ndWxhck5hbWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNpbmd1bGFyTmFtZSA9IGZyb21TbHVnLnNpbmd1bGFyXG4gICAgfVxuICAgIGlmIChncmFwaFFMLnBsdXJhbE5hbWUpIHtcbiAgICAgIHBsdXJhbE5hbWUgPSB0b1dvcmRzKGdyYXBoUUwucGx1cmFsTmFtZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGx1cmFsTmFtZSA9IGZyb21TbHVnLnBsdXJhbFxuICAgIH1cblxuICAgIC8vIEZvciBjb2xsZWN0aW9ucyBuYW1lZCAnTWVkaWEnIG9yIHNpbWlsYXIsXG4gICAgLy8gdGhlcmUgaXMgYSBwb3NzaWJpbGl0eSB0aGF0IHRoZSBzaW5ndWxhciBuYW1lXG4gICAgLy8gd2lsbCBlcXVhbCB0aGUgcGx1cmFsIG5hbWUuIEFwcGVuZCBgYWxsYCB0byB0aGUgYmVnaW5uaW5nXG4gICAgLy8gb2YgcG90ZW50aWFsIGNvbmZsaWN0c1xuICAgIGlmIChzaW5ndWxhck5hbWUgPT09IHBsdXJhbE5hbWUpIHtcbiAgICAgIHBsdXJhbE5hbWUgPSBgYWxsJHtzaW5ndWxhck5hbWV9YFxuICAgIH1cblxuICAgIGNvbGxlY3Rpb24uZ3JhcGhRTCA9IHt9IGFzIENvbGxlY3Rpb25bJ2dyYXBoUUwnXVxuXG4gICAgY29uc3QgaGFzSURGaWVsZCA9XG4gICAgICBmbGF0dGVuRmllbGRzKGZpZWxkcykuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gJ2lkJykgPlxuICAgICAgLTFcblxuICAgIGNvbnN0IGlkVHlwZSA9IGdldENvbGxlY3Rpb25JRFR5cGUocGF5bG9hZCwgY29uZmlnKVxuXG4gICAgY29uc3QgYmFzZUZpZWxkczogT2JqZWN0VHlwZUNvbmZpZyA9IHt9XG5cbiAgICBjb25zdCB3aGVyZUlucHV0RmllbGRzID0gWy4uLmZpZWxkc11cblxuICAgIGlmICghaGFzSURGaWVsZCkge1xuICAgICAgYmFzZUZpZWxkcy5pZCA9IHsgdHlwZTogaWRUeXBlIH1cbiAgICAgIHdoZXJlSW5wdXRGaWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgIHR5cGU6IHBheWxvYWQuZGIuZGVmYXVsdElEVHlwZSBhcyAndGV4dCcsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZvcmNlTnVsbGFibGVPYmplY3RUeXBlID0gQm9vbGVhbih2ZXJzaW9ucz8uZHJhZnRzKVxuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUgPSBidWlsZE9iamVjdFR5cGUoe1xuICAgICAgbmFtZTogc2luZ3VsYXJOYW1lLFxuICAgICAgYmFzZUZpZWxkcyxcbiAgICAgIGZpZWxkcyxcbiAgICAgIGZvcmNlTnVsbGFibGU6IGZvcmNlTnVsbGFibGVPYmplY3RUeXBlLFxuICAgICAgcGFyZW50TmFtZTogc2luZ3VsYXJOYW1lLFxuICAgICAgcGF5bG9hZCxcbiAgICB9KVxuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMLnBhZ2luYXRlZFR5cGUgPSBidWlsZFBhZ2luYXRlZExpc3RUeXBlKHBsdXJhbE5hbWUsIGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlKVxuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMLndoZXJlSW5wdXRUeXBlID0gYnVpbGRXaGVyZUlucHV0VHlwZSh7XG4gICAgICBuYW1lOiBzaW5ndWxhck5hbWUsXG4gICAgICBmaWVsZHM6IHdoZXJlSW5wdXRGaWVsZHMsXG4gICAgICBwYXJlbnROYW1lOiBzaW5ndWxhck5hbWUsXG4gICAgICBwYXlsb2FkLFxuICAgIH0pXG5cbiAgICBpZiAoY29uZmlnLmF1dGggJiYgIWNvbmZpZy5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICBmaWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdwYXNzd29yZCcsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNdXRhdGlvbklucHV0VHlwZSA9IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUoXG4gICAgICBwYXlsb2FkLFxuICAgICAgc2luZ3VsYXJOYW1lLFxuICAgICAgZmllbGRzLFxuICAgICAgc2luZ3VsYXJOYW1lLFxuICAgIClcbiAgICBpZiAoY3JlYXRlTXV0YXRpb25JbnB1dFR5cGUpIHtcbiAgICAgIGNvbGxlY3Rpb24uZ3JhcGhRTC5tdXRhdGlvbklucHV0VHlwZSA9IG5ldyBHcmFwaFFMTm9uTnVsbChjcmVhdGVNdXRhdGlvbklucHV0VHlwZSlcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVNdXRhdGlvbklucHV0VHlwZSA9IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUoXG4gICAgICBwYXlsb2FkLFxuICAgICAgYCR7c2luZ3VsYXJOYW1lfVVwZGF0ZWAsXG4gICAgICBmaWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gIShmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKSksXG4gICAgICBgJHtzaW5ndWxhck5hbWV9VXBkYXRlYCxcbiAgICAgIHRydWUsXG4gICAgKVxuICAgIGlmICh1cGRhdGVNdXRhdGlvbklucHV0VHlwZSkge1xuICAgICAgY29sbGVjdGlvbi5ncmFwaFFMLnVwZGF0ZU11dGF0aW9uSW5wdXRUeXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKHVwZGF0ZU11dGF0aW9uSW5wdXRUeXBlKVxuICAgIH1cblxuICAgIHBheWxvYWQuUXVlcnkuZmllbGRzW3Npbmd1bGFyTmFtZV0gPSB7XG4gICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgaWQ6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKGlkVHlwZSkgfSxcbiAgICAgICAgLi4uKGRyYWZ0c0VuYWJsZWRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZHJhZnQ6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBmYWxsYmFja0xvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IGZpbmRCeUlEUmVzb2x2ZXIoY29sbGVjdGlvbiksXG4gICAgfVxuXG4gICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbcGx1cmFsTmFtZV0gPSB7XG4gICAgICB0eXBlOiBidWlsZFBhZ2luYXRlZExpc3RUeXBlKHBsdXJhbE5hbWUsIGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlKSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgLi4uKGRyYWZ0c0VuYWJsZWRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZHJhZnQ6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgd2hlcmU6IHsgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLndoZXJlSW5wdXRUeXBlIH0sXG4gICAgICAgIC4uLihwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb25cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgICBsb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgbGltaXQ6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgICAgICBwYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgc29ydDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZTogZmluZFJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgIH1cblxuICAgIHBheWxvYWQuUXVlcnkuZmllbGRzW2Bjb3VudCR7cGx1cmFsTmFtZX1gXSA9IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgIG5hbWU6IGBjb3VudCR7cGx1cmFsTmFtZX1gLFxuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICB0b3RhbERvY3M6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBhcmdzOiB7XG4gICAgICAgIC4uLihkcmFmdHNFbmFibGVkXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGRyYWZ0OiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICAgIHdoZXJlOiB7IHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC53aGVyZUlucHV0VHlwZSB9LFxuICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IGNvdW50UmVzb2x2ZXIoY29sbGVjdGlvbiksXG4gICAgfVxuXG4gICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbYGRvY0FjY2VzcyR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgdHlwZTogYnVpbGRQb2xpY3lUeXBlKHtcbiAgICAgICAgdHlwZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgICBlbnRpdHk6IGNvbmZpZyxcbiAgICAgICAgc2NvcGU6ICdkb2NBY2Nlc3MnLFxuICAgICAgICB0eXBlU3VmZml4OiAnRG9jQWNjZXNzJyxcbiAgICAgIH0pLFxuICAgICAgYXJnczoge1xuICAgICAgICBpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoaWRUeXBlKSB9LFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IGRvY0FjY2Vzc1Jlc29sdmVyKCksXG4gICAgfVxuXG4gICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYGNyZWF0ZSR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIC4uLihjcmVhdGVNdXRhdGlvbklucHV0VHlwZVxuICAgICAgICAgID8geyBkYXRhOiB7IHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC5tdXRhdGlvbklucHV0VHlwZSB9IH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgLi4uKGRyYWZ0c0VuYWJsZWRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZHJhZnQ6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBsb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiBjcmVhdGVSZXNvbHZlcihjb2xsZWN0aW9uKSxcbiAgICB9XG5cbiAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgdXBkYXRlJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgaWQ6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKGlkVHlwZSkgfSxcbiAgICAgICAgYXV0b3NhdmU6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgLi4uKHVwZGF0ZU11dGF0aW9uSW5wdXRUeXBlXG4gICAgICAgICAgPyB7IGRhdGE6IHsgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnVwZGF0ZU11dGF0aW9uSW5wdXRUeXBlIH0gfVxuICAgICAgICAgIDoge30pLFxuICAgICAgICAuLi4oZHJhZnRzRW5hYmxlZFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBkcmFmdDogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IHVwZGF0ZVJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgIH1cblxuICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2BkZWxldGUke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgIHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlLFxuICAgICAgYXJnczoge1xuICAgICAgICBpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoaWRUeXBlKSB9LFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IGdldERlbGV0ZVJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgIH1cblxuICAgIGlmIChjb25maWcudmVyc2lvbnMpIHtcbiAgICAgIGNvbnN0IHZlcnNpb25JRFR5cGUgPSBwYXlsb2FkLmRiLmRlZmF1bHRJRFR5cGUgPT09ICd0ZXh0JyA/IEdyYXBoUUxTdHJpbmcgOiBHcmFwaFFMSW50XG4gICAgICBjb25zdCB2ZXJzaW9uQ29sbGVjdGlvbkZpZWxkczogRmllbGRbXSA9IFtcbiAgICAgICAgLi4uYnVpbGRWZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyhjb25maWcpLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICB0eXBlOiBwYXlsb2FkLmRiLmRlZmF1bHRJRFR5cGUgYXMgJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlZCBBdCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgbGFiZWw6ICdVcGRhdGVkIEF0JyxcbiAgICAgICAgfSxcbiAgICAgIF1cblxuICAgICAgY29sbGVjdGlvbi5ncmFwaFFMLnZlcnNpb25UeXBlID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgbmFtZTogYCR7c2luZ3VsYXJOYW1lfVZlcnNpb25gLFxuICAgICAgICBmaWVsZHM6IHZlcnNpb25Db2xsZWN0aW9uRmllbGRzLFxuICAgICAgICBmb3JjZU51bGxhYmxlOiBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSxcbiAgICAgICAgcGFyZW50TmFtZTogYCR7c2luZ3VsYXJOYW1lfVZlcnNpb25gLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgfSlcblxuICAgICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbYHZlcnNpb24ke2Zvcm1hdE5hbWUoc2luZ3VsYXJOYW1lKX1gXSA9IHtcbiAgICAgICAgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnZlcnNpb25UeXBlLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgaWQ6IHsgdHlwZTogdmVyc2lvbklEVHlwZSB9LFxuICAgICAgICAgIC4uLihwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb25cbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGZhbGxiYWNrTG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMuZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSksXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgICAgfVxuICAgICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbYHZlcnNpb25zJHtwbHVyYWxOYW1lfWBdID0ge1xuICAgICAgICB0eXBlOiBidWlsZFBhZ2luYXRlZExpc3RUeXBlKFxuICAgICAgICAgIGB2ZXJzaW9ucyR7Zm9ybWF0TmFtZShwbHVyYWxOYW1lKX1gLFxuICAgICAgICAgIGNvbGxlY3Rpb24uZ3JhcGhRTC52ZXJzaW9uVHlwZSxcbiAgICAgICAgKSxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB0eXBlOiBidWlsZFdoZXJlSW5wdXRUeXBlKHtcbiAgICAgICAgICAgICAgbmFtZTogYHZlcnNpb25zJHtzaW5ndWxhck5hbWV9YCxcbiAgICAgICAgICAgICAgZmllbGRzOiB2ZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyxcbiAgICAgICAgICAgICAgcGFyZW50TmFtZTogYHZlcnNpb25zJHtzaW5ndWxhck5hbWV9YCxcbiAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvblxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgICBsaW1pdDogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgICAgICAgcGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgICAgICAgc29ydDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZpbmRWZXJzaW9uc1Jlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgICAgfVxuICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYHJlc3RvcmVWZXJzaW9uJHtmb3JtYXROYW1lKHNpbmd1bGFyTmFtZSl9YF0gPSB7XG4gICAgICAgIHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgaWQ6IHsgdHlwZTogdmVyc2lvbklEVHlwZSB9LFxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiByZXN0b3JlVmVyc2lvblJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgY29uc3QgYXV0aEZpZWxkczogRmllbGRbXSA9IGNvbmZpZy5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5XG4gICAgICAgID8gW11cbiAgICAgICAgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICBjb2xsZWN0aW9uLmdyYXBoUUwuSldUID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgbmFtZTogZm9ybWF0TmFtZShgJHtzbHVnfUpXVGApLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAuLi5jb25maWcuZmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLnNhdmVUb0pXVCksXG4gICAgICAgICAgLi4uYXV0aEZpZWxkcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJlbnROYW1lOiBmb3JtYXROYW1lKGAke3NsdWd9SldUYCksXG4gICAgICAgIHBheWxvYWQsXG4gICAgICB9KVxuXG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgbWUke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgICBuYW1lOiBmb3JtYXROYW1lKGAke3NsdWd9TWVgKSxcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHtcbiAgICAgICAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHA6IHtcbiAgICAgICAgICAgICAgdHlwZTogR3JhcGhRTEludCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJhdGVneToge1xuICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHJlc29sdmU6IG1lKGNvbGxlY3Rpb24pLFxuICAgICAgfVxuXG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgaW5pdGlhbGl6ZWQke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTEJvb2xlYW4sXG4gICAgICAgIHJlc29sdmU6IGluaXQoY29sbGVjdGlvbi5jb25maWcuc2x1ZyksXG4gICAgICB9XG5cbiAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2ByZWZyZXNoVG9rZW4ke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgICBuYW1lOiBmb3JtYXROYW1lKGAke3NsdWd9UmVmcmVzaGVkJHtzaW5ndWxhck5hbWV9YCksXG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICBleHA6IHtcbiAgICAgICAgICAgICAgdHlwZTogR3JhcGhRTEludCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWZyZXNoZWRUb2tlbjoge1xuICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiB7XG4gICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwuSldULFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgcmVzb2x2ZTogcmVmcmVzaChjb2xsZWN0aW9uKSxcbiAgICAgIH1cblxuICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYGxvZ291dCR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICByZXNvbHZlOiBsb2dvdXQoY29sbGVjdGlvbiksXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5hdXRoLm1heExvZ2luQXR0ZW1wdHMgPiAwKSB7XG4gICAgICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYHVubG9jayR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxCb29sZWFuKSxcbiAgICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgICAgZW1haWw6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzb2x2ZTogdW5sb2NrKGNvbGxlY3Rpb24pLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2Bsb2dpbiR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBmb3JtYXROYW1lKGAke3NsdWd9TG9naW5SZXN1bHRgKSxcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICBleHA6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMSW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgZW1haWw6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzb2x2ZTogbG9naW4oY29sbGVjdGlvbiksXG4gICAgICAgIH1cblxuICAgICAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgZm9yZ290UGFzc3dvcmQke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEJvb2xlYW4pLFxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIGRpc2FibGVFbWFpbDogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICAgICAgZW1haWw6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpIH0sXG4gICAgICAgICAgICBleHBpcmF0aW9uOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc29sdmU6IGZvcmdvdFBhc3N3b3JkKGNvbGxlY3Rpb24pLFxuICAgICAgICB9XG5cbiAgICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYHJlc2V0UGFzc3dvcmQke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgICAgICAgbmFtZTogZm9ybWF0TmFtZShgJHtzbHVnfVJlc2V0UGFzc3dvcmRgKSxcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICB0b2tlbjogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgICAgIHVzZXI6IHsgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICAgICAgdG9rZW46IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzb2x2ZTogcmVzZXRQYXNzd29yZChjb2xsZWN0aW9uKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2B2ZXJpZnlFbWFpbCR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgICAgIHR5cGU6IEdyYXBoUUxCb29sZWFuLFxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIHRva2VuOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc29sdmU6IHZlcmlmeUVtYWlsKGNvbGxlY3Rpb24pLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q29sbGVjdGlvbnNHcmFwaFFMXG4iXSwibmFtZXMiOlsiaW5pdENvbGxlY3Rpb25zR3JhcGhRTCIsInBheWxvYWQiLCJPYmplY3QiLCJrZXlzIiwiY29sbGVjdGlvbnMiLCJmb3JFYWNoIiwic2x1ZyIsImNvbGxlY3Rpb24iLCJjb25maWciLCJmaWVsZHMiLCJncmFwaFFMIiwidmVyc2lvbnMiLCJkcmFmdHNFbmFibGVkIiwiZHJhZnRzIiwic2luZ3VsYXJOYW1lIiwicGx1cmFsTmFtZSIsImZyb21TbHVnIiwiZm9ybWF0TmFtZXMiLCJ0b1dvcmRzIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJoYXNJREZpZWxkIiwiZmxhdHRlbkZpZWxkcyIsImZpbmRJbmRleCIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJpZFR5cGUiLCJnZXRDb2xsZWN0aW9uSURUeXBlIiwiYmFzZUZpZWxkcyIsIndoZXJlSW5wdXRGaWVsZHMiLCJpZCIsInR5cGUiLCJwdXNoIiwiZGIiLCJkZWZhdWx0SURUeXBlIiwiZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUiLCJCb29sZWFuIiwiYnVpbGRPYmplY3RUeXBlIiwiZm9yY2VOdWxsYWJsZSIsInBhcmVudE5hbWUiLCJwYWdpbmF0ZWRUeXBlIiwiYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSIsIndoZXJlSW5wdXRUeXBlIiwiYnVpbGRXaGVyZUlucHV0VHlwZSIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsImxhYmVsIiwicmVxdWlyZWQiLCJjcmVhdGVNdXRhdGlvbklucHV0VHlwZSIsImJ1aWxkTXV0YXRpb25JbnB1dFR5cGUiLCJtdXRhdGlvbklucHV0VHlwZSIsIkdyYXBoUUxOb25OdWxsIiwidXBkYXRlTXV0YXRpb25JbnB1dFR5cGUiLCJmaWx0ZXIiLCJRdWVyeSIsImFyZ3MiLCJkcmFmdCIsIkdyYXBoUUxCb29sZWFuIiwibG9jYWxpemF0aW9uIiwiZmFsbGJhY2tMb2NhbGUiLCJ0eXBlcyIsImZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIiwibG9jYWxlIiwibG9jYWxlSW5wdXRUeXBlIiwicmVzb2x2ZSIsImZpbmRCeUlEUmVzb2x2ZXIiLCJ3aGVyZSIsImxpbWl0IiwiR3JhcGhRTEludCIsInBhZ2UiLCJzb3J0IiwiR3JhcGhRTFN0cmluZyIsImZpbmRSZXNvbHZlciIsIkdyYXBoUUxPYmplY3RUeXBlIiwidG90YWxEb2NzIiwiY291bnRSZXNvbHZlciIsImJ1aWxkUG9saWN5VHlwZSIsImVudGl0eSIsInNjb3BlIiwidHlwZVN1ZmZpeCIsImRvY0FjY2Vzc1Jlc29sdmVyIiwiTXV0YXRpb24iLCJkYXRhIiwiY3JlYXRlUmVzb2x2ZXIiLCJhdXRvc2F2ZSIsInVwZGF0ZVJlc29sdmVyIiwiZ2V0RGVsZXRlUmVzb2x2ZXIiLCJ2ZXJzaW9uSURUeXBlIiwidmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMiLCJidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwidmVyc2lvblR5cGUiLCJmb3JtYXROYW1lIiwiZmluZFZlcnNpb25CeUlEUmVzb2x2ZXIiLCJmaW5kVmVyc2lvbnNSZXNvbHZlciIsInJlc3RvcmVWZXJzaW9uUmVzb2x2ZXIiLCJhdXRoRmllbGRzIiwiSldUIiwic2F2ZVRvSldUIiwiZXhwIiwic3RyYXRlZ3kiLCJ0b2tlbiIsInVzZXIiLCJtZSIsImluaXQiLCJyZWZyZXNoZWRUb2tlbiIsInJlZnJlc2giLCJsb2dvdXQiLCJtYXhMb2dpbkF0dGVtcHRzIiwiZW1haWwiLCJ1bmxvY2siLCJwYXNzd29yZCIsImxvZ2luIiwiZGlzYWJsZUVtYWlsIiwiZXhwaXJhdGlvbiIsImZvcmdvdFBhc3N3b3JkIiwicmVzZXRQYXNzd29yZCIsInZlcmlmeUVtYWlsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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