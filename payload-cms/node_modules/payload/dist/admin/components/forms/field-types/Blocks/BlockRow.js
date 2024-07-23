"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BlockRow", {
    enumerable: true,
    get: function() {
        return BlockRow;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _Collapsible = require("../../../elements/Collapsible");
const _ErrorPill = require("../../../elements/ErrorPill");
const _Pill = /*#__PURE__*/ _interop_require_default(require("../../../elements/Pill"));
const _context = require("../../Form/context");
const _createNestedFieldPath = require("../../Form/createNestedFieldPath");
const _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../RenderFields"));
const _HiddenInput = /*#__PURE__*/ _interop_require_default(require("../HiddenInput"));
const _RowActions = require("./RowActions");
const _SectionTitle = /*#__PURE__*/ _interop_require_default(require("./SectionTitle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'blocks-field';
const BlockRow = ({ addRow, attributes, blockToRender, blocks, duplicateRow, fieldTypes, forceRender, hasMaxRows, indexPath, isSortable, labels, listeners, moveRow, path: parentPath, permissions, readOnly, removeRow, row, rowCount, rowIndex, setCollapse, setNodeRef, transform })=>{
    const path = `${parentPath}.${rowIndex}`;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const hasSubmitted = (0, _context.useFormSubmitted)();
    const childErrorPathsCount = row.childErrorPaths?.size;
    const fieldHasErrors = hasSubmitted && childErrorPathsCount > 0;
    const classNames = [
        `${baseClass}__row`,
        fieldHasErrors ? `${baseClass}__row--has-errors` : `${baseClass}__row--no-errors`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.default.createElement("div", {
        id: `${parentPath.split('.').join('-')}-row-${rowIndex}`,
        key: `${parentPath}-row-${rowIndex}`,
        ref: setNodeRef,
        style: {
            transform
        }
    }, /*#__PURE__*/ _react.default.createElement(_Collapsible.Collapsible, {
        actions: !readOnly ? /*#__PURE__*/ _react.default.createElement(_RowActions.RowActions, {
            addRow: addRow,
            blockType: row.blockType,
            blocks: blocks,
            duplicateRow: duplicateRow,
            hasMaxRows: hasMaxRows,
            isSortable: isSortable,
            labels: labels,
            moveRow: moveRow,
            removeRow: removeRow,
            rowCount: rowCount,
            rowIndex: rowIndex
        }) : undefined,
        className: classNames,
        collapsed: row.collapsed,
        collapsibleStyle: fieldHasErrors ? 'error' : 'default',
        dragHandleProps: isSortable ? {
            id: row.id,
            attributes,
            listeners
        } : undefined,
        header: /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__block-header`
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: `${baseClass}__block-number`
        }, String(rowIndex + 1).padStart(2, '0')), /*#__PURE__*/ _react.default.createElement(_Pill.default, {
            className: `${baseClass}__block-pill ${baseClass}__block-pill-${row.blockType}`,
            pillStyle: "white"
        }, (0, _getTranslation.getTranslation)(blockToRender.labels.singular, i18n)), /*#__PURE__*/ _react.default.createElement(_SectionTitle.default, {
            path: `${path}.blockName`,
            readOnly: readOnly
        }), fieldHasErrors && /*#__PURE__*/ _react.default.createElement(_ErrorPill.ErrorPill, {
            count: childErrorPathsCount,
            withMessage: true
        })),
        key: row.id,
        onToggle: (collapsed)=>setCollapse(row.id, collapsed)
    }, /*#__PURE__*/ _react.default.createElement(_HiddenInput.default, {
        name: `${path}.id`,
        value: row.id
    }), /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        className: `${baseClass}__fields`,
        fieldSchema: blockToRender.fields.map((field)=>({
                ...field,
                path: (0, _createNestedFieldPath.createNestedFieldPath)(path, field)
            })),
        fieldTypes: fieldTypes,
        forceRender: forceRender,
        indexPath: indexPath,
        margins: "small",
        permissions: permissions?.blocks?.[row.blockType]?.fields,
        readOnly: readOnly
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9CbG9ja1Jvdy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IEJsb2NrIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgVXNlRHJhZ2dhYmxlU29ydGFibGVSZXR1cm4gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EcmFnZ2FibGVTb3J0YWJsZS91c2VEcmFnZ2FibGVTb3J0YWJsZS90eXBlcydcbmltcG9ydCB0eXBlIHsgUm93IH0gZnJvbSAnLi4vLi4vRm9ybS90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IENvbGxhcHNpYmxlIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQ29sbGFwc2libGUnXG5pbXBvcnQgeyBFcnJvclBpbGwgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9FcnJvclBpbGwnXG5pbXBvcnQgUGlsbCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9QaWxsJ1xuaW1wb3J0IHsgdXNlRm9ybVN1Ym1pdHRlZCB9IGZyb20gJy4uLy4uL0Zvcm0vY29udGV4dCdcbmltcG9ydCB7IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCB9IGZyb20gJy4uLy4uL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoJ1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi9SZW5kZXJGaWVsZHMnXG5pbXBvcnQgSGlkZGVuSW5wdXQgZnJvbSAnLi4vSGlkZGVuSW5wdXQnXG5pbXBvcnQgeyBSb3dBY3Rpb25zIH0gZnJvbSAnLi9Sb3dBY3Rpb25zJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuL1NlY3Rpb25UaXRsZSdcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Jsb2Nrcy1maWVsZCdcblxudHlwZSBCbG9ja0ZpZWxkUHJvcHMgPSBVc2VEcmFnZ2FibGVTb3J0YWJsZVJldHVybiAmXG4gIFBpY2s8UHJvcHMsICdibG9ja3MnIHwgJ2ZpZWxkVHlwZXMnIHwgJ2luZGV4UGF0aCcgfCAnbGFiZWxzJyB8ICdwYXRoJyB8ICdwZXJtaXNzaW9ucyc+ICYge1xuICAgIGFkZFJvdzogKHJvd0luZGV4OiBudW1iZXIsIGJsb2NrVHlwZTogc3RyaW5nKSA9PiB2b2lkXG4gICAgYmxvY2tUb1JlbmRlcjogQmxvY2tcbiAgICBkdXBsaWNhdGVSb3c6IChyb3dJbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gICAgZm9yY2VSZW5kZXI/OiBib29sZWFuXG4gICAgaGFzTWF4Um93cz86IGJvb2xlYW5cbiAgICBpc1NvcnRhYmxlPzogYm9vbGVhblxuICAgIG1vdmVSb3c6IChmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gICAgcmVhZE9ubHk6IGJvb2xlYW5cbiAgICByZW1vdmVSb3c6IChyb3dJbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gICAgcm93OiBSb3dcbiAgICByb3dDb3VudDogbnVtYmVyXG4gICAgcm93SW5kZXg6IG51bWJlclxuICAgIHNldENvbGxhcHNlOiAoaWQ6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFuKSA9PiB2b2lkXG4gIH1cbmV4cG9ydCBjb25zdCBCbG9ja1JvdzogUmVhY3QuRkM8QmxvY2tGaWVsZFByb3BzPiA9ICh7XG4gIGFkZFJvdyxcbiAgYXR0cmlidXRlcyxcbiAgYmxvY2tUb1JlbmRlcixcbiAgYmxvY2tzLFxuICBkdXBsaWNhdGVSb3csXG4gIGZpZWxkVHlwZXMsXG4gIGZvcmNlUmVuZGVyLFxuICBoYXNNYXhSb3dzLFxuICBpbmRleFBhdGgsXG4gIGlzU29ydGFibGUsXG4gIGxhYmVscyxcbiAgbGlzdGVuZXJzLFxuICBtb3ZlUm93LFxuICBwYXRoOiBwYXJlbnRQYXRoLFxuICBwZXJtaXNzaW9ucyxcbiAgcmVhZE9ubHksXG4gIHJlbW92ZVJvdyxcbiAgcm93LFxuICByb3dDb3VudCxcbiAgcm93SW5kZXgsXG4gIHNldENvbGxhcHNlLFxuICBzZXROb2RlUmVmLFxuICB0cmFuc2Zvcm0sXG59KSA9PiB7XG4gIGNvbnN0IHBhdGggPSBgJHtwYXJlbnRQYXRofS4ke3Jvd0luZGV4fWBcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGhhc1N1Ym1pdHRlZCA9IHVzZUZvcm1TdWJtaXR0ZWQoKVxuXG4gIGNvbnN0IGNoaWxkRXJyb3JQYXRoc0NvdW50ID0gcm93LmNoaWxkRXJyb3JQYXRocz8uc2l6ZVxuICBjb25zdCBmaWVsZEhhc0Vycm9ycyA9IGhhc1N1Ym1pdHRlZCAmJiBjaGlsZEVycm9yUGF0aHNDb3VudCA+IDBcblxuICBjb25zdCBjbGFzc05hbWVzID0gW1xuICAgIGAke2Jhc2VDbGFzc31fX3Jvd2AsXG4gICAgZmllbGRIYXNFcnJvcnMgPyBgJHtiYXNlQ2xhc3N9X19yb3ctLWhhcy1lcnJvcnNgIDogYCR7YmFzZUNsYXNzfV9fcm93LS1uby1lcnJvcnNgLFxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCcgJylcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPXtgJHtwYXJlbnRQYXRoLnNwbGl0KCcuJykuam9pbignLScpfS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAga2V5PXtgJHtwYXJlbnRQYXRofS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29sbGFwc2libGVcbiAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgIXJlYWRPbmx5ID8gKFxuICAgICAgICAgICAgPFJvd0FjdGlvbnNcbiAgICAgICAgICAgICAgYWRkUm93PXthZGRSb3d9XG4gICAgICAgICAgICAgIGJsb2NrVHlwZT17cm93LmJsb2NrVHlwZX1cbiAgICAgICAgICAgICAgYmxvY2tzPXtibG9ja3N9XG4gICAgICAgICAgICAgIGR1cGxpY2F0ZVJvdz17ZHVwbGljYXRlUm93fVxuICAgICAgICAgICAgICBoYXNNYXhSb3dzPXtoYXNNYXhSb3dzfVxuICAgICAgICAgICAgICBpc1NvcnRhYmxlPXtpc1NvcnRhYmxlfVxuICAgICAgICAgICAgICBsYWJlbHM9e2xhYmVsc31cbiAgICAgICAgICAgICAgbW92ZVJvdz17bW92ZVJvd31cbiAgICAgICAgICAgICAgcmVtb3ZlUm93PXtyZW1vdmVSb3d9XG4gICAgICAgICAgICAgIHJvd0NvdW50PXtyb3dDb3VudH1cbiAgICAgICAgICAgICAgcm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgICBjb2xsYXBzZWQ9e3Jvdy5jb2xsYXBzZWR9XG4gICAgICAgIGNvbGxhcHNpYmxlU3R5bGU9e2ZpZWxkSGFzRXJyb3JzID8gJ2Vycm9yJyA6ICdkZWZhdWx0J31cbiAgICAgICAgZHJhZ0hhbmRsZVByb3BzPXtcbiAgICAgICAgICBpc1NvcnRhYmxlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Jsb2NrLWhlYWRlcmB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19ibG9jay1udW1iZXJgfT5cbiAgICAgICAgICAgICAge1N0cmluZyhyb3dJbmRleCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Jsb2NrLXBpbGwgJHtiYXNlQ2xhc3N9X19ibG9jay1waWxsLSR7cm93LmJsb2NrVHlwZX1gfVxuICAgICAgICAgICAgICBwaWxsU3R5bGU9XCJ3aGl0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihibG9ja1RvUmVuZGVyLmxhYmVscy5zaW5ndWxhciwgaTE4bil9XG4gICAgICAgICAgICA8L1BpbGw+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHBhdGg9e2Ake3BhdGh9LmJsb2NrTmFtZWB9IHJlYWRPbmx5PXtyZWFkT25seX0gLz5cbiAgICAgICAgICAgIHtmaWVsZEhhc0Vycm9ycyAmJiA8RXJyb3JQaWxsIGNvdW50PXtjaGlsZEVycm9yUGF0aHNDb3VudH0gd2l0aE1lc3NhZ2UgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAga2V5PXtyb3cuaWR9XG4gICAgICAgIG9uVG9nZ2xlPXsoY29sbGFwc2VkKSA9PiBzZXRDb2xsYXBzZShyb3cuaWQsIGNvbGxhcHNlZCl9XG4gICAgICA+XG4gICAgICAgIDxIaWRkZW5JbnB1dCBuYW1lPXtgJHtwYXRofS5pZGB9IHZhbHVlPXtyb3cuaWR9IC8+XG4gICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpZWxkc2B9XG4gICAgICAgICAgZmllbGRTY2hlbWE9e2Jsb2NrVG9SZW5kZXIuZmllbGRzLm1hcCgoZmllbGQpID0+ICh7XG4gICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgIHBhdGg6IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCksXG4gICAgICAgICAgfSkpfVxuICAgICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgICAgZm9yY2VSZW5kZXI9e2ZvcmNlUmVuZGVyfVxuICAgICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICAgIG1hcmdpbnM9XCJzbWFsbFwiXG4gICAgICAgICAgcGVybWlzc2lvbnM9e3Blcm1pc3Npb25zPy5ibG9ja3M/Lltyb3cuYmxvY2tUeXBlXT8uZmllbGRzfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sbGFwc2libGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCbG9ja1JvdyIsImJhc2VDbGFzcyIsImFkZFJvdyIsImF0dHJpYnV0ZXMiLCJibG9ja1RvUmVuZGVyIiwiYmxvY2tzIiwiZHVwbGljYXRlUm93IiwiZmllbGRUeXBlcyIsImZvcmNlUmVuZGVyIiwiaGFzTWF4Um93cyIsImluZGV4UGF0aCIsImlzU29ydGFibGUiLCJsYWJlbHMiLCJsaXN0ZW5lcnMiLCJtb3ZlUm93IiwicGF0aCIsInBhcmVudFBhdGgiLCJwZXJtaXNzaW9ucyIsInJlYWRPbmx5IiwicmVtb3ZlUm93Iiwicm93Iiwicm93Q291bnQiLCJyb3dJbmRleCIsInNldENvbGxhcHNlIiwic2V0Tm9kZVJlZiIsInRyYW5zZm9ybSIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImhhc1N1Ym1pdHRlZCIsInVzZUZvcm1TdWJtaXR0ZWQiLCJjaGlsZEVycm9yUGF0aHNDb3VudCIsImNoaWxkRXJyb3JQYXRocyIsInNpemUiLCJmaWVsZEhhc0Vycm9ycyIsImNsYXNzTmFtZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImlkIiwic3BsaXQiLCJrZXkiLCJyZWYiLCJzdHlsZSIsIkNvbGxhcHNpYmxlIiwiYWN0aW9ucyIsIlJvd0FjdGlvbnMiLCJibG9ja1R5cGUiLCJ1bmRlZmluZWQiLCJjbGFzc05hbWUiLCJjb2xsYXBzZWQiLCJjb2xsYXBzaWJsZVN0eWxlIiwiZHJhZ0hhbmRsZVByb3BzIiwiaGVhZGVyIiwic3BhbiIsIlN0cmluZyIsInBhZFN0YXJ0IiwiUGlsbCIsInBpbGxTdHlsZSIsImdldFRyYW5zbGF0aW9uIiwic2luZ3VsYXIiLCJTZWN0aW9uVGl0bGUiLCJFcnJvclBpbGwiLCJjb3VudCIsIndpdGhNZXNzYWdlIiwib25Ub2dnbGUiLCJIaWRkZW5JbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsIlJlbmRlckZpZWxkcyIsImZpZWxkU2NoZW1hIiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJtYXJnaW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQ2FBOzs7ZUFBQUE7Ozs4REFyQ0s7OEJBQ2E7Z0NBT0E7NkJBQ0g7MkJBQ0Y7NkRBQ1Q7eUJBQ2dCO3VDQUNLO3FFQUNiO29FQUNEOzRCQUNHO3FFQUNGOzs7Ozs7QUFFekIsTUFBTUMsWUFBWTtBQWtCWCxNQUFNRCxXQUFzQyxDQUFDLEVBQ2xERSxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsYUFBYSxFQUNiQyxNQUFNLEVBQ05DLFlBQVksRUFDWkMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLFVBQVUsRUFDVkMsU0FBUyxFQUNUQyxVQUFVLEVBQ1ZDLE1BQU0sRUFDTkMsU0FBUyxFQUNUQyxPQUFPLEVBQ1BDLE1BQU1DLFVBQVUsRUFDaEJDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLEdBQUcsRUFDSEMsUUFBUSxFQUNSQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxTQUFTLEVBQ1Y7SUFDQyxNQUFNVixPQUFPLENBQUMsRUFBRUMsV0FBVyxDQUFDLEVBQUVNLFNBQVMsQ0FBQztJQUN4QyxNQUFNLEVBQUVJLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUMvQixNQUFNQyxlQUFlQyxJQUFBQSx5QkFBZ0I7SUFFckMsTUFBTUMsdUJBQXVCVixJQUFJVyxlQUFlLEVBQUVDO0lBQ2xELE1BQU1DLGlCQUFpQkwsZ0JBQWdCRSx1QkFBdUI7SUFFOUQsTUFBTUksYUFBYTtRQUNqQixDQUFDLEVBQUVqQyxVQUFVLEtBQUssQ0FBQztRQUNuQmdDLGlCQUFpQixDQUFDLEVBQUVoQyxVQUFVLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxVQUFVLGdCQUFnQixDQUFDO0tBQ2xGLENBQ0VrQyxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLHFCQUNFLDZCQUFDQztRQUNDQyxJQUFJLENBQUMsRUFBRXZCLFdBQVd3QixLQUFLLENBQUMsS0FBS0gsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFZixTQUFTLENBQUM7UUFDeERtQixLQUFLLENBQUMsRUFBRXpCLFdBQVcsS0FBSyxFQUFFTSxTQUFTLENBQUM7UUFDcENvQixLQUFLbEI7UUFDTG1CLE9BQU87WUFDTGxCO1FBQ0Y7cUJBRUEsNkJBQUNtQix3QkFBVztRQUNWQyxTQUNFLENBQUMzQix5QkFDQyw2QkFBQzRCLHNCQUFVO1lBQ1Q1QyxRQUFRQTtZQUNSNkMsV0FBVzNCLElBQUkyQixTQUFTO1lBQ3hCMUMsUUFBUUE7WUFDUkMsY0FBY0E7WUFDZEcsWUFBWUE7WUFDWkUsWUFBWUE7WUFDWkMsUUFBUUE7WUFDUkUsU0FBU0E7WUFDVEssV0FBV0E7WUFDWEUsVUFBVUE7WUFDVkMsVUFBVUE7YUFFVjBCO1FBRU5DLFdBQVdmO1FBQ1hnQixXQUFXOUIsSUFBSThCLFNBQVM7UUFDeEJDLGtCQUFrQmxCLGlCQUFpQixVQUFVO1FBQzdDbUIsaUJBQ0V6QyxhQUNJO1lBQ0U0QixJQUFJbkIsSUFBSW1CLEVBQUU7WUFDVnBDO1lBQ0FVO1FBQ0YsSUFDQW1DO1FBRU5LLHNCQUNFLDZCQUFDZjtZQUFJVyxXQUFXLENBQUMsRUFBRWhELFVBQVUsY0FBYyxDQUFDO3lCQUMxQyw2QkFBQ3FEO1lBQUtMLFdBQVcsQ0FBQyxFQUFFaEQsVUFBVSxjQUFjLENBQUM7V0FDMUNzRCxPQUFPakMsV0FBVyxHQUFHa0MsUUFBUSxDQUFDLEdBQUcscUJBRXBDLDZCQUFDQyxhQUFJO1lBQ0hSLFdBQVcsQ0FBQyxFQUFFaEQsVUFBVSxhQUFhLEVBQUVBLFVBQVUsYUFBYSxFQUFFbUIsSUFBSTJCLFNBQVMsQ0FBQyxDQUFDO1lBQy9FVyxXQUFVO1dBRVRDLElBQUFBLDhCQUFjLEVBQUN2RCxjQUFjUSxNQUFNLENBQUNnRCxRQUFRLEVBQUVsQyxzQkFFakQsNkJBQUNtQyxxQkFBWTtZQUFDOUMsTUFBTSxDQUFDLEVBQUVBLEtBQUssVUFBVSxDQUFDO1lBQUVHLFVBQVVBO1lBQ2xEZSxnQ0FBa0IsNkJBQUM2QixvQkFBUztZQUFDQyxPQUFPakM7WUFBc0JrQyxhQUFBQTs7UUFHL0R2QixLQUFLckIsSUFBSW1CLEVBQUU7UUFDWDBCLFVBQVUsQ0FBQ2YsWUFBYzNCLFlBQVlILElBQUltQixFQUFFLEVBQUVXO3FCQUU3Qyw2QkFBQ2dCLG9CQUFXO1FBQUNDLE1BQU0sQ0FBQyxFQUFFcEQsS0FBSyxHQUFHLENBQUM7UUFBRXFELE9BQU9oRCxJQUFJbUIsRUFBRTtzQkFDOUMsNkJBQUM4QixxQkFBWTtRQUNYcEIsV0FBVyxDQUFDLEVBQUVoRCxVQUFVLFFBQVEsQ0FBQztRQUNqQ3FFLGFBQWFsRSxjQUFjbUUsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsUUFBVyxDQUFBO2dCQUNoRCxHQUFHQSxLQUFLO2dCQUNSMUQsTUFBTTJELElBQUFBLDRDQUFxQixFQUFDM0QsTUFBTTBEO1lBQ3BDLENBQUE7UUFDQWxFLFlBQVlBO1FBQ1pDLGFBQWFBO1FBQ2JFLFdBQVdBO1FBQ1hpRSxTQUFRO1FBQ1IxRCxhQUFhQSxhQUFhWixRQUFRLENBQUNlLElBQUkyQixTQUFTLENBQUMsRUFBRXdCO1FBQ25EckQsVUFBVUE7O0FBS3BCIn0=