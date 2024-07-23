"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    I18n: function() {
        return I18n;
    },
    default: function() {
        return _default;
    }
});
const _react = require("@monaco-editor/react");
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
const _i18next = /*#__PURE__*/ _interop_require_default(require("i18next"));
const _i18nextbrowserlanguagedetector = /*#__PURE__*/ _interop_require_default(require("i18next-browser-languagedetector"));
const _reacti18next = require("react-i18next");
const _defaultOptions = require("../../../../translations/defaultOptions");
const _getSupportedMonacoLocale = require("../../../utilities/getSupportedMonacoLocale");
const _Config = require("../Config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const I18n = ()=>{
    const config = (0, _Config.useConfig)();
    if (_i18next.default.isInitialized) {
        return null;
    }
    _i18next.default.use(new _i18nextbrowserlanguagedetector.default(null, {
        lookupCookie: 'lng',
        lookupLocalStorage: 'lng'
    })).use(_reacti18next.initReactI18next).init((0, _deepmerge.default)(_defaultOptions.defaultOptions, config.i18n || {}));
    _react.loader.config({
        'vs/nls': {
            availableLanguages: {
                '*': (0, _getSupportedMonacoLocale.getSupportedMonacoLocale)(_i18next.default.language)
            }
        }
    });
    return null;
};
const _default = I18n;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9JMThuL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgbG9hZGVyIH0gZnJvbSAnQG1vbmFjby1lZGl0b3IvcmVhY3QnXG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcbmltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnXG5pbXBvcnQgTGFuZ3VhZ2VEZXRlY3RvciBmcm9tICdpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvcidcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0T3B0aW9ucydcbmltcG9ydCB7IGdldFN1cHBvcnRlZE1vbmFjb0xvY2FsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9nZXRTdXBwb3J0ZWRNb25hY29Mb2NhbGUnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9Db25maWcnXG5cbmV4cG9ydCBjb25zdCBJMThuOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKClcblxuICBpZiAoaTE4bi5pc0luaXRpYWxpemVkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGkxOG5cbiAgICAudXNlKFxuICAgICAgbmV3IExhbmd1YWdlRGV0ZWN0b3IobnVsbCwge1xuICAgICAgICBsb29rdXBDb29raWU6ICdsbmcnLFxuICAgICAgICBsb29rdXBMb2NhbFN0b3JhZ2U6ICdsbmcnLFxuICAgICAgfSksXG4gICAgKVxuICAgIC51c2UoaW5pdFJlYWN0STE4bmV4dClcbiAgICAuaW5pdChkZWVwbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIGNvbmZpZy5pMThuIHx8IHt9KSlcbiAgbG9hZGVyLmNvbmZpZyh7XG4gICAgJ3ZzL25scyc6IHsgYXZhaWxhYmxlTGFuZ3VhZ2VzOiB7ICcqJzogZ2V0U3VwcG9ydGVkTW9uYWNvTG9jYWxlKGkxOG4ubGFuZ3VhZ2UpIH0gfSxcbiAgfSlcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSTE4blxuIl0sIm5hbWVzIjpbIkkxOG4iLCJjb25maWciLCJ1c2VDb25maWciLCJpMThuIiwiaXNJbml0aWFsaXplZCIsInVzZSIsIkxhbmd1YWdlRGV0ZWN0b3IiLCJsb29rdXBDb29raWUiLCJsb29rdXBMb2NhbFN0b3JhZ2UiLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsImRlZXBtZXJnZSIsImRlZmF1bHRPcHRpb25zIiwibG9hZGVyIiwiYXZhaWxhYmxlTGFuZ3VhZ2VzIiwiZ2V0U3VwcG9ydGVkTW9uYWNvTG9jYWxlIiwibGFuZ3VhZ2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFZYUEsSUFBSTtlQUFKQTs7SUFzQmIsT0FBbUI7ZUFBbkI7Ozt1QkFoQ3VCO2tFQUNEO2dFQUNMO3VGQUNZOzhCQUNJO2dDQUVGOzBDQUNVO3dCQUNmOzs7Ozs7QUFFbkIsTUFBTUEsT0FBaUI7SUFDNUIsTUFBTUMsU0FBU0MsSUFBQUEsaUJBQVM7SUFFeEIsSUFBSUMsZ0JBQUksQ0FBQ0MsYUFBYSxFQUFFO1FBQ3RCLE9BQU87SUFDVDtJQUVBRCxnQkFBSSxDQUNERSxHQUFHLENBQ0YsSUFBSUMsdUNBQWdCLENBQUMsTUFBTTtRQUN6QkMsY0FBYztRQUNkQyxvQkFBb0I7SUFDdEIsSUFFREgsR0FBRyxDQUFDSSw4QkFBZ0IsRUFDcEJDLElBQUksQ0FBQ0MsSUFBQUEsa0JBQVMsRUFBQ0MsOEJBQWMsRUFBRVgsT0FBT0UsSUFBSSxJQUFJLENBQUM7SUFDbERVLGFBQU0sQ0FBQ1osTUFBTSxDQUFDO1FBQ1osVUFBVTtZQUFFYSxvQkFBb0I7Z0JBQUUsS0FBS0MsSUFBQUEsa0RBQXdCLEVBQUNaLGdCQUFJLENBQUNhLFFBQVE7WUFBRTtRQUFFO0lBQ25GO0lBQ0EsT0FBTztBQUNUO01BRUEsV0FBZWhCIn0=