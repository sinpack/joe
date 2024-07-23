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
const _useTitle = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useTitle"));
const _IDLabel = /*#__PURE__*/ _interop_require_default(require("../IDLabel"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'render-title';
const RenderTitle = (props)=>{
    const { className, collection, data, element = 'h1', fallback = '[untitled]', global, title: titleFromProps } = props;
    const titleFromForm = (0, _useTitle.default)({
        collection,
        global
    });
    let title = titleFromForm;
    if (!title) title = data?.id;
    if (!title) title = fallback;
    title = titleFromProps || title;
    const idAsTitle = title === data?.id;
    const Tag = element;
    return /*#__PURE__*/ _react.default.createElement(Tag, {
        className: [
            className,
            baseClass,
            idAsTitle && `${baseClass}--has-id`
        ].filter(Boolean).join(' '),
        title: title
    }, idAsTitle ? /*#__PURE__*/ _react.default.createElement(_IDLabel.default, {
        className: `${baseClass}__id`,
        id: data?.id
    }) : title);
};
const _default = RenderTitle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlbmRlclRpdGxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgdXNlVGl0bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVGl0bGUnXG5pbXBvcnQgSURMYWJlbCBmcm9tICcuLi9JRExhYmVsJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZW5kZXItdGl0bGUnXG5cbmNvbnN0IFJlbmRlclRpdGxlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGRhdGEsXG4gICAgZWxlbWVudCA9ICdoMScsXG4gICAgZmFsbGJhY2sgPSAnW3VudGl0bGVkXScsXG4gICAgZ2xvYmFsLFxuICAgIHRpdGxlOiB0aXRsZUZyb21Qcm9wcyxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgdGl0bGVGcm9tRm9ybSA9IHVzZVRpdGxlKHsgY29sbGVjdGlvbiwgZ2xvYmFsIH0pXG5cbiAgbGV0IHRpdGxlID0gdGl0bGVGcm9tRm9ybVxuICBpZiAoIXRpdGxlKSB0aXRsZSA9IGRhdGE/LmlkXG4gIGlmICghdGl0bGUpIHRpdGxlID0gZmFsbGJhY2tcbiAgdGl0bGUgPSB0aXRsZUZyb21Qcm9wcyB8fCB0aXRsZVxuXG4gIGNvbnN0IGlkQXNUaXRsZSA9IHRpdGxlID09PSBkYXRhPy5pZFxuXG4gIGNvbnN0IFRhZyA9IGVsZW1lbnRcblxuICByZXR1cm4gKFxuICAgIDxUYWdcbiAgICAgIGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgYmFzZUNsYXNzLCBpZEFzVGl0bGUgJiYgYCR7YmFzZUNsYXNzfS0taGFzLWlkYF1cbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignICcpfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgID5cbiAgICAgIHtpZEFzVGl0bGUgPyA8SURMYWJlbCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lkYH0gaWQ9e2RhdGE/LmlkfSAvPiA6IHRpdGxlfVxuICAgIDwvVGFnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclRpdGxlXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiUmVuZGVyVGl0bGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvbGxlY3Rpb24iLCJkYXRhIiwiZWxlbWVudCIsImZhbGxiYWNrIiwiZ2xvYmFsIiwidGl0bGUiLCJ0aXRsZUZyb21Qcm9wcyIsInRpdGxlRnJvbUZvcm0iLCJ1c2VUaXRsZSIsImlkIiwiaWRBc1RpdGxlIiwiVGFnIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJJRExhYmVsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTRDQTs7O2VBQUE7Ozs4REE1Q2tCO2lFQUlHO2dFQUNEO1FBQ2I7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsY0FBK0IsQ0FBQ0M7SUFDcEMsTUFBTSxFQUNKQyxTQUFTLEVBQ1RDLFVBQVUsRUFDVkMsSUFBSSxFQUNKQyxVQUFVLElBQUksRUFDZEMsV0FBVyxZQUFZLEVBQ3ZCQyxNQUFNLEVBQ05DLE9BQU9DLGNBQWMsRUFDdEIsR0FBR1I7SUFFSixNQUFNUyxnQkFBZ0JDLElBQUFBLGlCQUFRLEVBQUM7UUFBRVI7UUFBWUk7SUFBTztJQUVwRCxJQUFJQyxRQUFRRTtJQUNaLElBQUksQ0FBQ0YsT0FBT0EsUUFBUUosTUFBTVE7SUFDMUIsSUFBSSxDQUFDSixPQUFPQSxRQUFRRjtJQUNwQkUsUUFBUUMsa0JBQWtCRDtJQUUxQixNQUFNSyxZQUFZTCxVQUFVSixNQUFNUTtJQUVsQyxNQUFNRSxNQUFNVDtJQUVaLHFCQUNFLDZCQUFDUztRQUNDWixXQUFXO1lBQUNBO1lBQVdIO1lBQVdjLGFBQWEsQ0FBQyxFQUFFZCxVQUFVLFFBQVEsQ0FBQztTQUFDLENBQ25FZ0IsTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7UUFDUlQsT0FBT0E7T0FFTkssMEJBQVksNkJBQUNLLGdCQUFPO1FBQUNoQixXQUFXLENBQUMsRUFBRUgsVUFBVSxJQUFJLENBQUM7UUFBRWEsSUFBSVIsTUFBTVE7U0FBU0o7QUFHOUU7TUFFQSxXQUFlUiJ9