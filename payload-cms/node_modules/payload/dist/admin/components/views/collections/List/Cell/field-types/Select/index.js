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
const _types = require("../../../../../../../../fields/config/types");
const _getTranslation = require("../../../../../../../../utilities/getTranslation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SelectCell = ({ data, field })=>{
    const { i18n } = (0, _reacti18next.useTranslation)();
    const findLabel = (items)=>items.map((i)=>{
            const found = field.options.filter((f)=>f.value === i)?.[0]?.label;
            return (0, _getTranslation.getTranslation)(found, i18n);
        }).join(', ');
    let content = '';
    if ((0, _types.optionsAreObjects)(field.options)) {
        content = Array.isArray(data) ? findLabel(data) // hasMany
         : findLabel([
            data
        ]);
    } else {
        content = Array.isArray(data) ? data.join(', ') // hasMany
         : data;
    }
    return /*#__PURE__*/ _react.default.createElement("span", null, content);
};
const _default = SelectCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9TZWxlY3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBPcHRpb25PYmplY3QsIFNlbGVjdEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgQ2VsbENvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IG9wdGlvbnNBcmVPYmplY3RzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuXG5jb25zdCBTZWxlY3RDZWxsOiBSZWFjdC5GQzxDZWxsQ29tcG9uZW50UHJvcHM8U2VsZWN0RmllbGQsIGFueT4+ID0gKHsgZGF0YSwgZmllbGQgfSkgPT4ge1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgZmluZExhYmVsID0gKGl0ZW1zOiBzdHJpbmdbXSkgPT5cbiAgICBpdGVtc1xuICAgICAgLm1hcCgoaSkgPT4ge1xuICAgICAgICBjb25zdCBmb3VuZCA9IChmaWVsZC5vcHRpb25zIGFzIE9wdGlvbk9iamVjdFtdKS5maWx0ZXIoXG4gICAgICAgICAgKGY6IE9wdGlvbk9iamVjdCkgPT4gZi52YWx1ZSA9PT0gaSxcbiAgICAgICAgKT8uWzBdPy5sYWJlbFxuICAgICAgICByZXR1cm4gZ2V0VHJhbnNsYXRpb24oZm91bmQsIGkxOG4pXG4gICAgICB9KVxuICAgICAgLmpvaW4oJywgJylcblxuICBsZXQgY29udGVudCA9ICcnXG4gIGlmIChvcHRpb25zQXJlT2JqZWN0cyhmaWVsZC5vcHRpb25zKSkge1xuICAgIGNvbnRlbnQgPSBBcnJheS5pc0FycmF5KGRhdGEpXG4gICAgICA/IGZpbmRMYWJlbChkYXRhKSAvLyBoYXNNYW55XG4gICAgICA6IGZpbmRMYWJlbChbZGF0YV0pXG4gIH0gZWxzZSB7XG4gICAgY29udGVudCA9IEFycmF5LmlzQXJyYXkoZGF0YSlcbiAgICAgID8gZGF0YS5qb2luKCcsICcpIC8vIGhhc01hbnlcbiAgICAgIDogZGF0YVxuICB9XG5cbiAgcmV0dXJuIDxzcGFuPntjb250ZW50fTwvc3Bhbj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2VsbFxuIl0sIm5hbWVzIjpbIlNlbGVjdENlbGwiLCJkYXRhIiwiZmllbGQiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJmaW5kTGFiZWwiLCJpdGVtcyIsIm1hcCIsImkiLCJmb3VuZCIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJmIiwidmFsdWUiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwiam9pbiIsImNvbnRlbnQiLCJvcHRpb25zQXJlT2JqZWN0cyIsIkFycmF5IiwiaXNBcnJheSIsInNwYW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFtQ0E7OztlQUFBOzs7OERBbkNrQjs4QkFDYTt1QkFLRztnQ0FDSDs7Ozs7O0FBRS9CLE1BQU1BLGFBQTZELENBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7SUFDakYsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFDL0IsTUFBTUMsWUFBWSxDQUFDQyxRQUNqQkEsTUFDR0MsR0FBRyxDQUFDLENBQUNDO1lBQ0osTUFBTUMsUUFBUSxBQUFDUCxNQUFNUSxPQUFPLENBQW9CQyxNQUFNLENBQ3BELENBQUNDLElBQW9CQSxFQUFFQyxLQUFLLEtBQUtMLElBQ2hDLENBQUMsRUFBRSxFQUFFTTtZQUNSLE9BQU9DLElBQUFBLDhCQUFjLEVBQUNOLE9BQU9OO1FBQy9CLEdBQ0NhLElBQUksQ0FBQztJQUVWLElBQUlDLFVBQVU7SUFDZCxJQUFJQyxJQUFBQSx3QkFBaUIsRUFBQ2hCLE1BQU1RLE9BQU8sR0FBRztRQUNwQ08sVUFBVUUsTUFBTUMsT0FBTyxDQUFDbkIsUUFDcEJJLFVBQVVKLE1BQU0sVUFBVTtXQUMxQkksVUFBVTtZQUFDSjtTQUFLO0lBQ3RCLE9BQU87UUFDTGdCLFVBQVVFLE1BQU1DLE9BQU8sQ0FBQ25CLFFBQ3BCQSxLQUFLZSxJQUFJLENBQUMsTUFBTSxVQUFVO1dBQzFCZjtJQUNOO0lBRUEscUJBQU8sNkJBQUNvQixjQUFNSjtBQUNoQjtNQUVBLFdBQWVqQiJ9