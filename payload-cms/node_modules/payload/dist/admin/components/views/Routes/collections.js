"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "collectionRoutes", {
    enumerable: true,
    get: function() {
        return collectionRoutes;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactrouterdom = require("react-router-dom");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _List = /*#__PURE__*/ _interop_require_default(require("../collections/List"));
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
const Edit = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../collections/Edit"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Unauthorized = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../Unauthorized"))));
const collectionRoutes = (props)=>{
    const { collections, match, permissions, user } = props;
    // Note: `Route` must be directly nested within `Switch` for `useRouteMatch` to work
    // This means that we cannot use `Fragment` here with a simple map function to return an array of routes
    // Instead, we need to use `reduce` to return an array of routes directly within `Switch`
    return collections?.filter(({ admin: { hidden } })=>!(typeof hidden === 'function' ? hidden({
            user
        }) : hidden)).reduce((acc, collection)=>{
        // Default routes
        const routesToReturn = [
            ...acc,
            /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                exact: true,
                key: `${collection.slug}-list`,
                path: `${match.url}/collections/${collection.slug}`
            }, permissions?.collections?.[collection.slug]?.read?.permission ? /*#__PURE__*/ _react.default.createElement(_List.default, {
                collection: collection
            }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)),
            /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                exact: true,
                key: `${collection.slug}-create`,
                path: `${match.url}/collections/${collection.slug}/create`
            }, permissions?.collections?.[collection.slug]?.create?.permission ? /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                collection: collection,
                idFromParams: true
            }, /*#__PURE__*/ _react.default.createElement(Edit, {
                collection: collection
            })) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)),
            /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                key: `${collection.slug}-edit`,
                path: `${match.url}/collections/${collection.slug}/:id`
            }, permissions?.collections?.[collection.slug]?.read?.permission ? /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                collection: collection,
                idFromParams: true
            }, /*#__PURE__*/ _react.default.createElement(Edit, {
                collection: collection,
                isEditing: true
            })) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null))
        ];
        return routesToReturn;
    }, []);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1JvdXRlcy9jb2xsZWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBtYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IGxhenkgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9ucywgVXNlciB9IGZyb20gJy4uLy4uLy4uLy4uL2F1dGgnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IERvY3VtZW50SW5mb1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbydcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbGxlY3Rpb25zL0xpc3QnXG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgSnVzdCBUeXBlU2NyaXB0IGJlaW5nIGJyb2tlbiAvLyBUT0RPOiBPcGVuIFR5cGVTY3JpcHQgaXNzdWVcbmNvbnN0IEVkaXQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi4vY29sbGVjdGlvbnMvRWRpdCcpKVxuLy8gQHRzLWV4cGVjdC1lcnJvciBKdXN0IFR5cGVTY3JpcHQgYmVpbmcgYnJva2VuIC8vIFRPRE86IE9wZW4gVHlwZVNjcmlwdCBpc3N1ZVxuY29uc3QgVW5hdXRob3JpemVkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uL1VuYXV0aG9yaXplZCcpKVxuXG5leHBvcnQgY29uc3QgY29sbGVjdGlvblJvdXRlcyA9IChwcm9wczoge1xuICBjb2xsZWN0aW9uczogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1tdXG4gIG1hdGNoOiBtYXRjaDx7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIH0+XG4gIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uc1xuICB1c2VyOiBVc2VyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50W10gPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb25zLCBtYXRjaCwgcGVybWlzc2lvbnMsIHVzZXIgfSA9IHByb3BzXG5cbiAgLy8gTm90ZTogYFJvdXRlYCBtdXN0IGJlIGRpcmVjdGx5IG5lc3RlZCB3aXRoaW4gYFN3aXRjaGAgZm9yIGB1c2VSb3V0ZU1hdGNoYCB0byB3b3JrXG4gIC8vIFRoaXMgbWVhbnMgdGhhdCB3ZSBjYW5ub3QgdXNlIGBGcmFnbWVudGAgaGVyZSB3aXRoIGEgc2ltcGxlIG1hcCBmdW5jdGlvbiB0byByZXR1cm4gYW4gYXJyYXkgb2Ygcm91dGVzXG4gIC8vIEluc3RlYWQsIHdlIG5lZWQgdG8gdXNlIGByZWR1Y2VgIHRvIHJldHVybiBhbiBhcnJheSBvZiByb3V0ZXMgZGlyZWN0bHkgd2l0aGluIGBTd2l0Y2hgXG4gIHJldHVybiBjb2xsZWN0aW9uc1xuICAgID8uZmlsdGVyKCh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+ICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pKVxuICAgIC5yZWR1Y2UoKGFjYywgY29sbGVjdGlvbikgPT4ge1xuICAgICAgLy8gRGVmYXVsdCByb3V0ZXNcbiAgICAgIGNvbnN0IHJvdXRlc1RvUmV0dXJuID0gW1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIDxSb3V0ZVxuICAgICAgICAgIGV4YWN0XG4gICAgICAgICAga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LWxpc3RgfVxuICAgICAgICAgIHBhdGg9e2Ake21hdGNoLnVybH0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/Lltjb2xsZWN0aW9uLnNsdWddPy5yZWFkPy5wZXJtaXNzaW9uID8gKFxuICAgICAgICAgICAgPExpc3QgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFVuYXV0aG9yaXplZCAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm91dGU+LFxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBleGFjdFxuICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS1jcmVhdGVgfVxuICAgICAgICAgIHBhdGg9e2Ake21hdGNoLnVybH0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9L2NyZWF0ZWB9XG4gICAgICAgID5cbiAgICAgICAgICB7cGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bY29sbGVjdGlvbi5zbHVnXT8uY3JlYXRlPy5wZXJtaXNzaW9uID8gKFxuICAgICAgICAgICAgPERvY3VtZW50SW5mb1Byb3ZpZGVyIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IGlkRnJvbVBhcmFtcz5cbiAgICAgICAgICAgICAgPEVkaXQgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgIDwvRG9jdW1lbnRJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxVbmF1dGhvcml6ZWQgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LWVkaXRgfVxuICAgICAgICAgIHBhdGg9e2Ake21hdGNoLnVybH0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LzppZGB9XG4gICAgICAgID5cbiAgICAgICAgICB7cGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bY29sbGVjdGlvbi5zbHVnXT8ucmVhZD8ucGVybWlzc2lvbiA/IChcbiAgICAgICAgICAgIDxEb2N1bWVudEluZm9Qcm92aWRlciBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufSBpZEZyb21QYXJhbXM+XG4gICAgICAgICAgICAgIDxFZGl0IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IGlzRWRpdGluZyAvPlxuICAgICAgICAgICAgPC9Eb2N1bWVudEluZm9Qcm92aWRlcj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFVuYXV0aG9yaXplZCAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm91dGU+LFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gcm91dGVzVG9SZXR1cm5cbiAgICB9LCBbXSlcbn1cbiJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uUm91dGVzIiwiRWRpdCIsImxhenkiLCJVbmF1dGhvcml6ZWQiLCJwcm9wcyIsImNvbGxlY3Rpb25zIiwibWF0Y2giLCJwZXJtaXNzaW9ucyIsInVzZXIiLCJmaWx0ZXIiLCJhZG1pbiIsImhpZGRlbiIsInJlZHVjZSIsImFjYyIsImNvbGxlY3Rpb24iLCJyb3V0ZXNUb1JldHVybiIsIlJvdXRlIiwiZXhhY3QiLCJrZXkiLCJzbHVnIiwicGF0aCIsInVybCIsInJlYWQiLCJwZXJtaXNzaW9uIiwiTGlzdCIsImNyZWF0ZSIsIkRvY3VtZW50SW5mb1Byb3ZpZGVyIiwiaWRGcm9tUGFyYW1zIiwiaXNFZGl0aW5nIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQmFBOzs7ZUFBQUE7OzsrREFmUTtnQ0FFQzs4QkFLZTs2REFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLCtFQUErRTtBQUMvRSxNQUFNQyxxQkFBT0MsSUFBQUEsV0FBSSxFQUFDLElBQU0sbUVBQUEsUUFBTztBQUMvQiwrRUFBK0U7QUFDL0UsTUFBTUMsNkJBQWVELElBQUFBLFdBQUksRUFBQyxJQUFNLG1FQUFBLFFBQU87QUFFaEMsTUFBTUYsbUJBQW1CLENBQUNJO0lBUS9CLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFFLEdBQUdKO0lBRWxELG9GQUFvRjtJQUNwRix3R0FBd0c7SUFDeEcseUZBQXlGO0lBQ3pGLE9BQU9DLGFBQ0hJLE9BQU8sQ0FBQyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxFQUFFLEdBQUssQ0FBRSxDQUFBLE9BQU9BLFdBQVcsYUFBYUEsT0FBTztZQUFFSDtRQUFLLEtBQUtHLE1BQUssR0FDNUZDLE9BQU8sQ0FBQ0MsS0FBS0M7UUFDWixpQkFBaUI7UUFDakIsTUFBTUMsaUJBQWlCO2VBQ2xCRjswQkFDSCw2QkFBQ0cscUJBQUs7Z0JBQ0pDLE9BQUFBO2dCQUNBQyxLQUFLLENBQUMsRUFBRUosV0FBV0ssSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDOUJDLE1BQU0sQ0FBQyxFQUFFZCxNQUFNZSxHQUFHLENBQUMsYUFBYSxFQUFFUCxXQUFXSyxJQUFJLENBQUMsQ0FBQztlQUVsRFosYUFBYUYsYUFBYSxDQUFDUyxXQUFXSyxJQUFJLENBQUMsRUFBRUcsTUFBTUMsMkJBQ2xELDZCQUFDQyxhQUFJO2dCQUFDVixZQUFZQTsrQkFFbEIsNkJBQUNYOzBCQUdMLDZCQUFDYSxxQkFBSztnQkFDSkMsT0FBQUE7Z0JBQ0FDLEtBQUssQ0FBQyxFQUFFSixXQUFXSyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNoQ0MsTUFBTSxDQUFDLEVBQUVkLE1BQU1lLEdBQUcsQ0FBQyxhQUFhLEVBQUVQLFdBQVdLLElBQUksQ0FBQyxPQUFPLENBQUM7ZUFFekRaLGFBQWFGLGFBQWEsQ0FBQ1MsV0FBV0ssSUFBSSxDQUFDLEVBQUVNLFFBQVFGLDJCQUNwRCw2QkFBQ0csa0NBQW9CO2dCQUFDWixZQUFZQTtnQkFBWWEsY0FBQUE7NkJBQzVDLDZCQUFDMUI7Z0JBQUthLFlBQVlBO2dDQUdwQiw2QkFBQ1g7MEJBR0wsNkJBQUNhLHFCQUFLO2dCQUNKRSxLQUFLLENBQUMsRUFBRUosV0FBV0ssSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDOUJDLE1BQU0sQ0FBQyxFQUFFZCxNQUFNZSxHQUFHLENBQUMsYUFBYSxFQUFFUCxXQUFXSyxJQUFJLENBQUMsSUFBSSxDQUFDO2VBRXREWixhQUFhRixhQUFhLENBQUNTLFdBQVdLLElBQUksQ0FBQyxFQUFFRyxNQUFNQywyQkFDbEQsNkJBQUNHLGtDQUFvQjtnQkFBQ1osWUFBWUE7Z0JBQVlhLGNBQUFBOzZCQUM1Qyw2QkFBQzFCO2dCQUFLYSxZQUFZQTtnQkFBWWMsV0FBQUE7Z0NBR2hDLDZCQUFDekI7U0FHTjtRQUVELE9BQU9ZO0lBQ1QsR0FBRyxFQUFFO0FBQ1QifQ==