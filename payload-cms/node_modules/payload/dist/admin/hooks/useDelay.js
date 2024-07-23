"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useDelay", {
    enumerable: true,
    get: function() {
        return useDelay;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
const useDelay = (delay, triggerOnMount = false)=>{
    const [hasDelayed, setHasDelayed] = _react.useState(false);
    const triggerTimeoutRef = _react.useRef();
    const triggerDelay = _react.useCallback(()=>{
        setHasDelayed(false);
        clearTimeout(triggerTimeoutRef.current);
        triggerTimeoutRef.current = setTimeout(()=>{
            setHasDelayed(true);
        }, delay);
        return ()=>{
            clearTimeout(triggerTimeoutRef.current);
        };
    }, [
        delay
    ]);
    _react.useEffect(()=>{
        if (triggerOnMount) {
            triggerDelay();
        }
    }, [
        triggerDelay,
        triggerOnMount
    ]);
    return [
        hasDelayed,
        triggerDelay
    ];
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VEZWxheS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgUmVzdWx0ID0gW2Jvb2xlYW4sICgpID0+IHZvaWRdXG5leHBvcnQgY29uc3QgdXNlRGVsYXkgPSAoZGVsYXk6IG51bWJlciwgdHJpZ2dlck9uTW91bnQgPSBmYWxzZSk6IFJlc3VsdCA9PiB7XG4gIGNvbnN0IFtoYXNEZWxheWVkLCBzZXRIYXNEZWxheWVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0cmlnZ2VyVGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZjxOb2RlSlMuVGltZW91dD4oKVxuXG4gIGNvbnN0IHRyaWdnZXJEZWxheSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIYXNEZWxheWVkKGZhbHNlKVxuICAgIGNsZWFyVGltZW91dCh0cmlnZ2VyVGltZW91dFJlZi5jdXJyZW50KVxuICAgIHRyaWdnZXJUaW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEhhc0RlbGF5ZWQodHJ1ZSlcbiAgICB9LCBkZWxheSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodHJpZ2dlclRpbWVvdXRSZWYuY3VycmVudClcbiAgICB9XG4gIH0sIFtkZWxheV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHJpZ2dlck9uTW91bnQpIHtcbiAgICAgIHRyaWdnZXJEZWxheSgpXG4gICAgfVxuICB9LCBbdHJpZ2dlckRlbGF5LCB0cmlnZ2VyT25Nb3VudF0pXG5cbiAgcmV0dXJuIFtoYXNEZWxheWVkLCB0cmlnZ2VyRGVsYXldXG59XG4iXSwibmFtZXMiOlsidXNlRGVsYXkiLCJkZWxheSIsInRyaWdnZXJPbk1vdW50IiwiaGFzRGVsYXllZCIsInNldEhhc0RlbGF5ZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwidHJpZ2dlclRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJ0cmlnZ2VyRGVsYXkiLCJ1c2VDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBR2FBOzs7ZUFBQUE7OzsrREFIVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2hCLE1BQU1BLFdBQVcsQ0FBQ0MsT0FBZUMsaUJBQWlCLEtBQUs7SUFDNUQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdDLE9BQU1DLFFBQVEsQ0FBQztJQUNuRCxNQUFNQyxvQkFBb0JGLE9BQU1HLE1BQU07SUFFdEMsTUFBTUMsZUFBZUosT0FBTUssV0FBVyxDQUFDO1FBQ3JDTixjQUFjO1FBQ2RPLGFBQWFKLGtCQUFrQkssT0FBTztRQUN0Q0wsa0JBQWtCSyxPQUFPLEdBQUdDLFdBQVc7WUFDckNULGNBQWM7UUFDaEIsR0FBR0g7UUFFSCxPQUFPO1lBQ0xVLGFBQWFKLGtCQUFrQkssT0FBTztRQUN4QztJQUNGLEdBQUc7UUFBQ1g7S0FBTTtJQUVWSSxPQUFNUyxTQUFTLENBQUM7UUFDZCxJQUFJWixnQkFBZ0I7WUFDbEJPO1FBQ0Y7SUFDRixHQUFHO1FBQUNBO1FBQWNQO0tBQWU7SUFFakMsT0FBTztRQUFDQztRQUFZTTtLQUFhO0FBQ25DIn0=