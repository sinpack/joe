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
const _reactrouterdom = require("react-router-dom");
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _Edit = /*#__PURE__*/ _interop_require_default(require("../../icons/Edit"));
const _Link = /*#__PURE__*/ _interop_require_default(require("../../icons/Link"));
const _Plus = /*#__PURE__*/ _interop_require_default(require("../../icons/Plus"));
const _Swap = /*#__PURE__*/ _interop_require_default(require("../../icons/Swap"));
const _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
const _Tooltip = /*#__PURE__*/ _interop_require_default(require("../Tooltip"));
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
const icons = {
    chevron: _Chevron.default,
    edit: _Edit.default,
    link: _Link.default,
    plus: _Plus.default,
    swap: _Swap.default,
    x: _X.default
};
const baseClass = 'btn';
const ButtonContents = ({ children, icon, showTooltip, tooltip })=>{
    const BuiltInIcon = icons[icon];
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, tooltip && /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        className: `${baseClass}__tooltip`,
        show: showTooltip
    }, tooltip), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__content`
    }, children && /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__label`
    }, children), icon && /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__icon`
    }, /*#__PURE__*/ (0, _react.isValidElement)(icon) && icon, BuiltInIcon && /*#__PURE__*/ _react.default.createElement(BuiltInIcon, null))));
};
const Button = /*#__PURE__*/ (0, _react.forwardRef)((props, ref)=>{
    const { id, 'aria-label': ariaLabel, buttonStyle = 'primary', children, className, disabled, el = 'button', icon, iconPosition = 'right', iconStyle = 'without-border', newTab, onClick, round, size = 'medium', to, tooltip, type = 'button', url } = props;
    const [showTooltip, setShowTooltip] = _react.default.useState(false);
    const classes = [
        baseClass,
        className && className,
        buttonStyle && `${baseClass}--style-${buttonStyle}`,
        icon && `${baseClass}--icon`,
        iconStyle && `${baseClass}--icon-style-${iconStyle}`,
        icon && !children && `${baseClass}--icon-only`,
        disabled && `${baseClass}--disabled`,
        round && `${baseClass}--round`,
        size && `${baseClass}--size-${size}`,
        iconPosition && `${baseClass}--icon-position-${iconPosition}`,
        tooltip && `${baseClass}--has-tooltip`
    ].filter(Boolean).join(' ');
    function handleClick(event) {
        setShowTooltip(false);
        if (type !== 'submit' && onClick) event.preventDefault();
        if (onClick) onClick(event);
    }
    const buttonProps = {
        id,
        'aria-disabled': disabled,
        'aria-label': ariaLabel,
        className: classes,
        disabled,
        onClick: !disabled ? handleClick : undefined,
        onMouseEnter: tooltip ? ()=>setShowTooltip(true) : undefined,
        onMouseLeave: tooltip ? ()=>setShowTooltip(false) : undefined,
        rel: newTab ? 'noopener noreferrer' : undefined,
        target: newTab ? '_blank' : undefined,
        type
    };
    switch(el){
        case 'link':
            return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
                ...buttonProps,
                to: to || url
            }, /*#__PURE__*/ _react.default.createElement(ButtonContents, {
                icon: icon,
                showTooltip: showTooltip,
                tooltip: tooltip
            }, children));
        case 'anchor':
            return /*#__PURE__*/ _react.default.createElement("a", {
                ...buttonProps,
                href: url,
                ref: ref
            }, /*#__PURE__*/ _react.default.createElement(ButtonContents, {
                icon: icon,
                showTooltip: showTooltip,
                tooltip: tooltip
            }, children));
        default:
            const Tag = el // eslint-disable-line no-case-declarations
            ;
            return /*#__PURE__*/ _react.default.createElement(Tag, {
                ref: ref,
                type: "submit",
                ...buttonProps
            }, /*#__PURE__*/ _react.default.createElement(ButtonContents, {
                icon: icon,
                showTooltip: showTooltip,
                tooltip: tooltip
            }, children));
    }
});
const _default = Button;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0J1dHRvbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBmb3J3YXJkUmVmLCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgY2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJ1xuaW1wb3J0IGVkaXQgZnJvbSAnLi4vLi4vaWNvbnMvRWRpdCdcbmltcG9ydCBsaW5rSWNvbiBmcm9tICcuLi8uLi9pY29ucy9MaW5rJ1xuaW1wb3J0IHBsdXMgZnJvbSAnLi4vLi4vaWNvbnMvUGx1cydcbmltcG9ydCBzd2FwIGZyb20gJy4uLy4uL2ljb25zL1N3YXAnXG5pbXBvcnQgeCBmcm9tICcuLi8uLi9pY29ucy9YJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vVG9vbHRpcCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBpY29ucyA9IHtcbiAgY2hldnJvbixcbiAgZWRpdCxcbiAgbGluazogbGlua0ljb24sXG4gIHBsdXMsXG4gIHN3YXAsXG4gIHgsXG59XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdidG4nXG5cbmNvbnN0IEJ1dHRvbkNvbnRlbnRzID0gKHsgY2hpbGRyZW4sIGljb24sIHNob3dUb29sdGlwLCB0b29sdGlwIH0pID0+IHtcbiAgY29uc3QgQnVpbHRJbkljb24gPSBpY29uc1tpY29uXVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge3Rvb2x0aXAgJiYgKFxuICAgICAgICA8VG9vbHRpcCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3Rvb2x0aXBgfSBzaG93PXtzaG93VG9vbHRpcH0+XG4gICAgICAgICAge3Rvb2x0aXB9XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICl9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnRgfT5cbiAgICAgICAge2NoaWxkcmVuICYmIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faWNvbmB9PlxuICAgICAgICAgICAge2lzVmFsaWRFbGVtZW50KGljb24pICYmIGljb259XG4gICAgICAgICAgICB7QnVpbHRJbkljb24gJiYgPEJ1aWx0SW5JY29uIC8+fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IEJ1dHRvbiA9IGZvcndhcmRSZWY8SFRNTEFuY2hvckVsZW1lbnQgfCBIVE1MQnV0dG9uRWxlbWVudCwgUHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcbiAgICBidXR0b25TdHlsZSA9ICdwcmltYXJ5JyxcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgZGlzYWJsZWQsXG4gICAgZWwgPSAnYnV0dG9uJyxcbiAgICBpY29uLFxuICAgIGljb25Qb3NpdGlvbiA9ICdyaWdodCcsXG4gICAgaWNvblN0eWxlID0gJ3dpdGhvdXQtYm9yZGVyJyxcbiAgICBuZXdUYWIsXG4gICAgb25DbGljayxcbiAgICByb3VuZCxcbiAgICBzaXplID0gJ21lZGl1bScsXG4gICAgdG8sXG4gICAgdG9vbHRpcCxcbiAgICB0eXBlID0gJ2J1dHRvbicsXG4gICAgdXJsLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBbc2hvd1Rvb2x0aXAsIHNldFNob3dUb29sdGlwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSAmJiBjbGFzc05hbWUsXG4gICAgYnV0dG9uU3R5bGUgJiYgYCR7YmFzZUNsYXNzfS0tc3R5bGUtJHtidXR0b25TdHlsZX1gLFxuICAgIGljb24gJiYgYCR7YmFzZUNsYXNzfS0taWNvbmAsXG4gICAgaWNvblN0eWxlICYmIGAke2Jhc2VDbGFzc30tLWljb24tc3R5bGUtJHtpY29uU3R5bGV9YCxcbiAgICBpY29uICYmICFjaGlsZHJlbiAmJiBgJHtiYXNlQ2xhc3N9LS1pY29uLW9ubHlgLFxuICAgIGRpc2FibGVkICYmIGAke2Jhc2VDbGFzc30tLWRpc2FibGVkYCxcbiAgICByb3VuZCAmJiBgJHtiYXNlQ2xhc3N9LS1yb3VuZGAsXG4gICAgc2l6ZSAmJiBgJHtiYXNlQ2xhc3N9LS1zaXplLSR7c2l6ZX1gLFxuICAgIGljb25Qb3NpdGlvbiAmJiBgJHtiYXNlQ2xhc3N9LS1pY29uLXBvc2l0aW9uLSR7aWNvblBvc2l0aW9ufWAsXG4gICAgdG9vbHRpcCAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtdG9vbHRpcGAsXG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJyAnKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgc2V0U2hvd1Rvb2x0aXAoZmFsc2UpXG4gICAgaWYgKHR5cGUgIT09ICdzdWJtaXQnICYmIG9uQ2xpY2spIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAob25DbGljaykgb25DbGljayhldmVudClcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvblByb3BzID0ge1xuICAgIGlkLFxuICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIGRpc2FibGVkLFxuICAgIG9uQ2xpY2s6ICFkaXNhYmxlZCA/IGhhbmRsZUNsaWNrIDogdW5kZWZpbmVkLFxuICAgIG9uTW91c2VFbnRlcjogdG9vbHRpcCA/ICgpID0+IHNldFNob3dUb29sdGlwKHRydWUpIDogdW5kZWZpbmVkLFxuICAgIG9uTW91c2VMZWF2ZTogdG9vbHRpcCA/ICgpID0+IHNldFNob3dUb29sdGlwKGZhbHNlKSA6IHVuZGVmaW5lZCxcbiAgICByZWw6IG5ld1RhYiA/ICdub29wZW5lciBub3JlZmVycmVyJyA6IHVuZGVmaW5lZCxcbiAgICB0YXJnZXQ6IG5ld1RhYiA/ICdfYmxhbmsnIDogdW5kZWZpbmVkLFxuICAgIHR5cGUsXG4gIH1cblxuICBzd2l0Y2ggKGVsKSB7XG4gICAgY2FzZSAnbGluayc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGluayB7Li4uYnV0dG9uUHJvcHN9IHRvPXt0byB8fCB1cmx9PlxuICAgICAgICAgIDxCdXR0b25Db250ZW50cyBpY29uPXtpY29ufSBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9IHRvb2x0aXA9e3Rvb2x0aXB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvQnV0dG9uQ29udGVudHM+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcblxuICAgIGNhc2UgJ2FuY2hvcic6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YSB7Li4uYnV0dG9uUHJvcHN9IGhyZWY9e3VybH0gcmVmPXtyZWYgYXMgUmVhY3QuTGVnYWN5UmVmPEhUTUxBbmNob3JFbGVtZW50Pn0+XG4gICAgICAgICAgPEJ1dHRvbkNvbnRlbnRzIGljb249e2ljb259IHNob3dUb29sdGlwPXtzaG93VG9vbHRpcH0gdG9vbHRpcD17dG9vbHRpcH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9CdXR0b25Db250ZW50cz5cbiAgICAgICAgPC9hPlxuICAgICAgKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnN0IFRhZyA9IGVsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhZyByZWY9e3JlZn0gdHlwZT1cInN1Ym1pdFwiIHsuLi5idXR0b25Qcm9wc30+XG4gICAgICAgICAgPEJ1dHRvbkNvbnRlbnRzIGljb249e2ljb259IHNob3dUb29sdGlwPXtzaG93VG9vbHRpcH0gdG9vbHRpcD17dG9vbHRpcH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9CdXR0b25Db250ZW50cz5cbiAgICAgICAgPC9UYWc+XG4gICAgICApXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl0sIm5hbWVzIjpbImljb25zIiwiY2hldnJvbiIsImVkaXQiLCJsaW5rIiwibGlua0ljb24iLCJwbHVzIiwic3dhcCIsIngiLCJiYXNlQ2xhc3MiLCJCdXR0b25Db250ZW50cyIsImNoaWxkcmVuIiwiaWNvbiIsInNob3dUb29sdGlwIiwidG9vbHRpcCIsIkJ1aWx0SW5JY29uIiwiRnJhZ21lbnQiLCJUb29sdGlwIiwiY2xhc3NOYW1lIiwic2hvdyIsInNwYW4iLCJpc1ZhbGlkRWxlbWVudCIsIkJ1dHRvbiIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImlkIiwiYXJpYUxhYmVsIiwiYnV0dG9uU3R5bGUiLCJkaXNhYmxlZCIsImVsIiwiaWNvblBvc2l0aW9uIiwiaWNvblN0eWxlIiwibmV3VGFiIiwib25DbGljayIsInJvdW5kIiwic2l6ZSIsInRvIiwidHlwZSIsInVybCIsInNldFNob3dUb29sdGlwIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvblByb3BzIiwidW5kZWZpbmVkIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicmVsIiwidGFyZ2V0IiwiTGluayIsImEiLCJocmVmIiwiVGFnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE0SUE7OztlQUFBOzs7K0RBNUk0RDtnQ0FDdkM7Z0VBSUQ7NkRBQ0g7NkRBQ0k7NkRBQ0o7NkRBQ0E7MERBQ0g7Z0VBQ007UUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxRQUFRO0lBQ1pDLFNBQUFBLGdCQUFPO0lBQ1BDLE1BQUFBLGFBQUk7SUFDSkMsTUFBTUMsYUFBUTtJQUNkQyxNQUFBQSxhQUFJO0lBQ0pDLE1BQUFBLGFBQUk7SUFDSkMsR0FBQUEsVUFBQztBQUNIO0FBRUEsTUFBTUMsWUFBWTtBQUVsQixNQUFNQyxpQkFBaUIsQ0FBQyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUU7SUFDOUQsTUFBTUMsY0FBY2QsS0FBSyxDQUFDVyxLQUFLO0lBRS9CLHFCQUNFLDZCQUFDSSxlQUFRLFFBQ05GLHlCQUNDLDZCQUFDRyxnQkFBTztRQUFDQyxXQUFXLENBQUMsRUFBRVQsVUFBVSxTQUFTLENBQUM7UUFBRVUsTUFBTU47T0FDaERDLHdCQUdMLDZCQUFDTTtRQUFLRixXQUFXLENBQUMsRUFBRVQsVUFBVSxTQUFTLENBQUM7T0FDckNFLDBCQUFZLDZCQUFDUztRQUFLRixXQUFXLENBQUMsRUFBRVQsVUFBVSxPQUFPLENBQUM7T0FBR0UsV0FDckRDLHNCQUNDLDZCQUFDUTtRQUFLRixXQUFXLENBQUMsRUFBRVQsVUFBVSxNQUFNLENBQUM7cUJBQ2xDWSxJQUFBQSxxQkFBYyxFQUFDVCxTQUFTQSxNQUN4QkcsNkJBQWUsNkJBQUNBO0FBTTdCO0FBRUEsTUFBTU8sdUJBQVNDLElBQUFBLGlCQUFVLEVBQStDLENBQUNDLE9BQU9DO0lBQzlFLE1BQU0sRUFDSkMsRUFBRSxFQUNGLGNBQWNDLFNBQVMsRUFDdkJDLGNBQWMsU0FBUyxFQUN2QmpCLFFBQVEsRUFDUk8sU0FBUyxFQUNUVyxRQUFRLEVBQ1JDLEtBQUssUUFBUSxFQUNibEIsSUFBSSxFQUNKbUIsZUFBZSxPQUFPLEVBQ3RCQyxZQUFZLGdCQUFnQixFQUM1QkMsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLEtBQUssRUFDTEMsT0FBTyxRQUFRLEVBQ2ZDLEVBQUUsRUFDRnZCLE9BQU8sRUFDUHdCLE9BQU8sUUFBUSxFQUNmQyxHQUFHLEVBQ0osR0FBR2Y7SUFFSixNQUFNLENBQUNYLGFBQWEyQixlQUFlLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDO0lBRXJELE1BQU1DLFVBQVU7UUFDZGxDO1FBQ0FTLGFBQWFBO1FBQ2JVLGVBQWUsQ0FBQyxFQUFFbkIsVUFBVSxRQUFRLEVBQUVtQixZQUFZLENBQUM7UUFDbkRoQixRQUFRLENBQUMsRUFBRUgsVUFBVSxNQUFNLENBQUM7UUFDNUJ1QixhQUFhLENBQUMsRUFBRXZCLFVBQVUsYUFBYSxFQUFFdUIsVUFBVSxDQUFDO1FBQ3BEcEIsUUFBUSxDQUFDRCxZQUFZLENBQUMsRUFBRUYsVUFBVSxXQUFXLENBQUM7UUFDOUNvQixZQUFZLENBQUMsRUFBRXBCLFVBQVUsVUFBVSxDQUFDO1FBQ3BDMEIsU0FBUyxDQUFDLEVBQUUxQixVQUFVLE9BQU8sQ0FBQztRQUM5QjJCLFFBQVEsQ0FBQyxFQUFFM0IsVUFBVSxPQUFPLEVBQUUyQixLQUFLLENBQUM7UUFDcENMLGdCQUFnQixDQUFDLEVBQUV0QixVQUFVLGdCQUFnQixFQUFFc0IsYUFBYSxDQUFDO1FBQzdEakIsV0FBVyxDQUFDLEVBQUVMLFVBQVUsYUFBYSxDQUFDO0tBQ3ZDLENBQ0VtQyxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLFNBQVNDLFlBQVlDLEtBQUs7UUFDeEJSLGVBQWU7UUFDZixJQUFJRixTQUFTLFlBQVlKLFNBQVNjLE1BQU1DLGNBQWM7UUFDdEQsSUFBSWYsU0FBU0EsUUFBUWM7SUFDdkI7SUFFQSxNQUFNRSxjQUFjO1FBQ2xCeEI7UUFDQSxpQkFBaUJHO1FBQ2pCLGNBQWNGO1FBQ2RULFdBQVd5QjtRQUNYZDtRQUNBSyxTQUFTLENBQUNMLFdBQVdrQixjQUFjSTtRQUNuQ0MsY0FBY3RDLFVBQVUsSUFBTTBCLGVBQWUsUUFBUVc7UUFDckRFLGNBQWN2QyxVQUFVLElBQU0wQixlQUFlLFNBQVNXO1FBQ3RERyxLQUFLckIsU0FBUyx3QkFBd0JrQjtRQUN0Q0ksUUFBUXRCLFNBQVMsV0FBV2tCO1FBQzVCYjtJQUNGO0lBRUEsT0FBUVI7UUFDTixLQUFLO1lBQ0gscUJBQ0UsNkJBQUMwQixvQkFBSTtnQkFBRSxHQUFHTixXQUFXO2dCQUFFYixJQUFJQSxNQUFNRTs2QkFDL0IsNkJBQUM3QjtnQkFBZUUsTUFBTUE7Z0JBQU1DLGFBQWFBO2dCQUFhQyxTQUFTQTtlQUM1REg7UUFLVCxLQUFLO1lBQ0gscUJBQ0UsNkJBQUM4QztnQkFBRyxHQUFHUCxXQUFXO2dCQUFFUSxNQUFNbkI7Z0JBQUtkLEtBQUtBOzZCQUNsQyw2QkFBQ2Y7Z0JBQWVFLE1BQU1BO2dCQUFNQyxhQUFhQTtnQkFBYUMsU0FBU0E7ZUFDNURIO1FBS1Q7WUFDRSxNQUFNZ0QsTUFBTTdCLEdBQUcsMkNBQTJDOztZQUUxRCxxQkFDRSw2QkFBQzZCO2dCQUFJbEMsS0FBS0E7Z0JBQUthLE1BQUs7Z0JBQVUsR0FBR1ksV0FBVzs2QkFDMUMsNkJBQUN4QztnQkFBZUUsTUFBTUE7Z0JBQU1DLGFBQWFBO2dCQUFhQyxTQUFTQTtlQUM1REg7SUFJWDtBQUNGO01BRUEsV0FBZVcifQ==