"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "withOperators", {
    enumerable: true,
    get: function() {
        return withOperators;
    }
});
const _graphql = require("graphql");
const _graphqlscalars = require("graphql-scalars");
const _graphqltypejson = require("graphql-type-json");
const _types = require("../../fields/config/types");
const _combineParentName = /*#__PURE__*/ _interop_require_default(require("../utilities/combineParentName"));
const _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
const _operators = /*#__PURE__*/ _interop_require_default(require("./operators"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const GeoJSONObject = new _graphql.GraphQLInputObjectType({
    name: 'GeoJSONObject',
    fields: {
        coordinates: {
            type: _graphqltypejson.GraphQLJSON
        },
        type: {
            type: _graphql.GraphQLString
        }
    }
});
const defaults = {
    checkbox: {
        operators: [
            ..._operators.default.equality.map((operator)=>({
                    name: operator,
                    type: _graphql.GraphQLBoolean
                }))
        ]
    },
    code: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.partial
            ].map((operator)=>({
                    name: operator,
                    type: _graphql.GraphQLString
                }))
        ]
    },
    date: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.comparison,
                'like'
            ].map((operator)=>({
                    name: operator,
                    type: _graphqlscalars.DateTimeResolver
                }))
        ]
    },
    email: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.partial,
                ..._operators.default.contains
            ].map((operator)=>({
                    name: operator,
                    type: _graphqlscalars.EmailAddressResolver
                }))
        ]
    },
    json: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.partial,
                ..._operators.default.geojson
            ].map((operator)=>({
                    name: operator,
                    type: _graphqltypejson.GraphQLJSON
                }))
        ]
    },
    number: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.comparison
            ].map((operator)=>({
                    name: operator,
                    type: (field)=>{
                        return field?.name === 'id' ? _graphql.GraphQLInt : _graphql.GraphQLFloat;
                    }
                }))
        ]
    },
    point: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.comparison,
                ..._operators.default.geo
            ].map((operator)=>({
                    name: operator,
                    type: new _graphql.GraphQLList(_graphql.GraphQLFloat)
                })),
            ..._operators.default.geojson.map((operator)=>({
                    name: operator,
                    /**
         * @example:
         * within: {
         *  type: "Polygon",
         *  coordinates: [[
         *   [0.0, 0.0],
         *   [1.0, 1.0],
         *   [1.0, 0.0],
         *   [0.0, 0.0],
         *  ]],
         * }
         * @example
         * intersects: {
         *  type: "Point",
         *  coordinates: [ 0.5, 0.5 ]
         * }
         */ type: GeoJSONObject
                }))
        ]
    },
    radio: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.partial
            ].map((operator)=>({
                    name: operator,
                    type: (field, parentName)=>new _graphql.GraphQLEnumType({
                            name: `${(0, _combineParentName.default)(parentName, field.name)}_Input`,
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
                        })
                }))
        ]
    },
    relationship: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.contains
            ].map((operator)=>({
                    name: operator,
                    type: _graphqltypejson.GraphQLJSON
                }))
        ]
    },
    richText: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.partial
            ].map((operator)=>({
                    name: operator,
                    type: _graphqltypejson.GraphQLJSON
                }))
        ]
    },
    select: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.contains
            ].map((operator)=>({
                    name: operator,
                    type: (field, parentName)=>new _graphql.GraphQLEnumType({
                            name: `${(0, _combineParentName.default)(parentName, field.name)}_Input`,
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
                        })
                }))
        ]
    },
    text: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.partial,
                ..._operators.default.contains
            ].map((operator)=>({
                    name: operator,
                    type: _graphql.GraphQLString
                }))
        ]
    },
    textarea: {
        operators: [
            ...[
                ..._operators.default.equality,
                ..._operators.default.partial
            ].map((operator)=>({
                    name: operator,
                    type: _graphql.GraphQLString
                }))
        ]
    },
    upload: {
        operators: [
            ..._operators.default.equality.map((operator)=>({
                    name: operator,
                    type: _graphql.GraphQLString
                }))
        ]
    }
};
const listOperators = [
    'in',
    'not_in',
    'all'
];
const gqlTypeCache = {};
const withOperators = (field, parentName)=>{
    if (!defaults?.[field.type]) throw new Error(`Error: ${field.type} has no defaults configured.`);
    const name = `${(0, _combineParentName.default)(parentName, field.name)}_operator`;
    // Get the default operators for the field type which are hard-coded above
    const fieldOperators = [
        ...defaults[field.type].operators
    ];
    if (!('required' in field) || !field.required) {
        fieldOperators.push({
            name: 'exists',
            type: fieldOperators[0].type
        });
    }
    return new _graphql.GraphQLInputObjectType({
        name,
        fields: fieldOperators.reduce((objectTypeFields, operator)=>{
            // Get the type of the operator. It can be either static, or dynamic (=> a function)
            let gqlType = typeof operator.type === 'function' ? operator.type(field, parentName) : operator.type;
            // GraphQL does not allow types with duplicate names, so we use this cache to avoid that.
            // Without this, select and radio fields would have the same name, and GraphQL would throw an error
            // This usually only happens if a custom type is returned from the operator.type function
            if (typeof operator.type === 'function' && 'name' in gqlType) {
                if (gqlTypeCache[gqlType.name]) {
                    gqlType = gqlTypeCache[gqlType.name];
                } else {
                    gqlTypeCache[gqlType.name] = gqlType;
                }
            }
            if (listOperators.includes(operator.name)) {
                gqlType = new _graphql.GraphQLList(gqlType);
            } else if (operator.name === 'exists') {
                gqlType = _graphql.GraphQLBoolean;
            }
            return {
                ...objectTypeFields,
                [operator.name]: {
                    type: gqlType
                }
            };
        }, {})
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS93aXRoT3BlcmF0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgR3JhcGhRTFR5cGUgfSBmcm9tICdncmFwaHFsJ1xuXG5pbXBvcnQge1xuICBHcmFwaFFMQm9vbGVhbixcbiAgR3JhcGhRTEVudW1UeXBlLFxuICBHcmFwaFFMRmxvYXQsXG4gIEdyYXBoUUxJbnB1dE9iamVjdFR5cGUsXG4gIEdyYXBoUUxJbnQsXG4gIEdyYXBoUUxMaXN0LFxuICBHcmFwaFFMU3RyaW5nLFxufSBmcm9tICdncmFwaHFsJ1xuaW1wb3J0IHsgRGF0ZVRpbWVSZXNvbHZlciwgRW1haWxBZGRyZXNzUmVzb2x2ZXIgfSBmcm9tICdncmFwaHFsLXNjYWxhcnMnXG5pbXBvcnQgeyBHcmFwaFFMSlNPTiB9IGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJ1xuXG5pbXBvcnQgdHlwZSB7XG4gIEZpZWxkQWZmZWN0aW5nRGF0YSxcbiAgTnVtYmVyRmllbGQsXG4gIFJhZGlvRmllbGQsXG4gIFNlbGVjdEZpZWxkLFxufSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBSZWxhdGlvbnNoaXBGaWVsZCwgb3B0aW9uSXNPYmplY3QgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IGNvbWJpbmVQYXJlbnROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9jb21iaW5lUGFyZW50TmFtZSdcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJ1xuaW1wb3J0IG9wZXJhdG9ycyBmcm9tICcuL29wZXJhdG9ycydcblxudHlwZSBzdGF0aWNUeXBlcyA9XG4gIHwgJ2NoZWNrYm94J1xuICB8ICdjb2RlJ1xuICB8ICdkYXRlJ1xuICB8ICdlbWFpbCdcbiAgfCAnanNvbidcbiAgfCAnbnVtYmVyJ1xuICB8ICdwb2ludCdcbiAgfCAncmVsYXRpb25zaGlwJ1xuICB8ICdyaWNoVGV4dCdcbiAgfCAndGV4dCdcbiAgfCAndGV4dGFyZWEnXG4gIHwgJ3VwbG9hZCdcblxudHlwZSBkeW5hbWljVHlwZXMgPSAncmFkaW8nIHwgJ3NlbGVjdCdcblxuY29uc3QgR2VvSlNPTk9iamVjdCA9IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgbmFtZTogJ0dlb0pTT05PYmplY3QnLFxuICBmaWVsZHM6IHtcbiAgICBjb29yZGluYXRlczoge1xuICAgICAgdHlwZTogR3JhcGhRTEpTT04sXG4gICAgfSxcbiAgICB0eXBlOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgfSxcbn0pXG5cbnR5cGUgRGVmYXVsdHNUeXBlID0ge1xuICBba2V5IGluIHN0YXRpY1R5cGVzXToge1xuICAgIG9wZXJhdG9yczoge1xuICAgICAgbmFtZTogc3RyaW5nXG4gICAgICB0eXBlOiAoKGZpZWxkOiBGaWVsZEFmZmVjdGluZ0RhdGEsIHBhcmVudE5hbWU6IHN0cmluZykgPT4gR3JhcGhRTFR5cGUpIHwgR3JhcGhRTFR5cGVcbiAgICB9W11cbiAgfVxufSAmIHtcbiAgW2tleSBpbiBkeW5hbWljVHlwZXNdOiB7XG4gICAgb3BlcmF0b3JzOiB7XG4gICAgICBuYW1lOiBzdHJpbmdcbiAgICAgIHR5cGU6IChmaWVsZDogRmllbGRBZmZlY3RpbmdEYXRhLCBwYXJlbnROYW1lOiBzdHJpbmcpID0+IEdyYXBoUUxUeXBlXG4gICAgfVtdXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdHM6IERlZmF1bHRzVHlwZSA9IHtcbiAgY2hlY2tib3g6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLm9wZXJhdG9ycy5lcXVhbGl0eS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTEJvb2xlYW4sXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgY29kZToge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWxdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIGRhdGU6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5jb21wYXJpc29uLCAnbGlrZSddLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBEYXRlVGltZVJlc29sdmVyLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMucGFydGlhbCwgLi4ub3BlcmF0b3JzLmNvbnRhaW5zXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogRW1haWxBZGRyZXNzUmVzb2x2ZXIsXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAganNvbjoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWwsIC4uLm9wZXJhdG9ycy5nZW9qc29uXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTEpTT04sXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgbnVtYmVyOiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMuY29tcGFyaXNvbl0ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IChmaWVsZDogTnVtYmVyRmllbGQpOiBHcmFwaFFMVHlwZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkPy5uYW1lID09PSAnaWQnID8gR3JhcGhRTEludCA6IEdyYXBoUUxGbG9hdFxuICAgICAgICB9LFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIHBvaW50OiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMuY29tcGFyaXNvbiwgLi4ub3BlcmF0b3JzLmdlb10ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTGlzdChHcmFwaFFMRmxvYXQpLFxuICAgICAgfSkpLFxuICAgICAgLi4ub3BlcmF0b3JzLmdlb2pzb24ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZXhhbXBsZTpcbiAgICAgICAgICogd2l0aGluOiB7XG4gICAgICAgICAqICB0eXBlOiBcIlBvbHlnb25cIixcbiAgICAgICAgICogIGNvb3JkaW5hdGVzOiBbW1xuICAgICAgICAgKiAgIFswLjAsIDAuMF0sXG4gICAgICAgICAqICAgWzEuMCwgMS4wXSxcbiAgICAgICAgICogICBbMS4wLCAwLjBdLFxuICAgICAgICAgKiAgIFswLjAsIDAuMF0sXG4gICAgICAgICAqICBdXSxcbiAgICAgICAgICogfVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBpbnRlcnNlY3RzOiB7XG4gICAgICAgICAqICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAqICBjb29yZGluYXRlczogWyAwLjUsIDAuNSBdXG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IEdlb0pTT05PYmplY3QsXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgcmFkaW86IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5wYXJ0aWFsXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogKGZpZWxkOiBSYWRpb0ZpZWxkLCBwYXJlbnROYW1lKTogR3JhcGhRTFR5cGUgPT5cbiAgICAgICAgICBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IGAke2NvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIGZpZWxkLm5hbWUpfV9JbnB1dGAsXG4gICAgICAgICAgICB2YWx1ZXM6IGZpZWxkLm9wdGlvbnMucmVkdWNlKCh2YWx1ZXMsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICBpZiAob3B0aW9uSXNPYmplY3Qob3B0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgICAgICBbZm9ybWF0TmFtZShvcHRpb24udmFsdWUpXToge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICBbZm9ybWF0TmFtZShvcHRpb24pXToge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgfSksXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgcmVsYXRpb25zaGlwOiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMuY29udGFpbnNdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMSlNPTixcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICByaWNoVGV4dDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWxdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMSlNPTixcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBzZWxlY3Q6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5jb250YWluc10ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IChmaWVsZDogU2VsZWN0RmllbGQsIHBhcmVudE5hbWUpOiBHcmFwaFFMVHlwZSA9PlxuICAgICAgICAgIG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogYCR7Y29tYmluZVBhcmVudE5hbWUocGFyZW50TmFtZSwgZmllbGQubmFtZSl9X0lucHV0YCxcbiAgICAgICAgICAgIHZhbHVlczogZmllbGQub3B0aW9ucy5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25Jc09iamVjdChvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKG9wdGlvbi52YWx1ZSldOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKG9wdGlvbildOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICB9KSxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMucGFydGlhbCwgLi4ub3BlcmF0b3JzLmNvbnRhaW5zXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICB0ZXh0YXJlYToge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWxdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIHVwbG9hZDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4ub3BlcmF0b3JzLmVxdWFsaXR5Lm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIC8vIGFycmF5OiBuL2FcbiAgLy8gZ3JvdXA6IG4vYVxuICAvLyByb3c6IG4vYVxuICAvLyBjb2xsYXBzaWJsZTogbi9hXG4gIC8vIHRhYnM6IG4vYVxufVxuXG5jb25zdCBsaXN0T3BlcmF0b3JzID0gWydpbicsICdub3RfaW4nLCAnYWxsJ11cblxuY29uc3QgZ3FsVHlwZUNhY2hlOiBSZWNvcmQ8c3RyaW5nLCBHcmFwaFFMVHlwZT4gPSB7fVxuXG4vKipcbiAqIEluIEdyYXBoUUwsIHlvdSBjYW4gdXNlIFwid2hlcmVcIiBhcyBhbiBhcmd1bWVudCB0byBmaWx0ZXIgYSBjb2xsZWN0aW9uLiBFeGFtcGxlOlxuICogeyBQb3N0cyh3aGVyZTogeyB0aXRsZTogeyBlcXVhbHM6IFwiSGVsbG9cIiB9IH0pIHsgdGV4dCB9IH1cbiAqIFRoaXMgZnVuY3Rpb24gZGVmaW5lcyB0aGUgb3BlcmF0b3JzIGZvciBhIGZpZWxkJ3MgY29uZGl0aW9uIGluIHRoZSBcIndoZXJlXCIgYXJndW1lbnQgb2YgdGhlIGNvbGxlY3Rpb24gKGl0IHRodXMgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5IGZpZWxkKS5cbiAqIEZvciBleGFtcGxlLCBpbiB0aGUgZXhhbXBsZSBhYm92ZSwgaXQgd291bGQgY29udHJvbCB0aGF0XG4gKiAtIFwiZXF1YWxzXCIgaXMgYSB2YWxpZCBvcGVyYXRvciBmb3IgdGhlIFwidGl0bGVcIiBmaWVsZFxuICogLSB0aGUgYWNjZXB0ZWQgdHlwZSBvZiB0aGUgXCJlcXVhbHNcIiBhcmd1bWVudCBoYXMgdG8gYmUgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIGZpZWxkIHRoZSBmaWVsZCBmb3Igd2hpY2ggdGhlaXIgdmFsaWQgb3BlcmF0b3JzIGluc2lkZSBhIFwid2hlcmVcIiBhcmd1bWVudCBpcyBiZWluZyBkZWZpbmVkXG4gKiBAcGFyYW0gcGFyZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgcGFyZW50IGZpZWxkIChpZiBhbnkpXG4gKiBAcmV0dXJucyBhbGwgdGhlIG9wZXJhdG9ycyAoaW5jbHVkaW5nIHRoZWlyIHR5cGVzKSB3aGljaCBjYW4gYmUgdXNlZCBhcyBhIGNvbmRpdGlvbiBmb3IgYSBnaXZlbiBmaWVsZCBpbnNpZGUgYSB3aGVyZVxuICovXG5leHBvcnQgY29uc3Qgd2l0aE9wZXJhdG9ycyA9IChcbiAgZmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSxcbiAgcGFyZW50TmFtZTogc3RyaW5nLFxuKTogR3JhcGhRTElucHV0T2JqZWN0VHlwZSA9PiB7XG4gIGlmICghZGVmYXVsdHM/LltmaWVsZC50eXBlXSkgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtmaWVsZC50eXBlfSBoYXMgbm8gZGVmYXVsdHMgY29uZmlndXJlZC5gKVxuXG4gIGNvbnN0IG5hbWUgPSBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fb3BlcmF0b3JgXG5cbiAgLy8gR2V0IHRoZSBkZWZhdWx0IG9wZXJhdG9ycyBmb3IgdGhlIGZpZWxkIHR5cGUgd2hpY2ggYXJlIGhhcmQtY29kZWQgYWJvdmVcbiAgY29uc3QgZmllbGRPcGVyYXRvcnMgPSBbLi4uZGVmYXVsdHNbZmllbGQudHlwZV0ub3BlcmF0b3JzXVxuXG4gIGlmICghKCdyZXF1aXJlZCcgaW4gZmllbGQpIHx8ICFmaWVsZC5yZXF1aXJlZCkge1xuICAgIGZpZWxkT3BlcmF0b3JzLnB1c2goe1xuICAgICAgbmFtZTogJ2V4aXN0cycsXG4gICAgICB0eXBlOiBmaWVsZE9wZXJhdG9yc1swXS50eXBlLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbmV3IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUoe1xuICAgIG5hbWUsXG4gICAgZmllbGRzOiBmaWVsZE9wZXJhdG9ycy5yZWR1Y2UoKG9iamVjdFR5cGVGaWVsZHMsIG9wZXJhdG9yKSA9PiB7XG4gICAgICAvLyBHZXQgdGhlIHR5cGUgb2YgdGhlIG9wZXJhdG9yLiBJdCBjYW4gYmUgZWl0aGVyIHN0YXRpYywgb3IgZHluYW1pYyAoPT4gYSBmdW5jdGlvbilcbiAgICAgIGxldCBncWxUeXBlOiBHcmFwaFFMVHlwZSA9XG4gICAgICAgIHR5cGVvZiBvcGVyYXRvci50eXBlID09PSAnZnVuY3Rpb24nID8gb3BlcmF0b3IudHlwZShmaWVsZCwgcGFyZW50TmFtZSkgOiBvcGVyYXRvci50eXBlXG5cbiAgICAgIC8vIEdyYXBoUUwgZG9lcyBub3QgYWxsb3cgdHlwZXMgd2l0aCBkdXBsaWNhdGUgbmFtZXMsIHNvIHdlIHVzZSB0aGlzIGNhY2hlIHRvIGF2b2lkIHRoYXQuXG4gICAgICAvLyBXaXRob3V0IHRoaXMsIHNlbGVjdCBhbmQgcmFkaW8gZmllbGRzIHdvdWxkIGhhdmUgdGhlIHNhbWUgbmFtZSwgYW5kIEdyYXBoUUwgd291bGQgdGhyb3cgYW4gZXJyb3JcbiAgICAgIC8vIFRoaXMgdXN1YWxseSBvbmx5IGhhcHBlbnMgaWYgYSBjdXN0b20gdHlwZSBpcyByZXR1cm5lZCBmcm9tIHRoZSBvcGVyYXRvci50eXBlIGZ1bmN0aW9uXG4gICAgICBpZiAodHlwZW9mIG9wZXJhdG9yLnR5cGUgPT09ICdmdW5jdGlvbicgJiYgJ25hbWUnIGluIGdxbFR5cGUpIHtcbiAgICAgICAgaWYgKGdxbFR5cGVDYWNoZVtncWxUeXBlLm5hbWVdKSB7XG4gICAgICAgICAgZ3FsVHlwZSA9IGdxbFR5cGVDYWNoZVtncWxUeXBlLm5hbWVdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ3FsVHlwZUNhY2hlW2dxbFR5cGUubmFtZV0gPSBncWxUeXBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RPcGVyYXRvcnMuaW5jbHVkZXMob3BlcmF0b3IubmFtZSkpIHtcbiAgICAgICAgZ3FsVHlwZSA9IG5ldyBHcmFwaFFMTGlzdChncWxUeXBlKVxuICAgICAgfSBlbHNlIGlmIChvcGVyYXRvci5uYW1lID09PSAnZXhpc3RzJykge1xuICAgICAgICBncWxUeXBlID0gR3JhcGhRTEJvb2xlYW5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2JqZWN0VHlwZUZpZWxkcyxcbiAgICAgICAgW29wZXJhdG9yLm5hbWVdOiB7XG4gICAgICAgICAgdHlwZTogZ3FsVHlwZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LCB7fSksXG4gIH0pXG59XG4iXSwibmFtZXMiOlsid2l0aE9wZXJhdG9ycyIsIkdlb0pTT05PYmplY3QiLCJHcmFwaFFMSW5wdXRPYmplY3RUeXBlIiwibmFtZSIsImZpZWxkcyIsImNvb3JkaW5hdGVzIiwidHlwZSIsIkdyYXBoUUxKU09OIiwiR3JhcGhRTFN0cmluZyIsImRlZmF1bHRzIiwiY2hlY2tib3giLCJvcGVyYXRvcnMiLCJlcXVhbGl0eSIsIm1hcCIsIm9wZXJhdG9yIiwiR3JhcGhRTEJvb2xlYW4iLCJjb2RlIiwicGFydGlhbCIsImRhdGUiLCJjb21wYXJpc29uIiwiRGF0ZVRpbWVSZXNvbHZlciIsImVtYWlsIiwiY29udGFpbnMiLCJFbWFpbEFkZHJlc3NSZXNvbHZlciIsImpzb24iLCJnZW9qc29uIiwibnVtYmVyIiwiZmllbGQiLCJHcmFwaFFMSW50IiwiR3JhcGhRTEZsb2F0IiwicG9pbnQiLCJnZW8iLCJHcmFwaFFMTGlzdCIsInJhZGlvIiwicGFyZW50TmFtZSIsIkdyYXBoUUxFbnVtVHlwZSIsImNvbWJpbmVQYXJlbnROYW1lIiwidmFsdWVzIiwib3B0aW9ucyIsInJlZHVjZSIsIm9wdGlvbiIsIm9wdGlvbklzT2JqZWN0IiwiZm9ybWF0TmFtZSIsInZhbHVlIiwicmVsYXRpb25zaGlwIiwicmljaFRleHQiLCJzZWxlY3QiLCJ0ZXh0IiwidGV4dGFyZWEiLCJ1cGxvYWQiLCJsaXN0T3BlcmF0b3JzIiwiZ3FsVHlwZUNhY2hlIiwiRXJyb3IiLCJmaWVsZE9wZXJhdG9ycyIsInJlcXVpcmVkIiwicHVzaCIsIm9iamVjdFR5cGVGaWVsZHMiLCJncWxUeXBlIiwiaW5jbHVkZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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