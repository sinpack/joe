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
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Unauthorized = ()=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    const config = (0, _Config.useConfig)();
    const { user } = (0, _Auth.useAuth)();
    const { admin: { logoutRoute }, routes: { admin } } = config;
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: "unauthorized"
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: t('error:unauthorized'),
        keywords: t('error:unauthorized'),
        title: t('error:unauthorized')
    }), /*#__PURE__*/ _react.default.createElement("h2", null, user ? t('general:unauthorized') : t('error:unauthorized')), /*#__PURE__*/ _react.default.createElement("p", null, t('error:notAllowedToAccessPage')), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        el: "link",
        to: `${admin}${user ? '' : logoutRoute}`
    }, user ? t('general:backToDashboard') : t('authentication:logOut')));
};
const _default = Unauthorized;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1VuYXV0aG9yaXplZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbidcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnXG5cbmNvbnN0IFVuYXV0aG9yaXplZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKVxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB7XG4gICAgYWRtaW46IHsgbG9nb3V0Um91dGUgfSxcbiAgICByb3V0ZXM6IHsgYWRtaW4gfSxcbiAgfSA9IGNvbmZpZ1xuICByZXR1cm4gKFxuICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPVwidW5hdXRob3JpemVkXCI+XG4gICAgICA8TWV0YVxuICAgICAgICBkZXNjcmlwdGlvbj17dCgnZXJyb3I6dW5hdXRob3JpemVkJyl9XG4gICAgICAgIGtleXdvcmRzPXt0KCdlcnJvcjp1bmF1dGhvcml6ZWQnKX1cbiAgICAgICAgdGl0bGU9e3QoJ2Vycm9yOnVuYXV0aG9yaXplZCcpfVxuICAgICAgLz5cbiAgICAgIDxoMj57dXNlciA/IHQoJ2dlbmVyYWw6dW5hdXRob3JpemVkJykgOiB0KCdlcnJvcjp1bmF1dGhvcml6ZWQnKX08L2gyPlxuICAgICAgPHA+e3QoJ2Vycm9yOm5vdEFsbG93ZWRUb0FjY2Vzc1BhZ2UnKX08L3A+XG4gICAgICA8YnIgLz5cbiAgICAgIDxCdXR0b24gZWw9XCJsaW5rXCIgdG89e2Ake2FkbWlufSR7dXNlciA/ICcnIDogbG9nb3V0Um91dGV9YH0+XG4gICAgICAgIHt1c2VyID8gdCgnZ2VuZXJhbDpiYWNrVG9EYXNoYm9hcmQnKSA6IHQoJ2F1dGhlbnRpY2F0aW9uOmxvZ091dCcpfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5hdXRob3JpemVkXG4iXSwibmFtZXMiOlsiVW5hdXRob3JpemVkIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiY29uZmlnIiwidXNlQ29uZmlnIiwidXNlciIsInVzZUF1dGgiLCJhZG1pbiIsImxvZ291dFJvdXRlIiwicm91dGVzIiwiTWluaW1hbFRlbXBsYXRlIiwiY2xhc3NOYW1lIiwiTWV0YSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ0aXRsZSIsImgyIiwicCIsImJyIiwiQnV0dG9uIiwiZWwiLCJ0byJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFrQ0E7OztlQUFBOzs7OERBbENrQjs4QkFDYTsrREFFWjtnRUFDUztzQkFDSjt3QkFDRTs2REFDVDs7Ozs7O0FBRWpCLE1BQU1BLGVBQXlCO0lBQzdCLE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFDN0IsTUFBTUMsU0FBU0MsSUFBQUEsaUJBQVM7SUFDeEIsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsYUFBTztJQUN4QixNQUFNLEVBQ0pDLE9BQU8sRUFBRUMsV0FBVyxFQUFFLEVBQ3RCQyxRQUFRLEVBQUVGLEtBQUssRUFBRSxFQUNsQixHQUFHSjtJQUNKLHFCQUNFLDZCQUFDTyxnQkFBZTtRQUFDQyxXQUFVO3FCQUN6Qiw2QkFBQ0MsYUFBSTtRQUNIQyxhQUFhWixFQUFFO1FBQ2ZhLFVBQVViLEVBQUU7UUFDWmMsT0FBT2QsRUFBRTtzQkFFWCw2QkFBQ2UsWUFBSVgsT0FBT0osRUFBRSwwQkFBMEJBLEVBQUUsc0NBQzFDLDZCQUFDZ0IsV0FBR2hCLEVBQUUsZ0RBQ04sNkJBQUNpQiwyQkFDRCw2QkFBQ0MsZUFBTTtRQUFDQyxJQUFHO1FBQU9DLElBQUksQ0FBQyxFQUFFZCxNQUFNLEVBQUVGLE9BQU8sS0FBS0csWUFBWSxDQUFDO09BQ3ZESCxPQUFPSixFQUFFLDZCQUE2QkEsRUFBRTtBQUlqRDtNQUVBLFdBQWVEIn0=