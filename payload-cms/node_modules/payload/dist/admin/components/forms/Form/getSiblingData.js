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
const _unflatten = require("../../../utilities/unflatten");
const _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("./reduceFieldsToValues"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getSiblingData = (fields, path)=>{
    if (path.indexOf('.') === -1) {
        return (0, _reduceFieldsToValues.default)(fields, true);
    }
    const siblingFields = {};
    // Determine if the last segment of the path is an array-based row
    const pathSegments = path.split('.');
    const lastSegment = pathSegments[pathSegments.length - 1];
    const lastSegmentIsRowIndex = !Number.isNaN(Number(lastSegment));
    let parentFieldPath;
    if (lastSegmentIsRowIndex) {
        // If the last segment is a row index,
        // the sibling data is that row's contents
        // so create a parent field path that will
        // retrieve all contents of that row index only
        parentFieldPath = `${path}.`;
    } else {
        // Otherwise, the last path segment is a field name
        // and it should be removed
        parentFieldPath = path.substring(0, path.lastIndexOf('.') + 1);
    }
    Object.keys(fields).forEach((fieldKey)=>{
        if (!fields[fieldKey].disableFormData && fieldKey.indexOf(parentFieldPath) === 0) {
            siblingFields[fieldKey.replace(parentFieldPath, '')] = fields[fieldKey].value;
        }
    });
    return (0, _unflatten.unflatten)(siblingFields);
};
const _default = getSiblingData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vZ2V0U2libGluZ0RhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEYXRhLCBGaWVsZHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyB1bmZsYXR0ZW4gfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvdW5mbGF0dGVuJ1xuaW1wb3J0IHJlZHVjZUZpZWxkc1RvVmFsdWVzIGZyb20gJy4vcmVkdWNlRmllbGRzVG9WYWx1ZXMnXG5cbmNvbnN0IGdldFNpYmxpbmdEYXRhID0gKGZpZWxkczogRmllbGRzLCBwYXRoOiBzdHJpbmcpOiBEYXRhID0+IHtcbiAgaWYgKHBhdGguaW5kZXhPZignLicpID09PSAtMSkge1xuICAgIHJldHVybiByZWR1Y2VGaWVsZHNUb1ZhbHVlcyhmaWVsZHMsIHRydWUpXG4gIH1cbiAgY29uc3Qgc2libGluZ0ZpZWxkcyA9IHt9XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIHBhdGggaXMgYW4gYXJyYXktYmFzZWQgcm93XG4gIGNvbnN0IHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKVxuICBjb25zdCBsYXN0U2VnbWVudCA9IHBhdGhTZWdtZW50c1twYXRoU2VnbWVudHMubGVuZ3RoIC0gMV1cbiAgY29uc3QgbGFzdFNlZ21lbnRJc1Jvd0luZGV4ID0gIU51bWJlci5pc05hTihOdW1iZXIobGFzdFNlZ21lbnQpKVxuXG4gIGxldCBwYXJlbnRGaWVsZFBhdGg6IHN0cmluZ1xuXG4gIGlmIChsYXN0U2VnbWVudElzUm93SW5kZXgpIHtcbiAgICAvLyBJZiB0aGUgbGFzdCBzZWdtZW50IGlzIGEgcm93IGluZGV4LFxuICAgIC8vIHRoZSBzaWJsaW5nIGRhdGEgaXMgdGhhdCByb3cncyBjb250ZW50c1xuICAgIC8vIHNvIGNyZWF0ZSBhIHBhcmVudCBmaWVsZCBwYXRoIHRoYXQgd2lsbFxuICAgIC8vIHJldHJpZXZlIGFsbCBjb250ZW50cyBvZiB0aGF0IHJvdyBpbmRleCBvbmx5XG4gICAgcGFyZW50RmllbGRQYXRoID0gYCR7cGF0aH0uYFxuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgdGhlIGxhc3QgcGF0aCBzZWdtZW50IGlzIGEgZmllbGQgbmFtZVxuICAgIC8vIGFuZCBpdCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgIHBhcmVudEZpZWxkUGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHBhdGgubGFzdEluZGV4T2YoJy4nKSArIDEpXG4gIH1cblxuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKGZpZWxkS2V5KSA9PiB7XG4gICAgaWYgKCFmaWVsZHNbZmllbGRLZXldLmRpc2FibGVGb3JtRGF0YSAmJiBmaWVsZEtleS5pbmRleE9mKHBhcmVudEZpZWxkUGF0aCkgPT09IDApIHtcbiAgICAgIHNpYmxpbmdGaWVsZHNbZmllbGRLZXkucmVwbGFjZShwYXJlbnRGaWVsZFBhdGgsICcnKV0gPSBmaWVsZHNbZmllbGRLZXldLnZhbHVlXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB1bmZsYXR0ZW4oc2libGluZ0ZpZWxkcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2libGluZ0RhdGFcbiJdLCJuYW1lcyI6WyJnZXRTaWJsaW5nRGF0YSIsImZpZWxkcyIsInBhdGgiLCJpbmRleE9mIiwicmVkdWNlRmllbGRzVG9WYWx1ZXMiLCJzaWJsaW5nRmllbGRzIiwicGF0aFNlZ21lbnRzIiwic3BsaXQiLCJsYXN0U2VnbWVudCIsImxlbmd0aCIsImxhc3RTZWdtZW50SXNSb3dJbmRleCIsIk51bWJlciIsImlzTmFOIiwicGFyZW50RmllbGRQYXRoIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImZpZWxkS2V5IiwiZGlzYWJsZUZvcm1EYXRhIiwicmVwbGFjZSIsInZhbHVlIiwidW5mbGF0dGVuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF1Q0E7OztlQUFBOzs7MkJBckMwQjs2RUFDTzs7Ozs7O0FBRWpDLE1BQU1BLGlCQUFpQixDQUFDQyxRQUFnQkM7SUFDdEMsSUFBSUEsS0FBS0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHO1FBQzVCLE9BQU9DLElBQUFBLDZCQUFvQixFQUFDSCxRQUFRO0lBQ3RDO0lBQ0EsTUFBTUksZ0JBQWdCLENBQUM7SUFFdkIsa0VBQWtFO0lBQ2xFLE1BQU1DLGVBQWVKLEtBQUtLLEtBQUssQ0FBQztJQUNoQyxNQUFNQyxjQUFjRixZQUFZLENBQUNBLGFBQWFHLE1BQU0sR0FBRyxFQUFFO0lBQ3pELE1BQU1DLHdCQUF3QixDQUFDQyxPQUFPQyxLQUFLLENBQUNELE9BQU9IO0lBRW5ELElBQUlLO0lBRUosSUFBSUgsdUJBQXVCO1FBQ3pCLHNDQUFzQztRQUN0QywwQ0FBMEM7UUFDMUMsMENBQTBDO1FBQzFDLCtDQUErQztRQUMvQ0csa0JBQWtCLENBQUMsRUFBRVgsS0FBSyxDQUFDLENBQUM7SUFDOUIsT0FBTztRQUNMLG1EQUFtRDtRQUNuRCwyQkFBMkI7UUFDM0JXLGtCQUFrQlgsS0FBS1ksU0FBUyxDQUFDLEdBQUdaLEtBQUthLFdBQVcsQ0FBQyxPQUFPO0lBQzlEO0lBRUFDLE9BQU9DLElBQUksQ0FBQ2hCLFFBQVFpQixPQUFPLENBQUMsQ0FBQ0M7UUFDM0IsSUFBSSxDQUFDbEIsTUFBTSxDQUFDa0IsU0FBUyxDQUFDQyxlQUFlLElBQUlELFNBQVNoQixPQUFPLENBQUNVLHFCQUFxQixHQUFHO1lBQ2hGUixhQUFhLENBQUNjLFNBQVNFLE9BQU8sQ0FBQ1IsaUJBQWlCLElBQUksR0FBR1osTUFBTSxDQUFDa0IsU0FBUyxDQUFDRyxLQUFLO1FBQy9FO0lBQ0Y7SUFFQSxPQUFPQyxJQUFBQSxvQkFBUyxFQUFDbEI7QUFDbkI7TUFFQSxXQUFlTCJ9