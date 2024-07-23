"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreviewFrameSizeInput", {
    enumerable: true,
    get: function() {
        return PreviewFrameSizeInput;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _context = require("../../Context/context");
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
const baseClass = 'toolbar-input';
const PreviewFrameSizeInput = (props)=>{
    const { axis } = props;
    const { breakpoint, measuredDeviceSize, setBreakpoint, setSize, size, zoom } = (0, _context.useLivePreviewContext)();
    const [internalState, setInternalState] = _react.default.useState((axis === 'x' ? measuredDeviceSize?.width : measuredDeviceSize?.height) || 0);
    // when the input is changed manually, we need to set the breakpoint as `custom`
    // this will then allow us to set an explicit width and height
    const handleChange = (0, _react.useCallback)((e)=>{
        let newValue = Number(e.target.value);
        if (newValue < 0) newValue = 0;
        setInternalState(newValue);
        setBreakpoint('custom');
        // be sure to set _both_ axis values to so that the other axis doesn't fallback to 0 on initial change
        // this is because the `responsive` size is '100%' in CSS, and `0` in initial state
        setSize({
            type: 'reset',
            value: {
                height: axis === 'y' ? newValue : Number(measuredDeviceSize?.height.toFixed(0)) * zoom,
                width: axis === 'x' ? newValue : Number(measuredDeviceSize?.width.toFixed(0)) * zoom
            }
        });
    }, [
        axis,
        setBreakpoint,
        measuredDeviceSize,
        setSize,
        zoom
    ]);
    // if the breakpoint is `responsive` then the device's div will have `100%` width and height
    // so we need to take the measurements provided by `actualDeviceSize` and sync internal state
    (0, _react.useEffect)(()=>{
        if (breakpoint === 'responsive' && measuredDeviceSize) {
            if (axis === 'x') setInternalState(Number(measuredDeviceSize.width.toFixed(0)) * zoom);
            else setInternalState(Number(measuredDeviceSize.height.toFixed(0)) * zoom);
        }
        if (breakpoint !== 'responsive' && size) {
            setInternalState(axis === 'x' ? size.width : size.height);
        }
    }, [
        breakpoint,
        axis,
        measuredDeviceSize,
        size,
        zoom
    ]);
    return /*#__PURE__*/ _react.default.createElement("input", {
        className: baseClass,
        min: 0,
        name: axis === 'x' ? 'live-preview-width' : 'live-preview-height',
        onChange: handleChange,
        step: 1,
        type: "number",
        value: internalState || 0
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L1Rvb2xiYXIvU2l6ZUlucHV0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VMaXZlUHJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9Db250ZXh0L2NvbnRleHQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3Rvb2xiYXItaW5wdXQnXG5cbmV4cG9ydCBjb25zdCBQcmV2aWV3RnJhbWVTaXplSW5wdXQ6IFJlYWN0LkZDPHtcbiAgYXhpcz86ICd4JyB8ICd5J1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBheGlzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgYnJlYWtwb2ludCwgbWVhc3VyZWREZXZpY2VTaXplLCBzZXRCcmVha3BvaW50LCBzZXRTaXplLCBzaXplLCB6b29tIH0gPVxuICAgIHVzZUxpdmVQcmV2aWV3Q29udGV4dCgpXG5cbiAgY29uc3QgW2ludGVybmFsU3RhdGUsIHNldEludGVybmFsU3RhdGVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihcbiAgICAoYXhpcyA9PT0gJ3gnID8gbWVhc3VyZWREZXZpY2VTaXplPy53aWR0aCA6IG1lYXN1cmVkRGV2aWNlU2l6ZT8uaGVpZ2h0KSB8fCAwLFxuICApXG5cbiAgLy8gd2hlbiB0aGUgaW5wdXQgaXMgY2hhbmdlZCBtYW51YWxseSwgd2UgbmVlZCB0byBzZXQgdGhlIGJyZWFrcG9pbnQgYXMgYGN1c3RvbWBcbiAgLy8gdGhpcyB3aWxsIHRoZW4gYWxsb3cgdXMgdG8gc2V0IGFuIGV4cGxpY2l0IHdpZHRoIGFuZCBoZWlnaHRcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBsZXQgbmV3VmFsdWUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG5cbiAgICAgIGlmIChuZXdWYWx1ZSA8IDApIG5ld1ZhbHVlID0gMFxuXG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKG5ld1ZhbHVlKVxuICAgICAgc2V0QnJlYWtwb2ludCgnY3VzdG9tJylcblxuICAgICAgLy8gYmUgc3VyZSB0byBzZXQgX2JvdGhfIGF4aXMgdmFsdWVzIHRvIHNvIHRoYXQgdGhlIG90aGVyIGF4aXMgZG9lc24ndCBmYWxsYmFjayB0byAwIG9uIGluaXRpYWwgY2hhbmdlXG4gICAgICAvLyB0aGlzIGlzIGJlY2F1c2UgdGhlIGByZXNwb25zaXZlYCBzaXplIGlzICcxMDAlJyBpbiBDU1MsIGFuZCBgMGAgaW4gaW5pdGlhbCBzdGF0ZVxuICAgICAgc2V0U2l6ZSh7XG4gICAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBheGlzID09PSAneScgPyBuZXdWYWx1ZSA6IE51bWJlcihtZWFzdXJlZERldmljZVNpemU/LmhlaWdodC50b0ZpeGVkKDApKSAqIHpvb20sXG4gICAgICAgICAgd2lkdGg6IGF4aXMgPT09ICd4JyA/IG5ld1ZhbHVlIDogTnVtYmVyKG1lYXN1cmVkRGV2aWNlU2l6ZT8ud2lkdGgudG9GaXhlZCgwKSkgKiB6b29tLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIFtheGlzLCBzZXRCcmVha3BvaW50LCBtZWFzdXJlZERldmljZVNpemUsIHNldFNpemUsIHpvb21dLFxuICApXG5cbiAgLy8gaWYgdGhlIGJyZWFrcG9pbnQgaXMgYHJlc3BvbnNpdmVgIHRoZW4gdGhlIGRldmljZSdzIGRpdiB3aWxsIGhhdmUgYDEwMCVgIHdpZHRoIGFuZCBoZWlnaHRcbiAgLy8gc28gd2UgbmVlZCB0byB0YWtlIHRoZSBtZWFzdXJlbWVudHMgcHJvdmlkZWQgYnkgYGFjdHVhbERldmljZVNpemVgIGFuZCBzeW5jIGludGVybmFsIHN0YXRlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJyZWFrcG9pbnQgPT09ICdyZXNwb25zaXZlJyAmJiBtZWFzdXJlZERldmljZVNpemUpIHtcbiAgICAgIGlmIChheGlzID09PSAneCcpIHNldEludGVybmFsU3RhdGUoTnVtYmVyKG1lYXN1cmVkRGV2aWNlU2l6ZS53aWR0aC50b0ZpeGVkKDApKSAqIHpvb20pXG4gICAgICBlbHNlIHNldEludGVybmFsU3RhdGUoTnVtYmVyKG1lYXN1cmVkRGV2aWNlU2l6ZS5oZWlnaHQudG9GaXhlZCgwKSkgKiB6b29tKVxuICAgIH1cblxuICAgIGlmIChicmVha3BvaW50ICE9PSAncmVzcG9uc2l2ZScgJiYgc2l6ZSkge1xuICAgICAgc2V0SW50ZXJuYWxTdGF0ZShheGlzID09PSAneCcgPyBzaXplLndpZHRoIDogc2l6ZS5oZWlnaHQpXG4gICAgfVxuICB9LCBbYnJlYWtwb2ludCwgYXhpcywgbWVhc3VyZWREZXZpY2VTaXplLCBzaXplLCB6b29tXSlcblxuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBtaW49ezB9XG4gICAgICBuYW1lPXtheGlzID09PSAneCcgPyAnbGl2ZS1wcmV2aWV3LXdpZHRoJyA6ICdsaXZlLXByZXZpZXctaGVpZ2h0J31cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICBzdGVwPXsxfVxuICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICB2YWx1ZT17aW50ZXJuYWxTdGF0ZSB8fCAwfVxuICAgIC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJQcmV2aWV3RnJhbWVTaXplSW5wdXQiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsImF4aXMiLCJicmVha3BvaW50IiwibWVhc3VyZWREZXZpY2VTaXplIiwic2V0QnJlYWtwb2ludCIsInNldFNpemUiLCJzaXplIiwiem9vbSIsInVzZUxpdmVQcmV2aWV3Q29udGV4dCIsImludGVybmFsU3RhdGUiLCJzZXRJbnRlcm5hbFN0YXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwibmV3VmFsdWUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJ0b0ZpeGVkIiwidXNlRWZmZWN0IiwiaW5wdXQiLCJjbGFzc05hbWUiLCJtaW4iLCJuYW1lIiwib25DaGFuZ2UiLCJzdGVwIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFPYUE7OztlQUFBQTs7OytEQVBpQzt5QkFFUjtRQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELHdCQUVSLENBQUNFO0lBQ0osTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7SUFFakIsTUFBTSxFQUFFRSxVQUFVLEVBQUVDLGtCQUFrQixFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUUsR0FDMUVDLElBQUFBLDhCQUFxQjtJQUV2QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHQyxjQUFLLENBQUNDLFFBQVEsQ0FDdEQsQUFBQ1gsQ0FBQUEsU0FBUyxNQUFNRSxvQkFBb0JVLFFBQVFWLG9CQUFvQlcsTUFBSyxLQUFNO0lBRzdFLGdGQUFnRjtJQUNoRiw4REFBOEQ7SUFDOUQsTUFBTUMsZUFBZUMsSUFBQUEsa0JBQVcsRUFDOUIsQ0FBQ0M7UUFDQyxJQUFJQyxXQUFXQyxPQUFPRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7UUFFcEMsSUFBSUgsV0FBVyxHQUFHQSxXQUFXO1FBRTdCUixpQkFBaUJRO1FBQ2pCZCxjQUFjO1FBRWQsc0dBQXNHO1FBQ3RHLG1GQUFtRjtRQUNuRkMsUUFBUTtZQUNOaUIsTUFBTTtZQUNORCxPQUFPO2dCQUNMUCxRQUFRYixTQUFTLE1BQU1pQixXQUFXQyxPQUFPaEIsb0JBQW9CVyxPQUFPUyxRQUFRLE1BQU1oQjtnQkFDbEZNLE9BQU9aLFNBQVMsTUFBTWlCLFdBQVdDLE9BQU9oQixvQkFBb0JVLE1BQU1VLFFBQVEsTUFBTWhCO1lBQ2xGO1FBQ0Y7SUFDRixHQUNBO1FBQUNOO1FBQU1HO1FBQWVEO1FBQW9CRTtRQUFTRTtLQUFLO0lBRzFELDRGQUE0RjtJQUM1Riw2RkFBNkY7SUFDN0ZpQixJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSXRCLGVBQWUsZ0JBQWdCQyxvQkFBb0I7WUFDckQsSUFBSUYsU0FBUyxLQUFLUyxpQkFBaUJTLE9BQU9oQixtQkFBbUJVLEtBQUssQ0FBQ1UsT0FBTyxDQUFDLE1BQU1oQjtpQkFDNUVHLGlCQUFpQlMsT0FBT2hCLG1CQUFtQlcsTUFBTSxDQUFDUyxPQUFPLENBQUMsTUFBTWhCO1FBQ3ZFO1FBRUEsSUFBSUwsZUFBZSxnQkFBZ0JJLE1BQU07WUFDdkNJLGlCQUFpQlQsU0FBUyxNQUFNSyxLQUFLTyxLQUFLLEdBQUdQLEtBQUtRLE1BQU07UUFDMUQ7SUFDRixHQUFHO1FBQUNaO1FBQVlEO1FBQU1FO1FBQW9CRztRQUFNQztLQUFLO0lBRXJELHFCQUNFLDZCQUFDa0I7UUFDQ0MsV0FBVzNCO1FBQ1g0QixLQUFLO1FBQ0xDLE1BQU0zQixTQUFTLE1BQU0sdUJBQXVCO1FBQzVDNEIsVUFBVWQ7UUFDVmUsTUFBTTtRQUNOUixNQUFLO1FBQ0xELE9BQU9aLGlCQUFpQjs7QUFHOUIifQ==