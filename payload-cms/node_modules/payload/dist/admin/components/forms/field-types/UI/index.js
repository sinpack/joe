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
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const UI = (props)=>{
    const { admin: { components: { Field } } } = props;
    if (Field) {
        return /*#__PURE__*/ _react.default.createElement(Field, props);
    }
    return null;
};
const _default = (0, _withCondition.default)(UI);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1VJL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgVUlGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nXG5cbmNvbnN0IFVJOiBSZWFjdC5GQzxVSUZpZWxkPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHsgRmllbGQgfSxcbiAgICB9LFxuICB9ID0gcHJvcHNcblxuICBpZiAoRmllbGQpIHtcbiAgICByZXR1cm4gPEZpZWxkIHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oVUkpXG4iXSwibmFtZXMiOlsiVUkiLCJwcm9wcyIsImFkbWluIiwiY29tcG9uZW50cyIsIkZpZWxkIiwid2l0aENvbmRpdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0JBOzs7ZUFBQTs7OzhEQXBCa0I7c0VBSVE7Ozs7OztBQUUxQixNQUFNQSxLQUF3QixDQUFDQztJQUM3QixNQUFNLEVBQ0pDLE9BQU8sRUFDTEMsWUFBWSxFQUFFQyxLQUFLLEVBQUUsRUFDdEIsRUFDRixHQUFHSDtJQUVKLElBQUlHLE9BQU87UUFDVCxxQkFBTyw2QkFBQ0EsT0FBVUg7SUFDcEI7SUFFQSxPQUFPO0FBQ1Q7TUFFQSxXQUFlSSxJQUFBQSxzQkFBYSxFQUFDTCJ9