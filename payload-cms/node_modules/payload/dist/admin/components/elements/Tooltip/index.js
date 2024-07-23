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
const _useIntersect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useIntersect"));
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
const Tooltip = (props)=>{
    const { alignCaret = 'center', boundingRef, children, className, delay = 350, show: showFromProps = true } = props;
    const [show, setShow] = _react.default.useState(showFromProps);
    const [position, setPosition] = _react.default.useState('top');
    const getTitleAttribute = (content)=>typeof content === 'string' ? content : '';
    const [ref, intersectionEntry] = (0, _useIntersect.default)({
        root: boundingRef?.current || null,
        rootMargin: '-145px 0px 0px 100px',
        threshold: 0
    });
    (0, _react.useEffect)(()=>{
        let timerId;
        // do not use the delay on transition-out
        if (delay && showFromProps) {
            timerId = setTimeout(()=>{
                setShow(showFromProps);
            }, delay);
        } else {
            setShow(showFromProps);
        }
        return ()=>{
            if (timerId) clearTimeout(timerId);
        };
    }, [
        showFromProps,
        delay
    ]);
    (0, _react.useEffect)(()=>{
        setPosition(intersectionEntry?.isIntersecting ? 'top' : 'bottom');
    }, [
        intersectionEntry
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("aside", {
        "aria-hidden": "true",
        className: [
            'tooltip',
            className,
            `tooltip--caret-${alignCaret}`,
            'tooltip--position-top'
        ].filter(Boolean).join(' '),
        ref: ref,
        title: getTitleAttribute(children)
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "tooltip-content"
    }, children)), /*#__PURE__*/ _react.default.createElement("aside", {
        className: [
            'tooltip',
            className,
            show && 'tooltip--show',
            `tooltip--caret-${alignCaret}`,
            `tooltip--position-${position}`
        ].filter(Boolean).join(' '),
        title: getTitleAttribute(children)
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "tooltip-content"
    }, children)));
};
const _default = Tooltip;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1Rvb2x0aXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB1c2VJbnRlcnNlY3QgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlSW50ZXJzZWN0J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IFRvb2x0aXA6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYWxpZ25DYXJldCA9ICdjZW50ZXInLFxuICAgIGJvdW5kaW5nUmVmLFxuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSxcbiAgICBkZWxheSA9IDM1MCxcbiAgICBzaG93OiBzaG93RnJvbVByb3BzID0gdHJ1ZSxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoc2hvd0Zyb21Qcm9wcylcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTwnYm90dG9tJyB8ICd0b3AnPigndG9wJylcblxuICBjb25zdCBnZXRUaXRsZUF0dHJpYnV0ZSA9IChjb250ZW50KSA9PiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnID8gY29udGVudCA6ICcnKVxuXG4gIGNvbnN0IFtyZWYsIGludGVyc2VjdGlvbkVudHJ5XSA9IHVzZUludGVyc2VjdCh7XG4gICAgcm9vdDogYm91bmRpbmdSZWY/LmN1cnJlbnQgfHwgbnVsbCxcbiAgICByb290TWFyZ2luOiAnLTE0NXB4IDBweCAwcHggMTAwcHgnLFxuICAgIHRocmVzaG9sZDogMCxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcklkOiBOb2RlSlMuVGltZW91dFxuXG4gICAgLy8gZG8gbm90IHVzZSB0aGUgZGVsYXkgb24gdHJhbnNpdGlvbi1vdXRcbiAgICBpZiAoZGVsYXkgJiYgc2hvd0Zyb21Qcm9wcykge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaG93KHNob3dGcm9tUHJvcHMpXG4gICAgICB9LCBkZWxheSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2hvdyhzaG93RnJvbVByb3BzKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodGltZXJJZCkgY2xlYXJUaW1lb3V0KHRpbWVySWQpXG4gICAgfVxuICB9LCBbc2hvd0Zyb21Qcm9wcywgZGVsYXldKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UG9zaXRpb24oaW50ZXJzZWN0aW9uRW50cnk/LmlzSW50ZXJzZWN0aW5nID8gJ3RvcCcgOiAnYm90dG9tJylcbiAgfSwgW2ludGVyc2VjdGlvbkVudHJ5XSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxhc2lkZVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBjbGFzc05hbWU9e1sndG9vbHRpcCcsIGNsYXNzTmFtZSwgYHRvb2x0aXAtLWNhcmV0LSR7YWxpZ25DYXJldH1gLCAndG9vbHRpcC0tcG9zaXRpb24tdG9wJ11cbiAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHRpdGxlPXtnZXRUaXRsZUF0dHJpYnV0ZShjaGlsZHJlbil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9hc2lkZT5cblxuICAgICAgPGFzaWRlXG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICd0b29sdGlwJyxcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgc2hvdyAmJiAndG9vbHRpcC0tc2hvdycsXG4gICAgICAgICAgYHRvb2x0aXAtLWNhcmV0LSR7YWxpZ25DYXJldH1gLFxuICAgICAgICAgIGB0b29sdGlwLS1wb3NpdGlvbi0ke3Bvc2l0aW9ufWAsXG4gICAgICAgIF1cbiAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgICAgdGl0bGU9e2dldFRpdGxlQXR0cmlidXRlKGNoaWxkcmVuKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLWNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIl0sIm5hbWVzIjpbIlRvb2x0aXAiLCJwcm9wcyIsImFsaWduQ2FyZXQiLCJib3VuZGluZ1JlZiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGVsYXkiLCJzaG93Iiwic2hvd0Zyb21Qcm9wcyIsInNldFNob3ciLCJSZWFjdCIsInVzZVN0YXRlIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImdldFRpdGxlQXR0cmlidXRlIiwiY29udGVudCIsInJlZiIsImludGVyc2VjdGlvbkVudHJ5IiwidXNlSW50ZXJzZWN0Iiwicm9vdCIsImN1cnJlbnQiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwidXNlRWZmZWN0IiwidGltZXJJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpc0ludGVyc2VjdGluZyIsIkZyYWdtZW50IiwiYXNpZGUiLCJhcmlhLWhpZGRlbiIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwidGl0bGUiLCJkaXYiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0ZBOzs7ZUFBQTs7OytEQWhGaUM7cUVBSVI7UUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsVUFBMkIsQ0FBQ0M7SUFDaEMsTUFBTSxFQUNKQyxhQUFhLFFBQVEsRUFDckJDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLFFBQVEsR0FBRyxFQUNYQyxNQUFNQyxnQkFBZ0IsSUFBSSxFQUMzQixHQUFHUDtJQUVKLE1BQU0sQ0FBQ00sTUFBTUUsUUFBUSxHQUFHQyxjQUFLLENBQUNDLFFBQVEsQ0FBQ0g7SUFDdkMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdILGNBQUssQ0FBQ0MsUUFBUSxDQUFtQjtJQUVqRSxNQUFNRyxvQkFBb0IsQ0FBQ0MsVUFBYSxPQUFPQSxZQUFZLFdBQVdBLFVBQVU7SUFFaEYsTUFBTSxDQUFDQyxLQUFLQyxrQkFBa0IsR0FBR0MsSUFBQUEscUJBQVksRUFBQztRQUM1Q0MsTUFBTWhCLGFBQWFpQixXQUFXO1FBQzlCQyxZQUFZO1FBQ1pDLFdBQVc7SUFDYjtJQUVBQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSUM7UUFFSix5Q0FBeUM7UUFDekMsSUFBSWxCLFNBQVNFLGVBQWU7WUFDMUJnQixVQUFVQyxXQUFXO2dCQUNuQmhCLFFBQVFEO1lBQ1YsR0FBR0Y7UUFDTCxPQUFPO1lBQ0xHLFFBQVFEO1FBQ1Y7UUFFQSxPQUFPO1lBQ0wsSUFBSWdCLFNBQVNFLGFBQWFGO1FBQzVCO0lBQ0YsR0FBRztRQUFDaEI7UUFBZUY7S0FBTTtJQUV6QmlCLElBQUFBLGdCQUFTLEVBQUM7UUFDUlYsWUFBWUksbUJBQW1CVSxpQkFBaUIsUUFBUTtJQUMxRCxHQUFHO1FBQUNWO0tBQWtCO0lBRXRCLHFCQUNFLDZCQUFDUCxjQUFLLENBQUNrQixRQUFRLHNCQUNiLDZCQUFDQztRQUNDQyxlQUFZO1FBQ1p6QixXQUFXO1lBQUM7WUFBV0E7WUFBVyxDQUFDLGVBQWUsRUFBRUgsV0FBVyxDQUFDO1lBQUU7U0FBd0IsQ0FDdkY2QixNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztRQUNSakIsS0FBS0E7UUFDTGtCLE9BQU9wQixrQkFBa0JWO3FCQUV6Qiw2QkFBQytCO1FBQUk5QixXQUFVO09BQW1CRCwwQkFHcEMsNkJBQUN5QjtRQUNDeEIsV0FBVztZQUNUO1lBQ0FBO1lBQ0FFLFFBQVE7WUFDUixDQUFDLGVBQWUsRUFBRUwsV0FBVyxDQUFDO1lBQzlCLENBQUMsa0JBQWtCLEVBQUVVLFNBQVMsQ0FBQztTQUNoQyxDQUNFbUIsTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7UUFDUkMsT0FBT3BCLGtCQUFrQlY7cUJBRXpCLDZCQUFDK0I7UUFBSTlCLFdBQVU7T0FBbUJEO0FBSTFDO01BRUEsV0FBZUoifQ==