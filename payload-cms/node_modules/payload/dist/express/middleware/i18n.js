"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "i18nMiddleware", {
    enumerable: true,
    get: function() {
        return i18nMiddleware;
    }
});
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
const _i18next = /*#__PURE__*/ _interop_require_default(require("i18next"));
const _i18nexthttpmiddleware = /*#__PURE__*/ _interop_require_default(require("i18next-http-middleware"));
const _defaultOptions = require("../../translations/defaultOptions");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const i18nMiddleware = (options)=>{
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    _i18next.default.use(new _i18nexthttpmiddleware.default.LanguageDetector(_defaultOptions.defaultOptions.detection)).init({
        preload: _defaultOptions.defaultOptions.supportedLngs,
        ...(0, _deepmerge.default)(_defaultOptions.defaultOptions, options || {})
    });
    return _i18nexthttpmiddleware.default.handle(_i18next.default);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvaTE4bi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEhhbmRsZXIgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHR5cGUgeyBJbml0T3B0aW9ucyB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCdcbmltcG9ydCBpMThuSFRUUE1pZGRsZXdhcmUgZnJvbSAnaTE4bmV4dC1odHRwLW1pZGRsZXdhcmUnXG5cbmltcG9ydCB7IGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL2RlZmF1bHRPcHRpb25zJ1xuXG5jb25zdCBpMThuTWlkZGxld2FyZSA9IChvcHRpb25zOiBJbml0T3B0aW9ucyk6IEhhbmRsZXIgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gIGkxOG5leHQudXNlKG5ldyBpMThuSFRUUE1pZGRsZXdhcmUuTGFuZ3VhZ2VEZXRlY3RvcihkZWZhdWx0T3B0aW9ucy5kZXRlY3Rpb24pKS5pbml0KHtcbiAgICBwcmVsb2FkOiBkZWZhdWx0T3B0aW9ucy5zdXBwb3J0ZWRMbmdzLFxuICAgIC4uLmRlZXBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyB8fCB7fSksXG4gIH0pXG5cbiAgcmV0dXJuIGkxOG5IVFRQTWlkZGxld2FyZS5oYW5kbGUoaTE4bmV4dClcbn1cblxuZXhwb3J0IHsgaTE4bk1pZGRsZXdhcmUgfVxuIl0sIm5hbWVzIjpbImkxOG5NaWRkbGV3YXJlIiwib3B0aW9ucyIsImkxOG5leHQiLCJ1c2UiLCJpMThuSFRUUE1pZGRsZXdhcmUiLCJMYW5ndWFnZURldGVjdG9yIiwiZGVmYXVsdE9wdGlvbnMiLCJkZXRlY3Rpb24iLCJpbml0IiwicHJlbG9hZCIsInN1cHBvcnRlZExuZ3MiLCJkZWVwbWVyZ2UiLCJoYW5kbGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBbUJTQTs7O2VBQUFBOzs7a0VBaEJhO2dFQUNGOzhFQUNXO2dDQUVBOzs7Ozs7QUFFL0IsTUFBTUEsaUJBQWlCLENBQUNDO0lBQ3RCLG1FQUFtRTtJQUNuRUMsZ0JBQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUlDLDhCQUFrQixDQUFDQyxnQkFBZ0IsQ0FBQ0MsOEJBQWMsQ0FBQ0MsU0FBUyxHQUFHQyxJQUFJLENBQUM7UUFDbEZDLFNBQVNILDhCQUFjLENBQUNJLGFBQWE7UUFDckMsR0FBR0MsSUFBQUEsa0JBQVMsRUFBQ0wsOEJBQWMsRUFBRUwsV0FBVyxDQUFDLEVBQUU7SUFDN0M7SUFFQSxPQUFPRyw4QkFBa0IsQ0FBQ1EsTUFBTSxDQUFDVixnQkFBTztBQUMxQyJ9