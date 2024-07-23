"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeviceContainer", {
    enumerable: true,
    get: function() {
        return DeviceContainer;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _useResize = require("../../../../utilities/useResize");
const _context = require("../Context/context");
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
const DeviceContainer = (props)=>{
    const { children } = props;
    const deviceFrameRef = _react.default.useRef(null);
    const outerFrameRef = _react.default.useRef(null);
    const { breakpoint, setMeasuredDeviceSize, size: desiredSize, zoom } = (0, _context.useLivePreviewContext)();
    // Keep an accurate measurement of the actual device size as it is truly rendered
    // This is helpful when `sizes` are non-number units like percentages, etc.
    const { size: measuredDeviceSize } = (0, _useResize.useResize)(deviceFrameRef.current);
    const { size: outerFrameSize } = (0, _useResize.useResize)(outerFrameRef.current);
    let deviceIsLargerThanFrame = false;
    // Sync the measured device size with the context so that other components can use it
    // This happens from the bottom up so that as this component mounts and unmounts,
    // its size is freshly populated again upon re-mounting, i.e. going from iframe->popup->iframe
    (0, _react.useEffect)(()=>{
        if (measuredDeviceSize) {
            setMeasuredDeviceSize(measuredDeviceSize);
        }
    }, [
        measuredDeviceSize,
        setMeasuredDeviceSize
    ]);
    let x = '0';
    let margin = '0';
    if (breakpoint && breakpoint !== 'responsive') {
        x = '-50%';
        if (typeof zoom === 'number' && typeof desiredSize.width === 'number' && typeof desiredSize.height === 'number' && typeof measuredDeviceSize.width === 'number' && typeof measuredDeviceSize.height === 'number') {
            margin = '0 auto';
            const scaledDesiredWidth = desiredSize.width / zoom;
            const scaledDeviceWidth = measuredDeviceSize.width * zoom;
            const scaledDeviceDifferencePixels = scaledDesiredWidth - desiredSize.width;
            deviceIsLargerThanFrame = scaledDeviceWidth > outerFrameSize.width;
            if (deviceIsLargerThanFrame) {
                if (zoom > 1) {
                    const differenceFromDeviceToFrame = measuredDeviceSize.width - outerFrameSize.width;
                    if (differenceFromDeviceToFrame < 0) x = `${differenceFromDeviceToFrame / 2}px`;
                    else x = '0';
                } else {
                    x = '0';
                }
            } else {
                if (zoom >= 1) {
                    x = `${scaledDeviceDifferencePixels / 2}px`;
                } else {
                    const differenceFromDeviceToFrame = outerFrameSize.width - scaledDeviceWidth;
                    x = `${differenceFromDeviceToFrame / 2}px`;
                    margin = '0';
                }
            }
        }
    }
    let width = zoom ? `${100 / zoom}%` : '100%';
    let height = zoom ? `${100 / zoom}%` : '100%';
    if (breakpoint !== 'responsive') {
        width = `${desiredSize?.width / (typeof zoom === 'number' ? zoom : 1)}px`;
        height = `${desiredSize?.height / (typeof zoom === 'number' ? zoom : 1)}px`;
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        ref: outerFrameRef,
        style: {
            height: '100%',
            width: '100%'
        }
    }, /*#__PURE__*/ _react.default.createElement("div", {
        ref: deviceFrameRef,
        style: {
            height,
            margin,
            transform: `translate3d(${x}, 0, 0)`,
            width
        }
    }, children));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L0RldmljZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VSZXNpemUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvdXNlUmVzaXplJ1xuaW1wb3J0IHsgdXNlTGl2ZVByZXZpZXdDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dC9jb250ZXh0J1xuXG5leHBvcnQgY29uc3QgRGV2aWNlQ29udGFpbmVyOiBSZWFjdC5GQzx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzXG5cbiAgY29uc3QgZGV2aWNlRnJhbWVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IG91dGVyRnJhbWVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3QgeyBicmVha3BvaW50LCBzZXRNZWFzdXJlZERldmljZVNpemUsIHNpemU6IGRlc2lyZWRTaXplLCB6b29tIH0gPSB1c2VMaXZlUHJldmlld0NvbnRleHQoKVxuXG4gIC8vIEtlZXAgYW4gYWNjdXJhdGUgbWVhc3VyZW1lbnQgb2YgdGhlIGFjdHVhbCBkZXZpY2Ugc2l6ZSBhcyBpdCBpcyB0cnVseSByZW5kZXJlZFxuICAvLyBUaGlzIGlzIGhlbHBmdWwgd2hlbiBgc2l6ZXNgIGFyZSBub24tbnVtYmVyIHVuaXRzIGxpa2UgcGVyY2VudGFnZXMsIGV0Yy5cbiAgY29uc3QgeyBzaXplOiBtZWFzdXJlZERldmljZVNpemUgfSA9IHVzZVJlc2l6ZShkZXZpY2VGcmFtZVJlZi5jdXJyZW50KVxuICBjb25zdCB7IHNpemU6IG91dGVyRnJhbWVTaXplIH0gPSB1c2VSZXNpemUob3V0ZXJGcmFtZVJlZi5jdXJyZW50KVxuXG4gIGxldCBkZXZpY2VJc0xhcmdlclRoYW5GcmFtZTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gU3luYyB0aGUgbWVhc3VyZWQgZGV2aWNlIHNpemUgd2l0aCB0aGUgY29udGV4dCBzbyB0aGF0IG90aGVyIGNvbXBvbmVudHMgY2FuIHVzZSBpdFxuICAvLyBUaGlzIGhhcHBlbnMgZnJvbSB0aGUgYm90dG9tIHVwIHNvIHRoYXQgYXMgdGhpcyBjb21wb25lbnQgbW91bnRzIGFuZCB1bm1vdW50cyxcbiAgLy8gaXRzIHNpemUgaXMgZnJlc2hseSBwb3B1bGF0ZWQgYWdhaW4gdXBvbiByZS1tb3VudGluZywgaS5lLiBnb2luZyBmcm9tIGlmcmFtZS0+cG9wdXAtPmlmcmFtZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtZWFzdXJlZERldmljZVNpemUpIHtcbiAgICAgIHNldE1lYXN1cmVkRGV2aWNlU2l6ZShtZWFzdXJlZERldmljZVNpemUpXG4gICAgfVxuICB9LCBbbWVhc3VyZWREZXZpY2VTaXplLCBzZXRNZWFzdXJlZERldmljZVNpemVdKVxuXG4gIGxldCB4ID0gJzAnXG4gIGxldCBtYXJnaW4gPSAnMCdcblxuICBpZiAoYnJlYWtwb2ludCAmJiBicmVha3BvaW50ICE9PSAncmVzcG9uc2l2ZScpIHtcbiAgICB4ID0gJy01MCUnXG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygem9vbSA9PT0gJ251bWJlcicgJiZcbiAgICAgIHR5cGVvZiBkZXNpcmVkU2l6ZS53aWR0aCA9PT0gJ251bWJlcicgJiZcbiAgICAgIHR5cGVvZiBkZXNpcmVkU2l6ZS5oZWlnaHQgPT09ICdudW1iZXInICYmXG4gICAgICB0eXBlb2YgbWVhc3VyZWREZXZpY2VTaXplLndpZHRoID09PSAnbnVtYmVyJyAmJlxuICAgICAgdHlwZW9mIG1lYXN1cmVkRGV2aWNlU2l6ZS5oZWlnaHQgPT09ICdudW1iZXInXG4gICAgKSB7XG4gICAgICBtYXJnaW4gPSAnMCBhdXRvJ1xuICAgICAgY29uc3Qgc2NhbGVkRGVzaXJlZFdpZHRoID0gZGVzaXJlZFNpemUud2lkdGggLyB6b29tXG4gICAgICBjb25zdCBzY2FsZWREZXZpY2VXaWR0aCA9IG1lYXN1cmVkRGV2aWNlU2l6ZS53aWR0aCAqIHpvb21cbiAgICAgIGNvbnN0IHNjYWxlZERldmljZURpZmZlcmVuY2VQaXhlbHMgPSBzY2FsZWREZXNpcmVkV2lkdGggLSBkZXNpcmVkU2l6ZS53aWR0aFxuICAgICAgZGV2aWNlSXNMYXJnZXJUaGFuRnJhbWUgPSBzY2FsZWREZXZpY2VXaWR0aCA+IG91dGVyRnJhbWVTaXplLndpZHRoXG5cbiAgICAgIGlmIChkZXZpY2VJc0xhcmdlclRoYW5GcmFtZSkge1xuICAgICAgICBpZiAoem9vbSA+IDEpIHtcbiAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlRnJvbURldmljZVRvRnJhbWUgPSBtZWFzdXJlZERldmljZVNpemUud2lkdGggLSBvdXRlckZyYW1lU2l6ZS53aWR0aFxuICAgICAgICAgIGlmIChkaWZmZXJlbmNlRnJvbURldmljZVRvRnJhbWUgPCAwKSB4ID0gYCR7ZGlmZmVyZW5jZUZyb21EZXZpY2VUb0ZyYW1lIC8gMn1weGBcbiAgICAgICAgICBlbHNlIHggPSAnMCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4ID0gJzAnXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh6b29tID49IDEpIHtcbiAgICAgICAgICB4ID0gYCR7c2NhbGVkRGV2aWNlRGlmZmVyZW5jZVBpeGVscyAvIDJ9cHhgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGlmZmVyZW5jZUZyb21EZXZpY2VUb0ZyYW1lID0gb3V0ZXJGcmFtZVNpemUud2lkdGggLSBzY2FsZWREZXZpY2VXaWR0aFxuICAgICAgICAgIHggPSBgJHtkaWZmZXJlbmNlRnJvbURldmljZVRvRnJhbWUgLyAyfXB4YFxuICAgICAgICAgIG1hcmdpbiA9ICcwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHdpZHRoID0gem9vbSA/IGAkezEwMCAvIHpvb219JWAgOiAnMTAwJSdcbiAgbGV0IGhlaWdodCA9IHpvb20gPyBgJHsxMDAgLyB6b29tfSVgIDogJzEwMCUnXG5cbiAgaWYgKGJyZWFrcG9pbnQgIT09ICdyZXNwb25zaXZlJykge1xuICAgIHdpZHRoID0gYCR7ZGVzaXJlZFNpemU/LndpZHRoIC8gKHR5cGVvZiB6b29tID09PSAnbnVtYmVyJyA/IHpvb20gOiAxKX1weGBcbiAgICBoZWlnaHQgPSBgJHtkZXNpcmVkU2l6ZT8uaGVpZ2h0IC8gKHR5cGVvZiB6b29tID09PSAnbnVtYmVyJyA/IHpvb20gOiAxKX1weGBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtvdXRlckZyYW1lUmVmfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtkZXZpY2VGcmFtZVJlZn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgbWFyZ2luLFxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7eH0sIDAsIDApYCxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJEZXZpY2VDb250YWluZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiZGV2aWNlRnJhbWVSZWYiLCJSZWFjdCIsInVzZVJlZiIsIm91dGVyRnJhbWVSZWYiLCJicmVha3BvaW50Iiwic2V0TWVhc3VyZWREZXZpY2VTaXplIiwic2l6ZSIsImRlc2lyZWRTaXplIiwiem9vbSIsInVzZUxpdmVQcmV2aWV3Q29udGV4dCIsIm1lYXN1cmVkRGV2aWNlU2l6ZSIsInVzZVJlc2l6ZSIsImN1cnJlbnQiLCJvdXRlckZyYW1lU2l6ZSIsImRldmljZUlzTGFyZ2VyVGhhbkZyYW1lIiwidXNlRWZmZWN0IiwieCIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0Iiwic2NhbGVkRGVzaXJlZFdpZHRoIiwic2NhbGVkRGV2aWNlV2lkdGgiLCJzY2FsZWREZXZpY2VEaWZmZXJlbmNlUGl4ZWxzIiwiZGlmZmVyZW5jZUZyb21EZXZpY2VUb0ZyYW1lIiwiZGl2IiwicmVmIiwic3R5bGUiLCJ0cmFuc2Zvcm0iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBS2FBOzs7ZUFBQUE7OzsrREFMb0I7MkJBRVA7eUJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixNQUFNQSxrQkFFUixDQUFDQztJQUNKLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBRXJCLE1BQU1FLGlCQUFpQkMsY0FBSyxDQUFDQyxNQUFNLENBQWlCO0lBQ3BELE1BQU1DLGdCQUFnQkYsY0FBSyxDQUFDQyxNQUFNLENBQWlCO0lBRW5ELE1BQU0sRUFBRUUsVUFBVSxFQUFFQyxxQkFBcUIsRUFBRUMsTUFBTUMsV0FBVyxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsOEJBQXFCO0lBRTVGLGlGQUFpRjtJQUNqRiwyRUFBMkU7SUFDM0UsTUFBTSxFQUFFSCxNQUFNSSxrQkFBa0IsRUFBRSxHQUFHQyxJQUFBQSxvQkFBUyxFQUFDWCxlQUFlWSxPQUFPO0lBQ3JFLE1BQU0sRUFBRU4sTUFBTU8sY0FBYyxFQUFFLEdBQUdGLElBQUFBLG9CQUFTLEVBQUNSLGNBQWNTLE9BQU87SUFFaEUsSUFBSUUsMEJBQW1DO0lBRXZDLHFGQUFxRjtJQUNyRixpRkFBaUY7SUFDakYsOEZBQThGO0lBQzlGQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSUwsb0JBQW9CO1lBQ3RCTCxzQkFBc0JLO1FBQ3hCO0lBQ0YsR0FBRztRQUFDQTtRQUFvQkw7S0FBc0I7SUFFOUMsSUFBSVcsSUFBSTtJQUNSLElBQUlDLFNBQVM7SUFFYixJQUFJYixjQUFjQSxlQUFlLGNBQWM7UUFDN0NZLElBQUk7UUFFSixJQUNFLE9BQU9SLFNBQVMsWUFDaEIsT0FBT0QsWUFBWVcsS0FBSyxLQUFLLFlBQzdCLE9BQU9YLFlBQVlZLE1BQU0sS0FBSyxZQUM5QixPQUFPVCxtQkFBbUJRLEtBQUssS0FBSyxZQUNwQyxPQUFPUixtQkFBbUJTLE1BQU0sS0FBSyxVQUNyQztZQUNBRixTQUFTO1lBQ1QsTUFBTUcscUJBQXFCYixZQUFZVyxLQUFLLEdBQUdWO1lBQy9DLE1BQU1hLG9CQUFvQlgsbUJBQW1CUSxLQUFLLEdBQUdWO1lBQ3JELE1BQU1jLCtCQUErQkYscUJBQXFCYixZQUFZVyxLQUFLO1lBQzNFSiwwQkFBMEJPLG9CQUFvQlIsZUFBZUssS0FBSztZQUVsRSxJQUFJSix5QkFBeUI7Z0JBQzNCLElBQUlOLE9BQU8sR0FBRztvQkFDWixNQUFNZSw4QkFBOEJiLG1CQUFtQlEsS0FBSyxHQUFHTCxlQUFlSyxLQUFLO29CQUNuRixJQUFJSyw4QkFBOEIsR0FBR1AsSUFBSSxDQUFDLEVBQUVPLDhCQUE4QixFQUFFLEVBQUUsQ0FBQzt5QkFDMUVQLElBQUk7Z0JBQ1gsT0FBTztvQkFDTEEsSUFBSTtnQkFDTjtZQUNGLE9BQU87Z0JBQ0wsSUFBSVIsUUFBUSxHQUFHO29CQUNiUSxJQUFJLENBQUMsRUFBRU0sK0JBQStCLEVBQUUsRUFBRSxDQUFDO2dCQUM3QyxPQUFPO29CQUNMLE1BQU1DLDhCQUE4QlYsZUFBZUssS0FBSyxHQUFHRztvQkFDM0RMLElBQUksQ0FBQyxFQUFFTyw4QkFBOEIsRUFBRSxFQUFFLENBQUM7b0JBQzFDTixTQUFTO2dCQUNYO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSUMsUUFBUVYsT0FBTyxDQUFDLEVBQUUsTUFBTUEsS0FBSyxDQUFDLENBQUMsR0FBRztJQUN0QyxJQUFJVyxTQUFTWCxPQUFPLENBQUMsRUFBRSxNQUFNQSxLQUFLLENBQUMsQ0FBQyxHQUFHO0lBRXZDLElBQUlKLGVBQWUsY0FBYztRQUMvQmMsUUFBUSxDQUFDLEVBQUVYLGFBQWFXLFFBQVMsQ0FBQSxPQUFPVixTQUFTLFdBQVdBLE9BQU8sQ0FBQSxFQUFHLEVBQUUsQ0FBQztRQUN6RVcsU0FBUyxDQUFDLEVBQUVaLGFBQWFZLFNBQVUsQ0FBQSxPQUFPWCxTQUFTLFdBQVdBLE9BQU8sQ0FBQSxFQUFHLEVBQUUsQ0FBQztJQUM3RTtJQUVBLHFCQUNFLDZCQUFDZ0I7UUFDQ0MsS0FBS3RCO1FBQ0x1QixPQUFPO1lBQ0xQLFFBQVE7WUFDUkQsT0FBTztRQUNUO3FCQUVBLDZCQUFDTTtRQUNDQyxLQUFLekI7UUFDTDBCLE9BQU87WUFDTFA7WUFDQUY7WUFDQVUsV0FBVyxDQUFDLFlBQVksRUFBRVgsRUFBRSxPQUFPLENBQUM7WUFDcENFO1FBQ0Y7T0FFQ25CO0FBSVQifQ==