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
const _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
const _url = /*#__PURE__*/ _interop_require_default(require("url"));
const _getExtractJWT = /*#__PURE__*/ _interop_require_default(require("../getExtractJWT"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function me(args) {
    const { collection, req } = args;
    const extractJWT = (0, _getExtractJWT.default)(req.payload.config);
    let response = {
        user: null
    };
    if (req.user) {
        const parsedURL = _url.default.parse(req.originalUrl);
        const isGraphQL = parsedURL.pathname === `/api${req.payload.config.routes.graphQL}`;
        const user = await req.payload.findByID({
            id: req.user.id,
            collection: collection.config.slug,
            depth: isGraphQL ? 0 : collection.config.auth.depth,
            overrideAccess: false,
            req,
            showHiddenFields: false
        });
        if (req.user.collection !== collection.config.slug) {
            return {
                user: null
            };
        }
        delete user.collection;
        // /////////////////////////////////////
        // me hook - Collection
        // /////////////////////////////////////
        for (const meHook of collection.config.hooks.me){
            const hookResult = await meHook({
                args,
                user
            });
            if (hookResult) {
                response.user = hookResult.user;
                response.exp = hookResult.exp;
                break;
            }
        }
        response.collection = req.user.collection;
        response.strategy = req.user._strategy;
        const token = extractJWT(req);
        if (!response.user) {
            response.user = user;
            if (token) {
                const decoded = _jsonwebtoken.default.decode(token);
                if (decoded) response.exp = decoded.exp;
                if (!collection.config.auth.removeTokenFromResponses) response.token = token;
            }
        }
    }
    // /////////////////////////////////////
    // After Me - Collection
    // /////////////////////////////////////
    await collection.config.hooks.afterMe.reduce(async (priorHook, hook)=>{
        await priorHook;
        response = await hook({
            collection: collection?.config,
            context: req.context,
            req,
            response
        }) || response;
    }, Promise.resolve());
    return response;
}
const _default = me;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgdXJsIGZyb20gJ3VybCdcblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IGdldEV4dHJhY3RKV1QgZnJvbSAnLi4vZ2V0RXh0cmFjdEpXVCdcblxuZXhwb3J0IHR5cGUgUmVzdWx0ID0ge1xuICBjb2xsZWN0aW9uPzogc3RyaW5nXG4gIGV4cD86IG51bWJlclxuICBzdHJhdGVneT86IHN0cmluZ1xuICB0b2tlbj86IHN0cmluZ1xuICB1c2VyPzogVXNlclxufVxuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxufVxuXG5hc3luYyBmdW5jdGlvbiBtZShhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPFJlc3VsdD4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb24sIHJlcSB9ID0gYXJnc1xuICBjb25zdCBleHRyYWN0SldUID0gZ2V0RXh0cmFjdEpXVChyZXEucGF5bG9hZC5jb25maWcpXG4gIGxldCByZXNwb25zZTogUmVzdWx0ID0ge1xuICAgIHVzZXI6IG51bGwsXG4gIH1cblxuICBpZiAocmVxLnVzZXIpIHtcbiAgICBjb25zdCBwYXJzZWRVUkwgPSB1cmwucGFyc2UocmVxLm9yaWdpbmFsVXJsKVxuICAgIGNvbnN0IGlzR3JhcGhRTCA9IHBhcnNlZFVSTC5wYXRobmFtZSA9PT0gYC9hcGkke3JlcS5wYXlsb2FkLmNvbmZpZy5yb3V0ZXMuZ3JhcGhRTH1gXG5cbiAgICBjb25zdCB1c2VyID0gKGF3YWl0IHJlcS5wYXlsb2FkLmZpbmRCeUlEKHtcbiAgICAgIGlkOiByZXEudXNlci5pZCxcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24uY29uZmlnLnNsdWcsXG4gICAgICBkZXB0aDogaXNHcmFwaFFMID8gMCA6IGNvbGxlY3Rpb24uY29uZmlnLmF1dGguZGVwdGgsXG4gICAgICBvdmVycmlkZUFjY2VzczogZmFsc2UsXG4gICAgICByZXEsXG4gICAgICBzaG93SGlkZGVuRmllbGRzOiBmYWxzZSxcbiAgICB9KSkgYXMgVXNlclxuXG4gICAgaWYgKHJlcS51c2VyLmNvbGxlY3Rpb24gIT09IGNvbGxlY3Rpb24uY29uZmlnLnNsdWcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlIHVzZXIuY29sbGVjdGlvblxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIG1lIGhvb2sgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZm9yIChjb25zdCBtZUhvb2sgb2YgY29sbGVjdGlvbi5jb25maWcuaG9va3MubWUpIHtcbiAgICAgIGNvbnN0IGhvb2tSZXN1bHQgPSBhd2FpdCBtZUhvb2soeyBhcmdzLCB1c2VyIH0pXG5cbiAgICAgIGlmIChob29rUmVzdWx0KSB7XG4gICAgICAgIHJlc3BvbnNlLnVzZXIgPSBob29rUmVzdWx0LnVzZXJcbiAgICAgICAgcmVzcG9uc2UuZXhwID0gaG9va1Jlc3VsdC5leHBcblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc3BvbnNlLmNvbGxlY3Rpb24gPSByZXEudXNlci5jb2xsZWN0aW9uXG4gICAgcmVzcG9uc2Uuc3RyYXRlZ3kgPSByZXEudXNlci5fc3RyYXRlZ3lcblxuICAgIGNvbnN0IHRva2VuID0gZXh0cmFjdEpXVChyZXEpXG5cbiAgICBpZiAoIXJlc3BvbnNlLnVzZXIpIHtcbiAgICAgIHJlc3BvbnNlLnVzZXIgPSB1c2VyXG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gand0LmRlY29kZSh0b2tlbikgYXMgand0Lkp3dFBheWxvYWRcbiAgICAgICAgaWYgKGRlY29kZWQpIHJlc3BvbnNlLmV4cCA9IGRlY29kZWQuZXhwXG4gICAgICAgIGlmICghY29sbGVjdGlvbi5jb25maWcuYXV0aC5yZW1vdmVUb2tlbkZyb21SZXNwb25zZXMpIHJlc3BvbnNlLnRva2VuID0gdG9rZW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEFmdGVyIE1lIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYXdhaXQgY29sbGVjdGlvbi5jb25maWcuaG9va3MuYWZ0ZXJNZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgcmVzcG9uc2UgPVxuICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uPy5jb25maWcsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICByZXEsXG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgfSkpIHx8IHJlc3BvbnNlXG4gIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZVxuIl0sIm5hbWVzIjpbIm1lIiwiYXJncyIsImNvbGxlY3Rpb24iLCJyZXEiLCJleHRyYWN0SldUIiwiZ2V0RXh0cmFjdEpXVCIsInBheWxvYWQiLCJjb25maWciLCJyZXNwb25zZSIsInVzZXIiLCJwYXJzZWRVUkwiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbmFsVXJsIiwiaXNHcmFwaFFMIiwicGF0aG5hbWUiLCJyb3V0ZXMiLCJncmFwaFFMIiwiZmluZEJ5SUQiLCJpZCIsInNsdWciLCJkZXB0aCIsImF1dGgiLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJtZUhvb2siLCJob29rcyIsImhvb2tSZXN1bHQiLCJleHAiLCJzdHJhdGVneSIsIl9zdHJhdGVneSIsInRva2VuIiwiZGVjb2RlZCIsImp3dCIsImRlY29kZSIsInJlbW92ZVRva2VuRnJvbVJlc3BvbnNlcyIsImFmdGVyTWUiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFvR0E7OztlQUFBOzs7cUVBcEdnQjs0REFDQTtzRUFNVTs7Ozs7O0FBZTFCLGVBQWVBLEdBQUdDLElBQWU7SUFDL0IsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLEdBQUcsRUFBRSxHQUFHRjtJQUM1QixNQUFNRyxhQUFhQyxJQUFBQSxzQkFBYSxFQUFDRixJQUFJRyxPQUFPLENBQUNDLE1BQU07SUFDbkQsSUFBSUMsV0FBbUI7UUFDckJDLE1BQU07SUFDUjtJQUVBLElBQUlOLElBQUlNLElBQUksRUFBRTtRQUNaLE1BQU1DLFlBQVlDLFlBQUcsQ0FBQ0MsS0FBSyxDQUFDVCxJQUFJVSxXQUFXO1FBQzNDLE1BQU1DLFlBQVlKLFVBQVVLLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRVosSUFBSUcsT0FBTyxDQUFDQyxNQUFNLENBQUNTLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUM7UUFFbkYsTUFBTVIsT0FBUSxNQUFNTixJQUFJRyxPQUFPLENBQUNZLFFBQVEsQ0FBQztZQUN2Q0MsSUFBSWhCLElBQUlNLElBQUksQ0FBQ1UsRUFBRTtZQUNmakIsWUFBWUEsV0FBV0ssTUFBTSxDQUFDYSxJQUFJO1lBQ2xDQyxPQUFPUCxZQUFZLElBQUlaLFdBQVdLLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDRCxLQUFLO1lBQ25ERSxnQkFBZ0I7WUFDaEJwQjtZQUNBcUIsa0JBQWtCO1FBQ3BCO1FBRUEsSUFBSXJCLElBQUlNLElBQUksQ0FBQ1AsVUFBVSxLQUFLQSxXQUFXSyxNQUFNLENBQUNhLElBQUksRUFBRTtZQUNsRCxPQUFPO2dCQUNMWCxNQUFNO1lBQ1I7UUFDRjtRQUVBLE9BQU9BLEtBQUtQLFVBQVU7UUFFdEIsd0NBQXdDO1FBQ3hDLHVCQUF1QjtRQUN2Qix3Q0FBd0M7UUFFeEMsS0FBSyxNQUFNdUIsVUFBVXZCLFdBQVdLLE1BQU0sQ0FBQ21CLEtBQUssQ0FBQzFCLEVBQUUsQ0FBRTtZQUMvQyxNQUFNMkIsYUFBYSxNQUFNRixPQUFPO2dCQUFFeEI7Z0JBQU1RO1lBQUs7WUFFN0MsSUFBSWtCLFlBQVk7Z0JBQ2RuQixTQUFTQyxJQUFJLEdBQUdrQixXQUFXbEIsSUFBSTtnQkFDL0JELFNBQVNvQixHQUFHLEdBQUdELFdBQVdDLEdBQUc7Z0JBRTdCO1lBQ0Y7UUFDRjtRQUVBcEIsU0FBU04sVUFBVSxHQUFHQyxJQUFJTSxJQUFJLENBQUNQLFVBQVU7UUFDekNNLFNBQVNxQixRQUFRLEdBQUcxQixJQUFJTSxJQUFJLENBQUNxQixTQUFTO1FBRXRDLE1BQU1DLFFBQVEzQixXQUFXRDtRQUV6QixJQUFJLENBQUNLLFNBQVNDLElBQUksRUFBRTtZQUNsQkQsU0FBU0MsSUFBSSxHQUFHQTtZQUVoQixJQUFJc0IsT0FBTztnQkFDVCxNQUFNQyxVQUFVQyxxQkFBRyxDQUFDQyxNQUFNLENBQUNIO2dCQUMzQixJQUFJQyxTQUFTeEIsU0FBU29CLEdBQUcsR0FBR0ksUUFBUUosR0FBRztnQkFDdkMsSUFBSSxDQUFDMUIsV0FBV0ssTUFBTSxDQUFDZSxJQUFJLENBQUNhLHdCQUF3QixFQUFFM0IsU0FBU3VCLEtBQUssR0FBR0E7WUFDekU7UUFDRjtJQUNGO0lBRUEsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4Qix3Q0FBd0M7SUFFeEMsTUFBTTdCLFdBQVdLLE1BQU0sQ0FBQ21CLEtBQUssQ0FBQ1UsT0FBTyxDQUFDQyxNQUFNLENBQUMsT0FBT0MsV0FBV0M7UUFDN0QsTUFBTUQ7UUFFTjlCLFdBQ0UsQUFBQyxNQUFNK0IsS0FBSztZQUNWckMsWUFBWUEsWUFBWUs7WUFDeEJpQyxTQUFTckMsSUFBSXFDLE9BQU87WUFDcEJyQztZQUNBSztRQUNGLE1BQU9BO0lBQ1gsR0FBR2lDLFFBQVFDLE9BQU87SUFFbEIsT0FBT2xDO0FBQ1Q7TUFFQSxXQUFlUiJ9