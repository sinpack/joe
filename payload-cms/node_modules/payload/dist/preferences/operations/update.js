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
const _defaultAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/defaultAccess"));
const _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
const _UnathorizedError = /*#__PURE__*/ _interop_require_default(require("../../errors/UnathorizedError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function update(args) {
    const { key, overrideAccess, req: { payload }, req, user, value } = args;
    if (!user) {
        throw new _UnathorizedError.default(req.t);
    }
    const collection = 'payload-preferences';
    const filter = {
        key: {
            equals: key
        },
        'user.relationTo': {
            equals: user.collection
        },
        'user.value': {
            equals: user.id
        }
    };
    const preference = {
        key,
        user: {
            relationTo: user.collection,
            value: user.id
        },
        value
    };
    if (!overrideAccess) {
        await (0, _executeAccess.default)({
            req
        }, _defaultAccess.default);
    }
    try {
        // try/catch because we attempt to update without first reading to check if it exists first to save on db calls
        await payload.db.updateOne({
            collection,
            data: preference,
            req,
            where: filter
        });
    } catch (err) {
        await payload.db.create({
            collection,
            data: preference,
            req
        });
    }
    return preference;
}
const _default = update;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9vcGVyYXRpb25zL3VwZGF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0IH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCBkZWZhdWx0QWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZGVmYXVsdEFjY2VzcydcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2VzcydcbmltcG9ydCBVbmF1dGhvcml6ZWRFcnJvciBmcm9tICcuLi8uLi9lcnJvcnMvVW5hdGhvcml6ZWRFcnJvcidcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlKGFyZ3M6IFByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0KSB7XG4gIGNvbnN0IHtcbiAgICBrZXksXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgcmVxOiB7IHBheWxvYWQgfSxcbiAgICByZXEsXG4gICAgdXNlcixcbiAgICB2YWx1ZSxcbiAgfSA9IGFyZ3NcblxuICBpZiAoIXVzZXIpIHtcbiAgICB0aHJvdyBuZXcgVW5hdXRob3JpemVkRXJyb3IocmVxLnQpXG4gIH1cblxuICBjb25zdCBjb2xsZWN0aW9uID0gJ3BheWxvYWQtcHJlZmVyZW5jZXMnXG5cbiAgY29uc3QgZmlsdGVyID0ge1xuICAgIGtleTogeyBlcXVhbHM6IGtleSB9LFxuICAgICd1c2VyLnJlbGF0aW9uVG8nOiB7IGVxdWFsczogdXNlci5jb2xsZWN0aW9uIH0sXG4gICAgJ3VzZXIudmFsdWUnOiB7IGVxdWFsczogdXNlci5pZCB9LFxuICB9XG5cbiAgY29uc3QgcHJlZmVyZW5jZSA9IHtcbiAgICBrZXksXG4gICAgdXNlcjoge1xuICAgICAgcmVsYXRpb25UbzogdXNlci5jb2xsZWN0aW9uLFxuICAgICAgdmFsdWU6IHVzZXIuaWQsXG4gICAgfSxcbiAgICB2YWx1ZSxcbiAgfVxuXG4gIGlmICghb3ZlcnJpZGVBY2Nlc3MpIHtcbiAgICBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGRlZmF1bHRBY2Nlc3MpXG4gIH1cblxuICB0cnkge1xuICAgIC8vIHRyeS9jYXRjaCBiZWNhdXNlIHdlIGF0dGVtcHQgdG8gdXBkYXRlIHdpdGhvdXQgZmlyc3QgcmVhZGluZyB0byBjaGVjayBpZiBpdCBleGlzdHMgZmlyc3QgdG8gc2F2ZSBvbiBkYiBjYWxsc1xuICAgIGF3YWl0IHBheWxvYWQuZGIudXBkYXRlT25lKHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiBwcmVmZXJlbmNlLFxuICAgICAgcmVxLFxuICAgICAgd2hlcmU6IGZpbHRlcixcbiAgICB9KVxuICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICBhd2FpdCBwYXlsb2FkLmRiLmNyZWF0ZSh7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZGF0YTogcHJlZmVyZW5jZSxcbiAgICAgIHJlcSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHByZWZlcmVuY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlXG4iXSwibmFtZXMiOlsidXBkYXRlIiwiYXJncyIsImtleSIsIm92ZXJyaWRlQWNjZXNzIiwicmVxIiwicGF5bG9hZCIsInVzZXIiLCJ2YWx1ZSIsIlVuYXV0aG9yaXplZEVycm9yIiwidCIsImNvbGxlY3Rpb24iLCJmaWx0ZXIiLCJlcXVhbHMiLCJpZCIsInByZWZlcmVuY2UiLCJyZWxhdGlvblRvIiwiZXhlY3V0ZUFjY2VzcyIsImRlZmF1bHRBY2Nlc3MiLCJkYiIsInVwZGF0ZU9uZSIsImRhdGEiLCJ3aGVyZSIsImVyciIsImNyZWF0ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE0REE7OztlQUFBOzs7c0VBMUQwQjtzRUFDQTt5RUFDSTs7Ozs7O0FBRTlCLGVBQWVBLE9BQU9DLElBQTZCO0lBQ2pELE1BQU0sRUFDSkMsR0FBRyxFQUNIQyxjQUFjLEVBQ2RDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEVBQ2hCRCxHQUFHLEVBQ0hFLElBQUksRUFDSkMsS0FBSyxFQUNOLEdBQUdOO0lBRUosSUFBSSxDQUFDSyxNQUFNO1FBQ1QsTUFBTSxJQUFJRSx5QkFBaUIsQ0FBQ0osSUFBSUssQ0FBQztJQUNuQztJQUVBLE1BQU1DLGFBQWE7SUFFbkIsTUFBTUMsU0FBUztRQUNiVCxLQUFLO1lBQUVVLFFBQVFWO1FBQUk7UUFDbkIsbUJBQW1CO1lBQUVVLFFBQVFOLEtBQUtJLFVBQVU7UUFBQztRQUM3QyxjQUFjO1lBQUVFLFFBQVFOLEtBQUtPLEVBQUU7UUFBQztJQUNsQztJQUVBLE1BQU1DLGFBQWE7UUFDakJaO1FBQ0FJLE1BQU07WUFDSlMsWUFBWVQsS0FBS0ksVUFBVTtZQUMzQkgsT0FBT0QsS0FBS08sRUFBRTtRQUNoQjtRQUNBTjtJQUNGO0lBRUEsSUFBSSxDQUFDSixnQkFBZ0I7UUFDbkIsTUFBTWEsSUFBQUEsc0JBQWEsRUFBQztZQUFFWjtRQUFJLEdBQUdhLHNCQUFhO0lBQzVDO0lBRUEsSUFBSTtRQUNGLCtHQUErRztRQUMvRyxNQUFNWixRQUFRYSxFQUFFLENBQUNDLFNBQVMsQ0FBQztZQUN6QlQ7WUFDQVUsTUFBTU47WUFDTlY7WUFDQWlCLE9BQU9WO1FBQ1Q7SUFDRixFQUFFLE9BQU9XLEtBQWM7UUFDckIsTUFBTWpCLFFBQVFhLEVBQUUsQ0FBQ0ssTUFBTSxDQUFDO1lBQ3RCYjtZQUNBVSxNQUFNTjtZQUNOVjtRQUNGO0lBQ0Y7SUFFQSxPQUFPVTtBQUNUO01BRUEsV0FBZWQifQ==