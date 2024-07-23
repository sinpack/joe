"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LivePreviewProvider", {
    enumerable: true,
    get: function() {
        return LivePreviewProvider;
    }
});
const _core = require("@dnd-kit/core");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _fieldSchemaToJSON = require("../../../../../utilities/fieldSchemaToJSON");
const _collisionDetection = require("./collisionDetection");
const _context = require("./context");
const _sizeReducer = require("./sizeReducer");
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
const LivePreviewProvider = (props)=>{
    const { breakpoints, children, isPopupOpen, openPopupWindow, popupRef, url } = props;
    const [previewWindowType, setPreviewWindowType] = (0, _react.useState)('iframe');
    const [appIsReady, setAppIsReady] = (0, _react.useState)(false);
    const iframeRef = _react.default.useRef(null);
    const [iframeHasLoaded, setIframeHasLoaded] = (0, _react.useState)(false);
    const [zoom, setZoom] = (0, _react.useState)(1);
    const [position, setPosition] = (0, _react.useState)({
        x: 0,
        y: 0
    });
    const [size, setSize] = _react.default.useReducer(_sizeReducer.sizeReducer, {
        height: 0,
        width: 0
    });
    const [measuredDeviceSize, setMeasuredDeviceSize] = (0, _react.useState)({
        height: 0,
        width: 0
    });
    const [breakpoint, setBreakpoint] = _react.default.useState('responsive');
    const [fieldSchemaJSON] = (0, _react.useState)(()=>{
        let fields;
        if ('collection' in props) {
            const { collection } = props;
            fields = collection.fields;
        }
        if ('global' in props) {
            const { global } = props;
            fields = global.fields;
        }
        return (0, _fieldSchemaToJSON.fieldSchemaToJSON)(fields);
    });
    // The toolbar needs to freely drag and drop around the page
    const handleDragEnd = (ev)=>{
        // only update position if the toolbar is completely within the preview area
        // otherwise reset it back to the previous position
        // TODO: reset to the nearest edge of the preview area
        if (ev.over && ev.over.id === 'live-preview-area') {
            const newPos = {
                x: position.x + ev.delta.x,
                y: position.y + ev.delta.y
            };
            setPosition(newPos);
        } else {
        // reset
        }
    };
    const setWidth = (0, _react.useCallback)((width)=>{
        setSize({
            type: 'width',
            value: width
        });
    }, [
        setSize
    ]);
    const setHeight = (0, _react.useCallback)((height)=>{
        setSize({
            type: 'height',
            value: height
        });
    }, [
        setSize
    ]);
    // explicitly set new width and height when as new breakpoints are selected
    // exclude `custom` breakpoint as it is handled by the `setWidth` and `setHeight` directly
    (0, _react.useEffect)(()=>{
        const foundBreakpoint = breakpoints?.find((bp)=>bp.name === breakpoint);
        if (foundBreakpoint && breakpoint !== 'responsive' && breakpoint !== 'custom' && typeof foundBreakpoint?.width === 'number' && typeof foundBreakpoint?.height === 'number') {
            setSize({
                type: 'reset',
                value: {
                    height: foundBreakpoint.height,
                    width: foundBreakpoint.width
                }
            });
        }
    }, [
        breakpoint,
        breakpoints
    ]);
    // Receive the `ready` message from the popup window
    // This indicates that the app is ready to receive `window.postMessage` events
    // This is also the only cross-origin way of detecting when a popup window has loaded
    // Unlike iframe elements which have an `onLoad` handler, there is no way to access `window.open` on popups
    (0, _react.useEffect)(()=>{
        const handleMessage = (event)=>{
            if (url?.startsWith(event.origin) && event.data && typeof event.data === 'object' && event.data.type === 'payload-live-preview') {
                if (event.data.ready) {
                    setAppIsReady(true);
                }
            }
        };
        window.addEventListener('message', handleMessage);
        return ()=>{
            window.removeEventListener('message', handleMessage);
        };
    }, [
        url
    ]);
    const handleWindowChange = (0, _react.useCallback)((type)=>{
        setAppIsReady(false);
        setPreviewWindowType(type);
        if (type === 'popup') openPopupWindow();
    }, [
        openPopupWindow
    ]);
    // when the user closes the popup window, switch back to the iframe
    // the `usePopupWindow` reports the `isPopupOpen` state for us to use here
    (0, _react.useEffect)(()=>{
        if (!isPopupOpen) {
            handleWindowChange('iframe');
        }
    }, [
        isPopupOpen,
        handleWindowChange
    ]);
    return /*#__PURE__*/ _react.default.createElement(_context.LivePreviewContext.Provider, {
        value: {
            appIsReady,
            breakpoint,
            breakpoints,
            fieldSchemaJSON,
            iframeHasLoaded,
            iframeRef,
            isPopupOpen,
            measuredDeviceSize,
            openPopupWindow,
            popupRef,
            previewWindowType,
            setAppIsReady,
            setBreakpoint,
            setHeight,
            setIframeHasLoaded,
            setMeasuredDeviceSize,
            setPreviewWindowType: handleWindowChange,
            setSize,
            setToolbarPosition: setPosition,
            setWidth,
            setZoom,
            size,
            toolbarPosition: position,
            url,
            zoom
        }
    }, /*#__PURE__*/ _react.default.createElement(_core.DndContext, {
        collisionDetection: _collisionDetection.customCollisionDetection,
        onDragEnd: handleDragEnd
    }, children));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L0NvbnRleHQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERuZENvbnRleHQgfSBmcm9tICdAZG5kLWtpdC9jb3JlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgTGl2ZVByZXZpZXdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHBvcnRzL2NvbmZpZydcbmltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBFZGl0Vmlld1Byb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IHVzZVBvcHVwV2luZG93IH0gZnJvbSAnLi4vdXNlUG9wdXBXaW5kb3cnXG5cbmltcG9ydCB7IGZpZWxkU2NoZW1hVG9KU09OIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2ZpZWxkU2NoZW1hVG9KU09OJ1xuaW1wb3J0IHsgY3VzdG9tQ29sbGlzaW9uRGV0ZWN0aW9uIH0gZnJvbSAnLi9jb2xsaXNpb25EZXRlY3Rpb24nXG5pbXBvcnQgeyBMaXZlUHJldmlld0NvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgeyBzaXplUmVkdWNlciB9IGZyb20gJy4vc2l6ZVJlZHVjZXInXG5cbmV4cG9ydCB0eXBlIExpdmVQcmV2aWV3UHJvdmlkZXJQcm9wcyA9IEVkaXRWaWV3UHJvcHMgJiB7XG4gIGFwcElzUmVhZHk/OiBib29sZWFuXG4gIGJyZWFrcG9pbnRzPzogTGl2ZVByZXZpZXdDb25maWdbJ2JyZWFrcG9pbnRzJ11cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBkZXZpY2VTaXplPzoge1xuICAgIGhlaWdodDogbnVtYmVyXG4gICAgd2lkdGg6IG51bWJlclxuICB9XG4gIGlzUG9wdXBPcGVuPzogYm9vbGVhblxuICBvcGVuUG9wdXBXaW5kb3c/OiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQb3B1cFdpbmRvdz5bJ29wZW5Qb3B1cFdpbmRvdyddXG4gIHBvcHVwUmVmPzogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxXaW5kb3c+XG4gIHVybD86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgTGl2ZVByZXZpZXdQcm92aWRlcjogUmVhY3QuRkM8TGl2ZVByZXZpZXdQcm92aWRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGJyZWFrcG9pbnRzLCBjaGlsZHJlbiwgaXNQb3B1cE9wZW4sIG9wZW5Qb3B1cFdpbmRvdywgcG9wdXBSZWYsIHVybCB9ID0gcHJvcHNcblxuICBjb25zdCBbcHJldmlld1dpbmRvd1R5cGUsIHNldFByZXZpZXdXaW5kb3dUeXBlXSA9IHVzZVN0YXRlPCdpZnJhbWUnIHwgJ3BvcHVwJz4oJ2lmcmFtZScpXG5cbiAgY29uc3QgW2FwcElzUmVhZHksIHNldEFwcElzUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaWZyYW1lUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJRnJhbWVFbGVtZW50PihudWxsKVxuXG4gIGNvbnN0IFtpZnJhbWVIYXNMb2FkZWQsIHNldElmcmFtZUhhc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKVxuXG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pXG5cbiAgY29uc3QgW3NpemUsIHNldFNpemVdID0gUmVhY3QudXNlUmVkdWNlcihzaXplUmVkdWNlciwgeyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH0pXG5cbiAgY29uc3QgW21lYXN1cmVkRGV2aWNlU2l6ZSwgc2V0TWVhc3VyZWREZXZpY2VTaXplXSA9IHVzZVN0YXRlKHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gIH0pXG5cbiAgY29uc3QgW2JyZWFrcG9pbnQsIHNldEJyZWFrcG9pbnRdID1cbiAgICBSZWFjdC51c2VTdGF0ZTxMaXZlUHJldmlld0NvbmZpZ1snYnJlYWtwb2ludHMnXVswXVsnbmFtZSddPigncmVzcG9uc2l2ZScpXG5cbiAgY29uc3QgW2ZpZWxkU2NoZW1hSlNPTl0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgbGV0IGZpZWxkczogRmllbGRbXVxuXG4gICAgaWYgKCdjb2xsZWN0aW9uJyBpbiBwcm9wcykge1xuICAgICAgY29uc3QgeyBjb2xsZWN0aW9uIH0gPSBwcm9wc1xuICAgICAgZmllbGRzID0gY29sbGVjdGlvbi5maWVsZHNcbiAgICB9XG5cbiAgICBpZiAoJ2dsb2JhbCcgaW4gcHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZ2xvYmFsIH0gPSBwcm9wc1xuICAgICAgZmllbGRzID0gZ2xvYmFsLmZpZWxkc1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZFNjaGVtYVRvSlNPTihmaWVsZHMpXG4gIH0pXG5cbiAgLy8gVGhlIHRvb2xiYXIgbmVlZHMgdG8gZnJlZWx5IGRyYWcgYW5kIGRyb3AgYXJvdW5kIHRoZSBwYWdlXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAoZXYpID0+IHtcbiAgICAvLyBvbmx5IHVwZGF0ZSBwb3NpdGlvbiBpZiB0aGUgdG9vbGJhciBpcyBjb21wbGV0ZWx5IHdpdGhpbiB0aGUgcHJldmlldyBhcmVhXG4gICAgLy8gb3RoZXJ3aXNlIHJlc2V0IGl0IGJhY2sgdG8gdGhlIHByZXZpb3VzIHBvc2l0aW9uXG4gICAgLy8gVE9ETzogcmVzZXQgdG8gdGhlIG5lYXJlc3QgZWRnZSBvZiB0aGUgcHJldmlldyBhcmVhXG4gICAgaWYgKGV2Lm92ZXIgJiYgZXYub3Zlci5pZCA9PT0gJ2xpdmUtcHJldmlldy1hcmVhJykge1xuICAgICAgY29uc3QgbmV3UG9zID0ge1xuICAgICAgICB4OiBwb3NpdGlvbi54ICsgZXYuZGVsdGEueCxcbiAgICAgICAgeTogcG9zaXRpb24ueSArIGV2LmRlbHRhLnksXG4gICAgICB9XG5cbiAgICAgIHNldFBvc2l0aW9uKG5ld1BvcylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVzZXRcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRXaWR0aCA9IHVzZUNhbGxiYWNrKFxuICAgICh3aWR0aCkgPT4ge1xuICAgICAgc2V0U2l6ZSh7IHR5cGU6ICd3aWR0aCcsIHZhbHVlOiB3aWR0aCB9KVxuICAgIH0sXG4gICAgW3NldFNpemVdLFxuICApXG5cbiAgY29uc3Qgc2V0SGVpZ2h0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGhlaWdodCkgPT4ge1xuICAgICAgc2V0U2l6ZSh7IHR5cGU6ICdoZWlnaHQnLCB2YWx1ZTogaGVpZ2h0IH0pXG4gICAgfSxcbiAgICBbc2V0U2l6ZV0sXG4gIClcblxuICAvLyBleHBsaWNpdGx5IHNldCBuZXcgd2lkdGggYW5kIGhlaWdodCB3aGVuIGFzIG5ldyBicmVha3BvaW50cyBhcmUgc2VsZWN0ZWRcbiAgLy8gZXhjbHVkZSBgY3VzdG9tYCBicmVha3BvaW50IGFzIGl0IGlzIGhhbmRsZWQgYnkgdGhlIGBzZXRXaWR0aGAgYW5kIGBzZXRIZWlnaHRgIGRpcmVjdGx5XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZm91bmRCcmVha3BvaW50ID0gYnJlYWtwb2ludHM/LmZpbmQoKGJwKSA9PiBicC5uYW1lID09PSBicmVha3BvaW50KVxuXG4gICAgaWYgKFxuICAgICAgZm91bmRCcmVha3BvaW50ICYmXG4gICAgICBicmVha3BvaW50ICE9PSAncmVzcG9uc2l2ZScgJiZcbiAgICAgIGJyZWFrcG9pbnQgIT09ICdjdXN0b20nICYmXG4gICAgICB0eXBlb2YgZm91bmRCcmVha3BvaW50Py53aWR0aCA9PT0gJ251bWJlcicgJiZcbiAgICAgIHR5cGVvZiBmb3VuZEJyZWFrcG9pbnQ/LmhlaWdodCA9PT0gJ251bWJlcidcbiAgICApIHtcbiAgICAgIHNldFNpemUoe1xuICAgICAgICB0eXBlOiAncmVzZXQnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGhlaWdodDogZm91bmRCcmVha3BvaW50LmhlaWdodCxcbiAgICAgICAgICB3aWR0aDogZm91bmRCcmVha3BvaW50LndpZHRoLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFticmVha3BvaW50LCBicmVha3BvaW50c10pXG5cbiAgLy8gUmVjZWl2ZSB0aGUgYHJlYWR5YCBtZXNzYWdlIGZyb20gdGhlIHBvcHVwIHdpbmRvd1xuICAvLyBUaGlzIGluZGljYXRlcyB0aGF0IHRoZSBhcHAgaXMgcmVhZHkgdG8gcmVjZWl2ZSBgd2luZG93LnBvc3RNZXNzYWdlYCBldmVudHNcbiAgLy8gVGhpcyBpcyBhbHNvIHRoZSBvbmx5IGNyb3NzLW9yaWdpbiB3YXkgb2YgZGV0ZWN0aW5nIHdoZW4gYSBwb3B1cCB3aW5kb3cgaGFzIGxvYWRlZFxuICAvLyBVbmxpa2UgaWZyYW1lIGVsZW1lbnRzIHdoaWNoIGhhdmUgYW4gYG9uTG9hZGAgaGFuZGxlciwgdGhlcmUgaXMgbm8gd2F5IHRvIGFjY2VzcyBgd2luZG93Lm9wZW5gIG9uIHBvcHVwc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB1cmw/LnN0YXJ0c1dpdGgoZXZlbnQub3JpZ2luKSAmJlxuICAgICAgICBldmVudC5kYXRhICYmXG4gICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdwYXlsb2FkLWxpdmUtcHJldmlldydcbiAgICAgICkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS5yZWFkeSkge1xuICAgICAgICAgIHNldEFwcElzUmVhZHkodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgfVxuICB9LCBbdXJsXSlcblxuICBjb25zdCBoYW5kbGVXaW5kb3dDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAodHlwZTogJ2lmcmFtZScgfCAncG9wdXAnKSA9PiB7XG4gICAgICBzZXRBcHBJc1JlYWR5KGZhbHNlKVxuICAgICAgc2V0UHJldmlld1dpbmRvd1R5cGUodHlwZSlcbiAgICAgIGlmICh0eXBlID09PSAncG9wdXAnKSBvcGVuUG9wdXBXaW5kb3coKVxuICAgIH0sXG4gICAgW29wZW5Qb3B1cFdpbmRvd10sXG4gIClcblxuICAvLyB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgcG9wdXAgd2luZG93LCBzd2l0Y2ggYmFjayB0byB0aGUgaWZyYW1lXG4gIC8vIHRoZSBgdXNlUG9wdXBXaW5kb3dgIHJlcG9ydHMgdGhlIGBpc1BvcHVwT3BlbmAgc3RhdGUgZm9yIHVzIHRvIHVzZSBoZXJlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1BvcHVwT3Blbikge1xuICAgICAgaGFuZGxlV2luZG93Q2hhbmdlKCdpZnJhbWUnKVxuICAgIH1cbiAgfSwgW2lzUG9wdXBPcGVuLCBoYW5kbGVXaW5kb3dDaGFuZ2VdKVxuXG4gIHJldHVybiAoXG4gICAgPExpdmVQcmV2aWV3Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYXBwSXNSZWFkeSxcbiAgICAgICAgYnJlYWtwb2ludCxcbiAgICAgICAgYnJlYWtwb2ludHMsXG4gICAgICAgIGZpZWxkU2NoZW1hSlNPTixcbiAgICAgICAgaWZyYW1lSGFzTG9hZGVkLFxuICAgICAgICBpZnJhbWVSZWYsXG4gICAgICAgIGlzUG9wdXBPcGVuLFxuICAgICAgICBtZWFzdXJlZERldmljZVNpemUsXG4gICAgICAgIG9wZW5Qb3B1cFdpbmRvdyxcbiAgICAgICAgcG9wdXBSZWYsXG4gICAgICAgIHByZXZpZXdXaW5kb3dUeXBlLFxuICAgICAgICBzZXRBcHBJc1JlYWR5LFxuICAgICAgICBzZXRCcmVha3BvaW50LFxuICAgICAgICBzZXRIZWlnaHQsXG4gICAgICAgIHNldElmcmFtZUhhc0xvYWRlZCxcbiAgICAgICAgc2V0TWVhc3VyZWREZXZpY2VTaXplLFxuICAgICAgICBzZXRQcmV2aWV3V2luZG93VHlwZTogaGFuZGxlV2luZG93Q2hhbmdlLFxuICAgICAgICBzZXRTaXplLFxuICAgICAgICBzZXRUb29sYmFyUG9zaXRpb246IHNldFBvc2l0aW9uLFxuICAgICAgICBzZXRXaWR0aCxcbiAgICAgICAgc2V0Wm9vbSxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgdG9vbGJhclBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgdXJsLFxuICAgICAgICB6b29tLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RG5kQ29udGV4dCBjb2xsaXNpb25EZXRlY3Rpb249e2N1c3RvbUNvbGxpc2lvbkRldGVjdGlvbn0gb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9EbmRDb250ZXh0PlxuICAgIDwvTGl2ZVByZXZpZXdDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiTGl2ZVByZXZpZXdQcm92aWRlciIsInByb3BzIiwiYnJlYWtwb2ludHMiLCJjaGlsZHJlbiIsImlzUG9wdXBPcGVuIiwib3BlblBvcHVwV2luZG93IiwicG9wdXBSZWYiLCJ1cmwiLCJwcmV2aWV3V2luZG93VHlwZSIsInNldFByZXZpZXdXaW5kb3dUeXBlIiwidXNlU3RhdGUiLCJhcHBJc1JlYWR5Iiwic2V0QXBwSXNSZWFkeSIsImlmcmFtZVJlZiIsIlJlYWN0IiwidXNlUmVmIiwiaWZyYW1lSGFzTG9hZGVkIiwic2V0SWZyYW1lSGFzTG9hZGVkIiwiem9vbSIsInNldFpvb20iLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwieCIsInkiLCJzaXplIiwic2V0U2l6ZSIsInVzZVJlZHVjZXIiLCJzaXplUmVkdWNlciIsImhlaWdodCIsIndpZHRoIiwibWVhc3VyZWREZXZpY2VTaXplIiwic2V0TWVhc3VyZWREZXZpY2VTaXplIiwiYnJlYWtwb2ludCIsInNldEJyZWFrcG9pbnQiLCJmaWVsZFNjaGVtYUpTT04iLCJmaWVsZHMiLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiZmllbGRTY2hlbWFUb0pTT04iLCJoYW5kbGVEcmFnRW5kIiwiZXYiLCJvdmVyIiwiaWQiLCJuZXdQb3MiLCJkZWx0YSIsInNldFdpZHRoIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwidmFsdWUiLCJzZXRIZWlnaHQiLCJ1c2VFZmZlY3QiLCJmb3VuZEJyZWFrcG9pbnQiLCJmaW5kIiwiYnAiLCJuYW1lIiwiaGFuZGxlTWVzc2FnZSIsImV2ZW50Iiwic3RhcnRzV2l0aCIsIm9yaWdpbiIsImRhdGEiLCJyZWFkeSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlV2luZG93Q2hhbmdlIiwiTGl2ZVByZXZpZXdDb250ZXh0IiwiUHJvdmlkZXIiLCJzZXRUb29sYmFyUG9zaXRpb24iLCJ0b29sYmFyUG9zaXRpb24iLCJEbmRDb250ZXh0IiwiY29sbGlzaW9uRGV0ZWN0aW9uIiwiY3VzdG9tQ29sbGlzaW9uRGV0ZWN0aW9uIiwib25EcmFnRW5kIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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