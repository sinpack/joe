/* eslint-disable react-hooks/exhaustive-deps */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _react = require("react");
const useThrottledEffect = (callback, delay, deps = [])=>{
    const lastRan = (0, _react.useRef)(Date.now());
    (0, _react.useEffect)(()=>{
        const handler = setTimeout(()=>{
            if (Date.now() - lastRan.current >= delay) {
                callback();
                lastRan.current = Date.now();
            }
        }, delay - (Date.now() - lastRan.current));
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        delay,
        ...deps
    ]);
};
const _default = useThrottledEffect;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VUaHJvdHRsZWRFZmZlY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxudHlwZSB1c2VUaHJvdHRsZWRFZmZlY3QgPSAoXG4gIGNhbGxiYWNrOiBSZWFjdC5FZmZlY3RDYWxsYmFjayxcbiAgZGVsYXk6IG51bWJlcixcbiAgZGVwczogUmVhY3QuRGVwZW5kZW5jeUxpc3QsXG4pID0+IHZvaWRcblxuY29uc3QgdXNlVGhyb3R0bGVkRWZmZWN0OiB1c2VUaHJvdHRsZWRFZmZlY3QgPSAoY2FsbGJhY2ssIGRlbGF5LCBkZXBzID0gW10pID0+IHtcbiAgY29uc3QgbGFzdFJhbiA9IHVzZVJlZihEYXRlLm5vdygpKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdFJhbi5jdXJyZW50ID49IGRlbGF5KSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIGxhc3RSYW4uY3VycmVudCA9IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0UmFuLmN1cnJlbnQpLFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcilcbiAgICB9XG4gIH0sIFtkZWxheSwgLi4uZGVwc10pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRocm90dGxlZEVmZmVjdFxuIl0sIm5hbWVzIjpbInVzZVRocm90dGxlZEVmZmVjdCIsImNhbGxiYWNrIiwiZGVsYXkiLCJkZXBzIiwibGFzdFJhbiIsInVzZVJlZiIsIkRhdGUiLCJub3ciLCJ1c2VFZmZlY3QiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOzs7OytCQTZCOUM7OztlQUFBOzs7dUJBNUJrQztBQVFsQyxNQUFNQSxxQkFBeUMsQ0FBQ0MsVUFBVUMsT0FBT0MsT0FBTyxFQUFFO0lBQ3hFLE1BQU1DLFVBQVVDLElBQUFBLGFBQU0sRUFBQ0MsS0FBS0MsR0FBRztJQUUvQkMsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLE1BQU1DLFVBQVVDLFdBQ2Q7WUFDRSxJQUFJSixLQUFLQyxHQUFHLEtBQUtILFFBQVFPLE9BQU8sSUFBSVQsT0FBTztnQkFDekNEO2dCQUNBRyxRQUFRTyxPQUFPLEdBQUdMLEtBQUtDLEdBQUc7WUFDNUI7UUFDRixHQUNBTCxRQUFTSSxDQUFBQSxLQUFLQyxHQUFHLEtBQUtILFFBQVFPLE9BQU8sQUFBRDtRQUd0QyxPQUFPO1lBQ0xDLGFBQWFIO1FBQ2Y7SUFDRixHQUFHO1FBQUNQO1dBQVVDO0tBQUs7QUFDckI7TUFFQSxXQUFlSCJ9