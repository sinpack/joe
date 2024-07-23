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
const _Hamburger = require("../../elements/Hamburger");
const _Header = require("../../elements/Header");
const _Nav = require("../../elements/Nav");
const _NavToggler = require("../../elements/Nav/NavToggler");
const _context = require("../../elements/Nav/context");
const _Config = require("../../utilities/Config");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
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
const baseClass = 'template-default';
const Default = ({ children, className })=>{
    const { admin: { components: { Nav: CustomNav } = {
        Nav: undefined
    } } = {} } = (0, _Config.useConfig)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    const { navOpen } = (0, _context.useNav)();
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: `${t('dashboard')} Payload`,
        keywords: `${t('dashboard')}, Payload`,
        title: t('dashboard')
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__nav-toggler-wrapper`,
        id: "nav-toggler"
    }, /*#__PURE__*/ _react.default.createElement(_NavToggler.NavToggler, {
        className: `${baseClass}__nav-toggler`
    }, /*#__PURE__*/ _react.default.createElement(_Hamburger.Hamburger, {
        closeIcon: "collapse",
        isActive: navOpen
    }))), /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            className,
            navOpen && `${baseClass}--nav-open`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomNav,
        DefaultComponent: _Nav.Nav
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement(_Header.AppHeader, null), children)));
};
const _default = Default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RlbXBsYXRlcy9EZWZhdWx0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9leHBvcnRzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IEhhbWJ1cmdlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0hhbWJ1cmdlcidcbmltcG9ydCB7IEFwcEhlYWRlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0hlYWRlcidcbmltcG9ydCB7IE5hdiBhcyBEZWZhdWx0TmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvTmF2J1xuaW1wb3J0IHsgTmF2VG9nZ2xlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL05hdi9OYXZUb2dnbGVyJ1xuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvTmF2L2NvbnRleHQnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnXG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RlbXBsYXRlLWRlZmF1bHQnXG5cbmNvbnN0IERlZmF1bHQ6IFJlYWN0LkZDPFxuICBQcm9wcyAmIHsgY29sbGVjdGlvbj86IFNhbml0aXplZENvbGxlY3Rpb25Db25maWc7IGdsb2JhbD86IFNhbml0aXplZEdsb2JhbENvbmZpZyB9XG4+ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czogeyBOYXY6IEN1c3RvbU5hdiB9ID0ge1xuICAgICAgICBOYXY6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgfSA9IHt9LFxuICB9ID0gdXNlQ29uZmlnKClcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICBjb25zdCB7IG5hdk9wZW4gfSA9IHVzZU5hdigpXG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TWV0YVxuICAgICAgICBkZXNjcmlwdGlvbj17YCR7dCgnZGFzaGJvYXJkJyl9IFBheWxvYWRgfVxuICAgICAgICBrZXl3b3Jkcz17YCR7dCgnZGFzaGJvYXJkJyl9LCBQYXlsb2FkYH1cbiAgICAgICAgdGl0bGU9e3QoJ2Rhc2hib2FyZCcpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19uYXYtdG9nZ2xlci13cmFwcGVyYH0gaWQ9XCJuYXYtdG9nZ2xlclwiPlxuICAgICAgICA8TmF2VG9nZ2xlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX25hdi10b2dnbGVyYH0+XG4gICAgICAgICAgPEhhbWJ1cmdlciBjbG9zZUljb249XCJjb2xsYXBzZVwiIGlzQWN0aXZlPXtuYXZPcGVufSAvPlxuICAgICAgICA8L05hdlRvZ2dsZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtbYmFzZUNsYXNzLCBjbGFzc05hbWUsIG5hdk9wZW4gJiYgYCR7YmFzZUNsYXNzfS0tbmF2LW9wZW5gXVxuICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAuam9pbignICcpfVxuICAgICAgPlxuICAgICAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50IEN1c3RvbUNvbXBvbmVudD17Q3VzdG9tTmF2fSBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TmF2fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICAgIDxBcHBIZWFkZXIgLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRGVmYXVsdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiTmF2IiwiQ3VzdG9tTmF2IiwidW5kZWZpbmVkIiwidXNlQ29uZmlnIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibmF2T3BlbiIsInVzZU5hdiIsIkZyYWdtZW50IiwiTWV0YSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ0aXRsZSIsImRpdiIsImlkIiwiTmF2VG9nZ2xlciIsIkhhbWJ1cmdlciIsImNsb3NlSWNvbiIsImlzQWN0aXZlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0Q29tcG9uZW50IiwiRGVmYXVsdE5hdiIsIkFwcEhlYWRlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNERBOzs7ZUFBQTs7OytEQTVEZ0M7OEJBQ0Q7MkJBS0w7d0JBQ0E7cUJBQ1E7NEJBQ1A7eUJBQ0o7d0JBQ0c7NkRBQ1Q7OEVBQ2lCO1FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsVUFFRixDQUFDLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFO0lBQzFCLE1BQU0sRUFDSkMsT0FBTyxFQUNMQyxZQUFZLEVBQUVDLEtBQUtDLFNBQVMsRUFBRSxHQUFHO1FBQy9CRCxLQUFLRTtJQUNQLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxFQUNQLEdBQUdDLElBQUFBLGlCQUFTO0lBRWIsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUU3QixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHQyxJQUFBQSxlQUFNO0lBRTFCLHFCQUNFLDZCQUFDQyxlQUFRLHNCQUNQLDZCQUFDQyxhQUFJO1FBQ0hDLGFBQWEsQ0FBQyxFQUFFTixFQUFFLGFBQWEsUUFBUSxDQUFDO1FBQ3hDTyxVQUFVLENBQUMsRUFBRVAsRUFBRSxhQUFhLFNBQVMsQ0FBQztRQUN0Q1EsT0FBT1IsRUFBRTtzQkFFWCw2QkFBQ1M7UUFBSWhCLFdBQVcsQ0FBQyxFQUFFSCxVQUFVLHFCQUFxQixDQUFDO1FBQUVvQixJQUFHO3FCQUN0RCw2QkFBQ0Msc0JBQVU7UUFBQ2xCLFdBQVcsQ0FBQyxFQUFFSCxVQUFVLGFBQWEsQ0FBQztxQkFDaEQsNkJBQUNzQixvQkFBUztRQUFDQyxXQUFVO1FBQVdDLFVBQVVaO3dCQUc5Qyw2QkFBQ087UUFDQ2hCLFdBQVc7WUFBQ0g7WUFBV0c7WUFBV1MsV0FBVyxDQUFDLEVBQUVaLFVBQVUsVUFBVSxDQUFDO1NBQUMsQ0FDbkV5QixNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztxQkFFUiw2QkFBQ0MsOEJBQXFCO1FBQUNDLGlCQUFpQnRCO1FBQVd1QixrQkFBa0JDLFFBQVU7c0JBQy9FLDZCQUFDWjtRQUFJaEIsV0FBVyxDQUFDLEVBQUVILFVBQVUsTUFBTSxDQUFDO3FCQUNsQyw2QkFBQ2dDLGlCQUFTLFNBQ1Q5QjtBQUtYO01BRUEsV0FBZUQifQ==