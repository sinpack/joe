"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "i18nInit", {
    enumerable: true,
    get: function() {
        return i18nInit;
    }
});
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
const _i18next = /*#__PURE__*/ _interop_require_default(require("i18next"));
const _defaultOptions = require("./defaultOptions");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function i18nInit(options) {
    if (_i18next.default.isInitialized) {
        return _i18next.default;
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    _i18next.default.init({
        ...(0, _deepmerge.default)(_defaultOptions.defaultOptions, options || {})
    });
    return _i18next.default;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGlvbnMvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEluaXRPcHRpb25zLCBpMThuIH0gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vZGVmYXVsdE9wdGlvbnMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuSW5pdChvcHRpb25zOiBJbml0T3B0aW9ucyk6IGkxOG4ge1xuICBpZiAoaTE4bmV4dC5pc0luaXRpYWxpemVkKSB7XG4gICAgcmV0dXJuIGkxOG5leHRcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gIGkxOG5leHQuaW5pdCh7XG4gICAgLi4uZGVlcG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KSxcbiAgfSlcbiAgcmV0dXJuIGkxOG5leHRcbn1cbiJdLCJuYW1lcyI6WyJpMThuSW5pdCIsIm9wdGlvbnMiLCJpMThuZXh0IiwiaXNJbml0aWFsaXplZCIsImluaXQiLCJkZWVwbWVyZ2UiLCJkZWZhdWx0T3B0aW9ucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBT2dCQTs7O2VBQUFBOzs7a0VBTE07Z0VBQ0Y7Z0NBRVc7Ozs7OztBQUV4QixTQUFTQSxTQUFTQyxPQUFvQjtJQUMzQyxJQUFJQyxnQkFBTyxDQUFDQyxhQUFhLEVBQUU7UUFDekIsT0FBT0QsZ0JBQU87SUFDaEI7SUFDQSxtRUFBbUU7SUFDbkVBLGdCQUFPLENBQUNFLElBQUksQ0FBQztRQUNYLEdBQUdDLElBQUFBLGtCQUFTLEVBQUNDLDhCQUFjLEVBQUVMLFdBQVcsQ0FBQyxFQUFFO0lBQzdDO0lBQ0EsT0FBT0MsZ0JBQU87QUFDaEIifQ==