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
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CodeCell = ({ data, nowrap })=>{
    const textToShow = data.length > 100 ? `${data.substring(0, 100)}\u2026` : data;
    const noWrapStyle = nowrap ? {
        whiteSpace: 'nowrap'
    } : {};
    return /*#__PURE__*/ _react.default.createElement("code", {
        className: "code-cell",
        style: noWrapStyle
    }, /*#__PURE__*/ _react.default.createElement("span", null, textToShow));
};
const _default = CodeCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9Db2RlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgQ29kZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcbmltcG9ydCB0eXBlIHsgQ2VsbENvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVDZWxsUHJvcHMgZXh0ZW5kcyBDZWxsQ29tcG9uZW50UHJvcHM8Q29kZUZpZWxkLCBzdHJpbmc+IHtcbiAgbm93cmFwPzogYm9vbGVhblxufVxuXG5jb25zdCBDb2RlQ2VsbDogUmVhY3QuRkM8Q29kZUNlbGxQcm9wcz4gPSAoeyBkYXRhLCBub3dyYXAgfSkgPT4ge1xuICBjb25zdCB0ZXh0VG9TaG93ID0gZGF0YS5sZW5ndGggPiAxMDAgPyBgJHtkYXRhLnN1YnN0cmluZygwLCAxMDApfVxcdTIwMjZgIDogZGF0YVxuXG4gIGNvbnN0IG5vV3JhcFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0gbm93cmFwID8geyB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IDoge31cblxuICByZXR1cm4gKFxuICAgIDxjb2RlIGNsYXNzTmFtZT1cImNvZGUtY2VsbFwiIHN0eWxlPXtub1dyYXBTdHlsZX0+XG4gICAgICA8c3Bhbj57dGV4dFRvU2hvd308L3NwYW4+XG4gICAgPC9jb2RlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVDZWxsXG4iXSwibmFtZXMiOlsiQ29kZUNlbGwiLCJkYXRhIiwibm93cmFwIiwidGV4dFRvU2hvdyIsImxlbmd0aCIsInN1YnN0cmluZyIsIm5vV3JhcFN0eWxlIiwid2hpdGVTcGFjZSIsImNvZGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInNwYW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXVCQTs7O2VBQUE7Ozs4REF2QmtCO1FBS1g7Ozs7OztBQU1QLE1BQU1BLFdBQW9DLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7SUFDekQsTUFBTUMsYUFBYUYsS0FBS0csTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFSCxLQUFLSSxTQUFTLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHSjtJQUUzRSxNQUFNSyxjQUFtQ0osU0FBUztRQUFFSyxZQUFZO0lBQVMsSUFBSSxDQUFDO0lBRTlFLHFCQUNFLDZCQUFDQztRQUFLQyxXQUFVO1FBQVlDLE9BQU9KO3FCQUNqQyw2QkFBQ0ssY0FBTVI7QUFHYjtNQUVBLFdBQWVIIn0=