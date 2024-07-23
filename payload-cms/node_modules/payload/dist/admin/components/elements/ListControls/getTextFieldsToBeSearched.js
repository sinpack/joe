"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTextFieldsToBeSearched", {
    enumerable: true,
    get: function() {
        return getTextFieldsToBeSearched;
    }
});
const _types = require("../../../../fields/config/types");
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../../../utilities/flattenTopLevelFields"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getTextFieldsToBeSearched = (listSearchableFields, fields)=>()=>{
        if (listSearchableFields) {
            const flattenedFields = (0, _flattenTopLevelFields.default)(fields);
            return flattenedFields.filter((field)=>(0, _types.fieldAffectsData)(field) && listSearchableFields.includes(field.name));
        }
        return null;
    };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3RDb250cm9scy9nZXRUZXh0RmllbGRzVG9CZVNlYXJjaGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmllbGQsIEZpZWxkQWZmZWN0aW5nRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IGZsYXR0ZW5GaWVsZHMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2ZsYXR0ZW5Ub3BMZXZlbEZpZWxkcydcblxuZXhwb3J0IGNvbnN0IGdldFRleHRGaWVsZHNUb0JlU2VhcmNoZWQgPVxuICAobGlzdFNlYXJjaGFibGVGaWVsZHM6IHN0cmluZ1tdLCBmaWVsZHM6IEZpZWxkW10pID0+ICgpOiBGaWVsZEFmZmVjdGluZ0RhdGFbXSA9PiB7XG4gICAgaWYgKGxpc3RTZWFyY2hhYmxlRmllbGRzKSB7XG4gICAgICBjb25zdCBmbGF0dGVuZWRGaWVsZHMgPSBmbGF0dGVuRmllbGRzKGZpZWxkcylcbiAgICAgIHJldHVybiBmbGF0dGVuZWRGaWVsZHMuZmlsdGVyKFxuICAgICAgICAoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGxpc3RTZWFyY2hhYmxlRmllbGRzLmluY2x1ZGVzKGZpZWxkLm5hbWUpLFxuICAgICAgKSBhcyBGaWVsZEFmZmVjdGluZ0RhdGFbXVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cbiJdLCJuYW1lcyI6WyJnZXRUZXh0RmllbGRzVG9CZVNlYXJjaGVkIiwibGlzdFNlYXJjaGFibGVGaWVsZHMiLCJmaWVsZHMiLCJmbGF0dGVuZWRGaWVsZHMiLCJmbGF0dGVuRmllbGRzIiwiZmlsdGVyIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwiaW5jbHVkZXMiLCJuYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUthQTs7O2VBQUFBOzs7dUJBSG9COzhFQUNQOzs7Ozs7QUFFbkIsTUFBTUEsNEJBQ1gsQ0FBQ0Msc0JBQWdDQyxTQUFvQjtRQUNuRCxJQUFJRCxzQkFBc0I7WUFDeEIsTUFBTUUsa0JBQWtCQyxJQUFBQSw4QkFBYSxFQUFDRjtZQUN0QyxPQUFPQyxnQkFBZ0JFLE1BQU0sQ0FDM0IsQ0FBQ0MsUUFBVUMsSUFBQUEsdUJBQWdCLEVBQUNELFVBQVVMLHFCQUFxQk8sUUFBUSxDQUFDRixNQUFNRyxJQUFJO1FBRWxGO1FBRUEsT0FBTztJQUNUIn0=