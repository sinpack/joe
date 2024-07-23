"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LanguageWrap", {
    enumerable: true,
    get: function() {
        return LanguageWrap;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
require("../../../scss/app.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const scriptLanguages = [
    'ar',
    'fa'
];
const LanguageWrap = ({ children })=>{
    const { i18n } = (0, _reacti18next.useTranslation)();
    const currentLanguage = i18n?.language;
    const isScriptLanguage = currentLanguage && scriptLanguages.includes(currentLanguage);
    if (isScriptLanguage) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "script-language"
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9MYW5ndWFnZVdyYXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0ICcuLi8uLi8uLi9zY3NzL2FwcC5zY3NzJ1xuXG5jb25zdCBzY3JpcHRMYW5ndWFnZXMgPSBbJ2FyJywgJ2ZhJ11cblxuZXhwb3J0IGNvbnN0IExhbmd1YWdlV3JhcDogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGN1cnJlbnRMYW5ndWFnZSA9IGkxOG4/Lmxhbmd1YWdlXG4gIGNvbnN0IGlzU2NyaXB0TGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2UgJiYgc2NyaXB0TGFuZ3VhZ2VzLmluY2x1ZGVzKGN1cnJlbnRMYW5ndWFnZSlcblxuICBpZiAoaXNTY3JpcHRMYW5ndWFnZSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNjcmlwdC1sYW5ndWFnZVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgfVxuXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e2NoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+XG59XG4iXSwibmFtZXMiOlsiTGFuZ3VhZ2VXcmFwIiwic2NyaXB0TGFuZ3VhZ2VzIiwiY2hpbGRyZW4iLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImlzU2NyaXB0TGFuZ3VhZ2UiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsIlJlYWN0IiwiRnJhZ21lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzs7ZUFBQUE7Ozs4REFQSzs4QkFDYTtRQUV4Qjs7Ozs7O0FBRVAsTUFBTUMsa0JBQWtCO0lBQUM7SUFBTTtDQUFLO0FBRTdCLE1BQU1ELGVBQXlELENBQUMsRUFBRUUsUUFBUSxFQUFFO0lBQ2pGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLDRCQUFjO0lBQy9CLE1BQU1DLGtCQUFrQkYsTUFBTUc7SUFDOUIsTUFBTUMsbUJBQW1CRixtQkFBbUJKLGdCQUFnQk8sUUFBUSxDQUFDSDtJQUVyRSxJQUFJRSxrQkFBa0I7UUFDcEIscUJBQU8sNkJBQUNFO1lBQUlDLFdBQVU7V0FBbUJSO0lBQzNDO0lBRUEscUJBQU8sNkJBQUNTLGNBQUssQ0FBQ0MsUUFBUSxRQUFFVjtBQUMxQiJ9