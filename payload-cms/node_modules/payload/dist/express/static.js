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
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _passport = /*#__PURE__*/ _interop_require_default(require("passport"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _getExecuteStaticAccess = /*#__PURE__*/ _interop_require_default(require("../auth/getExecuteStaticAccess"));
const _authenticate = /*#__PURE__*/ _interop_require_default(require("./middleware/authenticate"));
const _corsHeaders = /*#__PURE__*/ _interop_require_default(require("./middleware/corsHeaders"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initStatic(ctx) {
    Object.entries(ctx.collections).forEach(([_, collection])=>{
        const { config } = collection;
        if (config.upload && config.upload.staticURL.startsWith('/')) {
            const router = _express.default.Router();
            router.use((0, _corsHeaders.default)(ctx.config));
            router.use(_passport.default.initialize());
            router.use((0, _authenticate.default)(ctx.config));
            router.use((0, _getExecuteStaticAccess.default)(config));
            if (Array.isArray(config.upload?.handlers)) {
                router.get('/:filename*', config.upload.handlers);
            }
            const staticPath = _path.default.resolve(ctx.config.paths.configDir, config.upload.staticDir);
            router.use(_express.default.static(staticPath, config.upload.staticOptions || {}));
            ctx.express.use(`${config.upload.staticURL}`, router);
        }
    });
}
const _default = initStatic;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHByZXNzL3N0YXRpYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vcGF5bG9hZCdcblxuaW1wb3J0IGdldEV4ZWN1dGVTdGF0aWNBY2Nlc3MgZnJvbSAnLi4vYXV0aC9nZXRFeGVjdXRlU3RhdGljQWNjZXNzJ1xuaW1wb3J0IGF1dGhlbnRpY2F0ZSBmcm9tICcuL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJ1xuaW1wb3J0IGNvcnNIZWFkZXJzIGZyb20gJy4vbWlkZGxld2FyZS9jb3JzSGVhZGVycydcblxuZnVuY3Rpb24gaW5pdFN0YXRpYyhjdHg6IFBheWxvYWQpOiB2b2lkIHtcbiAgT2JqZWN0LmVudHJpZXMoY3R4LmNvbGxlY3Rpb25zKS5mb3JFYWNoKChbXywgY29sbGVjdGlvbl0pID0+IHtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gY29sbGVjdGlvblxuXG4gICAgaWYgKGNvbmZpZy51cGxvYWQgJiYgY29uZmlnLnVwbG9hZC5zdGF0aWNVUkwuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbiAgICAgIHJvdXRlci51c2UoY29yc0hlYWRlcnMoY3R4LmNvbmZpZykpXG4gICAgICByb3V0ZXIudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSlcbiAgICAgIHJvdXRlci51c2UoYXV0aGVudGljYXRlKGN0eC5jb25maWcpKVxuXG4gICAgICByb3V0ZXIudXNlKGdldEV4ZWN1dGVTdGF0aWNBY2Nlc3MoY29uZmlnKSlcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLnVwbG9hZD8uaGFuZGxlcnMpKSB7XG4gICAgICAgIHJvdXRlci5nZXQoJy86ZmlsZW5hbWUqJywgY29uZmlnLnVwbG9hZC5oYW5kbGVycylcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhdGljUGF0aCA9IHBhdGgucmVzb2x2ZShjdHguY29uZmlnLnBhdGhzLmNvbmZpZ0RpciwgY29uZmlnLnVwbG9hZC5zdGF0aWNEaXIpXG5cbiAgICAgIHJvdXRlci51c2UoZXhwcmVzcy5zdGF0aWMoc3RhdGljUGF0aCwgY29uZmlnLnVwbG9hZC5zdGF0aWNPcHRpb25zIHx8IHt9KSlcblxuICAgICAgY3R4LmV4cHJlc3MudXNlKGAke2NvbmZpZy51cGxvYWQuc3RhdGljVVJMfWAsIHJvdXRlcilcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRTdGF0aWNcbiJdLCJuYW1lcyI6WyJpbml0U3RhdGljIiwiY3R4IiwiT2JqZWN0IiwiZW50cmllcyIsImNvbGxlY3Rpb25zIiwiZm9yRWFjaCIsIl8iLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwidXBsb2FkIiwic3RhdGljVVJMIiwic3RhcnRzV2l0aCIsInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJjb3JzSGVhZGVycyIsInBhc3Nwb3J0IiwiaW5pdGlhbGl6ZSIsImF1dGhlbnRpY2F0ZSIsImdldEV4ZWN1dGVTdGF0aWNBY2Nlc3MiLCJBcnJheSIsImlzQXJyYXkiLCJoYW5kbGVycyIsImdldCIsInN0YXRpY1BhdGgiLCJwYXRoIiwicmVzb2x2ZSIsInBhdGhzIiwiY29uZmlnRGlyIiwic3RhdGljRGlyIiwic3RhdGljIiwic3RhdGljT3B0aW9ucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0NBOzs7ZUFBQTs7O2dFQXBDb0I7aUVBQ0M7NkRBQ0o7K0VBSWtCO3FFQUNWO29FQUNEOzs7Ozs7QUFFeEIsU0FBU0EsV0FBV0MsR0FBWTtJQUM5QkMsT0FBT0MsT0FBTyxDQUFDRixJQUFJRyxXQUFXLEVBQUVDLE9BQU8sQ0FBQyxDQUFDLENBQUNDLEdBQUdDLFdBQVc7UUFDdEQsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0Q7UUFFbkIsSUFBSUMsT0FBT0MsTUFBTSxJQUFJRCxPQUFPQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDLE1BQU07WUFDNUQsTUFBTUMsU0FBU0MsZ0JBQU8sQ0FBQ0MsTUFBTTtZQUU3QkYsT0FBT0csR0FBRyxDQUFDQyxJQUFBQSxvQkFBVyxFQUFDZixJQUFJTyxNQUFNO1lBQ2pDSSxPQUFPRyxHQUFHLENBQUNFLGlCQUFRLENBQUNDLFVBQVU7WUFDOUJOLE9BQU9HLEdBQUcsQ0FBQ0ksSUFBQUEscUJBQVksRUFBQ2xCLElBQUlPLE1BQU07WUFFbENJLE9BQU9HLEdBQUcsQ0FBQ0ssSUFBQUEsK0JBQXNCLEVBQUNaO1lBRWxDLElBQUlhLE1BQU1DLE9BQU8sQ0FBQ2QsT0FBT0MsTUFBTSxFQUFFYyxXQUFXO2dCQUMxQ1gsT0FBT1ksR0FBRyxDQUFDLGVBQWVoQixPQUFPQyxNQUFNLENBQUNjLFFBQVE7WUFDbEQ7WUFFQSxNQUFNRSxhQUFhQyxhQUFJLENBQUNDLE9BQU8sQ0FBQzFCLElBQUlPLE1BQU0sQ0FBQ29CLEtBQUssQ0FBQ0MsU0FBUyxFQUFFckIsT0FBT0MsTUFBTSxDQUFDcUIsU0FBUztZQUVuRmxCLE9BQU9HLEdBQUcsQ0FBQ0YsZ0JBQU8sQ0FBQ2tCLE1BQU0sQ0FBQ04sWUFBWWpCLE9BQU9DLE1BQU0sQ0FBQ3VCLGFBQWEsSUFBSSxDQUFDO1lBRXRFL0IsSUFBSVksT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBQyxFQUFFUCxPQUFPQyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUVFO1FBQ2hEO0lBQ0Y7QUFDRjtNQUVBLFdBQWVaIn0=