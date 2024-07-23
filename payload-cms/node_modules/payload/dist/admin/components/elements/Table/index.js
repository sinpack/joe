"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Table: function() {
        return Table;
    },
    default: function() {
        return _default;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _TableColumns = require("../TableColumns");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'table';
const Table = ({ columns: columnsFromProps, data })=>{
    const { columns: columnsFromContext } = (0, _TableColumns.useTableColumns)();
    const columns = columnsFromProps || columnsFromContext;
    const activeColumns = columns?.filter((col)=>col.active);
    if (!activeColumns || activeColumns.length === 0) {
        return /*#__PURE__*/ _react.default.createElement("div", null, "No columns selected");
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("table", {
        cellPadding: "0",
        cellSpacing: "0"
    }, /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", null, activeColumns.map((col, i)=>/*#__PURE__*/ _react.default.createElement("th", {
            id: `heading-${col.accessor}`,
            key: i
        }, col.components.Heading)))), /*#__PURE__*/ _react.default.createElement("tbody", null, data && data.map((row, rowIndex)=>/*#__PURE__*/ _react.default.createElement("tr", {
            className: `row-${rowIndex + 1}`,
            key: rowIndex
        }, columns.map((col, colIndex)=>{
            const { active } = col;
            if (!active) return null;
            return /*#__PURE__*/ _react.default.createElement("td", {
                className: `cell-${col.accessor}`,
                key: colIndex
            }, col.components.renderCell(row, row[col.accessor]));
        }))))));
};
const _default = Table;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyB1c2VUYWJsZUNvbHVtbnMgfSBmcm9tICcuLi9UYWJsZUNvbHVtbnMnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RhYmxlJ1xuXG5leHBvcnQgY29uc3QgVGFibGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbHVtbnM6IGNvbHVtbnNGcm9tUHJvcHMsIGRhdGEgfSkgPT4ge1xuICBjb25zdCB7IGNvbHVtbnM6IGNvbHVtbnNGcm9tQ29udGV4dCB9ID0gdXNlVGFibGVDb2x1bW5zKClcblxuICBjb25zdCBjb2x1bW5zID0gY29sdW1uc0Zyb21Qcm9wcyB8fCBjb2x1bW5zRnJvbUNvbnRleHRcbiAgY29uc3QgYWN0aXZlQ29sdW1ucyA9IGNvbHVtbnM/LmZpbHRlcigoY29sKSA9PiBjb2wuYWN0aXZlKVxuXG4gIGlmICghYWN0aXZlQ29sdW1ucyB8fCBhY3RpdmVDb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2Pk5vIGNvbHVtbnMgc2VsZWN0ZWQ8L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8dGFibGUgY2VsbFBhZGRpbmc9XCIwXCIgY2VsbFNwYWNpbmc9XCIwXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7YWN0aXZlQ29sdW1ucy5tYXAoKGNvbCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8dGggaWQ9e2BoZWFkaW5nLSR7Y29sLmFjY2Vzc29yfWB9IGtleT17aX0+XG4gICAgICAgICAgICAgICAge2NvbC5jb21wb25lbnRzLkhlYWRpbmd9XG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgIGRhdGEubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e2Byb3ctJHtyb3dJbmRleCArIDF9YH0ga2V5PXtyb3dJbmRleH0+XG4gICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGFjdGl2ZSB9ID0gY29sXG5cbiAgICAgICAgICAgICAgICAgIGlmICghYWN0aXZlKSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtgY2VsbC0ke2NvbC5hY2Nlc3Nvcn1gfSBrZXk9e2NvbEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29sLmNvbXBvbmVudHMucmVuZGVyQ2VsbChyb3csIHJvd1tjb2wuYWNjZXNzb3JdKX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxuIl0sIm5hbWVzIjpbIlRhYmxlIiwiYmFzZUNsYXNzIiwiY29sdW1ucyIsImNvbHVtbnNGcm9tUHJvcHMiLCJkYXRhIiwiY29sdW1uc0Zyb21Db250ZXh0IiwidXNlVGFibGVDb2x1bW5zIiwiYWN0aXZlQ29sdW1ucyIsImZpbHRlciIsImNvbCIsImFjdGl2ZSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwiY2VsbFBhZGRpbmciLCJjZWxsU3BhY2luZyIsInRoZWFkIiwidHIiLCJtYXAiLCJpIiwidGgiLCJpZCIsImFjY2Vzc29yIiwia2V5IiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ0Ym9keSIsInJvdyIsInJvd0luZGV4IiwiY29sSW5kZXgiLCJ0ZCIsInJlbmRlckNlbGwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVNhQSxLQUFLO2VBQUxBOztJQTZDYixPQUFvQjtlQUFwQjs7OzhEQXREa0I7OEJBSWM7UUFDekI7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxRQUF5QixDQUFDLEVBQUVFLFNBQVNDLGdCQUFnQixFQUFFQyxJQUFJLEVBQUU7SUFDeEUsTUFBTSxFQUFFRixTQUFTRyxrQkFBa0IsRUFBRSxHQUFHQyxJQUFBQSw2QkFBZTtJQUV2RCxNQUFNSixVQUFVQyxvQkFBb0JFO0lBQ3BDLE1BQU1FLGdCQUFnQkwsU0FBU00sT0FBTyxDQUFDQyxNQUFRQSxJQUFJQyxNQUFNO0lBRXpELElBQUksQ0FBQ0gsaUJBQWlCQSxjQUFjSSxNQUFNLEtBQUssR0FBRztRQUNoRCxxQkFBTyw2QkFBQ0MsYUFBSTtJQUNkO0lBRUEscUJBQ0UsNkJBQUNBO1FBQUlDLFdBQVdaO3FCQUNkLDZCQUFDYTtRQUFNQyxhQUFZO1FBQUlDLGFBQVk7cUJBQ2pDLDZCQUFDQyw2QkFDQyw2QkFBQ0MsWUFDRVgsY0FBY1ksR0FBRyxDQUFDLENBQUNWLEtBQUtXLGtCQUN2Qiw2QkFBQ0M7WUFBR0MsSUFBSSxDQUFDLFFBQVEsRUFBRWIsSUFBSWMsUUFBUSxDQUFDLENBQUM7WUFBRUMsS0FBS0o7V0FDckNYLElBQUlnQixVQUFVLENBQUNDLE9BQU8sb0JBSy9CLDZCQUFDQyxlQUNFdkIsUUFDQ0EsS0FBS2UsR0FBRyxDQUFDLENBQUNTLEtBQUtDLHlCQUNiLDZCQUFDWDtZQUFHTCxXQUFXLENBQUMsSUFBSSxFQUFFZ0IsV0FBVyxFQUFFLENBQUM7WUFBRUwsS0FBS0s7V0FDeEMzQixRQUFRaUIsR0FBRyxDQUFDLENBQUNWLEtBQUtxQjtZQUNqQixNQUFNLEVBQUVwQixNQUFNLEVBQUUsR0FBR0Q7WUFFbkIsSUFBSSxDQUFDQyxRQUFRLE9BQU87WUFFcEIscUJBQ0UsNkJBQUNxQjtnQkFBR2xCLFdBQVcsQ0FBQyxLQUFLLEVBQUVKLElBQUljLFFBQVEsQ0FBQyxDQUFDO2dCQUFFQyxLQUFLTTtlQUN6Q3JCLElBQUlnQixVQUFVLENBQUNPLFVBQVUsQ0FBQ0osS0FBS0EsR0FBRyxDQUFDbkIsSUFBSWMsUUFBUSxDQUFDO1FBR3ZEO0FBT2hCO01BRUEsV0FBZXZCIn0=