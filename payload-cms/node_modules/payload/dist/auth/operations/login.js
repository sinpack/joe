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
const _utils = require("../../collections/operations/utils");
const _errors = require("../../errors");
const _afterRead = require("../../fields/hooks/afterRead");
const _commitTransaction = require("../../utilities/commitTransaction");
const _getCookieExpiration = /*#__PURE__*/ _interop_require_default(require("../../utilities/getCookieExpiration"));
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/sanitizeInternalFields"));
const _isLocked = /*#__PURE__*/ _interop_require_default(require("../isLocked"));
const _authenticate = require("../strategies/local/authenticate");
const _incrementLoginAttempts = require("../strategies/local/incrementLoginAttempts");
const _resetLoginAttempts = require("../strategies/local/resetLoginAttempts");
const _getFieldsToSign = require("./getFieldsToSign");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function login(incomingArgs) {
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
                operation: 'login',
                req: args.req
            }) || args;
        }, Promise.resolve());
        const { collection: { config: collectionConfig }, data, depth, overrideAccess, req, req: { fallbackLocale, locale, payload, payload: { config, secret } }, showHiddenFields } = args;
        // /////////////////////////////////////
        // Login
        // /////////////////////////////////////
        const { email: unsanitizedEmail, password } = data;
        if (typeof unsanitizedEmail !== 'string' || unsanitizedEmail.trim() === '') {
            throw new _errors.ValidationError([
                {
                    field: 'email',
                    message: req.i18n.t('validation:required')
                }
            ]);
        }
        if (typeof password !== 'string' || password.trim() === '') {
            throw new _errors.ValidationError([
                {
                    field: 'password',
                    message: req.i18n.t('validation:required')
                }
            ]);
        }
        const email = unsanitizedEmail ? unsanitizedEmail.toLowerCase().trim() : null;
        let user = await payload.db.findOne({
            collection: collectionConfig.slug,
            req,
            where: {
                email: {
                    equals: email.toLowerCase()
                }
            }
        });
        if (!user || args.collection.config.auth.verify && user._verified === false) {
            throw new _errors.AuthenticationError(req.t);
        }
        if (user && (0, _isLocked.default)(new Date(user.lockUntil).getTime())) {
            throw new _errors.LockedAuth(req.t);
        }
        const authResult = await (0, _authenticate.authenticateLocalStrategy)({
            doc: user,
            password
        });
        user = (0, _sanitizeInternalFields.default)(user);
        const maxLoginAttemptsEnabled = args.collection.config.auth.maxLoginAttempts > 0;
        if (!authResult) {
            if (maxLoginAttemptsEnabled) {
                await (0, _incrementLoginAttempts.incrementLoginAttempts)({
                    collection: collectionConfig,
                    doc: user,
                    payload: req.payload,
                    req
                });
            }
            if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
            throw new _errors.AuthenticationError(req.t);
        }
        if (maxLoginAttemptsEnabled) {
            await (0, _resetLoginAttempts.resetLoginAttempts)({
                collection: collectionConfig,
                doc: user,
                payload: req.payload,
                req
            });
        }
        const fieldsToSign = (0, _getFieldsToSign.getFieldsToSign)({
            collectionConfig,
            email,
            user
        });
        await collectionConfig.hooks.beforeLogin.reduce(async (priorHook, hook)=>{
            await priorHook;
            user = await hook({
                collection: args.collection?.config,
                context: args.req.context,
                req: args.req,
                user
            }) || user;
        }, Promise.resolve());
        const token = _jsonwebtoken.default.sign(fieldsToSign, secret, {
            expiresIn: collectionConfig.auth.tokenExpiration
        });
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
            args.res.cookie(`${config.cookiePrefix}-token`, token, cookieOptions);
        }
        req.user = user;
        // /////////////////////////////////////
        // afterLogin - Collection
        // /////////////////////////////////////
        await collectionConfig.hooks.afterLogin.reduce(async (priorHook, hook)=>{
            await priorHook;
            user = await hook({
                collection: args.collection?.config,
                context: args.req.context,
                req: args.req,
                token,
                user
            }) || user;
        }, Promise.resolve());
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        user = await (0, _afterRead.afterRead)({
            collection: collectionConfig,
            context: req.context,
            depth,
            doc: user,
            draft: undefined,
            fallbackLocale,
            global: null,
            locale,
            overrideAccess,
            req,
            showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        await collectionConfig.hooks.afterRead.reduce(async (priorHook, hook)=>{
            await priorHook;
            user = await hook({
                collection: args.collection?.config,
                context: req.context,
                doc: user,
                req
            }) || user;
        }, Promise.resolve());
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        await collectionConfig.hooks.afterRead.reduce(async (priorHook, hook)=>{
            await priorHook;
            user = await hook({
                collection: args.collection?.config,
                context: req.context,
                doc: user,
                req
            }) || user;
        }, Promise.resolve());
        let result = {
            exp: _jsonwebtoken.default.decode(token).exp,
            token,
            user
        };
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, _utils.buildAfterOperation)({
            args,
            collection: args.collection?.config,
            operation: 'login',
            result
        });
        if (collectionConfig.auth.removeTokenFromResponses) {
            delete result.token;
        }
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return result;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(args.req);
        throw error;
    }
}
const _default = login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9naW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDb29raWVPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuXG5pbXBvcnQgdHlwZSB7IEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAnLi4vLi4vJ1xuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvdXRpbHMnXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVycm9yLCBMb2NrZWRBdXRoLCBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMnXG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJ1xuaW1wb3J0IHsgY29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbWl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgZ2V0Q29va2llRXhwaXJhdGlvbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0Q29va2llRXhwaXJhdGlvbidcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHNhbml0aXplSW50ZXJuYWxGaWVsZHMgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3Nhbml0aXplSW50ZXJuYWxGaWVsZHMnXG5pbXBvcnQgaXNMb2NrZWQgZnJvbSAnLi4vaXNMb2NrZWQnXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVMb2NhbFN0cmF0ZWd5IH0gZnJvbSAnLi4vc3RyYXRlZ2llcy9sb2NhbC9hdXRoZW50aWNhdGUnXG5pbXBvcnQgeyBpbmNyZW1lbnRMb2dpbkF0dGVtcHRzIH0gZnJvbSAnLi4vc3RyYXRlZ2llcy9sb2NhbC9pbmNyZW1lbnRMb2dpbkF0dGVtcHRzJ1xuaW1wb3J0IHsgcmVzZXRMb2dpbkF0dGVtcHRzIH0gZnJvbSAnLi4vc3RyYXRlZ2llcy9sb2NhbC9yZXNldExvZ2luQXR0ZW1wdHMnXG5pbXBvcnQgeyBnZXRGaWVsZHNUb1NpZ24gfSBmcm9tICcuL2dldEZpZWxkc1RvU2lnbidcblxuZXhwb3J0IHR5cGUgUmVzdWx0ID0ge1xuICBleHA/OiBudW1iZXJcbiAgdG9rZW4/OiBzdHJpbmdcbiAgdXNlcj86IFVzZXJcbn1cblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIGRhdGE6IHtcbiAgICBlbWFpbDogc3RyaW5nXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICB9XG4gIGRlcHRoPzogbnVtYmVyXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHJlcz86IFJlc3BvbnNlXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICBpbmNvbWluZ0FyZ3M6IEFyZ3VtZW50cyxcbik6IFByb21pc2U8UmVzdWx0ICYgeyB1c2VyOiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10gfT4ge1xuICBsZXQgYXJncyA9IGluY29taW5nQXJnc1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKGFyZ3MucmVxKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZU9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIGFyZ3MgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgYXJncyxcbiAgICAgICAgICBjb2xsZWN0aW9uOiBhcmdzLmNvbGxlY3Rpb24/LmNvbmZpZyxcbiAgICAgICAgICBjb250ZXh0OiBhcmdzLnJlcS5jb250ZXh0LFxuICAgICAgICAgIG9wZXJhdGlvbjogJ2xvZ2luJyxcbiAgICAgICAgICByZXE6IGFyZ3MucmVxLFxuICAgICAgICB9KSkgfHwgYXJnc1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuXG4gICAgY29uc3Qge1xuICAgICAgY29sbGVjdGlvbjogeyBjb25maWc6IGNvbGxlY3Rpb25Db25maWcgfSxcbiAgICAgIGRhdGEsXG4gICAgICBkZXB0aCxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgcmVxOiB7XG4gICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHBheWxvYWQ6IHsgY29uZmlnLCBzZWNyZXQgfSxcbiAgICAgIH0sXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIH0gPSBhcmdzXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gTG9naW5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCB7IGVtYWlsOiB1bnNhbml0aXplZEVtYWlsLCBwYXNzd29yZCB9ID0gZGF0YVxuXG4gICAgaWYgKHR5cGVvZiB1bnNhbml0aXplZEVtYWlsICE9PSAnc3RyaW5nJyB8fCB1bnNhbml0aXplZEVtYWlsLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoW3sgZmllbGQ6ICdlbWFpbCcsIG1lc3NhZ2U6IHJlcS5pMThuLnQoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKSB9XSlcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gJ3N0cmluZycgfHwgcGFzc3dvcmQudHJpbSgpID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihbeyBmaWVsZDogJ3Bhc3N3b3JkJywgbWVzc2FnZTogcmVxLmkxOG4udCgndmFsaWRhdGlvbjpyZXF1aXJlZCcpIH1dKVxuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsID0gdW5zYW5pdGl6ZWRFbWFpbCA/IHVuc2FuaXRpemVkRW1haWwudG9Mb3dlckNhc2UoKS50cmltKCkgOiBudWxsXG5cbiAgICBsZXQgdXNlciA9IGF3YWl0IHBheWxvYWQuZGIuZmluZE9uZTxhbnk+KHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHJlcSxcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiB7IGVxdWFsczogZW1haWwudG9Mb3dlckNhc2UoKSB9IH0sXG4gICAgfSlcblxuICAgIGlmICghdXNlciB8fCAoYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5hdXRoLnZlcmlmeSAmJiB1c2VyLl92ZXJpZmllZCA9PT0gZmFsc2UpKSB7XG4gICAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcihyZXEudClcbiAgICB9XG5cbiAgICBpZiAodXNlciAmJiBpc0xvY2tlZChuZXcgRGF0ZSh1c2VyLmxvY2tVbnRpbCkuZ2V0VGltZSgpKSkge1xuICAgICAgdGhyb3cgbmV3IExvY2tlZEF1dGgocmVxLnQpXG4gICAgfVxuXG4gICAgY29uc3QgYXV0aFJlc3VsdCA9IGF3YWl0IGF1dGhlbnRpY2F0ZUxvY2FsU3RyYXRlZ3koeyBkb2M6IHVzZXIsIHBhc3N3b3JkIH0pXG5cbiAgICB1c2VyID0gc2FuaXRpemVJbnRlcm5hbEZpZWxkcyh1c2VyKVxuXG4gICAgY29uc3QgbWF4TG9naW5BdHRlbXB0c0VuYWJsZWQgPSBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmF1dGgubWF4TG9naW5BdHRlbXB0cyA+IDBcblxuICAgIGlmICghYXV0aFJlc3VsdCkge1xuICAgICAgaWYgKG1heExvZ2luQXR0ZW1wdHNFbmFibGVkKSB7XG4gICAgICAgIGF3YWl0IGluY3JlbWVudExvZ2luQXR0ZW1wdHMoe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgZG9jOiB1c2VyLFxuICAgICAgICAgIHBheWxvYWQ6IHJlcS5wYXlsb2FkLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgY29tbWl0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcihyZXEudClcbiAgICB9XG5cbiAgICBpZiAobWF4TG9naW5BdHRlbXB0c0VuYWJsZWQpIHtcbiAgICAgIGF3YWl0IHJlc2V0TG9naW5BdHRlbXB0cyh7XG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgIGRvYzogdXNlcixcbiAgICAgICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgICAgIHJlcSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzVG9TaWduID0gZ2V0RmllbGRzVG9TaWduKHtcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBlbWFpbCxcbiAgICAgIHVzZXIsXG4gICAgfSlcblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlTG9naW4ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICB1c2VyID1cbiAgICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGFyZ3MuY29sbGVjdGlvbj8uY29uZmlnLFxuICAgICAgICAgIGNvbnRleHQ6IGFyZ3MucmVxLmNvbnRleHQsXG4gICAgICAgICAgcmVxOiBhcmdzLnJlcSxcbiAgICAgICAgICB1c2VyLFxuICAgICAgICB9KSkgfHwgdXNlclxuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihmaWVsZHNUb1NpZ24sIHNlY3JldCwge1xuICAgICAgZXhwaXJlc0luOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGgudG9rZW5FeHBpcmF0aW9uLFxuICAgIH0pXG5cbiAgICBpZiAoYXJncy5yZXMpIHtcbiAgICAgIGNvbnN0IGNvb2tpZU9wdGlvbnM6IENvb2tpZU9wdGlvbnMgPSB7XG4gICAgICAgIGRvbWFpbjogdW5kZWZpbmVkLFxuICAgICAgICBleHBpcmVzOiBnZXRDb29raWVFeHBpcmF0aW9uKGNvbGxlY3Rpb25Db25maWcuYXV0aC50b2tlbkV4cGlyYXRpb24pLFxuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBzYW1lU2l0ZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2FtZVNpdGUsXG4gICAgICAgIHNlY3VyZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2VjdXJlLFxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluKVxuICAgICAgICBjb29raWVPcHRpb25zLmRvbWFpbiA9IGNvbGxlY3Rpb25Db25maWcuYXV0aC5jb29raWVzLmRvbWFpblxuXG4gICAgICBhcmdzLnJlcy5jb29raWUoYCR7Y29uZmlnLmNvb2tpZVByZWZpeH0tdG9rZW5gLCB0b2tlbiwgY29va2llT3B0aW9ucylcbiAgICB9XG5cbiAgICByZXEudXNlciA9IHVzZXJcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckxvZ2luIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJMb2dpbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIHVzZXIgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29sbGVjdGlvbjogYXJncy5jb2xsZWN0aW9uPy5jb25maWcsXG4gICAgICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICAgICAgICByZXE6IGFyZ3MucmVxLFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIHVzZXIsXG4gICAgICAgIH0pKSB8fCB1c2VyXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdXNlciA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogdXNlcixcbiAgICAgIGRyYWZ0OiB1bmRlZmluZWQsXG4gICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgIGdsb2JhbDogbnVsbCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICB9KVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rXG5cbiAgICAgIHVzZXIgPVxuICAgICAgICAoYXdhaXQgaG9vayh7XG4gICAgICAgICAgY29sbGVjdGlvbjogYXJncy5jb2xsZWN0aW9uPy5jb25maWcsXG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgZG9jOiB1c2VyLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSkpIHx8IHVzZXJcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICB1c2VyID1cbiAgICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGFyZ3MuY29sbGVjdGlvbj8uY29uZmlnLFxuICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIGRvYzogdXNlcixcbiAgICAgICAgICByZXEsXG4gICAgICAgIH0pKSB8fCB1c2VyXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICBsZXQgcmVzdWx0OiBSZXN1bHQgJiB7IHVzZXI6IEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXSB9ID0ge1xuICAgICAgZXhwOiAoand0LmRlY29kZSh0b2tlbikgYXMgand0Lkp3dFBheWxvYWQpLmV4cCxcbiAgICAgIHRva2VuLFxuICAgICAgdXNlcixcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgYnVpbGRBZnRlck9wZXJhdGlvbjxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+KHtcbiAgICAgIGFyZ3MsXG4gICAgICBjb2xsZWN0aW9uOiBhcmdzLmNvbGxlY3Rpb24/LmNvbmZpZyxcbiAgICAgIG9wZXJhdGlvbjogJ2xvZ2luJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9KVxuXG4gICAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aC5yZW1vdmVUb2tlbkZyb21SZXNwb25zZXMpIHtcbiAgICAgIGRlbGV0ZSByZXN1bHQudG9rZW5cbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKGFyZ3MucmVxKVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5cbiJdLCJuYW1lcyI6WyJsb2dpbiIsImluY29taW5nQXJncyIsImFyZ3MiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJyZXEiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwiY29udGV4dCIsIm9wZXJhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29sbGVjdGlvbkNvbmZpZyIsImRhdGEiLCJkZXB0aCIsIm92ZXJyaWRlQWNjZXNzIiwiZmFsbGJhY2tMb2NhbGUiLCJsb2NhbGUiLCJwYXlsb2FkIiwic2VjcmV0Iiwic2hvd0hpZGRlbkZpZWxkcyIsImVtYWlsIiwidW5zYW5pdGl6ZWRFbWFpbCIsInBhc3N3b3JkIiwidHJpbSIsIlZhbGlkYXRpb25FcnJvciIsImZpZWxkIiwibWVzc2FnZSIsImkxOG4iLCJ0IiwidG9Mb3dlckNhc2UiLCJ1c2VyIiwiZGIiLCJmaW5kT25lIiwic2x1ZyIsIndoZXJlIiwiZXF1YWxzIiwiYXV0aCIsInZlcmlmeSIsIl92ZXJpZmllZCIsIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJpc0xvY2tlZCIsIkRhdGUiLCJsb2NrVW50aWwiLCJnZXRUaW1lIiwiTG9ja2VkQXV0aCIsImF1dGhSZXN1bHQiLCJhdXRoZW50aWNhdGVMb2NhbFN0cmF0ZWd5IiwiZG9jIiwic2FuaXRpemVJbnRlcm5hbEZpZWxkcyIsIm1heExvZ2luQXR0ZW1wdHNFbmFibGVkIiwibWF4TG9naW5BdHRlbXB0cyIsImluY3JlbWVudExvZ2luQXR0ZW1wdHMiLCJjb21taXRUcmFuc2FjdGlvbiIsInJlc2V0TG9naW5BdHRlbXB0cyIsImZpZWxkc1RvU2lnbiIsImdldEZpZWxkc1RvU2lnbiIsImJlZm9yZUxvZ2luIiwidG9rZW4iLCJqd3QiLCJzaWduIiwiZXhwaXJlc0luIiwidG9rZW5FeHBpcmF0aW9uIiwicmVzIiwiY29va2llT3B0aW9ucyIsImRvbWFpbiIsInVuZGVmaW5lZCIsImV4cGlyZXMiLCJnZXRDb29raWVFeHBpcmF0aW9uIiwiaHR0cE9ubHkiLCJwYXRoIiwic2FtZVNpdGUiLCJjb29raWVzIiwic2VjdXJlIiwiY29va2llIiwiY29va2llUHJlZml4IiwiYWZ0ZXJMb2dpbiIsImFmdGVyUmVhZCIsImRyYWZ0IiwiZ2xvYmFsIiwicmVzdWx0IiwiZXhwIiwiZGVjb2RlIiwiYnVpbGRBZnRlck9wZXJhdGlvbiIsInJlbW92ZVRva2VuRnJvbVJlc3BvbnNlcyIsImVycm9yIiwia2lsbFRyYW5zYWN0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEwUkE7OztlQUFBOzs7cUVBeFJnQjt1QkFPb0I7d0JBQzZCOzJCQUN2QzttQ0FDUTs0RUFDRjtpQ0FDQTtpQ0FDQTsrRUFDRztpRUFDZDs4QkFDcUI7d0NBQ0g7b0NBQ0o7aUNBQ0g7Ozs7OztBQXFCaEMsZUFBZUEsTUFDYkMsWUFBdUI7SUFFdkIsSUFBSUMsT0FBT0Q7SUFFWCxJQUFJO1FBQ0YsTUFBTUUsZUFBZSxNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDRixLQUFLRyxHQUFHO1FBRW5ELHdDQUF3QztRQUN4QywrQkFBK0I7UUFDL0Isd0NBQXdDO1FBRXhDLE1BQU1ILEtBQUtJLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUNDLGVBQWUsQ0FBQ0MsTUFBTSxD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