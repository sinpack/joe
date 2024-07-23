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
const _reacti18next = require("react-i18next");
const _Search = /*#__PURE__*/ _interop_require_default(require("../../../../../graphics/Search"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'block-search';
const BlockSearch = (props)=>{
    const { setSearchTerm } = props;
    const { t } = (0, _reacti18next.useTranslation)('fields');
    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
    };
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: `${baseClass}__input`,
        onChange: handleChange,
        placeholder: t('searchForBlock')
    }), /*#__PURE__*/ _react.default.createElement(_Search.default, null));
};
const _default = BlockSearch;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9CbG9ja3NEcmF3ZXIvQmxvY2tTZWFyY2gvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ3JhcGhpY3MvU2VhcmNoJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdibG9jay1zZWFyY2gnXG5cbmNvbnN0IEJsb2NrU2VhcmNoOiBSZWFjdC5GQzx7IHNldFNlYXJjaFRlcm06ICh0ZXJtOiBzdHJpbmcpID0+IHZvaWQgfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZXRTZWFyY2hUZXJtIH0gPSBwcm9wc1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbnB1dGB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0KCdzZWFyY2hGb3JCbG9jaycpfVxuICAgICAgLz5cbiAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tTZWFyY2hcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJCbG9ja1NlYXJjaCIsInByb3BzIiwic2V0U2VhcmNoVGVybSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIlNlYXJjaEljb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE0QkE7OztlQUFBOzs7OERBNUJrQjs4QkFDYTsrREFFUjtRQUNoQjs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxjQUFtRSxDQUFDQztJQUN4RSxNQUFNLEVBQUVDLGFBQWEsRUFBRSxHQUFHRDtJQUMxQixNQUFNLEVBQUVFLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEJKLGNBQWNJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM5QjtJQUVBLHFCQUNFLDZCQUFDQztRQUFJQyxXQUFXWDtxQkFDZCw2QkFBQ1k7UUFDQ0QsV0FBVyxDQUFDLEVBQUVYLFVBQVUsT0FBTyxDQUFDO1FBQ2hDYSxVQUFVUDtRQUNWUSxhQUFhVixFQUFFO3NCQUVqQiw2QkFBQ1csZUFBVTtBQUdqQjtNQUVBLFdBQWVkIn0=