"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DocumentTabs", {
    enumerable: true,
    get: function() {
        return DocumentTabs;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _Tab = require("./Tab");
const _getCustomViews = require("./getCustomViews");
const _getViewConfig = require("./getViewConfig");
require("./index.scss");
const _tabs = require("./tabs");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'doc-tabs';
const DocumentTabs = (props)=>{
    const { collection, global, isEditing } = props;
    const customViews = (0, _getCustomViews.getCustomViews)({
        collection,
        global
    });
    // Don't show tabs when creating new documents
    if (collection && isEditing || global) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: baseClass
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__tabs-container`
        }, /*#__PURE__*/ _react.default.createElement("ul", {
            className: `${baseClass}__tabs`
        }, Object.entries(_tabs.tabs)?.sort(([, a], [, b])=>{
            if (a.order === undefined && b.order === undefined) return 0;
            else if (a.order === undefined) return 1;
            else if (b.order === undefined) return -1;
            return a.order - b.order;
        })?.map(([name, Tab], index)=>{
            const viewConfig = (0, _getViewConfig.getViewConfig)({
                name,
                collection,
                global
            });
            const tabOverrides = viewConfig && 'Tab' in viewConfig ? viewConfig.Tab : undefined;
            return /*#__PURE__*/ _react.default.createElement(_Tab.DocumentTab, {
                ...props,
                ...Tab || {},
                ...tabOverrides || {},
                key: `tab-${index}`
            });
        }), customViews?.map((CustomView, index)=>{
            if ('Tab' in CustomView) {
                const { Tab, path } = CustomView;
                if (typeof Tab === 'function') {
                    return /*#__PURE__*/ _react.default.createElement(Tab, {
                        path: path,
                        ...props,
                        key: `tab-custom-${index}`
                    });
                }
                return /*#__PURE__*/ _react.default.createElement(_Tab.DocumentTab, {
                    ...props,
                    ...Tab,
                    key: `tab-custom-${index}`
                });
            }
            return null;
        }))));
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50SGVhZGVyL1RhYnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBEb2N1bWVudFRhYlByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgRG9jdW1lbnRUYWIgfSBmcm9tICcuL1RhYidcbmltcG9ydCB7IGdldEN1c3RvbVZpZXdzIH0gZnJvbSAnLi9nZXRDdXN0b21WaWV3cydcbmltcG9ydCB7IGdldFZpZXdDb25maWcgfSBmcm9tICcuL2dldFZpZXdDb25maWcnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcbmltcG9ydCB7IHRhYnMgYXMgZGVmYXVsdFZpZXdzIH0gZnJvbSAnLi90YWJzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZG9jLXRhYnMnXG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudFRhYnM6IFJlYWN0LkZDPERvY3VtZW50VGFiUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbiwgZ2xvYmFsLCBpc0VkaXRpbmcgfSA9IHByb3BzXG4gIGNvbnN0IGN1c3RvbVZpZXdzID0gZ2V0Q3VzdG9tVmlld3MoeyBjb2xsZWN0aW9uLCBnbG9iYWwgfSlcblxuICAvLyBEb24ndCBzaG93IHRhYnMgd2hlbiBjcmVhdGluZyBuZXcgZG9jdW1lbnRzXG4gIGlmICgoY29sbGVjdGlvbiAmJiBpc0VkaXRpbmcpIHx8IGdsb2JhbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RhYnMtY29udGFpbmVyYH0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGFic2B9PlxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGRlZmF1bHRWaWV3cylcbiAgICAgICAgICAgICAgLy8gc29ydCBgZGVmYXVsdFZpZXdzYCBiYXNlZCBvbiBgb3JkZXJgIHByb3BlcnR5IGZyb20gc21hbGxlc3QgdG8gbGFyZ2VzdFxuICAgICAgICAgICAgICAvLyBpZiBubyBgb3JkZXJgLCBhcHBlbmQgdGhlIHZpZXcgdG8gdGhlIGVuZFxuICAgICAgICAgICAgICAvLyBUT0RPOiBvcGVuIGBvcmRlcmAgdG8gdGhlIGNvbmZpZyBhbmQgbWVyZ2UgYGRlZmF1bHRWaWV3c2Agd2l0aCBgY3VzdG9tVmlld3NgXG4gICAgICAgICAgICAgID8uc29ydCgoWywgYV0sIFssIGJdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEub3JkZXIgPT09IHVuZGVmaW5lZCAmJiBiLm9yZGVyID09PSB1bmRlZmluZWQpIHJldHVybiAwXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYS5vcmRlciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGIub3JkZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIC0xXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgID8ubWFwKChbbmFtZSwgVGFiXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3Q29uZmlnID0gZ2V0Vmlld0NvbmZpZyh7IG5hbWUsIGNvbGxlY3Rpb24sIGdsb2JhbCB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYk92ZXJyaWRlcyA9IHZpZXdDb25maWcgJiYgJ1RhYicgaW4gdmlld0NvbmZpZyA/IHZpZXdDb25maWcuVGFiIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPERvY3VtZW50VGFiXG4gICAgICAgICAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgLi4uKFRhYiB8fCB7fSksXG4gICAgICAgICAgICAgICAgICAgICAgLi4uKHRhYk92ZXJyaWRlcyB8fCB7fSksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17YHRhYi0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB7Y3VzdG9tVmlld3M/Lm1hcCgoQ3VzdG9tVmlldywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCdUYWInIGluIEN1c3RvbVZpZXcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IFRhYiwgcGF0aCB9ID0gQ3VzdG9tVmlld1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBUYWIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFiIHBhdGg9e3BhdGh9IHsuLi5wcm9wc30ga2V5PXtgdGFiLWN1c3RvbS0ke2luZGV4fWB9IC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxEb2N1bWVudFRhYlxuICAgICAgICAgICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLlRhYixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtgdGFiLWN1c3RvbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50VGFicyIsImJhc2VDbGFzcyIsInByb3BzIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsImlzRWRpdGluZyIsImN1c3RvbVZpZXdzIiwiZ2V0Q3VzdG9tVmlld3MiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIk9iamVjdCIsImVudHJpZXMiLCJkZWZhdWx0Vmlld3MiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInVuZGVmaW5lZCIsIm1hcCIsIm5hbWUiLCJUYWIiLCJpbmRleCIsInZpZXdDb25maWciLCJnZXRWaWV3Q29uZmlnIiwidGFiT3ZlcnJpZGVzIiwiRG9jdW1lbnRUYWIiLCJrZXkiLCJDdXN0b21WaWV3IiwicGF0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFZYUE7OztlQUFBQTs7OzhEQVpLO3FCQUlVO2dDQUNHOytCQUNEO1FBQ3ZCO3NCQUM4Qjs7Ozs7O0FBRXJDLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxlQUEyQyxDQUFDRTtJQUN2RCxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0g7SUFDMUMsTUFBTUksY0FBY0MsSUFBQUEsOEJBQWMsRUFBQztRQUFFSjtRQUFZQztJQUFPO0lBRXhELDhDQUE4QztJQUM5QyxJQUFJLEFBQUNELGNBQWNFLGFBQWNELFFBQVE7UUFDdkMscUJBQ0UsNkJBQUNJO1lBQUlDLFdBQVdSO3lCQUNkLDZCQUFDTztZQUFJQyxXQUFXLENBQUMsRUFBRVIsVUFBVSxnQkFBZ0IsQ0FBQzt5QkFDNUMsNkJBQUNTO1lBQUdELFdBQVcsQ0FBQyxFQUFFUixVQUFVLE1BQU0sQ0FBQztXQUNoQ1UsT0FBT0MsT0FBTyxDQUFDQyxVQUFZLEdBSXhCQyxLQUFLLENBQUMsR0FBR0MsRUFBRSxFQUFFLEdBQUdDLEVBQUU7WUFDbEIsSUFBSUQsRUFBRUUsS0FBSyxLQUFLQyxhQUFhRixFQUFFQyxLQUFLLEtBQUtDLFdBQVcsT0FBTztpQkFDdEQsSUFBSUgsRUFBRUUsS0FBSyxLQUFLQyxXQUFXLE9BQU87aUJBQ2xDLElBQUlGLEVBQUVDLEtBQUssS0FBS0MsV0FBVyxPQUFPLENBQUM7WUFDeEMsT0FBT0gsRUFBRUUsS0FBSyxHQUFHRCxFQUFFQyxLQUFLO1FBQzFCLElBQ0VFLElBQUksQ0FBQyxDQUFDQyxNQUFNQyxJQUFJLEVBQUVDO1lBQ2xCLE1BQU1DLGFBQWFDLElBQUFBLDRCQUFhLEVBQUM7Z0JBQUVKO2dCQUFNakI7Z0JBQVlDO1lBQU87WUFDNUQsTUFBTXFCLGVBQWVGLGNBQWMsU0FBU0EsYUFBYUEsV0FBV0YsR0FBRyxHQUFHSDtZQUUxRSxxQkFDRSw2QkFBQ1EsZ0JBQVc7Z0JBRVIsR0FBR3hCLEtBQUs7Z0JBQ1IsR0FBSW1CLE9BQU8sQ0FBQyxDQUFDO2dCQUNiLEdBQUlJLGdCQUFnQixDQUFDLENBQUM7Z0JBRXhCRSxLQUFLLENBQUMsSUFBSSxFQUFFTCxNQUFNLENBQUM7O1FBR3pCLElBQ0RoQixhQUFhYSxJQUFJLENBQUNTLFlBQVlOO1lBQzdCLElBQUksU0FBU00sWUFBWTtnQkFDdkIsTUFBTSxFQUFFUCxHQUFHLEVBQUVRLElBQUksRUFBRSxHQUFHRDtnQkFFdEIsSUFBSSxPQUFPUCxRQUFRLFlBQVk7b0JBQzdCLHFCQUFPLDZCQUFDQTt3QkFBSVEsTUFBTUE7d0JBQU8sR0FBRzNCLEtBQUs7d0JBQUV5QixLQUFLLENBQUMsV0FBVyxFQUFFTCxNQUFNLENBQUM7O2dCQUMvRDtnQkFFQSxxQkFDRSw2QkFBQ0ksZ0JBQVc7b0JBRVIsR0FBR3hCLEtBQUs7b0JBQ1IsR0FBR21CLEdBQUc7b0JBRVJNLEtBQUssQ0FBQyxXQUFXLEVBQUVMLE1BQU0sQ0FBQzs7WUFHaEM7WUFDQSxPQUFPO1FBQ1Q7SUFLVjtJQUVBLE9BQU87QUFDVCJ9