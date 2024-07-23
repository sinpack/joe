/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "initHTTP", {
    enumerable: true,
    get: function() {
        return initHTTP;
    }
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _init = /*#__PURE__*/ _interop_require_default(require("./auth/init"));
const _access = /*#__PURE__*/ _interop_require_default(require("./auth/requestHandlers/access"));
const _dataloader = require("./collections/dataloader");
const _initHTTP = /*#__PURE__*/ _interop_require_default(require("./collections/initHTTP"));
const _admin = /*#__PURE__*/ _interop_require_default(require("./express/admin"));
const _middleware = /*#__PURE__*/ _interop_require_default(require("./express/middleware"));
const _authenticate = /*#__PURE__*/ _interop_require_default(require("./express/middleware/authenticate"));
const _errorHandler = /*#__PURE__*/ _interop_require_default(require("./express/middleware/errorHandler"));
const _identifyAPI = /*#__PURE__*/ _interop_require_default(require("./express/middleware/identifyAPI"));
const _mountEndpoints = /*#__PURE__*/ _interop_require_default(require("./express/mountEndpoints"));
const _static = /*#__PURE__*/ _interop_require_default(require("./express/static"));
const _initHTTP1 = /*#__PURE__*/ _interop_require_default(require("./globals/initHTTP"));
const _graphQLHandler = /*#__PURE__*/ _interop_require_default(require("./graphql/graphQLHandler"));
const _initPlayground = /*#__PURE__*/ _interop_require_default(require("./graphql/initPlayground"));
const _payload = require("./payload");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const initHTTP = async (incomingOptions)=>{
    const options = {
        ...incomingOptions
    };
    if (typeof options.local === 'undefined') options.local = false;
    // Disable onInit because it will be called in top-level Payload
    options.disableOnInit = true;
    const payload = await (0, _payload.getPayload)(options);
    if (!options.local) {
        payload.router = _express.default.Router();
        payload.router.use(...(0, _middleware.default)(payload));
        (0, _init.default)(payload);
        (0, _initHTTP.default)(payload);
        (0, _initHTTP1.default)(payload);
        options.express.use((req, res, next)=>{
            req.payload = payload;
            next();
        });
        options.express.use((req, res, next)=>{
            req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
            return next();
        });
        payload.express = options.express;
        if (payload.config.rateLimit.trustProxy) {
            payload.express.set('trust proxy', 1);
        }
        await (0, _admin.default)(payload);
        payload.router.get('/access', _access.default);
        if (!payload.config.graphQL.disable) {
            payload.router.use(payload.config.routes.graphQL, (req, res, next)=>{
                if (req.method === 'OPTIONS') {
                    res.sendStatus(204);
                } else {
                    next();
                }
            }, (0, _identifyAPI.default)('GraphQL'), (req, res, next)=>(0, _graphQLHandler.default)(req, res)(req, res, next));
            (0, _initPlayground.default)(payload);
        }
        (0, _mountEndpoints.default)(options.express, payload.router, payload.config.endpoints);
        // Bind router to API
        payload.express.use(payload.config.routes.api, payload.router);
        // Enable static routes for all collections permitting upload
        (0, _static.default)(payload);
        payload.errorHandler = (0, _errorHandler.default)(payload.config, payload.logger);
        payload.router.use(payload.errorHandler);
        payload.authenticate = (0, _authenticate.default)(payload.config);
    }
    return payload;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0SFRUUC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBJbml0T3B0aW9ucyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4vcGF5bG9hZCdcblxuaW1wb3J0IGluaXRBdXRoIGZyb20gJy4vYXV0aC9pbml0J1xuaW1wb3J0IGFjY2VzcyBmcm9tICcuL2F1dGgvcmVxdWVzdEhhbmRsZXJzL2FjY2VzcydcbmltcG9ydCB7IGdldERhdGFMb2FkZXIgfSBmcm9tICcuL2NvbGxlY3Rpb25zL2RhdGFsb2FkZXInXG5pbXBvcnQgaW5pdENvbGxlY3Rpb25zSFRUUCBmcm9tICcuL2NvbGxlY3Rpb25zL2luaXRIVFRQJ1xuaW1wb3J0IGluaXRBZG1pbiBmcm9tICcuL2V4cHJlc3MvYWRtaW4nXG5pbXBvcnQgZXhwcmVzc01pZGRsZXdhcmUgZnJvbSAnLi9leHByZXNzL21pZGRsZXdhcmUnXG5pbXBvcnQgYXV0aGVudGljYXRlIGZyb20gJy4vZXhwcmVzcy9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSdcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi9leHByZXNzL21pZGRsZXdhcmUvZXJyb3JIYW5kbGVyJ1xuaW1wb3J0IGlkZW50aWZ5QVBJIGZyb20gJy4vZXhwcmVzcy9taWRkbGV3YXJlL2lkZW50aWZ5QVBJJ1xuaW1wb3J0IG1vdW50RW5kcG9pbnRzIGZyb20gJy4vZXhwcmVzcy9tb3VudEVuZHBvaW50cydcbmltcG9ydCBpbml0U3RhdGljIGZyb20gJy4vZXhwcmVzcy9zdGF0aWMnXG5pbXBvcnQgaW5pdEdsb2JhbHNIVFRQIGZyb20gJy4vZ2xvYmFscy9pbml0SFRUUCdcbmltcG9ydCBncmFwaFFMSGFuZGxlciBmcm9tICcuL2dyYXBocWwvZ3JhcGhRTEhhbmRsZXInXG5pbXBvcnQgaW5pdEdyYXBoUUxQbGF5Z3JvdW5kIGZyb20gJy4vZ3JhcGhxbC9pbml0UGxheWdyb3VuZCdcbmltcG9ydCB7IGdldFBheWxvYWQgfSBmcm9tICcuL3BheWxvYWQnXG5cbmV4cG9ydCBjb25zdCBpbml0SFRUUCA9IGFzeW5jIChpbmNvbWluZ09wdGlvbnM6IEluaXRPcHRpb25zKTogUHJvbWlzZTxQYXlsb2FkPiA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IC4uLmluY29taW5nT3B0aW9ucyB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbCA9PT0gJ3VuZGVmaW5lZCcpIG9wdGlvbnMubG9jYWwgPSBmYWxzZVxuXG4gIC8vIERpc2FibGUgb25Jbml0IGJlY2F1c2UgaXQgd2lsbCBiZSBjYWxsZWQgaW4gdG9wLWxldmVsIFBheWxvYWRcbiAgb3B0aW9ucy5kaXNhYmxlT25Jbml0ID0gdHJ1ZVxuXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXRQYXlsb2FkKG9wdGlvbnMpXG5cbiAgaWYgKCFvcHRpb25zLmxvY2FsKSB7XG4gICAgcGF5bG9hZC5yb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG4gICAgcGF5bG9hZC5yb3V0ZXIudXNlKC4uLmV4cHJlc3NNaWRkbGV3YXJlKHBheWxvYWQpKVxuICAgIGluaXRBdXRoKHBheWxvYWQpXG5cbiAgICBpbml0Q29sbGVjdGlvbnNIVFRQKHBheWxvYWQpXG4gICAgaW5pdEdsb2JhbHNIVFRQKHBheWxvYWQpXG5cbiAgICBvcHRpb25zLmV4cHJlc3MudXNlKChyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXMsIG5leHQpID0+IHtcbiAgICAgIHJlcS5wYXlsb2FkID0gcGF5bG9hZFxuICAgICAgbmV4dCgpXG4gICAgfSlcblxuICAgIG9wdGlvbnMuZXhwcmVzcy51c2UoKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgcmVxLnBheWxvYWREYXRhTG9hZGVyID0gZ2V0RGF0YUxvYWRlcihyZXEpXG4gICAgICByZXR1cm4gbmV4dCgpXG4gICAgfSlcblxuICAgIHBheWxvYWQuZXhwcmVzcyA9IG9wdGlvbnMuZXhwcmVzc1xuXG4gICAgaWYgKHBheWxvYWQuY29uZmlnLnJhdGVMaW1pdC50cnVzdFByb3h5KSB7XG4gICAgICBwYXlsb2FkLmV4cHJlc3Muc2V0KCd0cnVzdCBwcm94eScsIDEpXG4gICAgfVxuXG4gICAgYXdhaXQgaW5pdEFkbWluKHBheWxvYWQpXG5cbiAgICBwYXlsb2FkLnJvdXRlci5nZXQoJy9hY2Nlc3MnLCBhY2Nlc3MpXG5cbiAgICBpZiAoIXBheWxvYWQuY29uZmlnLmdyYXBoUUwuZGlzYWJsZSkge1xuICAgICAgcGF5bG9hZC5yb3V0ZXIudXNlKFxuICAgICAgICBwYXlsb2FkLmNvbmZpZy5yb3V0ZXMuZ3JhcGhRTCxcbiAgICAgICAgKHJlcSwgcmVzLCBuZXh0KTogdm9pZCA9PiB7XG4gICAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgICAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjA0KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlkZW50aWZ5QVBJKCdHcmFwaFFMJyksXG4gICAgICAgIChyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0KSA9PiBncmFwaFFMSGFuZGxlcihyZXEsIHJlcykocmVxLCByZXMsIG5leHQpLFxuICAgICAgKVxuICAgICAgaW5pdEdyYXBoUUxQbGF5Z3JvdW5kKHBheWxvYWQpXG4gICAgfVxuXG4gICAgbW91bnRFbmRwb2ludHMob3B0aW9ucy5leHByZXNzLCBwYXlsb2FkLnJvdXRlciwgcGF5bG9hZC5jb25maWcuZW5kcG9pbnRzKVxuXG4gICAgLy8gQmluZCByb3V0ZXIgdG8gQVBJXG4gICAgcGF5bG9hZC5leHByZXNzLnVzZShwYXlsb2FkLmNvbmZpZy5yb3V0ZXMuYXBpLCBwYXlsb2FkLnJvdXRlcilcblxuICAgIC8vIEVuYWJsZSBzdGF0aWMgcm91dGVzIGZvciBhbGwgY29sbGVjdGlvbnMgcGVybWl0dGluZyB1cGxvYWRcbiAgICBpbml0U3RhdGljKHBheWxvYWQpXG5cbiAgICBwYXlsb2FkLmVycm9ySGFuZGxlciA9IGVycm9ySGFuZGxlcihwYXlsb2FkLmNvbmZpZywgcGF5bG9hZC5sb2dnZXIpXG4gICAgcGF5bG9hZC5yb3V0ZXIudXNlKHBheWxvYWQuZXJyb3JIYW5kbGVyKVxuXG4gICAgcGF5bG9hZC5hdXRoZW50aWNhdGUgPSBhdXRoZW50aWNhdGUocGF5bG9hZC5jb25maWcpXG4gIH1cblxuICByZXR1cm4gcGF5bG9hZFxufVxuIl0sIm5hbWVzIjpbImluaXRIVFRQIiwiaW5jb21pbmdPcHRpb25zIiwib3B0aW9ucyIsImxvY2FsIiwiZGlzYWJsZU9uSW5pdCIsInBheWxvYWQiLCJnZXRQYXlsb2FkIiwicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsImV4cHJlc3NNaWRkbGV3YXJlIiwiaW5pdEF1dGgiLCJpbml0Q29sbGVjdGlvbnNIVFRQIiwiaW5pdEdsb2JhbHNIVFRQIiwicmVxIiwicmVzIiwibmV4dCIsInBheWxvYWREYXRhTG9hZGVyIiwiZ2V0RGF0YUxvYWRlciIsImNvbmZpZyIsInJhdGVMaW1pdCIsInRydXN0UHJveHkiLCJzZXQiLCJpbml0QWRtaW4iLCJnZXQiLCJhY2Nlc3MiLCJncmFwaFFMIiwiZGlzYWJsZSIsInJvdXRlcyIsIm1ldGhvZCIsInNlbmRTdGF0dXMiLCJpZGVudGlmeUFQSSIsImdyYXBoUUxIYW5kbGVyIiwiaW5pdEdyYXBoUUxQbGF5Z3JvdW5kIiwibW91bnRFbmRwb2ludHMiLCJlbmRwb2ludHMiLCJhcGkiLCJpbml0U3RhdGljIiwiZXJyb3JIYW5kbGVyIiwibG9nZ2VyIiwiYXV0aGVudGljYXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7OzsrQkF5QnZCQTs7O2VBQUFBOzs7Z0VBdEJPOzZEQU1DOytEQUNGOzRCQUNXO2lFQUNFOzhEQUNWO21FQUNRO3FFQUNMO3FFQUNBO29FQUNEO3VFQUNHOytEQUNKO2tFQUNLO3VFQUNEO3VFQUNPO3lCQUNQOzs7Ozs7QUFFcEIsTUFBTUEsV0FBVyxPQUFPQztJQUM3QixNQUFNQyxVQUFVO1FBQUUsR0FBR0QsZUFBZTtJQUFDO0lBQ3JDLElBQUksT0FBT0MsUUFBUUMsS0FBSyxLQUFLLGFBQWFELFFBQVFDLEtBQUssR0FBRztJQUUxRCxnRUFBZ0U7SUFDaEVELFFBQVFFLGFBQWEsR0FBRztJQUV4QixNQUFNQyxVQUFVLE1BQU1DLElBQUFBLG1CQUFVLEVBQUNKO0lBRWpDLElBQUksQ0FBQ0EsUUFBUUMsS0FBSyxFQUFFO1FBQ2xCRSxRQUFRRSxNQUFNLEdBQUdDLGdCQUFPLENBQUNDLE1BQU07UUFDL0JKLFFBQVFFLE1BQU0sQ0FBQ0csR0FBRyxJQUFJQyxJQUFBQSxtQkFBaUIsRUFBQ047UUFDeENPLElBQUFBLGFBQVEsRUFBQ1A7UUFFVFEsSUFBQUEsaUJBQW1CLEVBQUNSO1FBQ3BCUyxJQUFBQSxrQkFBZSxFQUFDVDtRQUVoQkgsUUFBUU0sT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0ssS0FBcUJDLEtBQUtDO1lBQzdDRixJQUFJVixPQUFPLEdBQUdBO1lBQ2RZO1FBQ0Y7UUFFQWYsUUFBUU0sT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0ssS0FBcUJDLEtBQWVDO1lBQ3ZERixJQUFJRyxpQkFBaUIsR0FBR0MsSUFBQUEseUJBQWEsRUFBQ0o7WUFDdEMsT0FBT0U7UUFDVDtRQUVBWixRQUFRRyxPQUFPLEdBQUdOLFFBQVFNLE9BQU87UUFFakMsSUFBSUgsUUFBUWUsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFVBQVUsRUFBRTtZQUN2Q2pCLFFBQVFHLE9BQU8sQ0FBQ2UsR0FBRyxDQUFDLGVBQWU7UUFDckM7UUFFQSxNQUFNQyxJQUFBQSxjQUFTLEVBQUNuQjtRQUVoQkEsUUFBUUUsTUFBTSxDQUFDa0IsR0FBRyxDQUFDLFdBQVdDLGVBQU07UUFFcEMsSUFBSSxDQUFDckIsUUFBUWUsTUFBTSxDQUFDTyxPQUFPLENBQUNDLE9BQU8sRUFBRTtZQUNuQ3ZCLFFBQVFFLE1BQU0sQ0FBQ0csR0FBRyxDQUNoQkwsUUFBUWUsTUFBTSxDQUFDUyxNQUFNLENBQUNGLE9BQU8sRUFDN0IsQ0FBQ1osS0FBS0MsS0FBS0M7Z0JBQ1QsSUFBSUYsSUFBSWUsTUFBTSxLQUFLLFdBQVc7b0JBQzVCZCxJQUFJZSxVQUFVLENBQUM7Z0JBQ2pCLE9BQU87b0JBQ0xkO2dCQUNGO1lBQ0YsR0FDQWUsSUFBQUEsb0JBQVcsRUFBQyxZQUNaLENBQUNqQixLQUFxQkMsS0FBZUMsT0FBU2dCLElBQUFBLHVCQUFjLEVBQUNsQixLQUFLQyxLQUFLRCxLQUFLQyxLQUFLQztZQUVuRmlCLElBQUFBLHVCQUFxQixFQUFDN0I7UUFDeEI7UUFFQThCLElBQUFBLHVCQUFjLEVBQUNqQyxRQUFRTSxPQUFPLEVBQUVILFFBQVFFLE1BQU0sRUFBRUYsUUFBUWUsTUFBTSxDQUFDZ0IsU0FBUztRQUV4RSxxQkFBcUI7UUFDckIvQixRQUFRRyxPQUFPLENBQUNFLEdBQUcsQ0FBQ0wsUUFBUWUsTUFBTSxDQUFDUyxNQUFNLENBQUNRLEdBQUcsRUFBRWhDLFFBQVFFLE1BQU07UUFFN0QsNkRBQTZEO1FBQzdEK0IsSUFBQUEsZUFBVSxFQUFDakM7UUFFWEEsUUFBUWtDLFlBQVksR0FBR0EsSUFBQUEscUJBQVksRUFBQ2xDLFFBQVFlLE1BQU0sRUFBRWYsUUFBUW1DLE1BQU07UUFDbEVuQyxRQUFRRSxNQUFNLENBQUNHLEdBQUcsQ0FBQ0wsUUFBUWtDLFlBQVk7UUFFdkNsQyxRQUFRb0MsWUFBWSxHQUFHQSxJQUFBQSxxQkFBWSxFQUFDcEMsUUFBUWUsTUFBTTtJQUNwRDtJQUVBLE9BQU9mO0FBQ1QifQ==