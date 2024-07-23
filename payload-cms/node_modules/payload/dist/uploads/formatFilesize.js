"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return formatBytes;
    }
});
function formatBytes(bytes, decimals = 0) {
    if (bytes === 0) return '0 bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
        ' bytes',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB'
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))}${sizes[i]}`;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2Zvcm1hdEZpbGVzaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdEJ5dGVzKGJ5dGVzOiBudW1iZXIsIGRlY2ltYWxzID0gMCk6IHN0cmluZyB7XG4gIGlmIChieXRlcyA9PT0gMCkgcmV0dXJuICcwIGJ5dGVzJ1xuXG4gIGNvbnN0IGsgPSAxMDI0XG4gIGNvbnN0IGRtID0gZGVjaW1hbHMgPCAwID8gMCA6IGRlY2ltYWxzXG4gIGNvbnN0IHNpemVzID0gWycgYnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXVxuXG4gIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKVxuXG4gIHJldHVybiBgJHtwYXJzZUZsb2F0KChieXRlcyAvIGsgKiogaSkudG9GaXhlZChkbSkpfSR7c2l6ZXNbaV19YFxufVxuIl0sIm5hbWVzIjpbImZvcm1hdEJ5dGVzIiwiYnl0ZXMiLCJkZWNpbWFscyIsImsiLCJkbSIsInNpemVzIiwiaSIsIk1hdGgiLCJmbG9vciIsImxvZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFBQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsWUFBWUMsS0FBYSxFQUFFQyxXQUFXLENBQUM7SUFDN0QsSUFBSUQsVUFBVSxHQUFHLE9BQU87SUFFeEIsTUFBTUUsSUFBSTtJQUNWLE1BQU1DLEtBQUtGLFdBQVcsSUFBSSxJQUFJQTtJQUM5QixNQUFNRyxRQUFRO1FBQUM7UUFBVTtRQUFNO1FBQU07UUFBTTtRQUFNO1FBQU07UUFBTTtRQUFNO0tBQUs7SUFFeEUsTUFBTUMsSUFBSUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxHQUFHLENBQUNSLFNBQVNNLEtBQUtFLEdBQUcsQ0FBQ047SUFFaEQsT0FBTyxDQUFDLEVBQUVPLFdBQVcsQUFBQ1QsQ0FBQUEsUUFBUUUsS0FBS0csQ0FBQUEsRUFBR0ssT0FBTyxDQUFDUCxLQUFLLEVBQUVDLEtBQUssQ0FBQ0MsRUFBRSxDQUFDLENBQUM7QUFDakUifQ==