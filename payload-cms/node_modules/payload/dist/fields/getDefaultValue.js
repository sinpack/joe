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
const getValueWithDefault = async ({ defaultValue, locale, user, value })=>{
    if (typeof value !== 'undefined') {
        return value;
    }
    if (defaultValue && typeof defaultValue === 'function') {
        return defaultValue({
            locale,
            user
        });
    }
    return defaultValue;
};
const _default = getValueWithDefault;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWVsZHMvZ2V0RGVmYXVsdFZhbHVlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJy4uL2F1dGgnXG5cbnR5cGUgQXJncyA9IHtcbiAgZGVmYXVsdFZhbHVlOiB1bmtub3duXG4gIGxvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHVzZXI6IFVzZXJcbiAgdmFsdWU/OiB1bmtub3duXG59XG5cbmNvbnN0IGdldFZhbHVlV2l0aERlZmF1bHQgPSBhc3luYyAoe1xuICBkZWZhdWx0VmFsdWUsXG4gIGxvY2FsZSxcbiAgdXNlcixcbiAgdmFsdWUsXG59OiBBcmdzKTogUHJvbWlzZTx1bmtub3duPiA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAoZGVmYXVsdFZhbHVlICYmIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlKHsgbG9jYWxlLCB1c2VyIH0pXG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlV2l0aERlZmF1bHRcbiJdLCJuYW1lcyI6WyJnZXRWYWx1ZVdpdGhEZWZhdWx0IiwiZGVmYXVsdFZhbHVlIiwibG9jYWxlIiwidXNlciIsInZhbHVlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBMEJBOzs7ZUFBQTs7O0FBakJBLE1BQU1BLHNCQUFzQixPQUFPLEVBQ2pDQyxZQUFZLEVBQ1pDLE1BQU0sRUFDTkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0E7SUFDTCxJQUFJLE9BQU9BLFVBQVUsYUFBYTtRQUNoQyxPQUFPQTtJQUNUO0lBRUEsSUFBSUgsZ0JBQWdCLE9BQU9BLGlCQUFpQixZQUFZO1FBQ3RELE9BQU9BLGFBQWE7WUFBRUM7WUFBUUM7UUFBSztJQUNyQztJQUVBLE9BQU9GO0FBQ1Q7TUFFQSxXQUFlRCJ9