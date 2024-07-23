/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return registerGraphQLSchema;
    }
});
const _graphql = /*#__PURE__*/ _interop_require_wildcard(require("graphql"));
const _graphqlquerycomplexity = /*#__PURE__*/ _interop_require_wildcard(require("graphql-query-complexity"));
const _access = /*#__PURE__*/ _interop_require_default(require("../auth/graphql/resolvers/access"));
const _init = /*#__PURE__*/ _interop_require_default(require("../collections/graphql/init"));
const _init1 = /*#__PURE__*/ _interop_require_default(require("../globals/graphql/init"));
const _buildFallbackLocaleInputType = /*#__PURE__*/ _interop_require_default(require("./schema/buildFallbackLocaleInputType"));
const _buildLocaleInputType = /*#__PURE__*/ _interop_require_default(require("./schema/buildLocaleInputType"));
const _buildPoliciesType = /*#__PURE__*/ _interop_require_default(require("./schema/buildPoliciesType"));
const _wrapCustomResolver = require("./utilities/wrapCustomResolver");
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
function registerGraphQLSchema(payload) {
    payload.types = {
        arrayTypes: {},
        blockInputTypes: {},
        blockTypes: {},
        groupTypes: {}
    };
    if (payload.config.localization) {
        payload.types.localeInputType = (0, _buildLocaleInputType.default)(payload.config.localization);
        payload.types.fallbackLocaleInputType = (0, _buildFallbackLocaleInputType.default)(payload.config.localization);
    }
    payload.Query = {
        name: 'Query',
        fields: {}
    };
    payload.Mutation = {
        name: 'Mutation',
        fields: {}
    };
    (0, _init.default)(payload);
    (0, _init1.default)(payload);
    payload.Query.fields.Access = {
        resolve: (0, _access.default)(payload),
        type: (0, _buildPoliciesType.default)(payload)
    };
    if (typeof payload.config.graphQL.queries === 'function') {
        const customQueries = payload.config.graphQL.queries(_graphql, payload);
        payload.Query = {
            ...payload.Query,
            fields: {
                ...payload.Query.fields,
                ...(0, _wrapCustomResolver.wrapCustomFields)(customQueries || {})
            }
        };
    }
    if (typeof payload.config.graphQL.mutations === 'function') {
        const customMutations = payload.config.graphQL.mutations(_graphql, payload);
        payload.Mutation = {
            ...payload.Mutation,
            fields: {
                ...payload.Mutation.fields,
                ...(0, _wrapCustomResolver.wrapCustomFields)(customMutations || {})
            }
        };
    }
    const query = new _graphql.GraphQLObjectType(payload.Query);
    const mutation = new _graphql.GraphQLObjectType(payload.Mutation);
    const schema = {
        mutation,
        query
    };
    payload.schema = new _graphql.GraphQLSchema(schema);
    payload.validationRules = ({ variableValues })=>[
            (0, _graphqlquerycomplexity.default)({
                estimators: [
                    (0, _graphqlquerycomplexity.fieldExtensionsEstimator)(),
                    (0, _graphqlquerycomplexity.simpleEstimator)({
                        defaultComplexity: 1
                    })
                ],
                maximumComplexity: payload.config.graphQL.maxComplexity,
                variables: variableValues
            })
        ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL3JlZ2lzdGVyU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgKiBhcyBHcmFwaFFMIGZyb20gJ2dyYXBocWwnXG5pbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnXG5pbXBvcnQgcXVlcnlDb21wbGV4aXR5LCB7XG4gIGZpZWxkRXh0ZW5zaW9uc0VzdGltYXRvcixcbiAgc2ltcGxlRXN0aW1hdG9yLFxufSBmcm9tICdncmFwaHFsLXF1ZXJ5LWNvbXBsZXhpdHknXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnXG5cbmltcG9ydCBhY2Nlc3NSZXNvbHZlciBmcm9tICcuLi9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2FjY2VzcydcbmltcG9ydCBpbml0Q29sbGVjdGlvbnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JhcGhxbC9pbml0J1xuaW1wb3J0IGluaXRHbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMvZ3JhcGhxbC9pbml0J1xuaW1wb3J0IGJ1aWxkRmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUgZnJvbSAnLi9zY2hlbWEvYnVpbGRGYWxsYmFja0xvY2FsZUlucHV0VHlwZSdcbmltcG9ydCBidWlsZExvY2FsZUlucHV0VHlwZSBmcm9tICcuL3NjaGVtYS9idWlsZExvY2FsZUlucHV0VHlwZSdcbmltcG9ydCBidWlsZFBvbGljaWVzVHlwZSBmcm9tICcuL3NjaGVtYS9idWlsZFBvbGljaWVzVHlwZSdcbmltcG9ydCB7IHdyYXBDdXN0b21GaWVsZHMgfSBmcm9tICcuL3V0aWxpdGllcy93cmFwQ3VzdG9tUmVzb2x2ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyR3JhcGhRTFNjaGVtYShwYXlsb2FkOiBQYXlsb2FkKTogdm9pZCB7XG4gIHBheWxvYWQudHlwZXMgPSB7XG4gICAgYXJyYXlUeXBlczoge30sXG4gICAgYmxvY2tJbnB1dFR5cGVzOiB7fSxcbiAgICBibG9ja1R5cGVzOiB7fSxcbiAgICBncm91cFR5cGVzOiB7fSxcbiAgfVxuXG4gIGlmIChwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24pIHtcbiAgICBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSA9IGJ1aWxkTG9jYWxlSW5wdXRUeXBlKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbilcbiAgICBwYXlsb2FkLnR5cGVzLmZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlID0gYnVpbGRGYWxsYmFja0xvY2FsZUlucHV0VHlwZShcbiAgICAgIHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbixcbiAgICApXG4gIH1cblxuICBwYXlsb2FkLlF1ZXJ5ID0ge1xuICAgIG5hbWU6ICdRdWVyeScsXG4gICAgZmllbGRzOiB7fSxcbiAgfVxuXG4gIHBheWxvYWQuTXV0YXRpb24gPSB7XG4gICAgbmFtZTogJ011dGF0aW9uJyxcbiAgICBmaWVsZHM6IHt9LFxuICB9XG5cbiAgaW5pdENvbGxlY3Rpb25zKHBheWxvYWQpXG4gIGluaXRHbG9iYWxzKHBheWxvYWQpXG5cbiAgcGF5bG9hZC5RdWVyeS5maWVsZHMuQWNjZXNzID0ge1xuICAgIHJlc29sdmU6IGFjY2Vzc1Jlc29sdmVyKHBheWxvYWQpLFxuICAgIHR5cGU6IGJ1aWxkUG9saWNpZXNUeXBlKHBheWxvYWQpLFxuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXlsb2FkLmNvbmZpZy5ncmFwaFFMLnF1ZXJpZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBjdXN0b21RdWVyaWVzID0gcGF5bG9hZC5jb25maWcuZ3JhcGhRTC5xdWVyaWVzKEdyYXBoUUwsIHBheWxvYWQpXG4gICAgcGF5bG9hZC5RdWVyeSA9IHtcbiAgICAgIC4uLnBheWxvYWQuUXVlcnksXG4gICAgICBmaWVsZHM6IHtcbiAgICAgICAgLi4ucGF5bG9hZC5RdWVyeS5maWVsZHMsXG4gICAgICAgIC4uLndyYXBDdXN0b21GaWVsZHMoKGN1c3RvbVF1ZXJpZXMgfHwge30pIGFzIG5ldmVyKSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXlsb2FkLmNvbmZpZy5ncmFwaFFMLm11dGF0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGN1c3RvbU11dGF0aW9ucyA9IHBheWxvYWQuY29uZmlnLmdyYXBoUUwubXV0YXRpb25zKEdyYXBoUUwsIHBheWxvYWQpXG4gICAgcGF5bG9hZC5NdXRhdGlvbiA9IHtcbiAgICAgIC4uLnBheWxvYWQuTXV0YXRpb24sXG4gICAgICBmaWVsZHM6IHtcbiAgICAgICAgLi4ucGF5bG9hZC5NdXRhdGlvbi5maWVsZHMsXG4gICAgICAgIC4uLndyYXBDdXN0b21GaWVsZHMoKGN1c3RvbU11dGF0aW9ucyB8fCB7fSkgYXMgbmV2ZXIpLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBxdWVyeSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZShwYXlsb2FkLlF1ZXJ5KVxuICBjb25zdCBtdXRhdGlvbiA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZShwYXlsb2FkLk11dGF0aW9uKVxuXG4gIGNvbnN0IHNjaGVtYSA9IHtcbiAgICBtdXRhdGlvbixcbiAgICBxdWVyeSxcbiAgfVxuXG4gIHBheWxvYWQuc2NoZW1hID0gbmV3IEdyYXBoUUxTY2hlbWEoc2NoZW1hKVxuXG4gIHBheWxvYWQudmFsaWRhdGlvblJ1bGVzID0gKHsgdmFyaWFibGVWYWx1ZXMgfSkgPT4gW1xuICAgIHF1ZXJ5Q29tcGxleGl0eSh7XG4gICAgICBlc3RpbWF0b3JzOiBbXG4gICAgICAgIGZpZWxkRXh0ZW5zaW9uc0VzdGltYXRvcigpLFxuICAgICAgICBzaW1wbGVFc3RpbWF0b3IoeyBkZWZhdWx0Q29tcGxleGl0eTogMSB9KSwgLy8gRmFsbGJhY2sgaWYgY29tcGxleGl0eSBub3Qgc2V0XG4gICAgICBdLFxuICAgICAgbWF4aW11bUNvbXBsZXhpdHk6IHBheWxvYWQuY29uZmlnLmdyYXBoUUwubWF4Q29tcGxleGl0eSxcbiAgICAgIHZhcmlhYmxlczogdmFyaWFibGVWYWx1ZXMsXG4gICAgICAvLyBvbkNvbXBsZXRlOiAoY29tcGxleGl0eSkgPT4geyBjb25zb2xlLmxvZygnUXVlcnkgQ29tcGxleGl0eTonLCBjb21wbGV4aXR5KTsgfSxcbiAgICB9KSxcbiAgXVxufVxuIl0sIm5hbWVzIjpbInJlZ2lzdGVyR3JhcGhRTFNjaGVtYSIsInBheWxvYWQiLCJ0eXBlcyIsImFycmF5VHlwZXMiLCJibG9ja0lucHV0VHlwZXMiLCJibG9ja1R5cGVzIiwiZ3JvdXBUeXBlcyIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsImxvY2FsZUlucHV0VHlwZSIsImJ1aWxkTG9jYWxlSW5wdXRUeXBlIiwiZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUiLCJidWlsZEZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIiwiUXVlcnkiLCJuYW1lIiwiZmllbGRzIiwiTXV0YXRpb24iLCJpbml0Q29sbGVjdGlvbnMiLCJpbml0R2xvYmFscyIsIkFjY2VzcyIsInJlc29sdmUiLCJhY2Nlc3NSZXNvbHZlciIsInR5cGUiLCJidWlsZFBvbGljaWVzVHlwZSIsImdyYXBoUUwiLCJxdWVyaWVzIiwiY3VzdG9tUXVlcmllcyIsIkdyYXBoUUwiLCJ3cmFwQ3VzdG9tRmllbGRzIiwibXV0YXRpb25zIiwiY3VzdG9tTXV0YXRpb25zIiwicXVlcnkiLCJHcmFwaFFMT2JqZWN0VHlwZSIsIm11dGF0aW9uIiwic2NoZW1hIiwiR3JhcGhRTFNjaGVtYSIsInZhbGlkYXRpb25SdWxlcyIsInZhcmlhYmxlVmFsdWVzIiwicXVlcnlDb21wbGV4aXR5IiwiZXN0aW1hdG9ycyIsImZpZWxkRXh0ZW5zaW9uc0VzdGltYXRvciIsInNpbXBsZUVzdGltYXRvciIsImRlZmF1bHRDb21wbGV4aXR5IiwibWF4aW11bUNvbXBsZXhpdHkiLCJtYXhDb21wbGV4aXR5IiwidmFyaWFibGVzIl0sInJh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