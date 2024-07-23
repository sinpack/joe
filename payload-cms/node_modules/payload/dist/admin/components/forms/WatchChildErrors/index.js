"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WatchChildErrors", {
    enumerable: true,
    get: function() {
        return WatchChildErrors;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _types = require("../../../../fields/config/types");
const _useThrottledEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThrottledEffect"));
const _context = require("../Form/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const buildPathSegments = (parentPath, fieldSchema)=>{
    const pathNames = fieldSchema.reduce((acc, subField)=>{
        if ((0, _types.fieldHasSubFields)(subField) && (0, _types.fieldAffectsData)(subField)) {
            // group, block, array
            acc.push(parentPath ? `${parentPath}.${subField.name}.` : `${subField.name}.`);
        } else if ((0, _types.fieldHasSubFields)(subField)) {
            // rows, collapsibles, unnamed-tab
            acc.push(...buildPathSegments(parentPath, subField.fields));
        } else if (subField.type === 'tabs') {
            // tabs
            subField.tabs.forEach((tab)=>{
                let tabPath = parentPath;
                if ((0, _types.tabHasName)(tab)) {
                    tabPath = parentPath ? `${parentPath}.${tab.name}` : tab.name;
                }
                acc.push(...buildPathSegments(tabPath, tab.fields));
            });
        } else if ((0, _types.fieldAffectsData)(subField)) {
            // text, number, date, etc.
            acc.push(parentPath ? `${parentPath}.${subField.name}` : subField.name);
        }
        return acc;
    }, []);
    return pathNames;
};
const WatchChildErrors = ({ fieldSchema, path, setErrorCount })=>{
    const [fields] = (0, _context.useAllFormFields)();
    const hasSubmitted = (0, _context.useFormSubmitted)();
    const [pathSegments] = _react.default.useState(()=>{
        if (fieldSchema) {
            return buildPathSegments(path, fieldSchema);
        }
        return [
            `${path}.`
        ];
    });
    (0, _useThrottledEffect.default)(()=>{
        let errorCount = 0;
        if (hasSubmitted) {
            Object.entries(fields).forEach(([key])=>{
                const matchingSegment = pathSegments.some((segment)=>{
                    if (segment.endsWith('.')) {
                        return key.startsWith(segment);
                    }
                    return key === segment;
                });
                if (matchingSegment) {
                    if ('valid' in fields[key] && !fields[key].valid) {
                        errorCount += 1;
                    }
                }
            });
        }
        setErrorCount(errorCount);
    }, 250, [
        fields,
        hasSubmitted,
        pathSegments
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1dhdGNoQ2hpbGRFcnJvcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IEZpZWxkLCBUYWJBc0ZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRIYXNTdWJGaWVsZHMsIHRhYkhhc05hbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHVzZVRocm90dGxlZEVmZmVjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaHJvdHRsZWRFZmZlY3QnXG5pbXBvcnQgeyB1c2VBbGxGb3JtRmllbGRzLCB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vRm9ybS9jb250ZXh0J1xuXG5jb25zdCBidWlsZFBhdGhTZWdtZW50cyA9IChwYXJlbnRQYXRoOiBzdHJpbmcsIGZpZWxkU2NoZW1hOiBGaWVsZFtdKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBwYXRoTmFtZXMgPSBmaWVsZFNjaGVtYS5yZWR1Y2UoKGFjYywgc3ViRmllbGQpID0+IHtcbiAgICBpZiAoZmllbGRIYXNTdWJGaWVsZHMoc3ViRmllbGQpICYmIGZpZWxkQWZmZWN0c0RhdGEoc3ViRmllbGQpKSB7XG4gICAgICAvLyBncm91cCwgYmxvY2ssIGFycmF5XG4gICAgICBhY2MucHVzaChwYXJlbnRQYXRoID8gYCR7cGFyZW50UGF0aH0uJHtzdWJGaWVsZC5uYW1lfS5gIDogYCR7c3ViRmllbGQubmFtZX0uYClcbiAgICB9IGVsc2UgaWYgKGZpZWxkSGFzU3ViRmllbGRzKHN1YkZpZWxkKSkge1xuICAgICAgLy8gcm93cywgY29sbGFwc2libGVzLCB1bm5hbWVkLXRhYlxuICAgICAgYWNjLnB1c2goLi4uYnVpbGRQYXRoU2VnbWVudHMocGFyZW50UGF0aCwgc3ViRmllbGQuZmllbGRzKSlcbiAgICB9IGVsc2UgaWYgKHN1YkZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgLy8gdGFic1xuICAgICAgc3ViRmllbGQudGFicy5mb3JFYWNoKCh0YWI6IFRhYkFzRmllbGQpID0+IHtcbiAgICAgICAgbGV0IHRhYlBhdGggPSBwYXJlbnRQYXRoXG4gICAgICAgIGlmICh0YWJIYXNOYW1lKHRhYikpIHtcbiAgICAgICAgICB0YWJQYXRoID0gcGFyZW50UGF0aCA/IGAke3BhcmVudFBhdGh9LiR7dGFiLm5hbWV9YCA6IHRhYi5uYW1lXG4gICAgICAgIH1cbiAgICAgICAgYWNjLnB1c2goLi4uYnVpbGRQYXRoU2VnbWVudHModGFiUGF0aCwgdGFiLmZpZWxkcykpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoZmllbGRBZmZlY3RzRGF0YShzdWJGaWVsZCkpIHtcbiAgICAgIC8vIHRleHQsIG51bWJlciwgZGF0ZSwgZXRjLlxuICAgICAgYWNjLnB1c2gocGFyZW50UGF0aCA/IGAke3BhcmVudFBhdGh9LiR7c3ViRmllbGQubmFtZX1gIDogc3ViRmllbGQubmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxuXG4gIHJldHVybiBwYXRoTmFtZXNcbn1cblxudHlwZSBUcmFja1N1YlNjaGVtYUVycm9yQ291bnRQcm9wcyA9IHtcbiAgLyoqXG4gICAqIE9ubHkgZm9yIGNvbGxhcHNpYmxlcywgYW5kIHVubmFtZWQtdGFic1xuICAgKi9cbiAgZmllbGRTY2hlbWE/OiBGaWVsZFtdXG4gIHBhdGg6IHN0cmluZ1xuICBzZXRFcnJvckNvdW50OiAoY291bnQ6IG51bWJlcikgPT4gdm9pZFxufVxuZXhwb3J0IGNvbnN0IFdhdGNoQ2hpbGRFcnJvcnM6IFJlYWN0LkZDPFRyYWNrU3ViU2NoZW1hRXJyb3JDb3VudFByb3BzPiA9ICh7XG4gIGZpZWxkU2NoZW1hLFxuICBwYXRoLFxuICBzZXRFcnJvckNvdW50LFxufSkgPT4ge1xuICBjb25zdCBbZmllbGRzXSA9IHVzZUFsbEZvcm1GaWVsZHMoKVxuICBjb25zdCBoYXNTdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKClcbiAgY29uc3QgW3BhdGhTZWdtZW50c10gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKGZpZWxkU2NoZW1hKSB7XG4gICAgICByZXR1cm4gYnVpbGRQYXRoU2VnbWVudHMocGF0aCwgZmllbGRTY2hlbWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIFtgJHtwYXRofS5gXVxuICB9KVxuXG4gIHVzZVRocm90dGxlZEVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBsZXQgZXJyb3JDb3VudCA9IDBcbiAgICAgIGlmIChoYXNTdWJtaXR0ZWQpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZmllbGRzKS5mb3JFYWNoKChba2V5XSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGNoaW5nU2VnbWVudCA9IHBhdGhTZWdtZW50cy5zb21lKChzZWdtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VnbWVudC5lbmRzV2l0aCgnLicpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBrZXkuc3RhcnRzV2l0aChzZWdtZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gc2VnbWVudFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpZiAobWF0Y2hpbmdTZWdtZW50KSB7XG4gICAgICAgICAgICBpZiAoJ3ZhbGlkJyBpbiBmaWVsZHNba2V5XSAmJiAhZmllbGRzW2tleV0udmFsaWQpIHtcbiAgICAgICAgICAgICAgZXJyb3JDb3VudCArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBzZXRFcnJvckNvdW50KGVycm9yQ291bnQpXG4gICAgfSxcbiAgICAyNTAsXG4gICAgW2ZpZWxkcywgaGFzU3VibWl0dGVkLCBwYXRoU2VnbWVudHNdLFxuICApXG5cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJuYW1lcyI6WyJXYXRjaENoaWxkRXJyb3JzIiwiYnVpbGRQYXRoU2VnbWVudHMiLCJwYXJlbnRQYXRoIiwiZmllbGRTY2hlbWEiLCJwYXRoTmFtZXMiLCJyZWR1Y2UiLCJhY2MiLCJzdWJGaWVsZCIsImZpZWxkSGFzU3ViRmllbGRzIiwiZmllbGRBZmZlY3RzRGF0YSIsInB1c2giLCJuYW1lIiwiZmllbGRzIiwidHlwZSIsInRhYnMiLCJmb3JFYWNoIiwidGFiIiwidGFiUGF0aCIsInRhYkhhc05hbWUiLCJwYXRoIiwic2V0RXJyb3JDb3VudCIsInVzZUFsbEZvcm1GaWVsZHMiLCJoYXNTdWJtaXR0ZWQiLCJ1c2VGb3JtU3VibWl0dGVkIiwicGF0aFNlZ21lbnRzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVRocm90dGxlZEVmZmVjdCIsImVycm9yQ291bnQiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwibWF0Y2hpbmdTZWdtZW50Iiwic29tZSIsInNlZ21lbnQiLCJlbmRzV2l0aCIsInN0YXJ0c1dpdGgiLCJ2YWxpZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTRDYUE7OztlQUFBQTs7OzhEQTVDSzt1QkFJOEM7MkVBQ2pDO3lCQUNvQjs7Ozs7O0FBRW5ELE1BQU1DLG9CQUFvQixDQUFDQyxZQUFvQkM7SUFDN0MsTUFBTUMsWUFBWUQsWUFBWUUsTUFBTSxDQUFDLENBQUNDLEtBQUtDO1FBQ3pDLElBQUlDLElBQUFBLHdCQUFpQixFQUFDRCxhQUFhRSxJQUFBQSx1QkFBZ0IsRUFBQ0YsV0FBVztZQUM3RCxzQkFBc0I7WUFDdEJELElBQUlJLElBQUksQ0FBQ1IsYUFBYSxDQUFDLEVBQUVBLFdBQVcsQ0FBQyxFQUFFSyxTQUFTSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFSixTQUFTSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sSUFBSUgsSUFBQUEsd0JBQWlCLEVBQUNELFdBQVc7WUFDdEMsa0NBQWtDO1lBQ2xDRCxJQUFJSSxJQUFJLElBQUlULGtCQUFrQkMsWUFBWUssU0FBU0ssTUFBTTtRQUMzRCxPQUFPLElBQUlMLFNBQVNNLElBQUksS0FBSyxRQUFRO1lBQ25DLE9BQU87WUFDUE4sU0FBU08sSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3JCLElBQUlDLFVBQVVmO2dCQUNkLElBQUlnQixJQUFBQSxpQkFBVSxFQUFDRixNQUFNO29CQUNuQkMsVUFBVWYsYUFBYSxDQUFDLEVBQUVBLFdBQVcsQ0FBQyxFQUFFYyxJQUFJTCxJQUFJLENBQUMsQ0FBQyxHQUFHSyxJQUFJTCxJQUFJO2dCQUMvRDtnQkFDQUwsSUFBSUksSUFBSSxJQUFJVCxrQkFBa0JnQixTQUFTRCxJQUFJSixNQUFNO1lBQ25EO1FBQ0YsT0FBTyxJQUFJSCxJQUFBQSx1QkFBZ0IsRUFBQ0YsV0FBVztZQUNyQywyQkFBMkI7WUFDM0JELElBQUlJLElBQUksQ0FBQ1IsYUFBYSxDQUFDLEVBQUVBLFdBQVcsQ0FBQyxFQUFFSyxTQUFTSSxJQUFJLENBQUMsQ0FBQyxHQUFHSixTQUFTSSxJQUFJO1FBQ3hFO1FBRUEsT0FBT0w7SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPRjtBQUNUO0FBVU8sTUFBTUosbUJBQTRELENBQUMsRUFDeEVHLFdBQVcsRUFDWGdCLElBQUksRUFDSkMsYUFBYSxFQUNkO0lBQ0MsTUFBTSxDQUFDUixPQUFPLEdBQUdTLElBQUFBLHlCQUFnQjtJQUNqQyxNQUFNQyxlQUFlQyxJQUFBQSx5QkFBZ0I7SUFDckMsTUFBTSxDQUFDQyxhQUFhLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDO1FBQ3BDLElBQUl2QixhQUFhO1lBQ2YsT0FBT0Ysa0JBQWtCa0IsTUFBTWhCO1FBQ2pDO1FBRUEsT0FBTztZQUFDLENBQUMsRUFBRWdCLEtBQUssQ0FBQyxDQUFDO1NBQUM7SUFDckI7SUFFQVEsSUFBQUEsMkJBQWtCLEVBQ2hCO1FBQ0UsSUFBSUMsYUFBYTtRQUNqQixJQUFJTixjQUFjO1lBQ2hCTyxPQUFPQyxPQUFPLENBQUNsQixRQUFRRyxPQUFPLENBQUMsQ0FBQyxDQUFDZ0IsSUFBSTtnQkFDbkMsTUFBTUMsa0JBQWtCUixhQUFhUyxJQUFJLENBQUMsQ0FBQ0M7b0JBQ3pDLElBQUlBLFFBQVFDLFFBQVEsQ0FBQyxNQUFNO3dCQUN6QixPQUFPSixJQUFJSyxVQUFVLENBQUNGO29CQUN4QjtvQkFDQSxPQUFPSCxRQUFRRztnQkFDakI7Z0JBRUEsSUFBSUYsaUJBQWlCO29CQUNuQixJQUFJLFdBQVdwQixNQUFNLENBQUNtQixJQUFJLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ21CLElBQUksQ0FBQ00sS0FBSyxFQUFFO3dCQUNoRFQsY0FBYztvQkFDaEI7Z0JBQ0Y7WUFDRjtRQUNGO1FBRUFSLGNBQWNRO0lBQ2hCLEdBQ0EsS0FDQTtRQUFDaEI7UUFBUVU7UUFBY0U7S0FBYTtJQUd0QyxPQUFPO0FBQ1QifQ==