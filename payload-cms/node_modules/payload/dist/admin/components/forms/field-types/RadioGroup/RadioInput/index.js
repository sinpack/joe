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
const _getTranslation = require("../../../../../../utilities/getTranslation");
const _EditDepth = require("../../../../utilities/EditDepth");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'radio-input';
const RadioInput = (props)=>{
    const { isSelected, onChange, option, path, readOnly } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const editDepth = (0, _EditDepth.useEditDepth)();
    const classes = [
        baseClass,
        isSelected && `${baseClass}--is-selected`
    ].filter(Boolean).join(' ');
    const id = `field-${path}-${option.value}${editDepth > 1 ? `-${editDepth}` : ''}`;
    return /*#__PURE__*/ _react.default.createElement("label", {
        htmlFor: id
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement("input", {
        checked: isSelected,
        disabled: readOnly,
        id: id,
        onChange: ()=>typeof onChange === 'function' ? onChange(option.value) : null,
        type: "radio"
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__styled-radio`
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__label`
    }, (0, _getTranslation.getTranslation)(option.label, i18n))));
};
const _default = RadioInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvUmFkaW9JbnB1dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgeyB1c2VFZGl0RGVwdGggfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvRWRpdERlcHRoJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyYWRpby1pbnB1dCdcblxuY29uc3QgUmFkaW9JbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXNTZWxlY3RlZCwgb25DaGFuZ2UsIG9wdGlvbiwgcGF0aCwgcmVhZE9ubHkgfSA9IHByb3BzXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IGVkaXREZXB0aCA9IHVzZUVkaXREZXB0aCgpXG5cbiAgY29uc3QgY2xhc3NlcyA9IFtiYXNlQ2xhc3MsIGlzU2VsZWN0ZWQgJiYgYCR7YmFzZUNsYXNzfS0taXMtc2VsZWN0ZWRgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG5cbiAgY29uc3QgaWQgPSBgZmllbGQtJHtwYXRofS0ke29wdGlvbi52YWx1ZX0ke2VkaXREZXB0aCA+IDEgPyBgLSR7ZWRpdERlcHRofWAgOiAnJ31gXG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgaHRtbEZvcj17aWR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+ICh0eXBlb2Ygb25DaGFuZ2UgPT09ICdmdW5jdGlvbicgPyBvbkNoYW5nZShvcHRpb24udmFsdWUpIDogbnVsbCl9XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zdHlsZWQtcmFkaW9gfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e2dldFRyYW5zbGF0aW9uKG9wdGlvbi5sYWJlbCwgaTE4bil9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0lucHV0XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiUmFkaW9JbnB1dCIsInByb3BzIiwiaXNTZWxlY3RlZCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwicGF0aCIsInJlYWRPbmx5IiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiZWRpdERlcHRoIiwidXNlRWRpdERlcHRoIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiaWQiLCJ2YWx1ZSIsImxhYmVsIiwiaHRtbEZvciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwiY2hlY2tlZCIsImRpc2FibGVkIiwidHlwZSIsInNwYW4iLCJnZXRUcmFuc2xhdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXNDQTs7O2VBQUE7Ozs4REF0Q2tCOzhCQUNhO2dDQUlBOzJCQUNGO1FBQ3RCOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLGFBQThCLENBQUNDO0lBQ25DLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUUsR0FBR0w7SUFDekQsTUFBTSxFQUFFTSxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFFL0IsTUFBTUMsWUFBWUMsSUFBQUEsdUJBQVk7SUFFOUIsTUFBTUMsVUFBVTtRQUFDWjtRQUFXRyxjQUFjLENBQUMsRUFBRUgsVUFBVSxhQUFhLENBQUM7S0FBQyxDQUFDYSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUU1RixNQUFNQyxLQUFLLENBQUMsTUFBTSxFQUFFVixLQUFLLENBQUMsRUFBRUQsT0FBT1ksS0FBSyxDQUFDLEVBQUVQLFlBQVksSUFBSSxDQUFDLENBQUMsRUFBRUEsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBRWpGLHFCQUNFLDZCQUFDUTtRQUFNQyxTQUFTSDtxQkFDZCw2QkFBQ0k7UUFBSUMsV0FBV1Q7cUJBQ2QsNkJBQUNVO1FBQ0NDLFNBQVNwQjtRQUNUcUIsVUFBVWpCO1FBQ1ZTLElBQUlBO1FBQ0paLFVBQVUsSUFBTyxPQUFPQSxhQUFhLGFBQWFBLFNBQVNDLE9BQU9ZLEtBQUssSUFBSTtRQUMzRVEsTUFBSztzQkFFUCw2QkFBQ0M7UUFBS0wsV0FBVyxDQUFDLEVBQUVyQixVQUFVLGNBQWMsQ0FBQztzQkFDN0MsNkJBQUMwQjtRQUFLTCxXQUFXLENBQUMsRUFBRXJCLFVBQVUsT0FBTyxDQUFDO09BQUcyQixJQUFBQSw4QkFBYyxFQUFDdEIsT0FBT2EsS0FBSyxFQUFFVjtBQUk5RTtNQUVBLFdBQWVQIn0=