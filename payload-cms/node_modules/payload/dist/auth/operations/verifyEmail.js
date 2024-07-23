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
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _errors = require("../../errors");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function verifyEmail(args) {
    const { collection, req, token } = args;
    if (!Object.prototype.hasOwnProperty.call(args, 'token')) {
        throw new _errors.APIError('Missing required data.', _httpstatus.default.BAD_REQUEST);
    }
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        const user = await req.payload.db.findOne({
            collection: collection.config.slug,
            req,
            where: {
                _verificationToken: {
                    equals: token
                }
            }
        });
        if (!user) throw new _errors.APIError('Verification token is invalid.', _httpstatus.default.BAD_REQUEST);
        if (user && user._verified === true) throw new _errors.APIError('This account has already been activated.', _httpstatus.default.ACCEPTED);
        await req.payload.db.updateOne({
            id: user.id,
            collection: collection.config.slug,
            data: {
                ...user,
                _verificationToken: null,
                _verified: true
            },
            req
        });
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return true;
    } catch (error) {
        await (0, _killTransaction.killTransaction)(req);
        throw error;
    }
}
const _default = verifyEmail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvdmVyaWZ5RW1haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycydcbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbidcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nXG5cbmV4cG9ydCB0eXBlIEFyZ3MgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICB0b2tlbjogc3RyaW5nXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUVtYWlsKGFyZ3M6IEFyZ3MpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uLCByZXEsIHRva2VuIH0gPSBhcmdzXG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3MsICd0b2tlbicpKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGRhdGEuJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVClcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXEucGF5bG9hZC5kYi5maW5kT25lPGFueT4oe1xuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbi5jb25maWcuc2x1ZyxcbiAgICAgIHJlcSxcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIF92ZXJpZmljYXRpb25Ub2tlbjogeyBlcXVhbHM6IHRva2VuIH0sXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBBUElFcnJvcignVmVyaWZpY2F0aW9uIHRva2VuIGlzIGludmFsaWQuJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVClcbiAgICBpZiAodXNlciAmJiB1c2VyLl92ZXJpZmllZCA9PT0gdHJ1ZSlcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcignVGhpcyBhY2NvdW50IGhhcyBhbHJlYWR5IGJlZW4gYWN0aXZhdGVkLicsIGh0dHBTdGF0dXMuQUNDRVBURUQpXG5cbiAgICBhd2FpdCByZXEucGF5bG9hZC5kYi51cGRhdGVPbmUoe1xuICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLmNvbmZpZy5zbHVnLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi51c2VyLFxuICAgICAgICBfdmVyaWZpY2F0aW9uVG9rZW46IG51bGwsXG4gICAgICAgIF92ZXJpZmllZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICByZXEsXG4gICAgfSlcblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IGNvbW1pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSlcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeUVtYWlsXG4iXSwibmFtZXMiOlsidmVyaWZ5RW1haWwiLCJhcmdzIiwiY29sbGVjdGlvbiIsInJlcSIsInRva2VuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiQVBJRXJyb3IiLCJodHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJzaG91bGRDb21taXQiLCJpbml0VHJhbnNhY3Rpb24iLCJ1c2VyIiwicGF5bG9hZCIsImRiIiwiZmluZE9uZSIsImNvbmZpZyIsInNsdWciLCJ3aGVyZSIsIl92ZXJpZmljYXRpb25Ub2tlbiIsImVxdWFscyIsIl92ZXJpZmllZCIsIkFDQ0VQVEVEIiwidXBkYXRlT25lIiwiaWQiLCJkYXRhIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJlcnJvciIsImtpbGxUcmFuc2FjdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXlEQTs7O2VBQUE7OzttRUF6RHVCO3dCQUtFO21DQUNTO2lDQUNGO2lDQUNBOzs7Ozs7QUFRaEMsZUFBZUEsWUFBWUMsSUFBVTtJQUNuQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUUsR0FBR0g7SUFDbkMsSUFBSSxDQUFDSSxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUCxNQUFNLFVBQVU7UUFDeEQsTUFBTSxJQUFJUSxnQkFBUSxDQUFDLDBCQUEwQkMsbUJBQVUsQ0FBQ0MsV0FBVztJQUNyRTtJQUVBLElBQUk7UUFDRixNQUFNQyxlQUFlLE1BQU1DLElBQUFBLGdDQUFlLEVBQUNWO1FBRTNDLE1BQU1XLE9BQU8sTUFBTVgsSUFBSVksT0FBTyxDQUFDQyxFQUFFLENBQUNDLE9BQU8sQ0FBTTtZQUM3Q2YsWUFBWUEsV0FBV2dCLE1BQU0sQ0FBQ0MsSUFBSTtZQUNsQ2hCO1lBQ0FpQixPQUFPO2dCQUNMQyxvQkFBb0I7b0JBQUVDLFFBQVFsQjtnQkFBTTtZQUN0QztRQUNGO1FBRUEsSUFBSSxDQUFDVSxNQUFNLE1BQU0sSUFBSUwsZ0JBQVEsQ0FBQyxrQ0FBa0NDLG1CQUFVLENBQUNDLFdBQVc7UUFDdEYsSUFBSUcsUUFBUUEsS0FBS1MsU0FBUyxLQUFLLE1BQzdCLE1BQU0sSUFBSWQsZ0JBQVEsQ0FBQyw0Q0FBNENDLG1CQUFVLENBQUNjLFFBQVE7UUFFcEYsTUFBTXJCLElBQUlZLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDUyxTQUFTLENBQUM7WUFDN0JDLElBQUlaLEtBQUtZLEVBQUU7WUFDWHhCLFlBQVlBLFdBQVdnQixNQUFNLENBQUNDLElBQUk7WUFDbENRLE1BQU07Z0JBQ0osR0FBR2IsSUFBSTtnQkFDUE8sb0JBQW9CO2dCQUNwQkUsV0FBVztZQUNiO1lBQ0FwQjtRQUNGO1FBRUEsSUFBSVMsY0FBYyxNQUFNZ0IsSUFBQUEsb0NBQWlCLEVBQUN6QjtRQUUxQyxPQUFPO0lBQ1QsRUFBRSxPQUFPMEIsT0FBZ0I7UUFDdkIsTUFBTUMsSUFBQUEsZ0NBQWUsRUFBQzNCO1FBQ3RCLE1BQU0wQjtJQUNSO0FBQ0Y7TUFFQSxXQUFlN0IifQ==