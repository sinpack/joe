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
const _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
const _utils = require("../../collections/operations/utils");
const _errors = require("../../errors");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function forgotPassword(incomingArgs) {
    if (!Object.prototype.hasOwnProperty.call(incomingArgs.data, 'email')) {
        throw new _errors.APIError('Missing email.', 400);
    }
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
                operation: 'forgotPassword',
                req: args.req
            }) || args;
        }, Promise.resolve());
        const { collection: { config: collectionConfig }, data, disableEmail, expiration, req: { payload: { config, emailOptions, sendEmail: email }, payload, t }, req } = args;
        // /////////////////////////////////////
        // Forget password
        // /////////////////////////////////////
        let token = _crypto.default.randomBytes(20);
        token = token.toString('hex');
        if (!data.email) {
            throw new _errors.APIError('Missing email.');
        }
        let user = await payload.db.findOne({
            collection: collectionConfig.slug,
            req,
            where: {
                email: {
                    equals: data.email.toLowerCase()
                }
            }
        });
        if (!user) return null;
        user.resetPasswordToken = token;
        user.resetPasswordExpiration = new Date(expiration || Date.now() + 3600000).toISOString() // 1 hour
        ;
        user = await payload.update({
            id: user.id,
            collection: collectionConfig.slug,
            data: user,
            req
        });
        if (!disableEmail) {
            const serverURL = config.serverURL !== null && config.serverURL !== '' ? config.serverURL : `${req.protocol}://${req.get('host')}`;
            let html = `${t('authentication:youAreReceivingResetPassword')}
    <a href="${serverURL}${config.routes.admin}/reset/${token}">
     ${serverURL}${config.routes.admin}/reset/${token}
    </a>
    ${t('authentication:youDidNotRequestPassword')}`;
            if (typeof collectionConfig.auth.forgotPassword.generateEmailHTML === 'function') {
                html = await collectionConfig.auth.forgotPassword.generateEmailHTML({
                    req,
                    token,
                    user
                });
            }
            let subject = t('authentication:resetYourPassword');
            if (typeof collectionConfig.auth.forgotPassword.generateEmailSubject === 'function') {
                subject = await collectionConfig.auth.forgotPassword.generateEmailSubject({
                    req,
                    token,
                    user
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            email({
                from: `"${emailOptions.fromName}" <${emailOptions.fromAddress}>`,
                html,
                subject,
                to: data.email
            });
        }
        // /////////////////////////////////////
        // afterForgotPassword - Collection
        // /////////////////////////////////////
        await collectionConfig.hooks.afterForgotPassword.reduce(async (priorHook, hook)=>{
            await priorHook;
            await hook({
                args,
                collection: args.collection?.config,
                context: req.context
            });
        }, Promise.resolve());
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        token = await (0, _utils.buildAfterOperation)({
            args,
            collection: args.collection?.config,
            operation: 'forgotPassword',
            result: token
        });
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return token;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(args.req);
        throw error;
    }
}
const _default = forgotPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvZm9yZ290UGFzc3dvcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgeyBidWlsZEFmdGVyT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvb3BlcmF0aW9ucy91dGlscydcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzJ1xuaW1wb3J0IHsgY29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbWl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIGRhdGE6IHtcbiAgICBba2V5OiBzdHJpbmddOiB1bmtub3duXG4gICAgZW1haWw6IHN0cmluZ1xuICB9XG4gIGRpc2FibGVFbWFpbD86IGJvb2xlYW5cbiAgZXhwaXJhdGlvbj86IG51bWJlclxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG59XG5cbmV4cG9ydCB0eXBlIFJlc3VsdCA9IHN0cmluZ1xuXG5hc3luYyBmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZChpbmNvbWluZ0FyZ3M6IEFyZ3VtZW50cyk6IFByb21pc2U8bnVsbCB8IHN0cmluZz4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbmNvbWluZ0FyZ3MuZGF0YSwgJ2VtYWlsJykpIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoJ01pc3NpbmcgZW1haWwuJywgNDAwKVxuICB9XG5cbiAgbGV0IGFyZ3MgPSBpbmNvbWluZ0FyZ3NcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihhcmdzLnJlcSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICBhcmdzID1cbiAgICAgICAgKGF3YWl0IGhvb2soe1xuICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgY29sbGVjdGlvbjogYXJncy5jb2xsZWN0aW9uPy5jb25maWcsXG4gICAgICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICAgICAgICBvcGVyYXRpb246ICdmb3Jnb3RQYXNzd29yZCcsXG4gICAgICAgICAgcmVxOiBhcmdzLnJlcSxcbiAgICAgICAgfSkpIHx8IGFyZ3NcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIGNvbGxlY3Rpb246IHsgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnIH0sXG4gICAgICBkYXRhLFxuICAgICAgZGlzYWJsZUVtYWlsLFxuICAgICAgZXhwaXJhdGlvbixcbiAgICAgIHJlcToge1xuICAgICAgICBwYXlsb2FkOiB7IGNvbmZpZywgZW1haWxPcHRpb25zLCBzZW5kRW1haWw6IGVtYWlsIH0sXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHQsXG4gICAgICB9LFxuICAgICAgcmVxLFxuICAgIH0gPSBhcmdzXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRm9yZ2V0IHBhc3N3b3JkXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgbGV0IHRva2VuOiBCdWZmZXIgfCBzdHJpbmcgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMjApXG4gICAgdG9rZW4gPSB0b2tlbi50b1N0cmluZygnaGV4JylcblxuICAgIHR5cGUgVXNlckRvYyA9IHtcbiAgICAgIGlkOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgIHJlc2V0UGFzc3dvcmRFeHBpcmF0aW9uPzogc3RyaW5nXG4gICAgICByZXNldFBhc3N3b3JkVG9rZW4/OiBzdHJpbmdcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEuZW1haWwpIHtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyBlbWFpbC4nKVxuICAgIH1cblxuICAgIGxldCB1c2VyID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kT25lPFVzZXJEb2M+KHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHJlcSxcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiB7IGVxdWFsczogZGF0YS5lbWFpbC50b0xvd2VyQ2FzZSgpIH0gfSxcbiAgICB9KVxuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbFxuXG4gICAgdXNlci5yZXNldFBhc3N3b3JkVG9rZW4gPSB0b2tlblxuICAgIHVzZXIucmVzZXRQYXNzd29yZEV4cGlyYXRpb24gPSBuZXcgRGF0ZShleHBpcmF0aW9uIHx8IERhdGUubm93KCkgKyAzNjAwMDAwKS50b0lTT1N0cmluZygpIC8vIDEgaG91clxuXG4gICAgdXNlciA9IGF3YWl0IHBheWxvYWQudXBkYXRlKHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgZGF0YTogdXNlcixcbiAgICAgIHJlcSxcbiAgICB9KVxuXG4gICAgaWYgKCFkaXNhYmxlRW1haWwpIHtcbiAgICAgIGNvbnN0IHNlcnZlclVSTCA9XG4gICAgICAgIGNvbmZpZy5zZXJ2ZXJVUkwgIT09IG51bGwgJiYgY29uZmlnLnNlcnZlclVSTCAhPT0gJydcbiAgICAgICAgICA/IGNvbmZpZy5zZXJ2ZXJVUkxcbiAgICAgICAgICA6IGAke3JlcS5wcm90b2NvbH06Ly8ke3JlcS5nZXQoJ2hvc3QnKX1gXG5cbiAgICAgIGxldCBodG1sID0gYCR7dCgnYXV0aGVudGljYXRpb246eW91QXJlUmVjZWl2aW5nUmVzZXRQYXNzd29yZCcpfVxuICAgIDxhIGhyZWY9XCIke3NlcnZlclVSTH0ke2NvbmZpZy5yb3V0ZXMuYWRtaW59L3Jlc2V0LyR7dG9rZW59XCI+XG4gICAgICR7c2VydmVyVVJMfSR7Y29uZmlnLnJvdXRlcy5hZG1pbn0vcmVzZXQvJHt0b2tlbn1cbiAgICA8L2E+XG4gICAgJHt0KCdhdXRoZW50aWNhdGlvbjp5b3VEaWROb3RSZXF1ZXN0UGFzc3dvcmQnKX1gXG5cbiAgICAgIGlmICh0eXBlb2YgY29sbGVjdGlvbkNvbmZpZy5hdXRoLmZvcmdvdFBhc3N3b3JkLmdlbmVyYXRlRW1haWxIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGh0bWwgPSBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmF1dGguZm9yZ290UGFzc3dvcmQuZ2VuZXJhdGVFbWFpbEhUTUwoe1xuICAgICAgICAgIHJlcSxcbiAgICAgICAgICB0b2tlbixcbiAgICAgICAgICB1c2VyLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBsZXQgc3ViamVjdCA9IHQoJ2F1dGhlbnRpY2F0aW9uOnJlc2V0WW91clBhc3N3b3JkJylcblxuICAgICAgaWYgKHR5cGVvZiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguZm9yZ290UGFzc3dvcmQuZ2VuZXJhdGVFbWFpbFN1YmplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3ViamVjdCA9IGF3YWl0IGNvbGxlY3Rpb25Db25maWcuYXV0aC5mb3Jnb3RQYXNzd29yZC5nZW5lcmF0ZUVtYWlsU3ViamVjdCh7XG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIHVzZXIsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgIGVtYWlsKHtcbiAgICAgICAgZnJvbTogYFwiJHtlbWFpbE9wdGlvbnMuZnJvbU5hbWV9XCIgPCR7ZW1haWxPcHRpb25zLmZyb21BZGRyZXNzfT5gLFxuICAgICAgICBodG1sLFxuICAgICAgICBzdWJqZWN0LFxuICAgICAgICB0bzogZGF0YS5lbWFpbCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyRm9yZ290UGFzc3dvcmQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlckZvcmdvdFBhc3N3b3JkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2tcbiAgICAgIGF3YWl0IGhvb2soeyBhcmdzLCBjb2xsZWN0aW9uOiBhcmdzLmNvbGxlY3Rpb24/LmNvbmZpZywgY29udGV4dDogcmVxLmNvbnRleHQgfSlcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlck9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB0b2tlbiA9IGF3YWl0IGJ1aWxkQWZ0ZXJPcGVyYXRpb24oe1xuICAgICAgYXJncyxcbiAgICAgIGNvbGxlY3Rpb246IGFyZ3MuY29sbGVjdGlvbj8uY29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAnZm9yZ290UGFzc3dvcmQnLFxuICAgICAgcmVzdWx0OiB0b2tlbixcbiAgICB9KVxuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgY29tbWl0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgcmV0dXJuIHRva2VuXG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKGFyZ3MucmVxKVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yZ290UGFzc3dvcmRcbiJdLCJuYW1lcyI6WyJmb3Jnb3RQYXNzd29yZCIsImluY29taW5nQXJncyIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRhdGEiLCJBUElFcnJvciIsImFyZ3MiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJyZXEiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwiY29udGV4dCIsIm9wZXJhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29sbGVjdGlvbkNvbmZpZyIsImRpc2FibGVFbWFpbCIsImV4cGlyYXRpb24iLCJwYXlsb2FkIiwiZW1haWxPcHRpb25zIiwic2VuZEVtYWlsIiwiZW1haWwiLCJ0IiwidG9rZW4iLCJjcnlwdG8iLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwidXNlciIsImRiIiwiZmluZE9uZSIsInNsdWciLCJ3aGVyZSIsImVxdWFscyIsInRvTG93ZXJDYXNlIiwicmVzZXRQYXNzd29yZFRva2VuIiwicmVzZXRQYXNzd29yZEV4cGlyYXRpb24iLCJEYXRlIiwibm93IiwidG9JU09TdHJpbmciLCJ1cGRhdGUiLCJpZCIsInNlcnZlclVSTCIsInByb3RvY29sIiwiZ2V0IiwiaHRtbCIsInJvdXRlcyIsImFkbWluIiwiYXV0aCIsImdlbmVyYXRlRW1haWxIVE1MIiwic3ViamVjdCIsImdlbmVyYXRlRW1haWxTdWJqZWN0IiwiZnJvbSIsImZyb21OYW1lIiwiZnJvbUFkZHJlc3MiLCJ0byIsImFmdGVyRm9yZ290UGFzc3dvcmQiLCJidWlsZEFmdGVyT3BlcmF0aW9uIiwicmVzdWx0IiwiY29tbWl0VHJhbnNhY3Rpb24iLCJlcnJvciIsImtpbGxUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBdUtBOzs7ZUFBQTs7OytEQXZLbUI7dUJBS2lCO3dCQUNYO21DQUNTO2lDQUNGO2lDQUNBOzs7Ozs7QUFlaEMsZUFBZUEsZUFBZUMsWUFBdUI7SUFDbkQsSUFBSSxDQUFDQyxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDSixhQUFhSyxJQUFJLEVBQUUsVUFBVTtRQUNyRSxNQUFNLElBQUlDLGdCQUFRLENBQUMsa0JBQWtCO0lBQ3ZDO0lBRUEsSUFBSUMsT0FBT1A7SUFFWCxJQUFJO1FBQ0YsTUFBTVEsZUFBZSxNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDRixLQUFLRyxHQUFHO1FBRW5ELHdDQUF3QztRQUN4QywrQkFBK0I7UUFDL0Isd0NBQXdDO1FBRXhDLE1BQU1ILEtBQUtJLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUNDLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDLE9BQU9DLFdBQVdDO1lBQzFFLE1BQU1EO1lBRU5ULE9BQ0UsQUFBQyxN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