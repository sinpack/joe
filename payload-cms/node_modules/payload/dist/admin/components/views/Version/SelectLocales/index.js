"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
const _Locale = require("../../../utilities/Locale");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'select-version-locales';
const SelectLocales = ({ onChange, options, value })=>{
    const { t } = (0, _reacti18next.useTranslation)('version');
    const { code } = (0, _Locale.useLocale)();
    const format = (items)=>{
        return items.map((item)=>{
            if (typeof item.label === 'string') return item;
            if (typeof item.label !== 'string' && item.label[code]) {
                return {
                    label: item.label[code],
                    value: item.value
                };
            }
        });
    };
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__label`
    }, t('showLocales')), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        isMulti: true,
        onChange: onChange,
        options: format(options),
        placeholder: t('selectLocales'),
        value: format(value)
    }));
};
const _default = SelectLocales;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vU2VsZWN0TG9jYWxlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1JlYWN0U2VsZWN0J1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc2VsZWN0LXZlcnNpb24tbG9jYWxlcydcblxuY29uc3QgU2VsZWN0TG9jYWxlczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIG9wdGlvbnMsIHZhbHVlIH0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpXG4gIGNvbnN0IHsgY29kZSB9ID0gdXNlTG9jYWxlKClcblxuICBjb25zdCBmb3JtYXQgPSAoaXRlbXMpID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0ubGFiZWwgPT09ICdzdHJpbmcnKSByZXR1cm4gaXRlbVxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmxhYmVsICE9PSAnc3RyaW5nJyAmJiBpdGVtLmxhYmVsW2NvZGVdKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWxbY29kZV0sXG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9Pnt0KCdzaG93TG9jYWxlcycpfTwvZGl2PlxuICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgIGlzTXVsdGlcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBvcHRpb25zPXtmb3JtYXQob3B0aW9ucyl9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0KCdzZWxlY3RMb2NhbGVzJyl9XG4gICAgICAgIHZhbHVlPXtmb3JtYXQodmFsdWUpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RMb2NhbGVzXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiU2VsZWN0TG9jYWxlcyIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInZhbHVlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiY29kZSIsInVzZUxvY2FsZSIsImZvcm1hdCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImxhYmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwiUmVhY3RTZWxlY3QiLCJpc011bHRpIiwicGxhY2Vob2xkZXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBeUNBOzs7ZUFBQTs7OzhEQXpDa0I7OEJBQ2E7b0VBSVA7d0JBQ0U7UUFDbkI7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsZ0JBQWlDLENBQUMsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtJQUNsRSxNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBQzdCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLGlCQUFTO0lBRTFCLE1BQU1DLFNBQVMsQ0FBQ0M7UUFDZCxPQUFPQSxNQUFNQyxHQUFHLENBQUMsQ0FBQ0M7WUFDaEIsSUFBSSxPQUFPQSxLQUFLQyxLQUFLLEtBQUssVUFBVSxPQUFPRDtZQUMzQyxJQUFJLE9BQU9BLEtBQUtDLEtBQUssS0FBSyxZQUFZRCxLQUFLQyxLQUFLLENBQUNOLEtBQUssRUFBRTtnQkFDdEQsT0FBTztvQkFDTE0sT0FBT0QsS0FBS0MsS0FBSyxDQUFDTixLQUFLO29CQUN2QkgsT0FBT1EsS0FBS1IsS0FBSztnQkFDbkI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw2QkFBQ1U7UUFBSUMsV0FBV2Y7cUJBQ2QsNkJBQUNjO1FBQUlDLFdBQVcsQ0FBQyxFQUFFZixVQUFVLE9BQU8sQ0FBQztPQUFHSyxFQUFFLCtCQUMxQyw2QkFBQ1csb0JBQVc7UUFDVkMsU0FBQUE7UUFDQWYsVUFBVUE7UUFDVkMsU0FBU00sT0FBT047UUFDaEJlLGFBQWFiLEVBQUU7UUFDZkQsT0FBT0ssT0FBT0w7O0FBSXRCO01BRUEsV0FBZUgifQ==