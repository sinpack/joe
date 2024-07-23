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
const _Thumbnail = /*#__PURE__*/ _interop_require_default(require("../../../../../../elements/Thumbnail"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'file';
const File = ({ collection, data, rowData })=>{
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Thumbnail.default, {
        className: `${baseClass}__thumbnail`,
        collection: collection,
        doc: {
            ...rowData,
            filename: data
        },
        size: "small"
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__filename`
    }, String(data)));
};
const _default = File;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9GaWxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgQ2VsbENvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZWxlbWVudHMvVGh1bWJuYWlsJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWxlJ1xuXG5jb25zdCBGaWxlOiBSZWFjdC5GQzxDZWxsQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+PiA9ICh7IGNvbGxlY3Rpb24sIGRhdGEsIHJvd0RhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPFRodW1ibmFpbFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RodW1ibmFpbGB9XG4gICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgIGRvYz17e1xuICAgICAgICAgIC4uLnJvd0RhdGEsXG4gICAgICAgICAgZmlsZW5hbWU6IGRhdGEsXG4gICAgICAgIH19XG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19maWxlbmFtZWB9PntTdHJpbmcoZGF0YSl9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJGaWxlIiwiY29sbGVjdGlvbiIsImRhdGEiLCJyb3dEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiVGh1bWJuYWlsIiwiZG9jIiwiZmlsZW5hbWUiLCJzaXplIiwic3BhbiIsIlN0cmluZyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTBCQTs7O2VBQUE7Ozs4REExQmtCO2tFQUlJO1FBQ2Y7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsT0FBK0MsQ0FBQyxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO0lBQ2pGLHFCQUNFLDZCQUFDQztRQUFJQyxXQUFXTjtxQkFDZCw2QkFBQ08sa0JBQVM7UUFDUkQsV0FBVyxDQUFDLEVBQUVOLFVBQVUsV0FBVyxDQUFDO1FBQ3BDRSxZQUFZQTtRQUNaTSxLQUFLO1lBQ0gsR0FBR0osT0FBTztZQUNWSyxVQUFVTjtRQUNaO1FBQ0FPLE1BQUs7c0JBRVAsNkJBQUNDO1FBQUtMLFdBQVcsQ0FBQyxFQUFFTixVQUFVLFVBQVUsQ0FBQztPQUFHWSxPQUFPVDtBQUd6RDtNQUVBLFdBQWVGIn0=