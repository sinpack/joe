"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createArrayFromCommaDelineated", {
    enumerable: true,
    get: function() {
        return createArrayFromCommaDelineated;
    }
});
function createArrayFromCommaDelineated(input) {
    if (Array.isArray(input)) return input;
    if (input.indexOf(',') > -1) {
        return input.split(',');
    }
    return [
        input
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3JlYXRlQXJyYXlGcm9tQ29tbWFEZWxpbmVhdGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcnJheUZyb21Db21tYURlbGluZWF0ZWQoaW5wdXQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSByZXR1cm4gaW5wdXRcbiAgaWYgKGlucHV0LmluZGV4T2YoJywnKSA+IC0xKSB7XG4gICAgcmV0dXJuIGlucHV0LnNwbGl0KCcsJylcbiAgfVxuICByZXR1cm4gW2lucHV0XVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUFycmF5RnJvbUNvbW1hRGVsaW5lYXRlZCIsImlucHV0IiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsInNwbGl0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFBZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLCtCQUErQkMsS0FBYTtJQUMxRCxJQUFJQyxNQUFNQyxPQUFPLENBQUNGLFFBQVEsT0FBT0E7SUFDakMsSUFBSUEsTUFBTUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHO1FBQzNCLE9BQU9ILE1BQU1JLEtBQUssQ0FBQztJQUNyQjtJQUNBLE9BQU87UUFBQ0o7S0FBTTtBQUNoQiJ9