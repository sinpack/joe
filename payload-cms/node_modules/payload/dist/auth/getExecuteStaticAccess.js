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
const _errors = require("../errors");
const _executeAccess = /*#__PURE__*/ _interop_require_default(require("./executeAccess"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getExecuteStaticAccess = (config)=>async (req, res, next)=>{
        if (req.method === 'OPTIONS') {
            return res.sendStatus(200);
        }
        try {
            if (req.path) {
                const accessResult = await (0, _executeAccess.default)({
                    isReadingStaticFile: true,
                    req
                }, config.access.read);
                if (typeof accessResult === 'object') {
                    const filename = decodeURI(req.path).replace(/^\/|\/$/g, '');
                    const queryToBuild = {
                        and: [
                            {
                                or: [
                                    {
                                        filename: {
                                            equals: filename
                                        }
                                    }
                                ]
                            },
                            accessResult
                        ]
                    };
                    if (config.upload.imageSizes) {
                        config.upload.imageSizes.forEach(({ name })=>{
                            queryToBuild.and[0].or.push({
                                [`sizes.${name}.filename`]: {
                                    equals: filename
                                }
                            });
                        });
                    }
                    const doc = await req.payload.db.findOne({
                        collection: config.slug,
                        req,
                        where: queryToBuild
                    });
                    if (!doc) {
                        throw new _errors.Forbidden(req.t);
                    }
                }
            }
            return next();
        } catch (error) {
            return next(error);
        }
    };
const _default = getExecuteStaticAccess;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2dldEV4ZWN1dGVTdGF0aWNBY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IEZvcmJpZGRlbiB9IGZyb20gJy4uL2Vycm9ycydcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4vZXhlY3V0ZUFjY2VzcydcblxuY29uc3QgZ2V0RXhlY3V0ZVN0YXRpY0FjY2VzcyA9XG4gIChjb25maWc6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcpID0+XG4gIGFzeW5jIChyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpZiAocmVxLnBhdGgpIHtcbiAgICAgICAgY29uc3QgYWNjZXNzUmVzdWx0ID0gYXdhaXQgZXhlY3V0ZUFjY2VzcyhcbiAgICAgICAgICB7IGlzUmVhZGluZ1N0YXRpY0ZpbGU6IHRydWUsIHJlcSB9LFxuICAgICAgICAgIGNvbmZpZy5hY2Nlc3MucmVhZCxcbiAgICAgICAgKVxuXG4gICAgICAgIGlmICh0eXBlb2YgYWNjZXNzUmVzdWx0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gZGVjb2RlVVJJKHJlcS5wYXRoKS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgJycpXG5cbiAgICAgICAgICBjb25zdCBxdWVyeVRvQnVpbGQ6IFdoZXJlID0ge1xuICAgICAgICAgICAgYW5kOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgIGVxdWFsczogZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFjY2Vzc1Jlc3VsdCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbmZpZy51cGxvYWQuaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgY29uZmlnLnVwbG9hZC5pbWFnZVNpemVzLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgICAgICAgIHF1ZXJ5VG9CdWlsZC5hbmRbMF0ub3IucHVzaCh7XG4gICAgICAgICAgICAgICAgW2BzaXplcy4ke25hbWV9LmZpbGVuYW1lYF06IHtcbiAgICAgICAgICAgICAgICAgIGVxdWFsczogZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZG9jID0gYXdhaXQgcmVxLnBheWxvYWQuZGIuZmluZE9uZSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb25maWcuc2x1ZyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHdoZXJlOiBxdWVyeVRvQnVpbGQsXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmICghZG9jKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRm9yYmlkZGVuKHJlcS50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yKVxuICAgIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBnZXRFeGVjdXRlU3RhdGljQWNjZXNzXG4iXSwibmFtZXMiOlsiZ2V0RXhlY3V0ZVN0YXRpY0FjY2VzcyIsImNvbmZpZyIsInJlcSIsInJlcyIsIm5leHQiLCJtZXRob2QiLCJzZW5kU3RhdHVzIiwicGF0aCIsImFjY2Vzc1Jlc3VsdCIsImV4ZWN1dGVBY2Nlc3MiLCJpc1JlYWRpbmdTdGF0aWNGaWxlIiwiYWNjZXNzIiwicmVhZCIsImZpbGVuYW1lIiwiZGVjb2RlVVJJIiwicmVwbGFjZSIsInF1ZXJ5VG9CdWlsZCIsImFuZCIsIm9yIiwiZXF1YWxzIiwidXBsb2FkIiwiaW1hZ2VTaXplcyIsImZvckVhY2giLCJuYW1lIiwicHVzaCIsImRvYyIsInBheWxvYWQiLCJkYiIsImZpbmRPbmUiLCJjb2xsZWN0aW9uIiwic2x1ZyIsIndoZXJlIiwiRm9yYmlkZGVuIiwidCIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBcUVBOzs7ZUFBQTs7O3dCQS9EMEI7c0VBQ0E7Ozs7OztBQUUxQixNQUFNQSx5QkFDSixDQUFDQyxTQUNELE9BQU9DLEtBQXFCQyxLQUFlQztRQUN6QyxJQUFJRixJQUFJRyxNQUFNLEtBQUssV0FBVztZQUM1QixPQUFPRixJQUFJRyxVQUFVLENBQUM7UUFDeEI7UUFFQSxJQUFJO1lBQ0YsSUFBSUosSUFBSUssSUFBSSxFQUFFO2dCQUNaLE1BQU1DLGVBQWUsTUFBTUMsSUFBQUEsc0JBQWEsRUFDdEM7b0JBQUVDLHFCQUFxQjtvQkFBTVI7Z0JBQUksR0FDakNELE9BQU9VLE1BQU0sQ0FBQ0MsSUFBSTtnQkFHcEIsSUFBSSxPQUFPSixpQkFBaUIsVUFBVTtvQkFDcEMsTUFBTUssV0FBV0MsVUFBVVosSUFBSUssSUFBSSxFQUFFUSxPQUFPLENBQUMsWUFBWTtvQkFFekQsTUFBTUMsZUFBc0I7d0JBQzFCQyxLQUFLOzRCQUNIO2dDQUNFQyxJQUFJO29DQUNGO3dDQUNFTCxVQUFVOzRDQUNSTSxRQUFRTjt3Q0FDVjtvQ0FDRjtpQ0FDRDs0QkFDSDs0QkFDQUw7eUJBQ0Q7b0JBQ0g7b0JBRUEsSUFBSVAsT0FBT21CLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFO3dCQUM1QnBCLE9BQU9tQixNQUFNLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsRUFBRUMsSUFBSSxFQUFFOzRCQUN4Q1AsYUFBYUMsR0FBRyxDQUFDLEVBQUUsQ0FBQ0MsRUFBRSxDQUFDTSxJQUFJLENBQUM7Z0NBQzFCLENBQUMsQ0FBQyxNQUFNLEVBQUVELEtBQUssU0FBUyxDQUFDLENBQUMsRUFBRTtvQ0FDMUJKLFFBQVFOO2dDQUNWOzRCQUNGO3dCQUNGO29CQUNGO29CQUVBLE1BQU1ZLE1BQU0sTUFBTXZCLElBQUl3QixPQUFPLENBQUNDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDO3dCQUN2Q0MsWUFBWTVCLE9BQU82QixJQUFJO3dCQUN2QjVCO3dCQUNBNkIsT0FBT2Y7b0JBQ1Q7b0JBRUEsSUFBSSxDQUFDUyxLQUFLO3dCQUNSLE1BQU0sSUFBSU8saUJBQVMsQ0FBQzlCLElBQUkrQixDQUFDO29CQUMzQjtnQkFDRjtZQUNGO1lBRUEsT0FBTzdCO1FBQ1QsRUFBRSxPQUFPOEIsT0FBTztZQUNkLE9BQU85QixLQUFLOEI7UUFDZDtJQUNGO01BRUYsV0FBZWxDIn0=