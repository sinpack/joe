"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "collectionCustomRoutes", {
    enumerable: true,
    get: function() {
        return collectionCustomRoutes;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactrouterdom = require("react-router-dom");
const _Unauthorized = /*#__PURE__*/ _interop_require_default(require("../../../Unauthorized"));
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
const collectionCustomRoutes = (props)=>{
    const { collection, match, permissions, user } = props;
    let customViews = [];
    const BaseEdit = collection?.admin?.components?.views?.Edit;
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
            if (collection && 'Component' in ViewComponent) {
                const { Component, path } = ViewComponent;
                routesToReturn.push(/*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    exact: true,
                    key: `${collection.slug}-${path}`,
                    path: `${match.url}${path}`
                }, permissions?.read?.permission ? /*#__PURE__*/ _react.default.createElement(Component, {
                    user: user
                }) : /*#__PURE__*/ _react.default.createElement(_Unauthorized.default, null)));
            }
        }
        return routesToReturn;
    }, []);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvUm91dGVzL2N1c3RvbS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBtYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiwgVXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2F1dGgnXG5pbXBvcnQgdHlwZSB7IEVkaXRWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcbmltcG9ydCB0eXBlIHsgY29sbGVjdGlvblZpZXdUeXBlIH0gZnJvbSAnLi9DdXN0b21Db21wb25lbnQnXG5cbmltcG9ydCBVbmF1dGhvcml6ZWQgZnJvbSAnLi4vLi4vLi4vVW5hdXRob3JpemVkJ1xuXG5jb25zdCBpbnRlcm5hbFZpZXdzOiBjb2xsZWN0aW9uVmlld1R5cGVbXSA9IFtcbiAgJ0RlZmF1bHQnLFxuICAnTGl2ZVByZXZpZXcnLFxuICAnVmVyc2lvbicsXG4gICdWZXJzaW9ucycsXG4gICdSZWxhdGlvbnNoaXBzJyxcbiAgJ1JlZmVyZW5jZXMnLFxuICAnQVBJJyxcbl1cblxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25DdXN0b21Sb3V0ZXMgPSAocHJvcHM6IHtcbiAgY29sbGVjdGlvbj86IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgbWF0Y2g6IG1hdGNoPHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgfT5cbiAgcGVybWlzc2lvbnM6IENvbGxlY3Rpb25QZXJtaXNzaW9uXG4gIHVzZXI6IFVzZXJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbiwgbWF0Y2gsIHBlcm1pc3Npb25zLCB1c2VyIH0gPSBwcm9wc1xuXG4gIGxldCBjdXN0b21WaWV3czogRWRpdFZpZXdbXSA9IFtdXG5cbiAgY29uc3QgQmFzZUVkaXQgPSBjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8udmlld3M/LkVkaXRcblxuICBpZiAodHlwZW9mIEJhc2VFZGl0ICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBCYXNlRWRpdCA9PT0gJ29iamVjdCcpIHtcbiAgICBjdXN0b21WaWV3cyA9IE9iamVjdC5lbnRyaWVzKEJhc2VFZGl0KVxuICAgICAgLmZpbHRlcigoW3ZpZXdLZXksIHZpZXddKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBpbnRlcm5hbCB2aWV3cyBmcm9tIHRoZSBsaXN0IG9mIGN1c3RvbSB2aWV3c1xuICAgICAgICAvLyBUaGlzIHdheSB3ZSBjYW4gZWFzaWx5IGl0ZXJhdGUgb3ZlciB0aGUgcmVtYWluaW5nIHZpZXdzXG4gICAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICAgICFpbnRlcm5hbFZpZXdzLmluY2x1ZGVzKHZpZXdLZXkgYXMgYW55KSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZpZXcgIT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2aWV3ID09PSAnb2JqZWN0JyxcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgID8ubWFwKChbLCB2aWV3XSkgPT4gdmlldylcbiAgfVxuXG4gIHJldHVybiBjdXN0b21WaWV3cz8ucmVkdWNlKChhY2MsIFZpZXdDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCByb3V0ZXNUb1JldHVybiA9IFsuLi5hY2NdXG5cbiAgICBpZiAodHlwZW9mIFZpZXdDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJvdXRlc1RvUmV0dXJuLnB1c2goPFZpZXdDb21wb25lbnQga2V5PXtWaWV3Q29tcG9uZW50Lm5hbWV9IHVzZXI9e3VzZXJ9IC8+KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29sbGVjdGlvbiAmJiAnQ29tcG9uZW50JyBpbiBWaWV3Q29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYXRoIH0gPSBWaWV3Q29tcG9uZW50XG5cbiAgICAgICAgcm91dGVzVG9SZXR1cm4ucHVzaChcbiAgICAgICAgICA8Um91dGUgZXhhY3Qga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LSR7cGF0aH1gfSBwYXRoPXtgJHttYXRjaC51cmx9JHtwYXRofWB9PlxuICAgICAgICAgICAge3Blcm1pc3Npb25zPy5yZWFkPy5wZXJtaXNzaW9uID8gPENvbXBvbmVudCB1c2VyPXt1c2VyfSAvPiA6IDxVbmF1dGhvcml6ZWQgLz59XG4gICAgICAgICAgPC9Sb3V0ZT4sXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcm91dGVzVG9SZXR1cm5cbiAgfSwgW10pXG59XG4iXSwibmFtZXMiOlsiY29sbGVjdGlvbkN1c3RvbVJvdXRlcyIsImludGVybmFsVmlld3MiLCJwcm9wcyIsImNvbGxlY3Rpb24iLCJtYXRjaCIsInBlcm1pc3Npb25zIiwidXNlciIsImN1c3RvbVZpZXdzIiwiQmFzZUVkaXQiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkVkaXQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsdGVyIiwidmlld0tleSIsInZpZXciLCJCb29sZWFuIiwiaW5jbHVkZXMiLCJtYXAiLCJyZWR1Y2UiLCJhY2MiLCJWaWV3Q29tcG9uZW50Iiwicm91dGVzVG9SZXR1cm4iLCJwdXNoIiwia2V5IiwibmFtZSIsIkNvbXBvbmVudCIsInBhdGgiLCJSb3V0ZSIsImV4YWN0Iiwic2x1ZyIsInVybCIsInJlYWQiLCJwZXJtaXNzaW9uIiwiVW5hdXRob3JpemVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBc0JhQTs7O2VBQUFBOzs7OERBcEJLO2dDQUNJO3FFQU9HOzs7Ozs7QUFFekIsTUFBTUMsZ0JBQXNDO0lBQzFDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFTSxNQUFNRCx5QkFBeUIsQ0FBQ0U7SUFRckMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEVBQUUsR0FBR0o7SUFFakQsSUFBSUssY0FBMEIsRUFBRTtJQUVoQyxNQUFNQyxXQUFXTCxZQUFZTSxPQUFPQyxZQUFZQyxPQUFPQztJQUV2RCxJQUFJLE9BQU9KLGFBQWEsY0FBYyxPQUFPQSxhQUFhLFVBQVU7UUFDbEVELGNBQWNNLE9BQU9DLE9BQU8sQ0FBQ04sVUFDMUJPLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFNBQVNDLEtBQUs7WUFDdEIsc0RBQXNEO1lBQ3RELDBEQUEwRDtZQUMxRCxPQUFPQyxRQUNMLENBQUNqQixjQUFja0IsUUFBUSxDQUFDSCxZQUN0QixPQUFPQyxTQUFTLGNBQ2hCLE9BQU9BLFNBQVM7UUFFdEIsSUFDRUcsSUFBSSxDQUFDLEdBQUdILEtBQUssR0FBS0E7SUFDeEI7SUFFQSxPQUFPVixhQUFhYyxPQUFPLENBQUNDLEtBQUtDO1FBQy9CLE1BQU1DLGlCQUFpQjtlQUFJRjtTQUFJO1FBRS9CLElBQUksT0FBT0Msa0JBQWtCLFlBQVk7WUFDdkNDLGVBQWVDLElBQUksZUFBQyw2QkFBQ0Y7Z0JBQWNHLEtBQUtILGNBQWNJLElBQUk7Z0JBQUVyQixNQUFNQTs7UUFDcEUsT0FBTztZQUNMLElBQUlILGNBQWMsZUFBZW9CLGVBQWU7Z0JBQzlDLE1BQU0sRUFBRUssU0FBUyxFQUFFQyxJQUFJLEVBQUUsR0FBR047Z0JBRTVCQyxlQUFlQyxJQUFJLGVBQ2pCLDZCQUFDSyxxQkFBSztvQkFBQ0MsT0FBQUE7b0JBQU1MLEtBQUssQ0FBQyxFQUFFdkIsV0FBVzZCLElBQUksQ0FBQyxDQUFDLEVBQUVILEtBQUssQ0FBQztvQkFBRUEsTUFBTSxDQUFDLEVBQUV6QixNQUFNNkIsR0FBRyxDQUFDLEVBQUVKLEtBQUssQ0FBQzttQkFDeEV4QixhQUFhNkIsTUFBTUMsMkJBQWEsNkJBQUNQO29CQUFVdEIsTUFBTUE7bUNBQVcsNkJBQUM4QixxQkFBWTtZQUdoRjtRQUNGO1FBRUEsT0FBT1o7SUFDVCxHQUFHLEVBQUU7QUFDUCJ9