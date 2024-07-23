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
const RichText = (fieldprops)=>{
    // eslint-disable-next-line react/destructuring-assignment
    const editor = fieldprops.editor;
    const isLazy = 'LazyFieldComponent' in editor;
    const ImportedFieldComponent = (0, _react.useMemo)(()=>{
        return isLazy ? /*#__PURE__*/ _react.default.lazy(()=>{
            return editor.LazyFieldComponent().then((resolvedComponent)=>({
                    default: resolvedComponent
                }));
        }) : null;
    }, [
        editor,
        isLazy
    ]);
    if (isLazy) {
        return ImportedFieldComponent && /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, null, /*#__PURE__*/ _react.default.createElement(ImportedFieldComponent, fieldprops));
    }
    return /*#__PURE__*/ _react.default.createElement(editor.FieldComponent, fieldprops);
};
const _default = RichText;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFJpY2hUZXh0RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBSaWNoVGV4dEFkYXB0ZXIgfSBmcm9tICcuL3R5cGVzJ1xuY29uc3QgUmljaFRleHQ6IFJlYWN0LkZDPFJpY2hUZXh0RmllbGQ+ID0gKGZpZWxkcHJvcHMpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudFxuICBjb25zdCBlZGl0b3I6IFJpY2hUZXh0QWRhcHRlciA9IGZpZWxkcHJvcHMuZWRpdG9yXG5cbiAgY29uc3QgaXNMYXp5ID0gJ0xhenlGaWVsZENvbXBvbmVudCcgaW4gZWRpdG9yXG5cbiAgY29uc3QgSW1wb3J0ZWRGaWVsZENvbXBvbmVudDogUmVhY3QuRkM8YW55PiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBpc0xhenlcbiAgICAgID8gUmVhY3QubGF6eSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVkaXRvci5MYXp5RmllbGRDb21wb25lbnQoKS50aGVuKChyZXNvbHZlZENvbXBvbmVudCkgPT4gKHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJlc29sdmVkQ29tcG9uZW50LFxuICAgICAgICAgIH0pKVxuICAgICAgICB9KVxuICAgICAgOiBudWxsXG4gIH0sIFtlZGl0b3IsIGlzTGF6eV0pXG5cbiAgaWYgKGlzTGF6eSkge1xuICAgIHJldHVybiAoXG4gICAgICBJbXBvcnRlZEZpZWxkQ29tcG9uZW50ICYmIChcbiAgICAgICAgPFJlYWN0LlN1c3BlbnNlPlxuICAgICAgICAgIDxJbXBvcnRlZEZpZWxkQ29tcG9uZW50IHsuLi5maWVsZHByb3BzfSAvPlxuICAgICAgICA8L1JlYWN0LlN1c3BlbnNlPlxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiA8ZWRpdG9yLkZpZWxkQ29tcG9uZW50IHsuLi5maWVsZHByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dFxuIl0sIm5hbWVzIjpbIlJpY2hUZXh0IiwiZmllbGRwcm9wcyIsImVkaXRvciIsImlzTGF6eSIsIkltcG9ydGVkRmllbGRDb21wb25lbnQiLCJ1c2VNZW1vIiwiUmVhY3QiLCJsYXp5IiwiTGF6eUZpZWxkQ29tcG9uZW50IiwidGhlbiIsInJlc29sdmVkQ29tcG9uZW50IiwiZGVmYXVsdCIsIlN1c3BlbnNlIiwiRmllbGRDb21wb25lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBaUNBOzs7ZUFBQTs7OytEQWpDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQixNQUFNQSxXQUFvQyxDQUFDQztJQUN6QywwREFBMEQ7SUFDMUQsTUFBTUMsU0FBMEJELFdBQVdDLE1BQU07SUFFakQsTUFBTUMsU0FBUyx3QkFBd0JEO0lBRXZDLE1BQU1FLHlCQUF3Q0MsSUFBQUEsY0FBTyxFQUFDO1FBQ3BELE9BQU9GLHVCQUNIRyxjQUFLLENBQUNDLElBQUksQ0FBQztZQUNULE9BQU9MLE9BQU9NLGtCQUFrQixHQUFHQyxJQUFJLENBQUMsQ0FBQ0Msb0JBQXVCLENBQUE7b0JBQzlEQyxTQUFTRDtnQkFDWCxDQUFBO1FBQ0YsS0FDQTtJQUNOLEdBQUc7UUFBQ1I7UUFBUUM7S0FBTztJQUVuQixJQUFJQSxRQUFRO1FBQ1YsT0FDRUMsd0NBQ0UsNkJBQUNFLGNBQUssQ0FBQ00sUUFBUSxzQkFDYiw2QkFBQ1Isd0JBQTJCSDtJQUlwQztJQUVBLHFCQUFPLDZCQUFDQyxPQUFPVyxjQUFjLEVBQUtaO0FBQ3BDO01BRUEsV0FBZUQifQ==