"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useDrawerSlug", {
    enumerable: true,
    get: function() {
        return useDrawerSlug;
    }
});
const _react = require("react");
const _ = require(".");
const _EditDepth = require("../../utilities/EditDepth");
const useDrawerSlug = (slug)=>{
    const uuid = (0, _react.useId)();
    const editDepth = (0, _EditDepth.useEditDepth)();
    return (0, _.formatDrawerSlug)({
        depth: editDepth,
        slug: `${slug}-${uuid}`
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYXdlci91c2VEcmF3ZXJTbHVnLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VJZCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBmb3JtYXREcmF3ZXJTbHVnIH0gZnJvbSAnLidcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnXG5cbmV4cG9ydCBjb25zdCB1c2VEcmF3ZXJTbHVnID0gKHNsdWc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHV1aWQgPSB1c2VJZCgpXG4gIGNvbnN0IGVkaXREZXB0aCA9IHVzZUVkaXREZXB0aCgpXG4gIHJldHVybiBmb3JtYXREcmF3ZXJTbHVnKHtcbiAgICBkZXB0aDogZWRpdERlcHRoLFxuICAgIHNsdWc6IGAke3NsdWd9LSR7dXVpZH1gLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbInVzZURyYXdlclNsdWciLCJzbHVnIiwidXVpZCIsInVzZUlkIiwiZWRpdERlcHRoIiwidXNlRWRpdERlcHRoIiwiZm9ybWF0RHJhd2VyU2x1ZyIsImRlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUthQTs7O2VBQUFBOzs7dUJBTFM7a0JBRVc7MkJBQ0o7QUFFdEIsTUFBTUEsZ0JBQWdCLENBQUNDO0lBQzVCLE1BQU1DLE9BQU9DLElBQUFBLFlBQUs7SUFDbEIsTUFBTUMsWUFBWUMsSUFBQUEsdUJBQVk7SUFDOUIsT0FBT0MsSUFBQUEsa0JBQWdCLEVBQUM7UUFDdEJDLE9BQU9IO1FBQ1BILE1BQU0sQ0FBQyxFQUFFQSxLQUFLLENBQUMsRUFBRUMsS0FBSyxDQUFDO0lBQ3pCO0FBQ0YifQ==