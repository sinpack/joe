"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "uploadFiles", {
    enumerable: true,
    get: function() {
        return uploadFiles;
    }
});
const _errors = require("../errors");
const _saveBufferToFile = /*#__PURE__*/ _interop_require_default(require("./saveBufferToFile"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const uploadFiles = async (payload, files, t)=>{
    try {
        await Promise.all(files.map(async ({ buffer, path })=>{
            await (0, _saveBufferToFile.default)(buffer, path);
        }));
    } catch (err) {
        payload.logger.error(err);
        throw new _errors.FileUploadError(t);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL3VwbG9hZEZpbGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vcGF5bG9hZCdcbmltcG9ydCB0eXBlIHsgRmlsZVRvU2F2ZSB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IEZpbGVVcGxvYWRFcnJvciB9IGZyb20gJy4uL2Vycm9ycydcbmltcG9ydCBzYXZlQnVmZmVyVG9GaWxlIGZyb20gJy4vc2F2ZUJ1ZmZlclRvRmlsZSdcblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGVzID0gYXN5bmMgKFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBmaWxlczogRmlsZVRvU2F2ZVtdLFxuICB0OiBURnVuY3Rpb24sXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGZpbGVzLm1hcChhc3luYyAoeyBidWZmZXIsIHBhdGggfSkgPT4ge1xuICAgICAgICBhd2FpdCBzYXZlQnVmZmVyVG9GaWxlKGJ1ZmZlciwgcGF0aClcbiAgICAgIH0pLFxuICAgIClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcGF5bG9hZC5sb2dnZXIuZXJyb3IoZXJyKVxuICAgIHRocm93IG5ldyBGaWxlVXBsb2FkRXJyb3IodClcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVwbG9hZEZpbGVzIiwicGF5bG9hZCIsImZpbGVzIiwidCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJidWZmZXIiLCJwYXRoIiwic2F2ZUJ1ZmZlclRvRmlsZSIsImVyciIsImxvZ2dlciIsImVycm9yIiwiRmlsZVVwbG9hZEVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVFhQTs7O2VBQUFBOzs7d0JBSG1CO3lFQUNIOzs7Ozs7QUFFdEIsTUFBTUEsY0FBYyxPQUN6QkMsU0FDQUMsT0FDQUM7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsUUFBUUMsR0FBRyxDQUNmSCxNQUFNSSxHQUFHLENBQUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRTtZQUMvQixNQUFNQyxJQUFBQSx5QkFBZ0IsRUFBQ0YsUUFBUUM7UUFDakM7SUFFSixFQUFFLE9BQU9FLEtBQUs7UUFDWlQsUUFBUVUsTUFBTSxDQUFDQyxLQUFLLENBQUNGO1FBQ3JCLE1BQU0sSUFBSUcsdUJBQWUsQ0FBQ1Y7SUFDNUI7QUFDRiJ9