/* eslint-disable @typescript-eslint/no-use-before-define */ /* eslint-disable no-use-before-define */ "use strict";
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
const _types = require("../../fields/config/types");
const _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
const _fieldToWhereInputSchemaMap = /*#__PURE__*/ _interop_require_default(require("./fieldToWhereInputSchemaMap"));
const _withOperators = require("./withOperators");
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/flattenTopLevelFields"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/** This does as the function name suggests. It builds a where GraphQL input type
 * for all the fields which are passed to the function.
 * Each field has different operators which may be valid for a where input type.
 * For example, a text field may have a "contains" operator, but a number field
 * may not.
 *
 * buildWhereInputType is similar to buildObjectType and operates
 * on a field basis with a few distinct differences.
 *
 * 1. Everything needs to be a GraphQLInputObjectType or scalar / enum
 * 2. Relationships, groups, repeaters and flex content are not
 *    directly searchable. Instead, we need to build a chained pathname
 *    using dot notation so MongoDB can properly search nested paths.
 */ const buildWhereInputType = ({ name, fields, parentName, payload })=>{
    // This is the function that builds nested paths for all
    // field types with nested paths.
    const idField = (0, _flattenTopLevelFields.default)(fields).find((field)=>(0, _types.fieldAffectsData)(field) && field.name === 'id');
    const fieldTypes = fields.reduce((schema, field)=>{
        if (!(0, _types.fieldIsPresentationalOnly)(field) && !field.hidden) {
            const getFieldSchema = (0, _fieldToWhereInputSchemaMap.default)({
                parentName,
                payload
            })[field.type];
            if (getFieldSchema) {
                const fieldSchema = getFieldSchema(field);
                if ((0, _types.fieldHasSubFields)(field) || field.type === 'tabs') {
                    return {
                        ...schema,
                        ...fieldSchema.reduce((subFields, subField)=>({
                                ...subFields,
                                [(0, _formatName.default)(subField.key)]: subField.type
                            }), {})
                    };
                }
                return {
                    ...schema,
                    [(0, _formatName.default)(field.name)]: fieldSchema
                };
            }
        }
        return schema;
    }, {});
    if (!idField) {
        fieldTypes.id = {
            type: (0, _withOperators.withOperators)({
                name: 'id',
                type: 'text'
            }, parentName)
        };
    }
    const fieldName = (0, _formatName.default)(name);
    const recursiveFields = {
        AND: {
            type: new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
                name: `${fieldName}_where_and`,
                fields: ()=>({
                        ...fieldTypes,
                        ...recursiveFields
                    })
            }))
        },
        OR: {
            type: new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
                name: `${fieldName}_where_or`,
                fields: ()=>({
                        ...fieldTypes,
                        ...recursiveFields
                    })
            }))
        }
    };
    return new _graphql.GraphQLInputObjectType({
        name: `${fieldName}_where`,
        fields: {
            ...fieldTypes,
            ...recursiveFields
        }
    });
};
const _default = buildWhereInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZFdoZXJlSW5wdXRUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCB7IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUsIEdyYXBoUUxMaXN0IH0gZnJvbSAnZ3JhcGhxbCdcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4nXG5pbXBvcnQgdHlwZSB7IEZpZWxkLCBGaWVsZEFmZmVjdGluZ0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQge1xuICBmaWVsZEFmZmVjdHNEYXRhLFxuICBmaWVsZEhhc1N1YkZpZWxkcyxcbiAgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSxcbn0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJ1xuaW1wb3J0IGZpZWxkVG9TY2hlbWFNYXAgZnJvbSAnLi9maWVsZFRvV2hlcmVJbnB1dFNjaGVtYU1hcCdcbmltcG9ydCB7IHdpdGhPcGVyYXRvcnMgfSBmcm9tICcuL3dpdGhPcGVyYXRvcnMnXG5pbXBvcnQgZmxhdHRlbkZpZWxkcyBmcm9tICcuLi8uLi91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGZpZWxkczogRmllbGRbXVxuICBuYW1lOiBzdHJpbmdcbiAgcGFyZW50TmFtZTogc3RyaW5nXG4gIHBheWxvYWQ6IFBheWxvYWRcbn1cblxuLyoqIFRoaXMgZG9lcyBhcyB0aGUgZnVuY3Rpb24gbmFtZSBzdWdnZXN0cy4gSXQgYnVpbGRzIGEgd2hlcmUgR3JhcGhRTCBpbnB1dCB0eXBlXG4gKiBmb3IgYWxsIHRoZSBmaWVsZHMgd2hpY2ggYXJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG4gKiBFYWNoIGZpZWxkIGhhcyBkaWZmZXJlbnQgb3BlcmF0b3JzIHdoaWNoIG1heSBiZSB2YWxpZCBmb3IgYSB3aGVyZSBpbnB1dCB0eXBlLlxuICogRm9yIGV4YW1wbGUsIGEgdGV4dCBmaWVsZCBtYXkgaGF2ZSBhIFwiY29udGFpbnNcIiBvcGVyYXRvciwgYnV0IGEgbnVtYmVyIGZpZWxkXG4gKiBtYXkgbm90LlxuICpcbiAqIGJ1aWxkV2hlcmVJbnB1dFR5cGUgaXMgc2ltaWxhciB0byBidWlsZE9iamVjdFR5cGUgYW5kIG9wZXJhdGVzXG4gKiBvbiBhIGZpZWxkIGJhc2lzIHdpdGggYSBmZXcgZGlzdGluY3QgZGlmZmVyZW5jZXMuXG4gKlxuICogMS4gRXZlcnl0aGluZyBuZWVkcyB0byBiZSBhIEdyYXBoUUxJbnB1dE9iamVjdFR5cGUgb3Igc2NhbGFyIC8gZW51bVxuICogMi4gUmVsYXRpb25zaGlwcywgZ3JvdXBzLCByZXBlYXRlcnMgYW5kIGZsZXggY29udGVudCBhcmUgbm90XG4gKiAgICBkaXJlY3RseSBzZWFyY2hhYmxlLiBJbnN0ZWFkLCB3ZSBuZWVkIHRvIGJ1aWxkIGEgY2hhaW5lZCBwYXRobmFtZVxuICogICAgdXNpbmcgZG90IG5vdGF0aW9uIHNvIE1vbmdvREIgY2FuIHByb3Blcmx5IHNlYXJjaCBuZXN0ZWQgcGF0aHMuXG4gKi9cbmNvbnN0IGJ1aWxkV2hlcmVJbnB1dFR5cGUgPSAoe1xuICBuYW1lLFxuICBmaWVsZHMsXG4gIHBhcmVudE5hbWUsXG4gIHBheWxvYWQsXG59OiBBcmdzKTogR3JhcGhRTElucHV0T2JqZWN0VHlwZSA9PiB7XG4gIC8vIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIG5lc3RlZCBwYXRocyBmb3IgYWxsXG4gIC8vIGZpZWxkIHR5cGVzIHdpdGggbmVzdGVkIHBhdGhzLlxuXG4gIGNvbnN0IGlkRmllbGQgPSBmbGF0dGVuRmllbGRzKGZpZWxkcykuZmluZChcbiAgICAoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdpZCcsXG4gIClcblxuICBjb25zdCBmaWVsZFR5cGVzID0gZmllbGRzLnJlZHVjZSgoc2NoZW1hLCBmaWVsZCkgPT4ge1xuICAgIGlmICghZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seShmaWVsZCkgJiYgIWZpZWxkLmhpZGRlbikge1xuICAgICAgY29uc3QgZ2V0RmllbGRTY2hlbWEgPSBmaWVsZFRvU2NoZW1hTWFwKHtcbiAgICAgICAgcGFyZW50TmFtZSxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgIH0pW2ZpZWxkLnR5cGVdXG5cbiAgICAgIGlmIChnZXRGaWVsZFNjaGVtYSkge1xuICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IGdldEZpZWxkU2NoZW1hKGZpZWxkKVxuXG4gICAgICAgIGlmIChmaWVsZEhhc1N1YkZpZWxkcyhmaWVsZCkgfHwgZmllbGQudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNjaGVtYSxcbiAgICAgICAgICAgIC4uLmZpZWxkU2NoZW1hLnJlZHVjZShcbiAgICAgICAgICAgICAgKHN1YkZpZWxkcywgc3ViRmllbGQpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uc3ViRmllbGRzLFxuICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKHN1YkZpZWxkLmtleSldOiBzdWJGaWVsZC50eXBlLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2NoZW1hLFxuICAgICAgICAgIFtmb3JtYXROYW1lKGZpZWxkLm5hbWUpXTogZmllbGRTY2hlbWEsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH0sIHt9KVxuXG4gIGlmICghaWRGaWVsZCkge1xuICAgIGZpZWxkVHlwZXMuaWQgPSB7XG4gICAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKHsgbmFtZTogJ2lkJywgdHlwZTogJ3RleHQnIH0gYXMgRmllbGRBZmZlY3RpbmdEYXRhLCBwYXJlbnROYW1lKSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBmaWVsZE5hbWUgPSBmb3JtYXROYW1lKG5hbWUpXG5cbiAgY29uc3QgcmVjdXJzaXZlRmllbGRzID0ge1xuICAgIEFORDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxMaXN0KFxuICAgICAgICBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gICAgICAgICAgbmFtZTogYCR7ZmllbGROYW1lfV93aGVyZV9hbmRgLFxuICAgICAgICAgIGZpZWxkczogKCkgPT4gKHtcbiAgICAgICAgICAgIC4uLmZpZWxkVHlwZXMsXG4gICAgICAgICAgICAuLi5yZWN1cnNpdmVGaWVsZHMsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICB9LFxuICAgIE9SOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoXG4gICAgICAgIG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtmaWVsZE5hbWV9X3doZXJlX29yYCxcbiAgICAgICAgICBmaWVsZHM6ICgpID0+ICh7XG4gICAgICAgICAgICAuLi5maWVsZFR5cGVzLFxuICAgICAgICAgICAgLi4ucmVjdXJzaXZlRmllbGRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgfSxcbiAgfVxuXG4gIHJldHVybiBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gICAgbmFtZTogYCR7ZmllbGROYW1lfV93aGVyZWAsXG4gICAgZmllbGRzOiB7XG4gICAgICAuLi5maWVsZFR5cGVzLFxuICAgICAgLi4ucmVjdXJzaXZlRmllbGRzLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkV2hlcmVJbnB1dFR5cGVcbiJdLCJuYW1lcyI6WyJidWlsZFdoZXJlSW5wdXRUeXBlIiwibmFtZSIsImZpZWxkcyIsInBhcmVudE5hbWUiLCJwYXlsb2FkIiwiaWRGaWVsZCIsImZsYXR0ZW5GaWVsZHMiLCJmaW5kIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwiZmllbGRUeXBlcyIsInJlZHVjZSIsInNjaGVtYSIsImZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkiLCJoaWRkZW4iLCJnZXRGaWVsZFNjaGVtYSIsImZpZWxkVG9TY2hlbWFNYXAiLCJ0eXBlIiwiZmllbGRTY2hlbWEiLCJmaWVsZEhhc1N1YkZpZWxkcyIsInN1YkZpZWxkcyIsInN1YkZpZWxkIiwiZm9ybWF0TmFtZSIsImtleSIsImlkIiwid2l0aE9wZXJhdG9ycyIsImZpZWxkTmFtZSIsInJlY3Vyc2l2ZUZpZWxkcyIsIkFORCIsIkdyYXBoUUxMaXN0IiwiR3JhcGhRTElucHV0T2JqZWN0VHlwZSIsIk9SIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRCxHQUMxRCx1Q0FBdUM7Ozs7K0JBNkh2Qzs7O2VBQUE7Ozt5QkE1SG9EO3VCQVM3QzttRUFDZ0I7bUZBQ007K0JBQ0M7OEVBQ0o7Ozs7OztBQVMxQjs7Ozs7Ozs7Ozs7OztDQWFDLEdBQ0QsTUFBTUEsc0JBQXNCLENBQUMsRUFDM0JDLElBQUksRUFDSkMsTUFBTSxFQUNOQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDRjtJQUNMLHdEQUF3RDtJQUN4RCxpQ0FBaUM7SUFFakMsTUFBTUMsVUFBVUMsSUFBQUEsOEJBQWEsRUFBQ0osUUFBUUssSUFBSSxDQUN4QyxDQUFDQyxRQUFVQyxJQUFBQSx1QkFBZ0IsRUFBQ0QsVUFBVUEsTUFBTVAsSUFBSSxLQUFLO0lBR3ZELE1BQU1TLGFBQWFSLE9BQU9TLE1BQU0sQ0FBQyxDQUFDQyxRQUFRSjtRQUN4QyxJQUFJLENBQUNLLElBQUFBLGdDQUF5QixFQUFDTCxVQUFVLENBQUNBLE1BQU1NLE1BQU0sRUFBRTtZQUN0RCxNQUFNQyxpQkFBaUJDLElBQUFBLG1DQUFnQixFQUFDO2dCQUN0Q2I7Z0JBQ0FDO1lBQ0YsRUFBRSxDQUFDSSxNQUFNUyxJQUFJLENBQUM7WUFFZCxJQUFJRixnQkFBZ0I7Z0JBQ2xCLE1BQU1HLGNBQWNILGVBQWVQO2dCQUVuQyxJQUFJVyxJQUFBQSx3QkFBaUIsRUFBQ1gsVUFBVUEsTUFBTVMsSUFBSSxLQUFLLFFBQVE7b0JBQ3JELE9BQU87d0JBQ0wsR0FBR0wsTUFBTTt3QkFDVCxHQUFHTSxZQUFZUCxNQUFNLENBQ25CLENBQUNTLFdBQVdDLFdBQWMsQ0FBQTtnQ0FDeEIsR0FBR0QsU0FBUztnQ0FDWixDQUFDRSxJQUFBQSxtQkFBVSxFQUFDRCxTQUFTRSxHQUFHLEVBQUUsRUFBRUYsU0FBU0osSUFBSTs0QkFDM0MsQ0FBQSxHQUNBLENBQUMsRUFDRjtvQkFDSDtnQkFDRjtnQkFFQSxPQUFPO29CQUNMLEdBQUdMLE1BQU07b0JBQ1QsQ0FBQ1UsSUFBQUEsbUJBQVUsRUFBQ2QsTUFBTVAsSUFBSSxFQUFFLEVBQUVpQjtnQkFDNUI7WUFDRjtRQUNGO1FBRUEsT0FBT047SUFDVCxHQUFHLENBQUM7SUFFSixJQUFJLENBQUNQLFNBQVM7UUFDWkssV0FBV2MsRUFBRSxHQUFHO1lBQ2RQLE1BQU1RLElBQUFBLDRCQUFhLEVBQUM7Z0JBQUV4QixNQUFNO2dCQUFNZ0IsTUFBTTtZQUFPLEdBQXlCZDtRQUMxRTtJQUNGO0lBRUEsTUFBTXVCLFlBQVlKLElBQUFBLG1CQUFVLEVBQUNyQjtJQUU3QixNQUFNMEIsa0JBQWtCO1FBQ3RCQyxLQUFLO1lBQ0hYLE1BQU0sSUFBSVksb0JBQVcsQ0FDbkIsSUFBSUMsK0JBQXNCLENBQUM7Z0JBQ3pCN0IsTUFBTSxDQUFDLEVBQUV5QixVQUFVLFVBQVUsQ0FBQztnQkFDOUJ4QixRQUFRLElBQU8sQ0FBQTt3QkFDYixHQUFHUSxVQUFVO3dCQUNiLEdBQUdpQixlQUFlO29CQUNwQixDQUFBO1lBQ0Y7UUFFSjtRQUNBSSxJQUFJO1lBQ0ZkLE1BQU0sSUFBSVksb0JBQVcsQ0FDbkIsSUFBSUMsK0JBQXNCLENBQUM7Z0JBQ3pCN0IsTUFBTSxDQUFDLEVBQUV5QixVQUFVLFNBQVMsQ0FBQztnQkFDN0J4QixRQUFRLElBQU8sQ0FBQTt3QkFDYixHQUFHUSxVQUFVO3dCQUNiLEdBQUdpQixlQUFlO29CQUNwQixDQUFBO1lBQ0Y7UUFFSjtJQUNGO0lBRUEsT0FBTyxJQUFJRywrQkFBc0IsQ0FBQztRQUNoQzdCLE1BQU0sQ0FBQyxFQUFFeUIsVUFBVSxNQUFNLENBQUM7UUFDMUJ4QixRQUFRO1lBQ04sR0FBR1EsVUFBVTtZQUNiLEdBQUdpQixlQUFlO1FBQ3BCO0lBQ0Y7QUFDRjtNQUVBLFdBQWUzQiJ9