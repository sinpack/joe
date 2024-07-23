"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "authenticateLocalStrategy", {
    enumerable: true,
    get: function() {
        return authenticateLocalStrategy;
    }
});
const _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
const _scmp = /*#__PURE__*/ _interop_require_default(require("scmp"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const authenticateLocalStrategy = async ({ doc, password })=>{
    try {
        const { hash, salt } = doc;
        if (typeof salt === 'string' && typeof hash === 'string') {
            const res = await new Promise((resolve, reject)=>{
                _crypto.default.pbkdf2(password, salt, 25000, 512, 'sha256', (e, hashBuffer)=>{
                    if (e) reject(null);
                    if ((0, _scmp.default)(hashBuffer, Buffer.from(hash, 'hex'))) {
                        resolve(doc);
                    } else {
                        reject(null);
                    }
                });
            });
            return res;
        }
        return null;
    } catch (err) {
        return null;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvYXV0aGVudGljYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHNjbXAgZnJvbSAnc2NtcCdcblxuaW1wb3J0IHR5cGUgeyBUeXBlV2l0aElEIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuXG50eXBlIERvYyA9IFR5cGVXaXRoSUQgJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuXG50eXBlIEFyZ3MgPSB7XG4gIGRvYzogRG9jXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZUxvY2FsU3RyYXRlZ3kgPSBhc3luYyAoeyBkb2MsIHBhc3N3b3JkIH06IEFyZ3MpOiBQcm9taXNlPERvYyB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGhhc2gsIHNhbHQgfSA9IGRvY1xuXG4gICAgaWYgKHR5cGVvZiBzYWx0ID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgaGFzaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IG5ldyBQcm9taXNlPERvYyB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY3J5cHRvLnBia2RmMihwYXNzd29yZCwgc2FsdCwgMjUwMDAsIDUxMiwgJ3NoYTI1NicsIChlLCBoYXNoQnVmZmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGUpIHJlamVjdChudWxsKVxuXG4gICAgICAgICAgaWYgKHNjbXAoaGFzaEJ1ZmZlciwgQnVmZmVyLmZyb20oaGFzaCwgJ2hleCcpKSkge1xuICAgICAgICAgICAgcmVzb2x2ZShkb2MpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZXNcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iXSwibmFtZXMiOlsiYXV0aGVudGljYXRlTG9jYWxTdHJhdGVneSIsImRvYyIsInBhc3N3b3JkIiwiaGFzaCIsInNhbHQiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyeXB0byIsInBia2RmMiIsImUiLCJoYXNoQnVmZmVyIiwic2NtcCIsIkJ1ZmZlciIsImZyb20iLCJlcnIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFZYUE7OztlQUFBQTs7OytEQVpNOzZEQUNGOzs7Ozs7QUFXVixNQUFNQSw0QkFBNEIsT0FBTyxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBUTtJQUNyRSxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRSxHQUFHSDtRQUV2QixJQUFJLE9BQU9HLFNBQVMsWUFBWSxPQUFPRCxTQUFTLFVBQVU7WUFDeEQsTUFBTUUsTUFBTSxNQUFNLElBQUlDLFFBQW9CLENBQUNDLFNBQVNDO2dCQUNsREMsZUFBTSxDQUFDQyxNQUFNLENBQUNSLFVBQVVFLE1BQU0sT0FBTyxLQUFLLFVBQVUsQ0FBQ08sR0FBR0M7b0JBQ3RELElBQUlELEdBQUdILE9BQU87b0JBRWQsSUFBSUssSUFBQUEsYUFBSSxFQUFDRCxZQUFZRSxPQUFPQyxJQUFJLENBQUNaLE1BQU0sU0FBUzt3QkFDOUNJLFFBQVFOO29CQUNWLE9BQU87d0JBQ0xPLE9BQU87b0JBQ1Q7Z0JBQ0Y7WUFDRjtZQUVBLE9BQU9IO1FBQ1Q7UUFFQSxPQUFPO0lBQ1QsRUFBRSxPQUFPVyxLQUFLO1FBQ1osT0FBTztJQUNUO0FBQ0YifQ==