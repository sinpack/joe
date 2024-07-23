"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "generatePasswordSaltHash", {
    enumerable: true,
    get: function() {
        return generatePasswordSaltHash;
    }
});
const _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
const _errors = require("../../../errors");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const defaultPasswordValidator = (password)=>{
    if (!password) return 'No password was given';
    if (password.length < 3) return 'Password must be at least 3 characters';
    return true;
};
function randomBytes() {
    return new Promise((resolve, reject)=>_crypto.default.randomBytes(32, (err, saltBuffer)=>err ? reject(err) : resolve(saltBuffer)));
}
function pbkdf2Promisified(password, salt) {
    return new Promise((resolve, reject)=>_crypto.default.pbkdf2(password, salt, 25000, 512, 'sha256', (err, hashRaw)=>err ? reject(err) : resolve(hashRaw)));
}
const generatePasswordSaltHash = async ({ password })=>{
    const validationResult = defaultPasswordValidator(password);
    if (typeof validationResult === 'string') {
        throw new _errors.ValidationError([
            {
                field: 'password',
                message: validationResult
            }
        ]);
    }
    const saltBuffer = await randomBytes();
    const salt = saltBuffer.toString('hex');
    const hashRaw = await pbkdf2Promisified(password, salt);
    const hash = hashRaw.toString('hex');
    return {
        hash,
        salt
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xuXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnXG5cbmNvbnN0IGRlZmF1bHRQYXNzd29yZFZhbGlkYXRvciA9IChwYXNzd29yZDogc3RyaW5nKTogc3RyaW5nIHwgdHJ1ZSA9PiB7XG4gIGlmICghcGFzc3dvcmQpIHJldHVybiAnTm8gcGFzc3dvcmQgd2FzIGdpdmVuJ1xuICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgMykgcmV0dXJuICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycydcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiByYW5kb21CeXRlcygpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICBjcnlwdG8ucmFuZG9tQnl0ZXMoMzIsIChlcnIsIHNhbHRCdWZmZXIpID0+IChlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoc2FsdEJ1ZmZlcikpKSxcbiAgKVxufVxuXG5mdW5jdGlvbiBwYmtkZjJQcm9taXNpZmllZChwYXNzd29yZDogc3RyaW5nLCBzYWx0OiBzdHJpbmcpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICBjcnlwdG8ucGJrZGYyKHBhc3N3b3JkLCBzYWx0LCAyNTAwMCwgNTEyLCAnc2hhMjU2JywgKGVyciwgaGFzaFJhdykgPT5cbiAgICAgIGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShoYXNoUmF3KSxcbiAgICApLFxuICApXG59XG5cbnR5cGUgQXJncyA9IHtcbiAgcGFzc3dvcmQ6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoID0gYXN5bmMgKHtcbiAgcGFzc3dvcmQsXG59OiBBcmdzKTogUHJvbWlzZTx7IGhhc2g6IHN0cmluZzsgc2FsdDogc3RyaW5nIH0+ID0+IHtcbiAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IGRlZmF1bHRQYXNzd29yZFZhbGlkYXRvcihwYXNzd29yZClcblxuICBpZiAodHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihbeyBmaWVsZDogJ3Bhc3N3b3JkJywgbWVzc2FnZTogdmFsaWRhdGlvblJlc3VsdCB9XSlcbiAgfVxuXG4gIGNvbnN0IHNhbHRCdWZmZXIgPSBhd2FpdCByYW5kb21CeXRlcygpXG4gIGNvbnN0IHNhbHQgPSBzYWx0QnVmZmVyLnRvU3RyaW5nKCdoZXgnKVxuXG4gIGNvbnN0IGhhc2hSYXcgPSBhd2FpdCBwYmtkZjJQcm9taXNpZmllZChwYXNzd29yZCwgc2FsdClcbiAgY29uc3QgaGFzaCA9IGhhc2hSYXcudG9TdHJpbmcoJ2hleCcpXG5cbiAgcmV0dXJuIHsgaGFzaCwgc2FsdCB9XG59XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoIiwiZGVmYXVsdFBhc3N3b3JkVmFsaWRhdG9yIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJyYW5kb21CeXRlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3J5cHRvIiwiZXJyIiwic2FsdEJ1ZmZlciIsInBia2RmMlByb21pc2lmaWVkIiwic2FsdCIsInBia2RmMiIsImhhc2hSYXciLCJ2YWxpZGF0aW9uUmVzdWx0IiwiVmFsaWRhdGlvbkVycm9yIiwiZmllbGQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJoYXNoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNkJhQTs7O2VBQUFBOzs7K0RBN0JNO3dCQUVhOzs7Ozs7QUFFaEMsTUFBTUMsMkJBQTJCLENBQUNDO0lBQ2hDLElBQUksQ0FBQ0EsVUFBVSxPQUFPO0lBQ3RCLElBQUlBLFNBQVNDLE1BQU0sR0FBRyxHQUFHLE9BQU87SUFFaEMsT0FBTztBQUNUO0FBRUEsU0FBU0M7SUFDUCxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FDM0JDLGVBQU0sQ0FBQ0osV0FBVyxDQUFDLElBQUksQ0FBQ0ssS0FBS0MsYUFBZ0JELE1BQU1GLE9BQU9FLE9BQU9ILFFBQVFJO0FBRTdFO0FBRUEsU0FBU0Msa0JBQWtCVCxRQUFnQixFQUFFVSxJQUFZO0lBQ3ZELE9BQU8sSUFBSVAsUUFBUSxDQUFDQyxTQUFTQyxTQUMzQkMsZUFBTSxDQUFDSyxNQUFNLENBQUNYLFVBQVVVLE1BQU0sT0FBTyxLQUFLLFVBQVUsQ0FBQ0gsS0FBS0ssVUFDeERMLE1BQU1GLE9BQU9FLE9BQU9ILFFBQVFRO0FBR2xDO0FBTU8sTUFBTWQsMkJBQTJCLE9BQU8sRUFDN0NFLFFBQVEsRUFDSDtJQUNMLE1BQU1hLG1CQUFtQmQseUJBQXlCQztJQUVsRCxJQUFJLE9BQU9hLHFCQUFxQixVQUFVO1FBQ3hDLE1BQU0sSUFBSUMsdUJBQWUsQ0FBQztZQUFDO2dCQUFFQyxPQUFPO2dCQUFZQyxTQUFTSDtZQUFpQjtTQUFFO0lBQzlFO0lBRUEsTUFBTUwsYUFBYSxNQUFNTjtJQUN6QixNQUFNUSxPQUFPRixXQUFXUyxRQUFRLENBQUM7SUFFakMsTUFBTUwsVUFBVSxNQUFNSCxrQkFBa0JULFVBQVVVO0lBQ2xELE1BQU1RLE9BQU9OLFFBQVFLLFFBQVEsQ0FBQztJQUU5QixPQUFPO1FBQUVDO1FBQU1SO0lBQUs7QUFDdEIifQ==