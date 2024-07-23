"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createNestedFieldPath", {
    enumerable: true,
    get: function() {
        return createNestedFieldPath;
    }
});
const _types = require("../../../../fields/config/types");
const createNestedFieldPath = (parentPath, field)=>{
    if (parentPath) {
        if ((0, _types.fieldAffectsData)(field)) {
            return `${parentPath}.${field.name}`;
        }
        return parentPath;
    }
    if ((0, _types.fieldAffectsData)(field)) {
        return field.name;
    }
    return '';
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCA9IChwYXJlbnRQYXRoOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHN0cmluZyA9PiB7XG4gIGlmIChwYXJlbnRQYXRoKSB7XG4gICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICByZXR1cm4gYCR7cGFyZW50UGF0aH0uJHtmaWVsZC5uYW1lfWBcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50UGF0aFxuICB9XG5cbiAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgcmV0dXJuIGZpZWxkLm5hbWVcbiAgfVxuXG4gIHJldHVybiAnJ1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZU5lc3RlZEZpZWxkUGF0aCIsInBhcmVudFBhdGgiLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7Ozt1QkFGb0I7QUFFMUIsTUFBTUEsd0JBQXdCLENBQUNDLFlBQW9CQztJQUN4RCxJQUFJRCxZQUFZO1FBQ2QsSUFBSUUsSUFBQUEsdUJBQWdCLEVBQUNELFFBQVE7WUFDM0IsT0FBTyxDQUFDLEVBQUVELFdBQVcsQ0FBQyxFQUFFQyxNQUFNRSxJQUFJLENBQUMsQ0FBQztRQUN0QztRQUVBLE9BQU9IO0lBQ1Q7SUFFQSxJQUFJRSxJQUFBQSx1QkFBZ0IsRUFBQ0QsUUFBUTtRQUMzQixPQUFPQSxNQUFNRSxJQUFJO0lBQ25CO0lBRUEsT0FBTztBQUNUIn0=