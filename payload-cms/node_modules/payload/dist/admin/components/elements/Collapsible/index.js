"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Collapsible", {
    enumerable: true,
    get: function() {
        return Collapsible;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactanimateheight = /*#__PURE__*/ _interop_require_default(require("react-animate-height"));
const _reacti18next = require("react-i18next");
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _Drag = /*#__PURE__*/ _interop_require_default(require("../../icons/Drag"));
require("./index.scss");
const _provider = require("./provider");
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
const baseClass = 'collapsible';
const Collapsible = ({ actions, children, className, collapsed: collapsedFromProps, collapsibleStyle = 'default', dragHandleProps, header, initCollapsed, onToggle })=>{
    const [collapsedLocal, setCollapsedLocal] = (0, _react.useState)(Boolean(initCollapsed));
    const [hoveringToggle, setHoveringToggle] = (0, _react.useState)(false);
    const { withinCollapsible } = (0, _provider.useCollapsible)();
    const { t } = (0, _reacti18next.useTranslation)('fields');
    const collapsed = typeof collapsedFromProps === 'boolean' ? collapsedFromProps : collapsedLocal;
    const toggleCollapsible = _react.default.useCallback(()=>{
        if (typeof onToggle === 'function') onToggle(!collapsed);
        setCollapsedLocal(!collapsed);
    }, [
        onToggle,
        collapsed
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            className,
            dragHandleProps && `${baseClass}--has-drag-handle`,
            collapsed && `${baseClass}--collapsed`,
            withinCollapsible && `${baseClass}--nested`,
            hoveringToggle && `${baseClass}--hovered`,
            `${baseClass}--style-${collapsibleStyle}`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_provider.CollapsibleProvider, {
        collapsed: collapsed,
        toggle: toggleCollapsible
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__toggle-wrap`,
        onMouseEnter: ()=>setHoveringToggle(true),
        onMouseLeave: ()=>setHoveringToggle(false)
    }, dragHandleProps && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__drag`,
        ...dragHandleProps.attributes,
        ...dragHandleProps.listeners
    }, /*#__PURE__*/ _react.default.createElement(_Drag.default, null)), /*#__PURE__*/ _react.default.createElement("button", {
        className: [
            `${baseClass}__toggle`,
            `${baseClass}__toggle--${collapsed ? 'collapsed' : 'open'}`
        ].filter(Boolean).join(' '),
        onClick: toggleCollapsible,
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement("span", null, t('toggleBlock'))), header && /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            `${baseClass}__header-wrap`,
            dragHandleProps && `${baseClass}__header-wrap--has-drag-handle`
        ].filter(Boolean).join(' ')
    }, header && header), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__actions-wrap`
    }, actions && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__actions`
    }, actions), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__indicator`
    }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
        direction: !collapsed ? 'up' : undefined
    })))), /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        duration: 200,
        height: collapsed ? 0 : 'auto'
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__content`
    }, children))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvbGxhcHNpYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBbmltYXRlSGVpZ2h0IGZyb20gJ3JlYWN0LWFuaW1hdGUtaGVpZ2h0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IENoZXZyb24gZnJvbSAnLi4vLi4vaWNvbnMvQ2hldnJvbidcbmltcG9ydCBEcmFnSGFuZGxlIGZyb20gJy4uLy4uL2ljb25zL0RyYWcnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcbmltcG9ydCB7IENvbGxhcHNpYmxlUHJvdmlkZXIsIHVzZUNvbGxhcHNpYmxlIH0gZnJvbSAnLi9wcm92aWRlcidcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbGxhcHNpYmxlJ1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2libGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGFjdGlvbnMsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGNvbGxhcHNlZDogY29sbGFwc2VkRnJvbVByb3BzLFxuICBjb2xsYXBzaWJsZVN0eWxlID0gJ2RlZmF1bHQnLFxuICBkcmFnSGFuZGxlUHJvcHMsXG4gIGhlYWRlcixcbiAgaW5pdENvbGxhcHNlZCxcbiAgb25Ub2dnbGUsXG59KSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWRMb2NhbCwgc2V0Q29sbGFwc2VkTG9jYWxdID0gdXNlU3RhdGUoQm9vbGVhbihpbml0Q29sbGFwc2VkKSlcbiAgY29uc3QgW2hvdmVyaW5nVG9nZ2xlLCBzZXRIb3ZlcmluZ1RvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyB3aXRoaW5Db2xsYXBzaWJsZSB9ID0gdXNlQ29sbGFwc2libGUoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKVxuXG4gIGNvbnN0IGNvbGxhcHNlZCA9IHR5cGVvZiBjb2xsYXBzZWRGcm9tUHJvcHMgPT09ICdib29sZWFuJyA/IGNvbGxhcHNlZEZyb21Qcm9wcyA6IGNvbGxhcHNlZExvY2FsXG5cbiAgY29uc3QgdG9nZ2xlQ29sbGFwc2libGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvblRvZ2dsZSA9PT0gJ2Z1bmN0aW9uJykgb25Ub2dnbGUoIWNvbGxhcHNlZClcbiAgICBzZXRDb2xsYXBzZWRMb2NhbCghY29sbGFwc2VkKVxuICB9LCBbb25Ub2dnbGUsIGNvbGxhcHNlZF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGRyYWdIYW5kbGVQcm9wcyAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtZHJhZy1oYW5kbGVgLFxuICAgICAgICBjb2xsYXBzZWQgJiYgYCR7YmFzZUNsYXNzfS0tY29sbGFwc2VkYCxcbiAgICAgICAgd2l0aGluQ29sbGFwc2libGUgJiYgYCR7YmFzZUNsYXNzfS0tbmVzdGVkYCxcbiAgICAgICAgaG92ZXJpbmdUb2dnbGUgJiYgYCR7YmFzZUNsYXNzfS0taG92ZXJlZGAsXG4gICAgICAgIGAke2Jhc2VDbGFzc30tLXN0eWxlLSR7Y29sbGFwc2libGVTdHlsZX1gLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgPlxuICAgICAgPENvbGxhcHNpYmxlUHJvdmlkZXIgY29sbGFwc2VkPXtjb2xsYXBzZWR9IHRvZ2dsZT17dG9nZ2xlQ29sbGFwc2libGV9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGUtd3JhcGB9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmluZ1RvZ2dsZSh0cnVlKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyaW5nVG9nZ2xlKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkcmFnSGFuZGxlUHJvcHMgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RyYWdgfVxuICAgICAgICAgICAgICB7Li4uZHJhZ0hhbmRsZVByb3BzLmF0dHJpYnV0ZXN9XG4gICAgICAgICAgICAgIHsuLi5kcmFnSGFuZGxlUHJvcHMubGlzdGVuZXJzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RHJhZ0hhbmRsZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlYCxcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlLS0ke2NvbGxhcHNlZCA/ICdjb2xsYXBzZWQnIDogJ29wZW4nfWAsXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNpYmxlfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+e3QoJ3RvZ2dsZUJsb2NrJyl9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtoZWFkZXIgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICBgJHtiYXNlQ2xhc3N9X19oZWFkZXItd3JhcGAsXG4gICAgICAgICAgICAgICAgZHJhZ0hhbmRsZVByb3BzICYmIGAke2Jhc2VDbGFzc31fX2hlYWRlci13cmFwLS1oYXMtZHJhZy1oYW5kbGVgLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgIC5qb2luKCcgJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9ucy13cmFwYH0+XG4gICAgICAgICAgICB7YWN0aW9ucyAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uc2B9PnthY3Rpb25zfTwvZGl2Pn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbmRpY2F0b3JgfT5cbiAgICAgICAgICAgICAgPENoZXZyb24gZGlyZWN0aW9uPXshY29sbGFwc2VkID8gJ3VwJyA6IHVuZGVmaW5lZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFuaW1hdGVIZWlnaHQgZHVyYXRpb249ezIwMH0gaGVpZ2h0PXtjb2xsYXBzZWQgPyAwIDogJ2F1dG8nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9BbmltYXRlSGVpZ2h0PlxuICAgICAgPC9Db2xsYXBzaWJsZVByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQ29sbGFwc2libGUiLCJiYXNlQ2xhc3MiLCJhY3Rpb25zIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb2xsYXBzZWQiLCJjb2xsYXBzZWRGcm9tUHJvcHMiLCJjb2xsYXBzaWJsZVN0eWxlIiwiZHJhZ0hhbmRsZVByb3BzIiwiaGVhZGVyIiwiaW5pdENvbGxhcHNlZCIsIm9uVG9nZ2xlIiwiY29sbGFwc2VkTG9jYWwiLCJzZXRDb2xsYXBzZWRMb2NhbCIsInVzZVN0YXRlIiwiQm9vbGVhbiIsImhvdmVyaW5nVG9nZ2xlIiwic2V0SG92ZXJpbmdUb2dnbGUiLCJ3aXRoaW5Db2xsYXBzaWJsZSIsInVzZUNvbGxhcHNpYmxlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidG9nZ2xlQ29sbGFwc2libGUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwiZGl2IiwiZmlsdGVyIiwiam9pbiIsIkNvbGxhcHNpYmxlUHJvdmlkZXIiLCJ0b2dnbGUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwiRHJhZ0hhbmRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwic3BhbiIsIkNoZXZyb24iLCJkaXJlY3Rpb24iLCJ1bmRlZmluZWQiLCJBbmltYXRlSGVpZ2h0IiwiZHVyYXRpb24iLCJoZWlnaHQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFhYUE7OztlQUFBQTs7OytEQWJtQjsyRUFDTjs4QkFDSztnRUFJWDs2REFDRztRQUNoQjswQkFDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxjQUErQixDQUFDLEVBQzNDRSxPQUFPLEVBQ1BDLFFBQVEsRUFDUkMsU0FBUyxFQUNUQyxXQUFXQyxrQkFBa0IsRUFDN0JDLG1CQUFtQixTQUFTLEVBQzVCQyxlQUFlLEVBQ2ZDLE1BQU0sRUFDTkMsYUFBYSxFQUNiQyxR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