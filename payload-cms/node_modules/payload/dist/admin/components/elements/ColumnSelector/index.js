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
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../utilities/getTranslation");
const _Plus = /*#__PURE__*/ _interop_require_default(require("../../icons/Plus"));
const _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
const _EditDepth = require("../../utilities/EditDepth");
const _DraggableSortable = /*#__PURE__*/ _interop_require_default(require("../DraggableSortable"));
const _Pill = /*#__PURE__*/ _interop_require_default(require("../Pill"));
const _TableColumns = require("../TableColumns");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const baseClass = 'column-selector';
const filterColumnFields = (fields)=>{
    return fields.filter((field)=>{
        return !field.admin?.disableListColumn;
    });
};
const ColumnSelector = (props)=>{
    const { slug } = props;
    const { columns, moveColumn, toggleColumn } = (0, _TableColumns.useTableColumns)();
    const { i18n } = (0, _reacti18next.useTranslation)();
    const uuid = (0, _react.useId)();
    const editDepth = (0, _EditDepth.useEditDepth)();
    if (!columns) {
        return null;
    }
    const filteredColumns = filterColumnFields(columns);
    return /*#__PURE__*/ _react.default.createElement(_DraggableSortable.default, {
        className: baseClass,
        ids: filteredColumns.map((col)=>col.accessor),
        onDragEnd: ({ moveFromIndex, moveToIndex })=>{
            moveColumn({
                fromIndex: moveFromIndex,
                toIndex: moveToIndex
            });
        }
    }, filteredColumns.map((col, i)=>{
        const { name, accessor, active, label } = col;
        if (col.accessor === '_select') return null;
        return /*#__PURE__*/ _react.default.createElement(_Pill.default, {
            alignIcon: "left",
            "aria-checked": active,
            className: [
                `${baseClass}__column`,
                active && `${baseClass}__column--active`
            ].filter(Boolean).join(' '),
            draggable: true,
            icon: active ? /*#__PURE__*/ _react.default.createElement(_X.default, null) : /*#__PURE__*/ _react.default.createElement(_Plus.default, null),
            id: accessor,
            key: `${slug}-${col.name || i}${editDepth ? `-${editDepth}-` : ''}${uuid}`,
            onClick: ()=>{
                toggleColumn(accessor);
            }
        }, (0, _getTranslation.getTranslation)(label || name, i18n));
    }));
};
const _default = ColumnSelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvbHVtblNlbGVjdG9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlSWQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBDb2x1bW4gfSBmcm9tICcuLi9UYWJsZS90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCBQbHVzIGZyb20gJy4uLy4uL2ljb25zL1BsdXMnXG5pbXBvcnQgWCBmcm9tICcuLi8uLi9pY29ucy9YJ1xuaW1wb3J0IHsgdXNlRWRpdERlcHRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0VkaXREZXB0aCdcbmltcG9ydCBEcmFnZ2FibGVTb3J0YWJsZSBmcm9tICcuLi9EcmFnZ2FibGVTb3J0YWJsZSdcbmltcG9ydCBQaWxsIGZyb20gJy4uL1BpbGwnXG5pbXBvcnQgeyB1c2VUYWJsZUNvbHVtbnMgfSBmcm9tICcuLi9UYWJsZUNvbHVtbnMnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbHVtbi1zZWxlY3RvcidcblxuY29uc3QgZmlsdGVyQ29sdW1uRmllbGRzID0gKGZpZWxkczogQ29sdW1uW10pOiBDb2x1bW5bXSA9PiB7XG4gIHJldHVybiBmaWVsZHMuZmlsdGVyKChmaWVsZCkgPT4ge1xuICAgIHJldHVybiAhZmllbGQuYWRtaW4/LmRpc2FibGVMaXN0Q29sdW1uXG4gIH0pXG59XG5cbmNvbnN0IENvbHVtblNlbGVjdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgY29sdW1ucywgbW92ZUNvbHVtbiwgdG9nZ2xlQ29sdW1uIH0gPSB1c2VUYWJsZUNvbHVtbnMoKVxuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCB1dWlkID0gdXNlSWQoKVxuICBjb25zdCBlZGl0RGVwdGggPSB1c2VFZGl0RGVwdGgoKVxuXG4gIGlmICghY29sdW1ucykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZENvbHVtbnMgPSBmaWx0ZXJDb2x1bW5GaWVsZHMoY29sdW1ucylcblxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGVTb3J0YWJsZVxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBpZHM9e2ZpbHRlcmVkQ29sdW1ucy5tYXAoKGNvbCkgPT4gY29sLmFjY2Vzc29yKX1cbiAgICAgIG9uRHJhZ0VuZD17KHsgbW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXggfSkgPT4ge1xuICAgICAgICBtb3ZlQ29sdW1uKHtcbiAgICAgICAgICBmcm9tSW5kZXg6IG1vdmVGcm9tSW5kZXgsXG4gICAgICAgICAgdG9JbmRleDogbW92ZVRvSW5kZXgsXG4gICAgICAgIH0pXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtmaWx0ZXJlZENvbHVtbnMubWFwKChjb2wsIGkpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBhY2Nlc3NvciwgYWN0aXZlLCBsYWJlbCB9ID0gY29sXG5cbiAgICAgICAgaWYgKGNvbC5hY2Nlc3NvciA9PT0gJ19zZWxlY3QnKSByZXR1cm4gbnVsbFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgIGFsaWduSWNvbj1cImxlZnRcIlxuICAgICAgICAgICAgYXJpYS1jaGVja2VkPXthY3RpdmV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1tgJHtiYXNlQ2xhc3N9X19jb2x1bW5gLCBhY3RpdmUgJiYgYCR7YmFzZUNsYXNzfV9fY29sdW1uLS1hY3RpdmVgXVxuICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgIC5qb2luKCcgJyl9XG4gICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIGljb249e2FjdGl2ZSA/IDxYIC8+IDogPFBsdXMgLz59XG4gICAgICAgICAgICBpZD17YWNjZXNzb3J9XG4gICAgICAgICAgICBrZXk9e2Ake3NsdWd9LSR7Y29sLm5hbWUgfHwgaX0ke2VkaXREZXB0aCA/IGAtJHtlZGl0RGVwdGh9LWAgOiAnJ30ke3V1aWR9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlQ29sdW1uKGFjY2Vzc29yKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0VHJhbnNsYXRpb24obGFiZWwgfHwgbmFtZSwgaTE4bil9XG4gICAgICAgICAgPC9QaWxsPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L0RyYWdnYWJsZVNvcnRhYmxlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtblNlbGVjdG9yXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiZmlsdGVyQ29sdW1uRmllbGRzIiwiZmllbGRzIiwiZmlsdGVyIiwiZmllbGQiLCJhZG1pbiIsImRpc2FibGVMaXN0Q29sdW1uIiwiQ29sdW1uU2VsZWN0b3IiLCJwcm9wcyIsInNsdWciLCJjb2x1bW5zIiwibW92ZUNvbHVtbiIsInRvZ2dsZUNvbHVtbiIsInVzZVRhYmxlQ29sdW1ucyIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsInV1aWQiLCJ1c2VJZCIsImVkaXREZXB0aCIsInVzZUVkaXREZXB0aCIsImZpbHRlcmVkQ29sdW1ucyIsIkRyYWdnYWJsZVNvcnRhYmxlIiwiY2xhc3NOYW1lIiwiaWRzIiwibWFwIiwiY29sIiwiYWNjZXNzb3IiLCJvbkRyYWdFbmQiLCJtb3ZlRnJvbUluZGV4IiwibW92ZVRvSW5kZXgiLCJmcm9tSW5kZXgiLCJ0b0luZGV4IiwiaSIsIm5hbWUiLCJhY3RpdmUiLCJsYWJlbCIsIlBpbGwiLCJhbGlnbkljb24iLCJhcmlhLWNoZWNrZWQiLCJCb29sZWFuIiwiam9pbiIsImRyYWdnYWJsZSIsImljb24iLCJYIiwiUGx1cyIsImlkIiwia2V5Iiwib25DbGljayIsImdldFRyYW5zbGF0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE2RUE7OztlQUFBOzs7K0RBN0U2Qjs4QkFDRTtnQ0FLQTs2REFDZDswREFDSDsyQkFDZTswRUFDQzs2REFDYjs4QkFDZTtRQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLHFCQUFxQixDQUFDQztJQUMxQixPQUFPQSxPQUFPQyxNQUFNLENBQUMsQ0FBQ0M7UUFDcEIsT0FBTyxDQUFDQSxNQUFNQyxLQUFLLEVBQUVDO0lBQ3ZCO0FBQ0Y7QUFFQSxNQUFNQyxpQkFBa0MsQ0FBQ0M7SUFDdkMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7SUFFakIsTUFBTSxFQUFFRSxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFLEdBQUdDLElBQUFBLDZCQUFlO0lBRTdELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLDRCQUFjO0lBQy9CLE1BQU1DLE9BQU9DLElBQUFBLFlBQUs7SUFDbEIsTUFBTUMsWUFBWUMsSUFBQUEsdUJBQVk7SUFFOUIsSUFBSSxDQUFDVCxTQUFTO1FBQ1osT0FBTztJQUNUO0lBRUEsTUFBTVUsa0JBQWtCbkIsbUJBQW1CUztJQUUzQyxxQkFDRSw2QkFBQ1csMEJBQWlCO1FBQ2hCQyxXQUFXdEI7UUFDWHVCLEtBQUtILGdCQUFnQkksR0FBRyxDQUFDLENBQUNDLE1BQVFBLElBQUlDLFFBQVE7UUFDOUNDLFdBQVcsQ0FBQyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtZQUN4Q2xCLFdBQVc7Z0JBQ1RtQixXQUFXRjtnQkFDWEcsU0FBU0Y7WUFDWDtRQUNGO09BRUNULGdCQUFnQkksR0FBRyxDQUFDLENBQUNDLEtBQUtPO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFUCxRQUFRLEVBQUVRLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdWO1FBRTFDLElBQUlBLElBQUlDLFFBQVEsS0FBSyxXQUFXLE9BQU87UUFFdkMscUJBQ0UsNkJBQUNVLGFBQUk7WUFDSEMsV0FBVTtZQUNWQyxnQkFBY0o7WUFDZFosV0FBVztnQkFBQyxDQUFDLEVBQUV0QixVQUFVLFFBQVEsQ0FBQztnQkFBRWtDLFVBQVUsQ0FBQyxFQUFFbEMsVUFBVSxnQkFBZ0IsQ0FBQzthQUFDLENBQzFFRyxNQUFNLENBQUNvQyxTQUNQQyxJQUFJLENBQUM7WUFDUkMsV0FBQUE7WUFDQUMsTUFBTVIsdUJBQVMsNkJBQUNTLFVBQUMsd0JBQU0sNkJBQUNDLGFBQUk7WUFDNUJDLElBQUluQjtZQUNKb0IsS0FBSyxDQUFDLEVBQUVyQyxLQUFLLENBQUMsRUFBRWdCLElBQUlRLElBQUksSUFBSUQsRUFBRSxFQUFFZCxZQUFZLENBQUMsQ0FBQyxFQUFFQSxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRUYsS0FBSyxDQUFDO1lBQzFFK0IsU0FBUztnQkFDUG5DLGFBQWFjO1lBQ2Y7V0FFQ3NCLElBQUFBLDhCQUFjLEVBQUNiLFNBQVNGLE1BQU1uQjtJQUdyQztBQUdOO01BRUEsV0FBZVAifQ==