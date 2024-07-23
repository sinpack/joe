"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // Our hook
"default", {
    enumerable: true,
    get: function() {
        return useDebounce;
    }
});
const _react = require("react");
function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = (0, _react.useState)(value);
    (0, _react.useEffect)(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VEZWJvdW5jZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG4vLyBPdXIgaG9va1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVib3VuY2U8VCA9IHVua25vd24+KHZhbHVlOiBULCBkZWxheTogbnVtYmVyKTogVCB7XG4gIC8vIFN0YXRlIGFuZCBzZXR0ZXJzIGZvciBkZWJvdW5jZWQgdmFsdWVcbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKVxuICAgIH0sIGRlbGF5KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChoYW5kbGVyKVxuICAgIH1cbiAgfSwgW3ZhbHVlLCBkZWxheV0pXG5cbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlXG59XG4iXSwibmFtZXMiOlsidXNlRGVib3VuY2UiLCJ2YWx1ZSIsImRlbGF5IiwiZGVib3VuY2VkVmFsdWUiLCJzZXREZWJvdW5jZWRWYWx1ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUVBLFdBQVc7QUFDWDs7O2VBQXdCQTs7O3VCQUhZO0FBR3JCLFNBQVNBLFlBQXlCQyxLQUFRLEVBQUVDLEtBQWE7SUFDdEUsd0NBQXdDO0lBQ3hDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0MsSUFBQUEsZUFBUSxFQUFDSjtJQUVyREssSUFBQUEsZ0JBQVMsRUFBQztRQUNSLE1BQU1DLFVBQVVDLFdBQVc7WUFDekJKLGtCQUFrQkg7UUFDcEIsR0FBR0M7UUFFSCxPQUFPO1lBQ0xPLGFBQWFGO1FBQ2Y7SUFDRixHQUFHO1FBQUNOO1FBQU9DO0tBQU07SUFFakIsT0FBT0M7QUFDVCJ9