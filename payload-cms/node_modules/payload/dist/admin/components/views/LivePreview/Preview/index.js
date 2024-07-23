"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LivePreview", {
    enumerable: true,
    get: function() {
        return LivePreview;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _ShimmerEffect = require("../../../elements/ShimmerEffect");
const _context = require("../../../forms/Form/context");
const _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../../../forms/Form/reduceFieldsToValues"));
const _DocumentEvents = require("../../../utilities/DocumentEvents");
const _context1 = require("../Context/context");
const _Device = require("../Device");
const _IFrame = require("../IFrame");
const _Toolbar = require("../Toolbar");
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
const baseClass = 'live-preview-window';
const LivePreview = (props)=>{
    const { appIsReady, iframeHasLoaded, iframeRef, popupRef, previewWindowType, setIframeHasLoaded, url } = (0, _context1.useLivePreviewContext)();
    const { mostRecentUpdate } = (0, _DocumentEvents.useDocumentEvents)();
    const { breakpoint, fieldSchemaJSON } = (0, _context1.useLivePreviewContext)();
    const prevWindowType = _react.default.useRef();
    const [fields] = (0, _context.useAllFormFields)();
    // The preview could either be an iframe embedded on the page
    // Or it could be a separate popup window
    // We need to transmit data to both accordingly
    (0, _react.useEffect)(()=>{
        // For performance, do no reduce fields to values until after the iframe or popup has loaded
        if (fields && window && 'postMessage' in window && appIsReady) {
            const values = (0, _reduceFieldsToValues.default)(fields, true);
            // To reduce on large `postMessage` payloads, only send `fieldSchemaToJSON` one time
            // To do this, the underlying JS function maintains a cache of this value
            // So we need to send it through each time the window type changes
            // But only once per window type change, not on every render, because this is a potentially large obj
            const shouldSendSchema = !prevWindowType.current || prevWindowType.current !== previewWindowType;
            prevWindowType.current = previewWindowType;
            const message = {
                data: values,
                externallyUpdatedRelationship: mostRecentUpdate,
                fieldSchemaJSON: shouldSendSchema ? fieldSchemaJSON : undefined,
                type: 'payload-live-preview'
            };
            // Post message to external popup window
            if (previewWindowType === 'popup' && popupRef.current) {
                popupRef.current.postMessage(message, url);
            }
            // Post message to embedded iframe
            if (previewWindowType === 'iframe' && iframeRef.current) {
                iframeRef.current.contentWindow?.postMessage(message, url);
            }
        }
    }, [
        fields,
        url,
        iframeHasLoaded,
        previewWindowType,
        popupRef,
        appIsReady,
        iframeRef,
        setIframeHasLoaded,
        fieldSchemaJSON,
        mostRecentUpdate
    ]);
    if (previewWindowType === 'iframe') {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: [
                baseClass,
                breakpoint && breakpoint !== 'responsive' && `${baseClass}--has-breakpoint`
            ].filter(Boolean).join(' ')
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__wrapper`
        }, /*#__PURE__*/ _react.default.createElement(_Toolbar.LivePreviewToolbar, props), /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__main`
        }, /*#__PURE__*/ _react.default.createElement(_Device.DeviceContainer, null, url ? /*#__PURE__*/ _react.default.createElement(_IFrame.IFrame, {
            ref: iframeRef,
            setIframeHasLoaded: setIframeHasLoaded,
            url: url
        }) : /*#__PURE__*/ _react.default.createElement(_ShimmerEffect.ShimmerEffect, {
            height: "100%"
        })))));
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L1ByZXZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBFZGl0Vmlld1Byb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IFNoaW1tZXJFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9TaGltbWVyRWZmZWN0J1xuaW1wb3J0IHsgdXNlQWxsRm9ybUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCdcbmltcG9ydCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyBmcm9tICcuLi8uLi8uLi9mb3Jtcy9Gb3JtL3JlZHVjZUZpZWxkc1RvVmFsdWVzJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRFdmVudHMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRFdmVudHMnXG5pbXBvcnQgeyB1c2VMaXZlUHJldmlld0NvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0L2NvbnRleHQnXG5pbXBvcnQgeyBEZXZpY2VDb250YWluZXIgfSBmcm9tICcuLi9EZXZpY2UnXG5pbXBvcnQgeyBJRnJhbWUgfSBmcm9tICcuLi9JRnJhbWUnXG5pbXBvcnQgeyBMaXZlUHJldmlld1Rvb2xiYXIgfSBmcm9tICcuLi9Ub29sYmFyJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsaXZlLXByZXZpZXctd2luZG93J1xuXG5leHBvcnQgY29uc3QgTGl2ZVByZXZpZXc6IFJlYWN0LkZDPEVkaXRWaWV3UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhcHBJc1JlYWR5LFxuICAgIGlmcmFtZUhhc0xvYWRlZCxcbiAgICBpZnJhbWVSZWYsXG4gICAgcG9wdXBSZWYsXG4gICAgcHJldmlld1dpbmRvd1R5cGUsXG4gICAgc2V0SWZyYW1lSGFzTG9hZGVkLFxuICAgIHVybCxcbiAgfSA9IHVzZUxpdmVQcmV2aWV3Q29udGV4dCgpXG5cbiAgY29uc3QgeyBtb3N0UmVjZW50VXBkYXRlIH0gPSB1c2VEb2N1bWVudEV2ZW50cygpXG5cbiAgY29uc3QgeyBicmVha3BvaW50LCBmaWVsZFNjaGVtYUpTT04gfSA9IHVzZUxpdmVQcmV2aWV3Q29udGV4dCgpXG5cbiAgY29uc3QgcHJldldpbmRvd1R5cGUgPVxuICAgIFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiB1c2VMaXZlUHJldmlld0NvbnRleHQ+WydwcmV2aWV3V2luZG93VHlwZSddPigpXG5cbiAgY29uc3QgW2ZpZWxkc10gPSB1c2VBbGxGb3JtRmllbGRzKClcblxuICAvLyBUaGUgcHJldmlldyBjb3VsZCBlaXRoZXIgYmUgYW4gaWZyYW1lIGVtYmVkZGVkIG9uIHRoZSBwYWdlXG4gIC8vIE9yIGl0IGNvdWxkIGJlIGEgc2VwYXJhdGUgcG9wdXAgd2luZG93XG4gIC8vIFdlIG5lZWQgdG8gdHJhbnNtaXQgZGF0YSB0byBib3RoIGFjY29yZGluZ2x5XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRm9yIHBlcmZvcm1hbmNlLCBkbyBubyByZWR1Y2UgZmllbGRzIHRvIHZhbHVlcyB1bnRpbCBhZnRlciB0aGUgaWZyYW1lIG9yIHBvcHVwIGhhcyBsb2FkZWRcbiAgICBpZiAoZmllbGRzICYmIHdpbmRvdyAmJiAncG9zdE1lc3NhZ2UnIGluIHdpbmRvdyAmJiBhcHBJc1JlYWR5KSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSByZWR1Y2VGaWVsZHNUb1ZhbHVlcyhmaWVsZHMsIHRydWUpXG5cbiAgICAgIC8vIFRvIHJlZHVjZSBvbiBsYXJnZSBgcG9zdE1lc3NhZ2VgIHBheWxvYWRzLCBvbmx5IHNlbmQgYGZpZWxkU2NoZW1hVG9KU09OYCBvbmUgdGltZVxuICAgICAgLy8gVG8gZG8gdGhpcywgdGhlIHVuZGVybHlpbmcgSlMgZnVuY3Rpb24gbWFpbnRhaW5zIGEgY2FjaGUgb2YgdGhpcyB2YWx1ZVxuICAgICAgLy8gU28gd2UgbmVlZCB0byBzZW5kIGl0IHRocm91Z2ggZWFjaCB0aW1lIHRoZSB3aW5kb3cgdHlwZSBjaGFuZ2VzXG4gICAgICAvLyBCdXQgb25seSBvbmNlIHBlciB3aW5kb3cgdHlwZSBjaGFuZ2UsIG5vdCBvbiBldmVyeSByZW5kZXIsIGJlY2F1c2UgdGhpcyBpcyBhIHBvdGVudGlhbGx5IGxhcmdlIG9ialxuICAgICAgY29uc3Qgc2hvdWxkU2VuZFNjaGVtYSA9XG4gICAgICAgICFwcmV2V2luZG93VHlwZS5jdXJyZW50IHx8IHByZXZXaW5kb3dUeXBlLmN1cnJlbnQgIT09IHByZXZpZXdXaW5kb3dUeXBlXG5cbiAgICAgIHByZXZXaW5kb3dUeXBlLmN1cnJlbnQgPSBwcmV2aWV3V2luZG93VHlwZVxuXG4gICAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgIGV4dGVybmFsbHlVcGRhdGVkUmVsYXRpb25zaGlwOiBtb3N0UmVjZW50VXBkYXRlLFxuICAgICAgICBmaWVsZFNjaGVtYUpTT046IHNob3VsZFNlbmRTY2hlbWEgPyBmaWVsZFNjaGVtYUpTT04gOiB1bmRlZmluZWQsXG4gICAgICAgIHR5cGU6ICdwYXlsb2FkLWxpdmUtcHJldmlldycsXG4gICAgICB9XG5cbiAgICAgIC8vIFBvc3QgbWVzc2FnZSB0byBleHRlcm5hbCBwb3B1cCB3aW5kb3dcbiAgICAgIGlmIChwcmV2aWV3V2luZG93VHlwZSA9PT0gJ3BvcHVwJyAmJiBwb3B1cFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHBvcHVwUmVmLmN1cnJlbnQucG9zdE1lc3NhZ2UobWVzc2FnZSwgdXJsKVxuICAgICAgfVxuXG4gICAgICAvLyBQb3N0IG1lc3NhZ2UgdG8gZW1iZWRkZWQgaWZyYW1lXG4gICAgICBpZiAocHJldmlld1dpbmRvd1R5cGUgPT09ICdpZnJhbWUnICYmIGlmcmFtZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIGlmcmFtZVJlZi5jdXJyZW50LmNvbnRlbnRXaW5kb3c/LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHVybClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtcbiAgICBmaWVsZHMsXG4gICAgdXJsLFxuICAgIGlmcmFtZUhhc0xvYWRlZCxcbiAgICBwcmV2aWV3V2luZG93VHlwZSxcbiAgICBwb3B1cFJlZixcbiAgICBhcHBJc1JlYWR5LFxuICAgIGlmcmFtZVJlZixcbiAgICBzZXRJZnJhbWVIYXNMb2FkZWQsXG4gICAgZmllbGRTY2hlbWFKU09OLFxuICAgIG1vc3RSZWNlbnRVcGRhdGUsXG4gIF0pXG5cbiAgaWYgKHByZXZpZXdXaW5kb3dUeXBlID09PSAnaWZyYW1lJykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgICBicmVha3BvaW50ICYmIGJyZWFrcG9pbnQgIT09ICdyZXNwb25zaXZlJyAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtYnJlYWtwb2ludGAsXG4gICAgICAgIF1cbiAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBwZXJgfT5cbiAgICAgICAgICA8TGl2ZVByZXZpZXdUb29sYmFyIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbWFpbmB9PlxuICAgICAgICAgICAgPERldmljZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAge3VybCA/IChcbiAgICAgICAgICAgICAgICA8SUZyYW1lIHJlZj17aWZyYW1lUmVmfSBzZXRJZnJhbWVIYXNMb2FkZWQ9e3NldElmcmFtZUhhc0xvYWRlZH0gdXJsPXt1cmx9IC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFNoaW1tZXJFZmZlY3QgaGVpZ2h0PVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0RldmljZUNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaXZlUHJldmlldyIsImJhc2VDbGFzcyIsInByb3BzIiwiYXBwSXNSZWFkeSIsImlmcmFtZUhhc0xvYWRlZCIsImlmcmFtZVJlZiIsInBvcHVwUmVmIiwicHJldmlld1dpbmRvd1R5cGUiLCJzZXRJZnJhbWVIYXNMb2FkZWQiLCJ1cmwiLCJ1c2VMaXZlUHJldmlld0NvbnRleHQiLCJtb3N0UmVjZW50VXBkYXRlIiwidXNlRG9jdW1lbnRFdmVudHMiLCJicmVha3BvaW50IiwiZmllbGRTY2hlbWFKU09OIiwicHJldldpbmRvd1R5cGUiLCJSZWFjdCIsInVzZVJlZiIsImZpZWxkcyIsInVzZUFsbEZvcm1GaWVsZHMiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJ2YWx1ZXMiLCJyZWR1Y2VGaWVsZHNUb1ZhbHVlcyIsInNob3VsZFNlbmRTY2hlbWEiLCJjdXJyZW50IiwibWVzc2FnZSIsImRhdGEiLCJleHRlcm5hbGx5VXBkYXRlZFJlbGF0aW9uc2hpcCIsInVuZGVmaW5lZCIsInR5cGUiLCJwb3N0TWVzc2FnZSIsImNvbnRlbnRXaW5kb3ciLCJkaXYiLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkxpdmVQcmV2aWV3VG9vbGJhciIsIkRldmljZUNvbnRhaW5lciIsIklGcmFtZSIsInJlZiIsIlNoaW1tZXJFZmZlY3QiLCJoZWlnaHQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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