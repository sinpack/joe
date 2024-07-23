"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeaveWithoutSaving", {
    enumerable: true,
    get: function() {
        return LeaveWithoutSaving;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouternavigationprompt = /*#__PURE__*/ _interop_require_default(require("react-router-navigation-prompt"));
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _context = require("../../forms/Form/context");
const _Auth = require("../../utilities/Auth");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const modalSlug = 'leave-without-saving';
const baseClass = 'leave-without-saving';
const Component = ({ isActive, onCancel, onConfirm })=>{
    const { closeModal, openModal, modalState } = (0, _modal.useModal)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    // Manually check for modal state as 'esc' key will not trigger the nav inactivity
    (0, _react.useEffect)(()=>{
        if (!modalState?.[modalSlug]?.isOpen && isActive) {
            onCancel();
        }
    }, [
        modalState
    ]);
    (0, _react.useEffect)(()=>{
        if (isActive) openModal(modalSlug);
        else closeModal(modalSlug);
    }, [
        isActive,
        openModal,
        closeModal
    ]);
    return /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        className: baseClass,
        onClose: onCancel,
        slug: modalSlug
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrapper`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__content`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('leaveWithoutSaving')), /*#__PURE__*/ _react.default.createElement("p", null, t('changesNotSaved'))), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__controls`
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        onClick: onCancel
    }, t('stayOnThisPage')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: onConfirm
    }, t('leaveAnyway')))));
};
const LeaveWithoutSaving = ()=>{
    const modified = (0, _context.useFormModified)();
    const { user } = (0, _Auth.useAuth)();
    return /*#__PURE__*/ _react.default.createElement(_reactrouternavigationprompt.default, {
        renderIfNotActive: true,
        when: Boolean(modified && user)
    }, ({ isActive, onCancel, onConfirm })=>/*#__PURE__*/ _react.default.createElement(Component, {
            isActive: isActive,
            onCancel: onCancel,
            onConfirm: onConfirm
        }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL21vZGFscy9MZWF2ZVdpdGhvdXRTYXZpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCBOYXZpZ2F0aW9uUHJvbXB0IGZyb20gJ3JlYWN0LXJvdXRlci1uYXZpZ2F0aW9uLXByb21wdCdcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nXG5pbXBvcnQgeyB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgbW9kYWxTbHVnID0gJ2xlYXZlLXdpdGhvdXQtc2F2aW5nJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbGVhdmUtd2l0aG91dC1zYXZpbmcnXG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8e1xuICBpc0FjdGl2ZTogYm9vbGVhblxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuICBvbkNvbmZpcm06ICgpID0+IHZvaWRcbn0+ID0gKHsgaXNBY3RpdmUsIG9uQ2FuY2VsLCBvbkNvbmZpcm0gfSkgPT4ge1xuICBjb25zdCB7IGNsb3NlTW9kYWwsIG9wZW5Nb2RhbCwgbW9kYWxTdGF0ZSB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICAvLyBNYW51YWxseSBjaGVjayBmb3IgbW9kYWwgc3RhdGUgYXMgJ2VzYycga2V5IHdpbGwgbm90IHRyaWdnZXIgdGhlIG5hdiBpbmFjdGl2aXR5XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtb2RhbFN0YXRlPy5bbW9kYWxTbHVnXT8uaXNPcGVuICYmIGlzQWN0aXZlKSB7XG4gICAgICBvbkNhbmNlbCgpXG4gICAgfVxuICB9LCBbbW9kYWxTdGF0ZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNBY3RpdmUpIG9wZW5Nb2RhbChtb2RhbFNsdWcpXG4gICAgZWxzZSBjbG9zZU1vZGFsKG1vZGFsU2x1ZylcbiAgfSwgW2lzQWN0aXZlLCBvcGVuTW9kYWwsIGNsb3NlTW9kYWxdKVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGNsYXNzTmFtZT17YmFzZUNsYXNzfSBvbkNsb3NlPXtvbkNhbmNlbH0gc2x1Zz17bW9kYWxTbHVnfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwcGVyYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50YH0+XG4gICAgICAgICAgPGgxPnt0KCdsZWF2ZVdpdGhvdXRTYXZpbmcnKX08L2gxPlxuICAgICAgICAgIDxwPnt0KCdjaGFuZ2VzTm90U2F2ZWQnKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udHJvbHNgfT5cbiAgICAgICAgICA8QnV0dG9uIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25DYW5jZWx9PlxuICAgICAgICAgICAge3QoJ3N0YXlPblRoaXNQYWdlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNvbmZpcm19Pnt0KCdsZWF2ZUFueXdheScpfTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IExlYXZlV2l0aG91dFNhdmluZzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGlmaWVkID0gdXNlRm9ybU1vZGlmaWVkKClcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKClcblxuICByZXR1cm4gKFxuICAgIDxOYXZpZ2F0aW9uUHJvbXB0IHJlbmRlcklmTm90QWN0aXZlIHdoZW49e0Jvb2xlYW4obW9kaWZpZWQgJiYgdXNlcil9PlxuICAgICAgeyh7IGlzQWN0aXZlLCBvbkNhbmNlbCwgb25Db25maXJtIH0pID0+IChcbiAgICAgICAgPENvbXBvbmVudCBpc0FjdGl2ZT17aXNBY3RpdmV9IG9uQ2FuY2VsPXtvbkNhbmNlbH0gb25Db25maXJtPXtvbkNvbmZpcm19IC8+XG4gICAgICApfVxuICAgIDwvTmF2aWdhdGlvblByb21wdD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkxlYXZlV2l0aG91dFNhdmluZyIsIm1vZGFsU2x1ZyIsImJhc2VDbGFzcyIsIkNvbXBvbmVudCIsImlzQWN0aXZlIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwibW9kYWxTdGF0ZSIsInVzZU1vZGFsIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlRWZmZWN0IiwiaXNPcGVuIiwiTW9kYWwiLCJjbGFzc05hbWUiLCJvbkNsb3NlIiwic2x1ZyIsImRpdiIsImgxIiwicCIsIkJ1dHRvbiIsImJ1dHRvblN0eWxlIiwib25DbGljayIsIm1vZGlmaWVkIiwidXNlRm9ybU1vZGlmaWVkIiwidXNlciIsInVzZUF1dGgiLCJOYXZpZ2F0aW9uUHJvbXB0IiwicmVuZGVySWZOb3RBY3RpdmUiLCJ3aGVuIiwiQm9vbGVhbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFvRGFBOzs7ZUFBQUE7Ozt1QkFwRG1COytEQUNDOzhCQUNGO29GQUNGOytEQUVWO3lCQUNhO3NCQUNSO1FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsWUFBWTtBQUVsQixNQUFNQyxZQUlELENBQUMsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBR0MsSUFBQUEsZUFBUTtJQUN0RCxNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLGtGQUFrRjtJQUNsRkMsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUksQ0FBQ0osWUFBWSxDQUFDUixVQUFVLEVBQUVhLFVBQVVWLFVBQVU7WUFDaERDO1FBQ0Y7SUFDRixHQUFHO1FBQUNJO0tBQVc7SUFFZkksSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUlULFVBQVVJLFVBQVVQO2FBQ25CTSxXQUFXTjtJQUNsQixHQUFHO1FBQUNHO1FBQVVJO1FBQVdEO0tBQVc7SUFFcEMscUJBQ0UsNkJBQUNRLFlBQUs7UUFBQ0MsV0FBV2Q7UUFBV2UsU0FBU1o7UUFBVWEsTUFBTWpCO3FCQUNwRCw2QkFBQ2tCO1FBQUlILFdBQVcsQ0FBQyxFQUFFZCxVQUFVLFNBQVMsQ0FBQztxQkFDckMsNkJBQUNpQjtRQUFJSCxXQUFXLENBQUMsRUFBRWQsVUFBVSxTQUFTLENBQUM7cUJBQ3JDLDZCQUFDa0IsWUFBSVQsRUFBRSxzQ0FDUCw2QkFBQ1UsV0FBR1YsRUFBRSxvQ0FFUiw2QkFBQ1E7UUFBSUgsV0FBVyxDQUFDLEVBQUVkLFVBQVUsVUFBVSxDQUFDO3FCQUN0Qyw2QkFBQ29CLGVBQU07UUFBQ0MsYUFBWTtRQUFZQyxTQUFTbkI7T0FDdENNLEVBQUUsa0NBRUwsNkJBQUNXLGVBQU07UUFBQ0UsU0FBU2xCO09BQVlLLEVBQUU7QUFLekM7QUFFTyxNQUFNWCxxQkFBK0I7SUFDMUMsTUFBTXlCLFdBQVdDLElBQUFBLHdCQUFlO0lBQ2hDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLGFBQU87SUFFeEIscUJBQ0UsNkJBQUNDLG9DQUFnQjtRQUFDQyxtQkFBQUE7UUFBa0JDLE1BQU1DLFFBQVFQLFlBQVlFO09BQzNELENBQUMsRUFBRXZCLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsaUJBQ2pDLDZCQUFDSDtZQUFVQyxVQUFVQTtZQUFVQyxVQUFVQTtZQUFVQyxXQUFXQTs7QUFJdEUifQ==