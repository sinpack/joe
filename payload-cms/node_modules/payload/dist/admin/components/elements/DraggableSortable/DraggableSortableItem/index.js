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
    DraggableSortableItem: function() {
        return DraggableSortableItem;
    },
    default: function() {
        return _default;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _useDraggableSortable = require("../useDraggableSortable");
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
const DraggableSortableItem = (props)=>{
    const { id, children, disabled } = props;
    const { attributes, isDragging, listeners, setNodeRef, transform } = (0, _useDraggableSortable.useDraggableSortable)({
        id,
        disabled
    });
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, children({
        attributes: {
            ...attributes,
            style: {
                cursor: isDragging ? 'grabbing' : 'grab'
            }
        },
        listeners,
        setNodeRef,
        transform
    }));
};
const _default = DraggableSortableItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL0RyYWdnYWJsZVNvcnRhYmxlSXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBVc2VEcmFnZ2FibGVBcmd1bWVudHMgfSBmcm9tICdAZG5kLWtpdC9jb3JlJ1xuXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBDaGlsZEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgdXNlRHJhZ2dhYmxlU29ydGFibGUgfSBmcm9tICcuLi91c2VEcmFnZ2FibGVTb3J0YWJsZSdcblxuZXhwb3J0IGNvbnN0IERyYWdnYWJsZVNvcnRhYmxlSXRlbTogUmVhY3QuRkM8XG4gIFVzZURyYWdnYWJsZUFyZ3VtZW50cyAmIHtcbiAgICBjaGlsZHJlbjogQ2hpbGRGdW5jdGlvblxuICB9XG4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIGNoaWxkcmVuLCBkaXNhYmxlZCB9ID0gcHJvcHNcblxuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGlzRHJhZ2dpbmcsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgdHJhbnNmb3JtIH0gPSB1c2VEcmFnZ2FibGVTb3J0YWJsZSh7XG4gICAgaWQsXG4gICAgZGlzYWJsZWQsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7Y2hpbGRyZW4oe1xuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgLi4uYXR0cmlidXRlcyxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgY3Vyc29yOiBpc0RyYWdnaW5nID8gJ2dyYWJiaW5nJyA6ICdncmFiJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBsaXN0ZW5lcnMsXG4gICAgICAgIHNldE5vZGVSZWYsXG4gICAgICAgIHRyYW5zZm9ybSxcbiAgICAgIH0pfVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlU29ydGFibGVJdGVtXG4iXSwibmFtZXMiOlsiRHJhZ2dhYmxlU29ydGFibGVJdGVtIiwicHJvcHMiLCJpZCIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJhdHRyaWJ1dGVzIiwiaXNEcmFnZ2luZyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJ1c2VEcmFnZ2FibGVTb3J0YWJsZSIsIkZyYWdtZW50Iiwic3R5bGUiLCJjdXJzb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRYUEscUJBQXFCO2VBQXJCQTs7SUE2QmIsT0FBb0M7ZUFBcEM7OzsrREFuQ2dDO3NDQUlLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsTUFBTUEsd0JBSVQsQ0FBQ0M7SUFDSCxNQUFNLEVBQUVDLEVBQUUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR0g7SUFFbkMsTUFBTSxFQUFFSSxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxJQUFBQSwwQ0FBb0IsRUFBQztRQUN4RlI7UUFDQUU7SUFDRjtJQUVBLHFCQUNFLDZCQUFDTyxlQUFRLFFBQ05SLFNBQVM7UUFDUkUsWUFBWTtZQUNWLEdBQUdBLFVBQVU7WUFDYk8sT0FBTztnQkFDTEMsUUFBUVAsYUFBYSxhQUFhO1lBQ3BDO1FBQ0Y7UUFDQUM7UUFDQUM7UUFDQUM7SUFDRjtBQUdOO01BRUEsV0FBZVQifQ==