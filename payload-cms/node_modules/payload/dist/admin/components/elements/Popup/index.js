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
const _windowinfo = require("@faceless-ui/window-info");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _useIntersect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useIntersect"));
const _PopupTrigger = require("./PopupTrigger");
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
const baseClass = 'popup';
const Popup = (props)=>{
    const { boundingRef, button, buttonClassName, buttonType = 'default', caret = true, children, className, forceOpen, horizontalAlign: horizontalAlignFromProps = 'left', initActive = false, onToggleOpen, render, showOnHover = false, showScrollbar = false, size = 'medium', verticalAlign: verticalAlignFromProps = 'top' } = props;
    const { height: windowHeight, width: windowWidth } = (0, _windowinfo.useWindowInfo)();
    const [intersectionRef, intersectionEntry] = (0, _useIntersect.default)({
        root: boundingRef?.current || null,
        rootMargin: '-100px 0px 0px 0px',
        threshold: 1
    });
    const contentRef = (0, _react.useRef)(null);
    const [active, setActive] = (0, _react.useState)(initActive);
    const [verticalAlign, setVerticalAlign] = (0, _react.useState)(verticalAlignFromProps);
    const [horizontalAlign, setHorizontalAlign] = (0, _react.useState)(horizontalAlignFromProps);
    const setPosition = (0, _react.useCallback)(({ horizontal = false, vertical = false })=>{
        if (contentRef.current) {
            const bounds = contentRef.current.getBoundingClientRect();
            const { bottom: contentBottomPos, left: contentLeftPos, right: contentRightPos, top: contentTopPos } = bounds;
            let boundingTopPos = 100;
            let boundingRightPos = document.documentElement.clientWidth;
            let boundingBottomPos = document.documentElement.clientHeight;
            let boundingLeftPos = 0;
            if (boundingRef?.current) {
                ({ bottom: boundingBottomPos, left: boundingLeftPos, right: boundingRightPos, top: boundingTopPos } = boundingRef.current.getBoundingClientRect());
            }
            if (horizontal) {
                if (contentRightPos > boundingRightPos && contentLeftPos > boundingLeftPos) {
                    setHorizontalAlign('right');
                } else if (contentLeftPos < boundingLeftPos && contentRightPos < boundingRightPos) {
                    setHorizontalAlign('left');
                }
            }
            if (vertical) {
                if (contentTopPos < boundingTopPos && contentBottomPos < boundingBottomPos) {
                    setVerticalAlign('bottom');
                } else if (contentBottomPos > boundingBottomPos && contentTopPos > boundingTopPos) {
                    setVerticalAlign('top');
                }
            }
        }
    }, [
        boundingRef
    ]);
    const handleClickOutside = (0, _react.useCallback)((e)=>{
        if (contentRef.current.contains(e.target)) {
            return;
        }
        setActive(false);
    }, [
        contentRef
    ]);
    (0, _react.useEffect)(()=>{
        setPosition({
            horizontal: true
        });
    }, [
        intersectionEntry,
        setPosition,
        windowWidth
    ]);
    (0, _react.useEffect)(()=>{
        setPosition({
            vertical: true
        });
    }, [
        intersectionEntry,
        setPosition,
        windowHeight
    ]);
    (0, _react.useEffect)(()=>{
        if (typeof onToggleOpen === 'function') onToggleOpen(active);
        if (active) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        active,
        handleClickOutside,
        onToggleOpen
    ]);
    (0, _react.useEffect)(()=>{
        setActive(forceOpen);
    }, [
        forceOpen
    ]);
    const classes = [
        baseClass,
        className,
        `${baseClass}--size-${size}`,
        `${baseClass}--v-align-${verticalAlign}`,
        `${baseClass}--h-align-${horizontalAlign}`,
        active && `${baseClass}--active`,
        showScrollbar && `${baseClass}--show-scrollbar`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__trigger-wrap`
    }, showOnHover ? /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__on-hover-watch`,
        onMouseEnter: ()=>setActive(true),
        onMouseLeave: ()=>setActive(false)
    }, /*#__PURE__*/ _react.default.createElement(_PopupTrigger.PopupTrigger, {
        active,
        button,
        buttonType,
        className: buttonClassName,
        setActive
    })) : /*#__PURE__*/ _react.default.createElement(_PopupTrigger.PopupTrigger, {
        active,
        button,
        buttonType,
        className: buttonClassName,
        setActive
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__content`,
        ref: contentRef
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__hide-scrollbar`,
        ref: intersectionRef
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__scroll-container`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__scroll-content`
    }, render && render({
        close: ()=>setActive(false)
    }), children && children))), caret && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__caret`
    })));
};
const _default = Popup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BvcHVwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXaW5kb3dJbmZvIH0gZnJvbSAnQGZhY2VsZXNzLXVpL3dpbmRvdy1pbmZvJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB1c2VJbnRlcnNlY3QgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlSW50ZXJzZWN0J1xuaW1wb3J0IHsgUG9wdXBUcmlnZ2VyIH0gZnJvbSAnLi9Qb3B1cFRyaWdnZXInXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BvcHVwJ1xuXG5jb25zdCBQb3B1cDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBib3VuZGluZ1JlZixcbiAgICBidXR0b24sXG4gICAgYnV0dG9uQ2xhc3NOYW1lLFxuICAgIGJ1dHRvblR5cGUgPSAnZGVmYXVsdCcsXG4gICAgY2FyZXQgPSB0cnVlLFxuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSxcbiAgICBmb3JjZU9wZW4sXG4gICAgaG9yaXpvbnRhbEFsaWduOiBob3Jpem9udGFsQWxpZ25Gcm9tUHJvcHMgPSAnbGVmdCcsXG4gICAgaW5pdEFjdGl2ZSA9IGZhbHNlLFxuICAgIG9uVG9nZ2xlT3BlbixcbiAgICByZW5kZXIsXG4gICAgc2hvd09uSG92ZXIgPSBmYWxzZSxcbiAgICBzaG93U2Nyb2xsYmFyID0gZmFsc2UsXG4gICAgc2l6ZSA9ICdtZWRpdW0nLFxuICAgIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ25Gcm9tUHJvcHMgPSAndG9wJyxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBoZWlnaHQ6IHdpbmRvd0hlaWdodCwgd2lkdGg6IHdpbmRvd1dpZHRoIH0gPSB1c2VXaW5kb3dJbmZvKClcbiAgY29uc3QgW2ludGVyc2VjdGlvblJlZiwgaW50ZXJzZWN0aW9uRW50cnldID0gdXNlSW50ZXJzZWN0KHtcbiAgICByb290OiBib3VuZGluZ1JlZj8uY3VycmVudCB8fCBudWxsLFxuICAgIHJvb3RNYXJnaW46ICctMTAwcHggMHB4IDBweCAwcHgnLFxuICAgIHRocmVzaG9sZDogMSxcbiAgfSlcblxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShpbml0QWN0aXZlKVxuICBjb25zdCBbdmVydGljYWxBbGlnbiwgc2V0VmVydGljYWxBbGlnbl0gPSB1c2VTdGF0ZSh2ZXJ0aWNhbEFsaWduRnJvbVByb3BzKVxuICBjb25zdCBbaG9yaXpvbnRhbEFsaWduLCBzZXRIb3Jpem9udGFsQWxpZ25dID0gdXNlU3RhdGUoaG9yaXpvbnRhbEFsaWduRnJvbVByb3BzKVxuXG4gIGNvbnN0IHNldFBvc2l0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgaG9yaXpvbnRhbCA9IGZhbHNlLCB2ZXJ0aWNhbCA9IGZhbHNlIH0pID0+IHtcbiAgICAgIGlmIChjb250ZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgYm91bmRzID0gY29udGVudFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGJvdHRvbTogY29udGVudEJvdHRvbVBvcyxcbiAgICAgICAgICBsZWZ0OiBjb250ZW50TGVmdFBvcyxcbiAgICAgICAgICByaWdodDogY29udGVudFJpZ2h0UG9zLFxuICAgICAgICAgIHRvcDogY29udGVudFRvcFBvcyxcbiAgICAgICAgfSA9IGJvdW5kc1xuXG4gICAgICAgIGxldCBib3VuZGluZ1RvcFBvcyA9IDEwMFxuICAgICAgICBsZXQgYm91bmRpbmdSaWdodFBvcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICBsZXQgYm91bmRpbmdCb3R0b21Qb3MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgIGxldCBib3VuZGluZ0xlZnRQb3MgPSAwXG5cbiAgICAgICAgaWYgKGJvdW5kaW5nUmVmPy5jdXJyZW50KSB7XG4gICAgICAgICAgOyh7XG4gICAgICAgICAgICBib3R0b206IGJvdW5kaW5nQm90dG9tUG9zLFxuICAgICAgICAgICAgbGVmdDogYm91bmRpbmdMZWZ0UG9zLFxuICAgICAgICAgICAgcmlnaHQ6IGJvdW5kaW5nUmlnaHRQb3MsXG4gICAgICAgICAgICB0b3A6IGJvdW5kaW5nVG9wUG9zLFxuICAgICAgICAgIH0gPSBib3VuZGluZ1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAoY29udGVudFJpZ2h0UG9zID4gYm91bmRpbmdSaWdodFBvcyAmJiBjb250ZW50TGVmdFBvcyA+IGJvdW5kaW5nTGVmdFBvcykge1xuICAgICAgICAgICAgc2V0SG9yaXpvbnRhbEFsaWduKCdyaWdodCcpXG4gICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50TGVmdFBvcyA8IGJvdW5kaW5nTGVmdFBvcyAmJiBjb250ZW50UmlnaHRQb3MgPCBib3VuZGluZ1JpZ2h0UG9zKSB7XG4gICAgICAgICAgICBzZXRIb3Jpem9udGFsQWxpZ24oJ2xlZnQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgIGlmIChjb250ZW50VG9wUG9zIDwgYm91bmRpbmdUb3BQb3MgJiYgY29udGVudEJvdHRvbVBvcyA8IGJvdW5kaW5nQm90dG9tUG9zKSB7XG4gICAgICAgICAgICBzZXRWZXJ0aWNhbEFsaWduKCdib3R0b20nKVxuICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudEJvdHRvbVBvcyA+IGJvdW5kaW5nQm90dG9tUG9zICYmIGNvbnRlbnRUb3BQb3MgPiBib3VuZGluZ1RvcFBvcykge1xuICAgICAgICAgICAgc2V0VmVydGljYWxBbGlnbigndG9wJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtib3VuZGluZ1JlZl0sXG4gIClcblxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKGNvbnRlbnRSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHNldEFjdGl2ZShmYWxzZSlcbiAgICB9LFxuICAgIFtjb250ZW50UmVmXSxcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UG9zaXRpb24oeyBob3Jpem9udGFsOiB0cnVlIH0pXG4gIH0sIFtpbnRlcnNlY3Rpb25FbnRyeSwgc2V0UG9zaXRpb24sIHdpbmRvd1dpZHRoXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKHsgdmVydGljYWw6IHRydWUgfSlcbiAgfSwgW2ludGVyc2VjdGlvbkVudHJ5LCBzZXRQb3NpdGlvbiwgd2luZG93SGVpZ2h0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb25Ub2dnbGVPcGVuID09PSAnZnVuY3Rpb24nKSBvblRvZ2dsZU9wZW4oYWN0aXZlKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSlcbiAgICB9XG4gIH0sIFthY3RpdmUsIGhhbmRsZUNsaWNrT3V0c2lkZSwgb25Ub2dnbGVPcGVuXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFjdGl2ZShmb3JjZU9wZW4pXG4gIH0sIFtmb3JjZU9wZW5dKVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtiYXNlQ2xhc3N9LS1zaXplLSR7c2l6ZX1gLFxuICAgIGAke2Jhc2VDbGFzc30tLXYtYWxpZ24tJHt2ZXJ0aWNhbEFsaWdufWAsXG4gICAgYCR7YmFzZUNsYXNzfS0taC1hbGlnbi0ke2hvcml6b250YWxBbGlnbn1gLFxuICAgIGFjdGl2ZSAmJiBgJHtiYXNlQ2xhc3N9LS1hY3RpdmVgLFxuICAgIHNob3dTY3JvbGxiYXIgJiYgYCR7YmFzZUNsYXNzfS0tc2hvdy1zY3JvbGxiYXJgLFxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCcgJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190cmlnZ2VyLXdyYXBgfT5cbiAgICAgICAge3Nob3dPbkhvdmVyID8gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fb24taG92ZXItd2F0Y2hgfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmUodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBvcHVwVHJpZ2dlclxuICAgICAgICAgICAgICB7Li4ueyBhY3RpdmUsIGJ1dHRvbiwgYnV0dG9uVHlwZSwgY2xhc3NOYW1lOiBidXR0b25DbGFzc05hbWUsIHNldEFjdGl2ZSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UG9wdXBUcmlnZ2VyXG4gICAgICAgICAgICB7Li4ueyBhY3RpdmUsIGJ1dHRvbiwgYnV0dG9uVHlwZSwgY2xhc3NOYW1lOiBidXR0b25DbGFzc05hbWUsIHNldEFjdGl2ZSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnRgfSByZWY9e2NvbnRlbnRSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGlkZS1zY3JvbGxiYXJgfSByZWY9e2ludGVyc2VjdGlvblJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3Njcm9sbC1jb250YWluZXJgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zY3JvbGwtY29udGVudGB9PlxuICAgICAgICAgICAgICB7cmVuZGVyICYmIHJlbmRlcih7IGNsb3NlOiAoKSA9PiBzZXRBY3RpdmUoZmFsc2UpIH0pfVxuICAgICAgICAgICAgICB7Y2hpbGRyZW4gJiYgY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2NhcmV0ICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jYXJldGB9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJQb3B1cCIsInByb3BzIiwiYm91bmRpbmdSZWYiLCJidXR0b24iLCJidXR0b25DbGFzc05hbWUiLCJidXR0b25UeXBlIiwiY2FyZXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZvcmNlT3BlbiIsImhvcml6b250YWxBbGlnbiIsImhvcml6b250YWxBbGlnbkZyb21Qcm9wcyIsImluaXRBY3RpdmUiLCJvblRvZ2dsZU9wZW4iLCJyZW5kZXIiLCJzaG93T25Ib3ZlciIsInNob3dTY3JvbGxiYXIiLCJzaXplIiwidmVydGljYWxBbGlnbiIsInZlcnRpY2FsQWxpZ25Gcm9tUHJvcHMiLCJoZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ3aWR0aCIsIndpbmRvd1dpZHRoIiwidXNlV2luZG93SW5mbyIsImludGVyc2VjdGlvblJlZiIsImludGVyc2VjdGlvbkVudHJ5IiwidXNlSW50ZXJzZWN0Iiwicm9vdCIsImN1cnJlbnQiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiY29udGVudFJlZiIsInVzZVJlZiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZVN0YXRlIiwic2V0VmVydGljYWxBbGlnbiIsInNldEhvcml6b250YWxBbGlnbiIsInNldFBvc2l0aW9uIiwidXNlQ2FsbGJhY2siLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJjb250ZW50Qm90dG9tUG9zIiwibGVmdCIsImNvbnRlbnRMZWZ0UG9zIiwicmlnaHQiLCJjb250ZW50UmlnaHRQb3MiLCJ0b3AiLCJjb250ZW50VG9wUG9zIiwiYm91bmRpbmdUb3BQb3MiLCJib3VuZGluZ1JpZ2h0UG9zIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvdW5kaW5nQm90dG9tUG9zIiwiY2xpZW50SGVpZ2h0IiwiYm91bmRpbmdMZWZ0UG9zIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJQb3B1cFRyaWdnZXIiLCJyZWYiLCJjbG9zZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE4S0E7OztlQUFBOzs7NEJBOUs4QjsrREFDa0M7cUVBSXZDOzhCQUNJO1FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsUUFBeUIsQ0FBQ0M7SUFDOUIsTUFBTSxFQUNKQyxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsZUFBZSxFQUNmQyxhQUFhLFNBQVMsRUFDdEJDLFFBQVEsSUFBSSxFQUNaQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVEMsU0FBUyxFQUNUQyxpQkFBaUJDLDJCQUEyQixNQUFNLEVBQ2xEQyxhQUFhLEtBQUssRUFDbEJDLFlBQVksRUFDWkMsTUFBTSxFQUNOQyxjQUFjLEtBQUssRUFDbkJDLGdCQUFnQixLQUFLLEVBQ3JCQyxPQUFPLFFBQVEsRUFDZkMsZUFBZUMseUJBQXlCLEtBQUssRUFDOUMsR0FBR2xCO0lBRUosTUFBTSxFQUFFbUIsUUFBUUMsWUFBWSxFQUFFQyxPQUFPQyxXQUFXLEVBQUUsR0FBR0MsSUFBQUEseUJBQWE7SUFDbEUsTUFBTSxDQUFDQyxpQkFBaUJDLGtCQUFrQixHQUFHQyxJQUFBQSxxQkFBWSxFQUFDO1FBQ3hEQyxNQUFNMUIsYUFBYTJCLFdBQVc7UUFDOUJDLFlBQVk7UUFDWkMsV0FBVztJQUNiO0lBRUEsTUFBTUMsYUFBYUMsSUFBQUEsYUFBTSxFQUFDO0lBQzFCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHQyxJQUFBQSxlQUFRLEVBQUN4QjtJQUNyQyxNQUFNLENBQUNNLGVBQWVtQixpQkFBaUIsR0FBR0QsSUFBQUEsZUFBUSxFQUFDakI7SUFDbkQsTUFBTSxDQUFDVCxpQkFBaUI0QixtQkFBbUIsR0FBR0YsSUFBQUEsZUFBUSxFQUFDekI7SUFFdkQsTUFBTTRCLGNBQWNDLElBQUFBLGtCQUFXLEVBQzdCLENBQUMsRUFBRUMsYUFBYSxLQUFLLEVBQUVDLFdBQVcsS0FBSyxFQUFFO1FBQ3ZDLElBQUlWLFdBQVdILE9BQU8sRUFBRTtZQUN0QixNQUFNYyxTQUFTWCxXQUFXSCxPQUFPLENBQUNlLHFCQUFxQjtZQUV2RCxNQUFNLEVBQ0pDLFFBQVFDLGdCQUFnQixFQUN4QkMsTUFBTUMsY0FBYyxFQUNwQkMsT0FBT0MsZUFBZSxFQUN0QkMsS0FBS0MsYUFBYSxFQUNuQixHQUFHVDtZQUVKLElBQUlVLGlCQUFpQjtZQUNyQixJQUFJQyxtQkFBbUJDLFNBQVNDLGVBQWUsQ0FBQ0MsV0FBVztZQUMzRCxJQUFJQyxvQkFBb0JILFNBQVNDLGVBQWUsQ0FBQ0csWUFBWTtZQUM3RCxJQUFJQyxrQkFBa0I7WUFFdEIsSUFBSTFELGFBQWEyQixTQUFTO2dCQUN0QixDQUFBLEVBQ0FnQixRQUFRYSxpQkFBaUIsRUFDekJYLE1BQU1hLGVBQWUsRUFDckJYLE9BQU9LLGdCQUFnQixFQUN2QkgsS0FBS0UsY0FBYyxFQUNwQixHQUFHbkQsWUFBWTJCLE9BQU8sQ0FBQ2UscUJBQXFCLEVBQUM7WUFDaEQ7WUFFQSxJQUFJSCxZQUFZO2dCQUNkLElBQUlTLGtCQUFrQkksb0JBQW9CTixpQkFBaUJZLGlCQUFpQjtvQkFDMUV0QixtQkFBbUI7Z0JBQ3JCLE9BQU8sSUFBSVUsaUJBQWlCWSxtQkFBbUJWLGtCQUFrQkksa0JBQWtCO29CQUNqRmhCLG1CQUFtQjtnQkFDckI7WUFDRjtZQUVBLElBQUlJLFVBQVU7Z0JBQ1osSUFBSVUsZ0JBQWdCQyxrQkFBa0JQLG1CQUFtQlksbUJBQW1CO29CQUMxRXJCLGlCQUFpQjtnQkFDbkIsT0FBTyxJQUFJUyxtQkFBbUJZLHFCQUFxQk4sZ0JBQWdCQyxnQkFBZ0I7b0JBQ2pGaEIsaUJBQWlCO2dCQUNuQjtZQUNGO1FBQ0Y7SUFDRixHQUNBO1FBQUNuQztLQUFZO0lBR2YsTUFBTTJELHFCQUFxQnJCLElBQUFBLGtCQUFXLEVBQ3BDLENBQUNzQjtRQUNDLElBQUk5QixXQUFXSCxPQUFPLENBQUNrQyxRQUFRLENBQUNELEVBQUVFLE1BQU0sR0FBRztZQUN6QztRQUNGO1FBRUE3QixVQUFVO0lBQ1osR0FDQTtRQUFDSDtLQUFXO0lBR2RpQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IxQixZQUFZO1lBQUVFLFlBQVk7UUFBSztJQUNqQyxHQUFHO1FBQUNmO1FBQW1CYTtRQUFhaEI7S0FBWTtJQUVoRDBDLElBQUFBLGdCQUFTLEVBQUM7UUFDUjFCLFlBQVk7WUFBRUcsVUFBVTtRQUFLO0lBQy9CLEdBQUc7UUFBQ2hCO1FBQW1CYTtRQUFhbEI7S0FBYTtJQUVqRDRDLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJLE9BQU9wRCxpQkFBaUIsWUFBWUEsYUFBYXFCO1FBRXJELElBQUlBLFFBQVE7WUFDVnFCLFNBQVNXLGdCQUFnQixDQUFDLGFBQWFMO1FBQ3pDLE9BQU87WUFDTE4sU0FBU1ksbUJBQW1CLENBQUMsYUFBYU47UUFDNUM7UUFFQSxPQUFPO1lBQ0xOLFNBQVNZLG1CQUFtQixDQUFDLGFBQWFOO1FBQzVDO0lBQ0YsR0FBRztRQUFDM0I7UUFBUTJCO1FBQW9CaEQ7S0FBYTtJQUU3Q29ELElBQUFBLGdCQUFTLEVBQUM7UUFDUjlCLFVBQVUxQjtJQUNaLEdBQUc7UUFBQ0E7S0FBVTtJQUVkLE1BQU0yRCxVQUFVO1FBQ2RyRTtRQUNBUztRQUNBLENBQUMsRUFBRVQsVUFBVSxPQUFPLEVBQUVrQixLQUFLLENBQUM7UUFDNUIsQ0FBQyxFQUFFbEIsVUFBVSxVQUFVLEVBQUVtQixjQUFjLENBQUM7UUFDeEMsQ0FBQyxFQUFFbkIsVUFBVSxVQUFVLEVBQUVXLGdCQUFnQixDQUFDO1FBQzFDd0IsVUFBVSxDQUFDLEVBQUVuQyxVQUFVLFFBQVEsQ0FBQztRQUNoQ2lCLGlCQUFpQixDQUFDLEVBQUVqQixVQUFVLGdCQUFnQixDQUFDO0tBQ2hELENBQ0VzRSxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLHFCQUNFLDZCQUFDQztRQUFJaEUsV0FBVzREO3FCQUNkLDZCQUFDSTtRQUFJaEUsV0FBVyxDQUFDLEVBQUVULFVBQVUsY0FBYyxDQUFDO09BQ3pDZ0IsNEJBQ0MsNkJBQUN5RDtRQUNDaEUsV0FBVyxDQUFDLEVBQUVULFVBQVUsZ0JBQWdCLENBQUM7UUFDekMwRSxjQUFjLElBQU10QyxVQUFVO1FBQzlCdUMsY0FBYyxJQUFNdkMsVUFBVTtxQkFFOUIsNkJBQUN3QywwQkFBWSxFQUNQO1FBQUV6QztRQUFRL0I7UUFBUUU7UUFBWUcsV0FBV0o7UUFBaUIrQjtJQUFVLG9CQUk1RSw2QkFBQ3dDLDBCQUFZLEVBQ1A7UUFBRXpDO1FBQVEvQjtRQUFRRTtRQUFZRyxXQUFXSjtRQUFpQitCO0lBQVUsbUJBSzlFLDZCQUFDcUM7UUFBSWhFLFdBQVcsQ0FBQyxFQUFFVCxVQUFVLFNBQVMsQ0FBQztRQUFFNkUsS0FBSzVDO3FCQUM1Qyw2QkFBQ3dDO1FBQUloRSxXQUFXLENBQUMsRUFBRVQsVUFBVSxnQkFBZ0IsQ0FBQztRQUFFNkUsS0FBS25EO3FCQUNuRCw2QkFBQytDO1FBQUloRSxXQUFXLENBQUMsRUFBRVQsVUFBVSxrQkFBa0IsQ0FBQztxQkFDOUMsNkJBQUN5RTtRQUFJaEUsV0FBVyxDQUFDLEVBQUVULFVBQVUsZ0JBQWdCLENBQUM7T0FDM0NlLFVBQVVBLE9BQU87UUFBRStELE9BQU8sSUFBTTFDLFVBQVU7SUFBTyxJQUNqRDVCLFlBQVlBLGFBS2xCRCx1QkFBUyw2QkFBQ2tFO1FBQUloRSxXQUFXLENBQUMsRUFBRVQsVUFBVSxPQUFPLENBQUM7O0FBSXZEO01BRUEsV0FBZUMifQ==