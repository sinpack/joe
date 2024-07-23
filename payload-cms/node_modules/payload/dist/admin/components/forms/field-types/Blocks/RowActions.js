"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RowActions", {
    enumerable: true,
    get: function() {
        return RowActions;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _ArrayAction = require("../../../elements/ArrayAction");
const _useDrawerSlug = require("../../../elements/Drawer/useDrawerSlug");
const _BlocksDrawer = require("./BlocksDrawer");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const RowActions = (props)=>{
    const { addRow, blockType, blocks, duplicateRow, hasMaxRows, isSortable, labels, moveRow, removeRow, rowCount, rowIndex } = props;
    const { closeModal, openModal } = (0, _modal.useModal)();
    const drawerSlug = (0, _useDrawerSlug.useDrawerSlug)('blocks-drawer');
    const [indexToAdd, setIndexToAdd] = _react.default.useState(null);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_BlocksDrawer.BlocksDrawer, {
        addRow: (_, rowBlockType)=>{
            if (typeof addRow === 'function') {
                addRow(indexToAdd, rowBlockType);
            }
            closeModal(drawerSlug);
        },
        addRowIndex: rowIndex,
        blocks: blocks,
        drawerSlug: drawerSlug,
        labels: labels
    }), /*#__PURE__*/ _react.default.createElement(_ArrayAction.ArrayAction, {
        addRow: (index)=>{
            setIndexToAdd(index);
            openModal(drawerSlug);
        },
        duplicateRow: ()=>duplicateRow(rowIndex, blockType),
        hasMaxRows: hasMaxRows,
        index: rowIndex,
        isSortable: isSortable,
        moveRow: moveRow,
        removeRow: removeRow,
        rowCount: rowCount
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9Sb3dBY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBCbG9jaywgTGFiZWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgQXJyYXlBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9BcnJheUFjdGlvbidcbmltcG9ydCB7IHVzZURyYXdlclNsdWcgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXIvdXNlRHJhd2VyU2x1ZydcbmltcG9ydCB7IEJsb2Nrc0RyYXdlciB9IGZyb20gJy4vQmxvY2tzRHJhd2VyJ1xuXG5leHBvcnQgY29uc3QgUm93QWN0aW9uczogUmVhY3QuRkM8e1xuICBhZGRSb3c6IChyb3dJbmRleDogbnVtYmVyLCBibG9ja1R5cGU6IHN0cmluZykgPT4gdm9pZFxuICBibG9ja1R5cGU6IHN0cmluZ1xuICBibG9ja3M6IEJsb2NrW11cbiAgZHVwbGljYXRlUm93OiAocm93SW5kZXg6IG51bWJlciwgYmxvY2tUeXBlOiBzdHJpbmcpID0+IHZvaWRcbiAgaGFzTWF4Um93cz86IGJvb2xlYW5cbiAgaXNTb3J0YWJsZT86IGJvb2xlYW5cbiAgbGFiZWxzOiBMYWJlbHNcbiAgbW92ZVJvdzogKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgcmVtb3ZlUm93OiAocm93SW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICByb3dDb3VudDogbnVtYmVyXG4gIHJvd0luZGV4OiBudW1iZXJcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZGRSb3csXG4gICAgYmxvY2tUeXBlLFxuICAgIGJsb2NrcyxcbiAgICBkdXBsaWNhdGVSb3csXG4gICAgaGFzTWF4Um93cyxcbiAgICBpc1NvcnRhYmxlLFxuICAgIGxhYmVscyxcbiAgICBtb3ZlUm93LFxuICAgIHJlbW92ZVJvdyxcbiAgICByb3dDb3VudCxcbiAgICByb3dJbmRleCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBjbG9zZU1vZGFsLCBvcGVuTW9kYWwgfSA9IHVzZU1vZGFsKClcbiAgY29uc3QgZHJhd2VyU2x1ZyA9IHVzZURyYXdlclNsdWcoJ2Jsb2Nrcy1kcmF3ZXInKVxuXG4gIGNvbnN0IFtpbmRleFRvQWRkLCBzZXRJbmRleFRvQWRkXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBudW1iZXI+KG51bGwpXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QmxvY2tzRHJhd2VyXG4gICAgICAgIGFkZFJvdz17KF8sIHJvd0Jsb2NrVHlwZSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgYWRkUm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhZGRSb3coaW5kZXhUb0FkZCwgcm93QmxvY2tUeXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpXG4gICAgICAgIH19XG4gICAgICAgIGFkZFJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgYmxvY2tzPXtibG9ja3N9XG4gICAgICAgIGRyYXdlclNsdWc9e2RyYXdlclNsdWd9XG4gICAgICAgIGxhYmVscz17bGFiZWxzfVxuICAgICAgLz5cbiAgICAgIDxBcnJheUFjdGlvblxuICAgICAgICBhZGRSb3c9eyhpbmRleCkgPT4ge1xuICAgICAgICAgIHNldEluZGV4VG9BZGQoaW5kZXgpXG4gICAgICAgICAgb3Blbk1vZGFsKGRyYXdlclNsdWcpXG4gICAgICAgIH19XG4gICAgICAgIGR1cGxpY2F0ZVJvdz17KCkgPT4gZHVwbGljYXRlUm93KHJvd0luZGV4LCBibG9ja1R5cGUpfVxuICAgICAgICBoYXNNYXhSb3dzPXtoYXNNYXhSb3dzfVxuICAgICAgICBpbmRleD17cm93SW5kZXh9XG4gICAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICAgIG1vdmVSb3c9e21vdmVSb3d9XG4gICAgICAgIHJlbW92ZVJvdz17cmVtb3ZlUm93fVxuICAgICAgICByb3dDb3VudD17cm93Q291bnR9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSb3dBY3Rpb25zIiwicHJvcHMiLCJhZGRSb3ciLCJibG9ja1R5cGUiLCJibG9ja3MiLCJkdXBsaWNhdGVSb3ciLCJoYXNNYXhSb3dzIiwiaXNTb3J0YWJsZSIsImxhYmVscyIsIm1vdmVSb3ciLCJyZW1vdmVSb3ciLCJyb3dDb3VudCIsInJvd0luZGV4IiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsInVzZU1vZGFsIiwiZHJhd2VyU2x1ZyIsInVzZURyYXdlclNsdWciLCJpbmRleFRvQWRkIiwic2V0SW5kZXhUb0FkZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJGcmFnbWVudCIsIkJsb2Nrc0RyYXdlciIsIl8iLCJyb3dCbG9ja1R5cGUiLCJhZGRSb3dJbmRleCIsIkFycmF5QWN0aW9uIiwiaW5kZXgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFTYUE7OztlQUFBQTs7O3VCQVRZOzhEQUNQOzZCQUlVOytCQUNFOzhCQUNEOzs7Ozs7QUFFdEIsTUFBTUEsYUFZUixDQUFDQztJQUNKLE1BQU0sRUFDSkMsTUFBTSxFQUNOQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsWUFBWSxFQUNaQyxVQUFVLEVBQ1ZDLFVBQVUsRUFDVkMsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsUUFBUSxFQUNSQyxRQUFRLEVBQ1QsR0FBR1g7SUFFSixNQUFNLEVBQUVZLFVBQVUsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLElBQUFBLGVBQVE7SUFDMUMsTUFBTUMsYUFBYUMsSUFBQUEsNEJBQWEsRUFBQztJQUVqQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0MsY0FBSyxDQUFDQyxRQUFRLENBQWdCO0lBRWxFLHFCQUNFLDZCQUFDRCxjQUFLLENBQUNFLFFBQVEsc0JBQ2IsNkJBQUNDLDBCQUFZO1FBQ1hyQixRQUFRLENBQUNzQixHQUFHQztZQUNWLElBQUksT0FBT3ZCLFdBQVcsWUFBWTtnQkFDaENBLE9BQU9nQixZQUFZTztZQUNyQjtZQUNBWixXQUFXRztRQUNiO1FBQ0FVLGFBQWFkO1FBQ2JSLFFBQVFBO1FBQ1JZLFlBQVlBO1FBQ1pSLFFBQVFBO3NCQUVWLDZCQUFDbUIsd0JBQVc7UUFDVnpCLFFBQVEsQ0FBQzBCO1lBQ1BULGNBQWNTO1lBQ2RkLFVBQVVFO1FBQ1o7UUFDQVgsY0FBYyxJQUFNQSxhQUFhTyxVQUFVVDtRQUMzQ0csWUFBWUE7UUFDWnNCLE9BQU9oQjtRQUNQTCxZQUFZQTtRQUNaRSxTQUFTQTtRQUNUQyxXQUFXQTtRQUNYQyxVQUFVQTs7QUFJbEIifQ==