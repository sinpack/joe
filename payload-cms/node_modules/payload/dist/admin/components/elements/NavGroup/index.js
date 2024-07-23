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
const _reactanimateheight = /*#__PURE__*/ _interop_require_default(require("react-animate-height"));
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _Preferences = require("../../utilities/Preferences");
const _context = require("../Nav/context");
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
const baseClass = 'nav-group';
const NavGroup = ({ children, label })=>{
    const [collapsed, setCollapsed] = (0, _react.useState)(true);
    const [animate, setAnimate] = (0, _react.useState)(false);
    const { getPreference, setPreference } = (0, _Preferences.usePreferences)();
    const { navOpen } = (0, _context.useNav)();
    const preferencesKey = `collapsed-${label}-groups`;
    (0, _react.useEffect)(()=>{
        if (label) {
            const setCollapsedFromPreferences = async ()=>{
                const preferences = await getPreference(preferencesKey) || [];
                setCollapsed(preferences.indexOf(label) !== -1);
            };
            setCollapsedFromPreferences();
        }
    }, [
        getPreference,
        label,
        preferencesKey
    ]);
    if (label) {
        const toggleCollapsed = async ()=>{
            setAnimate(true);
            let preferences = await getPreference(preferencesKey) || [];
            if (collapsed) {
                preferences = preferences.filter((preference)=>label !== preference);
            } else {
                preferences.push(label);
            }
            setPreference(preferencesKey, preferences);
            setCollapsed(!collapsed);
        };
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: [
                `${baseClass}`,
                `${label}`,
                collapsed && `${baseClass}--collapsed`
            ].filter(Boolean).join(' '),
            id: `nav-group-${label}`
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: [
                `${baseClass}__toggle`,
                `${baseClass}__toggle--${collapsed ? 'collapsed' : 'open'}`
            ].filter(Boolean).join(' '),
            onClick: toggleCollapsed,
            tabIndex: !navOpen ? -1 : 0,
            type: "button"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__label`
        }, label), /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__indicator`
        }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
            className: `${baseClass}__indicator`,
            direction: !collapsed ? 'up' : undefined
        }))), /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
            duration: animate ? 200 : 0,
            height: collapsed ? 0 : 'auto'
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__content`
        }, children)));
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
};
const _default = NavGroup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL05hdkdyb3VwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFuaW1hdGVIZWlnaHQgZnJvbSAncmVhY3QtYW5pbWF0ZS1oZWlnaHQnXG5cbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nXG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9QcmVmZXJlbmNlcydcbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4uL05hdi9jb250ZXh0J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICduYXYtZ3JvdXAnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgbGFiZWw6IHN0cmluZ1xufVxuXG5jb25zdCBOYXZHcm91cDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIGxhYmVsIH0pID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFthbmltYXRlLCBzZXRBbmltYXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IGdldFByZWZlcmVuY2UsIHNldFByZWZlcmVuY2UgfSA9IHVzZVByZWZlcmVuY2VzKClcbiAgY29uc3QgeyBuYXZPcGVuIH0gPSB1c2VOYXYoKVxuXG4gIGNvbnN0IHByZWZlcmVuY2VzS2V5ID0gYGNvbGxhcHNlZC0ke2xhYmVsfS1ncm91cHNgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGNvbnN0IHNldENvbGxhcHNlZEZyb21QcmVmZXJlbmNlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSAoYXdhaXQgZ2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSkpIHx8IFtdXG4gICAgICAgIHNldENvbGxhcHNlZChwcmVmZXJlbmNlcy5pbmRleE9mKGxhYmVsKSAhPT0gLTEpXG4gICAgICB9XG4gICAgICBzZXRDb2xsYXBzZWRGcm9tUHJlZmVyZW5jZXMoKVxuICAgIH1cbiAgfSwgW2dldFByZWZlcmVuY2UsIGxhYmVsLCBwcmVmZXJlbmNlc0tleV0pXG5cbiAgaWYgKGxhYmVsKSB7XG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0QW5pbWF0ZSh0cnVlKVxuICAgICAgbGV0IHByZWZlcmVuY2VzOiBzdHJpbmdbXSA9IChhd2FpdCBnZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VzS2V5KSkgfHwgW11cbiAgICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgICAgcHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlcy5maWx0ZXIoKHByZWZlcmVuY2UpID0+IGxhYmVsICE9PSBwcmVmZXJlbmNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJlZmVyZW5jZXMucHVzaChsYWJlbClcbiAgICAgIH1cbiAgICAgIHNldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXksIHByZWZlcmVuY2VzKVxuICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtbYCR7YmFzZUNsYXNzfWAsIGAke2xhYmVsfWAsIGNvbGxhcHNlZCAmJiBgJHtiYXNlQ2xhc3N9LS1jb2xsYXBzZWRgXVxuICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAuam9pbignICcpfVxuICAgICAgICBpZD17YG5hdi1ncm91cC0ke2xhYmVsfWB9XG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgIGAke2Jhc2VDbGFzc31fX3RvZ2dsZWAsXG4gICAgICAgICAgICBgJHtiYXNlQ2xhc3N9X190b2dnbGUtLSR7Y29sbGFwc2VkID8gJ2NvbGxhcHNlZCcgOiAnb3Blbid9YCxcbiAgICAgICAgICBdXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAuam9pbignICcpfVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlZH1cbiAgICAgICAgICB0YWJJbmRleD17IW5hdk9wZW4gPyAtMSA6IDB9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2luZGljYXRvcmB9PlxuICAgICAgICAgICAgPENoZXZyb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbmRpY2F0b3JgfVxuICAgICAgICAgICAgICBkaXJlY3Rpb249eyFjb2xsYXBzZWQgPyAndXAnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxBbmltYXRlSGVpZ2h0IGR1cmF0aW9uPXthbmltYXRlID8gMjAwIDogMH0gaGVpZ2h0PXtjb2xsYXBzZWQgPyAwIDogJ2F1dG8nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9BbmltYXRlSGVpZ2h0PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Y2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2R3JvdXBcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJOYXZHcm91cCIsImNoaWxkcmVuIiwibGFiZWwiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ1c2VTdGF0ZSIsImFuaW1hdGUiLCJzZXRBbmltYXRlIiwiZ2V0UHJlZmVyZW5jZSIsInNldFByZWZlcmVuY2UiLCJ1c2VQcmVmZXJlbmNlcyIsIm5hdk9wZW4iLCJ1c2VOYXYiLCJwcmVmZXJlbmNlc0tleSIsInVzZUVmZmVjdCIsInNldENvbGxhcHNlZEZyb21QcmVmZXJlbmNlcyIsInByZWZlcmVuY2VzIiwiaW5kZXhPZiIsInRvZ2dsZUNvbGxhcHNlZCIsImZpbHRlciIsInByZWZlcmVuY2UiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiQm9vbGVhbiIsImpvaW4iLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0YWJJbmRleCIsInR5cGUiLCJDaGV2cm9uIiwiZGlyZWN0aW9uIiwidW5kZWZpbmVkIiwiQW5pbWF0ZUhlaWdodCIsImR1cmF0aW9uIiwiaGVpZ2h0IiwiUmVhY3QiLCJGcmFnbWVudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFrRkE7OztlQUFBOzs7K0RBbEYyQzsyRUFDakI7Z0VBRU47NkJBQ1c7eUJBQ1I7UUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQU9sQixNQUFNQyxXQUE0QixDQUFDLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO0lBQ3BELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHQyxJQUFBQSxlQUFRLEVBQUM7SUFDM0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdGLElBQUFBLGVBQVEsRUFBQztJQUN2QyxNQUFNLEVBQUVHLGFBQWEsRUFBRUMsYUFBYSxFQUFFLEdBQUdDLElBQUFBLDJCQUFjO0lBQ3ZELE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdDLElBQUFBLGVBQU07SUFFMUIsTUFBTUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFWCxNQUFNLE9BQU8sQ0FBQztJQUVsRFksSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUlaLE9BQU87WUFDVCxNQUFNYSw4QkFBOEI7Z0JBQ2xDLE1BQU1DLGNBQWMsQUFBQyxNQUFNUixjQUFjSyxtQkFBb0IsRUFBRTtnQkFDL0RULGFBQWFZLFlBQVlDLE9BQU8sQ0FBQ2YsV0FBVyxDQUFDO1lBQy9DO1lBQ0FhO1FBQ0Y7SUFDRixHQUFHO1FBQUNQO1FBQWVOO1FBQU9XO0tBQWU7SUFFekMsSUFBSVgsT0FBTztRQUNULE1BQU1nQixrQkFBa0I7WUFDdEJYLFdBQVc7WUFDWCxJQUFJUyxjQUF3QixBQUFDLE1BQU1SLGNBQWNLLG1CQUFvQixFQUFFO1lBQ3ZFLElBQUlWLFdBQVc7Z0JBQ2JhLGNBQWNBLFlBQVlHLE1BQU0sQ0FBQyxDQUFDQyxhQUFlbEIsVUFBVWtCO1lBQzdELE9BQU87Z0JBQ0xKLFlBQVlLLElBQUksQ0FBQ25CO1lBQ25CO1lBQ0FPLGNBQWNJLGdCQUFnQkc7WUFDOUJaLGFBQWEsQ0FBQ0Q7UUFDaEI7UUFFQSxxQkFDRSw2QkFBQ21CO1lBQ0NDLFdBQVc7Z0JBQUMsQ0FBQyxFQUFFeEIsVUFBVSxDQUFDO2dCQUFFLENBQUMsRUFBRUcsTUFBTSxDQUFDO2dCQUFFQyxhQUFhLENBQUMsRUFBRUosVUFBVSxXQUFXLENBQUM7YUFBQyxDQUM1RW9CLE1BQU0sQ0FBQ0ssU0FDUEMsSUFBSSxDQUFDO1lBQ1JDLElBQUksQ0FBQyxVQUFVLEVBQUV4QixNQUFNLENBQUM7eUJBRXhCLDZCQUFDeUI7WUFDQ0osV0FBVztnQkFDVCxDQUFDLEVBQUV4QixVQUFVLFFBQVEsQ0FBQztnQkFDdEIsQ0FBQyxFQUFFQSxVQUFVLFVBQVUsRUFBRUksWUFBWSxjQUFjLE9BQU8sQ0FBQzthQUM1RCxDQUNFZ0IsTUFBTSxDQUFDSyxTQUNQQyxJQUFJLENBQUM7WUFDUkcsU0FBU1Y7WUFDVFcsVUFBVSxDQUFDbEIsVUFBVSxDQUFDLElBQUk7WUFDMUJtQixNQUFLO3lCQUVMLDZCQUFDUjtZQUFJQyxXQUFXLENBQUMsRUFBRXhCLFVBQVUsT0FBTyxDQUFDO1dBQUdHLHNCQUN4Qyw2QkFBQ29CO1lBQUlDLFdBQVcsQ0FBQyxFQUFFeEIsVUFBVSxXQUFXLENBQUM7eUJBQ3ZDLDZCQUFDZ0MsZ0JBQU87WUFDTlIsV0FBVyxDQUFDLEVBQUV4QixVQUFVLFdBQVcsQ0FBQztZQUNwQ2lDLFdBQVcsQ0FBQzdCLFlBQVksT0FBTzhCOzRCQUlyQyw2QkFBQ0MsMkJBQWE7WUFBQ0MsVUFBVTdCLFVBQVUsTUFBTTtZQUFHOEIsUUFBUWpDLFlBQVksSUFBSTt5QkFDbEUsNkJBQUNtQjtZQUFJQyxXQUFXLENBQUMsRUFBRXhCLFVBQVUsU0FBUyxDQUFDO1dBQUdFO0lBSWxEO0lBRUEscUJBQU8sNkJBQUNvQyxjQUFLLENBQUNDLFFBQVEsUUFBRXJDO0FBQzFCO01BRUEsV0FBZUQifQ==