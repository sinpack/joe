"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "customRoutes", {
    enumerable: true,
    get: function() {
        return customRoutes;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactrouterdom = require("react-router-dom");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const internalViews = [
    'Account',
    'Dashboard'
];
const customRoutes = (props)=>{
    const { canAccessAdmin, config, match, user } = props;
    const { admin: { components: { views: customViewConfigs } = {} } } = config;
    const customViews = Object.entries(customViewConfigs || {}).filter(([viewKey, view])=>{
        // Remove internal views from the list of custom views
        // This way we can easily iterate over the remaining views
        return Boolean(!internalViews.includes(viewKey) && typeof view !== 'function' && typeof view === 'object');
    })?.map(([, view])=>view);
    if (Array.isArray(customViews)) {
        return customViews.map((CustomView)=>{
            // You are responsible for ensuring that your own custom route is secure
            // i.e. return `Unauthorized` in your own component if the user does not have permission
            if (typeof CustomView === 'function') {
                return /*#__PURE__*/ _react.default.createElement(CustomView, {
                    user: user
                });
            }
            const { Component, exact, path, sensitive, strict } = CustomView;
            return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                exact: exact,
                key: `${match.url}${path}`,
                path: `${match.url}${path}`,
                sensitive: sensitive,
                strict: strict
            }, /*#__PURE__*/ _react.default.createElement(Component, {
                canAccessAdmin: canAccessAdmin,
                user: user
            }));
        });
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1JvdXRlcy9jdXN0b20udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXV0aCdcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL3R5cGVzJ1xuXG5leHBvcnQgdHlwZSBhZG1pblZpZXdUeXBlID0gJ0FjY291bnQnIHwgJ0Rhc2hib2FyZCdcblxuY29uc3QgaW50ZXJuYWxWaWV3czogYWRtaW5WaWV3VHlwZVtdID0gWydBY2NvdW50JywgJ0Rhc2hib2FyZCddXG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZXMgPSAocHJvcHM6IHtcbiAgY2FuQWNjZXNzQWRtaW4/OiBib29sZWFuXG4gIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnXG4gIG1hdGNoOiB7IHVybDogc3RyaW5nIH1cbiAgdXNlcjogVXNlciB8IG51bGwgfCB1bmRlZmluZWRcbn0pID0+IHtcbiAgY29uc3QgeyBjYW5BY2Nlc3NBZG1pbiwgY29uZmlnLCBtYXRjaCwgdXNlciB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgYWRtaW46IHsgY29tcG9uZW50czogeyB2aWV3czogY3VzdG9tVmlld0NvbmZpZ3MgfSA9IHt9IH0sXG4gIH0gPSBjb25maWdcblxuICBjb25zdCBjdXN0b21WaWV3cyA9IE9iamVjdC5lbnRyaWVzKGN1c3RvbVZpZXdDb25maWdzIHx8IHt9KVxuICAgIC5maWx0ZXIoKFt2aWV3S2V5LCB2aWV3XSkgPT4ge1xuICAgICAgLy8gUmVtb3ZlIGludGVybmFsIHZpZXdzIGZyb20gdGhlIGxpc3Qgb2YgY3VzdG9tIHZpZXdzXG4gICAgICAvLyBUaGlzIHdheSB3ZSBjYW4gZWFzaWx5IGl0ZXJhdGUgb3ZlciB0aGUgcmVtYWluaW5nIHZpZXdzXG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgIWludGVybmFsVmlld3MuaW5jbHVkZXModmlld0tleSBhcyBhbnkpICYmXG4gICAgICAgICAgdHlwZW9mIHZpZXcgIT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICB0eXBlb2YgdmlldyA9PT0gJ29iamVjdCcsXG4gICAgICApXG4gICAgfSlcbiAgICA/Lm1hcCgoWywgdmlld10pID0+IHZpZXcpXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY3VzdG9tVmlld3MpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVZpZXdzLm1hcCgoQ3VzdG9tVmlldykgPT4ge1xuICAgICAgLy8gWW91IGFyZSByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgdGhhdCB5b3VyIG93biBjdXN0b20gcm91dGUgaXMgc2VjdXJlXG4gICAgICAvLyBpLmUuIHJldHVybiBgVW5hdXRob3JpemVkYCBpbiB5b3VyIG93biBjb21wb25lbnQgaWYgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uXG5cbiAgICAgIGlmICh0eXBlb2YgQ3VzdG9tVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gPEN1c3RvbVZpZXcgdXNlcj17dXNlcn0gLz5cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIGV4YWN0LCBwYXRoLCBzZW5zaXRpdmUsIHN0cmljdCB9ID0gQ3VzdG9tVmlld1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBleGFjdD17ZXhhY3R9XG4gICAgICAgICAga2V5PXtgJHttYXRjaC51cmx9JHtwYXRofWB9XG4gICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfSR7cGF0aH1gfVxuICAgICAgICAgIHNlbnNpdGl2ZT17c2Vuc2l0aXZlfVxuICAgICAgICAgIHN0cmljdD17c3RyaWN0fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbXBvbmVudCBjYW5BY2Nlc3NBZG1pbj17Y2FuQWNjZXNzQWRtaW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG4iXSwibmFtZXMiOlsiY3VzdG9tUm91dGVzIiwiaW50ZXJuYWxWaWV3cyIsInByb3BzIiwiY2FuQWNjZXNzQWRtaW4iLCJjb25maWciLCJtYXRjaCIsInVzZXIiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJ2aWV3cyIsImN1c3RvbVZpZXdDb25maWdzIiwiY3VzdG9tVmlld3MiLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsdGVyIiwidmlld0tleSIsInZpZXciLCJCb29sZWFuIiwiaW5jbHVkZXMiLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJDdXN0b21WaWV3IiwiQ29tcG9uZW50IiwiZXhhY3QiLCJwYXRoIiwic2Vuc2l0aXZlIiwic3RyaWN0IiwiUm91dGUiLCJrZXkiLCJ1cmwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFVYUE7OztlQUFBQTs7OzhEQVZLO2dDQUNJOzs7Ozs7QUFPdEIsTUFBTUMsZ0JBQWlDO0lBQUM7SUFBVztDQUFZO0FBRXhELE1BQU1ELGVBQWUsQ0FBQ0U7SUFNM0IsTUFBTSxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR0o7SUFFaEQsTUFBTSxFQUNKSyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsT0FBT0MsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUN6RCxHQUFHTjtJQUVKLE1BQU1PLGNBQWNDLE9BQU9DLE9BQU8sQ0FBQ0gscUJBQXFCLENBQUMsR0FDdERJLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFNBQVNDLEtBQUs7UUFDdEIsc0RBQXNEO1FBQ3RELDBEQUEwRDtRQUMxRCxPQUFPQyxRQUNMLENBQUNoQixjQUFjaUIsUUFBUSxDQUFDSCxZQUN0QixPQUFPQyxTQUFTLGNBQ2hCLE9BQU9BLFNBQVM7SUFFdEIsSUFDRUcsSUFBSSxDQUFDLEdBQUdILEtBQUssR0FBS0E7SUFFdEIsSUFBSUksTUFBTUMsT0FBTyxDQUFDVixjQUFjO1FBQzlCLE9BQU9BLFlBQVlRLEdBQUcsQ0FBQyxDQUFDRztZQUN0Qix3RUFBd0U7WUFDeEUsd0ZBQXdGO1lBRXhGLElBQUksT0FBT0EsZUFBZSxZQUFZO2dCQUNwQyxxQkFBTyw2QkFBQ0E7b0JBQVdoQixNQUFNQTs7WUFDM0I7WUFFQSxNQUFNLEVBQUVpQixTQUFTLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRSxHQUFHTDtZQUV0RCxxQkFDRSw2QkFBQ00scUJBQUs7Z0JBQ0pKLE9BQU9BO2dCQUNQSyxLQUFLLENBQUMsRUFBRXhCLE1BQU15QixHQUFHLENBQUMsRUFBRUwsS0FBSyxDQUFDO2dCQUMxQkEsTUFBTSxDQUFDLEVBQUVwQixNQUFNeUIsR0FBRyxDQUFDLEVBQUVMLEtBQUssQ0FBQztnQkFDM0JDLFdBQVdBO2dCQUNYQyxRQUFRQTs2QkFFUiw2QkFBQ0o7Z0JBQVVwQixnQkFBZ0JBO2dCQUFnQkcsTUFBTUE7O1FBR3ZEO0lBQ0Y7SUFFQSxPQUFPO0FBQ1QifQ==