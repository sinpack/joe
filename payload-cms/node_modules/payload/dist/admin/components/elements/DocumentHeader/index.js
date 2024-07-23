"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DocumentHeader", {
    enumerable: true,
    get: function() {
        return DocumentHeader;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _Gutter = require("../Gutter");
const _RenderTitle = /*#__PURE__*/ _interop_require_default(require("../RenderTitle"));
const _Tabs = require("./Tabs");
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
const baseClass = `doc-header`;
const DocumentHeader = (props)=>{
    const { id, apiURL, collection, customHeader, data, global, isEditing } = props;
    const { t } = (0, _reacti18next.useTranslation)('general');
    return /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: baseClass
    }, customHeader && customHeader, !customHeader && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_RenderTitle.default, {
        className: `${baseClass}__title`,
        collection: collection,
        data: data,
        fallback: `[${t('untitled')}]`,
        global: global,
        useAsTitle: collection?.admin?.useAsTitle
    }), /*#__PURE__*/ _react.default.createElement(_Tabs.DocumentTabs, {
        apiURL: apiURL,
        collection: collection,
        global: global,
        id: id,
        isEditing: isEditing
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50SGVhZGVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9leHBvcnRzL3R5cGVzJ1xuXG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi9HdXR0ZXInXG5pbXBvcnQgUmVuZGVyVGl0bGUgZnJvbSAnLi4vUmVuZGVyVGl0bGUnXG5pbXBvcnQgeyBEb2N1bWVudFRhYnMgfSBmcm9tICcuL1RhYnMnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gYGRvYy1oZWFkZXJgXG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudEhlYWRlcjogUmVhY3QuRkM8e1xuICBhcGlVUkw/OiBzdHJpbmdcbiAgY29sbGVjdGlvbj86IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgY3VzdG9tSGVhZGVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIGRhdGE/OiBhbnlcbiAgZ2xvYmFsPzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIGlkPzogc3RyaW5nXG4gIGlzRWRpdGluZz86IGJvb2xlYW5cbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIGFwaVVSTCwgY29sbGVjdGlvbiwgY3VzdG9tSGVhZGVyLCBkYXRhLCBnbG9iYWwsIGlzRWRpdGluZyB9ID0gcHJvcHNcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG5cbiAgcmV0dXJuIChcbiAgICA8R3V0dGVyIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIHtjdXN0b21IZWFkZXIgJiYgY3VzdG9tSGVhZGVyfVxuICAgICAgeyFjdXN0b21IZWFkZXIgJiYgKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPFJlbmRlclRpdGxlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RpdGxlYH1cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgZmFsbGJhY2s9e2BbJHt0KCd1bnRpdGxlZCcpfV1gfVxuICAgICAgICAgICAgZ2xvYmFsPXtnbG9iYWx9XG4gICAgICAgICAgICB1c2VBc1RpdGxlPXtjb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEb2N1bWVudFRhYnNcbiAgICAgICAgICAgIGFwaVVSTD17YXBpVVJMfVxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgIGdsb2JhbD17Z2xvYmFsfVxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9HdXR0ZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJEb2N1bWVudEhlYWRlciIsImJhc2VDbGFzcyIsInByb3BzIiwiaWQiLCJhcGlVUkwiLCJjb2xsZWN0aW9uIiwiY3VzdG9tSGVhZGVyIiwiZGF0YSIsImdsb2JhbCIsImlzRWRpdGluZyIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsIkd1dHRlciIsImNsYXNzTmFtZSIsIkZyYWdtZW50IiwiUmVuZGVyVGl0bGUiLCJmYWxsYmFjayIsInVzZUFzVGl0bGUiLCJhZG1pbiIsIkRvY3VtZW50VGFicyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVlhQTs7O2VBQUFBOzs7K0RBWm1COzhCQUNEO3dCQUlSO29FQUNDO3NCQUNLO1FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1DLFlBQVksQ0FBQyxVQUFVLENBQUM7QUFFdkIsTUFBTUQsaUJBUVIsQ0FBQ0U7SUFDSixNQUFNLEVBQUVDLEVBQUUsRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHUDtJQUMxRSxNQUFNLEVBQUVRLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLHFCQUNFLDZCQUFDQyxjQUFNO1FBQUNDLFdBQVdaO09BQ2hCSyxnQkFBZ0JBLGNBQ2hCLENBQUNBLDhCQUNBLDZCQUFDUSxlQUFRLHNCQUNQLDZCQUFDQyxvQkFBVztRQUNWRixXQUFXLENBQUMsRUFBRVosVUFBVSxPQUFPLENBQUM7UUFDaENJLFlBQVlBO1FBQ1pFLE1BQU1BO1FBQ05TLFVBQVUsQ0FBQyxDQUFDLEVBQUVOLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUJGLFFBQVFBO1FBQ1JTLFlBQVlaLFlBQVlhLE9BQU9EO3NCQUVqQyw2QkFBQ0Usa0JBQVk7UUFDWGYsUUFBUUE7UUFDUkMsWUFBWUE7UUFDWkcsUUFBUUE7UUFDUkwsSUFBSUE7UUFDSk0sV0FBV0E7O0FBTXZCIn0=