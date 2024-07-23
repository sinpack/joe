"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Drawer: function() {
        return Drawer;
    },
    DrawerToggler: function() {
        return DrawerToggler;
    },
    formatDrawerSlug: function() {
        return formatDrawerSlug;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
const _EditDepth = require("../../utilities/EditDepth");
const _Gutter = require("../Gutter");
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
const baseClass = 'drawer';
const zBase = 100;
const formatDrawerSlug = ({ depth, slug })=>`drawer_${depth}_${slug}`;
const DrawerToggler = ({ children, className, disabled, onClick, slug, ...rest })=>{
    const { openModal } = (0, _modal.useModal)();
    const handleClick = (0, _react.useCallback)((e)=>{
        openModal(slug);
        if (typeof onClick === 'function') onClick(e);
    }, [
        openModal,
        slug,
        onClick
    ]);
    return /*#__PURE__*/ _react.default.createElement("button", {
        className: className,
        disabled: disabled,
        onClick: handleClick,
        type: "button",
        ...rest
    }, children);
};
const Drawer = ({ children, className, gutter = true, header, hoverTitle, slug, title })=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    const { closeModal, modalState } = (0, _modal.useModal)();
    const drawerDepth = (0, _EditDepth.useEditDepth)();
    const [isOpen, setIsOpen] = (0, _react.useState)(false);
    const [animateIn, setAnimateIn] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        setIsOpen(modalState[slug]?.isOpen);
    }, [
        slug,
        modalState
    ]);
    (0, _react.useEffect)(()=>{
        setAnimateIn(isOpen);
    }, [
        isOpen
    ]);
    if (isOpen) {
        // IMPORTANT: do not render the drawer until it is explicitly open, this is to avoid large html trees especially when nesting drawers
        return /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
            className: [
                className,
                baseClass,
                animateIn && `${baseClass}--is-open`,
                drawerDepth > 1 && `${baseClass}--nested`
            ].filter(Boolean).join(' '),
            slug: slug,
            style: {
                zIndex: zBase + drawerDepth
            }
        }, (!drawerDepth || drawerDepth === 1) && /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__blur-bg`
        }), /*#__PURE__*/ _react.default.createElement("button", {
            "aria-label": t('close'),
            className: `${baseClass}__close`,
            id: `close-drawer__${slug}`,
            onClick: ()=>closeModal(slug),
            type: "button"
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__content`
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__blur-bg-content`
        }), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
            className: `${baseClass}__content-children`,
            left: gutter,
            right: gutter
        }, /*#__PURE__*/ _react.default.createElement(_EditDepth.EditDepthContext.Provider, {
            value: drawerDepth + 1
        }, header && header, header === undefined && /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__header`
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            className: `${baseClass}__header__title`,
            title: hoverTitle ? title : null
        }, title), /*#__PURE__*/ _react.default.createElement("button", {
            "aria-label": t('close'),
            className: `${baseClass}__header__close`,
            id: `close-drawer__${slug}`,
            onClick: ()=>closeModal(slug),
            type: "button"
        }, /*#__PURE__*/ _react.default.createElement(_X.default, null))), children))));
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYXdlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwsIHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMsIFRvZ2dsZXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBYIGZyb20gJy4uLy4uL2ljb25zL1gnXG5pbXBvcnQgeyBFZGl0RGVwdGhDb250ZXh0LCB1c2VFZGl0RGVwdGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRWRpdERlcHRoJ1xuaW1wb3J0IHsgR3V0dGVyIH0gZnJvbSAnLi4vR3V0dGVyJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdkcmF3ZXInXG5jb25zdCB6QmFzZSA9IDEwMFxuXG5leHBvcnQgY29uc3QgZm9ybWF0RHJhd2VyU2x1ZyA9ICh7IGRlcHRoLCBzbHVnIH06IHsgZGVwdGg6IG51bWJlcjsgc2x1Zzogc3RyaW5nIH0pOiBzdHJpbmcgPT5cbiAgYGRyYXdlcl8ke2RlcHRofV8ke3NsdWd9YFxuXG5leHBvcnQgY29uc3QgRHJhd2VyVG9nZ2xlcjogUmVhY3QuRkM8VG9nZ2xlclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxuICBzbHVnLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHsgb3Blbk1vZGFsIH0gPSB1c2VNb2RhbCgpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgb3Blbk1vZGFsKHNsdWcpXG4gICAgICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIG9uQ2xpY2soZSlcbiAgICB9LFxuICAgIFtvcGVuTW9kYWwsIHNsdWcsIG9uQ2xpY2tdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB0eXBlPVwiYnV0dG9uXCIgey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBEcmF3ZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGd1dHRlciA9IHRydWUsXG4gIGhlYWRlcixcbiAgaG92ZXJUaXRsZSxcbiAgc2x1ZyxcbiAgdGl0bGUsXG59KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuICBjb25zdCB7IGNsb3NlTW9kYWwsIG1vZGFsU3RhdGUgfSA9IHVzZU1vZGFsKClcbiAgY29uc3QgZHJhd2VyRGVwdGggPSB1c2VFZGl0RGVwdGgoKVxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFthbmltYXRlSW4sIHNldEFuaW1hdGVJbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3Blbihtb2RhbFN0YXRlW3NsdWddPy5pc09wZW4pXG4gIH0sIFtzbHVnLCBtb2RhbFN0YXRlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFuaW1hdGVJbihpc09wZW4pXG4gIH0sIFtpc09wZW5dKVxuXG4gIGlmIChpc09wZW4pIHtcbiAgICAvLyBJTVBPUlRBTlQ6IGRvIG5vdCByZW5kZXIgdGhlIGRyYXdlciB1bnRpbCBpdCBpcyBleHBsaWNpdGx5IG9wZW4sIHRoaXMgaXMgdG8gYXZvaWQgbGFyZ2UgaHRtbCB0cmVlcyBlc3BlY2lhbGx5IHdoZW4gbmVzdGluZyBkcmF3ZXJzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgICAgYW5pbWF0ZUluICYmIGAke2Jhc2VDbGFzc30tLWlzLW9wZW5gLFxuICAgICAgICAgIGRyYXdlckRlcHRoID4gMSAmJiBgJHtiYXNlQ2xhc3N9LS1uZXN0ZWRgLFxuICAgICAgICBdXG4gICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgIC5qb2luKCcgJyl9XG4gICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgekluZGV4OiB6QmFzZSArIGRyYXdlckRlcHRoLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7KCFkcmF3ZXJEZXB0aCB8fCBkcmF3ZXJEZXB0aCA9PT0gMSkgJiYgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JsdXItYmdgfSAvPn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2Nsb3NlJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jbG9zZWB9XG4gICAgICAgICAgaWQ9e2BjbG9zZS1kcmF3ZXJfXyR7c2x1Z31gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlTW9kYWwoc2x1Zyl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JsdXItYmctY29udGVudGB9IC8+XG4gICAgICAgICAgPEd1dHRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnQtY2hpbGRyZW5gfSBsZWZ0PXtndXR0ZXJ9IHJpZ2h0PXtndXR0ZXJ9PlxuICAgICAgICAgICAgPEVkaXREZXB0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RyYXdlckRlcHRoICsgMX0+XG4gICAgICAgICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICAgICAgICB7aGVhZGVyID09PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJgfT5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcl9fdGl0bGVgfSB0aXRsZT17aG92ZXJUaXRsZSA/IHRpdGxlIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2Nsb3NlJyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyX19jbG9zZWB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgY2xvc2UtZHJhd2VyX18ke3NsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbChzbHVnKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxYIC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9FZGl0RGVwdGhDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDwvR3V0dGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJuYW1lcyI6WyJEcmF3ZXIiLCJEcmF3ZXJUb2dnbGVyIiwiZm9ybWF0RHJhd2VyU2x1ZyIsImJhc2VDbGFzcyIsInpCYXNlIiwiZGVwdGgiLCJzbHVnIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJyZXN0Iiwib3Blbk1vZGFsIiwidXNlTW9kYWwiLCJoYW5kbGVDbGljayIsInVzZUNhbGxiYWNrIiwiZSIsImJ1dHRvbiIsInR5cGUiLCJndXR0ZXIiLCJoZWFkZXIiLCJob3ZlclRpdGxlIiwidGl0bGUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJjbG9zZU1vZGFsIiwibW9kYWxTdGF0ZSIsImRyYXdlckRlcHRoIiwidXNlRWRpdERlcHRoIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJhbmltYXRlSW4iLCJzZXRBbmltYXRlSW4iLCJ1c2VFZmZlY3QiLCJNb2RhbCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwic3R5bGUiLCJ6SW5kZXgiLCJkaXYiLCJhcmlhLWxhYmVsIiwiaWQiLCJHdXR0ZXIiLCJsZWZ0IiwicmlnaHQiLCJFZGl0RGVwdGhDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImgyIiwiWCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQTBDYUEsTUFBTTtlQUFOQTs7SUF6QkFDLGFBQWE7ZUFBYkE7O0lBSEFDLGdCQUFnQjtlQUFoQkE7Ozt1QkFkbUI7K0RBQ3dCOzhCQUN6QjswREFJakI7MkJB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