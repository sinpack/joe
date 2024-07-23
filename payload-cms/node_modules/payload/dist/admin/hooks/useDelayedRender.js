"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useDelayedRender", {
    enumerable: true,
    get: function() {
        return useDelayedRender;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _useDelay = require("./useDelay");
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
const useDelayedRender = ({ delayBeforeShow, inTimeout, minShowTime, outTimeout, show })=>{
    const totalMountTime = inTimeout + minShowTime + outTimeout;
    const [hasDelayed, triggerDelay] = (0, _useDelay.useDelay)(delayBeforeShow);
    const [isMounted, setIsMounted] = _react.useState(false);
    const [isUnmounting, setIsUnmounting] = _react.useState(false);
    const onMountTimestampRef = _react.useRef(0);
    const unmountTimeoutRef = _react.useRef();
    const unmount = _react.useCallback(()=>{
        setIsUnmounting(true);
        unmountTimeoutRef.current = setTimeout(()=>{
            setIsMounted(false);
            setIsUnmounting(false);
        }, outTimeout);
    }, [
        setIsUnmounting,
        outTimeout
    ]);
    _react.useEffect(()=>{
        const shouldMount = hasDelayed && !isMounted && show;
        const shouldUnmount = isMounted && !show;
        if (shouldMount) {
            onMountTimestampRef.current = Date.now();
            setIsMounted(true);
        } else if (shouldUnmount) {
            const totalTimeMounted = Date.now() - onMountTimestampRef.current;
            const remainingTime = totalMountTime - totalTimeMounted;
            clearTimeout(unmountTimeoutRef.current);
            unmountTimeoutRef.current = setTimeout(unmount, Math.max(0, remainingTime));
        }
    }, [
        isMounted,
        show,
        unmount,
        totalMountTime,
        hasDelayed
    ]);
    return {
        isMounted,
        isUnmounting,
        triggerDelayedRender: triggerDelay
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VEZWxheWVkUmVuZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VEZWxheSB9IGZyb20gJy4vdXNlRGVsYXknXG5cbnR5cGUgRGVsYXllZFJlbmRlclByb3BzID0ge1xuICAvKiogVGltZSBpbiBtcyB0byB3YWl0IGJlZm9yZSBcIm1vdW50aW5nXCIgdGhlIGNvbXBvbmVudC4gKi9cbiAgZGVsYXlCZWZvcmVTaG93OiBudW1iZXJcbiAgLyoqIFRpbWUgaW4gbXMgZm9yIHRoZSBcImVudGVyXCIgcGhhc2Ugb2YgdGhlIHRyYW5zaXRpb24sIGFmdGVyIGRlbGF5IGNvbXBsZXRlcy4gKi9cbiAgaW5UaW1lb3V0OiBudW1iZXJcbiAgLyoqIE1pbiB0aW1lIGluIG1zIGZvciB0aGUgXCJlbnRlcmVkXCIgcGhhc2Ugb2YgdGhlIHRyYW5zaXRpb24uICovXG4gIG1pblNob3dUaW1lOiBudW1iZXJcbiAgLyoqIFRpbWUgaW4gbXMgZm9yIHRoZSBleGl0IHBoYXNlIG9mIHRoZSB0cmFuc2l0aW9uLiAqL1xuICBvdXRUaW1lb3V0OiBudW1iZXJcbiAgLyoqIGB0cnVlYCBzdGFydHMgdGhlIG1vdW50IHByb2Nlc3MuXG4gICAqIGBmYWxzZWAgc3RhcnRzIHRoZSB1bm1vdW50IHByb2Nlc3MuXG4gICAqICovXG4gIHNob3c6IGJvb2xlYW5cbn1cbnR5cGUgdXNlRGVsYXllZFJlbmRlclQgPSAocHJvcHM6IERlbGF5ZWRSZW5kZXJQcm9wcykgPT4ge1xuICAvKiogYHRydWVgIGlmIHRoZSBjb21wb25lbnQgaGFzIG1vdW50ZWQgYWZ0ZXIgdGhlIHRpbWVvdXQuICovXG4gIGlzTW91bnRlZDogYm9vbGVhblxuICAvKiogYHRydWVgIGlmIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGluZy4gKi9cbiAgaXNVbm1vdW50aW5nOiBib29sZWFuXG4gIC8qKiBDYWxsIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlciB0aGUgdGltZW91dCBkZWxheSBiZWZvcmUgcmVuZGVyaW5nLiAqL1xuICB0cmlnZ2VyRGVsYXllZFJlbmRlcjogKCkgPT4gdm9pZFxufVxuZXhwb3J0IGNvbnN0IHVzZURlbGF5ZWRSZW5kZXI6IHVzZURlbGF5ZWRSZW5kZXJUID0gKHtcbiAgZGVsYXlCZWZvcmVTaG93LFxuICBpblRpbWVvdXQsXG4gIG1pblNob3dUaW1lLFxuICBvdXRUaW1lb3V0LFxuICBzaG93LFxufSkgPT4ge1xuICBjb25zdCB0b3RhbE1vdW50VGltZSA9IGluVGltZW91dCArIG1pblNob3dUaW1lICsgb3V0VGltZW91dFxuICBjb25zdCBbaGFzRGVsYXllZCwgdHJpZ2dlckRlbGF5XSA9IHVzZURlbGF5KGRlbGF5QmVmb3JlU2hvdylcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNVbm1vdW50aW5nLCBzZXRJc1VubW91bnRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IG9uTW91bnRUaW1lc3RhbXBSZWYgPSBSZWFjdC51c2VSZWYoMClcbiAgY29uc3QgdW5tb3VudFRpbWVvdXRSZWY6IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8Tm9kZUpTLlRpbWVvdXQgfCB1bmRlZmluZWQ+ID0gUmVhY3QudXNlUmVmKClcblxuICBjb25zdCB1bm1vdW50ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzVW5tb3VudGluZyh0cnVlKVxuICAgIHVubW91bnRUaW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzTW91bnRlZChmYWxzZSlcbiAgICAgIHNldElzVW5tb3VudGluZyhmYWxzZSlcbiAgICB9LCBvdXRUaW1lb3V0KVxuICB9LCBbc2V0SXNVbm1vdW50aW5nLCBvdXRUaW1lb3V0XSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZE1vdW50ID0gaGFzRGVsYXllZCAmJiAhaXNNb3VudGVkICYmIHNob3dcbiAgICBjb25zdCBzaG91bGRVbm1vdW50ID0gaXNNb3VudGVkICYmICFzaG93XG5cbiAgICBpZiAoc2hvdWxkTW91bnQpIHtcbiAgICAgIG9uTW91bnRUaW1lc3RhbXBSZWYuY3VycmVudCA9IERhdGUubm93KClcbiAgICAgIHNldElzTW91bnRlZCh0cnVlKVxuICAgIH0gZWxzZSBpZiAoc2hvdWxkVW5tb3VudCkge1xuICAgICAgY29uc3QgdG90YWxUaW1lTW91bnRlZCA9IERhdGUubm93KCkgLSBvbk1vdW50VGltZXN0YW1wUmVmLmN1cnJlbnRcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSB0b3RhbE1vdW50VGltZSAtIHRvdGFsVGltZU1vdW50ZWRcbiAgICAgIGNsZWFyVGltZW91dCh1bm1vdW50VGltZW91dFJlZi5jdXJyZW50KVxuICAgICAgdW5tb3VudFRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQodW5tb3VudCwgTWF0aC5tYXgoMCwgcmVtYWluaW5nVGltZSkpXG4gICAgfVxuICB9LCBbaXNNb3VudGVkLCBzaG93LCB1bm1vdW50LCB0b3RhbE1vdW50VGltZSwgaGFzRGVsYXllZF0pXG5cbiAgcmV0dXJuIHtcbiAgICBpc01vdW50ZWQsXG4gICAgaXNVbm1vdW50aW5nLFxuICAgIHRyaWdnZXJEZWxheWVkUmVuZGVyOiB0cmlnZ2VyRGVsYXksXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VEZWxheWVkUmVuZGVyIiwiZGVsYXlCZWZvcmVTaG93IiwiaW5UaW1lb3V0IiwibWluU2hvd1RpbWUiLCJvdXRUaW1lb3V0Iiwic2hvdyIsInRvdGFsTW91bnRUaW1lIiwiaGFzRGVsYXllZCIsInRyaWdnZXJEZWxheSIsInVzZURlbGF5IiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzVW5tb3VudGluZyIsInNldElzVW5tb3VudGluZyIsIm9uTW91bnRUaW1lc3RhbXBSZWYiLCJ1c2VSZWYiLCJ1bm1vdW50VGltZW91dFJlZiIsInVubW91bnQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2hvdWxkTW91bnQiLCJzaG91bGRVbm1vdW50IiwiRGF0ZSIsIm5vdyIsInRvdGFsVGltZU1vdW50ZWQiLCJyZW1haW5pbmdUaW1lIiwiY2xlYXJUaW1lb3V0IiwiTWF0aCIsIm1heCIsInRyaWdnZXJEZWxheWVkUmVuZGVyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBMEJhQTs7O2VBQUFBOzs7K0RBMUJVOzBCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QmxCLE1BQU1BLG1CQUFzQyxDQUFDLEVBQ2xEQyxlQUFlLEVBQ2ZDLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxVQUFVLEVBQ1ZDLElBQUksRUFDTDtJQUNDLE1BQU1DLGlCQUFpQkosWUFBWUMsY0FBY0M7SUFDakQsTUFBTSxDQUFDRyxZQUFZQyxhQUFhLEdBQUdDLElBQUFBLGtCQUFRLEVBQUNSO0lBQzVDLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHQyxPQUFNQyxRQUFRLENBQUM7SUFDakQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0gsT0FBTUMsUUFBUSxDQUFDO0lBQ3ZELE1BQU1HLHNCQUFzQkosT0FBTUssTUFBTSxDQUFDO0lBQ3pDLE1BQU1DLG9CQUF3RU4sT0FBTUssTUFBTTtJQUUxRixNQUFNRSxVQUFVUCxPQUFNUSxXQUFXLENBQUM7UUFDaENMLGdCQUFnQjtRQUNoQkcsa0JBQWtCRyxPQUFPLEdBQUdDLFdBQVc7WUFDckNYLGFBQWE7WUFDYkksZ0JBQWdCO1FBQ2xCLEdBQUdYO0lBQ0wsR0FBRztRQUFDVztRQUFpQlg7S0FBVztJQUVoQ1EsT0FBTVcsU0FBUyxDQUFDO1FBQ2QsTUFBTUMsY0FBY2pCLGNBQWMsQ0FBQ0csYUFBYUw7UUFDaEQsTUFBTW9CLGdCQUFnQmYsYUFBYSxDQUFDTDtRQUVwQyxJQUFJbUIsYUFBYTtZQUNmUixvQkFBb0JLLE9BQU8sR0FBR0ssS0FBS0MsR0FBRztZQUN0Q2hCLGFBQWE7UUFDZixPQUFPLElBQUljLGVBQWU7WUFDeEIsTUFBTUcsbUJBQW1CRixLQUFLQyxHQUFHLEtBQUtYLG9CQUFvQkssT0FBTztZQUNqRSxNQUFNUSxnQkFBZ0J2QixpQkFBaUJzQjtZQUN2Q0UsYUFBYVosa0JBQWtCRyxPQUFPO1lBQ3RDSCxrQkFBa0JHLE9BQU8sR0FBR0MsV0FBV0gsU0FBU1ksS0FBS0MsR0FBRyxDQUFDLEdBQUdIO1FBQzlEO0lBQ0YsR0FBRztRQUFDbkI7UUFBV0w7UUFBTWM7UUFBU2I7UUFBZ0JDO0tBQVc7SUFFekQsT0FBTztRQUNMRztRQUNBSTtRQUNBbUIsc0JBQXNCekI7SUFDeEI7QUFDRiJ9