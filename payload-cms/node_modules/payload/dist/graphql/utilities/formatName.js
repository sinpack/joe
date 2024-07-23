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
const numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];
const formatName = (string)=>{
    let sanitizedString = String(string);
    const firstLetter = sanitizedString.substring(0, 1);
    if (numbers.indexOf(firstLetter) > -1) {
        sanitizedString = `_${sanitizedString}`;
    }
    const formatted = sanitizedString// Convert accented characters
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/\./g, '_').replace(/-|\//g, '_').replace(/\+/g, '_').replace(/,/g, '_').replace(/\(/g, '_').replace(/\)/g, '_').replace(/'/g, '_').replace(/ /g, '');
    return formatted || '_';
};
const _default = formatName;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXROYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG51bWJlcnMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXVxuXG5jb25zdCBmb3JtYXROYW1lID0gKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgbGV0IHNhbml0aXplZFN0cmluZyA9IFN0cmluZyhzdHJpbmcpXG5cbiAgY29uc3QgZmlyc3RMZXR0ZXIgPSBzYW5pdGl6ZWRTdHJpbmcuc3Vic3RyaW5nKDAsIDEpXG5cbiAgaWYgKG51bWJlcnMuaW5kZXhPZihmaXJzdExldHRlcikgPiAtMSkge1xuICAgIHNhbml0aXplZFN0cmluZyA9IGBfJHtzYW5pdGl6ZWRTdHJpbmd9YFxuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkID0gc2FuaXRpemVkU3RyaW5nXG4gICAgLy8gQ29udmVydCBhY2NlbnRlZCBjaGFyYWN0ZXJzXG4gICAgLm5vcm1hbGl6ZSgnTkZLRCcpXG4gICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuXG4gICAgLnJlcGxhY2UoL1xcLi9nLCAnXycpXG4gICAgLnJlcGxhY2UoLy18XFwvL2csICdfJylcbiAgICAucmVwbGFjZSgvXFwrL2csICdfJylcbiAgICAucmVwbGFjZSgvLC9nLCAnXycpXG4gICAgLnJlcGxhY2UoL1xcKC9nLCAnXycpXG4gICAgLnJlcGxhY2UoL1xcKS9nLCAnXycpXG4gICAgLnJlcGxhY2UoLycvZywgJ18nKVxuICAgIC5yZXBsYWNlKC8gL2csICcnKVxuXG4gIHJldHVybiBmb3JtYXR0ZWQgfHwgJ18nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdE5hbWVcbiJdLCJuYW1lcyI6WyJudW1iZXJzIiwiZm9ybWF0TmFtZSIsInN0cmluZyIsInNhbml0aXplZFN0cmluZyIsIlN0cmluZyIsImZpcnN0TGV0dGVyIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImZvcm1hdHRlZCIsIm5vcm1hbGl6ZSIsInJlcGxhY2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNEJBOzs7ZUFBQTs7O0FBNUJBLE1BQU1BLFVBQVU7SUFBQztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztDQUFJO0FBRWxFLE1BQU1DLGFBQWEsQ0FBQ0M7SUFDbEIsSUFBSUMsa0JBQWtCQyxPQUFPRjtJQUU3QixNQUFNRyxjQUFjRixnQkFBZ0JHLFNBQVMsQ0FBQyxHQUFHO0lBRWpELElBQUlOLFFBQVFPLE9BQU8sQ0FBQ0YsZUFBZSxDQUFDLEdBQUc7UUFDckNGLGtCQUFrQixDQUFDLENBQUMsRUFBRUEsZ0JBQWdCLENBQUM7SUFDekM7SUFFQSxNQUFNSyxZQUFZTCxlQUNoQiw4QkFBOEI7S0FDN0JNLFNBQVMsQ0FBQyxRQUNWQyxPQUFPLENBQUMsb0JBQW9CLElBRTVCQSxPQUFPLENBQUMsT0FBTyxLQUNmQSxPQUFPLENBQUMsU0FBUyxLQUNqQkEsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLE1BQU0sS0FDZEEsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLE1BQU0sS0FDZEEsT0FBTyxDQUFDLE1BQU07SUFFakIsT0FBT0YsYUFBYTtBQUN0QjtNQUVBLFdBQWVQIn0=