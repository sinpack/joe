"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiValueLabel", {
    enumerable: true,
    get: function() {
        return MultiValueLabel;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactselect = require("react-select");
const _DocumentDrawer = require("../../../../../elements/DocumentDrawer");
const _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../../../../elements/Tooltip"));
const _Edit = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/Edit"));
const _Auth = require("../../../../../utilities/Auth");
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
const baseClass = 'relationship--multi-value-label';
const MultiValueLabel = (props)=>{
    const { data: { label, relationTo, value }, selectProps: { // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    customProps: { // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    draggableProps, // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    setDrawerIsOpen } = {} } = {} } = props;
    const { permissions } = (0, _Auth.useAuth)();
    const [showTooltip, setShowTooltip] = (0, _react.useState)(false);
    const { t } = (0, _reacti18next.useTranslation)('general');
    const hasReadPermission = Boolean(permissions?.collections?.[relationTo]?.read?.permission);
    const [DocumentDrawer, DocumentDrawerToggler, { isDrawerOpen }] = (0, _DocumentDrawer.useDocumentDrawer)({
        id: value?.toString(),
        collectionSlug: relationTo
    });
    (0, _react.useEffect)(()=>{
        if (typeof setDrawerIsOpen === 'function') setDrawerIsOpen(isDrawerOpen);
    }, [
        isDrawerOpen,
        setDrawerIsOpen
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__content`
    }, /*#__PURE__*/ _react.default.createElement(_reactselect.components.MultiValueLabel, {
        ...props,
        innerProps: {
            className: `${baseClass}__text`,
            ...draggableProps || {}
        }
    })), relationTo && hasReadPermission && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
        "aria-label": `Edit ${label}`,
        className: `${baseClass}__drawer-toggler`,
        onClick: ()=>setShowTooltip(false),
        onMouseDown: (e)=>e.stopPropagation(),
        onMouseEnter: ()=>setShowTooltip(true),
        onMouseLeave: ()=>setShowTooltip(false),
        onTouchEnd: (e)=>e.stopPropagation()
    }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        className: `${baseClass}__tooltip`,
        show: showTooltip
    }, t('editLabel', {
        label: ''
    })), /*#__PURE__*/ _react.default.createElement(_Edit.default, null)), /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
        onSave: null
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9zZWxlY3QtY29tcG9uZW50cy9NdWx0aVZhbHVlTGFiZWwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTXVsdGlWYWx1ZVByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0J1xuXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IHVzZURvY3VtZW50RHJhd2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZWxlbWVudHMvRG9jdW1lbnREcmF3ZXInXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9Ub29sdGlwJ1xuaW1wb3J0IEVkaXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvRWRpdCdcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmVsYXRpb25zaGlwLS1tdWx0aS12YWx1ZS1sYWJlbCdcblxuZXhwb3J0IGNvbnN0IE11bHRpVmFsdWVMYWJlbDogUmVhY3QuRkM8TXVsdGlWYWx1ZVByb3BzPE9wdGlvbj4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IGxhYmVsLCByZWxhdGlvblRvLCB2YWx1ZSB9LFxuICAgIHNlbGVjdFByb3BzOiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC8vIFRPRE8gRml4IHRoaXMgLSBtb2R1bGVSZXNvbHV0aW9uIDE2IGJyZWFrcyBvdXIgZGVjbGFyZSBtb2R1bGVcbiAgICAgIGN1c3RvbVByb3BzOiB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLy8gVE9ETyBGaXggdGhpcyAtIG1vZHVsZVJlc29sdXRpb24gMTYgYnJlYWtzIG91ciBkZWNsYXJlIG1vZHVsZVxuICAgICAgICBkcmFnZ2FibGVQcm9wcyxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAvLyBUT0RPIEZpeCB0aGlzIC0gbW9kdWxlUmVzb2x1dGlvbiAxNiBicmVha3Mgb3VyIGRlY2xhcmUgbW9kdWxlXG4gICAgICAgIHNldERyYXdlcklzT3BlbixcbiAgICAgICAgLy8gb25TYXZlLFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpXG4gIGNvbnN0IFtzaG93VG9vbHRpcCwgc2V0U2hvd1Rvb2x0aXBdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuICBjb25zdCBoYXNSZWFkUGVybWlzc2lvbiA9IEJvb2xlYW4ocGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bcmVsYXRpb25Ub10/LnJlYWQ/LnBlcm1pc3Npb24pXG5cbiAgY29uc3QgW0RvY3VtZW50RHJhd2VyLCBEb2N1bWVudERyYXdlclRvZ2dsZXIsIHsgaXNEcmF3ZXJPcGVuIH1dID0gdXNlRG9jdW1lbnREcmF3ZXIoe1xuICAgIGlkOiB2YWx1ZT8udG9TdHJpbmcoKSxcbiAgICBjb2xsZWN0aW9uU2x1ZzogcmVsYXRpb25UbyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2V0RHJhd2VySXNPcGVuID09PSAnZnVuY3Rpb24nKSBzZXREcmF3ZXJJc09wZW4oaXNEcmF3ZXJPcGVuKVxuICB9LCBbaXNEcmF3ZXJPcGVuLCBzZXREcmF3ZXJJc09wZW5dKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PlxuICAgICAgICA8Y29tcG9uZW50cy5NdWx0aVZhbHVlTGFiZWxcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgaW5uZXJQcm9wcz17e1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtiYXNlQ2xhc3N9X190ZXh0YCxcbiAgICAgICAgICAgIC4uLihkcmFnZ2FibGVQcm9wcyB8fCB7fSksXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge3JlbGF0aW9uVG8gJiYgaGFzUmVhZFBlcm1pc3Npb24gJiYgKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPERvY3VtZW50RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YEVkaXQgJHtsYWJlbH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kcmF3ZXItdG9nZ2xlcmB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VG9vbHRpcChmYWxzZSl9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9IC8vIHByZXZlbnRzIHJlYWN0LXNlbGVjdCBkcm9wZG93biBmcm9tIG9wZW5pbmdcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd1Rvb2x0aXAodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dUb29sdGlwKGZhbHNlKX1cbiAgICAgICAgICAgIG9uVG91Y2hFbmQ9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfSAvLyBwcmV2ZW50cyByZWFjdC1zZWxlY3QgZHJvcGRvd24gZnJvbSBvcGVuaW5nXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRvb2x0aXAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b29sdGlwYH0gc2hvdz17c2hvd1Rvb2x0aXB9PlxuICAgICAgICAgICAgICB7dCgnZWRpdExhYmVsJywgeyBsYWJlbDogJycgfSl9XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8RWRpdCAvPlxuICAgICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgIDxEb2N1bWVudERyYXdlciBvblNhdmU9ey8qIG9uU2F2ZSAqLyBudWxsfSAvPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIk11bHRpVmFsdWVMYWJlbCIsImJhc2VDbGFzcyIsInByb3BzIiwiZGF0YSIsImxhYmVsIiwicmVsYXRpb25UbyIsInZhbHVlIiwic2VsZWN0UHJvcHMiLCJjdXN0b21Qcm9wcyIsImRyYWdnYWJsZVByb3BzIiwic2V0RHJhd2VySXNPcGVuIiwicGVybWlzc2lvbnMiLCJ1c2VBdXRoIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsInVzZVN0YXRlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiaGFzUmVhZFBlcm1pc3Npb24iLCJCb29sZWFuIiwiY29sbGVjdGlvbnMiLCJyZWFkIiwicGVybWlzc2lvbiIsIkRvY3VtZW50RHJhd2VyIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwiaXNEcmF3ZXJPcGVuIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJpZCIsInRvU3RyaW5nIiwiY29sbGVjdGlvblNsdWciLCJ1c2VFZmZlY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiaW5uZXJQcm9wcyIsIkZyYWdtZW50IiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJvbk1vdXNlRG93biIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvblRvdWNoRW5kIiwiVG9vbHRpcCIsInNob3ciLCJFZGl0Iiwib25TYXZlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWdCYUE7OztlQUFBQTs7OytEQWR3Qzs4QkFDdEI7NkJBQ0o7Z0NBSU87Z0VBQ2Q7NkRBQ0g7c0JBQ087UUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELGtCQUFxRCxDQUFDRTtJQUNqRSxNQUFNLEVBQ0pDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRSxFQUNsQ0MsYUFBYSxFQUNYLG9GQUFvRjtJQUNwRkMsYUFBYSxFQUNYLG9GQUFvRjtJQUNwRkMsY0FBYyxFQUNkLG9GQUFvRjtJQUNwRkMsZUFBZSxFQUVoQixHQUFHLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxDQUFDLEVBQ1AsR0FBR1I7SUFFSixNQUFNLEVBQUVTLFdBQVcsRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQy9CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHQyxJQUFBQSxlQUFRLEVBQUM7SUFDL0MsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUM3QixNQUFNQyxvQkFBb0JDLFFBQVFSLGFBQWFTLGFBQWEsQ0FBQ2YsV0FBVyxFQUFFZ0IsTUFBTUM7SUFFaEYsTUFBTSxDQUFDQyxnQkFBZ0JDLHVCQUF1QixFQUFFQyxZQUFZLEVBQUUsQ0FBQyxHQUFHQyxJQUFBQSxpQ0FBaUIsRUFBQztRQUNsRkMsSUFBSXJCLE9BQU9zQjtRQUNYQyxnQkFBZ0J4QjtJQUNsQjtJQUVBeUIsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUksT0FBT3BCLG9CQUFvQixZQUFZQSxnQkFBZ0JlO0lBQzdELEdBQUc7UUFBQ0E7UUFBY2Y7S0FBZ0I7SUFFbEMscUJBQ0UsNkJBQUNxQjtRQUFJQyxXQUFXL0I7cUJBQ2QsNkJBQUM4QjtRQUFJQyxXQUFXLENBQUMsRUFBRS9CLFVBQVUsU0FBUyxDQUFDO3FCQUNyQyw2QkFBQ2dDLHVCQUFVLENBQUNqQyxlQUFlO1FBQ3hCLEdBQUdFLEtBQUs7UUFDVGdDLFlBQVk7WUFDVkYsV0FBVyxDQUFDLEVBQUUvQixVQUFVLE1BQU0sQ0FBQztZQUMvQixHQUFJUSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFCO1NBR0hKLGNBQWNhLG1DQUNiLDZCQUFDaUIsZUFBUSxzQkFDUCw2QkFBQ1g7UUFDQ1ksY0FBWSxDQUFDLEtBQUssRUFBRWhDLE1BQU0sQ0FBQztRQUMzQjRCLFdBQVcsQ0FBQyxFQUFFL0IsVUFBVSxnQkFBZ0IsQ0FBQztRQUN6Q29DLFNBQVMsSUFBTXZCLGVBQWU7UUFDOUJ3QixhQUFhLENBQUNDLElBQU1BLEVBQUVDLGVBQWU7UUFDckNDLGNBQWMsSUFBTTNCLGVBQWU7UUFDbkM0QixjQUFjLElBQU01QixlQUFlO1FBQ25DNkIsWUFBWSxDQUFDSixJQUFNQSxFQUFFQyxlQUFlO3FCQUVwQyw2QkFBQ0ksZ0JBQU87UUFBQ1osV0FBVyxDQUFDLEVBQUUvQixVQUFVLFNBQVMsQ0FBQztRQUFFNEMsTUFBTWhDO09BQ2hERyxFQUFFLGFBQWE7UUFBRVosT0FBTztJQUFHLG1CQUU5Qiw2QkFBQzBDLGFBQUksd0JBRVAsNkJBQUN2QjtRQUFld0IsUUFBcUI7O0FBSy9DIn0=