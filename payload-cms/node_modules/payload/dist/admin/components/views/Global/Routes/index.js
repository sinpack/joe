"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GlobalRoutes", {
    enumerable: true,
    get: function() {
        return GlobalRoutes;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactrouterdom = require("react-router-dom");
const _Auth = require("../../../utilities/Auth");
const _Config = require("../../../utilities/Config");
const _NotFound = /*#__PURE__*/ _interop_require_default(require("../../NotFound"));
const _CustomComponent = require("./CustomComponent");
const _custom = require("./custom");
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
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Unauthorized = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../../Unauthorized"))));
const GlobalRoutes = (props)=>{
    const { global, permissions } = props;
    const match = (0, _reactrouterdom.useRouteMatch)();
    const { admin: { livePreview }, routes: { admin: adminRoute } } = (0, _Config.useConfig)();
    const { user } = (0, _Auth.useAuth)();
    const livePreviewEnabled = livePreview?.globals?.some((c)=>c === global.slug) || global?.admin?.livePreview;
    return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Switch, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${global.slug}-versions`,
        path: `${adminRoute}/globals/${global.slug}/versions`
    }, permissions?.readVersions?.permission ? /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomGlobalComponent, {
        view: "Versions",
        ...props
    }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)), global?.admin?.hideAPIURL !== true && /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${global.slug}-api`,
        path: `${adminRoute}/globals/${global.slug}/api`
    }, permissions?.read ? /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomGlobalComponent, {
        view: "API",
        ...props
    }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${global.slug}-view-version`,
        path: `${adminRoute}/globals/${global.slug}/versions/:versionID`
    }, permissions?.readVersions?.permission ? /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomGlobalComponent, {
        view: "Version",
        ...props
    }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)), livePreviewEnabled && /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${global.slug}-live-preview`,
        path: `${adminRoute}/globals/${global.slug}/preview`
    }, /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomGlobalComponent, {
        view: "LivePreview",
        ...props
    })), (0, _custom.globalCustomRoutes)({
        global,
        match,
        permissions,
        user
    }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${global.slug}-view`,
        path: `${adminRoute}/globals/${global.slug}`
    }, /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomGlobalComponent, {
        view: "Default",
        ...props
    })), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        path: `${match.url}*`
    }, /*#__PURE__*/ _react.default.createElement(_NotFound.default, {
        marginTop: "large"
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0dsb2JhbC9Sb3V0ZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhenkgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHVzZVJvdXRlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgdHlwZSB7IEZpZWxkVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcydcbmltcG9ydCB0eXBlIHsgR2xvYmFsRWRpdFZpZXdQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uLy4uL05vdEZvdW5kJ1xuaW1wb3J0IHsgQ3VzdG9tR2xvYmFsQ29tcG9uZW50IH0gZnJvbSAnLi9DdXN0b21Db21wb25lbnQnXG5pbXBvcnQgeyBnbG9iYWxDdXN0b21Sb3V0ZXMgfSBmcm9tICcuL2N1c3RvbSdcblxuLy8gQHRzLWV4cGVjdC1lcnJvciBKdXN0IFR5cGVTY3JpcHQgYmVpbmcgYnJva2VuIC8vIFRPRE86IE9wZW4gVHlwZVNjcmlwdCBpc3N1ZVxuY29uc3QgVW5hdXRob3JpemVkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uLy4uL1VuYXV0aG9yaXplZCcpKVxuXG5leHBvcnQgY29uc3QgR2xvYmFsUm91dGVzOiBSZWFjdC5GQzxcbiAgR2xvYmFsRWRpdFZpZXdQcm9wcyAmIHtcbiAgICBmaWVsZFR5cGVzOiBGaWVsZFR5cGVzXG4gIH1cbj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBnbG9iYWwsIHBlcm1pc3Npb25zIH0gPSBwcm9wc1xuXG4gIGNvbnN0IG1hdGNoID0gdXNlUm91dGVNYXRjaCgpXG5cbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IGxpdmVQcmV2aWV3IH0sXG4gICAgcm91dGVzOiB7IGFkbWluOiBhZG1pblJvdXRlIH0sXG4gIH0gPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpXG5cbiAgY29uc3QgbGl2ZVByZXZpZXdFbmFibGVkID1cbiAgICBsaXZlUHJldmlldz8uZ2xvYmFscz8uc29tZSgoYykgPT4gYyA9PT0gZ2xvYmFsLnNsdWcpIHx8IGdsb2JhbD8uYWRtaW4/LmxpdmVQcmV2aWV3XG5cbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlXG4gICAgICAgIGV4YWN0XG4gICAgICAgIGtleT17YCR7Z2xvYmFsLnNsdWd9LXZlcnNpb25zYH1cbiAgICAgICAgcGF0aD17YCR7YWRtaW5Sb3V0ZX0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9uc2B9XG4gICAgICA+XG4gICAgICAgIHtwZXJtaXNzaW9ucz8ucmVhZFZlcnNpb25zPy5wZXJtaXNzaW9uID8gKFxuICAgICAgICAgIDxDdXN0b21HbG9iYWxDb21wb25lbnQgdmlldz1cIlZlcnNpb25zXCIgey4uLnByb3BzfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxVbmF1dGhvcml6ZWQgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUm91dGU+XG4gICAgICB7Z2xvYmFsPy5hZG1pbj8uaGlkZUFQSVVSTCAhPT0gdHJ1ZSAmJiAoXG4gICAgICAgIDxSb3V0ZSBleGFjdCBrZXk9e2Ake2dsb2JhbC5zbHVnfS1hcGlgfSBwYXRoPXtgJHthZG1pblJvdXRlfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9L2FwaWB9PlxuICAgICAgICAgIHtwZXJtaXNzaW9ucz8ucmVhZCA/IDxDdXN0b21HbG9iYWxDb21wb25lbnQgdmlldz1cIkFQSVwiIHsuLi5wcm9wc30gLz4gOiA8VW5hdXRob3JpemVkIC8+fVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgKX1cbiAgICAgIDxSb3V0ZVxuICAgICAgICBleGFjdFxuICAgICAgICBrZXk9e2Ake2dsb2JhbC5zbHVnfS12aWV3LXZlcnNpb25gfVxuICAgICAgICBwYXRoPXtgJHthZG1pblJvdXRlfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9L3ZlcnNpb25zLzp2ZXJzaW9uSURgfVxuICAgICAgPlxuICAgICAgICB7cGVybWlzc2lvbnM/LnJlYWRWZXJzaW9ucz8ucGVybWlzc2lvbiA/IChcbiAgICAgICAgICA8Q3VzdG9tR2xvYmFsQ29tcG9uZW50IHZpZXc9XCJWZXJzaW9uXCIgey4uLnByb3BzfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxVbmF1dGhvcml6ZWQgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUm91dGU+XG4gICAgICB7bGl2ZVByZXZpZXdFbmFibGVkICYmIChcbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgZXhhY3RcbiAgICAgICAgICBrZXk9e2Ake2dsb2JhbC5zbHVnfS1saXZlLXByZXZpZXdgfVxuICAgICAgICAgIHBhdGg9e2Ake2FkbWluUm91dGV9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30vcHJldmlld2B9XG4gICAgICAgID5cbiAgICAgICAgICA8Q3VzdG9tR2xvYmFsQ29tcG9uZW50IHZpZXc9XCJMaXZlUHJldmlld1wiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICl9XG4gICAgICB7Z2xvYmFsQ3VzdG9tUm91dGVzKHtcbiAgICAgICAgZ2xvYmFsLFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgIHVzZXIsXG4gICAgICB9KX1cbiAgICAgIDxSb3V0ZSBleGFjdCBrZXk9e2Ake2dsb2JhbC5zbHVnfS12aWV3YH0gcGF0aD17YCR7YWRtaW5Sb3V0ZX0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfWB9PlxuICAgICAgICA8Q3VzdG9tR2xvYmFsQ29tcG9uZW50IHZpZXc9XCJEZWZhdWx0XCIgey4uLnByb3BzfSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9KmB9PlxuICAgICAgICA8Tm90Rm91bmQgbWFyZ2luVG9wPVwibGFyZ2VcIiAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1N3aXRjaD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkdsb2JhbFJvdXRlcyIsIlVuYXV0aG9yaXplZCIsImxhenkiLCJwcm9wcyIsImdsb2JhbCIsInBlcm1pc3Npb25zIiwibWF0Y2giLCJ1c2VSb3V0ZU1hdGNoIiwiYWRtaW4iLCJsaXZlUHJldmlldyIsInJvdXRlcyIsImFkbWluUm91dGUiLCJ1c2VDb25maWciLCJ1c2VyIiwidXNlQXV0aCIsImxpdmVQcmV2aWV3RW5hYmxlZCIsImdsb2JhbHMiLCJzb21lIiwiYyIsInNsdWciLCJTd2l0Y2giLCJSb3V0ZSIsImV4YWN0Iiwia2V5IiwicGF0aCIsInJlYWRWZXJzaW9ucyIsInBlcm1pc3Npb24iLCJDdXN0b21HbG9iYWxDb21wb25lbnQiLCJ2aWV3IiwiaGlkZUFQSVVSTCIsInJlYWQiLCJnbG9iYWxDdXN0b21Sb3V0ZXMiLCJ1cmwiLCJOb3RGb3VuZCIsIm1hcmdpblRvcCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQmFBOzs7ZUFBQUE7OzsrREFoQlE7Z0NBRXdCO3NCQUtyQjt3QkFDRTtpRUFDTDtpQ0FDaUI7d0JBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLCtFQUErRTtBQUMvRSxNQUFNQyw2QkFBZUMsSUFBQUEsV0FBSSxFQUFDLElBQU0sbUVBQUEsUUFBTztBQUVoQyxNQUFN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