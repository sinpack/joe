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
const _formatDate = require("../../../../../../../utilities/formatDate");
const _Config = require("../../../../../../utilities/Config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const DateCell = ({ data, field })=>{
    const { admin: { dateFormat: dateFormatFromConfig } } = (0, _Config.useConfig)();
    const dateFormat = field?.admin?.date?.displayFormat || dateFormatFromConfig;
    const { i18n } = (0, _reacti18next.useTranslation)();
    return /*#__PURE__*/ _react.default.createElement("span", null, data && (0, _formatDate.formatDate)(data, dateFormat, i18n?.language));
};
const _default = DateCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9EYXRlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcbmltcG9ydCB0eXBlIHsgQ2VsbENvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZm9ybWF0RGF0ZSdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5cbmNvbnN0IERhdGVDZWxsOiBSZWFjdC5GQzxDZWxsQ29tcG9uZW50UHJvcHM8RGF0ZUZpZWxkLCBhbnk+PiA9ICh7IGRhdGEsIGZpZWxkIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IGRhdGVGb3JtYXQ6IGRhdGVGb3JtYXRGcm9tQ29uZmlnIH0sXG4gIH0gPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IGRhdGVGb3JtYXQgPSBmaWVsZD8uYWRtaW4/LmRhdGU/LmRpc3BsYXlGb3JtYXQgfHwgZGF0ZUZvcm1hdEZyb21Db25maWdcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICByZXR1cm4gPHNwYW4+e2RhdGEgJiYgZm9ybWF0RGF0ZShkYXRhLCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSl9PC9zcGFuPlxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlQ2VsbFxuIl0sIm5hbWVzIjpbIkRhdGVDZWxsIiwiZGF0YSIsImZpZWxkIiwiYWRtaW4iLCJkYXRlRm9ybWF0IiwiZGF0ZUZvcm1hdEZyb21Db25maWciLCJ1c2VDb25maWciLCJkYXRlIiwiZGlzcGxheUZvcm1hdCIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsInNwYW4iLCJmb3JtYXREYXRlIiwibGFuZ3VhZ2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7OztlQUFBOzs7OERBckJrQjs4QkFDYTs0QkFLSjt3QkFDRDs7Ozs7O0FBRTFCLE1BQU1BLFdBQXlELENBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7SUFDN0UsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLFlBQVlDLG9CQUFvQixFQUFFLEVBQzVDLEdBQUdDLElBQUFBLGlCQUFTO0lBRWIsTUFBTUYsYUFBYUYsT0FBT0MsT0FBT0ksTUFBTUMsaUJBQWlCSDtJQUV4RCxNQUFNLEVBQUVJLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUUvQixxQkFBTyw2QkFBQ0MsY0FBTVYsUUFBUVcsSUFBQUEsc0JBQVUsRUFBQ1gsTUFBTUcsWUFBWUssTUFBTUk7QUFDM0Q7TUFFQSxXQUFlYiJ9