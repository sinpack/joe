"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppHeader", {
    enumerable: true,
    get: function() {
        return AppHeader;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _Account = /*#__PURE__*/ _interop_require_default(require("../../graphics/Account"));
const _ActionsProvider = require("../../utilities/ActionsProvider");
const _Config = require("../../utilities/Config");
const _Hamburger = require("../Hamburger");
const _Localizer = /*#__PURE__*/ _interop_require_default(require("../Localizer"));
const _LocalizerLabel = require("../Localizer/LocalizerLabel");
const _NavToggler = require("../Nav/NavToggler");
const _context = require("../Nav/context");
const _StepNav = /*#__PURE__*/ _interop_require_default(require("../StepNav"));
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
const baseClass = 'app-header';
const AppHeader = ()=>{
    const { t } = (0, _reacti18next.useTranslation)();
    const { localization, routes: { admin: adminRoute } } = (0, _Config.useConfig)();
    const { actions } = (0, _ActionsProvider.useActions)();
    const { navOpen } = (0, _context.useNav)();
    const customControlsRef = (0, _react.useRef)(null);
    const [isScrollable, setIsScrollable] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        const checkIsScrollable = ()=>{
            const el = customControlsRef.current;
            if (el) {
                const scrollable = el.scrollWidth > el.clientWidth;
                setIsScrollable(scrollable);
            }
        };
        checkIsScrollable();
        window.addEventListener('resize', checkIsScrollable);
        return ()=>{
            window.removeEventListener('resize', checkIsScrollable);
        };
    }, [
        actions
    ]);
    return /*#__PURE__*/ _react.default.createElement("header", {
        className: [
            baseClass,
            navOpen && `${baseClass}--nav-open`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__bg`
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__content`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrapper`
    }, /*#__PURE__*/ _react.default.createElement(_NavToggler.NavToggler, {
        className: `${baseClass}__mobile-nav-toggler`,
        tabIndex: -1
    }, /*#__PURE__*/ _react.default.createElement(_Hamburger.Hamburger, null)), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__controls-wrapper`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__step-nav-wrapper`
    }, /*#__PURE__*/ _react.default.createElement(_StepNav.default, {
        className: `${baseClass}__step-nav`
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__actions-wrapper`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__actions`,
        ref: customControlsRef
    }, Array.isArray(actions) && actions.map((Component, i)=>/*#__PURE__*/ _react.default.createElement("div", {
            className: isScrollable && i === actions.length - 1 ? `${baseClass}__last-action` : '',
            key: i
        }, /*#__PURE__*/ _react.default.createElement(Component, null)))), isScrollable && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__gradient-placeholder`
    })), localization && /*#__PURE__*/ _react.default.createElement(_LocalizerLabel.LocalizerLabel, {
        ariaLabel: "invisible",
        className: `${baseClass}__localizer-spacing`
    }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        "aria-label": t('authentication:account'),
        className: `${baseClass}__account`,
        tabIndex: 0,
        to: `${adminRoute}/account`
    }, /*#__PURE__*/ _react.default.createElement(_Account.default, null))))), /*#__PURE__*/ _react.default.createElement(_Localizer.default, {
        className: `${baseClass}__localizer`
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0hlYWRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBBY2NvdW50IGZyb20gJy4uLy4uL2dyYXBoaWNzL0FjY291bnQnXG5pbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0FjdGlvbnNQcm92aWRlcidcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyBIYW1idXJnZXIgfSBmcm9tICcuLi9IYW1idXJnZXInXG5pbXBvcnQgTG9jYWxpemVyIGZyb20gJy4uL0xvY2FsaXplcidcbmltcG9ydCB7IExvY2FsaXplckxhYmVsIH0gZnJvbSAnLi4vTG9jYWxpemVyL0xvY2FsaXplckxhYmVsJ1xuaW1wb3J0IHsgTmF2VG9nZ2xlciB9IGZyb20gJy4uL05hdi9OYXZUb2dnbGVyJ1xuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vTmF2L2NvbnRleHQnXG5pbXBvcnQgU3RlcE5hdiBmcm9tICcuLi9TdGVwTmF2J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdhcHAtaGVhZGVyJ1xuXG5leHBvcnQgY29uc3QgQXBwSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3Qge1xuICAgIGxvY2FsaXphdGlvbixcbiAgICByb3V0ZXM6IHsgYWRtaW46IGFkbWluUm91dGUgfSxcbiAgfSA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgeyBhY3Rpb25zIH0gPSB1c2VBY3Rpb25zKClcblxuICBjb25zdCB7IG5hdk9wZW4gfSA9IHVzZU5hdigpXG5cbiAgY29uc3QgY3VzdG9tQ29udHJvbHNSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFtpc1Njcm9sbGFibGUsIHNldElzU2Nyb2xsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrSXNTY3JvbGxhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWwgPSBjdXN0b21Db250cm9sc1JlZi5jdXJyZW50XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IGVsLnNjcm9sbFdpZHRoID4gZWwuY2xpZW50V2lkdGhcbiAgICAgICAgc2V0SXNTY3JvbGxhYmxlKHNjcm9sbGFibGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJc1Njcm9sbGFibGUoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGVja0lzU2Nyb2xsYWJsZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hlY2tJc1Njcm9sbGFibGUpXG4gICAgfVxuICB9LCBbYWN0aW9uc10pXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgbmF2T3BlbiAmJiBgJHtiYXNlQ2xhc3N9LS1uYXYtb3BlbmBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JnYH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwcGVyYH0+XG4gICAgICAgICAgPE5hdlRvZ2dsZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tb2JpbGUtbmF2LXRvZ2dsZXJgfSB0YWJJbmRleD17LTF9PlxuICAgICAgICAgICAgPEhhbWJ1cmdlciAvPlxuICAgICAgICAgIDwvTmF2VG9nZ2xlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udHJvbHMtd3JhcHBlcmB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3N0ZXAtbmF2LXdyYXBwZXJgfT5cbiAgICAgICAgICAgICAgPFN0ZXBOYXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zdGVwLW5hdmB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25zLXdyYXBwZXJgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbnNgfSByZWY9e2N1c3RvbUNvbnRyb2xzUmVmfT5cbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShhY3Rpb25zKSAmJlxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5tYXAoKENvbXBvbmVudCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsYWJsZSAmJiBpID09PSBhY3Rpb25zLmxlbmd0aCAtIDEgPyBgJHtiYXNlQ2xhc3N9X19sYXN0LWFjdGlvbmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7aXNTY3JvbGxhYmxlICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19ncmFkaWVudC1wbGFjZWhvbGRlcmB9IC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bG9jYWxpemF0aW9uICYmIChcbiAgICAgICAgICAgICAgPExvY2FsaXplckxhYmVsIGFyaWFMYWJlbD1cImludmlzaWJsZVwiIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbG9jYWxpemVyLXNwYWNpbmdgfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2F1dGhlbnRpY2F0aW9uOmFjY291bnQnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY2NvdW50YH1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgIHRvPXtgJHthZG1pblJvdXRlfS9hY2NvdW50YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFjY291bnQgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMb2NhbGl6ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGl6ZXJgfSAvPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQXBwSGVhZGVyIiwiYmFzZUNsYXNzIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibG9jYWxpemF0aW9uIiwicm91dGVzIiwiYWRtaW4iLCJhZG1pblJvdXRlIiwidXNlQ29uZmlnIiwiYWN0aW9ucyIsInVzZUFjdGlvbnMiLCJuYXZPcGVuIiwidXNlTmF2IiwiY3VzdG9tQ29udHJvbHNSZWYiLCJ1c2VSZWYiLCJpc1Njcm9sbGFibGUiLCJzZXRJc1Njcm9sbGFibGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNoZWNrSXNTY3JvbGxhYmxlIiwiZWwiLCJjdXJyZW50Iiwic2Nyb2xsYWJsZSIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsImNsYXNzTmFtZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwiTmF2VG9nZ2xlciIsInRhYkluZGV4IiwiSGFtYnVyZ2VyIiwiU3RlcE5hdiIsInJlZiIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIkNvbXBvbmVudCIsImkiLCJsZW5ndGgiLCJrZXkiLCJMb2NhbGl6ZXJMYWJlbCIsImFyaWFMYWJlbCIsIkxpbmsiLCJhcmlhLWxhYmVsIiwidG8iLCJBY2NvdW50IiwiTG9jYWxpemVyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWlCYUE7OztlQUFBQTs7OytEQWpCc0M7OEJBQ3BCO2dDQUNWO2dFQUVEO2lDQUNPO3dCQUNEOzJCQUNBO2tFQUNKO2dDQUNTOzRCQUNKO3lCQUNKO2dFQUNIO1FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELFlBQXNCO0lBQ2pDLE1BQU0sRUFBRUUsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjO0lBRTVCLE1BQU0sRUFDSkMsWUFBWSxFQUNaQyxRQUFRLEVBQUVDLE9BQU9DLFVBQVUsRUFBRSxFQUM5QixHQUFHQyxJQUFBQSxpQkFBUztJQUViLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdDLElBQUFBLDJCQUFVO0lB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