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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _context = require("../Context/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const DeviceContainer = (props)=>{
    const { children } = props;
    const { breakpoint, breakpoints, size, zoom } = (0, _context.useLivePreviewContext)();
    const foundBreakpoint = breakpoint && breakpoints?.find((bp)=>bp.name === breakpoint);
    let x = '0';
    let margin = '0';
    if (foundBreakpoint && breakpoint !== 'responsive') {
        x = '-50%';
        if (typeof zoom === 'number' && typeof size.width === 'number' && typeof size.height === 'number') {
            const scaledWidth = size.width / zoom;
            const difference = scaledWidth - size.width;
            x = `${difference / 2}px`;
            margin = '0 auto';
        }
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        style: {
            height: foundBreakpoint && foundBreakpoint?.name !== 'responsive' ? `${size?.height / (typeof zoom === 'number' ? zoom : 1)}px` : typeof zoom === 'number' ? `${100 / zoom}%` : '100%',
            margin,
            transform: `translate3d(${x}, 0, 0)`,
            width: foundBreakpoint && foundBreakpoint?.name !== 'responsive' ? `${size?.width / (typeof zoom === 'number' ? zoom : 1)}px` : typeof zoom === 'number' ? `${100 / zoom}%` : '100%'
        }
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L0RldmljZUNvbnRhaW5lci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VMaXZlUHJldmlld0NvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0L2NvbnRleHQnXG5cbmV4cG9ydCBjb25zdCBEZXZpY2VDb250YWluZXI6IFJlYWN0LkZDPHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHNcblxuICBjb25zdCB7IGJyZWFrcG9pbnQsIGJyZWFrcG9pbnRzLCBzaXplLCB6b29tIH0gPSB1c2VMaXZlUHJldmlld0NvbnRleHQoKVxuXG4gIGNvbnN0IGZvdW5kQnJlYWtwb2ludCA9IGJyZWFrcG9pbnQgJiYgYnJlYWtwb2ludHM/LmZpbmQoKGJwKSA9PiBicC5uYW1lID09PSBicmVha3BvaW50KVxuXG4gIGxldCB4ID0gJzAnXG4gIGxldCBtYXJnaW4gPSAnMCdcblxuICBpZiAoZm91bmRCcmVha3BvaW50ICYmIGJyZWFrcG9pbnQgIT09ICdyZXNwb25zaXZlJykge1xuICAgIHggPSAnLTUwJSdcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiB6b29tID09PSAnbnVtYmVyJyAmJlxuICAgICAgdHlwZW9mIHNpemUud2lkdGggPT09ICdudW1iZXInICYmXG4gICAgICB0eXBlb2Ygc2l6ZS5oZWlnaHQgPT09ICdudW1iZXInXG4gICAgKSB7XG4gICAgICBjb25zdCBzY2FsZWRXaWR0aCA9IHNpemUud2lkdGggLyB6b29tXG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gc2NhbGVkV2lkdGggLSBzaXplLndpZHRoXG4gICAgICB4ID0gYCR7ZGlmZmVyZW5jZSAvIDJ9cHhgXG4gICAgICBtYXJnaW4gPSAnMCBhdXRvJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgIGZvdW5kQnJlYWtwb2ludCAmJiBmb3VuZEJyZWFrcG9pbnQ/Lm5hbWUgIT09ICdyZXNwb25zaXZlJ1xuICAgICAgICAgICAgPyBgJHtzaXplPy5oZWlnaHQgLyAodHlwZW9mIHpvb20gPT09ICdudW1iZXInID8gem9vbSA6IDEpfXB4YFxuICAgICAgICAgICAgOiB0eXBlb2Ygem9vbSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gYCR7MTAwIC8gem9vbX0lYFxuICAgICAgICAgICAgOiAnMTAwJScsXG4gICAgICAgIG1hcmdpbixcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt4fSwgMCwgMClgLFxuICAgICAgICB3aWR0aDpcbiAgICAgICAgICBmb3VuZEJyZWFrcG9pbnQgJiYgZm91bmRCcmVha3BvaW50Py5uYW1lICE9PSAncmVzcG9uc2l2ZSdcbiAgICAgICAgICAgID8gYCR7c2l6ZT8ud2lkdGggLyAodHlwZW9mIHpvb20gPT09ICdudW1iZXInID8gem9vbSA6IDEpfXB4YFxuICAgICAgICAgICAgOiB0eXBlb2Ygem9vbSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gYCR7MTAwIC8gem9vbX0lYFxuICAgICAgICAgICAgOiAnMTAwJScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkRldmljZUNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iLCJicmVha3BvaW50IiwiYnJlYWtwb2ludHMiLCJzaXplIiwiem9vbSIsInVzZUxpdmVQcmV2aWV3Q29udGV4dCIsImZvdW5kQnJlYWtwb2ludCIsImZpbmQiLCJicCIsIm5hbWUiLCJ4IiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZWRXaWR0aCIsImRpZmZlcmVuY2UiLCJkaXYiLCJzdHlsZSIsInRyYW5zZm9ybSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUlhQTs7O2VBQUFBOzs7OERBSks7eUJBRW9COzs7Ozs7QUFFL0IsTUFBTUEsa0JBRVIsQ0FBQ0M7SUFDSixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRDtJQUVyQixNQUFNLEVBQUVFLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSw4QkFBcUI7SUFFckUsTUFBTUMsa0JBQWtCTCxjQUFjQyxhQUFhSyxLQUFLLENBQUNDLEtBQU9BLEdBQUdDLElBQUksS0FBS1I7SUFFNUUsSUFBSVMsSUFBSTtJQUNSLElBQUlDLFNBQVM7SUFFYixJQUFJTCxtQkFBbUJMLGVBQWUsY0FBYztRQUNsRFMsSUFBSTtRQUVKLElBQ0UsT0FBT04sU0FBUyxZQUNoQixPQUFPRCxLQUFLUyxLQUFLLEtBQUssWUFDdEIsT0FBT1QsS0FBS1UsTUFBTSxLQUFLLFVBQ3ZCO1lBQ0EsTUFBTUMsY0FBY1gsS0FBS1MsS0FBSyxHQUFHUjtZQUNqQyxNQUFNVyxhQUFhRCxjQUFjWCxLQUFLUyxLQUFLO1lBQzNDRixJQUFJLENBQUMsRUFBRUssYUFBYSxFQUFFLEVBQUUsQ0FBQztZQUN6QkosU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw2QkFBQ0s7UUFDQ0MsT0FBTztZQUNMSixRQUNFUCxtQkFBbUJBLGlCQUFpQkcsU0FBUyxlQUN6QyxDQUFDLEVBQUVOLE1BQU1VLFNBQVUsQ0FBQSxPQUFPVCxTQUFTLFdBQVdBLE9BQU8sQ0FBQSxFQUFHLEVBQUUsQ0FBQyxHQUMzRCxPQUFPQSxTQUFTLFdBQ2hCLENBQUMsRUFBRSxNQUFNQSxLQUFLLENBQUMsQ0FBQyxHQUNoQjtZQUNOTztZQUNBTyxXQUFXLENBQUMsWUFBWSxFQUFFUixFQUFFLE9BQU8sQ0FBQztZQUNwQ0UsT0FDRU4sbUJBQW1CQSxpQkFBaUJHLFNBQVMsZUFDekMsQ0FBQyxFQUFFTixNQUFNUyxRQUFTLENBQUEsT0FBT1IsU0FBUyxXQUFXQSxPQUFPLENBQUEsRUFBRyxFQUFFLENBQUMsR0FDMUQsT0FBT0EsU0FBUyxXQUNoQixDQUFDLEVBQUUsTUFBTUEsS0FBSyxDQUFDLENBQUMsR0FDaEI7UUFDUjtPQUVDSjtBQUdQIn0=