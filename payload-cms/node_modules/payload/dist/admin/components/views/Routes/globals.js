"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "globalRoutes", {
    enumerable: true,
    get: function() {
        return globalRoutes;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactrouterdom = require("react-router-dom");
const _DocumentInfo = require("../../utilities/DocumentInfo");
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
const EditGlobal = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../Global"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Unauthorized = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../Unauthorized"))));
const globalRoutes = (props)=>{
    const { globals, locale, match, permissions, user } = props;
    // Note: `Route` must be directly nested within `Switch` for `useRouteMatch` to work
    // This means that we cannot use `Fragment` here with a simple map function to return an array of routes
    // Instead, we need to use `reduce` to return an array of routes directly within `Switch`
    return globals?.filter(({ admin: { hidden } })=>!(typeof hidden === 'function' ? hidden({
            user
        }) : hidden)).reduce((acc, global)=>{
        const canReadGlobal = permissions?.globals?.[global.slug]?.read?.permission;
        // Default routes
        const routesToReturn = [
            ...acc,
            /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                key: global.slug,
                path: `${match.url}/globals/${global.slug}`
            }, canReadGlobal ? /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                global: global,
                idFromParams: true,
                key: `${global.slug}-${locale}`
            }, /*#__PURE__*/ _react.default.createElement(EditGlobal, {
                global: global
            })) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null))
        ];
        return routesToReturn;
    }, []);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1JvdXRlcy9nbG9iYWxzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IG1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgbGF6eSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25zLCBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXV0aCdcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcblxuaW1wb3J0IHsgRG9jdW1lbnRJbmZvUHJvdmlkZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJ1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIEp1c3QgVHlwZVNjcmlwdCBiZWluZyBicm9rZW4gLy8gVE9ETzogT3BlbiBUeXBlU2NyaXB0IGlzc3VlXG5jb25zdCBFZGl0R2xvYmFsID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uL0dsb2JhbCcpKVxuLy8gQHRzLWV4cGVjdC1lcnJvciBKdXN0IFR5cGVTY3JpcHQgYmVpbmcgYnJva2VuIC8vIFRPRE86IE9wZW4gVHlwZVNjcmlwdCBpc3N1ZVxuY29uc3QgVW5hdXRob3JpemVkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uL1VuYXV0aG9yaXplZCcpKVxuXG5leHBvcnQgY29uc3QgZ2xvYmFsUm91dGVzID0gKHByb3BzOiB7XG4gIGdsb2JhbHM6IFNhbml0aXplZEdsb2JhbENvbmZpZ1tdXG4gIGxvY2FsZTogc3RyaW5nXG4gIG1hdGNoOiBtYXRjaDx7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIH0+XG4gIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uc1xuICB1c2VyOiBVc2VyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50W10gPT4ge1xuICBjb25zdCB7IGdsb2JhbHMsIGxvY2FsZSwgbWF0Y2gsIHBlcm1pc3Npb25zLCB1c2VyIH0gPSBwcm9wc1xuXG4gIC8vIE5vdGU6IGBSb3V0ZWAgbXVzdCBiZSBkaXJlY3RseSBuZXN0ZWQgd2l0aGluIGBTd2l0Y2hgIGZvciBgdXNlUm91dGVNYXRjaGAgdG8gd29ya1xuICAvLyBUaGlzIG1lYW5zIHRoYXQgd2UgY2Fubm90IHVzZSBgRnJhZ21lbnRgIGhlcmUgd2l0aCBhIHNpbXBsZSBtYXAgZnVuY3Rpb24gdG8gcmV0dXJuIGFuIGFycmF5IG9mIHJvdXRlc1xuICAvLyBJbnN0ZWFkLCB3ZSBuZWVkIHRvIHVzZSBgcmVkdWNlYCB0byByZXR1cm4gYW4gYXJyYXkgb2Ygcm91dGVzIGRpcmVjdGx5IHdpdGhpbiBgU3dpdGNoYFxuICByZXR1cm4gZ2xvYmFsc1xuICAgID8uZmlsdGVyKCh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+ICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pKVxuICAgIC5yZWR1Y2UoKGFjYywgZ2xvYmFsKSA9PiB7XG4gICAgICBjb25zdCBjYW5SZWFkR2xvYmFsID0gcGVybWlzc2lvbnM/Lmdsb2JhbHM/LltnbG9iYWwuc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb25cblxuICAgICAgLy8gRGVmYXVsdCByb3V0ZXNcbiAgICAgIGNvbnN0IHJvdXRlc1RvUmV0dXJuID0gW1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIDxSb3V0ZSBrZXk9e2dsb2JhbC5zbHVnfSBwYXRoPXtgJHttYXRjaC51cmx9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gfT5cbiAgICAgICAgICB7Y2FuUmVhZEdsb2JhbCA/IChcbiAgICAgICAgICAgIDxEb2N1bWVudEluZm9Qcm92aWRlciBnbG9iYWw9e2dsb2JhbH0gaWRGcm9tUGFyYW1zIGtleT17YCR7Z2xvYmFsLnNsdWd9LSR7bG9jYWxlfWB9PlxuICAgICAgICAgICAgICA8RWRpdEdsb2JhbCBnbG9iYWw9e2dsb2JhbH0gLz5cbiAgICAgICAgICAgIDwvRG9jdW1lbnRJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxVbmF1dGhvcml6ZWQgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JvdXRlPixcbiAgICAgIF1cblxuICAgICAgcmV0dXJuIHJvdXRlc1RvUmV0dXJuXG4gICAgfSwgW10pXG59XG4iXSwibmFtZXMiOlsiZ2xvYmFsUm91dGVzIiwiRWRpdEdsb2JhbCIsImxhenkiLCJVbmF1dGhvcml6ZWQiLCJwcm9wcyIsImdsb2JhbHMiLCJsb2NhbGUiLCJtYXRjaCIsInBlcm1pc3Npb25zIiwidXNlciIsImZpbHRlciIsImFkbWluIiwiaGlkZGVuIiwicmVkdWNlIiwiYWNjIiwiZ2xvYmFsIiwiY2FuUmVhZEdsb2JhbCIsInNsdWciLCJyZWFkIiwicGVybWlzc2lvbiIsInJvdXRlc1RvUmV0dXJuIiwiUm91dGUiLCJrZXkiLCJwYXRoIiwidXJsIiwiRG9jdW1lbnRJbmZvUHJvdmlkZXIiLCJpZEZyb21QYXJhbXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0JhQTs7O2VBQUFBOzs7K0RBZFE7Z0NBRUM7OEJBS2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQywrRUFBK0U7QUFDL0UsTUFBTUMsMkJBQWFDLElBQUFBLFdBQUksRUFBQyxJQUFNLG1FQUFBLFFBQU87QUFDckMsK0VBQStFO0FBQy9FLE1BQU1DLDZCQUFlRCxJQUFBQSxXQUFJLEVBQUMsSUFBTSxtRUFBQSxRQUFPO0FBRWhDLE1BQU1GLGVBQWUsQ0FBQ0k7SUFTM0IsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFHTDtJQUV0RCxvRkFBb0Y7SUFDcEYsd0dBQXdHO0lBQ3hHLHlGQUF5RjtJQUN6RixPQUFPQyxTQUNISyxPQUFPLENBQUMsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsRUFBRSxHQUFLLENBQUUsQ0FBQSxPQUFPQSxXQUFXLGFBQWFBLE9BQU87WUFBRUg7UUFBSyxLQUFLRyxNQUFLLEdBQzVGQyxPQUFPLENBQUNDLEtBQUtDO1FBQ1osTUFBTUMsZ0JBQWdCUixhQUFhSCxTQUFTLENBQUNVLE9BQU9FLElBQUksQ0FBQyxFQUFFQyxNQUFNQztRQUVqRSxpQkFBaUI7UUFDakIsTUFBTUMsaUJBQWlCO2VBQ2xCTjswQkFDSCw2QkFBQ08scUJBQUs7Z0JBQUNDLEtBQUtQLE9BQU9FLElBQUk7Z0JBQUVNLE1BQU0sQ0FBQyxFQUFFaEIsTUFBTWlCLEdBQUcsQ0FBQyxTQUFTLEVBQUVULE9BQU9FLElBQUksQ0FBQyxDQUFDO2VBQ2pFRCw4QkFDQyw2QkFBQ1Msa0NBQW9CO2dCQUFDVixRQUFRQTtnQkFBUVcsY0FBQUE7Z0JBQWFKLEtBQUssQ0FBQyxFQUFFUCxPQUFPRSxJQUFJLENBQUMsQ0FBQyxFQUFFWCxPQUFPLENBQUM7NkJBQ2hGLDZCQUFDTDtnQkFBV2MsUUFBUUE7Z0NBR3RCLDZCQUFDWjtTQUdOO1FBRUQsT0FBT2lCO0lBQ1QsR0FBRyxFQUFFO0FBQ1QifQ==