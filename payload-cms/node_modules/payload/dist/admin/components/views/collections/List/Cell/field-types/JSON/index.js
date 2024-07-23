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
const JSONCell = ({ data })=>{
    const textToShow = data.length > 100 ? `${data.substring(0, 100)}\u2026` : data;
    return /*#__PURE__*/ _react.default.createElement("code", {
        className: "json-cell"
    }, /*#__PURE__*/ _react.default.createElement("span", null, JSON.stringify(textToShow)));
};
const _default = JSONCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9KU09OL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgSlNPTkZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcbmltcG9ydCB0eXBlIHsgQ2VsbENvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBKU09OQ2VsbDogUmVhY3QuRkM8Q2VsbENvbXBvbmVudFByb3BzPEpTT05GaWVsZCwgc3RyaW5nPj4gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgdGV4dFRvU2hvdyA9IGRhdGEubGVuZ3RoID4gMTAwID8gYCR7ZGF0YS5zdWJzdHJpbmcoMCwgMTAwKX1cXHUyMDI2YCA6IGRhdGFcblxuICByZXR1cm4gKFxuICAgIDxjb2RlIGNsYXNzTmFtZT1cImpzb24tY2VsbFwiPlxuICAgICAgPHNwYW4+e0pTT04uc3RyaW5naWZ5KHRleHRUb1Nob3cpfTwvc3Bhbj5cbiAgICA8L2NvZGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSlNPTkNlbGxcbiJdLCJuYW1lcyI6WyJKU09OQ2VsbCIsImRhdGEiLCJ0ZXh0VG9TaG93IiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29kZSIsImNsYXNzTmFtZSIsInNwYW4iLCJKU09OIiwic3RyaW5naWZ5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWlCQTs7O2VBQUE7Ozs4REFqQmtCO1FBS1g7Ozs7OztBQUVQLE1BQU1BLFdBQTRELENBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ3pFLE1BQU1DLGFBQWFELEtBQUtFLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRUYsS0FBS0csU0FBUyxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsR0FBR0g7SUFFM0UscUJBQ0UsNkJBQUNJO1FBQUtDLFdBQVU7cUJBQ2QsNkJBQUNDLGNBQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7QUFHNUI7TUFFQSxXQUFlRiJ9