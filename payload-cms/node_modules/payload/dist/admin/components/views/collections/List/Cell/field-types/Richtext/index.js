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
const RichTextCell = (props)=>{
    // eslint-disable-next-line react/destructuring-assignment
    const editor = props.field.editor;
    const isLazy = 'LazyCellComponent' in editor;
    const ImportedCellComponent = (0, _react.useMemo)(()=>{
        return isLazy ? /*#__PURE__*/ _react.default.lazy(()=>{
            return editor.LazyCellComponent().then((resolvedComponent)=>({
                    default: resolvedComponent
                }));
        }) : null;
    }, [
        editor,
        isLazy
    ]);
    if (isLazy) {
        return ImportedCellComponent && /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, null, /*#__PURE__*/ _react.default.createElement(ImportedCellComponent, props));
    }
    return /*#__PURE__*/ _react.default.createElement(editor.CellComponent, props);
};
const _default = RichTextCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9SaWNodGV4dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBSaWNoVGV4dEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUmljaFRleHRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvUmljaFRleHQvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENlbGxDb21wb25lbnRQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5jb25zdCBSaWNoVGV4dENlbGw6IFJlYWN0LkZDPENlbGxDb21wb25lbnRQcm9wczxSaWNoVGV4dEZpZWxkPj4gPSAocHJvcHMpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudFxuICBjb25zdCBlZGl0b3I6IFJpY2hUZXh0QWRhcHRlciA9IHByb3BzLmZpZWxkLmVkaXRvclxuXG4gIGNvbnN0IGlzTGF6eSA9ICdMYXp5Q2VsbENvbXBvbmVudCcgaW4gZWRpdG9yXG5cbiAgY29uc3QgSW1wb3J0ZWRDZWxsQ29tcG9uZW50OiBSZWFjdC5GQzxhbnk+ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGlzTGF6eVxuICAgICAgPyBSZWFjdC5sYXp5KCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZWRpdG9yLkxhenlDZWxsQ29tcG9uZW50KCkudGhlbigocmVzb2x2ZWRDb21wb25lbnQpID0+ICh7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXNvbHZlZENvbXBvbmVudCxcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSlcbiAgICAgIDogbnVsbFxuICB9LCBbZWRpdG9yLCBpc0xhenldKVxuXG4gIGlmIChpc0xhenkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgSW1wb3J0ZWRDZWxsQ29tcG9uZW50ICYmIChcbiAgICAgICAgPFJlYWN0LlN1c3BlbnNlPlxuICAgICAgICAgIDxJbXBvcnRlZENlbGxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L1JlYWN0LlN1c3BlbnNlPlxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiA8ZWRpdG9yLkNlbGxDb21wb25lbnQgey4uLnByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dENlbGxcbiJdLCJuYW1lcyI6WyJSaWNoVGV4dENlbGwiLCJwcm9wcyIsImVkaXRvciIsImZpZWxkIiwiaXNMYXp5IiwiSW1wb3J0ZWRDZWxsQ29tcG9uZW50IiwidXNlTWVtbyIsIlJlYWN0IiwibGF6eSIsIkxhenlDZWxsQ29tcG9uZW50IiwidGhlbiIsInJlc29sdmVkQ29tcG9uZW50IiwiZGVmYXVsdCIsIlN1c3BlbnNlIiwiQ2VsbENvbXBvbmVudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFtQ0E7OztlQUFBOzs7K0RBbkMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9CLE1BQU1BLGVBQTRELENBQUNDO0lBQ2pFLDBEQUEwRDtJQUMxRCxNQUFNQyxTQUEwQkQsTUFBTUUsS0FBSyxDQUFDRCxNQUFNO0lBRWxELE1BQU1FLFNBQVMsdUJBQXVCRjtJQUV0QyxNQUFNRyx3QkFBdUNDLElBQUFBLGNBQU8sRUFBQztRQUNuRCxPQUFPRix1QkFDSEcsY0FBSyxDQUFDQyxJQUFJLENBQUM7WUFDVCxPQUFPTixPQUFPTyxpQkFBaUIsR0FBR0MsSUFBSSxDQUFDLENBQUNDLG9CQUF1QixDQUFBO29CQUM3REMsU0FBU0Q7Z0JBQ1gsQ0FBQTtRQUNGLEtBQ0E7SUFDTixHQUFHO1FBQUNUO1FBQVFFO0tBQU87SUFFbkIsSUFBSUEsUUFBUTtRQUNWLE9BQ0VDLHVDQUNFLDZCQUFDRSxjQUFLLENBQUNNLFFBQVEsc0JBQ2IsNkJBQUNSLHVCQUEwQko7SUFJbkM7SUFFQSxxQkFBTyw2QkFBQ0MsT0FBT1ksYUFBYSxFQUFLYjtBQUNuQztNQUVBLFdBQWVEIn0=