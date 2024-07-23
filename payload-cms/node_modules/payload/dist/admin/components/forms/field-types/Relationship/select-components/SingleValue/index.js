"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SingleValue", {
    enumerable: true,
    get: function() {
        return SingleValue;
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
const baseClass = 'relationship--single-value';
const SingleValue = (props)=>{
    const { children, data: { label, relationTo, value }, // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    selectProps: { customProps: { onSave, setDrawerIsOpen } = {} } = {} } = props;
    const [showTooltip, setShowTooltip] = (0, _react.useState)(false);
    const { t } = (0, _reacti18next.useTranslation)('general');
    const { permissions } = (0, _Auth.useAuth)();
    const hasReadPermission = Boolean(permissions?.collections?.[relationTo]?.read?.permission);
    const [DocumentDrawer, DocumentDrawerToggler, { isDrawerOpen }] = (0, _DocumentDrawer.useDocumentDrawer)({
        id: value.toString(),
        collectionSlug: relationTo
    });
    (0, _react.useEffect)(()=>{
        if (typeof setDrawerIsOpen === 'function') {
            setDrawerIsOpen(isDrawerOpen);
        }
    }, [
        isDrawerOpen,
        setDrawerIsOpen
    ]);
    return /*#__PURE__*/ _react.default.createElement(_reactselect.components.SingleValue, {
        ...props,
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__label`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__label-text`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__text`
    }, children), relationTo && hasReadPermission && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
        "aria-label": t('editLabel', {
            label
        }),
        className: `${baseClass}__drawer-toggler`,
        onClick: ()=>setShowTooltip(false),
        onMouseDown: (e)=>e.stopPropagation(),
        onMouseEnter: ()=>setShowTooltip(true),
        onMouseLeave: ()=>setShowTooltip(false),
        onTouchEnd: (e)=>e.stopPropagation()
    }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        className: `${baseClass}__tooltip`,
        show: showTooltip
    }, t('edit')), /*#__PURE__*/ _react.default.createElement(_Edit.default, null))))), relationTo && hasReadPermission && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
        onSave: onSave
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9zZWxlY3QtY29tcG9uZW50cy9TaW5nbGVWYWx1ZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTaW5nbGVWYWx1ZVByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0J1xuXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IGNvbXBvbmVudHMgYXMgU2VsZWN0Q29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcblxuaW1wb3J0IHR5cGUgeyBPcHRpb24gfSBmcm9tICcuLi8uLi90eXBlcydcblxuaW1wb3J0IHsgdXNlRG9jdW1lbnREcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9Eb2N1bWVudERyYXdlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL1Rvb2x0aXAnXG5pbXBvcnQgRWRpdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9FZGl0J1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9BdXRoJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZWxhdGlvbnNoaXAtLXNpbmdsZS12YWx1ZSdcblxuZXhwb3J0IGNvbnN0IFNpbmdsZVZhbHVlOiBSZWFjdC5GQzxTaW5nbGVWYWx1ZVByb3BzPE9wdGlvbj4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBkYXRhOiB7IGxhYmVsLCByZWxhdGlvblRvLCB2YWx1ZSB9LFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLy8gVE9ETyBGaXggdGhpcyAtIG1vZHVsZVJlc29sdXRpb24gMTYgYnJlYWtzIG91ciBkZWNsYXJlIG1vZHVsZVxuICAgIHNlbGVjdFByb3BzOiB7IGN1c3RvbVByb3BzOiB7IG9uU2F2ZSwgc2V0RHJhd2VySXNPcGVuIH0gPSB7fSB9ID0ge30sXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtzaG93VG9vbHRpcCwgc2V0U2hvd1Rvb2x0aXBdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgaGFzUmVhZFBlcm1pc3Npb24gPSBCb29sZWFuKHBlcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW3JlbGF0aW9uVG9dPy5yZWFkPy5wZXJtaXNzaW9uKVxuXG4gIGNvbnN0IFtEb2N1bWVudERyYXdlciwgRG9jdW1lbnREcmF3ZXJUb2dnbGVyLCB7IGlzRHJhd2VyT3BlbiB9XSA9IHVzZURvY3VtZW50RHJhd2VyKHtcbiAgICBpZDogdmFsdWUudG9TdHJpbmcoKSxcbiAgICBjb2xsZWN0aW9uU2x1ZzogcmVsYXRpb25UbyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2V0RHJhd2VySXNPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXREcmF3ZXJJc09wZW4oaXNEcmF3ZXJPcGVuKVxuICAgIH1cbiAgfSwgW2lzRHJhd2VyT3Blbiwgc2V0RHJhd2VySXNPcGVuXSlcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RDb21wb25lbnRzLlNpbmdsZVZhbHVlIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbC10ZXh0YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RleHRgfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAge3JlbGF0aW9uVG8gJiYgaGFzUmVhZFBlcm1pc3Npb24gJiYgKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8RG9jdW1lbnREcmF3ZXJUb2dnbGVyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnZWRpdExhYmVsJywgeyBsYWJlbCB9KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RyYXdlci10b2dnbGVyYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VG9vbHRpcChmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfSAvLyBwcmV2ZW50cyByZWFjdC1zZWxlY3QgZHJvcGRvd24gZnJvbSBvcGVuaW5nXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaG93VG9vbHRpcCh0cnVlKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dUb29sdGlwKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0gLy8gcHJldmVudHMgcmVhY3Qtc2VsZWN0IGRyb3Bkb3duIGZyb20gb3BlbmluZ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b29sdGlwYH0gc2hvdz17c2hvd1Rvb2x0aXB9PlxuICAgICAgICAgICAgICAgICAge3QoJ2VkaXQnKX1cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgPEVkaXQgLz5cbiAgICAgICAgICAgICAgPC9Eb2N1bWVudERyYXdlclRvZ2dsZXI+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7cmVsYXRpb25UbyAmJiBoYXNSZWFkUGVybWlzc2lvbiAmJiA8RG9jdW1lbnREcmF3ZXIgb25TYXZlPXtvblNhdmV9IC8+fVxuICAgIDwvU2VsZWN0Q29tcG9uZW50cy5TaW5nbGVWYWx1ZT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlNpbmdsZVZhbHVlIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJjaGlsZHJlbiIsImRhdGEiLCJsYWJlbCIsInJlbGF0aW9uVG8iLCJ2YWx1ZSIsInNlbGVjdFByb3BzIiwiY3VzdG9tUHJvcHMiLCJvblNhdmUiLCJzZXREcmF3ZXJJc09wZW4iLCJzaG93VG9vbHRpcCIsInNldFNob3dUb29sdGlwIiwidXNlU3RhdGUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJwZXJtaXNzaW9ucyIsInVzZUF1dGgiLCJoYXNSZWFkUGVybWlzc2lvbiIsIkJvb2xlYW4iLCJjb2xsZWN0aW9ucyIsInJlYWQiLCJwZXJtaXNzaW9uIiwiRG9jdW1lbnREcmF3ZXIiLCJEb2N1bWVudERyYXdlclRvZ2dsZXIiLCJpc0RyYXdlck9wZW4iLCJ1c2VEb2N1bWVudERyYXdlciIsImlkIiwidG9TdHJpbmciLCJjb2xsZWN0aW9uU2x1ZyIsInVzZUVmZmVjdCIsIlNlbGVjdENvbXBvbmVudHMiLCJjbGFzc05hbWUiLCJkaXYiLCJGcmFnbWVudCIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwib25Nb3VzZURvd24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Ub3VjaEVuZCIsIlRvb2x0aXAiLCJzaG93IiwiRWRpdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWdCYUE7OztlQUFBQTs7OytEQWR3Qzs4QkFDdEI7NkJBQ2dCO2dDQUliO2dFQUNkOzZEQUNIO3NCQUNPO1FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxjQUFrRCxDQUFDRTtJQUM5RCxNQUFNLEVBQ0pDLFFBQVEsRUFDUkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFLEVBQ2xDLG9GQUFvRjtJQUNwRkMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDcEUsR0FBR1Q7SUFFSixNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR0MsSUFBQUEsZUFBUSxFQUFDO0lBQy9DLE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFDN0IsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0MsSUFBQUEsYUFBTztJQUMvQixNQUFNQyxvQkFBb0JDLFFBQVFILGFBQWFJLGFBQWEsQ0FBQ2YsV0FBVyxFQUFFZ0IsTUFBTUM7SUFFaEYsTUFBTSxDQUFDQyxnQkFBZ0JDLHVCQUF1QixFQUFFQyxZQUFZLEVBQUUsQ0FBQyxHQUFHQyxJQUFBQSxpQ0FBaUIsRUFBQztRQUNsRkMsSUFBSXJCLE1BQU1zQixRQUFRO1FBQ2xCQyxnQkFBZ0J4QjtJQUNsQjtJQUVBeUIsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUksT0FBT3BCLG9CQUFvQixZQUFZO1lBQ3pDQSxnQkFBZ0JlO1FBQ2xCO0lBQ0YsR0FBRztRQUFDQTtRQUFjZjtLQUFnQjtJQUVsQyxxQkFDRSw2QkFBQ3FCLHVCQUFnQixDQUFDaEMsV0FBVztRQUFFLEdBQUdFLEtBQUs7UUFBRStCLFdBQVdoQztxQkFDbEQsNkJBQUNpQztRQUFJRCxXQUFXLENBQUMsRUFBRWhDLFVBQVUsT0FBTyxDQUFDO3FCQUNuQyw2QkFBQ2lDO1FBQUlELFdBQVcsQ0FBQyxFQUFFaEMsVUFBVSxZQUFZLENBQUM7cUJBQ3hDLDZCQUFDaUM7UUFBSUQsV0FBVyxDQUFDLEVBQUVoQyxVQUFVLE1BQU0sQ0FBQztPQUFHRSxXQUN0Q0csY0FBY2EsbUNBQ2IsNkJBQUNnQixlQUFRLHNCQUNQLDZCQUFDVjtRQUNDVyxjQUFZckIsRUFBRSxhQUFhO1lBQUVWO1FBQU07UUFDbkM0QixXQUFXLENBQUMsRUFBRWhDLFVBQVUsZ0JBQWdCLENBQUM7UUFDekNvQyxTQUFTLElBQU14QixlQUFlO1FBQzlCeUIsYUFBYSxDQUFDQyxJQUFNQSxFQUFFQyxlQUFlO1FBQ3JDQyxjQUFjLElBQU01QixlQUFlO1FBQ25DNkIsY0FBYyxJQUFNN0IsZUFBZTtRQUNuQzhCLFlBQVksQ0FBQ0osSUFBTUEsRUFBRUMsZUFBZTtxQkFFcEMsNkJBQUNJLGdCQUFPO1FBQUNYLFdBQVcsQ0FBQyxFQUFFaEMsVUFBVSxTQUFTLENBQUM7UUFBRTRDLE1BQU1qQztPQUNoREcsRUFBRSx3QkFFTCw2QkFBQytCLGFBQUksYUFNZHhDLGNBQWNhLG1DQUFxQiw2QkFBQ0s7UUFBZWQsUUFBUUE7O0FBR2xFIn0=