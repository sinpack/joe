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
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _probeimagesize = /*#__PURE__*/ _interop_require_default(require("probe-image-size"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function _default(file) {
    if (file.tempFilePath) {
        const data = _fs.default.readFileSync(file.tempFilePath);
        return _probeimagesize.default.sync(data);
    }
    return _probeimagesize.default.sync(file.data);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2dldEltYWdlU2l6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFVwbG9hZGVkRmlsZSB9IGZyb20gJ2V4cHJlc3MtZmlsZXVwbG9hZCdcblxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHByb2JlSW1hZ2VTaXplIGZyb20gJ3Byb2JlLWltYWdlLXNpemUnXG5cbmltcG9ydCB0eXBlIHsgUHJvYmVkSW1hZ2VTaXplIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKGZpbGU6IFVwbG9hZGVkRmlsZSk6IFByb21pc2U8UHJvYmVkSW1hZ2VTaXplPiB7XG4gIGlmIChmaWxlLnRlbXBGaWxlUGF0aCkge1xuICAgIGNvbnN0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZS50ZW1wRmlsZVBhdGgpXG4gICAgcmV0dXJuIHByb2JlSW1hZ2VTaXplLnN5bmMoZGF0YSlcbiAgfVxuXG4gIHJldHVybiBwcm9iZUltYWdlU2l6ZS5zeW5jKGZpbGUuZGF0YSlcbn1cbiJdLCJuYW1lcyI6WyJmaWxlIiwidGVtcEZpbGVQYXRoIiwiZGF0YSIsImZzIiwicmVhZEZpbGVTeW5jIiwicHJvYmVJbWFnZVNpemUiLCJzeW5jIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxlO3VFQUNZOzs7Ozs7QUFJWixlQUFmLFNBQStCQSxJQUFrQjtJQUMvQyxJQUFJQSxLQUFLQyxZQUFZLEVBQUU7UUFDckIsTUFBTUMsT0FBT0MsV0FBRSxDQUFDQyxZQUFZLENBQUNKLEtBQUtDLFlBQVk7UUFDOUMsT0FBT0ksdUJBQWMsQ0FBQ0MsSUFBSSxDQUFDSjtJQUM3QjtJQUVBLE9BQU9HLHVCQUFjLENBQUNDLElBQUksQ0FBQ04sS0FBS0UsSUFBSTtBQUN0QyJ9