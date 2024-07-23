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
    FormLoadingOverlayToggle: function() {
        return FormLoadingOverlayToggle;
    },
    LoadingOverlay: function() {
        return LoadingOverlay;
    },
    LoadingOverlayToggle: function() {
        return LoadingOverlayToggle;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../utilities/getTranslation");
const _context = require("../../forms/Form/context");
const _LoadingOverlay = require("../../utilities/LoadingOverlay");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'loading-overlay';
const LoadingOverlay = ({ animationDuration, loadingText, overlayType, show = true })=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            show ? `${baseClass}--entering` : `${baseClass}--exiting`,
            overlayType ? `${baseClass}--${overlayType}` : ''
        ].filter(Boolean).join(' '),
        style: {
            animationDuration: animationDuration || '500ms'
        }
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__bars`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__bar`
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__bar`
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__bar`
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__bar`
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__bar`
    })), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__text`
    }, loadingText || t('loading')));
};
const LoadingOverlayToggle = ({ name: key, type = 'fullscreen', loadingText, show })=>{
    const { toggleLoadingOverlay } = (0, _LoadingOverlay.useLoadingOverlay)();
    _react.default.useEffect(()=>{
        toggleLoadingOverlay({
            type,
            isLoading: show,
            key,
            loadingText: loadingText || undefined
        });
        return ()=>{
            toggleLoadingOverlay({
                type,
                isLoading: false,
                key
            });
        };
    }, [
        show,
        toggleLoadingOverlay,
        key,
        type,
        loadingText
    ]);
    return null;
};
const FormLoadingOverlayToggle = ({ name, type = 'fullscreen', action, formIsLoading = false, loadingSuffix })=>{
    const isProcessing = (0, _context.useFormProcessing)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const labels = {
        create: t('creating'),
        loading: t('loading'),
        update: t('updating')
    };
    return /*#__PURE__*/ _react.default.createElement(LoadingOverlayToggle, {
        loadingText: `${labels[action]} ${loadingSuffix ? (0, _getTranslation.getTranslation)(loadingSuffix, i18n) : ''}`.trim(),
        name: name,
        show: formIsLoading || isProcessing,
        type: type
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBMb2FkaW5nT3ZlcmxheVR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvYWRpbmdPdmVybGF5L3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IHVzZUZvcm1Qcm9jZXNzaW5nIH0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9jb250ZXh0J1xuaW1wb3J0IHsgdXNlTG9hZGluZ092ZXJsYXkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9hZGluZ092ZXJsYXknXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2xvYWRpbmctb3ZlcmxheSdcblxudHlwZSBQcm9wcyA9IHtcbiAgYW5pbWF0aW9uRHVyYXRpb24/OiBzdHJpbmdcbiAgbG9hZGluZ1RleHQ/OiBzdHJpbmdcbiAgb3ZlcmxheVR5cGU/OiBzdHJpbmdcbiAgc2hvdz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IExvYWRpbmdPdmVybGF5OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBhbmltYXRpb25EdXJhdGlvbixcbiAgbG9hZGluZ1RleHQsXG4gIG92ZXJsYXlUeXBlLFxuICBzaG93ID0gdHJ1ZSxcbn0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgc2hvdyA/IGAke2Jhc2VDbGFzc30tLWVudGVyaW5nYCA6IGAke2Jhc2VDbGFzc30tLWV4aXRpbmdgLFxuICAgICAgICBvdmVybGF5VHlwZSA/IGAke2Jhc2VDbGFzc30tLSR7b3ZlcmxheVR5cGV9YCA6ICcnLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogYW5pbWF0aW9uRHVyYXRpb24gfHwgJzUwMG1zJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcnNgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcmB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19iYXJgfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmFyYH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcmB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19iYXJgfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGV4dGB9Pntsb2FkaW5nVGV4dCB8fCB0KCdsb2FkaW5nJyl9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG5cbnR5cGUgVXNlTG9hZGluZ092ZXJsYXlUb2dnbGVUID0ge1xuICBsb2FkaW5nVGV4dD86IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc2hvdzogYm9vbGVhblxuICB0eXBlPzogTG9hZGluZ092ZXJsYXlUeXBlc1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdPdmVybGF5VG9nZ2xlOiBSZWFjdC5GQzxVc2VMb2FkaW5nT3ZlcmxheVRvZ2dsZVQ+ID0gKHtcbiAgbmFtZToga2V5LFxuICB0eXBlID0gJ2Z1bGxzY3JlZW4nLFxuICBsb2FkaW5nVGV4dCxcbiAgc2hvdyxcbn0pID0+IHtcbiAgY29uc3QgeyB0b2dnbGVMb2FkaW5nT3ZlcmxheSB9ID0gdXNlTG9hZGluZ092ZXJsYXkoKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdG9nZ2xlTG9hZGluZ092ZXJsYXkoe1xuICAgICAgdHlwZSxcbiAgICAgIGlzTG9hZGluZzogc2hvdyxcbiAgICAgIGtleSxcbiAgICAgIGxvYWRpbmdUZXh0OiBsb2FkaW5nVGV4dCB8fCB1bmRlZmluZWQsXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0b2dnbGVMb2FkaW5nT3ZlcmxheSh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGtleSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbc2hvdywgdG9nZ2xlTG9hZGluZ092ZXJsYXksIGtleSwgdHlwZSwgbG9hZGluZ1RleHRdKVxuXG4gIHJldHVybiBudWxsXG59XG5cbnR5cGUgRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlVCA9IHtcbiAgYWN0aW9uOiAnY3JlYXRlJyB8ICdsb2FkaW5nJyB8ICd1cGRhdGUnXG4gIGZvcm1Jc0xvYWRpbmc/OiBib29sZWFuXG4gIGxvYWRpbmdTdWZmaXg/OiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHR5cGU/OiBMb2FkaW5nT3ZlcmxheVR5cGVzXG59XG5leHBvcnQgY29uc3QgRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlOiBSZWFjdC5GQzxGb3JtTG9hZGluZ092ZXJsYXlUb2dnbGVUPiA9ICh7XG4gIG5hbWUsXG4gIHR5cGUgPSAnZnVsbHNjcmVlbicsXG4gIGFjdGlvbixcbiAgZm9ybUlzTG9hZGluZyA9IGZhbHNlLFxuICBsb2FkaW5nU3VmZml4LFxufSkgPT4ge1xuICBjb25zdCBpc1Byb2Nlc3NpbmcgPSB1c2VGb3JtUHJvY2Vzc2luZygpXG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuXG4gIGNvbnN0IGxhYmVscyA9IHtcbiAgICBjcmVhdGU6IHQoJ2NyZWF0aW5nJyksXG4gICAgbG9hZGluZzogdCgnbG9hZGluZycpLFxuICAgIHVwZGF0ZTogdCgndXBkYXRpbmcnKSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExvYWRpbmdPdmVybGF5VG9nZ2xlXG4gICAgICBsb2FkaW5nVGV4dD17YCR7bGFiZWxzW2FjdGlvbl19ICR7XG4gICAgICAgIGxvYWRpbmdTdWZmaXggPyBnZXRUcmFuc2xhdGlvbihsb2FkaW5nU3VmZml4LCBpMThuKSA6ICcnXG4gICAgICB9YC50cmltKCl9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgc2hvdz17Zm9ybUlzTG9hZGluZyB8fCBpc1Byb2Nlc3Npbmd9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgIC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJGb3JtTG9hZGluZ092ZXJsYXlUb2dnbGUiLCJMb2FkaW5nT3ZlcmxheSIsIkxvYWRpbmdPdmVybGF5VG9nZ2xlIiwiYmFzZUNsYXNzIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJsb2FkaW5nVGV4dCIsIm92ZXJsYXlUeXBlIiwic2hvdyIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwic3R5bGUiLCJzcGFuIiwibmFtZSIsImtleSIsInR5cGUiLCJ0b2dnbGVMb2FkaW5nT3ZlcmxheSIsInVzZUxvYWRpbmdPdmVybGF5IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJpc0xvYWRpbmciLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJmb3JtSXNMb2FkaW5nIiwibG9hZGluZ1N1ZmZpeCIsImlzUHJvY2Vzc2luZyIsInVzZUZvcm1Qcm9jZXNzaW5nIiwiaTE4biIsImxhYmVscyIsImNyZWF0ZSIsImxvYWRpbmciLCJ1cGRhdGUiLCJnZXRUcmFuc2xhdGlvbiIsInRyaW0iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7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