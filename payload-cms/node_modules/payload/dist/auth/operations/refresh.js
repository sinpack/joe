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
const _utils = require("../../collections/operations/utils");
const _errors = require("../../errors");
const _commitTransaction = require("../../utilities/commitTransaction");
const _getCookieExpiration = /*#__PURE__*/ _interop_require_default(require("../../utilities/getCookieExpiration"));
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _getFieldsToSign = require("./getFieldsToSign");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function refresh(incomingArgs) {
    let args = incomingArgs;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(args.req);
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        await args.collection.config.hooks.beforeOperation.reduce(async (priorHook, hook)=>{
            await priorHook;
            args = await hook({
                args,
                collection: args.collection?.config,
                context: args.req.context,
                operation: 'refresh',
                req: args.req
            }) || args;
        }, Promise.resolve());
        // /////////////////////////////////////
        // Refresh
        // /////////////////////////////////////
        const { collection: { config: collectionConfig }, req: { payload: { config, secret } } } = args;
        if (!args.req.user) throw new _errors.Forbidden(args.req.t);
        const parsedURL = _url.default.parse(args.req.url);
        const isGraphQL = parsedURL.pathname === config.routes.graphQL;
        const user = await args.req.payload.findByID({
            id: args.req.user.id,
            collection: args.req.user.collection,
            depth: isGraphQL ? 0 : args.collection.config.auth.depth,
            req: args.req
        });
        let result;
        // /////////////////////////////////////
        // refresh hook - Collection
        // /////////////////////////////////////
        for (const refreshHook of args.collection.config.hooks.refresh){
            const hookResult = await refreshHook({
                args,
                user
            });
            if (hookResult) {
                result = hookResult;
                break;
            }
        }
        if (!result) {
            const fieldsToSign = (0, _getFieldsToSign.getFieldsToSign)({
                collectionConfig,
                email: user?.email,
                user: args?.req?.user
            });
            const refreshedToken = _jsonwebtoken.default.sign(fieldsToSign, secret, {
                expiresIn: collectionConfig.auth.tokenExpiration
            });
            const exp = _jsonwebtoken.default.decode(refreshedToken).exp;
            if (args.res) {
                const cookieOptions = {
                    domain: undefined,
                    expires: (0, _getCookieExpiration.default)(collectionConfig.auth.tokenExpiration),
                    httpOnly: true,
                    path: '/',
                    sameSite: collectionConfig.auth.cookies.sameSite,
                    secure: collectionConfig.auth.cookies.secure
                };
                if (collectionConfig.auth.cookies.domain) cookieOptions.domain = collectionConfig.auth.cookies.domain;
                args.res.cookie(`${config.cookiePrefix}-token`, refreshedToken, cookieOptions);
            }
            result = {
                exp,
                refreshedToken,
                strategy: args.req.user._strategy,
                user
            };
        }
        // /////////////////////////////////////
        // After Refresh - Collection
        // /////////////////////////////////////
        await collectionConfig.hooks.afterRefresh.reduce(async (priorHook, hook)=>{
            await priorHook;
            result = await hook({
                collection: args.collection?.config,
                context: args.req.context,
                exp: result.exp,
                req: args.req,
                res: args.res,
                token: result.refreshedToken
            }) || result;
        }, Promise.resolve());
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, _utils.buildAfterOperation)({
            args,
            collection: args.collection?.config,
            operation: 'refresh',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (collectionConfig.auth.removeTokenFromResponses) {
            delete result.refreshedToken;
        }
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(args.req);
        return result;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(args.req);
        throw error;
    }
}
const _default = refresh;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvcmVmcmVzaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgdXJsIGZyb20gJ3VybCdcblxuaW1wb3J0IHR5cGUgeyBCZWZvcmVPcGVyYXRpb25Ib29rLCBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IGJ1aWxkQWZ0ZXJPcGVyYXRpb24gfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL3V0aWxzJ1xuaW1wb3J0IHsgRm9yYmlkZGVuIH0gZnJvbSAnLi4vLi4vZXJyb3JzJ1xuaW1wb3J0IHsgY29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbWl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgZ2V0Q29va2llRXhwaXJhdGlvbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0Q29va2llRXhwaXJhdGlvbidcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgZ2V0RmllbGRzVG9TaWduIH0gZnJvbSAnLi9nZXRGaWVsZHNUb1NpZ24nXG5cbmV4cG9ydCB0eXBlIFJlc3VsdCA9IHtcbiAgZXhwOiBudW1iZXJcbiAgcmVmcmVzaGVkVG9rZW46IHN0cmluZ1xuICBzdHJhdGVneT86IHN0cmluZ1xuICB1c2VyOiBEb2N1bWVudFxufVxuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICByZXM/OiBSZXNwb25zZVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoKGluY29taW5nQXJnczogQXJndW1lbnRzKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgbGV0IGFyZ3MgPSBpbmNvbWluZ0FyZ3NcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihhcmdzLnJlcSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKFxuICAgICAgYXN5bmMgKHByaW9ySG9vazogQmVmb3JlT3BlcmF0aW9uSG9vayB8IFByb21pc2U8dm9pZD4sIGhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2spID0+IHtcbiAgICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgICAgYXJncyA9XG4gICAgICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGFyZ3MuY29sbGVjdGlvbj8uY29uZmlnLFxuICAgICAgICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICAgICAgICAgIG9wZXJhdGlvbjogJ3JlZnJlc2gnLFxuICAgICAgICAgICAgcmVxOiBhcmdzLnJlcSxcbiAgICAgICAgICB9KSkgfHwgYXJnc1xuICAgICAgfSxcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLFxuICAgIClcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZWZyZXNoXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3Qge1xuICAgICAgY29sbGVjdGlvbjogeyBjb25maWc6IGNvbGxlY3Rpb25Db25maWcgfSxcbiAgICAgIHJlcToge1xuICAgICAgICBwYXlsb2FkOiB7IGNvbmZpZywgc2VjcmV0IH0sXG4gICAgICB9LFxuICAgIH0gPSBhcmdzXG5cbiAgICBpZiAoIWFyZ3MucmVxLnVzZXIpIHRocm93IG5ldyBGb3JiaWRkZW4oYXJncy5yZXEudClcblxuICAgIGNvbnN0IHBhcnNlZFVSTCA9IHVybC5wYXJzZShhcmdzLnJlcS51cmwpXG4gICAgY29uc3QgaXNHcmFwaFFMID0gcGFyc2VkVVJMLnBhdGhuYW1lID09PSBjb25maWcucm91dGVzLmdyYXBoUUxcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcmdzLnJlcS5wYXlsb2FkLmZpbmRCeUlEKHtcbiAgICAgIGlkOiBhcmdzLnJlcS51c2VyLmlkLFxuICAgICAgY29sbGVjdGlvbjogYXJncy5yZXEudXNlci5jb2xsZWN0aW9uLFxuICAgICAgZGVwdGg6IGlzR3JhcGhRTCA/IDAgOiBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmF1dGguZGVwdGgsXG4gICAgICByZXE6IGFyZ3MucmVxLFxuICAgIH0pXG5cbiAgICBsZXQgcmVzdWx0OiBSZXN1bHRcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyByZWZyZXNoIGhvb2sgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZm9yIChjb25zdCByZWZyZXNoSG9vayBvZiBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLnJlZnJlc2gpIHtcbiAgICAgIGNvbnN0IGhvb2tSZXN1bHQgPSBhd2FpdCByZWZyZXNoSG9vayh7IGFyZ3MsIHVzZXIgfSlcblxuICAgICAgaWYgKGhvb2tSZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gaG9va1Jlc3VsdFxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBjb25zdCBmaWVsZHNUb1NpZ24gPSBnZXRGaWVsZHNUb1NpZ24oe1xuICAgICAgICBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICBlbWFpbDogdXNlcj8uZW1haWwgYXMgc3RyaW5nLFxuICAgICAgICB1c2VyOiBhcmdzPy5yZXE/LnVzZXIsXG4gICAgICB9KVxuXG4gICAgICBjb25zdCByZWZyZXNoZWRUb2tlbiA9IGp3dC5zaWduKGZpZWxkc1RvU2lnbiwgc2VjcmV0LCB7XG4gICAgICAgIGV4cGlyZXNJbjogY29sbGVjdGlvbkNvbmZpZy5hdXRoLnRva2VuRXhwaXJhdGlvbixcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGV4cCA9IChqd3QuZGVjb2RlKHJlZnJlc2hlZFRva2VuKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikuZXhwIGFzIG51bWJlclxuXG4gICAgICBpZiAoYXJncy5yZXMpIHtcbiAgICAgICAgY29uc3QgY29va2llT3B0aW9ucyA9IHtcbiAgICAgICAgICBkb21haW46IHVuZGVmaW5lZCxcbiAgICAgICAgICBleHBpcmVzOiBnZXRDb29raWVFeHBpcmF0aW9uKGNvbGxlY3Rpb25Db25maWcuYXV0aC50b2tlbkV4cGlyYXRpb24pLFxuICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICBzYW1lU2l0ZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2FtZVNpdGUsXG4gICAgICAgICAgc2VjdXJlOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguY29va2llcy5zZWN1cmUsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluKVxuICAgICAgICAgIGNvb2tpZU9wdGlvbnMuZG9tYWluID0gY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluXG5cbiAgICAgICAgYXJncy5yZXMuY29va2llKGAke2NvbmZpZy5jb29raWVQcmVmaXh9LXRva2VuYCwgcmVmcmVzaGVkVG9rZW4sIGNvb2tpZU9wdGlvbnMpXG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgZXhwLFxuICAgICAgICByZWZyZXNoZWRUb2tlbixcbiAgICAgICAgc3RyYXRlZ3k6IGFyZ3MucmVxLnVzZXIuX3N0cmF0ZWd5LFxuICAgICAgICB1c2VyLFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBZnRlciBSZWZyZXNoIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJSZWZyZXNoLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2tcblxuICAgICAgcmVzdWx0ID1cbiAgICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGFyZ3MuY29sbGVjdGlvbj8uY29uZmlnLFxuICAgICAgICAgIGNvbnRleHQ6IGFyZ3MucmVxLmNvbnRleHQsXG4gICAgICAgICAgZXhwOiByZXN1bHQuZXhwLFxuICAgICAgICAgIHJlcTogYXJncy5yZXEsXG4gICAgICAgICAgcmVzOiBhcmdzLnJlcyxcbiAgICAgICAgICB0b2tlbjogcmVzdWx0LnJlZnJlc2hlZFRva2VuLFxuICAgICAgICB9KSkgfHwgcmVzdWx0XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgYnVpbGRBZnRlck9wZXJhdGlvbih7XG4gICAgICBhcmdzLFxuICAgICAgY29sbGVjdGlvbjogYXJncy5jb2xsZWN0aW9uPy5jb25maWcsXG4gICAgICBvcGVyYXRpb246ICdyZWZyZXNoJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9KVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aC5yZW1vdmVUb2tlbkZyb21SZXNwb25zZXMpIHtcbiAgICAgIGRlbGV0ZSByZXN1bHQucmVmcmVzaGVkVG9rZW5cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihhcmdzLnJlcSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24oYXJncy5yZXEpXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWZyZXNoXG4iXSwibmFtZXMiOlsicmVmcmVzaCIsImluY29taW5nQXJncyIsImFyZ3MiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJyZXEiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwiY29udGV4dCIsIm9wZXJhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29sbGVjdGlvbkNvbmZpZyIsInBheWxvYWQiLCJzZWNyZXQiLCJ1c2VyIiwiRm9yYmlkZGVuIiwidCIsInBhcnNlZFVSTCIsInVybCIsInBhcnNlIiwiaXNHcmFwaFFMIiwicGF0aG5hbWUiLCJyb3V0ZXMiLCJncmFwaFFMIiwiZmluZEJ5SUQiLCJpZCIsImRlcHRoIiwiYXV0aCIsInJlc3VsdCIsInJlZnJlc2hIb29rIiwiaG9va1Jlc3VsdCIsImZpZWxkc1RvU2lnbiIsImdldEZpZWxkc1RvU2lnbiIsImVtYWlsIiwicmVmcmVzaGVkVG9rZW4iLCJqd3QiLCJzaWduIiwiZXhwaXJlc0luIiwidG9rZW5FeHBpcmF0aW9uIiwiZXhwIiwiZGVjb2RlIiwicmVzIiwiY29va2llT3B0aW9ucyIsImRvbWFpbiIsInVuZGVmaW5lZCIsImV4cGlyZXMiLCJnZXRDb29raWVFeHBpcmF0aW9uIiwiaHR0cE9ubHkiLCJwYXRoIiwic2FtZVNpdGUiLCJjb29raWVzIiwic2VjdXJlIiwiY29va2llIiwiY29va2llUHJlZml4Iiwic3RyYXRlZ3kiLCJfc3RyYXRlZ3kiLCJhZnRlclJlZnJlc2giLCJ0b2tlbiIsImJ1aWxkQWZ0ZXJPcGVyYXRpb24iLCJyZW1vdmVUb2tlbkZyb21SZXNwb25zZXMiLCJjb21taXRUcmFuc2FjdGlvbiIsImVycm9yIiwia2lsbFRyYW5zYWN0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBaUxBOzs7ZUFBQTs7O3FFQS9LZ0I7NERBQ0E7dUJBTW9CO3dCQUNWO21DQUNROzRFQUNGO2lDQUNBO2lDQUNBO2lDQUNBOzs7Ozs7QUFlaEMsZUFBZUEsUUFBUUMsWUFBdUI7SUFDNUMsSUFBSUMsT0FBT0Q7SUFFWCxJQUFJO1FBQ0YsTUFBTUUsZUFBZSxNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDRixL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