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
const _types = require("../../../../fields/config/types");
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../../../utilities/flattenTopLevelFields"));
const _Cell = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/Cell"));
const _SelectAll = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/SelectAll"));
const _SelectRow = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/SelectRow"));
const _SortColumn = /*#__PURE__*/ _interop_require_default(require("../SortColumn"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const buildColumns = ({ cellProps, collection, columns })=>{
    // sort the fields to the order of activeColumns
    const sortedFields = (0, _flattenTopLevelFields.default)(collection.fields, true).sort((a, b)=>{
        const aIndex = columns.findIndex((column)=>column.accessor === a.name);
        const bIndex = columns.findIndex((column)=>column.accessor === b.name);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
    });
    const firstActiveColumn = sortedFields.find((field)=>columns.find((column)=>column.accessor === field.name)?.active);
    let colIndex = -1;
    const cols = sortedFields.map((field)=>{
        const isActive = columns.find((column)=>column.accessor === field.name)?.active || false;
        const isFirstActive = firstActiveColumn?.name === field.name;
        if (isActive) {
            colIndex += 1;
        }
        const props = cellProps?.[colIndex] || {};
        const fieldAffectsDataSubFields = field && field.type && (field.type === 'array' || field.type === 'group' || field.type === 'blocks');
        const disableListFilter = field.admin && 'disableListFilter' in field.admin ? field.admin.disableListFilter : false;
        return {
            name: field.name,
            accessor: field.name,
            active: isActive,
            admin: {
                disableListColumn: field.admin?.disableListColumn,
                disableListFilter
            },
            components: {
                Heading: /*#__PURE__*/ _react.default.createElement(_SortColumn.default, {
                    disable: fieldAffectsDataSubFields || (0, _types.fieldIsPresentationalOnly)(field) || undefined,
                    label: field.label || field.name,
                    name: field.name
                }),
                renderCell: (rowData, cellData)=>{
                    return /*#__PURE__*/ _react.default.createElement(_Cell.default, {
                        cellData: cellData,
                        colIndex: colIndex,
                        collection: collection,
                        field: field,
                        key: JSON.stringify(cellData),
                        link: isFirstActive,
                        rowData: rowData,
                        ...props
                    });
                }
            },
            label: field.label
        };
    });
    if (cellProps?.[0]?.link !== false) {
        cols.unshift({
            name: '',
            accessor: '_select',
            active: true,
            components: {
                Heading: /*#__PURE__*/ _react.default.createElement(_SelectAll.default, null),
                renderCell: (rowData)=>/*#__PURE__*/ _react.default.createElement(_SelectRow.default, {
                        id: rowData.id
                    })
            },
            label: null
        });
    }
    return cols;
};
const _default = buildColumns;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9idWlsZENvbHVtbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQcm9wcyBhcyBDZWxsUHJvcHMgfSBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L0NlbGwvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbHVtbiB9IGZyb20gJy4uL1RhYmxlL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCBmbGF0dGVuRmllbGRzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9mbGF0dGVuVG9wTGV2ZWxGaWVsZHMnXG5pbXBvcnQgQ2VsbCBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L0NlbGwnXG5pbXBvcnQgU2VsZWN0QWxsIGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0QWxsJ1xuaW1wb3J0IFNlbGVjdFJvdyBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L1NlbGVjdFJvdydcbmltcG9ydCBTb3J0Q29sdW1uIGZyb20gJy4uL1NvcnRDb2x1bW4nXG5cbmNvbnN0IGJ1aWxkQ29sdW1ucyA9ICh7XG4gIGNlbGxQcm9wcyxcbiAgY29sbGVjdGlvbixcbiAgY29sdW1ucyxcbn06IHtcbiAgY2VsbFByb3BzOiBQYXJ0aWFsPENlbGxQcm9wcz5bXVxuICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gIGNvbHVtbnM6IFBpY2s8Q29sdW1uLCAnYWNjZXNzb3InIHwgJ2FjdGl2ZSc+W11cbn0pOiBDb2x1bW5bXSA9PiB7XG4gIC8vIHNvcnQgdGhlIGZpZWxkcyB0byB0aGUgb3JkZXIgb2YgYWN0aXZlQ29sdW1uc1xuICBjb25zdCBzb3J0ZWRGaWVsZHMgPSBmbGF0dGVuRmllbGRzKGNvbGxlY3Rpb24uZmllbGRzLCB0cnVlKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYUluZGV4ID0gY29sdW1ucy5maW5kSW5kZXgoKGNvbHVtbikgPT4gY29sdW1uLmFjY2Vzc29yID09PSBhLm5hbWUpXG4gICAgY29uc3QgYkluZGV4ID0gY29sdW1ucy5maW5kSW5kZXgoKGNvbHVtbikgPT4gY29sdW1uLmFjY2Vzc29yID09PSBiLm5hbWUpXG4gICAgaWYgKGFJbmRleCA9PT0gLTEgJiYgYkluZGV4ID09PSAtMSkgcmV0dXJuIDBcbiAgICBpZiAoYUluZGV4ID09PSAtMSkgcmV0dXJuIDFcbiAgICBpZiAoYkluZGV4ID09PSAtMSkgcmV0dXJuIC0xXG4gICAgcmV0dXJuIGFJbmRleCAtIGJJbmRleFxuICB9KVxuXG4gIGNvbnN0IGZpcnN0QWN0aXZlQ29sdW1uID0gc29ydGVkRmllbGRzLmZpbmQoXG4gICAgKGZpZWxkKSA9PiBjb2x1bW5zLmZpbmQoKGNvbHVtbikgPT4gY29sdW1uLmFjY2Vzc29yID09PSBmaWVsZC5uYW1lKT8uYWN0aXZlLFxuICApXG5cbiAgbGV0IGNvbEluZGV4ID0gLTFcbiAgY29uc3QgY29sczogQ29sdW1uW10gPSBzb3J0ZWRGaWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gY29sdW1ucy5maW5kKChjb2x1bW4pID0+IGNvbHVtbi5hY2Nlc3NvciA9PT0gZmllbGQubmFtZSk/LmFjdGl2ZSB8fCBmYWxzZVxuICAgIGNvbnN0IGlzRmlyc3RBY3RpdmUgPSBmaXJzdEFjdGl2ZUNvbHVtbj8ubmFtZSA9PT0gZmllbGQubmFtZVxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgY29sSW5kZXggKz0gMVxuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGNlbGxQcm9wcz8uW2NvbEluZGV4XSB8fCB7fVxuXG4gICAgY29uc3QgZmllbGRBZmZlY3RzRGF0YVN1YkZpZWxkcyA9XG4gICAgICBmaWVsZCAmJlxuICAgICAgZmllbGQudHlwZSAmJlxuICAgICAgKGZpZWxkLnR5cGUgPT09ICdhcnJheScgfHwgZmllbGQudHlwZSA9PT0gJ2dyb3VwJyB8fCBmaWVsZC50eXBlID09PSAnYmxvY2tzJylcblxuICAgIGNvbnN0IGRpc2FibGVMaXN0RmlsdGVyID1cbiAgICAgIGZpZWxkLmFkbWluICYmICdkaXNhYmxlTGlzdEZpbHRlcicgaW4gZmllbGQuYWRtaW4gPyBmaWVsZC5hZG1pbi5kaXNhYmxlTGlzdEZpbHRlciA6IGZhbHNlXG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogZmllbGQubmFtZSxcbiAgICAgIGFjY2Vzc29yOiBmaWVsZC5uYW1lLFxuICAgICAgYWN0aXZlOiBpc0FjdGl2ZSxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIGRpc2FibGVMaXN0Q29sdW1uOiBmaWVsZC5hZG1pbj8uZGlzYWJsZUxpc3RDb2x1bW4sXG4gICAgICAgIGRpc2FibGVMaXN0RmlsdGVyLFxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVhZGluZzogKFxuICAgICAgICAgIDxTb3J0Q29sdW1uXG4gICAgICAgICAgICBkaXNhYmxlPXtmaWVsZEFmZmVjdHNEYXRhU3ViRmllbGRzIHx8IGZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkoZmllbGQpIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGxhYmVsPXtmaWVsZC5sYWJlbCB8fCBmaWVsZC5uYW1lfVxuICAgICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICApLFxuICAgICAgICByZW5kZXJDZWxsOiAocm93RGF0YSwgY2VsbERhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENlbGxcbiAgICAgICAgICAgICAgY2VsbERhdGE9e2NlbGxEYXRhfVxuICAgICAgICAgICAgICBjb2xJbmRleD17Y29sSW5kZXh9XG4gICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAga2V5PXtKU09OLnN0cmluZ2lmeShjZWxsRGF0YSl9XG4gICAgICAgICAgICAgIGxpbms9e2lzRmlyc3RBY3RpdmV9XG4gICAgICAgICAgICAgIHJvd0RhdGE9e3Jvd0RhdGF9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICB9XG4gIH0pXG5cbiAgaWYgKGNlbGxQcm9wcz8uWzBdPy5saW5rICE9PSBmYWxzZSkge1xuICAgIGNvbHMudW5zaGlmdCh7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGFjY2Vzc29yOiAnX3NlbGVjdCcsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhlYWRpbmc6IDxTZWxlY3RBbGwgLz4sXG4gICAgICAgIHJlbmRlckNlbGw6IChyb3dEYXRhKSA9PiA8U2VsZWN0Um93IGlkPXtyb3dEYXRhLmlkfSAvPixcbiAgICAgIH0sXG4gICAgICBsYWJlbDogbnVsbCxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNvbHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDb2x1bW5zXG4iXSwibmFtZXMiOlsiYnVpbGRDb2x1bW5zIiwiY2VsbFByb3BzIiwiY29sbGVjdGlvbiIsImNvbHVtbnMiLCJzb3J0ZWRGaWVsZHMiLCJmbGF0dGVuRmllbGRzIiwiZmllbGRzIiwic29ydCIsImEiLCJiIiwiYUluZGV4IiwiZmluZEluZGV4IiwiY29sdW1uIiwiYWNjZXNzb3IiLCJuYW1lIiwiYkluZGV4IiwiZmlyc3RBY3RpdmVDb2x1bW4iLCJmaW5kIiwiZmllbGQiLCJhY3RpdmUiLCJjb2xJbmRleCIsImNvbHMiLCJtYXAiLCJpc0FjdGl2ZSIsImlzRmlyc3RBY3RpdmUiLCJwcm9wcyIsImZpZWxkQWZmZWN0c0RhdGFTdWJGaWVsZHMiLCJ0eXBlIiwiZGlzYWJsZUxpc3RGaWx0ZXIiLCJhZG1pbiIsImRpc2FibGVMaXN0Q29sdW1uIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJTb3J0Q29sdW1uIiwiZGlzYWJsZSIsImZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkiLCJ1bmRlZmluZWQiLCJsYWJlbCIsInJlbmRlckNlbGwiLCJyb3dEYXRhIiwiY2VsbERhdGEiLCJDZWxsIiwia2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxpbmsiLCJ1bnNoaWZ0IiwiU2VsZWN0QWxsIiwiU2VsZWN0Um93IiwiaWQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBd0dBOzs7ZUFBQTs7OzhEQXhHa0I7dUJBTXdCOzhFQUNoQjs2REFDVDtrRUFDSztrRUFDQTttRUFDQzs7Ozs7O0FBRXZCLE1BQU1BLGVBQWUsQ0FBQyxFQUNwQkMsU0FBUyxFQUNUQyxVQUFVLEVBQ1ZDLE9BQU8sRUFLUjtJQUNDLGdEQUFnRDtJQUNoRCxNQUFNQyxlQUFlQyxJQUFBQSw4QkFBYSxFQUFDSCxXQUFXSSxNQUFNLEVBQUUsTUFBTUMsSUFBSSxDQUFDLENBQUNDLEdBQUdDO1FBQ25FLE1BQU1DLFNBQVNQLFFBQVFRLFNBQVMsQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxRQUFRLEtBQUtMLEVBQUVNLElBQUk7UUFDdkUsTUFBTUMsU0FBU1osUUFBUVEsU0FBUyxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLFFBQVEsS0FBS0osRUFBRUssSUFBSTtRQUN2RSxJQUFJSixXQUFXLENBQUMsS0FBS0ssV0FBVyxDQUFDLEdBQUcsT0FBTztRQUMzQyxJQUFJTCxXQUFXLENBQUMsR0FBRyxPQUFPO1FBQzFCLElBQUlLLFdBQVcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMzQixPQUFPTCxTQUFTSztJQUNsQjtJQUVBLE1BQU1DLG9CQUFvQlosYUFBYWEsSUFBSSxDQUN6QyxDQUFDQyxRQUFVZixRQUFRYyxJQUFJLENBQUMsQ0FBQ0wsU0FBV0EsT0FBT0MsUUFBUSxLQUFLSyxNQUFNSixJQUFJLEdBQUdLO0lBR3ZFLElBQUlDLFdBQVcsQ0FBQztJQUNoQixNQUFNQyxPQUFpQmpCLGFBQWFrQixHQUFHLENBQUMsQ0FBQ0o7UUFDdkMsTUFBTUssV0FBV3BCLFFBQVFjLElBQUksQ0FBQyxDQUFDTCxTQUFXQSxPQUFPQyxRQUFRLEtBQUtLLE1BQU1KLElBQUksR0FBR0ssVUFBVTtRQUNyRixNQUFNSyxnQkFBZ0JSLG1CQUFtQkYsU0FBU0ksTUFBTUosSUFBSTtRQUM1RCxJQUFJUyxVQUFVO1lBQ1pILFlBQVk7UUFDZDtRQUNBLE1BQU1LLFFBQVF4QixXQUFXLENBQUNtQixTQUFTLElBQUksQ0FBQztRQUV4QyxNQUFNTSw0QkFDSlIsU0FDQUEsTUFBTVMsSUFBSSxJQUNUVCxDQUFBQSxNQUFNUyxJQUFJLEtBQUssV0FBV1QsTUFBTVMsSUFBSSxLQUFLLFdBQVdULE1BQU1TLElBQUksS0FBSyxRQUFPO1FBRTdFLE1BQU1DLG9CQUNKVixNQUFNVyxLQUFLLElBQUksdUJBQXVCWCxNQUFNVyxLQUFLLEdBQUdYLE1BQU1XLEtBQUssQ0FBQ0QsaUJBQWlCLEdBQUc7UUFFdEYsT0FBTztZQUNMZCxNQUFNSSxNQUFNSixJQUFJO1lBQ2hCRCxVQUFVSyxNQUFNSixJQUFJO1lBQ3BCSyxRQUFRSTtZQUNSTSxPQUFPO2dCQUNMQyxtQkFBbUJaLE1BQU1XLEtBQUssRUFBRUM7Z0JBQ2hDRjtZQUNGO1lBQ0FHLFlBQVk7Z0JBQ1ZDLHVCQUNFLDZCQUFDQyxtQkFBVTtvQkFDVEMsU0FBU1IsNkJBQTZCUyxJQUFBQSxnQ0FBeUIsRUFBQ2pCLFVBQVVrQjtvQkFDMUVDLE9BQU9uQixNQUFNbUIsS0FBSyxJQUFJbkIsTUFBTUosSUFBSTtvQkFDaENBLE1BQU1JLE1BQU1KLElBQUk7O2dCQUdwQndCLFlBQVksQ0FBQ0MsU0FBU0M7b0JBQ3BCLHFCQUNFLDZCQUFDQyxhQUFJO3dCQUNIRCxVQUFVQTt3QkFDVnBCLFVBQVVBO3dCQUNWbEIsWUFBWUE7d0JBQ1pnQixPQUFPQTt3QkFDUHdCLEtBQUtDLEtBQUtDLFNBQVMsQ0FBQ0o7d0JBQ3BCSyxNQUFNckI7d0JBQ05lLFNBQVNBO3dCQUNSLEdBQUdkLEtBQUs7O2dCQUdmO1lBQ0Y7WUFDQVksT0FBT25CLE1BQU1tQixLQUFLO1FBQ3BCO0lBQ0Y7SUFFQSxJQUFJcEMsV0FBVyxDQUFDLEVBQUUsRUFBRTRDLFNBQVMsT0FBTztRQUNsQ3hCLEtBQUt5QixPQUFPLENBQUM7WUFDWGhDLE1BQU07WUFDTkQsVUFBVTtZQUNWTSxRQUFRO1lBQ1JZLFlBQVk7Z0JBQ1ZDLHVCQUFTLDZCQUFDZSxrQkFBUztnQkFDbkJULFlBQVksQ0FBQ0Msd0JBQVksNkJBQUNTLGtCQUFTO3dCQUFDQyxJQUFJVixRQUFRVSxFQUFFOztZQUNwRDtZQUNBWixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9oQjtBQUNUO01BRUEsV0FBZXJCIn0=