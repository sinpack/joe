"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNumber", {
    enumerable: true,
    get: function() {
        return isNumber;
    }
});
function isNumber(value) {
    if (typeof value === 'string' && value.trim() === '') {
        return false;
    }
    return !Number.isNaN(Number(value));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaXNOdW1iZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSlcbn1cbiJdLCJuYW1lcyI6WyJpc051bWJlciIsInZhbHVlIiwidHJpbSIsIk51bWJlciIsImlzTmFOIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFBZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLFNBQVNDLEtBQWM7SUFDckMsSUFBSSxPQUFPQSxVQUFVLFlBQVlBLE1BQU1DLElBQUksT0FBTyxJQUFJO1FBQ3BELE9BQU87SUFDVDtJQUVBLE9BQU8sQ0FBQ0MsT0FBT0MsS0FBSyxDQUFDRCxPQUFPRjtBQUM5QiJ9