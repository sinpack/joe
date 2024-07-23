"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _Copy = /*#__PURE__*/ _interop_require_default(require("../../icons/Copy"));
const _Tooltip = /*#__PURE__*/ _interop_require_default(require("../Tooltip"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const baseClass = 'copy-to-clipboard';
const CopyToClipboard = ({ defaultMessage, successMessage, value })=>{
    const ref = (0, _react.useRef)(null);
    const [copied, setCopied] = (0, _react.useState)(false);
    const [hovered, setHovered] = (0, _react.useState)(false);
    const { t } = (0, _reacti18next.useTranslation)('general');
    if (value) {
        return /*#__PURE__*/ _react.default.createElement("button", {
            className: baseClass,
            onClick: ()=>{
                if (ref && ref.current) {
                    ref.current.select();
                    ref.current.setSelectionRange(0, value.length + 1);
                    document.execCommand('copy');
                    setCopied(true);
                }
            },
            onMouseEnter: ()=>{
                setHovered(true);
                setCopied(false);
            },
            onMouseLeave: ()=>{
                setHovered(false);
                setCopied(false);
            },
            type: "button"
        }, /*#__PURE__*/ _react.default.createElement(_Copy.default, null), /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
            delay: copied ? 0 : undefined,
            show: hovered || copied
        }, copied && (successMessage ?? t('copied')), !copied && (defaultMessage ?? t('copy'))), /*#__PURE__*/ _react.default.createElement("textarea", {
            readOnly: true,
            ref: ref,
            tabIndex: -1,
            value: value
        }));
    }
    return null;
};
const _default = CopyToClipboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvcHlUb0NsaXBib2FyZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBDb3B5IGZyb20gJy4uLy4uL2ljb25zL0NvcHknXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi9Ub29sdGlwJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb3B5LXRvLWNsaXBib2FyZCdcblxuY29uc3QgQ29weVRvQ2xpcGJvYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBkZWZhdWx0TWVzc2FnZSwgc3VjY2Vzc01lc3NhZ2UsIHZhbHVlIH0pID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuXG4gIGlmICh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHJlZiAmJiByZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuc2VsZWN0KClcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIHZhbHVlLmxlbmd0aCArIDEpXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG4gICAgICAgICAgICBzZXRDb3BpZWQodHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgIHNldEhvdmVyZWQodHJ1ZSlcbiAgICAgICAgICBzZXRDb3BpZWQoZmFsc2UpXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgIHNldEhvdmVyZWQoZmFsc2UpXG4gICAgICAgICAgc2V0Q29waWVkKGZhbHNlKVxuICAgICAgICB9fVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgPENvcHkgLz5cbiAgICAgICAgPFRvb2x0aXAgZGVsYXk9e2NvcGllZCA/IDAgOiB1bmRlZmluZWR9IHNob3c9e2hvdmVyZWQgfHwgY29waWVkfT5cbiAgICAgICAgICB7Y29waWVkICYmIChzdWNjZXNzTWVzc2FnZSA/PyB0KCdjb3BpZWQnKSl9XG4gICAgICAgICAgeyFjb3BpZWQgJiYgKGRlZmF1bHRNZXNzYWdlID8/IHQoJ2NvcHknKSl9XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPHRleHRhcmVhIHJlYWRPbmx5IHJlZj17cmVmfSB0YWJJbmRleD17LTF9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlUb0NsaXBib2FyZFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkNvcHlUb0NsaXBib2FyZCIsImRlZmF1bHRNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJ2YWx1ZSIsInJlZiIsInVzZVJlZiIsImNvcGllZCIsInNldENvcGllZCIsInVzZVN0YXRlIiwiaG92ZXJlZCIsInNldEhvdmVyZWQiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudCIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInR5cGUiLCJDb3B5IiwiVG9vbHRpcCIsImRlbGF5IiwidW5kZWZpbmVkIiwic2hvdyIsInRleHRhcmVhIiwicmVhZE9ubHkiLCJ0YWJJbmRleCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0RBOzs7ZUFBQTs7OytEQXBEd0M7OEJBQ1Q7NkRBSWQ7Z0VBQ0c7UUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLGtCQUFtQyxDQUFDLEVBQUVDLGNBQWMsRUFBRUMsY0FBYyxFQUFFQyxLQUFLLEVBQUU7SUFDakYsTUFBTUMsTUFBTUMsSUFBQUEsYUFBTSxFQUFDO0lBQ25CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHQyxJQUFBQSxlQUFRLEVBQUM7SUFDckMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdGLElBQUFBLGVBQVEsRUFBQztJQUN2QyxNQUFNLEVBQUVHLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLElBQUlULE9BQU87UUFDVCxxQkFDRSw2QkFBQ1U7WUFDQ0MsV0FBV2Y7WUFDWGdCLFNBQVM7Z0JBQ1AsSUFBSVgsT0FBT0EsSUFBSVksT0FBTyxFQUFFO29CQUN0QlosSUFBSVksT0FBTyxDQUFDQyxNQUFNO29CQUNsQmIsSUFBSVksT0FBTyxDQUFDRSxpQkFBaUIsQ0FBQyxHQUFHZixNQUFNZ0IsTUFBTSxHQUFHO29CQUNoREMsU0FBU0MsV0FBVyxDQUFDO29CQUNyQmQsVUFBVTtnQkFDWjtZQUNGO1lBQ0FlLGNBQWM7Z0JBQ1paLFdBQVc7Z0JBQ1hILFVBQVU7WUFDWjtZQUNBZ0IsY0FBYztnQkFDWmIsV0FBVztnQkFDWEgsVUFBVTtZQUNaO1lBQ0FpQixNQUFLO3lCQUVMLDZCQUFDQyxhQUFJLHVCQUNMLDZCQUFDQyxnQkFBTztZQUFDQyxPQUFPckIsU0FBUyxJQUFJc0I7WUFBV0MsTUFBTXBCLFdBQVdIO1dBQ3REQSxVQUFXSixDQUFBQSxrQkFBa0JTLEVBQUUsU0FBUSxHQUN2QyxDQUFDTCxVQUFXTCxDQUFBQSxrQkFBa0JVLEVBQUUsT0FBTSxrQkFFekMsNkJBQUNtQjtZQUFTQyxVQUFBQTtZQUFTM0IsS0FBS0E7WUFBSzRCLFVBQVUsQ0FBQztZQUFHN0IsT0FBT0E7O0lBR3hEO0lBRUEsT0FBTztBQUNUO01BRUEsV0FBZUgifQ==