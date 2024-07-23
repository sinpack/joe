"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useResize", {
    enumerable: true,
    get: function() {
        return useResize;
    }
});
const _react = require("react");
const useResize = (element)=>{
    const [size, setSize] = (0, _react.useState)();
    (0, _react.useEffect)(()=>{
        let observer// eslint-disable-line
        ;
        if (element) {
            observer = new ResizeObserver((entries)=>{
                entries.forEach((entry)=>{
                    const { contentBoxSize, contentRect } = entry;
                    let newWidth = 0;
                    let newHeight = 0;
                    if (contentBoxSize) {
                        const newSize = Array.isArray(contentBoxSize) ? contentBoxSize[0] : contentBoxSize;
                        if (newSize) {
                            const { blockSize, inlineSize } = newSize;
                            newWidth = inlineSize;
                            newHeight = blockSize;
                        }
                    } else if (contentRect) {
                        // see note above for why this block is needed
                        const { height, width } = contentRect;
                        newWidth = width;
                        newHeight = height;
                    }
                    setSize({
                        height: newHeight,
                        width: newWidth
                    });
                });
            });
            observer.observe(element);
        }
        return ()=>{
            if (observer) {
                observer.unobserve(element);
            }
        };
    }, [
        element
    ]);
    return {
        size
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvdXNlUmVzaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBTaXplIHtcbiAgaGVpZ2h0OiBudW1iZXJcbiAgd2lkdGg6IG51bWJlclxufVxuXG5pbnRlcmZhY2UgUmVzaXplIHtcbiAgc2l6ZT86IFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVJlc2l6ZSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFJlc2l6ZSA9PiB7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlPFNpemU+KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvYnNlcnZlcjogYW55IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29udGVudEJveFNpemUsXG4gICAgICAgICAgICBjb250ZW50UmVjdCwgLy8gZm9yIFNhZmFyaSBpT1MgY29tcGF0aWJpbGl0eSwgd2lsbCBiZSBkZXByZWNhdGVkIGV2ZW50dWFsbHkgKHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzaXplT2JzZXJ2ZXJFbnRyeS9jb250ZW50UmVjdClcbiAgICAgICAgICB9ID0gZW50cnlcblxuICAgICAgICAgIGxldCBuZXdXaWR0aCA9IDBcbiAgICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gMFxuXG4gICAgICAgICAgaWYgKGNvbnRlbnRCb3hTaXplKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaXplID0gQXJyYXkuaXNBcnJheShjb250ZW50Qm94U2l6ZSkgPyBjb250ZW50Qm94U2l6ZVswXSA6IGNvbnRlbnRCb3hTaXplXG5cbiAgICAgICAgICAgIGlmIChuZXdTaXplKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgYmxvY2tTaXplLCBpbmxpbmVTaXplIH0gPSBuZXdTaXplXG4gICAgICAgICAgICAgIG5ld1dpZHRoID0gaW5saW5lU2l6ZVxuICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBibG9ja1NpemVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnRSZWN0KSB7XG4gICAgICAgICAgICAvLyBzZWUgbm90ZSBhYm92ZSBmb3Igd2h5IHRoaXMgYmxvY2sgaXMgbmVlZGVkXG4gICAgICAgICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGNvbnRlbnRSZWN0XG4gICAgICAgICAgICBuZXdXaWR0aCA9IHdpZHRoXG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRTaXplKHtcbiAgICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtlbGVtZW50XSlcblxuICByZXR1cm4ge1xuICAgIHNpemUsXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZXNpemUiLCJlbGVtZW50Iiwic2l6ZSIsInNldFNpemUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiY29udGVudEJveFNpemUiLCJjb250ZW50UmVjdCIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwibmV3U2l6ZSIsIkFycmF5IiwiaXNBcnJheSIsImJsb2NrU2l6ZSIsImlubGluZVNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9ic2VydmUiLCJ1bm9ic2VydmUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWFhQTs7O2VBQUFBOzs7dUJBWHVCO0FBVzdCLE1BQU1BLFlBQVksQ0FBQ0M7SUFDeEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdDLElBQUFBLGVBQVE7SUFFaENDLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJQyxRQUFjLHNCQUFzQjs7UUFFeEMsSUFBSUwsU0FBUztZQUNYSyxXQUFXLElBQUlDLGVBQWUsQ0FBQ0M7Z0JBQzdCQSxRQUFRQyxPQUFPLENBQUMsQ0FBQ0M7b0JBQ2YsTUFBTSxFQUNKQyxjQUFjLEVBQ2RDLFdBQVcsRUFDWixHQUFHRjtvQkFFSixJQUFJRyxXQUFXO29CQUNmLElBQUlDLFlBQVk7b0JBRWhCLElBQUlILGdCQUFnQjt3QkFDbEIsTUFBTUksVUFBVUMsTUFBTUMsT0FBTyxDQUFDTixrQkFBa0JBLGNBQWMsQ0FBQyxFQUFFLEdBQUdBO3dCQUVwRSxJQUFJSSxTQUFTOzRCQUNYLE1BQU0sRUFBRUcsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBR0o7NEJBQ2xDRixXQUFXTTs0QkFDWEwsWUFBWUk7d0JBQ2Q7b0JBQ0YsT0FBTyxJQUFJTixhQUFhO3dCQUN0Qiw4Q0FBOEM7d0JBQzlDLE1BQU0sRUFBRVEsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Q7d0JBQzFCQyxXQUFXUTt3QkFDWFAsWUFBWU07b0JBQ2Q7b0JBRUFqQixRQUFRO3dCQUNOaUIsUUFBUU47d0JBQ1JPLE9BQU9SO29CQUNUO2dCQUNGO1lBQ0Y7WUFFQVAsU0FBU2dCLE9BQU8sQ0FBQ3JCO1FBQ25CO1FBRUEsT0FBTztZQUNMLElBQUlLLFVBQVU7Z0JBQ1pBLFNBQVNpQixTQUFTLENBQUN0QjtZQUNyQjtRQUNGO0lBQ0YsR0FBRztRQUFDQTtLQUFRO0lBRVosT0FBTztRQUNMQztJQUNGO0FBQ0YifQ==