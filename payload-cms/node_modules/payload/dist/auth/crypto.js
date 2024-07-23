"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decrypt: function() {
        return decrypt;
    },
    encrypt: function() {
        return encrypt;
    }
});
const _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const algorithm = 'aes-256-ctr';
function encrypt(text) {
    const iv = _crypto.default.randomBytes(16);
    const cipher = _crypto.default.createCipheriv(algorithm, this.secret, iv);
    const encrypted = Buffer.concat([
        cipher.update(text),
        cipher.final()
    ]);
    const ivString = iv.toString('hex');
    const encryptedString = encrypted.toString('hex');
    return `${ivString}${encryptedString}`;
}
function decrypt(hash) {
    const iv = hash.slice(0, 32);
    const content = hash.slice(32);
    const decipher = _crypto.default.createDecipheriv(algorithm, this.secret, Buffer.from(iv, 'hex'));
    const decrypted = Buffer.concat([
        decipher.update(Buffer.from(content, 'hex')),
        decipher.final()
    ]);
    return decrypted.toString();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2NyeXB0by50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcblxuY29uc3QgYWxnb3JpdGhtID0gJ2Flcy0yNTYtY3RyJ1xuXG5leHBvcnQgZnVuY3Rpb24gZW5jcnlwdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpdiA9IGNyeXB0by5yYW5kb21CeXRlcygxNilcbiAgY29uc3QgY2lwaGVyID0gY3J5cHRvLmNyZWF0ZUNpcGhlcml2KGFsZ29yaXRobSwgdGhpcy5zZWNyZXQsIGl2KVxuXG4gIGNvbnN0IGVuY3J5cHRlZCA9IEJ1ZmZlci5jb25jYXQoW2NpcGhlci51cGRhdGUodGV4dCksIGNpcGhlci5maW5hbCgpXSlcblxuICBjb25zdCBpdlN0cmluZyA9IGl2LnRvU3RyaW5nKCdoZXgnKVxuICBjb25zdCBlbmNyeXB0ZWRTdHJpbmcgPSBlbmNyeXB0ZWQudG9TdHJpbmcoJ2hleCcpXG5cbiAgcmV0dXJuIGAke2l2U3RyaW5nfSR7ZW5jcnlwdGVkU3RyaW5nfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY3J5cHQoaGFzaDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaXYgPSBoYXNoLnNsaWNlKDAsIDMyKVxuICBjb25zdCBjb250ZW50ID0gaGFzaC5zbGljZSgzMilcblxuICBjb25zdCBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KGFsZ29yaXRobSwgdGhpcy5zZWNyZXQsIEJ1ZmZlci5mcm9tKGl2LCAnaGV4JykpXG5cbiAgY29uc3QgZGVjcnlwdGVkID0gQnVmZmVyLmNvbmNhdChbZGVjaXBoZXIudXBkYXRlKEJ1ZmZlci5mcm9tKGNvbnRlbnQsICdoZXgnKSksIGRlY2lwaGVyLmZpbmFsKCldKVxuXG4gIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoKVxufVxuIl0sIm5hbWVzIjpbImRlY3J5cHQiLCJlbmNyeXB0IiwiYWxnb3JpdGhtIiwidGV4dCIsIml2IiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJjaXBoZXIiLCJjcmVhdGVDaXBoZXJpdiIsInNlY3JldCIsImVuY3J5cHRlZCIsIkJ1ZmZlciIsImNvbmNhdCIsInVwZGF0ZSIsImZpbmFsIiwiaXZTdHJpbmciLCJ0b1N0cmluZyIsImVuY3J5cHRlZFN0cmluZyIsImhhc2giLCJzbGljZSIsImNvbnRlbnQiLCJkZWNpcGhlciIsImNyZWF0ZURlY2lwaGVyaXYiLCJmcm9tIiwiZGVjcnlwdGVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFnQmdCQSxPQUFPO2VBQVBBOztJQVpBQyxPQUFPO2VBQVBBOzs7K0RBSkc7Ozs7OztBQUVuQixNQUFNQyxZQUFZO0FBRVgsU0FBU0QsUUFBUUUsSUFBWTtJQUNsQyxNQUFNQyxLQUFLQyxlQUFNLENBQUNDLFdBQVcsQ0FBQztJQUM5QixNQUFNQyxTQUFTRixlQUFNLENBQUNHLGNBQWMsQ0FBQ04sV0FBVyxJQUFJLENBQUNPLE1BQU0sRUFBRUw7SUFFN0QsTUFBTU0sWUFBWUMsT0FBT0MsTUFBTSxDQUFDO1FBQUNMLE9BQU9NLE1BQU0sQ0FBQ1Y7UUFBT0ksT0FBT08sS0FBSztLQUFHO0lBRXJFLE1BQU1DLFdBQVdYLEdBQUdZLFFBQVEsQ0FBQztJQUM3QixNQUFNQyxrQkFBa0JQLFVBQVVNLFFBQVEsQ0FBQztJQUUzQyxPQUFPLENBQUMsRUFBRUQsU0FBUyxFQUFFRSxnQkFBZ0IsQ0FBQztBQUN4QztBQUVPLFNBQVNqQixRQUFRa0IsSUFBWTtJQUNsQyxNQUFNZCxLQUFLYyxLQUFLQyxLQUFLLENBQUMsR0FBRztJQUN6QixNQUFNQyxVQUFVRixLQUFLQyxLQUFLLENBQUM7SUFFM0IsTUFBTUUsV0FBV2hCLGVBQU0sQ0FBQ2lCLGdCQUFnQixDQUFDcEIsV0FBVyxJQUFJLENBQUNPLE1BQU0sRUFBRUUsT0FBT1ksSUFBSSxDQUFDbkIsSUFBSTtJQUVqRixNQUFNb0IsWUFBWWIsT0FBT0MsTUFBTSxDQUFDO1FBQUNTLFNBQVNSLE1BQU0sQ0FBQ0YsT0FBT1ksSUFBSSxDQUFDSCxTQUFTO1FBQVNDLFNBQVNQLEtBQUs7S0FBRztJQUVoRyxPQUFPVSxVQUFVUixRQUFRO0FBQzNCIn0=