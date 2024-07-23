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
const _errors = require("../../errors");
const _commitTransaction = require("../../utilities/commitTransaction");
const _getCookieExpiration = /*#__PURE__*/ _interop_require_default(require("../../utilities/getCookieExpiration"));
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _authenticate = require("../strategies/local/authenticate");
const _generatePasswordSaltHash = require("../strategies/local/generatePasswordSaltHash");
const _getFieldsToSign = require("./getFieldsToSign");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function resetPassword(args) {
    if (!Object.prototype.hasOwnProperty.call(args.data, 'token') || !Object.prototype.hasOwnProperty.call(args.data, 'password')) {
        throw new _errors.APIError('Missing required data.');
    }
    const { collection: { config: collectionConfig }, data, depth, overrideAccess, req: { payload: { config, secret }, payload }, req } = args;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        // /////////////////////////////////////
        // Reset Password
        // /////////////////////////////////////
        const user = await payload.db.findOne({
            collection: collectionConfig.slug,
            req,
            where: {
                resetPasswordExpiration: {
                    greater_than: new Date()
                },
                resetPasswordToken: {
                    equals: data.token
                }
            }
        });
        if (!user) throw new _errors.APIError('Token is either invalid or has expired.');
        // TODO: replace this method
        const { hash, salt } = await (0, _generatePasswordSaltHash.generatePasswordSaltHash)({
            password: data.password
        });
        user.salt = salt;
        user.hash = hash;
        user.resetPasswordExpiration = new Date().toISOString();
        if (collectionConfig.auth.verify) {
            user._verified = true;
        }
        const doc = await payload.db.updateOne({
            id: user.id,
            collection: collectionConfig.slug,
            data: user,
            req
        });
        await (0, _authenticate.authenticateLocalStrategy)({
            doc,
            password: data.password
        });
        const fieldsToSign = (0, _getFieldsToSign.getFieldsToSign)({
            collectionConfig,
            email: user.email,
            user
        });
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
        const fullUser = await payload.findByID({
            id: user.id,
            collection: collectionConfig.slug,
            depth,
            overrideAccess,
            req
        });
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return {
            token: collectionConfig.auth.removeTokenFromResponses ? undefined : token,
            user: fullUser
        };
    } catch (error) {
        await (0, _killTransaction.killTransaction)(req);
        throw error;
    }
}
const _default = resetPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvcmVzZXRQYXNzd29yZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycydcbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IGdldENvb2tpZUV4cGlyYXRpb24gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldENvb2tpZUV4cGlyYXRpb24nXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZUxvY2FsU3RyYXRlZ3kgfSBmcm9tICcuLi9zdHJhdGVnaWVzL2xvY2FsL2F1dGhlbnRpY2F0ZSdcbmltcG9ydCB7IGdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvbG9jYWwvZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoJ1xuaW1wb3J0IHsgZ2V0RmllbGRzVG9TaWduIH0gZnJvbSAnLi9nZXRGaWVsZHNUb1NpZ24nXG5cbmV4cG9ydCB0eXBlIFJlc3VsdCA9IHtcbiAgdG9rZW4/OiBzdHJpbmdcbiAgdXNlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIGRhdGE6IHtcbiAgICBwYXNzd29yZDogc3RyaW5nXG4gICAgdG9rZW46IHN0cmluZ1xuICB9XG4gIGRlcHRoPzogbnVtYmVyXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHJlcz86IFJlc3BvbnNlXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoYXJnczogQXJndW1lbnRzKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgaWYgKFxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJncy5kYXRhLCAndG9rZW4nKSB8fFxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJncy5kYXRhLCAncGFzc3dvcmQnKVxuICApIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgZGF0YS4nKVxuICB9XG5cbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IHsgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnIH0sXG4gICAgZGF0YSxcbiAgICBkZXB0aCxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICByZXE6IHtcbiAgICAgIHBheWxvYWQ6IHsgY29uZmlnLCBzZWNyZXQgfSxcbiAgICAgIHBheWxvYWQsXG4gICAgfSxcbiAgICByZXEsXG4gIH0gPSBhcmdzXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJlc2V0IFBhc3N3b3JkXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHBheWxvYWQuZGIuZmluZE9uZTxhbnk+KHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHJlcSxcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHJlc2V0UGFzc3dvcmRFeHBpcmF0aW9uOiB7IGdyZWF0ZXJfdGhhbjogbmV3IERhdGUoKSB9LFxuICAgICAgICByZXNldFBhc3N3b3JkVG9rZW46IHsgZXF1YWxzOiBkYXRhLnRva2VuIH0sXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBBUElFcnJvcignVG9rZW4gaXMgZWl0aGVyIGludmFsaWQgb3IgaGFzIGV4cGlyZWQuJylcblxuICAgIC8vIFRPRE86IHJlcGxhY2UgdGhpcyBtZXRob2RcbiAgICBjb25zdCB7IGhhc2gsIHNhbHQgfSA9IGF3YWl0IGdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCh7IHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH0pXG5cbiAgICB1c2VyLnNhbHQgPSBzYWx0XG4gICAgdXNlci5oYXNoID0gaGFzaFxuXG4gICAgdXNlci5yZXNldFBhc3N3b3JkRXhwaXJhdGlvbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuXG4gICAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aC52ZXJpZnkpIHtcbiAgICAgIHVzZXIuX3ZlcmlmaWVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IHBheWxvYWQuZGIudXBkYXRlT25lKHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgZGF0YTogdXNlcixcbiAgICAgIHJlcSxcbiAgICB9KVxuXG4gICAgYXdhaXQgYXV0aGVudGljYXRlTG9jYWxTdHJhdGVneSh7IGRvYywgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfSlcblxuICAgIGNvbnN0IGZpZWxkc1RvU2lnbiA9IGdldEZpZWxkc1RvU2lnbih7XG4gICAgICBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICB1c2VyLFxuICAgIH0pXG5cbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKGZpZWxkc1RvU2lnbiwgc2VjcmV0LCB7XG4gICAgICBleHBpcmVzSW46IGNvbGxlY3Rpb25Db25maWcuYXV0aC50b2tlbkV4cGlyYXRpb24sXG4gICAgfSlcblxuICAgIGlmIChhcmdzLnJlcykge1xuICAgICAgY29uc3QgY29va2llT3B0aW9ucyA9IHtcbiAgICAgICAgZG9tYWluOiB1bmRlZmluZWQsXG4gICAgICAgIGV4cGlyZXM6IGdldENvb2tpZUV4cGlyYXRpb24oY29sbGVjdGlvbkNvbmZpZy5hdXRoLnRva2VuRXhwaXJhdGlvbiksXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIHNhbWVTaXRlOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguY29va2llcy5zYW1lU2l0ZSxcbiAgICAgICAgc2VjdXJlOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguY29va2llcy5zZWN1cmUsXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsZWN0aW9uQ29uZmlnLmF1dGguY29va2llcy5kb21haW4pXG4gICAgICAgIGNvb2tpZU9wdGlvbnMuZG9tYWluID0gY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluXG5cbiAgICAgIGFyZ3MucmVzLmNvb2tpZShgJHtjb25maWcuY29va2llUHJlZml4fS10b2tlbmAsIHRva2VuLCBjb29raWVPcHRpb25zKVxuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxVc2VyID0gYXdhaXQgcGF5bG9hZC5maW5kQnlJRCh7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIGRlcHRoLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgfSlcbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBjb21taXRUcmFuc2FjdGlvbihyZXEpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IGNvbGxlY3Rpb25Db25maWcuYXV0aC5yZW1vdmVUb2tlbkZyb21SZXNwb25zZXMgPyB1bmRlZmluZWQgOiB0b2tlbixcbiAgICAgIHVzZXI6IGZ1bGxVc2VyLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzZXRQYXNzd29yZFxuIl0sIm5hbWVzIjpbInJlc2V0UGFzc3dvcmQiLCJhcmdzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGF0YSIsIkFQSUVycm9yIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsImNvbGxlY3Rpb25Db25maWciLCJkZXB0aCIsIm92ZXJyaWRlQWNjZXNzIiwicmVxIiwicGF5bG9hZCIsInNlY3JldCIsInNob3VsZENvbW1pdCIsImluaXRUcmFuc2FjdGlvbiIsInVzZXIiLCJkYiIsImZpbmRPbmUiLCJzbHVnIiwid2hlcmUiLCJyZXNldFBhc3N3b3JkRXhwaXJhdGlvbiIsImdyZWF0ZXJfdGhhbiIsIkRhdGUiLCJyZXNldFBhc3N3b3JkVG9rZW4iLCJlcXVhbHMiLCJ0b2tlbiIsImhhc2giLCJzYWx0IiwiZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoIiwicGFzc3dvcmQiLCJ0b0lTT1N0cmluZyIsImF1dGgiLCJ2ZXJpZnkiLCJfdmVyaWZpZWQiLCJkb2MiLCJ1cGRhdGVPbmUiLCJpZCIsImF1dGhlbnRpY2F0ZUxvY2FsU3RyYXRlZ3kiLCJmaWVsZHNUb1NpZ24iLCJnZXRGaWVsZHNUb1NpZ24iLCJlbWFpbCIsImp3dCIsInNpZ24iLCJleHBpcmVzSW4iLCJ0b2tlbkV4cGlyYXRpb24iLCJyZXMiLCJjb29raWVPcHRpb25zIiwiZG9tYWluIiwidW5kZWZpbmVkIiwiZXhwaXJlcyIsImdldENvb2tpZUV4cGlyYXRpb24iLCJodHRwT25seSIsInBhdGgiLCJzYW1lU2l0ZSIsImNvb2tpZXMiLCJzZWN1cmUiLCJjb29raWUiLCJjb29raWVQcmVmaXgiLCJmdWxsVXNlciIsImZpbmRCeUlEIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJyZW1vdmVUb2tlbkZyb21SZXNwb25zZXMiLCJlcnJvciIsImtpbGxUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF5SUE7OztlQUFBOzs7cUVBdklnQjt3QkFLUzttQ0FDUzs0RUFDRjtpQ0FDQTtpQ0FDQTs4QkFDVTswQ0FDRDtpQ0FDVDs7Ozs7O0FBbUJoQyxlQUFlQSxjQUFjQyxJQUFlO0lBQzFDLElBQ0UsQ0FBQ0MsT0FBT0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osS0FBS0ssSUFBSSxFQUFFLFlBQ2pELENBQUNKLE9BQU9DLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNKLEtBQUtLLElBQUksRUFBRSxhQUNqRDtRQUNBLE1BQU0sSUFBSUMsZ0JBQVEsQ0FBQztJQUNyQjtJQUVBLE1BQU0sRUFDSkMsWUFBWSxFQUFFQyxRQUFRQyxnQkFBZ0IsRUFBRSxFQUN4Q0osSUFBSSxFQUNKSyxLQUFLLEVBQ0xDLGNBQWMsRUFDZEMsS0FBSyxFQUNIQyxTQUFTLEVBQUVMLE1BQU0sRUFBRU0sTUFBTSxFQUFFLEVBQzNCRCxPQUFPLEVBQ1IsRUFDREQsR0FBRyxFQUNKLEdBQUdaO0lBRUosSUFBSTtRQUNGLE1BQU1lLGVBQWUsTUFBTUMsSUFBQUEsZ0NBQWUsRUFBQ0o7UUFFM0Msd0NBQXdDO1FBQ3hDLGlCQUFpQjtRQUNqQix3Q0FBd0M7UUFFeEMsTUFBTUssT0FBTyxNQUFNSixRQUFRSyxFQUFFLENB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