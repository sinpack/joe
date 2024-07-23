/* eslint-disable no-shadow */ "use strict";
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
const useIntersect = ({ root = null, rootMargin = '0px', threshold = 0 } = {}, disable)=>{
    const [entry, updateEntry] = (0, _react.useState)();
    const [node, setNode] = (0, _react.useState)(null);
    const observer = (0, _react.useRef)(new window.IntersectionObserver(([ent])=>updateEntry(ent), {
        root,
        rootMargin,
        threshold
    }));
    (0, _react.useEffect)(()=>{
        if (disable) {
            return;
        }
        const { current: currentObserver } = observer;
        currentObserver.disconnect();
        if (node) currentObserver.observe(node);
        return ()=>currentObserver.disconnect();
    }, [
        node,
        disable
    ]);
    return [
        setNode,
        entry
    ];
};
const _default = useIntersect;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VJbnRlcnNlY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgSW50ZXJzZWN0ID0gW3NldE5vZGU6IFJlYWN0LkRpc3BhdGNoPEVsZW1lbnQ+LCBlbnRyeTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeV1cblxuY29uc3QgdXNlSW50ZXJzZWN0ID0gKFxuICB7IHJvb3QgPSBudWxsLCByb290TWFyZ2luID0gJzBweCcsIHRocmVzaG9sZCA9IDAgfSA9IHt9LFxuICBkaXNhYmxlPzogYm9vbGVhbixcbik6IEludGVyc2VjdCA9PiB7XG4gIGNvbnN0IFtlbnRyeSwgdXBkYXRlRW50cnldID0gdXNlU3RhdGU8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeT4oKVxuICBjb25zdCBbbm9kZSwgc2V0Tm9kZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IG9ic2VydmVyID0gdXNlUmVmKFxuICAgIG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtlbnRdKSA9PiB1cGRhdGVFbnRyeShlbnQpLCB7XG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICB9KSxcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc2FibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IGN1cnJlbnQ6IGN1cnJlbnRPYnNlcnZlciB9ID0gb2JzZXJ2ZXJcbiAgICBjdXJyZW50T2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG5cbiAgICBpZiAobm9kZSkgY3VycmVudE9ic2VydmVyLm9ic2VydmUobm9kZSlcblxuICAgIHJldHVybiAoKSA9PiBjdXJyZW50T2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gIH0sIFtub2RlLCBkaXNhYmxlXSlcblxuICByZXR1cm4gW3NldE5vZGUsIGVudHJ5XVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnRlcnNlY3RcbiJdLCJuYW1lcyI6WyJ1c2VJbnRlcnNlY3QiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImRpc2FibGUiLCJlbnRyeSIsInVwZGF0ZUVudHJ5IiwidXNlU3RhdGUiLCJub2RlIiwic2V0Tm9kZSIsIm9ic2VydmVyIiwidXNlUmVmIiwid2luZG93IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY3VycmVudE9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7Ozs7K0JBbUM1Qjs7O2VBQUE7Ozt1QkFsQzRDO0FBSTVDLE1BQU1BLGVBQWUsQ0FDbkIsRUFBRUMsT0FBTyxJQUFJLEVBQUVDLGFBQWEsS0FBSyxFQUFFQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUN2REM7SUFFQSxNQUFNLENBQUNDLE9BQU9DLFlBQVksR0FBR0MsSUFBQUEsZUFBUTtJQUNyQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0YsSUFBQUEsZUFBUSxFQUFDO0lBRWpDLE1BQU1HLFdBQVdDLElBQUFBLGFBQU0sRUFDckIsSUFBSUMsT0FBT0Msb0JBQW9CLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEdBQUtSLFlBQVlRLE1BQU07UUFDM0RiO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFHRlksSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUlYLFNBQVM7WUFDWDtRQUNGO1FBQ0EsTUFBTSxFQUFFWSxTQUFTQyxlQUFlLEVBQUUsR0FBR1A7UUFDckNPLGdCQUFnQkMsVUFBVTtRQUUxQixJQUFJVixNQUFNUyxnQkFBZ0JFLE9BQU8sQ0FBQ1g7UUFFbEMsT0FBTyxJQUFNUyxnQkFBZ0JDLFVBQVU7SUFDekMsR0FBRztRQUFDVjtRQUFNSjtLQUFRO0lBRWxCLE9BQU87UUFBQ0s7UUFBU0o7S0FBTTtBQUN6QjtNQUVBLFdBQWVMIn0=