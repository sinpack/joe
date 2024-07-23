/* eslint-disable no-nested-ternary */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "generateGraphQLSchema", {
    enumerable: true,
    get: function() {
        return generateGraphQLSchema;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _graphql = require("graphql");
const _ = /*#__PURE__*/ _interop_require_default(require(".."));
const _load = /*#__PURE__*/ _interop_require_default(require("../config/load"));
const _logger = /*#__PURE__*/ _interop_require_default(require("../utilities/logger"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function generateGraphQLSchema() {
    const logger = (0, _logger.default)();
    const config = await (0, _load.default)();
    config.db = null;
    await _.default.init({
        disableDBConnect: true,
        disableOnInit: true,
        local: true,
        secret: '--unused--'
    });
    logger.info('Compiling GraphQL schema...');
    _fs.default.writeFileSync(config.graphQL.schemaOutputFile, (0, _graphql.printSchema)(_.default.schema));
    logger.info(`GraphQL written to ${config.graphQL.schemaOutputFile}`);
}
// when generateGraphQLSchema.js is launched directly
if (module.id === require.main.id) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    generateGraphQLSchema();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vZ2VuZXJhdGVHcmFwaFFMU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgeyBwcmludFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnXG5cbmltcG9ydCBwYXlsb2FkIGZyb20gJy4uJ1xuaW1wb3J0IGxvYWRDb25maWcgZnJvbSAnLi4vY29uZmlnL2xvYWQnXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWxpdGllcy9sb2dnZXInXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUdyYXBoUUxTY2hlbWEoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGxvZ2dlciA9IExvZ2dlcigpXG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRDb25maWcoKVxuXG4gIGNvbmZpZy5kYiA9IG51bGxcblxuICBhd2FpdCBwYXlsb2FkLmluaXQoe1xuICAgIGRpc2FibGVEQkNvbm5lY3Q6IHRydWUsXG4gICAgZGlzYWJsZU9uSW5pdDogdHJ1ZSxcbiAgICBsb2NhbDogdHJ1ZSxcbiAgICBzZWNyZXQ6ICctLXVudXNlZC0tJyxcbiAgfSlcblxuICBsb2dnZXIuaW5mbygnQ29tcGlsaW5nIEdyYXBoUUwgc2NoZW1hLi4uJylcbiAgZnMud3JpdGVGaWxlU3luYyhjb25maWcuZ3JhcGhRTC5zY2hlbWFPdXRwdXRGaWxlLCBwcmludFNjaGVtYShwYXlsb2FkLnNjaGVtYSkpXG4gIGxvZ2dlci5pbmZvKGBHcmFwaFFMIHdyaXR0ZW4gdG8gJHtjb25maWcuZ3JhcGhRTC5zY2hlbWFPdXRwdXRGaWxlfWApXG59XG5cbi8vIHdoZW4gZ2VuZXJhdGVHcmFwaFFMU2NoZW1hLmpzIGlzIGxhdW5jaGVkIGRpcmVjdGx5XG5pZiAobW9kdWxlLmlkID09PSByZXF1aXJlLm1haW4uaWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICBnZW5lcmF0ZUdyYXBoUUxTY2hlbWEoKVxufVxuIl0sIm5hbWVzIjpbImdlbmVyYXRlR3JhcGhRTFNjaGVtYSIsImxvZ2dlciIsIkxvZ2dlciIsImNvbmZpZyIsImxvYWRDb25maWciLCJkYiIsInBheWxvYWQiLCJpbml0IiwiZGlzYWJsZURCQ29ubmVjdCIsImRpc2FibGVPbkluaXQiLCJsb2NhbCIsInNlY3JldCIsImluZm8iLCJmcyIsIndyaXRlRmlsZVN5bmMiLCJncmFwaFFMIiwic2NoZW1hT3V0cHV0RmlsZSIsInByaW50U2NoZW1hIiwic2NoZW1hIiwibW9kdWxlIiwiaWQiLCJyZXF1aXJlIiwibWFpbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQVFkQTs7O2VBQUFBOzs7MkRBUFA7eUJBQ2E7eURBRVI7NkRBQ0c7K0RBQ0o7Ozs7OztBQUVaLGVBQWVBO0lBQ3BCLE1BQU1DLFNBQVNDLElBQUFBLGVBQU07SUFDckIsTUFBTUMsU0FBUyxNQUFNQyxJQUFBQSxhQUFVO0lBRS9CRCxPQUFPRSxFQUFFLEdBQUc7SUFFWixNQUFNQyxTQUFPLENBQUNDLElBQUksQ0FBQztRQUNqQkMsa0JBQWtCO1FBQ2xCQyxlQUFlO1FBQ2ZDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBRUFWLE9BQU9XLElBQUksQ0FBQztJQUNaQyxXQUFFLENBQUNDLGFBQWEsQ0FBQ1gsT0FBT1ksT0FBTyxDQUFDQyxnQkFBZ0IsRUFBRUMsSUFBQUEsb0JBQVcsRUFBQ1gsU0FBTyxDQUFDWSxNQUFNO0lBQzVFakIsT0FBT1csSUFBSSxDQUFDLENBQUMsbUJBQW1CLEVBQUVULE9BQU9ZLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztBQUNyRTtBQUVBLHFEQUFxRDtBQUNyRCxJQUFJRyxPQUFPQyxFQUFFLEtBQUtDLFFBQVFDLElBQUksQ0FBQ0YsRUFBRSxFQUFFO0lBQ2pDLG1FQUFtRTtJQUNuRXBCO0FBQ0YifQ==