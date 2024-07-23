"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CollectionRoutes", {
    enumerable: true,
    get: function() {
        return CollectionRoutes;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactrouterdom = require("react-router-dom");
const _Auth = require("../../../../utilities/Auth");
const _Config = require("../../../../utilities/Config");
const _NotFound = /*#__PURE__*/ _interop_require_default(require("../../../NotFound"));
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
const Unauthorized = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../../../Unauthorized"))));
const CollectionRoutes = (props)=>{
    const { collection, permissions } = props;
    const match = (0, _reactrouterdom.useRouteMatch)();
    const { admin: { livePreview }, routes: { admin: adminRoute } } = (0, _Config.useConfig)();
    const { user } = (0, _Auth.useAuth)();
    const livePreviewEnabled = livePreview?.collections?.some((c)=>c === collection.slug) || collection?.admin?.livePreview;
    return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Switch, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${collection.slug}-versions`,
        path: `${adminRoute}/collections/${collection.slug}/:id/versions`
    }, permissions?.readVersions?.permission ? /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomCollectionComponent, {
        view: "Versions",
        ...props
    }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)), collection?.admin?.hideAPIURL !== true && /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${collection.slug}-api`,
        path: `${adminRoute}/collections/${collection.slug}/:id/api`
    }, permissions?.read ? /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomCollectionComponent, {
        view: "API",
        ...props
    }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${collection.slug}-view-version`,
        path: `${adminRoute}/collections/${collection.slug}/:id/versions/:versionID`
    }, permissions?.readVersions?.permission ? /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomCollectionComponent, {
        view: "Version",
        ...props
    }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)), livePreviewEnabled && /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${collection.slug}-live-preview`,
        path: `${adminRoute}/collections/${collection.slug}/:id/preview`
    }, /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomCollectionComponent, {
        view: "LivePreview",
        ...props
    })), (0, _custom.collectionCustomRoutes)({
        collection,
        match,
        permissions,
        user
    }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        exact: true,
        key: `${collection.slug}-view`,
        path: `${adminRoute}/collections/${collection.slug}/:id`
    }, /*#__PURE__*/ _react.default.createElement(_CustomComponent.CustomCollectionComponent, {
        view: "Default",
        ...props
    })), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        path: `${match.url}*`
    }, /*#__PURE__*/ _react.default.createElement(_NotFound.default, {
        marginTop: "large"
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvUm91dGVzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBGaWVsZFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb25FZGl0Vmlld1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vLi4vLi4vTm90Rm91bmQnXG5pbXBvcnQgeyBDdXN0b21Db2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9DdXN0b21Db21wb25lbnQnXG5pbXBvcnQgeyBjb2xsZWN0aW9uQ3VzdG9tUm91dGVzIH0gZnJvbSAnLi9jdXN0b20nXG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgSnVzdCBUeXBlU2NyaXB0IGJlaW5nIGJyb2tlbiAvLyBUT0RPOiBPcGVuIFR5cGVTY3JpcHQgaXNzdWVcbmNvbnN0IFVuYXV0aG9yaXplZCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9VbmF1dGhvcml6ZWQnKSlcblxuZXhwb3J0IGNvbnN0IENvbGxlY3Rpb25Sb3V0ZXM6IFJlYWN0LkZDPFxuICBDb2xsZWN0aW9uRWRpdFZpZXdQcm9wcyAmIHtcbiAgICBmaWVsZFR5cGVzOiBGaWVsZFR5cGVzXG4gIH1cbj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uLCBwZXJtaXNzaW9ucyB9ID0gcHJvcHNcblxuICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2goKVxuXG4gIGNvbnN0IHtcbiAgICBhZG1pbjogeyBsaXZlUHJldmlldyB9LFxuICAgIHJvdXRlczogeyBhZG1pbjogYWRtaW5Sb3V0ZSB9LFxuICB9ID0gdXNlQ29uZmlnKClcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKVxuXG4gIGNvbnN0IGxpdmVQcmV2aWV3RW5hYmxlZCA9XG4gICAgbGl2ZVByZXZpZXc/LmNvbGxlY3Rpb25zPy5zb21lKChjKSA9PiBjID09PSBjb2xsZWN0aW9uLnNsdWcpIHx8IGNvbGxlY3Rpb24/LmFkbWluPy5saXZlUHJldmlld1xuXG4gIHJldHVybiAoXG4gICAgPFN3aXRjaD5cbiAgICAgIDxSb3V0ZVxuICAgICAgICBleGFjdFxuICAgICAgICBrZXk9e2Ake2NvbGxlY3Rpb24uc2x1Z30tdmVyc2lvbnNgfVxuICAgICAgICBwYXRoPXtgJHthZG1pblJvdXRlfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vOmlkL3ZlcnNpb25zYH1cbiAgICAgID5cbiAgICAgICAge3Blcm1pc3Npb25zPy5yZWFkVmVyc2lvbnM/LnBlcm1pc3Npb24gPyAoXG4gICAgICAgICAgPEN1c3RvbUNvbGxlY3Rpb25Db21wb25lbnQgdmlldz1cIlZlcnNpb25zXCIgey4uLnByb3BzfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxVbmF1dGhvcml6ZWQgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUm91dGU+XG4gICAgICB7Y29sbGVjdGlvbj8uYWRtaW4/LmhpZGVBUElVUkwgIT09IHRydWUgJiYgKFxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBleGFjdFxuICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS1hcGlgfVxuICAgICAgICAgIHBhdGg9e2Ake2FkbWluUm91dGV9L2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbi5zbHVnfS86aWQvYXBpYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtwZXJtaXNzaW9ucz8ucmVhZCA/IChcbiAgICAgICAgICAgIDxDdXN0b21Db2xsZWN0aW9uQ29tcG9uZW50IHZpZXc9XCJBUElcIiB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxVbmF1dGhvcml6ZWQgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgKX1cbiAgICAgIDxSb3V0ZVxuICAgICAgICBleGFjdFxuICAgICAgICBrZXk9e2Ake2NvbGxlY3Rpb24uc2x1Z30tdmlldy12ZXJzaW9uYH1cbiAgICAgICAgcGF0aD17YCR7YWRtaW5Sb3V0ZX0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LzppZC92ZXJzaW9ucy86dmVyc2lvbklEYH1cbiAgICAgID5cbiAgICAgICAge3Blcm1pc3Npb25zPy5yZWFkVmVyc2lvbnM/LnBlcm1pc3Npb24gPyAoXG4gICAgICAgICAgPEN1c3RvbUNvbGxlY3Rpb25Db21wb25lbnQgdmlldz1cIlZlcnNpb25cIiB7Li4ucHJvcHN9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFVuYXV0aG9yaXplZCAvPlxuICAgICAgICApfVxuICAgICAgPC9Sb3V0ZT5cbiAgICAgIHtsaXZlUHJldmlld0VuYWJsZWQgJiYgKFxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBleGFjdFxuICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS1saXZlLXByZXZpZXdgfVxuICAgICAgICAgIHBhdGg9e2Ake2FkbWluUm91dGV9L2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbi5zbHVnfS86aWQvcHJldmlld2B9XG4gICAgICAgID5cbiAgICAgICAgICA8Q3VzdG9tQ29sbGVjdGlvbkNvbXBvbmVudCB2aWV3PVwiTGl2ZVByZXZpZXdcIiB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICApfVxuICAgICAge2NvbGxlY3Rpb25DdXN0b21Sb3V0ZXMoe1xuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgIHVzZXIsXG4gICAgICB9KX1cbiAgICAgIDxSb3V0ZVxuICAgICAgICBleGFjdFxuICAgICAgICBrZXk9e2Ake2NvbGxlY3Rpb24uc2x1Z30tdmlld2B9XG4gICAgICAgIHBhdGg9e2Ake2FkbWluUm91dGV9L2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbi5zbHVnfS86aWRgfVxuICAgICAgPlxuICAgICAgICA8Q3VzdG9tQ29sbGVjdGlvbkNvbXBvbmVudCB2aWV3PVwiRGVmYXVsdFwiIHsuLi5wcm9wc30gLz5cbiAgICAgIDwvUm91dGU+XG4gICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfSpgfT5cbiAgICAgICAgPE5vdEZvdW5kIG1hcmdpblRvcD1cImxhcmdlXCIgLz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Td2l0Y2g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uUm91dGVzIiwiVW5hdXRob3JpemVkIiwibGF6eSIsInByb3BzIiwiY29sbGVjdGlvbiIsInBlcm1pc3Npb25zIiwibWF0Y2giLCJ1c2VSb3V0ZU1hdGNoIiwiYWRtaW4iLCJsaXZlUHJldmlldyIsInJvdXRlcyIsImFkbWluUm91dGUiLCJ1c2VDb25maWciLCJ1c2VyIiwidXNlQXV0aCIsImxpdmVQcmV2aWV3RW5hYmxlZCIsImNvbGxlY3Rpb25zIiwic29tZSIsImMiLCJzbHVnIiwiU3dpdGNoIiwiUm91dGUiLCJleGFjdCIsImtleSIsInBhdGgiLCJyZWFkVmVyc2lvbnMiLCJwZXJtaXNzaW9uIiwiQ3VzdG9tQ29sbGVjdGlvbkNvbXBvbmVudCIsInZpZXciLCJoaWRlQVBJVVJMIiwicmVhZCIsImNvbGxlY3Rpb25DdXN0b21Sb3V0ZXMiLCJ1cmwiLCJOb3RGb3VuZCIsIm1hcmdpblRvcCJdLCJy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