"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useUseTitleField", {
    enumerable: true,
    get: function() {
        return useUseTitleField;
    }
});
const _types = require("../../exports/types");
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/flattenTopLevelFields"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const useUseTitleField = (collection)=>{
    const { admin: { useAsTitle }, fields } = collection;
    const topLevelFields = (0, _flattenTopLevelFields.default)(fields);
    return topLevelFields.find((field)=>(0, _types.fieldAffectsData)(field) && field.name === useAsTitle);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VVc2VBc1RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkQWZmZWN0aW5nRGF0YSwgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2V4cG9ydHMvdHlwZXMnXG5cbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9leHBvcnRzL3R5cGVzJ1xuaW1wb3J0IGZsYXR0ZW5GaWVsZHMgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2ZsYXR0ZW5Ub3BMZXZlbEZpZWxkcydcblxuZXhwb3J0IGNvbnN0IHVzZVVzZVRpdGxlRmllbGQgPSAoY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyk6IEZpZWxkQWZmZWN0aW5nRGF0YSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZG1pbjogeyB1c2VBc1RpdGxlIH0sXG4gICAgZmllbGRzLFxuICB9ID0gY29sbGVjdGlvblxuXG4gIGNvbnN0IHRvcExldmVsRmllbGRzID0gZmxhdHRlbkZpZWxkcyhmaWVsZHMpXG4gIHJldHVybiB0b3BMZXZlbEZpZWxkcy5maW5kKFxuICAgIChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gdXNlQXNUaXRsZSxcbiAgKSBhcyBGaWVsZEFmZmVjdGluZ0RhdGFcbn1cbiJdLCJuYW1lcyI6WyJ1c2VVc2VUaXRsZUZpZWxkIiwiY29sbGVjdGlvbiIsImFkbWluIiwidXNlQXNUaXRsZSIsImZpZWxkcyIsInRvcExldmVsRmllbGRzIiwiZmxhdHRlbkZpZWxkcyIsImZpbmQiLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFLYUE7OztlQUFBQTs7O3VCQUhvQjs4RUFDUDs7Ozs7O0FBRW5CLE1BQU1BLG1CQUFtQixDQUFDQztJQUMvQixNQUFNLEVBQ0pDLE9BQU8sRUFBRUMsVUFBVSxFQUFFLEVBQ3JCQyxNQUFNLEVBQ1AsR0FBR0g7SUFFSixNQUFNSSxpQkFBaUJDLElBQUFBLDhCQUFhLEVBQUNGO0lBQ3JDLE9BQU9DLGVBQWVFLElBQUksQ0FDeEIsQ0FBQ0MsUUFBVUMsSUFBQUEsdUJBQWdCLEVBQUNELFVBQVVBLE1BQU1FLElBQUksS0FBS1A7QUFFekQifQ==