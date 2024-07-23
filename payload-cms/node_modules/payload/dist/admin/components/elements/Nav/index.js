"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Nav", {
    enumerable: true,
    get: function() {
        return Nav;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _getTranslation = require("../../../../utilities/getTranslation");
const _groupNavItems = require("../../../utilities/groupNavItems");
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
const _Hamburger = require("../Hamburger");
const _Logout = /*#__PURE__*/ _interop_require_default(require("../Logout"));
const _NavGroup = /*#__PURE__*/ _interop_require_default(require("../NavGroup"));
const _context = require("./context");
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
const baseClass = 'nav';
const DefaultNav = ()=>{
    const { navOpen, navRef, setNavOpen } = (0, _context.useNav)();
    const { permissions, user } = (0, _Auth.useAuth)();
    const [groups, setGroups] = (0, _react.useState)([]);
    const { i18n } = (0, _reacti18next.useTranslation)('general');
    const { admin: { components: { afterNavLinks, beforeNavLinks } }, collections, globals, routes: { admin } } = (0, _Config.useConfig)();
    (0, _react.useEffect)(()=>{
        setGroups((0, _groupNavItems.groupNavItems)([
            ...collections.filter(({ admin: { hidden } })=>!(typeof hidden === 'function' ? hidden({
                    user
                }) : hidden)).map((collection)=>{
                const entityToGroup = {
                    entity: collection,
                    type: _groupNavItems.EntityType.collection
                };
                return entityToGroup;
            }),
            ...globals.filter(({ admin: { hidden } })=>!(typeof hidden === 'function' ? hidden({
                    user
                }) : hidden)).map((global)=>{
                const entityToGroup = {
                    entity: global,
                    type: _groupNavItems.EntityType.global
                };
                return entityToGroup;
            })
        ], permissions, i18n));
    }, [
        collections,
        globals,
        permissions,
        i18n,
        i18n.language,
        user
    ]);
    return /*#__PURE__*/ _react.default.createElement("aside", {
        className: [
            baseClass,
            navOpen && `${baseClass}--nav-open`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__scroll`,
        ref: navRef
    }, /*#__PURE__*/ _react.default.createElement("nav", {
        className: `${baseClass}__wrap`
    }, Array.isArray(beforeNavLinks) && beforeNavLinks.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), groups.map(({ entities, label }, key)=>{
        return /*#__PURE__*/ _react.default.createElement(_NavGroup.default, {
            key,
            label
        }, entities.map(({ entity, type }, i)=>{
            let entityLabel;
            let href;
            let id;
            if (type === _groupNavItems.EntityType.collection) {
                href = `${admin}/collections/${entity.slug}`;
                entityLabel = (0, _getTranslation.getTranslation)(entity.labels.plural, i18n);
                id = `nav-${entity.slug}`;
            }
            if (type === _groupNavItems.EntityType.global) {
                href = `${admin}/globals/${entity.slug}`;
                entityLabel = (0, _getTranslation.getTranslation)(entity.label, i18n);
                id = `nav-global-${entity.slug}`;
            }
            return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.NavLink, {
                activeClassName: "active",
                className: `${baseClass}__link`,
                id: id,
                key: i,
                tabIndex: !navOpen ? -1 : undefined,
                to: href
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: `${baseClass}__link-icon`
            }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
                direction: "right"
            })), /*#__PURE__*/ _react.default.createElement("span", {
                className: `${baseClass}__link-label`
            }, entityLabel));
        }));
    }), Array.isArray(afterNavLinks) && afterNavLinks.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__controls`
    }, /*#__PURE__*/ _react.default.createElement(_Logout.default, {
        tabIndex: !navOpen ? -1 : undefined
    })))), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__header`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__header-content`
    }, /*#__PURE__*/ _react.default.createElement("button", {
        className: `${baseClass}__mobile-close`,
        onClick: ()=>{
            setNavOpen(false);
        },
        tabIndex: !navOpen ? -1 : undefined,
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement(_Hamburger.Hamburger, {
        isActive: true
    })))));
};
const Nav = ()=>{
    const { admin: { components: { Nav: CustomNav } = {
        Nav: undefined
    } } = {} } = (0, _Config.useConfig)();
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomNav,
        DefaultComponent: DefaultNav
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL05hdi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgdHlwZSB7IEVudGl0eVRvR3JvdXAsIEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2dyb3VwTmF2SXRlbXMnXG5cbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgRW50aXR5VHlwZSwgZ3JvdXBOYXZJdGVtcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9ncm91cE5hdkl0ZW1zJ1xuaW1wb3J0IENoZXZyb24gZnJvbSAnLi4vLi4vaWNvbnMvQ2hldnJvbidcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnXG5pbXBvcnQgeyBIYW1idXJnZXIgfSBmcm9tICcuLi9IYW1idXJnZXInXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4uL0xvZ291dCdcbmltcG9ydCBOYXZHcm91cCBmcm9tICcuLi9OYXZHcm91cCdcbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4vY29udGV4dCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbmF2J1xuXG5jb25zdCBEZWZhdWx0TmF2OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBuYXZPcGVuLCBuYXZSZWYsIHNldE5hdk9wZW4gfSA9IHVzZU5hdigpXG4gIGNvbnN0IHsgcGVybWlzc2lvbnMsIHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCBbZ3JvdXBzLCBzZXRHcm91cHNdID0gdXNlU3RhdGU8R3JvdXBbXT4oW10pXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuXG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czogeyBhZnRlck5hdkxpbmtzLCBiZWZvcmVOYXZMaW5rcyB9LFxuICAgIH0sXG4gICAgY29sbGVjdGlvbnMsXG4gICAgZ2xvYmFscyxcbiAgICByb3V0ZXM6IHsgYWRtaW4gfSxcbiAgfSA9IHVzZUNvbmZpZygpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRHcm91cHMoXG4gICAgICBncm91cE5hdkl0ZW1zKFxuICAgICAgICBbXG4gICAgICAgICAgLi4uY29sbGVjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+XG4gICAgICAgICAgICAgICAgISh0eXBlb2YgaGlkZGVuID09PSAnZnVuY3Rpb24nID8gaGlkZGVuKHsgdXNlciB9KSA6IGhpZGRlbiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudGl0eVRvR3JvdXA6IEVudGl0eVRvR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5OiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHR5cGU6IEVudGl0eVR5cGUuY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBlbnRpdHlUb0dyb3VwXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAuLi5nbG9iYWxzXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAoeyBhZG1pbjogeyBoaWRkZW4gfSB9KSA9PlxuICAgICAgICAgICAgICAgICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgoZ2xvYmFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudGl0eVRvR3JvdXA6IEVudGl0eVRvR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5OiBnbG9iYWwsXG4gICAgICAgICAgICAgICAgdHlwZTogRW50aXR5VHlwZS5nbG9iYWwsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gZW50aXR5VG9Hcm91cFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHBlcm1pc3Npb25zLFxuICAgICAgICBpMThuLFxuICAgICAgKSxcbiAgICApXG4gIH0sIFtjb2xsZWN0aW9ucywgZ2xvYmFscywgcGVybWlzc2lvbnMsIGkxOG4sIGkxOG4ubGFuZ3VhZ2UsIHVzZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgbmF2T3BlbiAmJiBgJHtiYXNlQ2xhc3N9LS1uYXYtb3BlbmBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3Njcm9sbGB9IHJlZj17bmF2UmVmfT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShiZWZvcmVOYXZMaW5rcykgJiZcbiAgICAgICAgICAgIGJlZm9yZU5hdkxpbmtzLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICAgIHtncm91cHMubWFwKCh7IGVudGl0aWVzLCBsYWJlbCB9LCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxOYXZHcm91cCB7Li4ueyBrZXksIGxhYmVsIH19PlxuICAgICAgICAgICAgICAgIHtlbnRpdGllcy5tYXAoKHsgZW50aXR5LCB0eXBlIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHlMYWJlbDogc3RyaW5nXG4gICAgICAgICAgICAgICAgICBsZXQgaHJlZjogc3RyaW5nXG4gICAgICAgICAgICAgICAgICBsZXQgaWQ6IHN0cmluZ1xuXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gRW50aXR5VHlwZS5jb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWYgPSBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtlbnRpdHkuc2x1Z31gXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUxhYmVsID0gZ2V0VHJhbnNsYXRpb24oZW50aXR5LmxhYmVscy5wbHVyYWwsIGkxOG4pXG4gICAgICAgICAgICAgICAgICAgIGlkID0gYG5hdi0ke2VudGl0eS5zbHVnfWBcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IEVudGl0eVR5cGUuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWYgPSBgJHthZG1pbn0vZ2xvYmFscy8ke2VudGl0eS5zbHVnfWBcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWwsIGkxOG4pXG4gICAgICAgICAgICAgICAgICAgIGlkID0gYG5hdi1nbG9iYWwtJHtlbnRpdHkuc2x1Z31gXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmtgfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9eyFuYXZPcGVuID8gLTEgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgdG89e2hyZWZ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmstaWNvbmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb24gZGlyZWN0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmstbGFiZWxgfT57ZW50aXR5TGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvTmF2R3JvdXA+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkoYWZ0ZXJOYXZMaW5rcykgJiZcbiAgICAgICAgICAgIGFmdGVyTmF2TGlua3MubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRyb2xzYH0+XG4gICAgICAgICAgICA8TG9nb3V0IHRhYkluZGV4PXshbmF2T3BlbiA/IC0xIDogdW5kZWZpbmVkfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNvbnRlbnRgfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vYmlsZS1jbG9zZWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdk9wZW4oZmFsc2UpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGFiSW5kZXg9eyFuYXZPcGVuID8gLTEgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGFtYnVyZ2VyIGlzQWN0aXZlIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7IE5hdjogQ3VzdG9tTmF2IH0gPSB7XG4gICAgICAgIE5hdjogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICB9ID0ge30sXG4gIH0gPSB1c2VDb25maWcoKVxuXG4gIHJldHVybiA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50IEN1c3RvbUNvbXBvbmVudD17Q3VzdG9tTmF2fSBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TmF2fSAvPlxufVxuIl0sIm5hbWVzIjpbIk5hdiIsImJhc2VDbGFzcyIsIkRlZmF1bHROYXYiLCJuYXZPcGVuIiwibmF2UmVmIiwic2V0TmF2T3BlbiIsInVzZU5hdiIsInBlcm1pc3Npb25zIiwidXNlciIsInVzZUF1dGgiLCJncm91cHMiLCJzZXRHcm91cHMiLCJ1c2VTdGF0ZSIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImFkbWluIiwiY29tcG9uZW50cyIsImFmdGVyTmF2TGlua3MiLCJiZWZvcmVOYXZMaW5rcyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsInJvdXRlcyIsInVzZUNvbmZpZyIsInVzZUVmZmVjdCIsImdyb3VwTmF2SXRlbXMiLCJmaWx0ZXIiLCJoaWRkZW4iLCJtYXAiLCJjb2xsZWN0aW9uIiwiZW50aXR5VG9Hcm91cCIsImVudGl0eSIsInR5cGUiLCJFbnRpdHlUeXBlIiwiZ2xvYmFsIiwibGFuZ3VhZ2UiLCJhc2lkZSIsImNsYXNzTmFtZSIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwicmVmIiwibmF2IiwiQXJyYXkiLCJpc0FycmF5IiwiQ29tcG9uZW50IiwiaSIsImtleSIsImVudGl0aWVzIiwibGFiZWwiLCJOYXZHcm91cCIsImVudGl0eUxhYmVsIiwiaHJlZiIsImlkIiwic2x1ZyIsImdldFRyYW5zbGF0aW9uIiwibGFiZWxzIiwicGx1cmFsIiwiTmF2TGluayIsImFjdGl2ZUNsYXNzTmFtZSIsInRhYkluZGV4IiwidW5kZWZpbmVkIiwidG8iLCJzcGFuIiwiQ2hldnJvbiIsImRpcmVjdGlvbiIsIkxvZ291dCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJIYW1idXJnZXIiLCJpc0FjdGl2ZSIsIkN1c3RvbU5hdiIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQThJYUE7OztlQUFBQTs7OytEQTlJOEI7OEJBQ1o7Z0NBQ1A7Z0NBSU87K0JBQ1c7Z0VBQ3RCO3NCQUNJO3dCQUNFOzhFQUNROzJCQUNSOytEQUNQO2lFQUNFO3lCQUNFO1FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsYUFBdUI7SUFDM0IsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdDLElBQUFBLGVBQU07SUFDOUMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3JDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHQyxJQUFBQSxlQUFRLEVBQVUsRUFBRTtJQUNoRCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRWhDLE1BQU0sRUFDSkMsT0FBTyxFQUNMQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFLEVBQzlDLEVBQ0RDLFdBQVcsRUFDWEMsT0FBTyxFQUNQQyxRQUFRLEVBQUVOLEtBQUssRUFBRSxFQUNsQixHQUFHTyxJQUFBQSxpQkFBUztJQUViQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1JaLFVBQ0VhLElBQUFBLDRCQUFhLEVBQ1g7ZUFDS0wsWUFDQU0sTUFBTSxDQUNMLENBQUMsRUFBRVYsT0FBTyxFQUFFVyxNQUFNLEVBQUUsRUFBRSxHQUNwQixDQUFFLENBQUEsT0FBT0EsV0FBVyxhQUFhQSxPQUFPO29CQUFFbEI7Z0JBQUssS0FBS2tCLE1BQUssR0FFNURDLEdBQUcsQ0FBQyxDQUFDQztnQkFDSixNQUFNQyxnQkFBK0I7b0JBQ25DQyxRQUFRRjtvQkFDUkcsTUFBTUMseUJBQVUsQ0FBQ0osVUFBVTtnQkFDN0I7Z0JBRUEsT0FBT0M7WUFDVDtlQUNDVCxRQUNBSyxNQUFNLENBQ0wsQ0FBQyxFQUFFVixPQUFPLEVBQUVXLE1BQU0sRUFBRSxFQUFFLEdBQ3BCLENBQUUsQ0FBQSxPQUFPQSxXQUFXLGFBQWFBLE9BQU87b0JBQUVsQjtnQkFBSyxLQUFLa0IsTUFBSyxHQUU1REMsR0FBRyxDQUFDLENBQUNNO2dCQUNKLE1BQU1KLGdCQUErQjtvQkFDbkNDLFFBQVFHO29CQUNSRixNQUFNQyx5QkFBVSxDQUFDQyxNQUFNO2dCQUN6QjtnQkFFQSxPQUFPSjtZQUNUO1NBQ0gsRUFDRHRCLGFBQ0FNO0lBR04sR0FBRztRQUFDTTtRQUFhQztRQUFTYjtRQUFhTTtRQUFNQSxLQUFLcUIsUUFBUTtRQUFFMUI7S0FBSztJQUVqRSxxQkFDRSw2QkFBQzJCO1FBQU1DLFdBQVc7WUFBQ25DO1lBQVdFLFdBQVcsQ0FBQyxFQUFFRixVQUFVLFVBQVUsQ0FBQztTQUFDLENBQUN3QixNQUFNLENBQUNZLFNBQVNDLElBQUksQ0FBQztxQkFDdEYsNkJBQUNDO1FBQUlILFdBQVcsQ0FBQyxFQUFFbkMsVUFBVSxRQUFRLENBQUM7UUFBRXVDLEtBQUtwQztxQkFDM0MsNkJBQUNxQztRQUFJTCxXQUFXLENBQUMsRUFBRW5DLFVBQVUsTUFBTSxDQUFDO09BQ2pDeUMsTUFBTUMsT0FBTyxDQUFDekIsbUJBQ2JBLGVBQWVTLEdBQUcsQ0FBQyxDQUFDaUIsV0FBV0Msa0JBQU0sNkJBQUNEO1lBQVVFLEtBQUtEO2FBQ3REbkMsT0FBT2lCLEdBQUcsQ0FBQyxDQUFDLEVBQUVvQixRQUFRLEVBQUVDLEtBQUssRUFBRSxFQUFFRjtRQUNoQyxxQkFDRSw2QkFBQ0csaUJBQVEsRUFBSztZQUFFSDtZQUFLRTtRQUFNLEdBQ3hCRCxTQUFTcEIsR0FBRyxDQUFDLENBQUMsRUFBRUcsTUFBTSxFQUFFQyxJQUFJLEVBQUUsRUFBRWM7WUFDL0IsSUFBSUs7WUFDSixJQUFJQztZQUNKLElBQUlDO1lBRUosSUFBSXJCLFNBQVNDLHlCQUFVLENBQUNKLFVBQVUsRUFBRTtnQkFDbEN1QixPQUFPLENBQUMsRUFBRXBDLE1BQU0sYUFBYSxFQUFFZSxPQUFPdUIsSUFBSSxDQUFDLENBQUM7Z0JBQzVDSCxjQUFjSSxJQUFBQSw4QkFBYyxFQUFDeEIsT0FBT3lCLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFM0M7Z0JBQ25EdUMsS0FBSyxDQUFDLElBQUksRUFBRXRCLE9BQU91QixJQUFJLENBQUMsQ0FBQztZQUMzQjtZQUVBLElBQUl0QixTQUFTQyx5QkFBVSxDQUFDQyxNQUFNLEVBQUU7Z0JBQzlCa0IsT0FBTyxDQUFDLEVBQUVwQyxNQUFNLFNBQVMsRUFBRWUsT0FBT3VCLElBQUksQ0FBQyxDQUFDO2dCQUN4Q0gsY0FBY0ksSUFBQUEsOEJBQWMsRUFBQ3hCLE9BQU9rQixLQUFLLEVBQUVuQztnQkFDM0N1QyxLQUFLLENBQUMsV0FBVyxFQUFFdEIsT0FBT3VCLElBQUksQ0FBQyxDQUFDO1lBQ2xDO1lBRUEscUJBQ0UsNkJBQUNJLHVCQUFPO2dCQUNOQyxpQkFBZ0I7Z0JBQ2hCdEIsV0FBVyxDQUFDLEVBQUVuQyxVQUFVLE1BQU0sQ0FBQztnQkFDL0JtRCxJQUFJQTtnQkFDSk4sS0FBS0Q7Z0JBQ0xjLFVBQVUsQ0FBQ3hELFVBQVUsQ0FBQyxJQUFJeUQ7Z0JBQzFCQyxJQUFJVjs2QkFFSiw2QkFBQ1c7Z0JBQUsxQixXQUFXLENBQUMsRUFBRW5DLFVBQVUsV0FBVyxDQUFDOzZCQUN4Qyw2QkFBQzhELGdCQUFPO2dCQUFDQyxXQUFVOytCQUVyQiw2QkFBQ0Y7Z0JBQUsxQixXQUFXLENBQUMsRUFBRW5DLFVBQVUsWUFBWSxDQUFDO2VBQUdpRDtRQUdwRDtJQUdOLElBQ0NSLE1BQU1DLE9BQU8sQ0FBQzFCLGtCQUNiQSxjQUFjVSxHQUFHLENBQUMsQ0FBQ2lCLFdBQVdDLGtCQUFNLDZCQUFDRDtZQUFVRSxLQUFLRDsyQkFDdEQsNkJBQUNOO1FBQUlILFdBQVcsQ0FBQyxFQUFFbkMsVUFBVSxVQUFVLENBQUM7cUJBQ3RDLDZCQUFDZ0UsZUFBTTtRQUFDTixVQUFVLENBQUN4RCxVQUFVLENBQUMsSUFBSXlEO3lCQUl4Qyw2QkFBQ3JCO1FBQUlILFdBQVcsQ0FBQyxFQUFFbkMsVUFBVSxRQUFRLENBQUM7cUJBQ3BDLDZCQUFDc0M7UUFBSUgsV0FBVyxDQUFDLEVBQUVuQyxVQUFVLGdCQUFnQixDQUFDO3FCQUM1Qyw2QkFBQ2lFO1FBQ0M5QixXQUFXLENBQUMsRUFBRW5DLFVBQVUsY0FBYyxDQUFDO1FBQ3ZDa0UsU0FBUztZQUNQOUQsV0FBVztRQUNiO1FBQ0FzRCxVQUFVLENBQUN4RCxVQUFVLENBQUMsSUFBSXlEO1FBQzFCN0IsTUFBSztxQkFFTCw2QkFBQ3FDLG9CQUFTO1FBQUNDLFVBQUFBOztBQU12QjtBQUVPLE1BQU1yRSxNQUFnQjtJQUMzQixNQUFNLEVBQ0plLE9BQU8sRUFDTEMsWUFBWSxFQUFFaEIsS0FBS3NFLFNBQVMsRUFBRSxHQUFHO1FBQy9CdEUsS0FBSzREO0lBQ1AsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxDQUFDLEVBQ1AsR0FBR3RDLElBQUFBLGlCQUFTO0lBRWIscUJBQU8sNkJBQUNpRCw4QkFBcUI7UUFBQ0MsaUJBQWlCRjtRQUFXRyxrQkFBa0J2RTs7QUFDOUUifQ==