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
const _stream = require("stream");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Save buffer data to a file.
 * @param {Buffer} buffer - buffer to save to a file.
 * @param {string} filePath - path to a file.
 */ const saveBufferToFile = async (buffer, filePath)=>{
    // Setup readable stream from buffer.
    let streamData = buffer;
    const readStream = new _stream.Readable();
    readStream._read = ()=>{
        readStream.push(streamData);
        streamData = null;
    };
    // Setup file system writable stream.
    return _fs.default.writeFileSync(filePath, buffer);
};
const _default = saveBufferToFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL3NhdmVCdWZmZXJUb0ZpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tICdzdHJlYW0nXG5cbi8qKlxuICogU2F2ZSBidWZmZXIgZGF0YSB0byBhIGZpbGUuXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIC0gYnVmZmVyIHRvIHNhdmUgdG8gYSBmaWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoIC0gcGF0aCB0byBhIGZpbGUuXG4gKi9cbmNvbnN0IHNhdmVCdWZmZXJUb0ZpbGUgPSBhc3luYyAoYnVmZmVyOiBCdWZmZXIsIGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgLy8gU2V0dXAgcmVhZGFibGUgc3RyZWFtIGZyb20gYnVmZmVyLlxuICBsZXQgc3RyZWFtRGF0YSA9IGJ1ZmZlclxuICBjb25zdCByZWFkU3RyZWFtID0gbmV3IFJlYWRhYmxlKClcbiAgcmVhZFN0cmVhbS5fcmVhZCA9ICgpID0+IHtcbiAgICByZWFkU3RyZWFtLnB1c2goc3RyZWFtRGF0YSlcbiAgICBzdHJlYW1EYXRhID0gbnVsbFxuICB9XG4gIC8vIFNldHVwIGZpbGUgc3lzdGVtIHdyaXRhYmxlIHN0cmVhbS5cbiAgcmV0dXJuIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGJ1ZmZlcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F2ZUJ1ZmZlclRvRmlsZVxuIl0sIm5hbWVzIjpbInNhdmVCdWZmZXJUb0ZpbGUiLCJidWZmZXIiLCJmaWxlUGF0aCIsInN0cmVhbURhdGEiLCJyZWFkU3RyZWFtIiwiUmVhZGFibGUiLCJfcmVhZCIsInB1c2giLCJmcyIsIndyaXRlRmlsZVN5bmMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0JBOzs7ZUFBQTs7OzJEQXBCZTt3QkFDVTs7Ozs7O0FBRXpCOzs7O0NBSUMsR0FDRCxNQUFNQSxtQkFBbUIsT0FBT0MsUUFBZ0JDO0lBQzlDLHFDQUFxQztJQUNyQyxJQUFJQyxhQUFhRjtJQUNqQixNQUFNRyxhQUFhLElBQUlDLGdCQUFRO0lBQy9CRCxXQUFXRSxLQUFLLEdBQUc7UUFDakJGLFdBQVdHLElBQUksQ0FBQ0o7UUFDaEJBLGFBQWE7SUFDZjtJQUNBLHFDQUFxQztJQUNyQyxPQUFPSyxXQUFFLENBQUNDLGFBQWEsQ0FBQ1AsVUFBVUQ7QUFDcEM7TUFFQSxXQUFlRCJ9