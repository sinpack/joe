"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Hamburger", {
    enumerable: true,
    get: function() {
        return Hamburger;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _ = require("../..");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'hamburger';
const Hamburger = (props)=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    const { closeIcon = 'x', isActive = false } = props;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrapper`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__icon`
    }, !isActive && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__lines`,
        title: t('open')
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__line ${baseClass}__top`
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__line ${baseClass}__middle`
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__line ${baseClass}__bottom`
    })), isActive && /*#__PURE__*/ _react.default.createElement("div", {
        "aria-label": closeIcon === 'collapse' ? t('collapse') : t('close'),
        className: `${baseClass}__close-icon`,
        title: closeIcon === 'collapse' ? t('collapse') : t('close')
    }, closeIcon === 'x' && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__line ${baseClass}__x-left`
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__line ${baseClass}__x-right`
    })), closeIcon === 'collapse' && /*#__PURE__*/ _react.default.createElement(_.Chevron, {
        className: `${baseClass}__collapse-chevron`,
        direction: "left"
    })))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0hhbWJ1cmdlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgeyBDaGV2cm9uIH0gZnJvbSAnLi4vLi4nXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2hhbWJ1cmdlcidcblxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlcjogUmVhY3QuRkM8e1xuICBjbG9zZUljb24/OiAnY29sbGFwc2UnIHwgJ3gnXG4gIGlzQWN0aXZlPzogYm9vbGVhblxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG4gIGNvbnN0IHsgY2xvc2VJY29uID0gJ3gnLCBpc0FjdGl2ZSA9IGZhbHNlIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcHBlcmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faWNvbmB9PlxuICAgICAgICAgIHshaXNBY3RpdmUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmVzYH0gdGl0bGU9e3QoJ29wZW4nKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saW5lICR7YmFzZUNsYXNzfV9fdG9wYH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmUgJHtiYXNlQ2xhc3N9X19taWRkbGVgfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGluZSAke2Jhc2VDbGFzc31fX2JvdHRvbWB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc0FjdGl2ZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2Nsb3NlSWNvbiA9PT0gJ2NvbGxhcHNlJyA/IHQoJ2NvbGxhcHNlJykgOiB0KCdjbG9zZScpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Nsb3NlLWljb25gfVxuICAgICAgICAgICAgICB0aXRsZT17Y2xvc2VJY29uID09PSAnY29sbGFwc2UnID8gdCgnY29sbGFwc2UnKSA6IHQoJ2Nsb3NlJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjbG9zZUljb24gPT09ICd4JyAmJiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmUgJHtiYXNlQ2xhc3N9X194LWxlZnRgfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmUgJHtiYXNlQ2xhc3N9X194LXJpZ2h0YH0gLz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7Y2xvc2VJY29uID09PSAnY29sbGFwc2UnICYmIChcbiAgICAgICAgICAgICAgICA8Q2hldnJvbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbGxhcHNlLWNoZXZyb25gfSBkaXJlY3Rpb249XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIYW1idXJnZXIiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNsb3NlSWNvbiIsImlzQWN0aXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJhcmlhLWxhYmVsIiwiUmVhY3QiLCJGcmFnbWVudCIsIkNoZXZyb24iLCJkaXJlY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBUWFBOzs7ZUFBQUE7Ozs4REFSSzs4QkFDYTtrQkFFUDtRQUNqQjs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELFlBR1IsQ0FBQ0U7SUFDSixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBQzdCLE1BQU0sRUFBRUMsWUFBWSxHQUFHLEVBQUVDLFdBQVcsS0FBSyxFQUFFLEdBQUdKO0lBRTlDLHFCQUNFLDZCQUFDSztRQUFJQyxXQUFXUDtxQkFDZCw2QkFBQ007UUFBSUMsV0FBVyxDQUFDLEVBQUVQLFVBQVUsU0FBUyxDQUFDO3FCQUNyQyw2QkFBQ007UUFBSUMsV0FBVyxDQUFDLEVBQUVQLFVBQVUsTUFBTSxDQUFDO09BQ2pDLENBQUNLLDBCQUNBLDZCQUFDQztRQUFJQyxXQUFXLENBQUMsRUFBRVAsVUFBVSxPQUFPLENBQUM7UUFBRVEsT0FBT04sRUFBRTtxQkFDOUMsNkJBQUNJO1FBQUlDLFdBQVcsQ0FBQyxFQUFFUCxVQUFVLE9BQU8sRUFBRUEsVUFBVSxLQUFLLENBQUM7c0JBQ3RELDZCQUFDTTtRQUFJQyxXQUFXLENBQUMsRUFBRVAsVUFBVSxPQUFPLEVBQUVBLFVBQVUsUUFBUSxDQUFDO3NCQUN6RCw2QkFBQ007UUFBSUMsV0FBVyxDQUFDLEVBQUVQLFVBQVUsT0FBTyxFQUFFQSxVQUFVLFFBQVEsQ0FBQztTQUc1REssMEJBQ0MsNkJBQUNDO1FBQ0NHLGNBQVlMLGNBQWMsYUFBYUYsRUFBRSxjQUFjQSxFQUFFO1FBQ3pESyxXQUFXLENBQUMsRUFBRVAsVUFBVSxZQUFZLENBQUM7UUFDckNRLE9BQU9KLGNBQWMsYUFBYUYsRUFBRSxjQUFjQSxFQUFFO09BRW5ERSxjQUFjLHFCQUNiLDZCQUFDTSxjQUFLLENBQUNDLFFBQVEsc0JBQ2IsNkJBQUNMO1FBQUlDLFdBQVcsQ0FBQyxFQUFFUCxVQUFVLE9BQU8sRUFBRUEsVUFBVSxRQUFRLENBQUM7c0JBQ3pELDZCQUFDTTtRQUFJQyxXQUFXLENBQUMsRUFBRVAsVUFBVSxPQUFPLEVBQUVBLFVBQVUsU0FBUyxDQUFDO1NBRzdESSxjQUFjLDRCQUNiLDZCQUFDUSxTQUFPO1FBQUNMLFdBQVcsQ0FBQyxFQUFFUCxVQUFVLGtCQUFrQixDQUFDO1FBQUVhLFdBQVU7O0FBUWhGIn0=