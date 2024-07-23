"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiValueRemove", {
    enumerable: true,
    get: function() {
        return MultiValueRemove;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _X = /*#__PURE__*/ _interop_require_default(require("../../../icons/X"));
const _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../Tooltip"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'multi-value-remove';
const MultiValueRemove = (props)=>{
    const { innerProps: { className, onClick, onTouchEnd } } = props;
    const [showTooltip, setShowTooltip] = _react.default.useState(false);
    const { t } = (0, _reacti18next.useTranslation)('general');
    return /*#__PURE__*/ _react.default.createElement("button", {
        "aria-label": t('remove'),
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' '),
        onClick: (e)=>{
            setShowTooltip(false);
            onClick(e);
        },
        onMouseEnter: ()=>setShowTooltip(true),
        onMouseLeave: ()=>setShowTooltip(false),
        onTouchEnd: onTouchEnd,
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        className: `${baseClass}__tooltip`,
        show: showTooltip
    }, t('remove')), /*#__PURE__*/ _react.default.createElement(_X.default, {
        className: `${baseClass}__icon`
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L011bHRpVmFsdWVSZW1vdmUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTXVsdGlWYWx1ZVJlbW92ZVByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uIGFzIE9wdGlvblR5cGUgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IFggZnJvbSAnLi4vLi4vLi4vaWNvbnMvWCdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uLy4uL1Rvb2x0aXAnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ211bHRpLXZhbHVlLXJlbW92ZSdcblxuZXhwb3J0IGNvbnN0IE11bHRpVmFsdWVSZW1vdmU6IFJlYWN0LkZDPFxuICBNdWx0aVZhbHVlUmVtb3ZlUHJvcHM8T3B0aW9uVHlwZT4gJiB7XG4gICAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydidXR0b24nXVxuICB9XG4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpbm5lclByb3BzOiB7IGNsYXNzTmFtZSwgb25DbGljaywgb25Ub3VjaEVuZCB9LFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBbc2hvd1Rvb2x0aXAsIHNldFNob3dUb29sdGlwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGFyaWEtbGFiZWw9e3QoJ3JlbW92ZScpfVxuICAgICAgY2xhc3NOYW1lPXtbYmFzZUNsYXNzLCBjbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBzZXRTaG93VG9vbHRpcChmYWxzZSlcbiAgICAgICAgb25DbGljayhlKVxuICAgICAgfX1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd1Rvb2x0aXAodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dUb29sdGlwKGZhbHNlKX1cbiAgICAgIG9uVG91Y2hFbmQ9e29uVG91Y2hFbmR9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICA+XG4gICAgICA8VG9vbHRpcCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3Rvb2x0aXBgfSBzaG93PXtzaG93VG9vbHRpcH0+XG4gICAgICAgIHt0KCdyZW1vdmUnKX1cbiAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDxYIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faWNvbmB9IC8+XG4gICAgPC9idXR0b24+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJNdWx0aVZhbHVlUmVtb3ZlIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJpbm5lclByb3BzIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm9uVG91Y2hFbmQiLCJzaG93VG9vbHRpcCIsInNldFNob3dUb29sdGlwIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ0eXBlIiwiVG9vbHRpcCIsInNob3ciLCJYIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFhYUE7OztlQUFBQTs7OzhEQVhLOzhCQUNhOzBEQUlqQjtnRUFDTTtRQUNiOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsbUJBSVQsQ0FBQ0U7SUFDSCxNQUFNLEVBQ0pDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRSxFQUMvQyxHQUFHSjtJQUVKLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHQyxjQUFLLENBQUNDLFFBQVEsQ0FBQztJQUNyRCxNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLHFCQUNFLDZCQUFDQztRQUNDQyxjQUFZSCxFQUFFO1FBQ2RQLFdBQVc7WUFBQ0g7WUFBV0c7U0FBVSxDQUFDVyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUN2RFosU0FBUyxDQUFDYTtZQUNSVixlQUFlO1lBQ2ZILFFBQVFhO1FBQ1Y7UUFDQUMsY0FBYyxJQUFNWCxlQUFlO1FBQ25DWSxjQUFjLElBQU1aLGVBQWU7UUFDbkNGLFlBQVlBO1FBQ1plLE1BQUs7cUJBRUwsNkJBQUNDLGdCQUFPO1FBQUNsQixXQUFXLENBQUMsRUFBRUgsVUFBVSxTQUFTLENBQUM7UUFBRXNCLE1BQU1oQjtPQUNoREksRUFBRSwwQkFFTCw2QkFBQ2EsVUFBQztRQUFDcEIsV0FBVyxDQUFDLEVBQUVILFVBQVUsTUFBTSxDQUFDOztBQUd4QyJ9