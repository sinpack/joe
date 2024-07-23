"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "mapAsync", {
    enumerable: true,
    get: function() {
        return mapAsync;
    }
});
async function mapAsync(arr, callbackfn) {
    return Promise.all(arr.map(callbackfn));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFwQXN5bmMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcEFzeW5jPFQsIFU+KFxuICBhcnI6IFRbXSxcbiAgY2FsbGJhY2tmbjogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IFByb21pc2U8VT4sXG4pOiBQcm9taXNlPFVbXT4ge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoYXJyLm1hcChjYWxsYmFja2ZuKSlcbn1cbiJdLCJuYW1lcyI6WyJtYXBBc3luYyIsImFyciIsImNhbGxiYWNrZm4iLCJQcm9taXNlIiwiYWxsIiwibWFwIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFBc0JBOzs7ZUFBQUE7OztBQUFmLGVBQWVBLFNBQ3BCQyxHQUFRLEVBQ1JDLFVBQThEO0lBRTlELE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0gsSUFBSUksR0FBRyxDQUFDSDtBQUM3QiJ9