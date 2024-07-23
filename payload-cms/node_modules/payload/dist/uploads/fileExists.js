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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const fileExists = async (filename)=>{
    try {
        await _fs.default.promises.stat(filename);
        return true;
    } catch (err) {
        return false;
    }
};
const _default = fileExists;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2ZpbGVFeGlzdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG5jb25zdCBmaWxlRXhpc3RzID0gYXN5bmMgKGZpbGVuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBmcy5wcm9taXNlcy5zdGF0KGZpbGVuYW1lKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmlsZUV4aXN0c1xuIl0sIm5hbWVzIjpbImZpbGVFeGlzdHMiLCJmaWxlbmFtZSIsImZzIiwicHJvbWlzZXMiLCJzdGF0IiwiZXJyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFZQTs7O2VBQUE7OzsyREFaZTs7Ozs7O0FBRWYsTUFBTUEsYUFBYSxPQUFPQztJQUN4QixJQUFJO1FBQ0YsTUFBTUMsV0FBRSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0g7UUFFdkIsT0FBTztJQUNULEVBQUUsT0FBT0ksS0FBSztRQUNaLE9BQU87SUFDVDtBQUNGO01BRUEsV0FBZUwifQ==