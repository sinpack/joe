"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "globalCustomRoutes", {
    enumerable: true,
    get: function() {
        return globalCustomRoutes;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactrouterdom = require("react-router-dom");
const _Unauthorized = /*#__PURE__*/ _interop_require_default(require("../../Unauthorized"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const internalViews = [
    'Default',
    'LivePreview',
    'Version',
    'Versions',
    'Relationships',
    'References',
    'API'
];
const globalCustomRoutes = (props)=>{
    const { global, match, permissions, user } = props;
    let customViews = [];
    const BaseEdit = global?.admin?.components?.views?.Edit;
    if (typeof BaseEdit !== 'function' && typeof BaseEdit === 'object') {
        customViews = Object.entries(BaseEdit).filter(([viewKey, view])=>{
            // Remove internal views from the list of custom views
            // This way we can easily iterate over the remaining views
            return Boolean(!internalViews.includes(viewKey) && typeof view !== 'function' && typeof view === 'object');
        })?.map(([, view])=>view);
    }
    return customViews?.reduce((acc, ViewComponent)=>{
        const routesToReturn = [
            ...acc
        ];
        if (typeof ViewComponent === 'function') {
            routesToReturn.push(/*#__PURE__*/ _react.default.createElement(ViewComponent, {
                key: ViewComponent.name,
                user: user
            }));
        } else {
            if (global && 'Component' in ViewComponent) {
                const { Component, path } = ViewComponent;
                routesToReturn.push(/*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    exact: true,
                    key: `${global.slug}-${path}`,
                    path: `${match.url}${path}`
                }, permissions?.read?.permission ? /*#__PURE__*/ _react.default.createElement(Component, {
                    user: user
                }) : /*#__PURE__*/ _react.default.createElement(_Unauthorized.default, null)));
            }
        }
        return routesToReturn;
    }, []);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0dsb2JhbC9Sb3V0ZXMvY3VzdG9tLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IG1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgdHlwZSB7IEdsb2JhbFBlcm1pc3Npb24sIFVzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hdXRoJ1xuaW1wb3J0IHR5cGUgeyBFZGl0VmlldyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcbmltcG9ydCB0eXBlIHsgZ2xvYmFsVmlld1R5cGUgfSBmcm9tICcuL0N1c3RvbUNvbXBvbmVudCdcblxuaW1wb3J0IFVuYXV0aG9yaXplZCBmcm9tICcuLi8uLi9VbmF1dGhvcml6ZWQnXG5cbmNvbnN0IGludGVybmFsVmlld3M6IGdsb2JhbFZpZXdUeXBlW10gPSBbXG4gICdEZWZhdWx0JyxcbiAgJ0xpdmVQcmV2aWV3JyxcbiAgJ1ZlcnNpb24nLFxuICAnVmVyc2lvbnMnLFxuICAnUmVsYXRpb25zaGlwcycsXG4gICdSZWZlcmVuY2VzJyxcbiAgJ0FQSScsXG5dXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxDdXN0b21Sb3V0ZXMgPSAocHJvcHM6IHtcbiAgZ2xvYmFsPzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIG1hdGNoOiBtYXRjaDx7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIH0+XG4gIHBlcm1pc3Npb25zOiBHbG9iYWxQZXJtaXNzaW9uIHwgbnVsbFxuICB1c2VyOiBVc2VyIHwgbnVsbCB8IHVuZGVmaW5lZFxufSk6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0+IHtcbiAgY29uc3QgeyBnbG9iYWwsIG1hdGNoLCBwZXJtaXNzaW9ucywgdXNlciB9ID0gcHJvcHNcblxuICBsZXQgY3VzdG9tVmlld3M6IEVkaXRWaWV3W10gPSBbXVxuXG4gIGNvbnN0IEJhc2VFZGl0ID0gZ2xvYmFsPy5hZG1pbj8uY29tcG9uZW50cz8udmlld3M/LkVkaXRcblxuICBpZiAodHlwZW9mIEJhc2VFZGl0ICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBCYXNlRWRpdCA9PT0gJ29iamVjdCcpIHtcbiAgICBjdXN0b21WaWV3cyA9IE9iamVjdC5lbnRyaWVzKEJhc2VFZGl0KVxuICAgICAgLmZpbHRlcigoW3ZpZXdLZXksIHZpZXddKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBpbnRlcm5hbCB2aWV3cyBmcm9tIHRoZSBsaXN0IG9mIGN1c3RvbSB2aWV3c1xuICAgICAgICAvLyBUaGlzIHdheSB3ZSBjYW4gZWFzaWx5IGl0ZXJhdGUgb3ZlciB0aGUgcmVtYWluaW5nIHZpZXdzXG4gICAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICAgICFpbnRlcm5hbFZpZXdzLmluY2x1ZGVzKHZpZXdLZXkgYXMgYW55KSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZpZXcgIT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2aWV3ID09PSAnb2JqZWN0JyxcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgID8ubWFwKChbLCB2aWV3XSkgPT4gdmlldylcbiAgfVxuXG4gIHJldHVybiBjdXN0b21WaWV3cz8ucmVkdWNlKChhY2MsIFZpZXdDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCByb3V0ZXNUb1JldHVybiA9IFsuLi5hY2NdXG5cbiAgICBpZiAodHlwZW9mIFZpZXdDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJvdXRlc1RvUmV0dXJuLnB1c2goPFZpZXdDb21wb25lbnQga2V5PXtWaWV3Q29tcG9uZW50Lm5hbWV9IHVzZXI9e3VzZXJ9IC8+KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2xvYmFsICYmICdDb21wb25lbnQnIGluIFZpZXdDb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhdGggfSA9IFZpZXdDb21wb25lbnRcblxuICAgICAgICByb3V0ZXNUb1JldHVybi5wdXNoKFxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBrZXk9e2Ake2dsb2JhbC5zbHVnfS0ke3BhdGh9YH0gcGF0aD17YCR7bWF0Y2gudXJsfSR7cGF0aH1gfT5cbiAgICAgICAgICAgIHtwZXJtaXNzaW9ucz8ucmVhZD8ucGVybWlzc2lvbiA/IDxDb21wb25lbnQgdXNlcj17dXNlcn0gLz4gOiA8VW5hdXRob3JpemVkIC8+fVxuICAgICAgICAgIDwvUm91dGU+LFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvdXRlc1RvUmV0dXJuXG4gIH0sIFtdKVxufVxuIl0sIm5hbWVzIjpbImdsb2JhbEN1c3RvbVJvdXRlcyIsImludGVybmFsVmlld3MiLCJwcm9wcyIsImdsb2JhbCIsIm1hdGNoIiwicGVybWlzc2lvbnMiLCJ1c2VyIiwiY3VzdG9tVmlld3MiLCJCYXNlRWRpdCIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwiRWRpdCIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJ2aWV3S2V5IiwidmlldyIsIkJvb2xlYW4iLCJpbmNsdWRlcyIsIm1hcCIsInJlZHVjZSIsImFjYyIsIlZpZXdDb21wb25lbnQiLCJyb3V0ZXNUb1JldHVybiIsInB1c2giLCJrZXkiLCJuYW1lIiwiQ29tcG9uZW50IiwicGF0aCIsIlJvdXRlIiwiZXhhY3QiLCJzbHVnIiwidXJsIiwicmVhZCIsInBlcm1pc3Npb24iLCJVbmF1dGhvcml6ZWQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFzQmFBOzs7ZUFBQUE7Ozs4REFwQks7Z0NBQ0k7cUVBT0c7Ozs7OztBQUV6QixNQUFNQyxnQkFBa0M7SUFDdEM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVNLE1BQU1ELHFCQUFxQixDQUFDRTtJQVFqQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFHSjtJQUU3QyxJQUFJSyxjQUEwQixFQUFFO0lBRWhDLE1BQU1DLFdBQVdMLFFBQVFNLE9BQU9DLFlBQVlDLE9BQU9DO0lBRW5ELElBQUksT0FBT0osYUFBYSxjQUFjLE9BQU9BLGFBQWEsVUFBVTtRQUNsRUQsY0FBY00sT0FBT0MsT0FBTyxDQUFDTixVQUMxQk8sTUFBTSxDQUFDLENBQUMsQ0FBQ0MsU0FBU0MsS0FBSztZQUN0QixzREFBc0Q7WUFDdEQsMERBQTBEO1lBQzFELE9BQU9DLFFBQ0wsQ0FBQ2pCLGNBQWNrQixRQUFRLENBQUNILFlBQ3RCLE9BQU9DLFNBQVMsY0FDaEIsT0FBT0EsU0FBUztRQUV0QixJQUNFRyxJQUFJLENBQUMsR0FBR0gsS0FBSyxHQUFLQTtJQUN4QjtJQUVBLE9BQU9WLGFBQWFjLE9BQU8sQ0FBQ0MsS0FBS0M7UUFDL0IsTUFBTUMsaUJBQWlCO2VBQUlGO1NBQUk7UUFFL0IsSUFBSSxPQUFPQyxrQkFBa0IsWUFBWTtZQUN2Q0MsZUFBZUMsSUFBSSxlQUFDLDZCQUFDRjtnQkFBY0csS0FBS0gsY0FBY0ksSUFBSTtnQkFBRXJCLE1BQU1BOztRQUNwRSxPQUFPO1lBQ0wsSUFBSUgsVUFBVSxlQUFlb0IsZUFBZTtnQkFDMUMsTUFBTSxFQUFFSyxTQUFTLEVBQUVDLElBQUksRUFBRSxHQUFHTjtnQkFFNUJDLGVBQWVDLElBQUksZUFDakIsNkJBQUNLLHFCQUFLO29CQUFDQyxPQUFBQTtvQkFBTUwsS0FBSyxDQUFDLEVBQUV2QixPQUFPNkIsSUFBSSxDQUFDLENBQUMsRUFBRUgsS0FBSyxDQUFDO29CQUFFQSxNQUFNLENBQUMsRUFBRXpCLE1BQU02QixHQUFHLENBQUMsRUFBRUosS0FBSyxDQUFDO21CQUNwRXhCLGFBQWE2QixNQUFNQywyQkFBYSw2QkFBQ1A7b0JBQVV0QixNQUFNQTttQ0FBVyw2QkFBQzhCLHFCQUFZO1lBR2hGO1FBQ0Y7UUFFQSxPQUFPWjtJQUNULEdBQUcsRUFBRTtBQUNQIn0=