"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CustomProvider", {
    enumerable: true,
    get: function() {
        return CustomProvider;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _Config = require("../Config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const NestProviders = ({ children, providers })=>{
    const Component = providers[0];
    if (providers.length > 1) {
        return /*#__PURE__*/ _react.default.createElement(Component, null, /*#__PURE__*/ _react.default.createElement(NestProviders, {
            providers: providers.slice(1)
        }, children));
    }
    return /*#__PURE__*/ _react.default.createElement(Component, null, children);
};
const CustomProvider = ({ children })=>{
    const config = (0, _Config.useConfig)();
    const { admin: { components: { providers } } } = config;
    if (Array.isArray(providers) && providers.length > 0) {
        return /*#__PURE__*/ _react.default.createElement(NestProviders, {
            providers: providers
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9DdXN0b21Qcm92aWRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9Db25maWcnXG5cbmNvbnN0IE5lc3RQcm92aWRlcnMgPSAoeyBjaGlsZHJlbiwgcHJvdmlkZXJzIH0pID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gcHJvdmlkZXJzWzBdXG4gIGlmIChwcm92aWRlcnMubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50PlxuICAgICAgICA8TmVzdFByb3ZpZGVycyBwcm92aWRlcnM9e3Byb3ZpZGVycy5zbGljZSgxKX0+e2NoaWxkcmVufTwvTmVzdFByb3ZpZGVycz5cbiAgICAgIDwvQ29tcG9uZW50PlxuICAgIClcbiAgfVxuICByZXR1cm4gPENvbXBvbmVudD57Y2hpbGRyZW59PC9Db21wb25lbnQ+XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21Qcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czogeyBwcm92aWRlcnMgfSxcbiAgICB9LFxuICB9ID0gY29uZmlnXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvdmlkZXJzKSAmJiBwcm92aWRlcnMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiA8TmVzdFByb3ZpZGVycyBwcm92aWRlcnM9e3Byb3ZpZGVyc30+e2NoaWxkcmVufTwvTmVzdFByb3ZpZGVycz5cbiAgfVxuXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e2NoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tUHJvdmlkZXIiLCJOZXN0UHJvdmlkZXJzIiwiY2hpbGRyZW4iLCJwcm92aWRlcnMiLCJDb21wb25lbnQiLCJsZW5ndGgiLCJzbGljZSIsImNvbmZpZyIsInVzZUNvbmZpZyIsImFkbWluIiwiY29tcG9uZW50cyIsIkFycmF5IiwiaXNBcnJheSIsIlJlYWN0IiwiRnJhZ21lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0JhQTs7O2VBQUFBOzs7OERBaEJLO3dCQUVROzs7Ozs7QUFFMUIsTUFBTUMsZ0JBQWdCLENBQUMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUU7SUFDNUMsTUFBTUMsWUFBWUQsU0FBUyxDQUFDLEVBQUU7SUFDOUIsSUFBSUEsVUFBVUUsTUFBTSxHQUFHLEdBQUc7UUFDeEIscUJBQ0UsNkJBQUNELCtCQUNDLDZCQUFDSDtZQUFjRSxXQUFXQSxVQUFVRyxLQUFLLENBQUM7V0FBS0o7SUFHckQ7SUFDQSxxQkFBTyw2QkFBQ0UsaUJBQVdGO0FBQ3JCO0FBRU8sTUFBTUYsaUJBQTBELENBQUMsRUFBRUUsUUFBUSxFQUFFO0lBQ2xGLE1BQU1LLFNBQVNDLElBQUFBLGlCQUFTO0lBRXhCLE1BQU0sRUFDSkMsT0FBTyxFQUNMQyxZQUFZLEVBQUVQLFNBQVMsRUFBRSxFQUMxQixFQUNGLEdBQUdJO0lBRUosSUFBSUksTUFBTUMsT0FBTyxDQUFDVCxjQUFjQSxVQUFVRSxNQUFNLEdBQUcsR0FBRztRQUNwRCxxQkFBTyw2QkFBQ0o7WUFBY0UsV0FBV0E7V0FBWUQ7SUFDL0M7SUFFQSxxQkFBTyw2QkFBQ1csY0FBSyxDQUFDQyxRQUFRLFFBQUVaO0FBQzFCIn0=