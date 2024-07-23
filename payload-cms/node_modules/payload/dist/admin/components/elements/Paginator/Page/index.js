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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'paginator__page';
const Page = ({ isCurrent, isFirstPage = false, isLastPage = false, page = 1, updatePage })=>{
    const classes = [
        baseClass,
        isCurrent && `${baseClass}--is-current`,
        isFirstPage && `${baseClass}--is-first-page`,
        isLastPage && `${baseClass}--is-last-page`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.default.createElement("button", {
        className: classes,
        onClick: ()=>updatePage(page),
        type: "button"
    }, page);
};
const _default = Page;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncGFnaW5hdG9yX19wYWdlJ1xuXG5jb25zdCBQYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBpc0N1cnJlbnQsXG4gIGlzRmlyc3RQYWdlID0gZmFsc2UsXG4gIGlzTGFzdFBhZ2UgPSBmYWxzZSxcbiAgcGFnZSA9IDEsXG4gIHVwZGF0ZVBhZ2UsXG59KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGlzQ3VycmVudCAmJiBgJHtiYXNlQ2xhc3N9LS1pcy1jdXJyZW50YCxcbiAgICBpc0ZpcnN0UGFnZSAmJiBgJHtiYXNlQ2xhc3N9LS1pcy1maXJzdC1wYWdlYCxcbiAgICBpc0xhc3RQYWdlICYmIGAke2Jhc2VDbGFzc30tLWlzLWxhc3QtcGFnZWAsXG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJyAnKVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXN9IG9uQ2xpY2s9eygpID0+IHVwZGF0ZVBhZ2UocGFnZSl9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgIHtwYWdlfVxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJQYWdlIiwiaXNDdXJyZW50IiwiaXNGaXJzdFBhZ2UiLCJpc0xhc3RQYWdlIiwicGFnZSIsInVwZGF0ZVBhZ2UiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNkJBOzs7ZUFBQTs7OzhEQTdCa0I7Ozs7OztBQUlsQixNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLE9BQXdCLENBQUMsRUFDN0JDLFNBQVMsRUFDVEMsY0FBYyxLQUFLLEVBQ25CQyxhQUFhLEtBQUssRUFDbEJDLE9BQU8sQ0FBQyxFQUNSQyxVQUFVLEVBQ1g7SUFDQyxNQUFNQyxVQUFVO1FBQ2RQO1FBQ0FFLGFBQWEsQ0FBQyxFQUFFRixVQUFVLFlBQVksQ0FBQztRQUN2Q0csZUFBZSxDQUFDLEVBQUVILFVBQVUsZUFBZSxDQUFDO1FBQzVDSSxjQUFjLENBQUMsRUFBRUosVUFBVSxjQUFjLENBQUM7S0FDM0MsQ0FDRVEsTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7SUFFUixxQkFDRSw2QkFBQ0M7UUFBT0MsV0FBV0w7UUFBU00sU0FBUyxJQUFNUCxXQUFXRDtRQUFPUyxNQUFLO09BQy9EVDtBQUdQO01BRUEsV0FBZUoifQ==