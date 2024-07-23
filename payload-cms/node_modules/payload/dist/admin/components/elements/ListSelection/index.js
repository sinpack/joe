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
const _SelectionProvider = require("../../views/collections/List/SelectionProvider");
require("./index.scss");
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
const baseClass = 'list-selection';
const ListSelection = ({ label })=>{
    const { count, selectAll, toggleAll, totalDocs } = (0, _SelectionProvider.useSelection)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    if (count === 0) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("span", null, t('selectedCount', {
        count,
        label
    })), selectAll !== _SelectionProvider.SelectAllStatus.AllAvailable && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, ' ', "—", /*#__PURE__*/ _react.default.createElement("button", {
        "aria-label": t('selectAll', {
            count,
            label
        }),
        className: `${baseClass}__button`,
        onClick: ()=>toggleAll(true),
        type: "button"
    }, t('selectAll', {
        count: totalDocs,
        label
    }))));
};
const _default = ListSelection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3RTZWxlY3Rpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2xpc3Qtc2VsZWN0aW9uJ1xuXG50eXBlIFByb3BzID0ge1xuICBsYWJlbDogc3RyaW5nXG59XG5jb25zdCBMaXN0U2VsZWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBsYWJlbCB9KSA9PiB7XG4gIGNvbnN0IHsgY291bnQsIHNlbGVjdEFsbCwgdG9nZ2xlQWxsLCB0b3RhbERvY3MgfSA9IHVzZVNlbGVjdGlvbigpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuXG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPHNwYW4+e3QoJ3NlbGVjdGVkQ291bnQnLCB7IGNvdW50LCBsYWJlbCB9KX08L3NwYW4+XG4gICAgICB7c2VsZWN0QWxsICE9PSBTZWxlY3RBbGxTdGF0dXMuQWxsQXZhaWxhYmxlICYmIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgJm1kYXNoO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ3NlbGVjdEFsbCcsIHsgY291bnQsIGxhYmVsIH0pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19idXR0b25gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQWxsKHRydWUpfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ3NlbGVjdEFsbCcsIHsgY291bnQ6IHRvdGFsRG9jcywgbGFiZWwgfSl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RTZWxlY3Rpb25cbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJMaXN0U2VsZWN0aW9uIiwibGFiZWwiLCJjb3VudCIsInNlbGVjdEFsbCIsInRvZ2dsZUFsbCIsInRvdGFsRG9jcyIsInVzZVNlbGVjdGlvbiIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJTZWxlY3RBbGxTdGF0dXMiLCJBbGxBdmFpbGFibGUiLCJGcmFnbWVudCIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwidHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF3Q0E7OztlQUFBOzs7K0RBeENnQzs4QkFDRDttQ0FFZTtRQUN2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUtsQixNQUFNQyxnQkFBaUMsQ0FBQyxFQUFFQyxLQUFLLEVBQUU7SUFDL0MsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsSUFBQUEsK0JBQVk7SUFDL0QsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUU3QixJQUFJTixVQUFVLEdBQUc7UUFDZixPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw2QkFBQ087UUFBSUMsV0FBV1g7cUJBQ2QsNkJBQUNZLGNBQU1KLEVBQUUsaUJBQWlCO1FBQUVMO1FBQU9EO0lBQU0sS0FDeENFLGNBQWNTLGtDQUFlLENBQUNDLFlBQVksa0JBQ3pDLDZCQUFDQyxlQUFRLFFBQ04sS0FBSSxtQkFFTCw2QkFBQ0M7UUFDQ0MsY0FBWVQsRUFBRSxhQUFhO1lBQUVMO1lBQU9EO1FBQU07UUFDMUNTLFdBQVcsQ0FBQyxFQUFFWCxVQUFVLFFBQVEsQ0FBQztRQUNqQ2tCLFNBQVMsSUFBTWIsVUFBVTtRQUN6QmMsTUFBSztPQUVKWCxFQUFFLGFBQWE7UUFBRUwsT0FBT0c7UUFBV0o7SUFBTTtBQU10RDtNQUVBLFdBQWVEIn0=