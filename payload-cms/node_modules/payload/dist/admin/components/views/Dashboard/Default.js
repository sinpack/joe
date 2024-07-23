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
const _reactrouterdom = require("react-router-dom");
const _getTranslation = require("../../../../utilities/getTranslation");
const _groupNavItems = require("../../../utilities/groupNavItems");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _Card = /*#__PURE__*/ _interop_require_default(require("../../elements/Card"));
const _Gutter = require("../../elements/Gutter");
const _Config = require("../../utilities/Config");
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
const baseClass = 'dashboard';
const Dashboard = (props)=>{
    const { collections, globals, permissions, user } = props;
    const { push } = (0, _reactrouterdom.useHistory)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const { admin: { components: { afterDashboard, beforeDashboard } }, routes: { admin } } = (0, _Config.useConfig)();
    const [groups, setGroups] = (0, _react.useState)([]);
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
        i18n,
        permissions,
        user
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: `${baseClass}__wrap`
    }, Array.isArray(beforeDashboard) && beforeDashboard.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), groups.map(({ entities, label }, groupIndex)=>{
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__group`,
            key: groupIndex
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            className: `${baseClass}__label`
        }, label), /*#__PURE__*/ _react.default.createElement("ul", {
            className: `${baseClass}__card-list`
        }, entities.map(({ entity, type }, entityIndex)=>{
            let title;
            let buttonAriaLabel;
            let createHREF;
            let onClick;
            let hasCreatePermission;
            if (type === _groupNavItems.EntityType.collection) {
                title = (0, _getTranslation.getTranslation)(entity.labels.plural, i18n);
                buttonAriaLabel = t('showAllLabel', {
                    label: title
                });
                onClick = ()=>push({
                        pathname: `${admin}/collections/${entity.slug}`
                    });
                createHREF = `${admin}/collections/${entity.slug}/create`;
                hasCreatePermission = permissions?.collections?.[entity.slug]?.create?.permission;
            }
            if (type === _groupNavItems.EntityType.global) {
                title = (0, _getTranslation.getTranslation)(entity.label, i18n);
                buttonAriaLabel = t('editLabel', {
                    label: (0, _getTranslation.getTranslation)(entity.label, i18n)
                });
                onClick = ()=>push({
                        pathname: `${admin}/globals/${entity.slug}`
                    });
            }
            return /*#__PURE__*/ _react.default.createElement("li", {
                key: entityIndex
            }, /*#__PURE__*/ _react.default.createElement(_Card.default, {
                actions: hasCreatePermission && type === _groupNavItems.EntityType.collection ? /*#__PURE__*/ _react.default.createElement(_Button.default, {
                    "aria-label": t('createNewLabel', {
                        label: (0, _getTranslation.getTranslation)(entity.labels.singular, i18n)
                    }),
                    buttonStyle: "icon-label",
                    el: "link",
                    icon: "plus",
                    iconStyle: "with-border",
                    round: true,
                    to: createHREF
                }) : undefined,
                buttonAriaLabel: buttonAriaLabel,
                id: `card-${entity.slug}`,
                onClick: onClick,
                title: title,
                titleAs: "h3"
            }));
        })));
    }), Array.isArray(afterDashboard) && afterDashboard.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        }))));
};
const _default = Dashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0Rhc2hib2FyZC9EZWZhdWx0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgRW50aXR5VG9Hcm91cCwgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvZ3JvdXBOYXZJdGVtcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IEVudGl0eVR5cGUsIGdyb3VwTmF2SXRlbXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvZ3JvdXBOYXZJdGVtcydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vZWxlbWVudHMvQnV0dG9uJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vZWxlbWVudHMvQ2FyZCdcbmltcG9ydCB7IEd1dHRlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0d1dHRlcidcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Rhc2hib2FyZCdcblxuY29uc3QgRGFzaGJvYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9ucywgZ2xvYmFscywgcGVybWlzc2lvbnMsIHVzZXIgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG5cbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7IGFmdGVyRGFzaGJvYXJkLCBiZWZvcmVEYXNoYm9hcmQgfSxcbiAgICB9LFxuICAgIHJvdXRlczogeyBhZG1pbiB9LFxuICB9ID0gdXNlQ29uZmlnKClcblxuICBjb25zdCBbZ3JvdXBzLCBzZXRHcm91cHNdID0gdXNlU3RhdGU8R3JvdXBbXT4oW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRHcm91cHMoXG4gICAgICBncm91cE5hdkl0ZW1zKFxuICAgICAgICBbXG4gICAgICAgICAgLi4uY29sbGVjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+XG4gICAgICAgICAgICAgICAgISh0eXBlb2YgaGlkZGVuID09PSAnZnVuY3Rpb24nID8gaGlkZGVuKHsgdXNlciB9KSA6IGhpZGRlbiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudGl0eVRvR3JvdXA6IEVudGl0eVRvR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5OiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHR5cGU6IEVudGl0eVR5cGUuY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBlbnRpdHlUb0dyb3VwXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAuLi5nbG9iYWxzXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAoeyBhZG1pbjogeyBoaWRkZW4gfSB9KSA9PlxuICAgICAgICAgICAgICAgICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgoZ2xvYmFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudGl0eVRvR3JvdXA6IEVudGl0eVRvR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5OiBnbG9iYWwsXG4gICAgICAgICAgICAgICAgdHlwZTogRW50aXR5VHlwZS5nbG9iYWwsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gZW50aXR5VG9Hcm91cFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHBlcm1pc3Npb25zLFxuICAgICAgICBpMThuLFxuICAgICAgKSxcbiAgICApXG4gIH0sIFtjb2xsZWN0aW9ucywgZ2xvYmFscywgaTE4biwgcGVybWlzc2lvbnMsIHVzZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8R3V0dGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICB7QXJyYXkuaXNBcnJheShiZWZvcmVEYXNoYm9hcmQpICYmXG4gICAgICAgICAgYmVmb3JlRGFzaGJvYXJkLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICB7Z3JvdXBzLm1hcCgoeyBlbnRpdGllcywgbGFiZWwgfSwgZ3JvdXBJbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZ3JvdXBgfSBrZXk9e2dyb3VwSW5kZXh9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PntsYWJlbH08L2gyPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jYXJkLWxpc3RgfT5cbiAgICAgICAgICAgICAgICB7ZW50aXRpZXMubWFwKCh7IGVudGl0eSwgdHlwZSB9LCBlbnRpdHlJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICAgIGxldCBidXR0b25BcmlhTGFiZWw6IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUhSRUY6IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgbGV0IG9uQ2xpY2s6ICgpID0+IHZvaWRcbiAgICAgICAgICAgICAgICAgIGxldCBoYXNDcmVhdGVQZXJtaXNzaW9uOiBib29sZWFuXG5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBFbnRpdHlUeXBlLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWxzLnBsdXJhbCwgaTE4bilcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsID0gdCgnc2hvd0FsbExhYmVsJywgeyBsYWJlbDogdGl0bGUgfSlcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9ICgpID0+IHB1c2goeyBwYXRobmFtZTogYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7ZW50aXR5LnNsdWd9YCB9KVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVIUkVGID0gYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7ZW50aXR5LnNsdWd9L2NyZWF0ZWBcbiAgICAgICAgICAgICAgICAgICAgaGFzQ3JlYXRlUGVybWlzc2lvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bZW50aXR5LnNsdWddPy5jcmVhdGU/LnBlcm1pc3Npb25cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IEVudGl0eVR5cGUuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gZ2V0VHJhbnNsYXRpb24oZW50aXR5LmxhYmVsLCBpMThuKVxuICAgICAgICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWwgPSB0KCdlZGl0TGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWwsIGkxOG4pIH0pXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSAoKSA9PiBwdXNoKHsgcGF0aG5hbWU6IGAke2FkbWlufS9nbG9iYWxzLyR7ZW50aXR5LnNsdWd9YCB9KVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtlbnRpdHlJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDcmVhdGVQZXJtaXNzaW9uICYmIHR5cGUgPT09IEVudGl0eVR5cGUuY29sbGVjdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdjcmVhdGVOZXdMYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGVudGl0eS5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TdHlsZT1cIndpdGgtYm9yZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17Y3JlYXRlSFJFRn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw9e2J1dHRvbkFyaWFMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgY2FyZC0ke2VudGl0eS5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVBcz1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAge0FycmF5LmlzQXJyYXkoYWZ0ZXJEYXNoYm9hcmQpICYmXG4gICAgICAgICAgYWZ0ZXJEYXNoYm9hcmQubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICA8L0d1dHRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEYXNoYm9hcmQiLCJwcm9wcyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsInBlcm1pc3Npb25zIiwidXNlciIsInB1c2giLCJ1c2VIaXN0b3J5IiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImFkbWluIiwiY29tcG9uZW50cyIsImFmdGVyRGFzaGJvYXJkIiwiYmVmb3JlRGFzaGJvYXJkIiwicm91dGVzIiwidXNlQ29uZmlnIiwiZ3JvdXBzIiwic2V0R3JvdXBzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJncm91cE5hdkl0ZW1zIiwiZmlsdGVyIiwiaGlkZGVuIiwibWFwIiwiY29sbGVjdGlvbiIsImVudGl0eVRvR3JvdXAiLCJlbnRpdHkiLCJ0eXBlIiwiRW50aXR5VHlwZSIsImdsb2JhbCIsImRpdiIsImNsYXNzTmFtZSIsIkd1dHRlciIsIkFycmF5IiwiaXNBcnJheSIsIkNvbXBvbmVudCIsImkiLCJrZXkiLCJlbnRpdGllcyIsImxhYmVsIiwiZ3JvdXBJbmRleCIsImgyIiwidWwiLCJlbnRpdHlJbmRleCIsInRpdGxlIiwiYnV0dG9uQXJpYUxhYmVsIiwiY3JlYXRlSFJFRiIsIm9uQ2xpY2siLCJoYXNDcmVhdGVQZXJtaXNzaW9uIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbHMiLCJwbHVyYWwiLCJwYXRobmFtZSIsInNsdWciLCJjcmVhdGUiLCJwZXJtaXNzaW9uIiwibGkiLCJDYXJkIiwiYWN0aW9ucyIsIkJ1dHRvbiIsImFyaWEtbGFiZWwiLCJzaW5ndWxhciIsImJ1dHRvblN0eWxlIiwiZWwiLCJpY29uIiwiaWNvblN0eWxlIiwicm91bmQiLCJ0byIsInVuZGVmaW5lZCIsImlkIiwidGl0bGVBcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTJJQTs7O2VBQUE7OzsrREEzSTJDOzhCQUNaO2dDQUNKO2dDQUtJOytCQUNXOytEQUN2Qjs2REFDRjt3QkFDTTt3QkFDRztRQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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