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
const _errors = require("../../errors");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
const _executeAccess = /*#__PURE__*/ _interop_require_default(require("../executeAccess"));
const _resetLoginAttempts = require("../strategies/local/resetLoginAttempts");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function unlock(args) {
    if (!Object.prototype.hasOwnProperty.call(args.data, 'email')) {
        throw new _errors.APIError('Missing email.');
    }
    const { collection: { config: collectionConfig }, overrideAccess, req: { locale, payload }, req } = args;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        if (!overrideAccess) {
            await (0, _executeAccess.default)({
                req
            }, collectionConfig.access.unlock);
        }
        const options = {
            ...args
        };
        const { data } = options;
        // /////////////////////////////////////
        // Unlock
        // /////////////////////////////////////
        if (!data.email) {
            throw new _errors.APIError('Missing email.');
        }
        const user = await req.payload.db.findOne({
            collection: collectionConfig.slug,
            locale,
            req,
            where: {
                email: {
                    equals: data.email.toLowerCase()
                }
            }
        });
        let result;
        if (user) {
            await (0, _resetLoginAttempts.resetLoginAttempts)({
                collection: collectionConfig,
                doc: user,
                payload: req.payload,
                req
            });
            result = true;
        } else {
            result = null;
        }
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return result;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(req);
        throw error;
    }
}
const _default = unlock;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvdW5sb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycydcbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nXG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi9leGVjdXRlQWNjZXNzJ1xuaW1wb3J0IHsgcmVzZXRMb2dpbkF0dGVtcHRzIH0gZnJvbSAnLi4vc3RyYXRlZ2llcy9sb2NhbC9yZXNldExvZ2luQXR0ZW1wdHMnXG5cbmV4cG9ydCB0eXBlIEFyZ3MgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgZGF0YToge1xuICAgIGVtYWlsOiBzdHJpbmdcbiAgfVxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxufVxuXG5hc3luYyBmdW5jdGlvbiB1bmxvY2soYXJnczogQXJncyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmdzLmRhdGEsICdlbWFpbCcpKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKCdNaXNzaW5nIGVtYWlsLicpXG4gIH1cblxuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjogeyBjb25maWc6IGNvbGxlY3Rpb25Db25maWcgfSxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICByZXE6IHsgbG9jYWxlLCBwYXlsb2FkIH0sXG4gICAgcmVxLFxuICB9ID0gYXJnc1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgICBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGNvbGxlY3Rpb25Db25maWcuYWNjZXNzLnVubG9jaylcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0geyAuLi5hcmdzIH1cblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFVubG9ja1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmICghZGF0YS5lbWFpbCkge1xuICAgICAgdGhyb3cgbmV3IEFQSUVycm9yKCdNaXNzaW5nIGVtYWlsLicpXG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLmZpbmRPbmUoe1xuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgbG9jYWxlLFxuICAgICAgcmVxLFxuICAgICAgd2hlcmU6IHsgZW1haWw6IHsgZXF1YWxzOiBkYXRhLmVtYWlsLnRvTG93ZXJDYXNlKCkgfSB9LFxuICAgIH0pXG5cbiAgICBsZXQgcmVzdWx0XG5cbiAgICBpZiAodXNlcikge1xuICAgICAgYXdhaXQgcmVzZXRMb2dpbkF0dGVtcHRzKHtcbiAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgZG9jOiB1c2VyLFxuICAgICAgICBwYXlsb2FkOiByZXEucGF5bG9hZCxcbiAgICAgICAgcmVxLFxuICAgICAgfSlcbiAgICAgIHJlc3VsdCA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IGNvbW1pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdW5sb2NrXG4iXSwibmFtZXMiOlsidW5sb2NrIiwiYXJncyIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRhdGEiLCJBUElFcnJvciIsImNvbGxlY3Rpb24iLCJjb25maWciLCJjb2xsZWN0aW9uQ29uZmlnIiwib3ZlcnJpZGVBY2Nlc3MiLCJyZXEiLCJsb2NhbGUiLCJwYXlsb2FkIiwic2hvdWxkQ29tbWl0IiwiaW5pdFRyYW5zYWN0aW9uIiwiZXhlY3V0ZUFjY2VzcyIsImFjY2VzcyIsIm9wdGlvbnMiLCJlbWFpbCIsInVzZXIiLCJkYiIsImZpbmRPbmUiLCJzbHVnIiwid2hlcmUiLCJlcXVhbHMiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsInJlc2V0TG9naW5BdHRlbXB0cyIsImRvYyIsImNvbW1pdFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJraWxsVHJhbnNhY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW9GQTs7O2VBQUE7Ozt3QkFqRnlCO21DQUNTO2lDQUNGO2lDQUNBO3NFQUNOO29DQUNTOzs7Ozs7QUFXbkMsZUFBZUEsT0FBT0MsSUFBVTtJQUM5QixJQUFJLENBQUNDLE9BQU9DLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNKLEtBQUtLLElBQUksRUFBRSxVQUFVO1FBQzdELE1BQU0sSUFBSUMsZ0JBQVEsQ0FBQztJQUNyQjtJQUVBLE1BQU0sRUFDSkMsWUFBWSxFQUFFQyxRQUFRQyxnQkFBZ0IsRUFBRSxFQUN4Q0MsY0FBYyxFQUNkQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQ3hCRixHQUFHLEVBQ0osR0FBR1g7SUFFSixJQUFJO1FBQ0YsTUFBTWMsZUFBZSxNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDSjtRQUUzQyx3Q0FBd0M7UUFDeEMsU0FBUztRQUNULHdDQUF3QztRQUV4QyxJQUFJLENBQUNELGdCQUFnQjtZQUNuQixNQUFNTSxJQUFBQSxzQkFBYSxFQUFDO2dCQUFFTDtZQUFJLEdBQUdGLGlCQUFpQlEsTUFBTSxDQUFDbEIsTUFBTTtRQUM3RDtRQUVBLE1BQU1tQixVQUFVO1lBQUUsR0FBR2xCLElBQUk7UUFBQztRQUUxQixNQUFNLEVBQUVLLElBQUksRUFBRSxHQUFHYTtRQUVqQix3Q0FBd0M7UUFDeEMsU0FBUztRQUNULHdDQUF3QztRQUV4QyxJQUFJLENBQUNiLEtBQUtjLEtBQUssRUFBRTtZQUNmLE1BQU0sSUFBSWIsZ0JBQVEsQ0FBQztRQUNyQjtRQUVBLE1BQU1jLE9BQU8sTUFBTVQsSUFBSUUsT0FBTyxDQUFDUSxFQUFFLENBQUNDLE9BQU8sQ0FBQztZQUN4Q2YsWUFBWUUsaUJBQWlCYyxJQUFJO1lBQ2pDWDtZQUNBRDtZQUNBYSxPQUFPO2dCQUFFTCxPQUFPO29CQUFFTSxRQUFRcEIsS0FBS2MsS0FBSyxDQUFDTyxXQUFXO2dCQUFHO1lBQUU7UUFDdkQ7UUFFQSxJQUFJQztRQUVKLElBQUlQLE1BQU07WUFDUixNQUFNUSxJQUFBQSxzQ0FBa0IsRUFBQztnQkFDdkJyQixZQUFZRTtnQkFDWm9CLEtBQUtUO2dCQUNMUCxTQUFTRixJQUFJRSxPQUFPO2dCQUNwQkY7WUFDRjtZQUNBZ0IsU0FBUztRQUNYLE9BQU87WUFDTEEsU0FBUztRQUNYO1FBRUEsSUFBSWIsY0FBYyxNQUFNZ0IsSUFBQUEsb0NBQWlCLEVBQUNuQjtRQUUxQyxPQUFPZ0I7SUFDVCxFQUFFLE9BQU9JLE9BQWdCO1FBQ3ZCLE1BQU1DLElBQUFBLGdDQUFlLEVBQUNyQjtRQUN0QixNQUFNb0I7SUFDUjtBQUNGO01BRUEsV0FBZWhDIn0=