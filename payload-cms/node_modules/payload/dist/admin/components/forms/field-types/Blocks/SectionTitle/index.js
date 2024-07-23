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
const _useField = /*#__PURE__*/ _interop_require_default(require("../../../useField"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'section-title';
/**
 * An input field representing the block's `blockName` property - responsible for reading and saving the `blockName`
 * property from/into the provided path.
 */ const SectionTitle = (props)=>{
    const { customOnChange, customValue, path, readOnly } = props;
    const { setValue, value } = (0, _useField.default)({
        path
    });
    const { t } = (0, _reacti18next.useTranslation)('general');
    const classes = [
        baseClass
    ].filter(Boolean).join(' ');
    const onChange = customOnChange || ((e)=>{
        e.stopPropagation();
        e.preventDefault();
        setValue(e.target.value);
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        "data-value": customValue || value
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: `${baseClass}__input`,
        id: path,
        name: path,
        onChange: onChange,
        placeholder: t('untitled'),
        readOnly: readOnly,
        type: "text",
        value: customValue || value || ''
    }));
};
const _default = SectionTitle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9TZWN0aW9uVGl0bGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi8uLi91c2VGaWVsZCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc2VjdGlvbi10aXRsZSdcblxuLyoqXG4gKiBBbiBpbnB1dCBmaWVsZCByZXByZXNlbnRpbmcgdGhlIGJsb2NrJ3MgYGJsb2NrTmFtZWAgcHJvcGVydHkgLSByZXNwb25zaWJsZSBmb3IgcmVhZGluZyBhbmQgc2F2aW5nIHRoZSBgYmxvY2tOYW1lYFxuICogcHJvcGVydHkgZnJvbS9pbnRvIHRoZSBwcm92aWRlZCBwYXRoLlxuICovXG5jb25zdCBTZWN0aW9uVGl0bGU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGN1c3RvbU9uQ2hhbmdlLCBjdXN0b21WYWx1ZSwgcGF0aCwgcmVhZE9ubHkgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBzZXRWYWx1ZSwgdmFsdWUgfSA9IHVzZUZpZWxkKHsgcGF0aCB9KVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICBjb25zdCBjbGFzc2VzID0gW2Jhc2VDbGFzc10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxuXG4gIGNvbnN0IG9uQ2hhbmdlID1cbiAgICBjdXN0b21PbkNoYW5nZSB8fFxuICAgICgoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IGRhdGEtdmFsdWU9e2N1c3RvbVZhbHVlIHx8IHZhbHVlfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lucHV0YH1cbiAgICAgICAgaWQ9e3BhdGh9XG4gICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3VudGl0bGVkJyl9XG4gICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17Y3VzdG9tVmFsdWUgfHwgKHZhbHVlIGFzIHN0cmluZykgfHwgJyd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25UaXRsZVxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlNlY3Rpb25UaXRsZSIsInByb3BzIiwiY3VzdG9tT25DaGFuZ2UiLCJjdXN0b21WYWx1ZSIsInBhdGgiLCJyZWFkT25seSIsInNldFZhbHVlIiwidmFsdWUiLCJ1c2VGaWVsZCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIm9uQ2hhbmdlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS12YWx1ZSIsImlucHV0IiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ0eXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE4Q0E7OztlQUFBOzs7OERBOUNrQjs4QkFDYTtpRUFJVjtRQUNkOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCOzs7Q0FHQyxHQUNELE1BQU1DLGVBQWdDLENBQUNDO0lBQ3JDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQUdKO0lBRXhELE1BQU0sRUFBRUssUUFBUSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsSUFBQUEsaUJBQVEsRUFBQztRQUFFSjtJQUFLO0lBQzVDLE1BQU0sRUFBRUssQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFFN0IsTUFBTUMsVUFBVTtRQUFDWjtLQUFVLENBQUNhLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRWpELE1BQU1DLFdBQ0piLGtCQUNDLENBQUEsQ0FBQ2M7UUFDQUEsRUFBRUMsZUFBZTtRQUNqQkQsRUFBRUUsY0FBYztRQUNoQlosU0FBU1UsRUFBRUcsTUFBTSxDQUFDWixLQUFLO0lBQ3pCLENBQUE7SUFFRixxQkFDRSw2QkFBQ2E7UUFBSUMsV0FBV1Y7UUFBU1csY0FBWW5CLGVBQWVJO3FCQUNsRCw2QkFBQ2dCO1FBQ0NGLFdBQVcsQ0FBQyxFQUFFdEIsVUFBVSxPQUFPLENBQUM7UUFDaEN5QixJQUFJcEI7UUFDSnFCLE1BQU1yQjtRQUNOVyxVQUFVQTtRQUNWVyxhQUFhakIsRUFBRTtRQUNmSixVQUFVQTtRQUNWc0IsTUFBSztRQUNMcEIsT0FBT0osZUFBZ0JJLFNBQW9COztBQUluRDtNQUVBLFdBQWVQIn0=