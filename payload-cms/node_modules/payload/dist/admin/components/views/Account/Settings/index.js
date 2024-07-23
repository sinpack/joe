"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Settings", {
    enumerable: true,
    get: function() {
        return Settings;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../../forms/Label"));
const _ToggleTheme = require("../ToggleTheme");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'payload-settings';
const Settings = (props)=>{
    const { className } = props;
    const { i18n, t } = (0, _reacti18next.useTranslation)('authentication');
    const languageOptions = Object.entries(i18n.options.resources || {}).map(([language, resource])=>({
            label: resource.general.thisLanguage,
            value: language
        }));
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement("h3", null, t('general:payloadSettings')), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__language`
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "language-select",
        label: t('general:language')
    }), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        inputId: "language-select",
        onChange: ({ value })=>i18n.changeLanguage(value),
        options: languageOptions,
        value: languageOptions.find((language)=>language.value === i18n.language)
    })), /*#__PURE__*/ _react.default.createElement(_ToggleTheme.ToggleTheme, null));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvU2V0dGluZ3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3RyYW5zbGF0aW9ucy90eXBlJ1xuXG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUmVhY3RTZWxlY3QnXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vLi4vZm9ybXMvTGFiZWwnXG5pbXBvcnQgeyBUb2dnbGVUaGVtZSB9IGZyb20gJy4uL1RvZ2dsZVRoZW1lJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdwYXlsb2FkLXNldHRpbmdzJ1xuXG5leHBvcnQgY29uc3QgU2V0dGluZ3M6IFJlYWN0LkZDPHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHNcblxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpXG5cbiAgY29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gT2JqZWN0LmVudHJpZXMoaTE4bi5vcHRpb25zLnJlc291cmNlcyB8fCB7fSkubWFwKFxuICAgIChbbGFuZ3VhZ2UsIHJlc291cmNlXSkgPT4gKHtcbiAgICAgIGxhYmVsOiAocmVzb3VyY2UgYXMgVHJhbnNsYXRpb24pLmdlbmVyYWwudGhpc0xhbmd1YWdlLFxuICAgICAgdmFsdWU6IGxhbmd1YWdlLFxuICAgIH0pLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfT5cbiAgICAgIDxoMz57dCgnZ2VuZXJhbDpwYXlsb2FkU2V0dGluZ3MnKX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhbmd1YWdlYH0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2Utc2VsZWN0XCIgbGFiZWw9e3QoJ2dlbmVyYWw6bGFuZ3VhZ2UnKX0gLz5cbiAgICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgICAgaW5wdXRJZD1cImxhbmd1YWdlLXNlbGVjdFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IGkxOG4uY2hhbmdlTGFuZ3VhZ2UodmFsdWUpfVxuICAgICAgICAgIG9wdGlvbnM9e2xhbmd1YWdlT3B0aW9uc31cbiAgICAgICAgICB2YWx1ZT17bGFuZ3VhZ2VPcHRpb25zLmZpbmQoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS52YWx1ZSA9PT0gaTE4bi5sYW5ndWFnZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUb2dnbGVUaGVtZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsImNsYXNzTmFtZSIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJsYW5ndWFnZU9wdGlvbnMiLCJPYmplY3QiLCJlbnRyaWVzIiwib3B0aW9ucyIsInJlc291cmNlcyIsIm1hcCIsImxhbmd1YWdlIiwicmVzb3VyY2UiLCJsYWJlbCIsImdlbmVyYWwiLCJ0aGlzTGFuZ3VhZ2UiLCJ2YWx1ZSIsImRpdiIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiaDMiLCJMYWJlbCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsImlucHV0SWQiLCJvbkNoYW5nZSIsImNoYW5nZUxhbmd1YWdlIiwiZmluZCIsIlRvZ2dsZVRoZW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFZYUE7OztlQUFBQTs7OzhEQVpLOzhCQUNhO29FQUlQOzhEQUNOOzZCQUNVO1FBQ3JCOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsV0FFUixDQUFDRTtJQUNKLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdEO0lBRXRCLE1BQU0sRUFBRUUsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUVuQyxNQUFNQyxrQkFBa0JDLE9BQU9DLE9BQU8sQ0FBQ0wsS0FBS00sT0FBTyxDQUFDQyxTQUFTLElBQUksQ0FBQyxHQUFHQyxHQUFHLENBQ3RFLENBQUMsQ0FBQ0MsVUFBVUMsU0FBUyxHQUFNLENBQUE7WUFDekJDLE9BQU8sQUFBQ0QsU0FBeUJFLE9BQU8sQ0FBQ0MsWUFBWTtZQUNyREMsT0FBT0w7UUFDVCxDQUFBO0lBR0YscUJBQ0UsNkJBQUNNO1FBQUloQixXQUFXO1lBQUNGO1lBQVdFO1NBQVUsQ0FBQ2lCLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO3FCQUMxRCw2QkFBQ0MsWUFBSWxCLEVBQUUsMkNBQ1AsNkJBQUNjO1FBQUloQixXQUFXLENBQUMsRUFBRUYsVUFBVSxVQUFVLENBQUM7cUJBQ3RDLDZCQUFDdUIsY0FBSztRQUFDQyxTQUFRO1FBQWtCVixPQUFPVixFQUFFO3NCQUMxQyw2QkFBQ3FCLG9CQUFXO1FBQ1ZDLFNBQVE7UUFDUkMsVUFBVSxDQUFDLEVBQUVWLEtBQUssRUFBRSxHQUFLZCxLQUFLeUIsY0FBYyxDQUFDWDtRQUM3Q1IsU0FBU0g7UUFDVFcsT0FBT1gsZ0JBQWdCdUIsSUFBSSxDQUFDLENBQUNqQixXQUFhQSxTQUFTSyxLQUFLLEtBQUtkLEtBQUtTLFFBQVE7dUJBRzlFLDZCQUFDa0Isd0JBQVc7QUFHbEIifQ==