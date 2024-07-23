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
const _pluralize = require("pluralize");
const _buildMutationInputType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildMutationInputType"));
const _buildObjectType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildObjectType"));
const _buildPaginatedListType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildPaginatedListType"));
const _buildPoliciesType = require("../../graphql/schema/buildPoliciesType");
const _buildWhereInputType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildWhereInputType"));
const _formatName = /*#__PURE__*/ _interop_require_default(require("../../graphql/utilities/formatName"));
const _formatLabels = require("../../utilities/formatLabels");
const _buildGlobalFields = require("../../versions/buildGlobalFields");
const _docAccess = require("./resolvers/docAccess");
const _findOne = /*#__PURE__*/ _interop_require_default(require("./resolvers/findOne"));
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./resolvers/findVersionByID"));
const _findVersions = /*#__PURE__*/ _interop_require_default(require("./resolvers/findVersions"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./resolvers/restoreVersion"));
const _update = /*#__PURE__*/ _interop_require_default(require("./resolvers/update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initGlobalsGraphQL(payload) {
    Object.keys(payload.globals.config).forEach((slug)=>{
        const global = payload.globals.config[slug];
        const { fields, graphQL, versions } = global;
        if (graphQL === false) {
            return;
        }
        const formattedName = graphQL?.name ? graphQL.name : (0, _pluralize.singular)((0, _formatLabels.toWords)(global.slug, true));
        const forceNullableObjectType = Boolean(versions?.drafts);
        if (!payload.globals.graphQL) payload.globals.graphQL = {};
        const updateMutationInputType = (0, _buildMutationInputType.default)(payload, formattedName, fields, formattedName);
        payload.globals.graphQL[slug] = {
            mutationInputType: updateMutationInputType ? new _graphql.GraphQLNonNull(updateMutationInputType) : null,
            type: (0, _buildObjectType.default)({
                name: formattedName,
                fields,
                forceNullable: forceNullableObjectType,
                parentName: formattedName,
                payload
            })
        };
        payload.Query.fields[formattedName] = {
            args: {
                draft: {
                    type: _graphql.GraphQLBoolean
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
            resolve: (0, _findOne.default)(global),
            type: payload.globals.graphQL[slug].type
        };
        payload.Mutation.fields[`update${formattedName}`] = {
            args: {
                ...updateMutationInputType ? {
                    data: {
                        type: payload.globals.graphQL[slug].mutationInputType
                    }
                } : {},
                draft: {
                    type: _graphql.GraphQLBoolean
                },
                ...payload.config.localization ? {
                    locale: {
                        type: payload.types.localeInputType
                    }
                } : {}
            },
            resolve: (0, _update.default)(global),
            type: payload.globals.graphQL[slug].type
        };
        payload.Query.fields[`docAccess${formattedName}`] = {
            resolve: (0, _docAccess.docAccessResolver)(global),
            type: (0, _buildPoliciesType.buildPolicyType)({
                entity: global,
                scope: 'docAccess',
                type: 'global',
                typeSuffix: 'DocAccess'
            })
        };
        if (global.versions) {
            const idType = payload.db.defaultIDType === 'number' ? _graphql.GraphQLInt : _graphql.GraphQLString;
            const versionGlobalFields = [
                ...(0, _buildGlobalFields.buildVersionGlobalFields)(global),
                {
                    name: 'id',
                    type: payload.db.defaultIDType
                },
                {
                    name: 'createdAt',
                    label: 'Created At',
                    type: 'date'
                },
                {
                    name: 'updatedAt',
                    label: 'Updated At',
                    type: 'date'
                }
            ];
            payload.globals.graphQL[slug].versionType = (0, _buildObjectType.default)({
                name: `${formattedName}Version`,
                fields: versionGlobalFields,
                forceNullable: forceNullableObjectType,
                parentName: `${formattedName}Version`,
                payload
            });
            payload.Query.fields[`version${(0, _formatName.default)(formattedName)}`] = {
                args: {
                    id: {
                        type: idType
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
                resolve: (0, _findVersionByID.default)(global),
                type: payload.globals.graphQL[slug].versionType
            };
            payload.Query.fields[`versions${formattedName}`] = {
                args: {
                    where: {
                        type: (0, _buildWhereInputType.default)({
                            name: `versions${formattedName}`,
                            fields: versionGlobalFields,
                            parentName: `versions${formattedName}`,
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
                resolve: (0, _findVersions.default)(global),
                type: (0, _buildPaginatedListType.default)(`versions${(0, _formatName.default)(formattedName)}`, payload.globals.graphQL[slug].versionType)
            };
            payload.Mutation.fields[`restoreVersion${(0, _formatName.default)(formattedName)}`] = {
                args: {
                    id: {
                        type: idType
                    }
                },
                resolve: (0, _restoreVersion.default)(global),
                type: payload.globals.graphQL[slug].type
            };
        }
    });
}
const _default = initGlobalsGraphQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgR3JhcGhRTEJvb2xlYW4sIEdyYXBoUUxJbnQsIEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSAnZ3JhcGhxbCdcbmltcG9ydCB7IHNpbmd1bGFyIH0gZnJvbSAncGx1cmFsaXplJ1xuXG5pbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uL3BheWxvYWQnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRNdXRhdGlvbklucHV0VHlwZSdcbmltcG9ydCBidWlsZE9iamVjdFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRPYmplY3RUeXBlJ1xuaW1wb3J0IGJ1aWxkUGFnaW5hdGVkTGlzdFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSdcbmltcG9ydCB7IGJ1aWxkUG9saWN5VHlwZSB9IGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hL2J1aWxkUG9saWNpZXNUeXBlJ1xuaW1wb3J0IGJ1aWxkV2hlcmVJbnB1dFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRXaGVyZUlucHV0VHlwZSdcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uLy4uL2dyYXBocWwvdXRpbGl0aWVzL2Zvcm1hdE5hbWUnXG5pbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdExhYmVscydcbmltcG9ydCB7IGJ1aWxkVmVyc2lvbkdsb2JhbEZpZWxkcyB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL2J1aWxkR2xvYmFsRmllbGRzJ1xuaW1wb3J0IHsgZG9jQWNjZXNzUmVzb2x2ZXIgfSBmcm9tICcuL3Jlc29sdmVycy9kb2NBY2Nlc3MnXG5pbXBvcnQgZmluZE9uZVJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2ZpbmRPbmUnXG5pbXBvcnQgZmluZFZlcnNpb25CeUlEUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZmluZFZlcnNpb25CeUlEJ1xuaW1wb3J0IGZpbmRWZXJzaW9uc1Jlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2ZpbmRWZXJzaW9ucydcbmltcG9ydCByZXN0b3JlVmVyc2lvblJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL3Jlc3RvcmVWZXJzaW9uJ1xuaW1wb3J0IHVwZGF0ZVJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL3VwZGF0ZSdcblxuZnVuY3Rpb24gaW5pdEdsb2JhbHNHcmFwaFFMKHBheWxvYWQ6IFBheWxvYWQpOiB2b2lkIHtcbiAgT2JqZWN0LmtleXMocGF5bG9hZC5nbG9iYWxzLmNvbmZpZykuZm9yRWFjaCgoc2x1ZykgPT4ge1xuICAgIGNvbnN0IGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnID0gcGF5bG9hZC5nbG9iYWxzLmNvbmZpZ1tzbHVnXVxuICAgIGNvbnN0IHsgZmllbGRzLCBncmFwaFFMLCB2ZXJzaW9ucyB9ID0gZ2xvYmFsXG5cbiAgICBpZiAoZ3JhcGhRTCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdHRlZE5hbWUgPSBncmFwaFFMPy5uYW1lID8gZ3JhcGhRTC5uYW1lIDogc2luZ3VsYXIodG9Xb3JkcyhnbG9iYWwuc2x1ZywgdHJ1ZSkpXG5cbiAgICBjb25zdCBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSA9IEJvb2xlYW4odmVyc2lvbnM/LmRyYWZ0cylcblxuICAgIGlmICghcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUwpIHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMID0ge31cblxuICAgIGNvbnN0IHVwZGF0ZU11dGF0aW9uSW5wdXRUeXBlID0gYnVpbGRNdXRhdGlvbklucHV0VHlwZShcbiAgICAgIHBheWxvYWQsXG4gICAgICBmb3JtYXR0ZWROYW1lLFxuICAgICAgZmllbGRzLFxuICAgICAgZm9ybWF0dGVkTmFtZSxcbiAgICApXG4gICAgcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUxbc2x1Z10gPSB7XG4gICAgICBtdXRhdGlvbklucHV0VHlwZTogdXBkYXRlTXV0YXRpb25JbnB1dFR5cGVcbiAgICAgICAgPyBuZXcgR3JhcGhRTE5vbk51bGwodXBkYXRlTXV0YXRpb25JbnB1dFR5cGUpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHR5cGU6IGJ1aWxkT2JqZWN0VHlwZSh7XG4gICAgICAgIG5hbWU6IGZvcm1hdHRlZE5hbWUsXG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgZm9yY2VOdWxsYWJsZTogZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUsXG4gICAgICAgIHBhcmVudE5hbWU6IGZvcm1hdHRlZE5hbWUsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICB9KSxcbiAgICB9XG5cbiAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tmb3JtYXR0ZWROYW1lXSA9IHtcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgZHJhZnQ6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBmYWxsYmFja0xvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IGZpbmRPbmVSZXNvbHZlcihnbG9iYWwpLFxuICAgICAgdHlwZTogcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUxbc2x1Z10udHlwZSxcbiAgICB9XG5cbiAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgdXBkYXRlJHtmb3JtYXR0ZWROYW1lfWBdID0ge1xuICAgICAgYXJnczoge1xuICAgICAgICAuLi4odXBkYXRlTXV0YXRpb25JbnB1dFR5cGVcbiAgICAgICAgICA/IHsgZGF0YTogeyB0eXBlOiBwYXlsb2FkLmdsb2JhbHMuZ3JhcGhRTFtzbHVnXS5tdXRhdGlvbklucHV0VHlwZSB9IH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgZHJhZnQ6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBsb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiB1cGRhdGVSZXNvbHZlcihnbG9iYWwpLFxuICAgICAgdHlwZTogcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUxbc2x1Z10udHlwZSxcbiAgICB9XG5cbiAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgZG9jQWNjZXNzJHtmb3JtYXR0ZWROYW1lfWBdID0ge1xuICAgICAgcmVzb2x2ZTogZG9jQWNjZXNzUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICAgIHR5cGU6IGJ1aWxkUG9saWN5VHlwZSh7XG4gICAgICAgIGVudGl0eTogZ2xvYmFsLFxuICAgICAgICBzY29wZTogJ2RvY0FjY2VzcycsXG4gICAgICAgIHR5cGU6ICdnbG9iYWwnLFxuICAgICAgICB0eXBlU3VmZml4OiAnRG9jQWNjZXNzJyxcbiAgICAgIH0pLFxuICAgIH1cblxuICAgIGlmIChnbG9iYWwudmVyc2lvbnMpIHtcbiAgICAgIGNvbnN0IGlkVHlwZSA9IHBheWxvYWQuZGIuZGVmYXVsdElEVHlwZSA9PT0gJ251bWJlcicgPyBHcmFwaFFMSW50IDogR3JhcGhRTFN0cmluZ1xuXG4gICAgICBjb25zdCB2ZXJzaW9uR2xvYmFsRmllbGRzOiBGaWVsZFtdID0gW1xuICAgICAgICAuLi5idWlsZFZlcnNpb25HbG9iYWxGaWVsZHMoZ2xvYmFsKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgdHlwZTogcGF5bG9hZC5kYi5kZWZhdWx0SURUeXBlIGFzICd0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdjcmVhdGVkQXQnLFxuICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlZCBBdCcsXG4gICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3VwZGF0ZWRBdCcsXG4gICAgICAgICAgbGFiZWw6ICdVcGRhdGVkIEF0JyxcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICBdXG5cbiAgICAgIHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddLnZlcnNpb25UeXBlID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgbmFtZTogYCR7Zm9ybWF0dGVkTmFtZX1WZXJzaW9uYCxcbiAgICAgICAgZmllbGRzOiB2ZXJzaW9uR2xvYmFsRmllbGRzLFxuICAgICAgICBmb3JjZU51bGxhYmxlOiBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSxcbiAgICAgICAgcGFyZW50TmFtZTogYCR7Zm9ybWF0dGVkTmFtZX1WZXJzaW9uYCxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgIH0pXG5cbiAgICAgIHBheWxvYWQuUXVlcnkuZmllbGRzW2B2ZXJzaW9uJHtmb3JtYXROYW1lKGZvcm1hdHRlZE5hbWUpfWBdID0ge1xuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgaWQ6IHsgdHlwZTogaWRUeXBlIH0sXG4gICAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvblxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZTogZmluZFZlcnNpb25CeUlEUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICAgICAgdHlwZTogcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUxbc2x1Z10udmVyc2lvblR5cGUsXG4gICAgICB9XG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgdmVyc2lvbnMke2Zvcm1hdHRlZE5hbWV9YF0gPSB7XG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdHlwZTogYnVpbGRXaGVyZUlucHV0VHlwZSh7XG4gICAgICAgICAgICAgIG5hbWU6IGB2ZXJzaW9ucyR7Zm9ybWF0dGVkTmFtZX1gLFxuICAgICAgICAgICAgICBmaWVsZHM6IHZlcnNpb25HbG9iYWxGaWVsZHMsXG4gICAgICAgICAgICAgIHBhcmVudE5hbWU6IGB2ZXJzaW9ucyR7Zm9ybWF0dGVkTmFtZX1gLFxuICAgICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBmYWxsYmFja0xvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMubG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30pLFxuICAgICAgICAgIGxpbWl0OiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICBwYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICBzb3J0OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZTogZmluZFZlcnNpb25zUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICAgICAgdHlwZTogYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZShcbiAgICAgICAgICBgdmVyc2lvbnMke2Zvcm1hdE5hbWUoZm9ybWF0dGVkTmFtZSl9YCxcbiAgICAgICAgICBwYXlsb2FkLmdsb2JhbHMuZ3JhcGhRTFtzbHVnXS52ZXJzaW9uVHlwZSxcbiAgICAgICAgKSxcbiAgICAgIH1cbiAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2ByZXN0b3JlVmVyc2lvbiR7Zm9ybWF0TmFtZShmb3JtYXR0ZWROYW1lKX1gXSA9IHtcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIGlkOiB7IHR5cGU6IGlkVHlwZSB9LFxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiByZXN0b3JlVmVyc2lvblJlc29sdmVyKGdsb2JhbCksXG4gICAgICAgIHR5cGU6IHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddLnR5cGUsXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0R2xvYmFsc0dyYXBoUUxcbiJdLCJuYW1lcyI6WyJpbml0R2xvYmFsc0dyYXBoUUwiLCJwYXlsb2FkIiwiT2JqZWN0Iiwia2V5cyIsImdsb2JhbHMiLCJjb25maWciLCJmb3JFYWNoIiwic2x1ZyIsImdsb2JhbCIsImZpZWxkcyIsImdyYXBoUUwiLCJ2ZXJzaW9ucyIsImZvcm1hdHRlZE5hbWUiLCJuYW1lIiwic2luZ3VsYXIiLCJ0b1dvcmRzIiwiZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUiLCJCb29sZWFuIiwiZHJhZnRzIiwidXBkYXRlTXV0YXRpb25JbnB1dFR5cGUiLCJidWlsZE11dGF0aW9uSW5wdXRUeXBlIiwibXV0YXRpb25JbnB1dFR5cGUiLCJHcmFwaFFMTm9uTnVsbCIsInR5cGUiLCJidWlsZE9iamVjdFR5cGUiLCJmb3JjZU51bGxhYmxlIiwicGFyZW50TmFtZSIsIlF1ZXJ5IiwiYXJncyIsImRyYWZ0IiwiR3JhcGhRTEJvb2xlYW4iLCJsb2NhbGl6YXRpb24iLCJmYWxsYmFja0xvY2FsZSIsInR5cGVzIiwiZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUiLCJsb2NhbGUiLCJsb2NhbGVJbnB1dFR5cGUiLCJyZXNvbHZlIiwiZmluZE9uZVJlc29sdmVyIiwiTXV0YXRpb24iLCJkYXRhIiwidXBkYXRlUmVzb2x2ZXIiLCJkb2NBY2Nlc3NSZXNvbHZlciIsImJ1aWxkUG9saWN5VHlwZSIsImVudGl0eSIsInNjb3BlIiwidHlwZVN1ZmZpeCIsImlkVHlwZSIsImRiIiwiZGVmYXVsdElEVHlwZSIsIkdyYXBoUUxJbnQiLCJHcmFwaFFMU3RyaW5nIiwidmVyc2lvbkdsb2JhbEZpZWxkcyIsImJ1aWxkVmVyc2lvbkdsb2JhbEZpZWxkcyIsImxhYmVsIiwidmVyc2lvblR5cGUiLCJmb3JtYXROYW1lIiwiaWQiLCJmaW5kVmVyc2lvbkJ5SURSZXNvbHZlciIsIndoZXJlIiwiYnVpbGRXaGVyZUlucHV0VHlwZSIsImxpbWl0IiwicGFnZSIsInNvcnQiLCJmaW5kVmVyc2lvbnNSZXNvbHZlciIsImJ1aWxkUGFnaW5hdGVkTGlzdFR5cGUiLCJyZXN0b3JlVmVyc2lvblJlc29sdmVyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQWdMcEM7OztlQUFBOzs7eUJBL0swRTsyQkFDakQ7K0VBTVU7d0VBQ1A7K0VBQ087bUNBQ0g7NEVBQ0E7bUVBQ1Q7OEJBQ0M7bUNBQ2lCOzJCQUNQO2dFQUNOO3dFQUNRO3FFQUNIO3VFQUNFOytEQUNSOzs7Ozs7QUFFM0IsU0FBU0EsbUJBQW1CQyxPQUFnQjtJQUMxQ0MsT0FBT0MsSUFBSSxDQUFDRixRQUFRRyxPQUFPLENBQUNDLE1BQU0sRUFBRUMsT0FBTyxDQUFDLENBQUNDO1FBQzNDLE1BQU1DLFNBQWdDUCxRQUFRRyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0UsS0FBSztRQUNsRSxNQUFNLEVBQUVFLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUUsR0FBR0g7UUFFdEMsSUFBSUUsWUFBWSxPQUFPO1lBQ3JCO1FBQ0Y7UUFFQSxNQUFNRSxnQkFBZ0JGLFNBQVNHLE9BQU9ILFFBQVFHLElBQUksR0FBR0MsSUFBQUEsbUJBQVEsRUFBQ0MsSUFBQUEscUJBQU8sRUFBQ1AsT0FBT0QsSUFBSSxFQUFFO1FBRW5GLE1BQU1TLDBCQUEwQkMsUUFBUU4sVUFBVU87UUFFbEQsSUFBSSxDQUFDakIsUUFBUUcsT0FBTyxDQUFDTSxPQUFPLEVBQUVULFFBQVFHLE9BQU8sQ0FBQ00sT0FBTyxHQUFHLENBQUM7UUFFekQsTUFBTVMsMEJBQTBCQyxJQUFBQSwrQkFBc0IsRUFDcERuQixTQUNBVyxlQUNBSCxRQUNBRztRQUVGWCxRQUFRRyxPQUFPLENBQUNNLE9BQU8sQ0FBQ0gsS0FBSyxHQUFHO1lBQzlCYyxtQkFBbUJGLDBCQUNmLElBQUlHLHVCQUFjLENBQUNILDJCQUNuQjtZQUNKSSxNQUFNQyxJQUFBQSx3QkFBZSxFQUFDO2dCQUNwQlgsTUFBTUQ7Z0JBQ05IO2dCQUNBZ0IsZUFBZVQ7Z0JBQ2ZVLFlBQVlkO2dCQUNaWDtZQUNGO1FBQ0Y7UUFFQUEsUUFBUTBCLEtBQUssQ0FBQ2xCLE1BQU0sQ0FBQ0csY0FBYyxHQUFHO1lBQ3BDZ0IsTUFBTTtnQkFDSkMsT0FBTztvQkFBRU4sTUFBTU8sdUJBQWM7Z0JBQUM7Z0JBQzlCLEdBQUk3QixRQUFRSSxNQUFNLENBQUMwQixZQUFZLEdBQzNCO29CQUNFQyxnQkFBZ0I7d0JBQUVULE1BQU10QixRQUFRZ0MsS0FBSyxDQUFDQyx1QkFBdUI7b0JBQUM7b0JBQzlEQyxRQUFRO3dCQUFFWixNQUFNdEIsUUFBUWdDLEtBQUssQ0FBQ0csZUFBZTtvQkFBQztnQkFDaEQsSUFDQSxDQUFDLENBQUM7WUFDUjtZQUNBQyxTQUFTQyxJQUFBQSxnQkFBZSxFQUFDOUI7WUFDekJlLE1BQU10QixRQUFRRyxPQUFPLENBQUNNLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDZ0IsSUFBSTtRQUMxQztRQUVBdEIsUUFBUXNDLFFBQVEsQ0FBQzlCLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRUcsY0FBYyxDQUFDLENBQUMsR0FBRztZQUNsRGdCLE1BQU07Z0JBQ0osR0FBSVQsMEJBQ0E7b0JBQUVxQixNQUFNO3dCQUFFakIsTUFBTXRCLFFBQVFHLE9BQU8sQ0FBQ00sT0FBTyxDQUFDSCxLQUFLLENBQUNjLGlCQUFpQjtvQkFBQztnQkFBRSxJQUNsRSxDQUFDLENBQUM7Z0JBQ05RLE9BQU87b0JBQUVOLE1BQU1PLHVCQUFjO2dCQUFDO2dCQUM5QixHQUFJN0IsUUFBUUksTUFBTSxDQUFDMEIsWUFBWSxHQUMzQjtvQkFDRUksUUFBUTt3QkFBRVosTUFBTXRCLFFBQVFnQyxLQUFLLENBQUNHLGVBQWU7b0JBQUM7Z0JBQ2hELElBQ0EsQ0FBQyxDQUFDO1lBQ1I7WUFDQUMsU0FBU0ksSUFBQUEsZUFBYyxFQUFDakM7WUFDeEJlLE1BQU10QixRQUFRRyxPQUFPLENBQUNNLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDZ0IsSUFBSTtRQUMxQztRQUVBdEIsUUFBUTBCLEtBQUssQ0FBQ2xCLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRUcsY0FBYyxDQUFDLENBQUMsR0FBRztZQUNsRHlCLFNBQVNLLElBQUFBLDRCQUFpQixFQUFDbEM7WUFDM0JlLE1BQU1vQixJQUFBQSxrQ0FBZSxFQUFDO2dCQUNwQkMsUUFBUXBDO2dCQUNScUMsT0FBTztnQkFDUHRCLE1BQU07Z0JBQ051QixZQUFZO1lBQ2Q7UUFDRjtRQUVBLElBQUl0QyxPQUFPRyxRQUFRLEVBQUU7WUFDbkIsTUFBTW9DLFNBQVM5QyxRQUFRK0MsRUFBRSxDQUFDQyxhQUFhLEtBQUssV0FBV0MsbUJBQVUsR0FBR0Msc0JBQWE7WUFFakYsTUFBTUMsc0JBQStCO21CQUNoQ0MsSUFBQUEsMkNBQXdCLEVBQUM3QztnQkFDNUI7b0JBQ0VLLE1BQU07b0JBQ05VLE1BQU10QixRQUFRK0MsRUFBRSxDQUFDQyxhQUFhO2dCQUNoQztnQkFDQTtvQkFDRXBDLE1BQU07b0JBQ055QyxPQUFPO29CQUNQL0IsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRVYsTUFBTTtvQkFDTnlDLE9BQU87b0JBQ1AvQixNQUFNO2dCQUNSO2FBQ0Q7WUFFRHRCLFFBQVFHLE9BQU8sQ0FBQ00sT0FBTyxDQUFDSCxLQUFLLENBQUNnRCxXQUFXLEdBQUcvQixJQUFBQSx3QkFBZSxFQUFDO2dCQUMxRFgsTUFBTSxDQUFDLEVBQUVELGNBQWMsT0FBTyxDQUFDO2dCQUMvQkgsUUFBUTJDO2dCQUNSM0IsZUFBZVQ7Z0JBQ2ZVLFlBQVksQ0FBQyxFQUFFZCxjQUFjLE9BQU8sQ0FBQztnQkFDckNYO1lBQ0Y7WUFFQUEsUUFBUTBCLEtBQUssQ0FBQ2xCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRStDLElBQUFBLG1CQUFVLEVBQUM1QyxlQUFlLENBQUMsQ0FBQyxHQUFHO2dCQUM1RGdCLE1BQU07b0JBQ0o2QixJQUFJO3dCQUFFbEMsTUFBTXdCO29CQUFPO29CQUNuQixHQUFJOUMsUUFBUUksTUFBTSxDQUFDMEIsWUFBWSxHQUMzQjt3QkFDRUMsZ0JBQWdCOzRCQUFFVCxNQUFNdEIsUUFBUWdDLEtBQUssQ0FBQ0MsdUJBQXVCO3dCQUFDO3dCQUM5REMsUUFBUTs0QkFBRVosTUFBTXRCLFFBQVFnQyxLQUFLLENBQUNHLGVBQWU7d0JBQUM7b0JBQ2hELElBQ0EsQ0FBQyxDQUFDO2dCQUNSO2dCQUNBQyxTQUFTcUIsSUFBQUEsd0JBQXVCLEVBQUNsRDtnQkFDakNlLE1BQU10QixRQUFRRyxPQUFPLENBQUNNLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDZ0QsV0FBVztZQUNqRDtZQUNBdEQsUUFBUTBCLEtBQUssQ0FBQ2xCLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRUcsY0FBYyxDQUFDLENBQUMsR0FBRztnQkFDakRnQixNQUFNO29CQUNKK0IsT0FBTzt3QkFDTHBDLE1BQU1xQyxJQUFBQSw0QkFBbUIsRUFBQzs0QkFDeEIvQyxNQUFNLENBQUMsUUFBUSxFQUFFRCxjQUFjLENBQUM7NEJBQ2hDSCxRQUFRMkM7NEJBQ1IxQixZQUFZLENBQUMsUUFBUSxFQUFFZCxjQUFjLENBQUM7NEJBQ3RDWDt3QkFDRjtvQkFDRjtvQkFDQSxHQUFJQSxRQUFRSSxNQUFNLENBQUMwQixZQUFZLEdBQzNCO3dCQUNFQyxnQkFBZ0I7NEJBQUVULE1BQU10QixRQUFRZ0MsS0FBSyxDQUFDQyx1QkFBdUI7d0JBQUM7d0JBQzlEQyxRQUFROzRCQUFFWixNQUFNdEIsUUFBUWdDLEtBQUssQ0FBQ0csZUFBZTt3QkFBQztvQkFDaEQsSUFDQSxDQUFDLENBQUM7b0JBQ055QixPQUFPO3dCQUFFdEMsTUFBTTJCLG1CQUFVO29CQUFDO29CQUMxQlksTUFBTTt3QkFBRXZDLE1BQU0yQixtQkFBVTtvQkFBQztvQkFDekJhLE1BQU07d0JBQUV4QyxNQUFNNEIsc0JBQWE7b0JBQUM7Z0JBQzlCO2dCQUNBZCxTQUFTMkIsSUFBQUEscUJBQW9CLEVBQUN4RDtnQkFDOUJlLE1BQU0wQyxJQUFBQSwrQkFBc0IsRUFDMUIsQ0FBQyxRQUFRLEVBQUVULElBQUFBLG1CQUFVLEVBQUM1QyxlQUFlLENBQUMsRUFDdENYLFFBQVFHLE9BQU8sQ0FBQ00sT0FBTyxDQUFDSCxLQUFLLENBQUNnRCxXQUFXO1lBRTdDO1lBQ0F0RCxRQUFRc0MsUUFBUSxDQUFDOUIsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFK0MsSUFBQUEsbUJBQVUsRUFBQzVDLGVBQWUsQ0FBQyxDQUFDLEdBQUc7Z0JBQ3RFZ0IsTUFBTTtvQkFDSjZCLElBQUk7d0JBQUVsQyxNQUFNd0I7b0JBQU87Z0JBQ3JCO2dCQUNBVixTQUFTNkIsSUFBQUEsdUJBQXNCLEVBQUMxRDtnQkFDaENlLE1BQU10QixRQUFRRyxPQUFPLENBQUNNLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDZ0IsSUFBSTtZQUMxQztRQUNGO0lBQ0Y7QUFDRjtNQUVBLFdBQWV2QiJ9