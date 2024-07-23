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
const _graphqlplaygroundmiddlewareexpress = /*#__PURE__*/ _interop_require_default(require("graphql-playground-middleware-express"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initPlayground(ctx) {
    if (!ctx.config.graphQL.disable && !ctx.config.graphQL.disablePlaygroundInProduction && process.env.NODE_ENV === 'production' || process.env.NODE_ENV !== 'production') {
        ctx.router.get(ctx.config.routes.graphQLPlayground, (0, _graphqlplaygroundmiddlewareexpress.default)({
            endpoint: `${ctx.config.routes.api}${ctx.config.routes.graphQL}`,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore ISettings interface has all properties required for some reason
            settings: {
                'request.credentials': 'include'
            }
        }));
    }
}
const _default = initPlayground;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2luaXRQbGF5Z3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncmFwaFFMUGxheWdyb3VuZCBmcm9tICdncmFwaHFsLXBsYXlncm91bmQtbWlkZGxld2FyZS1leHByZXNzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJ1xuXG5mdW5jdGlvbiBpbml0UGxheWdyb3VuZChjdHg6IFBheWxvYWQpOiB2b2lkIHtcbiAgaWYgKFxuICAgICghY3R4LmNvbmZpZy5ncmFwaFFMLmRpc2FibGUgJiZcbiAgICAgICFjdHguY29uZmlnLmdyYXBoUUwuZGlzYWJsZVBsYXlncm91bmRJblByb2R1Y3Rpb24gJiZcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHx8XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICApIHtcbiAgICBjdHgucm91dGVyLmdldChcbiAgICAgIGN0eC5jb25maWcucm91dGVzLmdyYXBoUUxQbGF5Z3JvdW5kLFxuICAgICAgZ3JhcGhRTFBsYXlncm91bmQoe1xuICAgICAgICBlbmRwb2ludDogYCR7Y3R4LmNvbmZpZy5yb3V0ZXMuYXBpfSR7Y3R4LmNvbmZpZy5yb3V0ZXMuZ3JhcGhRTH1gLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgSVNldHRpbmdzIGludGVyZmFjZSBoYXMgYWxsIHByb3BlcnRpZXMgcmVxdWlyZWQgZm9yIHNvbWUgcmVhc29uXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgJ3JlcXVlc3QuY3JlZGVudGlhbHMnOiAnaW5jbHVkZScsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdFBsYXlncm91bmRcbiJdLCJuYW1lcyI6WyJpbml0UGxheWdyb3VuZCIsImN0eCIsImNvbmZpZyIsImdyYXBoUUwiLCJkaXNhYmxlIiwiZGlzYWJsZVBsYXlncm91bmRJblByb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJyb3V0ZXIiLCJnZXQiLCJyb3V0ZXMiLCJncmFwaFFMUGxheWdyb3VuZCIsImVuZHBvaW50IiwiYXBpIiwic2V0dGluZ3MiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF5QkE7OztlQUFBOzs7MkZBekI4Qjs7Ozs7O0FBSTlCLFNBQVNBLGVBQWVDLEdBQVk7SUFDbEMsSUFDRSxBQUFDLENBQUNBLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLElBQzFCLENBQUNILElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDRSw2QkFBNkIsSUFDakRDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLGdCQUMzQkYsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLEtBQUssY0FDekI7UUFDQVAsSUFBSVEsTUFBTSxDQUFDQyxHQUFHLENBQ1pULElBQUlDLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDQyxpQkFBaUIsRUFDbkNBLElBQUFBLDJDQUFpQixFQUFDO1lBQ2hCQyxVQUFVLENBQUMsRUFBRVosSUFBSUMsTUFBTSxDQUFDUyxNQUFNLENBQUNHLEdBQUcsQ0FBQyxFQUFFYixJQUFJQyxNQUFNLENBQUNTLE1BQU0sQ0FBQ1IsT0FBTyxDQUFDLENBQUM7WUFDaEUsNkRBQTZEO1lBQzdELDZFQUE2RTtZQUM3RVksVUFBVTtnQkFDUix1QkFBdUI7WUFDekI7UUFDRjtJQUVKO0FBQ0Y7TUFFQSxXQUFlZiJ9