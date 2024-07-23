"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LocalizerLabel", {
    enumerable: true,
    get: function() {
        return LocalizerLabel;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _ = require("../../..");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _Locale = require("../../../utilities/Locale");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'localizer-button';
const LocalizerLabel = (props)=>{
    const { ariaLabel, className } = props;
    const locale = (0, _Locale.useLocale)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    const { i18n } = (0, _reacti18next.useTranslation)();
    return /*#__PURE__*/ _react.default.createElement("div", {
        "aria-label": ariaLabel || t('locale'),
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__label`
    }, `${t('locale')}:`), "  ", /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__current-label`
    }, `${(0, _getTranslation.getTranslation)(locale.label, i18n)}`), " ", /*#__PURE__*/ _react.default.createElement(_.Chevron, {
        className: `${baseClass}__chevron`
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvY2FsaXplci9Mb2NhbGl6ZXJMYWJlbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgeyBDaGV2cm9uIH0gZnJvbSAnLi4vLi4vLi4nXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2xvY2FsaXplci1idXR0b24nXG5cbmV4cG9ydCBjb25zdCBMb2NhbGl6ZXJMYWJlbDogUmVhY3QuRkM8e1xuICBhcmlhTGFiZWw/OiBzdHJpbmdcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFyaWFMYWJlbCwgY2xhc3NOYW1lIH0gPSBwcm9wc1xuICBjb25zdCBsb2NhbGUgPSB1c2VMb2NhbGUoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWwgfHwgdCgnbG9jYWxlJyl9XG4gICAgICBjbGFzc05hbWU9e1tiYXNlQ2xhc3MsIGNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT57YCR7dCgnbG9jYWxlJyl9OmB9PC9kaXY+XG4gICAgICAmbmJzcDsmbmJzcDtcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY3VycmVudC1sYWJlbGB9PntgJHtnZXRUcmFuc2xhdGlvbihcbiAgICAgICAgbG9jYWxlLmxhYmVsLFxuICAgICAgICBpMThuLFxuICAgICAgKX1gfTwvc3Bhbj5cbiAgICAgICZuYnNwO1xuICAgICAgPENoZXZyb24gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jaGV2cm9uYH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkxvY2FsaXplckxhYmVsIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJhcmlhTGFiZWwiLCJjbGFzc05hbWUiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJpMThuIiwiZGl2IiwiYXJpYS1sYWJlbCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwic3BhbiIsImdldFRyYW5zbGF0aW9uIiwibGFiZWwiLCJDaGV2cm9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBVWFBOzs7ZUFBQUE7Ozs4REFWSzs4QkFDYTtrQkFFUDtnQ0FDTzt3QkFDTDtRQUNuQjs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELGlCQUdSLENBQUNFO0lBQ0osTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHRjtJQUNqQyxNQUFNRyxTQUFTQyxJQUFBQSxpQkFBUztJQUN4QixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBQzdCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdELElBQUFBLDRCQUFjO0lBRS9CLHFCQUNFLDZCQUFDRTtRQUNDQyxjQUFZUixhQUFhSSxFQUFFO1FBQzNCSCxXQUFXO1lBQUNIO1lBQVdHO1NBQVUsQ0FBQ1EsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7cUJBRXZELDZCQUFDSjtRQUFJTixXQUFXLENBQUMsRUFBRUgsVUFBVSxPQUFPLENBQUM7T0FBRyxDQUFDLEVBQUVNLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBTyxvQkFFaEUsNkJBQUNRO1FBQUtYLFdBQVcsQ0FBQyxFQUFFSCxVQUFVLGVBQWUsQ0FBQztPQUFHLENBQUMsRUFBRWUsSUFBQUEsOEJBQWMsRUFDaEVYLE9BQU9ZLEtBQUssRUFDWlIsTUFDQSxDQUFDLEdBQVEsbUJBRVgsNkJBQUNTLFNBQU87UUFBQ2QsV0FBVyxDQUFDLEVBQUVILFVBQVUsU0FBUyxDQUFDOztBQUdqRCJ9