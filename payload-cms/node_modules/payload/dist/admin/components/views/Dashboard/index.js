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
const _StepNav = require("../../elements/StepNav");
const _ActionsProvider = require("../../utilities/ActionsProvider");
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
const _Default = /*#__PURE__*/ _interop_require_default(require("./Default"));
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
const Dashboard = ()=>{
    const { permissions, user } = (0, _Auth.useAuth)();
    const { setStepNav } = (0, _StepNav.useStepNav)();
    const [filteredGlobals, setFilteredGlobals] = (0, _react.useState)([]);
    const { admin: { components: { views: { Dashboard: CustomDashboardComponent } = {} } = {} } = {}, collections, globals } = (0, _Config.useConfig)();
    const { setViewActions } = (0, _ActionsProvider.useActions)();
    (0, _react.useEffect)(()=>{
        setFilteredGlobals(globals.filter((global)=>permissions?.globals?.[global.slug]?.read?.permission));
    }, [
        permissions,
        globals
    ]);
    (0, _react.useEffect)(()=>{
        setStepNav([]);
    }, [
        setStepNav
    ]);
    (0, _react.useEffect)(()=>{
        setViewActions([]);
    }, [
        setViewActions
    ]);
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: typeof CustomDashboardComponent === 'function' ? CustomDashboardComponent : undefined,
        DefaultComponent: _Default.default,
        componentProps: {
            collections: collections.filter((collection)=>permissions?.collections?.[collection.slug]?.read?.permission),
            globals: filteredGlobals,
            permissions,
            user
        }
    });
};
const _default = Dashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0Rhc2hib2FyZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9leHBvcnRzL3R5cGVzJ1xuXG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvU3RlcE5hdidcbmltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQWN0aW9uc1Byb3ZpZGVyJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCdcbmltcG9ydCBEZWZhdWx0RGFzaGJvYXJkIGZyb20gJy4vRGVmYXVsdCdcblxuY29uc3QgRGFzaGJvYXJkOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucywgdXNlciB9ID0gdXNlQXV0aCgpXG4gIGNvbnN0IHsgc2V0U3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpXG4gIGNvbnN0IFtmaWx0ZXJlZEdsb2JhbHMsIHNldEZpbHRlcmVkR2xvYmFsc10gPSB1c2VTdGF0ZTxTYW5pdGl6ZWRHbG9iYWxDb25maWdbXT4oW10pXG5cbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IGNvbXBvbmVudHM6IHsgdmlld3M6IHsgRGFzaGJvYXJkOiBDdXN0b21EYXNoYm9hcmRDb21wb25lbnQgfSA9IHt9IH0gPSB7fSB9ID0ge30sXG4gICAgY29sbGVjdGlvbnMsXG4gICAgZ2xvYmFscyxcbiAgfSA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgeyBzZXRWaWV3QWN0aW9ucyB9ID0gdXNlQWN0aW9ucygpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWx0ZXJlZEdsb2JhbHMoXG4gICAgICBnbG9iYWxzLmZpbHRlcigoZ2xvYmFsKSA9PiBwZXJtaXNzaW9ucz8uZ2xvYmFscz8uW2dsb2JhbC5zbHVnXT8ucmVhZD8ucGVybWlzc2lvbiksXG4gICAgKVxuICB9LCBbcGVybWlzc2lvbnMsIGdsb2JhbHNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RlcE5hdihbXSlcbiAgfSwgW3NldFN0ZXBOYXZdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Vmlld0FjdGlvbnMoW10pXG4gIH0sIFtzZXRWaWV3QWN0aW9uc10pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBDdXN0b21Db21wb25lbnQ9e1xuICAgICAgICB0eXBlb2YgQ3VzdG9tRGFzaGJvYXJkQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nID8gQ3VzdG9tRGFzaGJvYXJkQ29tcG9uZW50IDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0RGFzaGJvYXJkfVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgY29sbGVjdGlvbnM6IGNvbGxlY3Rpb25zLmZpbHRlcihcbiAgICAgICAgICAoY29sbGVjdGlvbikgPT4gcGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bY29sbGVjdGlvbi5zbHVnXT8ucmVhZD8ucGVybWlzc2lvbixcbiAgICAgICAgKSxcbiAgICAgICAgZ2xvYmFsczogZmlsdGVyZWRHbG9iYWxzLFxuICAgICAgICBwZXJtaXNzaW9ucyxcbiAgICAgICAgdXNlcixcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJwZXJtaXNzaW9ucyIsInVzZXIiLCJ1c2VBdXRoIiwic2V0U3RlcE5hdiIsInVzZVN0ZXBOYXYiLCJmaWx0ZXJlZEdsb2JhbHMiLCJzZXRGaWx0ZXJlZEdsb2JhbHMiLCJ1c2VTdGF0ZSIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwiQ3VzdG9tRGFzaGJvYXJkQ29tcG9uZW50IiwiY29sbGVjdGlvbnMiLCJnbG9iYWxzIiwidXNlQ29uZmlnIiwic2V0Vmlld0FjdGlvbnMiLCJ1c2VBY3Rpb25zIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZ2xvYmFsIiwic2x1ZyIsInJlYWQiLCJwZXJtaXNzaW9uIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiQ3VzdG9tQ29tcG9uZW50IiwidW5kZWZpbmVkIiwiRGVmYXVsdENvbXBvbmVudCIsIkRlZmF1bHREYXNoYm9hcmQiLCJjb21wb25lbnRQcm9wcyIsImNvbGxlY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXdEQTs7O2VBQUE7OzsrREF4RDJDO3lCQUloQjtpQ0FDQTtzQkFDSDt3QkFDRTs4RUFDUTtnRUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsTUFBTUEsWUFBc0I7SUFDMUIsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3JDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdDLElBQUFBLG1CQUFVO0lBQ2pDLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0MsSUFBQUEsZUFBUSxFQUEwQixFQUFFO0lBRWxGLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLE9BQU8sRUFBRVgsV0FBV1ksd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQ3hGQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUixHQUFHQyxJQUFBQSxpQkFBUztJQUViLE1BQU0sRUFBRUMsY0FBYyxFQUFFLEdBQUdDLElBQUFBLDJCQUFVO0lBRXJDQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1JYLG1CQUNFTyxRQUFRSyxNQUFNLENBQUMsQ0FBQ0MsU0FBV25CLGFBQWFhLFNBQVMsQ0FBQ00sT0FBT0MsSUFBSSxDQUFDLEVBQUVDLE1BQU1DO0lBRTFFLEdBQUc7UUFBQ3RCO1FBQWFhO0tBQVE7SUFFekJJLElBQUFBLGdCQUFTLEVBQUM7UUFDUmQsV0FBVyxFQUFFO0lBQ2YsR0FBRztRQUFDQTtLQUFXO0lBRWZjLElBQUFBLGdCQUFTLEVBQUM7UUFDUkYsZUFBZSxFQUFFO0lBQ25CLEdBQUc7UUFBQ0E7S0FBZTtJQUVuQixxQkFDRSw2QkFBQ1EsOEJBQXFCO1FBQ3BCQyxpQkFDRSxPQUFPYiw2QkFBNkIsYUFBYUEsMkJBQTJCYztRQUU5RUMsa0JBQWtCQyxnQkFBZ0I7UUFDbENDLGdCQUFnQjtZQUNkaEIsYUFBYUEsWUFBWU0sTUFBTSxDQUM3QixDQUFDVyxhQUFlN0IsYUFBYVksYUFBYSxDQUFDaUIsV0FBV1QsSUFBSSxDQUFDLEVBQUVDLE1BQU1DO1lBRXJFVCxTQUFTUjtZQUNUTDtZQUNBQztRQUNGOztBQUdOO01BRUEsV0FBZUYifQ==