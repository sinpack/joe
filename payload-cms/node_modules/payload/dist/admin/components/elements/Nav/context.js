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
    NavContext: function() {
        return NavContext;
    },
    NavProvider: function() {
        return NavProvider;
    },
    useNav: function() {
        return useNav;
    }
});
const _windowinfo = require("@faceless-ui/window-info");
const _bodyscrolllock = require("body-scroll-lock");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactrouterdom = require("react-router-dom");
const _Preferences = require("../../utilities/Preferences");
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
const NavContext = /*#__PURE__*/ _react.default.createContext({
    navOpen: true,
    navRef: null,
    setNavOpen: ()=>{}
});
const useNav = ()=>_react.default.useContext(NavContext);
const getNavPreference = async (getPreference)=>{
    const navPrefs = await getPreference('nav');
    const preferredState = navPrefs?.open;
    if (typeof preferredState === 'boolean') {
        return preferredState;
    } else {
        return true;
    }
};
const NavProvider = ({ children })=>{
    const { breakpoints: { l: largeBreak, m: midBreak, s: smallBreak } } = (0, _windowinfo.useWindowInfo)();
    const { getPreference } = (0, _Preferences.usePreferences)();
    const history = (0, _reactrouterdom.useHistory)();
    const navRef = (0, _react.useRef)(null);
    // initialize the nav to be closed
    // this is because getting the preference is async
    // so instead of closing it after the preference is loaded
    // we will open it after the preference is loaded
    const [navOpen, setNavOpen] = _react.default.useState(false);
    // on load check the user's preference and set "initial" state
    (0, _react.useEffect)(()=>{
        if (largeBreak === false) {
            const setNavFromPreferences = async ()=>{
                const preferredState = await getNavPreference(getPreference);
                setNavOpen(preferredState);
            };
            setNavFromPreferences() // eslint-disable-line @typescript-eslint/no-floating-promises
            ;
        }
    }, [
        largeBreak,
        getPreference,
        setNavOpen
    ]);
    // on smaller screens where the nav is a modal
    // close the nav when the user navigates away
    (0, _react.useEffect)(()=>{
        let unlisten;
        if (midBreak) {
            unlisten = history.listen(()=>{
                setNavOpen(false);
            });
        } else if (unlisten) {
            unlisten();
        }
        return ()=>unlisten && unlisten();
    }, [
        history,
        setNavOpen,
        midBreak
    ]);
    // on open and close, lock the body scroll
    // do not do this on desktop, the sidebar is not a modal
    (0, _react.useEffect)(()=>{
        if (navRef.current) {
            if (navOpen && midBreak) {
                (0, _bodyscrolllock.disableBodyScroll)(navRef.current);
            } else {
                (0, _bodyscrolllock.enableBodyScroll)(navRef.current);
            }
        }
    }, [
        navOpen,
        midBreak
    ]);
    // on smaller screens where the nav is a modal
    // close the nav when the user resizes down to mobile
    // the sidebar is a modal on mobile
    (0, _react.useEffect)(()=>{
        if (largeBreak === false || midBreak === false || smallBreak === false) {
            setNavOpen(false);
        }
    }, [
        largeBreak,
        midBreak,
        smallBreak
    ]);
    // when the component unmounts, clear all body scroll locks
    (0, _react.useEffect)(()=>{
        return ()=>{
            (0, _bodyscrolllock.clearAllBodyScrollLocks)();
        };
    }, []);
    return /*#__PURE__*/ _react.default.createElement(NavContext.Provider, {
        value: {
            navOpen,
            navRef,
            setNavOpen
        }
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL05hdi9jb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXaW5kb3dJbmZvIH0gZnJvbSAnQGZhY2VsZXNzLXVpL3dpbmRvdy1pbmZvJ1xuaW1wb3J0IHsgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MsIGRpc2FibGVCb2R5U2Nyb2xsLCBlbmFibGVCb2R5U2Nyb2xsIH0gZnJvbSAnYm9keS1zY3JvbGwtbG9jaydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IHVzZVByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1ByZWZlcmVuY2VzJ1xuXG50eXBlIE5hdkNvbnRleHRUeXBlID0ge1xuICBuYXZPcGVuOiBib29sZWFuXG4gIG5hdlJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxuICBzZXROYXZPcGVuOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IE5hdkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5hdkNvbnRleHRUeXBlPih7XG4gIG5hdk9wZW46IHRydWUsXG4gIG5hdlJlZjogbnVsbCxcbiAgc2V0TmF2T3BlbjogKCkgPT4ge30sXG59KVxuXG5leHBvcnQgY29uc3QgdXNlTmF2ID0gKCkgPT4gUmVhY3QudXNlQ29udGV4dChOYXZDb250ZXh0KVxuXG5jb25zdCBnZXROYXZQcmVmZXJlbmNlID0gYXN5bmMgKGdldFByZWZlcmVuY2UpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgY29uc3QgbmF2UHJlZnMgPSBhd2FpdCBnZXRQcmVmZXJlbmNlKCduYXYnKVxuICBjb25zdCBwcmVmZXJyZWRTdGF0ZSA9IG5hdlByZWZzPy5vcGVuXG4gIGlmICh0eXBlb2YgcHJlZmVycmVkU3RhdGUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBwcmVmZXJyZWRTdGF0ZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5hdlByb3ZpZGVyOiBSZWFjdC5GQzx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7XG4gICAgYnJlYWtwb2ludHM6IHsgbDogbGFyZ2VCcmVhaywgbTogbWlkQnJlYWssIHM6IHNtYWxsQnJlYWsgfSxcbiAgfSA9IHVzZVdpbmRvd0luZm8oKVxuXG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZihudWxsKVxuXG4gIC8vIGluaXRpYWxpemUgdGhlIG5hdiB0byBiZSBjbG9zZWRcbiAgLy8gdGhpcyBpcyBiZWNhdXNlIGdldHRpbmcgdGhlIHByZWZlcmVuY2UgaXMgYXN5bmNcbiAgLy8gc28gaW5zdGVhZCBvZiBjbG9zaW5nIGl0IGFmdGVyIHRoZSBwcmVmZXJlbmNlIGlzIGxvYWRlZFxuICAvLyB3ZSB3aWxsIG9wZW4gaXQgYWZ0ZXIgdGhlIHByZWZlcmVuY2UgaXMgbG9hZGVkXG4gIGNvbnN0IFtuYXZPcGVuLCBzZXROYXZPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIG9uIGxvYWQgY2hlY2sgdGhlIHVzZXIncyBwcmVmZXJlbmNlIGFuZCBzZXQgXCJpbml0aWFsXCIgc3RhdGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGFyZ2VCcmVhayA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHNldE5hdkZyb21QcmVmZXJlbmNlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJlZmVycmVkU3RhdGUgPSBhd2FpdCBnZXROYXZQcmVmZXJlbmNlKGdldFByZWZlcmVuY2UpXG4gICAgICAgIHNldE5hdk9wZW4ocHJlZmVycmVkU3RhdGUpXG4gICAgICB9XG5cbiAgICAgIHNldE5hdkZyb21QcmVmZXJlbmNlcygpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgfVxuICB9LCBbbGFyZ2VCcmVhaywgZ2V0UHJlZmVyZW5jZSwgc2V0TmF2T3Blbl0pXG5cbiAgLy8gb24gc21hbGxlciBzY3JlZW5zIHdoZXJlIHRoZSBuYXYgaXMgYSBtb2RhbFxuICAvLyBjbG9zZSB0aGUgbmF2IHdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIGF3YXlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdW5saXN0ZW46ICgpID0+IHZvaWRcblxuICAgIGlmIChtaWRCcmVhaykge1xuICAgICAgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbigoKSA9PiB7XG4gICAgICAgIHNldE5hdk9wZW4oZmFsc2UpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodW5saXN0ZW4pIHtcbiAgICAgIHVubGlzdGVuKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gdW5saXN0ZW4gJiYgdW5saXN0ZW4oKVxuICB9LCBbaGlzdG9yeSwgc2V0TmF2T3BlbiwgbWlkQnJlYWtdKVxuXG4gIC8vIG9uIG9wZW4gYW5kIGNsb3NlLCBsb2NrIHRoZSBib2R5IHNjcm9sbFxuICAvLyBkbyBub3QgZG8gdGhpcyBvbiBkZXNrdG9wLCB0aGUgc2lkZWJhciBpcyBub3QgYSBtb2RhbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYXZSZWYuY3VycmVudCkge1xuICAgICAgaWYgKG5hdk9wZW4gJiYgbWlkQnJlYWspIHtcbiAgICAgICAgZGlzYWJsZUJvZHlTY3JvbGwobmF2UmVmLmN1cnJlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVCb2R5U2Nyb2xsKG5hdlJlZi5jdXJyZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW25hdk9wZW4sIG1pZEJyZWFrXSlcblxuICAvLyBvbiBzbWFsbGVyIHNjcmVlbnMgd2hlcmUgdGhlIG5hdiBpcyBhIG1vZGFsXG4gIC8vIGNsb3NlIHRoZSBuYXYgd2hlbiB0aGUgdXNlciByZXNpemVzIGRvd24gdG8gbW9iaWxlXG4gIC8vIHRoZSBzaWRlYmFyIGlzIGEgbW9kYWwgb24gbW9iaWxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxhcmdlQnJlYWsgPT09IGZhbHNlIHx8IG1pZEJyZWFrID09PSBmYWxzZSB8fCBzbWFsbEJyZWFrID09PSBmYWxzZSkge1xuICAgICAgc2V0TmF2T3BlbihmYWxzZSlcbiAgICB9XG4gIH0sIFtsYXJnZUJyZWFrLCBtaWRCcmVhaywgc21hbGxCcmVha10pXG5cbiAgLy8gd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzLCBjbGVhciBhbGwgYm9keSBzY3JvbGwgbG9ja3NcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TmF2Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBuYXZPcGVuLCBuYXZSZWYsIHNldE5hdk9wZW4gfX0+e2NoaWxkcmVufTwvTmF2Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIk5hdkNvbnRleHQiLCJOYXZQcm92aWRlciIsInVzZU5hdiIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIm5hdk9wZW4iLCJuYXZSZWYiLCJzZXROYXZPcGVuIiwidXNlQ29udGV4dCIsImdldE5hdlByZWZlcmVuY2UiLCJnZXRQcmVmZXJlbmNlIiwibmF2UHJlZnMiLCJwcmVmZXJyZWRTdGF0ZSIsIm9wZW4iLCJjaGlsZHJlbiIsImJyZWFrcG9pbnRzIiwibCIsImxhcmdlQnJlYWsiLCJtIiwibWlkQnJlYWsiLCJzIiwic21hbGxCcmVhayIsInVzZVdpbmRvd0luZm8iLCJ1c2VQcmVmZXJlbmNlcyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXROYXZGcm9tUHJlZmVyZW5jZXMiLCJ1bmxpc3RlbiIsImxpc3RlbiIsImN1cnJlbnQiLCJkaXNhYmxlQm9keVNjcm9sbCIsImVuYWJsZUJvZHlTY3JvbGwiLCJjbGVhckFsbEJvZHlTY3JvbGxMb2NrcyIsIlByb3ZpZGVyIiwidmFsdWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFhYUEsVUFBVTtlQUFWQTs7SUFrQkFDLFdBQVc7ZUFBWEE7O0lBWkFDLE1BQU07ZUFBTkE7Ozs0QkFuQmlCO2dDQUMrQzsrREFDcEM7Z0NBQ2Q7NkJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QixNQUFNRiwyQkFBYUcsY0FBSyxDQUFDQyxhQUFhLENBQWlCO0lBQzVEQyxTQUFTO0lBQ1RDLFFBQVE7SUFDUkMsWUFBWSxLQUFPO0FBQ3JCO0FBRU8sTUFBTUwsU0FBUyxJQUFNQyxjQUFLLENBQUNLLFVBQVUsQ0FBQ1I7QUFFN0MsTUFBTVMsbUJBQW1CLE9BQU9DO0lBQzlCLE1BQU1DLFdBQVcsTUFBTUQsY0FBYztJQUNyQyxNQUFNRSxpQkFBaUJELFVBQVVFO0lBQ2pDLElBQUksT0FBT0QsbUJBQW1CLFdBQVc7UUFDdkMsT0FBT0E7SUFDVCxPQUFPO1FBQ0wsT0FBTztJQUNUO0FBQ0Y7QUFFTyxNQUFNWCxjQUVSLENBQUMsRUFBRWEsUUFBUSxFQUFFO0lBQ2hCLE1BQU0sRUFDSkMsYUFBYSxFQUFFQyxHQUFHQyxVQUFVLEVBQUVDLEdBQUdDLFFBQVEsRUFBRUMsR0FBR0MsVUFBVSxFQUFFLEVBQzNELEdBQUdDLElBQUFBLHlCQUFhO0lBRWpCLE1BQU0sRUFBRVosYUFBYSxFQUFFLEdBQUdhLElBQUFBLDJCQUFjO0lBQ3hDLE1BQU1DLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLE1BQU1uQixTQUFTb0IsSUFBQUEsYUFBTSxFQUFDO0lBRXRCLGtDQUFrQztJQUNsQyxrREFBa0Q7SUFDbEQsMERBQTBEO0lBQzFELGlEQUFpRDtJQUNqRCxNQUFNLENBQUNyQixTQUFTRSxXQUFXLEdBQUdKLGNBQUssQ0FBQ3dCLFFBQVEsQ0FBQztJQUU3Qyw4REFBOEQ7SUFDOURDLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJWCxlQUFlLE9BQU87WUFDeEIsTUFBTVksd0JBQXdCO2dCQUM1QixNQUFNakIsaUJBQWlCLE1BQU1ILGlCQUFpQkM7Z0JBQzlDSCxXQUFXSztZQUNiO1lBRUFpQix3QkFBd0IsOERBQThEOztRQUN4RjtJQUNGLEdBQUc7UUFBQ1o7UUFBWVA7UUFBZUg7S0FBVztJQUUxQyw4Q0FBOEM7SUFDOUMsNkNBQTZDO0lBQzdDcUIsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUlFO1FBRUosSUFBSVgsVUFBVTtZQUNaVyxXQUFXTixRQUFRTyxNQUFNLENBQUM7Z0JBQ3hCeEIsV0FBVztZQUNiO1FBQ0YsT0FBTyxJQUFJdUIsVUFBVTtZQUNuQkE7UUFDRjtRQUVBLE9BQU8sSUFBTUEsWUFBWUE7SUFDM0IsR0FBRztRQUFDTjtRQUFTakI7UUFBWVk7S0FBUztJQUVsQywwQ0FBMEM7SUFDMUMsd0RBQXdEO0lBQ3hEUyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSXRCLE9BQU8wQixPQUFPLEVBQUU7WUFDbEIsSUFBSTNCLFdBQVdjLFVBQVU7Z0JBQ3ZCYyxJQUFBQSxpQ0FBaUIsRUFBQzNCLE9BQU8wQixPQUFPO1lBQ2xDLE9BQU87Z0JBQ0xFLElBQUFBLGdDQUFnQixFQUFDNUIsT0FBTzBCLE9BQU87WUFDakM7UUFDRjtJQUNGLEdBQUc7UUFBQzNCO1FBQVNjO0tBQVM7SUFFdEIsOENBQThDO0lBQzlDLHFEQUFxRDtJQUNyRCxtQ0FBbUM7SUFDbkNTLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJWCxlQUFlLFNBQVNFLGFBQWEsU0FBU0UsZUFBZSxPQUFPO1lBQ3RFZCxXQUFXO1FBQ2I7SUFDRixHQUFHO1FBQUNVO1FBQVlFO1FBQVVFO0tBQVc7SUFFckMsMkRBQTJEO0lBQzNETyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsT0FBTztZQUNMTyxJQUFBQSx1Q0FBdUI7UUFDekI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw2QkFBQ25DLFdBQVdvQyxRQUFRO1FBQUNDLE9BQU87WUFBRWhDO1lBQVNDO1lBQVFDO1FBQVc7T0FBSU87QUFFbEUifQ==