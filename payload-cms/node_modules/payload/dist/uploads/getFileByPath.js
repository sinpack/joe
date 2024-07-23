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
const _filetype = require("file-type");
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const mimeTypeEstimate = {
    svg: 'image/svg+xml'
};
const getFileByPath = async (filePath)=>{
    if (typeof filePath === 'string') {
        const data = _fs.default.readFileSync(filePath);
        const mimetype = (0, _filetype.fromFile)(filePath);
        const { size } = _fs.default.statSync(filePath);
        const name = _path.default.basename(filePath);
        const ext = _path.default.extname(filePath).slice(1);
        const mime = (await mimetype)?.mime || mimeTypeEstimate[ext];
        return {
            name,
            data,
            mimetype: mime,
            size
        };
    }
    return undefined;
};
const _default = getFileByPath;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2dldEZpbGVCeVBhdGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUZpbGUgfSBmcm9tICdmaWxlLXR5cGUnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgdHlwZSB7IEZpbGUgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBtaW1lVHlwZUVzdGltYXRlID0ge1xuICBzdmc6ICdpbWFnZS9zdmcreG1sJyxcbn1cblxuY29uc3QgZ2V0RmlsZUJ5UGF0aCA9IGFzeW5jIChmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxGaWxlPiA9PiB7XG4gIGlmICh0eXBlb2YgZmlsZVBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aClcbiAgICBjb25zdCBtaW1ldHlwZSA9IGZyb21GaWxlKGZpbGVQYXRoKVxuICAgIGNvbnN0IHsgc2l6ZSB9ID0gZnMuc3RhdFN5bmMoZmlsZVBhdGgpXG5cbiAgICBjb25zdCBuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aClcbiAgICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUoZmlsZVBhdGgpLnNsaWNlKDEpXG5cbiAgICBjb25zdCBtaW1lID0gKGF3YWl0IG1pbWV0eXBlKT8ubWltZSB8fCBtaW1lVHlwZUVzdGltYXRlW2V4dF1cblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgZGF0YSxcbiAgICAgIG1pbWV0eXBlOiBtaW1lLFxuICAgICAgc2l6ZSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZpbGVCeVBhdGhcbiJdLCJuYW1lcyI6WyJtaW1lVHlwZUVzdGltYXRlIiwic3ZnIiwiZ2V0RmlsZUJ5UGF0aCIsImZpbGVQYXRoIiwiZGF0YSIsImZzIiwicmVhZEZpbGVTeW5jIiwibWltZXR5cGUiLCJmcm9tRmlsZSIsInNpemUiLCJzdGF0U3luYyIsIm5hbWUiLCJwYXRoIiwiYmFzZW5hbWUiLCJleHQiLCJleHRuYW1lIiwic2xpY2UiLCJtaW1lIiwidW5kZWZpbmVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWdDQTs7O2VBQUE7OzswQkFoQ3lCOzJEQUNWOzZEQUNFOzs7Ozs7QUFJakIsTUFBTUEsbUJBQW1CO0lBQ3ZCQyxLQUFLO0FBQ1A7QUFFQSxNQUFNQyxnQkFBZ0IsT0FBT0M7SUFDM0IsSUFBSSxPQUFPQSxhQUFhLFVBQVU7UUFDaEMsTUFBTUMsT0FBT0MsV0FBRSxDQUFDQyxZQUFZLENBQUNIO1FBQzdCLE1BQU1JLFdBQVdDLElBQUFBLGtCQUFRLEVBQUNMO1FBQzFCLE1BQU0sRUFBRU0sSUFBSSxFQUFFLEdBQUdKLFdBQUUsQ0FBQ0ssUUFBUSxDQUFDUDtRQUU3QixNQUFNUSxPQUFPQyxhQUFJLENBQUNDLFFBQVEsQ0FBQ1Y7UUFDM0IsTUFBTVcsTUFBTUYsYUFBSSxDQUFDRyxPQUFPLENBQUNaLFVBQVVhLEtBQUssQ0FBQztRQUV6QyxNQUFNQyxPQUFPLEFBQUMsQ0FBQSxNQUFNVixRQUFPLEdBQUlVLFFBQVFqQixnQkFBZ0IsQ0FBQ2MsSUFBSTtRQUU1RCxPQUFPO1lBQ0xIO1lBQ0FQO1lBQ0FHLFVBQVVVO1lBQ1ZSO1FBQ0Y7SUFDRjtJQUVBLE9BQU9TO0FBQ1Q7TUFFQSxXQUFlaEIifQ==