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
const _express = require("graphql-http/lib/use/express");
const _errorHandler = /*#__PURE__*/ _interop_require_default(require("./errorHandler"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const graphQLHandler = (req, res)=>{
    const { payload } = req;
    const afterErrorHook = typeof payload.config.hooks.afterError === 'function' ? payload.config.hooks.afterError : null;
    return (0, _express.createHandler)({
        context: {
            req,
            res
        },
        onOperation: async (request, args, result)=>{
            const response = typeof payload.extensions === 'function' ? await payload.extensions({
                args,
                req: request,
                result
            }) : result;
            if (response.errors) {
                const errors = await Promise.all(result.errors.map((error)=>{
                    return (0, _errorHandler.default)(payload, error, payload.config.debug, afterErrorHook);
                }));
                // errors type should be FormattedGraphQLError[] but onOperation has a return type of ExecutionResult instead of FormattedExecutionResult
                return {
                    ...response,
                    errors
                };
            }
            return response;
        },
        schema: payload.schema,
        validationRules: (request, args, defaultRules)=>defaultRules.concat(payload.validationRules(args))
    });
};
const _default = graphQLHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2dyYXBoUUxIYW5kbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMRXJyb3IgfSBmcm9tICdncmFwaHFsJ1xuXG5pbXBvcnQgeyBjcmVhdGVIYW5kbGVyIH0gZnJvbSAnZ3JhcGhxbC1odHRwL2xpYi91c2UvZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnXG5cbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi9lcnJvckhhbmRsZXInXG5cbmNvbnN0IGdyYXBoUUxIYW5kbGVyID0gKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBwYXlsb2FkIH0gPSByZXFcblxuICBjb25zdCBhZnRlckVycm9ySG9vayA9XG4gICAgdHlwZW9mIHBheWxvYWQuY29uZmlnLmhvb2tzLmFmdGVyRXJyb3IgPT09ICdmdW5jdGlvbicgPyBwYXlsb2FkLmNvbmZpZy5ob29rcy5hZnRlckVycm9yIDogbnVsbFxuXG4gIHJldHVybiBjcmVhdGVIYW5kbGVyKHtcbiAgICBjb250ZXh0OiB7IHJlcSwgcmVzIH0sXG4gICAgb25PcGVyYXRpb246IGFzeW5jIChyZXF1ZXN0LCBhcmdzLCByZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID1cbiAgICAgICAgdHlwZW9mIHBheWxvYWQuZXh0ZW5zaW9ucyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gYXdhaXQgcGF5bG9hZC5leHRlbnNpb25zKHtcbiAgICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgICAgcmVxOiByZXF1ZXN0LFxuICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogcmVzdWx0XG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IChhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICByZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvckhhbmRsZXIocGF5bG9hZCwgZXJyb3IsIHBheWxvYWQuY29uZmlnLmRlYnVnLCBhZnRlckVycm9ySG9vaylcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSkgYXMgR3JhcGhRTEVycm9yW11cbiAgICAgICAgLy8gZXJyb3JzIHR5cGUgc2hvdWxkIGJlIEZvcm1hdHRlZEdyYXBoUUxFcnJvcltdIGJ1dCBvbk9wZXJhdGlvbiBoYXMgYSByZXR1cm4gdHlwZSBvZiBFeGVjdXRpb25SZXN1bHQgaW5zdGVhZCBvZiBGb3JtYXR0ZWRFeGVjdXRpb25SZXN1bHRcbiAgICAgICAgcmV0dXJuIHsgLi4ucmVzcG9uc2UsIGVycm9ycyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9LFxuICAgIHNjaGVtYTogcGF5bG9hZC5zY2hlbWEsXG4gICAgdmFsaWRhdGlvblJ1bGVzOiAocmVxdWVzdCwgYXJncywgZGVmYXVsdFJ1bGVzKSA9PlxuICAgICAgZGVmYXVsdFJ1bGVzLmNvbmNhdChwYXlsb2FkLnZhbGlkYXRpb25SdWxlcyhhcmdzKSksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBoUUxIYW5kbGVyXG4iXSwibmFtZXMiOlsiZ3JhcGhRTEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwYXlsb2FkIiwiYWZ0ZXJFcnJvckhvb2siLCJjb25maWciLCJob29rcyIsImFmdGVyRXJyb3IiLCJjcmVhdGVIYW5kbGVyIiwiY29udGV4dCIsIm9uT3BlcmF0aW9uIiwicmVxdWVzdCIsImFyZ3MiLCJyZXN1bHQiLCJyZXNwb25zZSIsImV4dGVuc2lvbnMiLCJlcnJvcnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZXJyb3IiLCJlcnJvckhhbmRsZXIiLCJkZWJ1ZyIsInNjaGVtYSIsInZhbGlkYXRpb25SdWxlcyIsImRlZmF1bHRSdWxlcyIsImNvbmNhdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEyQ0E7OztlQUFBOzs7eUJBeEM4QjtxRUFJTDs7Ozs7O0FBRXpCLE1BQU1BLGlCQUFpQixDQUFDQyxLQUFxQkM7SUFDM0MsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0Y7SUFFcEIsTUFBTUcsaUJBQ0osT0FBT0QsUUFBUUUsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFVBQVUsS0FBSyxhQUFhSixRQUFRRSxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHO0lBRTVGLE9BQU9DLElBQUFBLHNCQUFhLEVBQUM7UUFDbkJDLFNBQVM7WUFBRVI7WUFBS0M7UUFBSTtRQUNwQlEsYUFBYSxPQUFPQyxTQUFTQyxNQUFNQztZQUNqQyxNQUFNQyxXQUNKLE9BQU9YLFFBQVFZLFVBQVUsS0FBSyxhQUMxQixNQUFNWixRQUFRWSxVQUFVLENBQUM7Z0JBQ3ZCSDtnQkFDQVgsS0FBS1U7Z0JBQ0xFO1lBQ0YsS0FDQUE7WUFDTixJQUFJQyxTQUFTRSxNQUFNLEVBQUU7Z0JBQ25CLE1BQU1BLFNBQVUsTUFBTUMsUUFBUUMsR0FBRyxDQUMvQkwsT0FBT0csTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0M7b0JBQ2pCLE9BQU9DLElBQUFBLHFCQUFZLEVBQUNsQixTQUFTaUIsT0FBT2pCLFFBQVFFLE1BQU0sQ0FBQ2lCLEtBQUssRUFBRWxCO2dCQUM1RDtnQkFFRix5SUFBeUk7Z0JBQ3pJLE9BQU87b0JBQUUsR0FBR1UsUUFBUTtvQkFBRUU7Z0JBQU87WUFDL0I7WUFDQSxPQUFPRjtRQUNUO1FBQ0FTLFFBQVFwQixRQUFRb0IsTUFBTTtRQUN0QkMsaUJBQWlCLENBQUNiLFNBQVNDLE1BQU1hLGVBQy9CQSxhQUFhQyxNQUFNLENBQUN2QixRQUFRcUIsZUFBZSxDQUFDWjtJQUNoRDtBQUNGO01BRUEsV0FBZVoifQ==