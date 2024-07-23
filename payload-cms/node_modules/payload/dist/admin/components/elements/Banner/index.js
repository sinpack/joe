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
    Banner: function() {
        return Banner;
    },
    default: function() {
        return _default;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactrouterdom = require("react-router-dom");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'banner';
const Banner = ({ alignIcon = 'right', children, className, icon, onClick, to, type = 'default' })=>{
    const classes = [
        baseClass,
        `${baseClass}--type-${type}`,
        className && className,
        to && `${baseClass}--has-link`,
        (to || onClick) && `${baseClass}--has-action`,
        icon && `${baseClass}--has-icon`,
        icon && `${baseClass}--align-icon-${alignIcon}`
    ].filter(Boolean).join(' ');
    let RenderedType = 'div';
    if (onClick && !to) RenderedType = 'button';
    if (to) RenderedType = _reactrouterdom.Link;
    return /*#__PURE__*/ _react.default.createElement(RenderedType, {
        className: classes,
        onClick: onClick,
        to: to || undefined
    }, icon && alignIcon === 'left' && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, icon), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__content`
    }, children), icon && alignIcon === 'right' && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, icon));
};
const _default = Banner;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0Jhbm5lci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMsIFJlbmRlcmVkVHlwZVByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdiYW5uZXInXG5cbmV4cG9ydCBjb25zdCBCYW5uZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGFsaWduSWNvbiA9ICdyaWdodCcsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGljb24sXG4gIG9uQ2xpY2ssXG4gIHRvLFxuICB0eXBlID0gJ2RlZmF1bHQnLFxufSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBgJHtiYXNlQ2xhc3N9LS10eXBlLSR7dHlwZX1gLFxuICAgIGNsYXNzTmFtZSAmJiBjbGFzc05hbWUsXG4gICAgdG8gJiYgYCR7YmFzZUNsYXNzfS0taGFzLWxpbmtgLFxuICAgICh0byB8fCBvbkNsaWNrKSAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtYWN0aW9uYCxcbiAgICBpY29uICYmIGAke2Jhc2VDbGFzc30tLWhhcy1pY29uYCxcbiAgICBpY29uICYmIGAke2Jhc2VDbGFzc30tLWFsaWduLWljb24tJHthbGlnbkljb259YCxcbiAgXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpXG5cbiAgbGV0IFJlbmRlcmVkVHlwZTogUmVhY3QuQ29tcG9uZW50VHlwZTxSZW5kZXJlZFR5cGVQcm9wcz4gfCBzdHJpbmcgPSAnZGl2J1xuXG4gIGlmIChvbkNsaWNrICYmICF0bykgUmVuZGVyZWRUeXBlID0gJ2J1dHRvbidcbiAgaWYgKHRvKSBSZW5kZXJlZFR5cGUgPSBMaW5rXG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyZWRUeXBlIGNsYXNzTmFtZT17Y2xhc3Nlc30gb25DbGljaz17b25DbGlja30gdG89e3RvIHx8IHVuZGVmaW5lZH0+XG4gICAgICB7aWNvbiAmJiBhbGlnbkljb24gPT09ICdsZWZ0JyAmJiA8UmVhY3QuRnJhZ21lbnQ+e2ljb259PC9SZWFjdC5GcmFnbWVudD59XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnRgfT57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAge2ljb24gJiYgYWxpZ25JY29uID09PSAncmlnaHQnICYmIDxSZWFjdC5GcmFnbWVudD57aWNvbn08L1JlYWN0LkZyYWdtZW50Pn1cbiAgICA8L1JlbmRlcmVkVHlwZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJcbiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJiYXNlQ2xhc3MiLCJhbGlnbkljb24iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImljb24iLCJvbkNsaWNrIiwidG8iLCJ0eXBlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiUmVuZGVyZWRUeXBlIiwiTGluayIsInVuZGVmaW5lZCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJzcGFuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFTYUEsTUFBTTtlQUFOQTs7SUFtQ2IsT0FBcUI7ZUFBckI7Ozs4REE1Q2tCO2dDQUNHO1FBSWQ7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxTQUEwQixDQUFDLEVBQ3RDRSxZQUFZLE9BQU8sRUFDbkJDLFFBQVEsRUFDUkMsU0FBUyxFQUNUQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsRUFBRSxFQUNGQyxPQUFPLFNBQVMsRUFDakI7SUFDQyxNQUFNQyxVQUFVO1FBQ2RSO1FBQ0EsQ0FBQyxFQUFFQSxVQUFVLE9BQU8sRUFBRU8sS0FBSyxDQUFDO1FBQzVCSixhQUFhQTtRQUNiRyxNQUFNLENBQUMsRUFBRU4sVUFBVSxVQUFVLENBQUM7UUFDN0JNLENBQUFBLE1BQU1ELE9BQU0sS0FBTSxDQUFDLEVBQUVMLFVBQVUsWUFBWSxDQUFDO1FBQzdDSSxRQUFRLENBQUMsRUFBRUosVUFBVSxVQUFVLENBQUM7UUFDaENJLFFBQVEsQ0FBQyxFQUFFSixVQUFVLGFBQWEsRUFBRUMsVUFBVSxDQUFDO0tBQ2hELENBQ0VRLE1BQU0sQ0FBQ0MsU0FDUEMsSUFBSSxDQUFDO0lBRVIsSUFBSUMsZUFBZ0U7SUFFcEUsSUFBSVAsV0FBVyxDQUFDQyxJQUFJTSxlQUFlO0lBQ25DLElBQUlOLElBQUlNLGVBQWVDLG9CQUFJO0lBRTNCLHFCQUNFLDZCQUFDRDtRQUFhVCxXQUFXSztRQUFTSCxTQUFTQTtRQUFTQyxJQUFJQSxNQUFNUTtPQUMzRFYsUUFBUUgsY0FBYyx3QkFBVSw2QkFBQ2MsY0FBSyxDQUFDQyxRQUFRLFFBQUVaLHFCQUNsRCw2QkFBQ2E7UUFBS2QsV0FBVyxDQUFDLEVBQUVILFVBQVUsU0FBUyxDQUFDO09BQUdFLFdBQzFDRSxRQUFRSCxjQUFjLHlCQUFXLDZCQUFDYyxjQUFLLENBQUNDLFFBQVEsUUFBRVo7QUFHekQ7TUFFQSxXQUFlTCJ9