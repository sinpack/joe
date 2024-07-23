"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ToolbarControls", {
    enumerable: true,
    get: function() {
        return ToolbarControls;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _ = require("../../../..");
const _PopupButtonList = /*#__PURE__*/ _interop_require_wildcard(require("../../../../elements/Popup/PopupButtonList"));
const _ExternalLink = require("../../../../graphics/ExternalLink");
const _context = require("../../Context/context");
const _SizeInput = require("../SizeInput");
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
const baseClass = 'live-preview-toolbar-controls';
const zoomOptions = [
    50,
    75,
    100,
    125,
    150,
    200
];
const customOption = {
    label: 'Custom',
    value: 'custom'
};
const ToolbarControls = ()=>{
    const { breakpoint, breakpoints, setBreakpoint, setPreviewWindowType, setZoom, url, zoom } = (0, _context.useLivePreviewContext)();
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, breakpoints?.length > 0 && /*#__PURE__*/ _react.default.createElement(_.Popup, {
        className: `${baseClass}__breakpoint`,
        button: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("span", null, breakpoints.find((bp)=>bp.name == breakpoint)?.label ?? customOption.label), " ", /*#__PURE__*/ _react.default.createElement(_.Chevron, {
            className: `${baseClass}__chevron`
        })),
        render: ({ close })=>/*#__PURE__*/ _react.default.createElement(_PopupButtonList.ButtonGroup, null, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, breakpoints.map((bp)=>/*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                    key: bp.name,
                    active: bp.name == breakpoint,
                    onClick: ()=>{
                        setBreakpoint(bp.name);
                        close();
                    }
                }, bp.label)), breakpoint === 'custom' && /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                active: breakpoint == customOption.value,
                onClick: ()=>{
                    setBreakpoint(customOption.value);
                    close();
                }
            }, customOption.label))),
        showScrollbar: true,
        verticalAlign: "bottom",
        horizontalAlign: "right"
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__device-size`
    }, /*#__PURE__*/ _react.default.createElement(_SizeInput.PreviewFrameSizeInput, {
        axis: "x"
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__size-divider`
    }, /*#__PURE__*/ _react.default.createElement(_.X, null)), /*#__PURE__*/ _react.default.createElement(_SizeInput.PreviewFrameSizeInput, {
        axis: "y"
    })), /*#__PURE__*/ _react.default.createElement(_.Popup, {
        className: `${baseClass}__zoom`,
        button: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("span", null, zoom * 100, "%"), " ", /*#__PURE__*/ _react.default.createElement(_.Chevron, {
            className: `${baseClass}__chevron`
        })),
        render: ({ close })=>/*#__PURE__*/ _react.default.createElement(_PopupButtonList.ButtonGroup, null, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, zoomOptions.map((zoomValue)=>/*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                    key: zoomValue,
                    active: zoom * 100 == zoomValue,
                    onClick: ()=>{
                        setZoom(zoomValue / 100);
                        close();
                    }
                }, zoomValue, "%")))),
        showScrollbar: true,
        verticalAlign: "bottom",
        horizontalAlign: "right"
    }), /*#__PURE__*/ _react.default.createElement("a", {
        className: `${baseClass}__external`,
        href: url,
        onClick: (e)=>{
            e.preventDefault();
            setPreviewWindowType('popup');
        },
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement(_ExternalLink.ExternalLinkIcon, null)));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L1Rvb2xiYXIvQ29udHJvbHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBFZGl0Vmlld1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IENoZXZyb24sIFBvcHVwLCBYIH0gZnJvbSAnLi4vLi4vLi4vLi4nXG5pbXBvcnQgKiBhcyBQb3B1cExpc3QgZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvUG9wdXAvUG9wdXBCdXR0b25MaXN0J1xuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBoaWNzL0V4dGVybmFsTGluaydcbmltcG9ydCB7IHVzZUxpdmVQcmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL0NvbnRleHQvY29udGV4dCdcbmltcG9ydCB7IFByZXZpZXdGcmFtZVNpemVJbnB1dCB9IGZyb20gJy4uL1NpemVJbnB1dCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbGl2ZS1wcmV2aWV3LXRvb2xiYXItY29udHJvbHMnXG5jb25zdCB6b29tT3B0aW9ucyA9IFs1MCwgNzUsIDEwMCwgMTI1LCAxNTAsIDIwMF1cbmNvbnN0IGN1c3RvbU9wdGlvbiA9IHtcbiAgbGFiZWw6ICdDdXN0b20nLCAvLyBUT0RPOiBBZGQgaTE4biB0byB0aGlzIHN0cmluZ1xuICB2YWx1ZTogJ2N1c3RvbScsXG59XG5cbmV4cG9ydCBjb25zdCBUb29sYmFyQ29udHJvbHM6IFJlYWN0LkZDPEVkaXRWaWV3UHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCB7IGJyZWFrcG9pbnQsIGJyZWFrcG9pbnRzLCBzZXRCcmVha3BvaW50LCBzZXRQcmV2aWV3V2luZG93VHlwZSwgc2V0Wm9vbSwgdXJsLCB6b29tIH0gPVxuICAgIHVzZUxpdmVQcmV2aWV3Q29udGV4dCgpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIHticmVha3BvaW50cz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxQb3B1cFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnJlYWtwb2ludGB9XG4gICAgICAgICAgYnV0dG9uPXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHticmVha3BvaW50cy5maW5kKChicCkgPT4gYnAubmFtZSA9PSBicmVha3BvaW50KT8ubGFiZWwgPz8gY3VzdG9tT3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICA8Q2hldnJvbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NoZXZyb25gfSAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbmRlcj17KHsgY2xvc2UgfSkgPT4gKFxuICAgICAgICAgICAgPFBvcHVwTGlzdC5CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHticmVha3BvaW50cy5tYXAoKGJwKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UG9wdXBMaXN0LkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2JwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YnAubmFtZSA9PSBicmVha3BvaW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0QnJlYWtwb2ludChicC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2JwLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9Qb3B1cExpc3QuQnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHsvKiBEeW5hbWljYWxseSBhZGQgdGhpcyBvcHRpb24gc28gdGhhdCBpdCBvbmx5IGFwcGVhcnMgd2hlbiB0aGUgd2lkdGggYW5kIGhlaWdodCBpbnB1dHMgYXJlIGV4cGxpY2l0bHkgY2hhbmdlZCAqL31cbiAgICAgICAgICAgICAgICB7YnJlYWtwb2ludCA9PT0gJ2N1c3RvbScgJiYgKFxuICAgICAgICAgICAgICAgICAgPFBvcHVwTGlzdC5CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXticmVha3BvaW50ID09IGN1c3RvbU9wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEJyZWFrcG9pbnQoY3VzdG9tT3B0aW9uLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2N1c3RvbU9wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvUG9wdXBMaXN0LkJ1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPC9Qb3B1cExpc3QuQnV0dG9uR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBzaG93U2Nyb2xsYmFyXG4gICAgICAgICAgdmVydGljYWxBbGlnbj1cImJvdHRvbVwiXG4gICAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwicmlnaHRcIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kZXZpY2Utc2l6ZWB9PlxuICAgICAgICA8UHJldmlld0ZyYW1lU2l6ZUlucHV0IGF4aXM9XCJ4XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zaXplLWRpdmlkZXJgfT5cbiAgICAgICAgICA8WCAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxQcmV2aWV3RnJhbWVTaXplSW5wdXQgYXhpcz1cInlcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UG9wdXBcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X196b29tYH1cbiAgICAgICAgYnV0dG9uPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4+e3pvb20gKiAxMDB9JTwvc3Bhbj5cbiAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPENoZXZyb24gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jaGV2cm9uYH0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICByZW5kZXI9eyh7IGNsb3NlIH0pID0+IChcbiAgICAgICAgICA8UG9wdXBMaXN0LkJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7em9vbU9wdGlvbnMubWFwKCh6b29tVmFsdWUpID0+IChcbiAgICAgICAgICAgICAgICA8UG9wdXBMaXN0LkJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXt6b29tVmFsdWV9XG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e3pvb20gKiAxMDAgPT0gem9vbVZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRab29tKHpvb21WYWx1ZSAvIDEwMClcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7em9vbVZhbHVlfSVcbiAgICAgICAgICAgICAgICA8L1BvcHVwTGlzdC5CdXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8L1BvcHVwTGlzdC5CdXR0b25Hcm91cD5cbiAgICAgICAgKX1cbiAgICAgICAgc2hvd1Njcm9sbGJhclxuICAgICAgICB2ZXJ0aWNhbEFsaWduPVwiYm90dG9tXCJcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwicmlnaHRcIlxuICAgICAgLz5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZXh0ZXJuYWxgfVxuICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgc2V0UHJldmlld1dpbmRvd1R5cGUoJ3BvcHVwJylcbiAgICAgICAgfX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxFeHRlcm5hbExpbmtJY29uIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUb29sYmFyQ29udHJvbHMiLCJiYXNlQ2xhc3MiLCJ6b29tT3B0aW9ucyIsImN1c3RvbU9wdGlvbiIsImxhYmVsIiwidmFsdWUiLCJicmVha3BvaW50IiwiYnJlYWtwb2ludHMiLCJzZXRCcmVha3BvaW50Iiwic2V0UHJldmlld1dpbmRvd1R5cGUiLCJzZXRab29tIiwidXJsIiwiem9vbSIsInVzZUxpdmVQcmV2aWV3Q29udGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsIlBvcHVwIiwiYnV0dG9uIiwic3BhbiIsImZpbmQiLCJicCIsIm5hbWUiLCJDaGV2cm9uIiwicmVuZGVyIiwiY2xvc2UiLCJQb3B1cExpc3QiLCJCdXR0b25Hcm91cCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJtYXAiLCJCdXR0b24iLCJrZXkiLCJhY3RpdmUiLCJvbkNsaWNrIiwic2hvd1Njcm9sbGJhciIsInZlcnRpY2FsQWxpZ24iLCJob3Jpem9udGFsQWxpZ24iLCJQcmV2aWV3RnJhbWVTaXplSW5wdXQiLCJheGlzIiwiWCIsInpvb21WYWx1ZSIsImEiLCJocmVmIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIkV4dGVybmFsTGlua0ljb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWtCYUE7OztlQUFBQTs7OzhEQWxCSztrQkFJZ0I7eUVBQ1A7OEJBQ007eUJBQ0s7MkJBQ0E7UUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUNsQixNQUFNQyxjQUFjO0lBQUM7SUFBSTtJQUFJO0lBQUs7SUFBSztJQUFLO0NBQUk7QUFDaEQsTUFBTUMsZUFBZTtJQUNuQkMsT0FBTztJQUNQQyxPQUFPO0FBQ1Q7QUFFTyxNQUFNTCxrQkFBMkM7SUFDdEQsTUFBTSxFQUFFTSxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxvQkFBb0IsRUFBRUMsT0FBTyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRSxHQUN4RkMsSUFBQUEsOEJBQXFCO0lBRXZCLHFCQUNFLDZCQUFDQztRQUFJQyxXQUFXZDtPQUNiTSxhQUFhUyxTQUFTLG1CQUNyQiw2QkFBQ0MsT0FBSztRQUNKRixXQUFXLENBQUMsRUFBRWQsVUFBVSxZQUFZLENBQUM7UUFDckNpQixzQkFDRSwwRUFDRSw2QkFBQ0MsY0FDRVosWUFBWWEsSUFBSSxDQUFDLENBQUNDLEtBQU9BLEdBQUdDLElBQUksSUFBSWhCLGFBQWFGLFNBQVNELGFBQWFDLEtBQUssR0FDeEUsbUJBRVAsNkJBQUNtQixTQUFPO1lBQUNSLFdBQVcsQ0FBQyxFQUFFZCxVQUFVLFNBQVMsQ0FBQzs7UUFHL0N1QixRQUFRLENBQUMsRUFBRUMsS0FBSyxFQUFFLGlCQUNoQiw2QkFBQ0MsaUJBQVVDLFdBQVcsc0JBQ3BCLDZCQUFDQyxjQUFLLENBQUNDLFFBQVEsUUFDWnRCLFlBQVl1QixHQUFHLENBQUMsQ0FBQ1QsbUJBQ2hCLDZCQUFDSyxpQkFBVUssTUFBTTtvQkFDZkMsS0FBS1gsR0FBR0MsSUFBSTtvQkFDWlcsUUFBUVosR0FBR0MsSUFBSSxJQUFJaEI7b0JBQ25CNEIsU0FBUzt3QkFDUDFCLGNBQWNhLEdBQUdDLElBQUk7d0JBQ3JCRztvQkFDRjttQkFFQ0osR0FBR2pCLEtBQUssSUFJWkUsZUFBZSwwQkFDZCw2QkFBQ29CLGlCQUFVSyxNQUFNO2dCQUNmRSxRQUFRM0IsY0FBY0gsYUFBYUUsS0FBSztnQkFDeEM2QixTQUFTO29CQUNQMUIsY0FBY0wsYUFBYUUsS0FBSztvQkFDaENvQjtnQkFDRjtlQUVDdEIsYUFBYUMsS0FBSztRQU03QitCLGVBQUFBO1FBQ0FDLGVBQWM7UUFDZEMsaUJBQWdCO3NCQUdwQiw2QkFBQ3ZCO1FBQUlDLFdBQVcsQ0FBQyxFQUFFZCxVQUFVLGFBQWEsQ0FBQztxQkFDekMsNkJBQUNxQyxnQ0FBcUI7UUFBQ0MsTUFBSztzQkFDNUIsNkJBQUNwQjtRQUFLSixXQUFXLENBQUMsRUFBRWQsVUFBVSxjQUFjLENBQUM7cUJBQzNDLDZCQUFDdUMsR0FBQyx3QkFFSiw2QkFBQ0YsZ0NBQXFCO1FBQUNDLE1BQUs7dUJBRTlCLDZCQUFDdEIsT0FBSztRQUNKRixXQUFXLENBQUMsRUFBRWQsVUFBVSxNQUFNLENBQUM7UUFDL0JpQixzQkFDRSwwRUFDRSw2QkFBQ0MsY0FBTVAsT0FBTyxLQUFJLE1BQVEsbUJBRTFCLDZCQUFDVyxTQUFPO1lBQUNSLFdBQVcsQ0FBQyxFQUFFZCxVQUFVLFNBQVMsQ0FBQzs7UUFHL0N1QixRQUFRLENBQUMsRUFBRUMsS0FBSyxFQUFFLGlCQUNoQiw2QkFBQ0MsaUJBQVVDLFdBQVcsc0JBQ3BCLDZCQUFDQyxjQUFLLENBQUNDLFFBQVEsUUFDWjNCLFlBQVk0QixHQUFHLENBQUMsQ0FBQ1csMEJBQ2hCLDZCQUFDZixpQkFBVUssTUFBTTtvQkFDZkMsS0FBS1M7b0JBQ0xSLFFBQVFyQixPQUFPLE9BQU82QjtvQkFDdEJQLFNBQVM7d0JBQ1B4QixRQUFRK0IsWUFBWTt3QkFDcEJoQjtvQkFDRjttQkFFQ2dCLFdBQVU7UUFNckJOLGVBQUFBO1FBQ0FDLGVBQWM7UUFDZEMsaUJBQWdCO3NCQUVsQiw2QkFBQ0s7UUFDQzNCLFdBQVcsQ0FBQyxFQUFFZCxVQUFVLFVBQVUsQ0FBQztRQUNuQzBDLE1BQU1oQztRQUNOdUIsU0FBUyxDQUFDVTtZQUNSQSxFQUFFQyxjQUFjO1lBQ2hCcEMscUJBQXFCO1FBQ3ZCO1FBQ0FxQyxNQUFLO3FCQUVMLDZCQUFDQyw4QkFBZ0I7QUFJekIifQ==