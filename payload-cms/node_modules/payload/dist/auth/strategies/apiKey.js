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
const _passportheaderapikey = /*#__PURE__*/ _interop_require_default(require("passport-headerapikey"));
const _find = /*#__PURE__*/ _interop_require_default(require("../../collections/operations/find"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (payload, config)=>{
    const { secret } = payload;
    const opts = {
        header: 'Authorization',
        prefix: `${config.slug} API-Key `
    };
    return new _passportheaderapikey.default(opts, true, async (apiKey, done, req)=>{
        const apiKeyIndex = _crypto.default.createHmac('sha1', secret).update(apiKey).digest('hex');
        try {
            const where = {};
            if (config.auth.verify) {
                where.and = [
                    {
                        // TODO: Search for index
                        apiKeyIndex: {
                            equals: apiKeyIndex
                        }
                    },
                    {
                        _verified: {
                            not_equals: false
                        }
                    }
                ];
            } else {
                where.apiKeyIndex = {
                    equals: apiKeyIndex
                };
            }
            const userQuery = await (0, _find.default)({
                collection: {
                    config
                },
                depth: config.auth.depth,
                overrideAccess: true,
                req: req,
                where
            });
            if (userQuery.docs && userQuery.docs.length > 0) {
                const user = userQuery.docs[0];
                user.collection = config.slug;
                user._strategy = 'api-key';
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (err) {
            done(null, false);
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvYXBpS2V5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IFBhc3Nwb3J0QVBJS2V5IGZyb20gJ3Bhc3Nwb3J0LWhlYWRlcmFwaWtleSdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi9wYXlsb2FkJ1xuXG5pbXBvcnQgZmluZCBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2ZpbmQnXG5cbmV4cG9ydCBkZWZhdWx0IChwYXlsb2FkOiBQYXlsb2FkLCBjb25maWc6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcpOiBQYXNzcG9ydEFQSUtleSA9PiB7XG4gIGNvbnN0IHsgc2VjcmV0IH0gPSBwYXlsb2FkXG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaGVhZGVyOiAnQXV0aG9yaXphdGlvbicsXG4gICAgcHJlZml4OiBgJHtjb25maWcuc2x1Z30gQVBJLUtleSBgLFxuICB9XG5cbiAgcmV0dXJuIG5ldyBQYXNzcG9ydEFQSUtleShvcHRzLCB0cnVlLCBhc3luYyAoYXBpS2V5LCBkb25lLCByZXEpID0+IHtcbiAgICBjb25zdCBhcGlLZXlJbmRleCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGExJywgc2VjcmV0KS51cGRhdGUoYXBpS2V5KS5kaWdlc3QoJ2hleCcpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2hlcmU6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fVxuICAgICAgaWYgKGNvbmZpZy5hdXRoLnZlcmlmeSkge1xuICAgICAgICB3aGVyZS5hbmQgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gVE9ETzogU2VhcmNoIGZvciBpbmRleFxuICAgICAgICAgICAgYXBpS2V5SW5kZXg6IHtcbiAgICAgICAgICAgICAgZXF1YWxzOiBhcGlLZXlJbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfdmVyaWZpZWQ6IHtcbiAgICAgICAgICAgICAgbm90X2VxdWFsczogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoZXJlLmFwaUtleUluZGV4ID0ge1xuICAgICAgICAgIGVxdWFsczogYXBpS2V5SW5kZXgsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXJRdWVyeSA9IGF3YWl0IGZpbmQoe1xuICAgICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICB9LFxuICAgICAgICBkZXB0aDogY29uZmlnLmF1dGguZGVwdGgsXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzOiB0cnVlLFxuICAgICAgICByZXE6IHJlcSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgICAgICAgd2hlcmUsXG4gICAgICB9KVxuXG4gICAgICBpZiAodXNlclF1ZXJ5LmRvY3MgJiYgdXNlclF1ZXJ5LmRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlclF1ZXJ5LmRvY3NbMF1cbiAgICAgICAgdXNlci5jb2xsZWN0aW9uID0gY29uZmlnLnNsdWdcbiAgICAgICAgdXNlci5fc3RyYXRlZ3kgPSAnYXBpLWtleSdcbiAgICAgICAgZG9uZShudWxsLCB1c2VyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZShudWxsLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRvbmUobnVsbCwgZmFsc2UpXG4gICAgfVxuICB9KVxufVxuIl0sIm5hbWVzIjpbInBheWxvYWQiLCJjb25maWciLCJzZWNyZXQiLCJvcHRzIiwiaGVhZGVyIiwicHJlZml4Iiwic2x1ZyIsIlBhc3Nwb3J0QVBJS2V5IiwiYXBpS2V5IiwiZG9uZSIsInJlcSIsImFwaUtleUluZGV4IiwiY3J5cHRvIiwiY3JlYXRlSG1hYyIsInVwZGF0ZSIsImRpZ2VzdCIsIndoZXJlIiwiYXV0aCIsInZlcmlmeSIsImFuZCIsImVxdWFscyIsIl92ZXJpZmllZCIsIm5vdF9lcXVhbHMiLCJ1c2VyUXVlcnkiLCJmaW5kIiwiY29sbGVjdGlvbiIsImRlcHRoIiwib3ZlcnJpZGVBY2Nlc3MiLCJkb2NzIiwibGVuZ3RoIiwidXNlciIsIl9zdHJhdGVneSIsImVyciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFTQTs7O2VBQUE7OzsrREFUbUI7NkVBQ1E7NkRBTVY7Ozs7OztNQUVqQixXQUFlLENBQUNBLFNBQWtCQztJQUNoQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtJQUNuQixNQUFNRyxPQUFPO1FBQ1hDLFFBQVE7UUFDUkMsUUFBUSxDQUFDLEVBQUVKLE9BQU9LLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbkM7SUFFQSxPQUFPLElBQUlDLDZCQUFjLENBQUNKLE1BQU0sTUFBTSxPQUFPSyxRQUFRQyxNQUFNQztRQUN6RCxNQUFNQyxjQUFjQyxlQUFNLENBQUNDLFVBQVUsQ0FBQyxRQUFRWCxRQUFRWSxNQUFNLENBQUNOLFFBQVFPLE1BQU0sQ0FBQztRQUU1RSxJQUFJO1lBQ0YsTUFBTUMsUUFBZ0MsQ0FBQztZQUN2QyxJQUFJZixPQUFPZ0IsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ3RCRixNQUFNRyxHQUFHLEdBQUc7b0JBQ1Y7d0JBQ0UseUJBQXlCO3dCQUN6QlIsYUFBYTs0QkFDWFMsUUFBUVQ7d0JBQ1Y7b0JBQ0Y7b0JBQ0E7d0JBQ0VVLFdBQVc7NEJBQ1RDLFlBQVk7d0JBQ2Q7b0JBQ0Y7aUJBQ0Q7WUFDSCxPQUFPO2dCQUNMTixNQUFNTCxXQUFXLEdBQUc7b0JBQ2xCUyxRQUFRVDtnQkFDVjtZQUNGO1lBQ0EsTUFBTVksWUFBWSxNQUFNQyxJQUFBQSxhQUFJLEVBQUM7Z0JBQzNCQyxZQUFZO29CQUNWeEI7Z0JBQ0Y7Z0JBQ0F5QixPQUFPekIsT0FBT2dCLElBQUksQ0FBQ1MsS0FBSztnQkFDeEJDLGdCQUFnQjtnQkFDaEJqQixLQUFLQTtnQkFDTE07WUFDRjtZQUVBLElBQUlPLFVBQVVLLElBQUksSUFBSUwsVUFBVUssSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRztnQkFDL0MsTUFBTUMsT0FBT1AsVUFBVUssSUFBSSxDQUFDLEVBQUU7Z0JBQzlCRSxLQUFLTCxVQUFVLEdBQUd4QixPQUFPSyxJQUFJO2dCQUM3QndCLEtBQUtDLFNBQVMsR0FBRztnQkFDakJ0QixLQUFLLE1BQU1xQjtZQUNiLE9BQU87Z0JBQ0xyQixLQUFLLE1BQU07WUFDYjtRQUNGLEVBQUUsT0FBT3VCLEtBQUs7WUFDWnZCLEtBQUssTUFBTTtRQUNiO0lBQ0Y7QUFDRiJ9