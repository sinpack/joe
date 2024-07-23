"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useDebouncedCallback", {
    enumerable: true,
    get: function() {
        return useDebouncedCallback;
    }
});
const _react = require("react");
const useDebouncedCallback = (func, wait)=>{
    // Use a ref to store the timeout between renders
    // and prevent changes to it from causing re-renders
    const timeout = (0, _react.useRef)();
    return (0, _react.useCallback)((...args)=>{
        const later = ()=>{
            clearTimeout(timeout.current);
            func(...args);
        };
        clearTimeout(timeout.current);
        timeout.current = setTimeout(later, wait);
    }, [
        func,
        wait
    ]);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VEZWJvdW5jZWRDYWxsYmFjay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbi8qKlxuICogUmV0dXJucyBhIG1lbW9pemVkIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGNhbGwgdGhlIHBhc3NlZCBmdW5jdGlvbiB3aGVuIGl0IGhhc24ndCBiZWVuIGNhbGxlZCBmb3IgdGhlIHdhaXQgcGVyaW9kXG4gKiBAcGFyYW0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkXG4gKiBAcGFyYW0gd2FpdCBXYWl0IHBlcmlvZCBhZnRlciBmdW5jdGlvbiBoYXNuJ3QgYmVlbiBjYWxsZWQgZm9yXG4gKiBAcmV0dXJucyBBIG1lbW9pemVkIGZ1bmN0aW9uIHRoYXQgaXMgZGVib3VuY2VkXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VEZWJvdW5jZWRDYWxsYmFjayA9IChmdW5jLCB3YWl0KSA9PiB7XG4gIC8vIFVzZSBhIHJlZiB0byBzdG9yZSB0aGUgdGltZW91dCBiZXR3ZWVuIHJlbmRlcnNcbiAgLy8gYW5kIHByZXZlbnQgY2hhbmdlcyB0byBpdCBmcm9tIGNhdXNpbmcgcmUtcmVuZGVyc1xuICBjb25zdCB0aW1lb3V0ID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+PigpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKFxuICAgICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQuY3VycmVudClcbiAgICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KVxuICAgICAgdGltZW91dC5jdXJyZW50ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcbiAgICB9LFxuICAgIFtmdW5jLCB3YWl0XSxcbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZURlYm91bmNlZENhbGxiYWNrIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJhcmdzIiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50Iiwic2V0VGltZW91dCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFRYUE7OztlQUFBQTs7O3VCQVJ1QjtBQVE3QixNQUFNQSx1QkFBdUIsQ0FBQ0MsTUFBTUM7SUFDekMsaURBQWlEO0lBQ2pELG9EQUFvRDtJQUNwRCxNQUFNQyxVQUFVQyxJQUFBQSxhQUFNO0lBRXRCLE9BQU9DLElBQUFBLGtCQUFXLEVBQ2hCLENBQUMsR0FBR0M7UUFDRixNQUFNQyxRQUFRO1lBQ1pDLGFBQWFMLFFBQVFNLE9BQU87WUFDNUJSLFFBQVFLO1FBQ1Y7UUFFQUUsYUFBYUwsUUFBUU0sT0FBTztRQUM1Qk4sUUFBUU0sT0FBTyxHQUFHQyxXQUFXSCxPQUFPTDtJQUN0QyxHQUNBO1FBQUNEO1FBQU1DO0tBQUs7QUFFaEIifQ==