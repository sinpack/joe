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
const _Config = require("../../utilities/Config");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const css = `
  .graphic-icon {
    width: 18px;
    height: 18px;
  }

  .graphic-icon path {
    fill: var(--theme-elevation-1000);
  }

  @media (max-width: 768px) {
    .graphic-icon {
      width: 16px;
      height: 16px;
    }
  }
`;
const PayloadIcon = ()=>{
    const { t } = (0, _reacti18next.useTranslation)();
    return /*#__PURE__*/ _react.default.createElement("span", {
        title: t('general:dashboard')
    }, /*#__PURE__*/ _react.default.createElement("svg", {
        className: "graphic-icon",
        height: "100%",
        viewBox: "0 0 25 25",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.default.createElement("style", null, css), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M11.5293 0L23 6.90096V19.9978L14.3608 25V11.9032L2.88452 5.00777L11.5293 0Z"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M10.6559 24.2727V14.0518L2 19.0651L10.6559 24.2727Z"
    })));
};
const Icon = ()=>{
    const { admin: { components: { graphics: { Icon: CustomIcon } = {
        Icon: undefined
    } } = {} } = {} } = (0, _Config.useConfig)();
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomIcon,
        DefaultComponent: PayloadIcon
    });
};
const _default = Icon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0ljb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCdcblxuY29uc3QgY3NzID0gYFxuICAuZ3JhcGhpYy1pY29uIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gIH1cblxuICAuZ3JhcGhpYy1pY29uIHBhdGgge1xuICAgIGZpbGw6IHZhcigtLXRoZW1lLWVsZXZhdGlvbi0xMDAwKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5ncmFwaGljLWljb24ge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFBheWxvYWRJY29uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiB0aXRsZT17dCgnZ2VuZXJhbDpkYXNoYm9hcmQnKX0+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT1cImdyYXBoaWMtaWNvblwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDI1XCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICA+XG4gICAgICAgIDxzdHlsZT57Y3NzfTwvc3R5bGU+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTEuNTI5MyAwTDIzIDYuOTAwOTZWMTkuOTk3OEwxNC4zNjA4IDI1VjExLjkwMzJMMi44ODQ1MiA1LjAwNzc3TDExLjUyOTMgMFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEwLjY1NTkgMjQuMjcyN1YxNC4wNTE4TDIgMTkuMDY1MUwxMC42NTU5IDI0LjI3MjdaXCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG5jb25zdCBJY29uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGdyYXBoaWNzOiB7IEljb246IEN1c3RvbUljb24gfSA9IHtcbiAgICAgICAgICBJY29uOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9ID0ge30sXG4gICAgfSA9IHt9LFxuICB9ID0gdXNlQ29uZmlnKClcblxuICByZXR1cm4gPFJlbmRlckN1c3RvbUNvbXBvbmVudCBDdXN0b21Db21wb25lbnQ9e0N1c3RvbUljb259IERlZmF1bHRDb21wb25lbnQ9e1BheWxvYWRJY29ufSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG4iXSwibmFtZXMiOlsiY3NzIiwiUGF5bG9hZEljb24iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJzcGFuIiwidGl0bGUiLCJzdmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJ4bWxucyIsInN0eWxlIiwicGF0aCIsImQiLCJJY29uIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiZ3JhcGhpY3MiLCJDdXN0b21JY29uIiwidW5kZWZpbmVkIiwidXNlQ29uZmlnIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTBEQTs7O2VBQUE7Ozs4REExRGtCOzhCQUNhO3dCQUVMOzhFQUNROzs7Ozs7QUFFbEMsTUFBTUEsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JiLENBQUM7QUFFRCxNQUFNQyxjQUF3QjtJQUM1QixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUU1QixxQkFDRSw2QkFBQ0M7UUFBS0MsT0FBT0gsRUFBRTtxQkFDYiw2QkFBQ0k7UUFDQ0MsV0FBVTtRQUNWQyxRQUFPO1FBQ1BDLFNBQVE7UUFDUkMsT0FBTTtRQUNOQyxPQUFNO3FCQUVOLDZCQUFDQyxlQUFPWixvQkFDUiw2QkFBQ2E7UUFBS0MsR0FBRTtzQkFDUiw2QkFBQ0Q7UUFBS0MsR0FBRTs7QUFJaEI7QUFFQSxNQUFNQyxPQUFpQjtJQUNyQixNQUFNLEVBQ0pDLE9BQU8sRUFDTEMsWUFBWSxFQUNWQyxVQUFVLEVBQUVILE1BQU1JLFVBQVUsRUFBRSxHQUFHO1FBQy9CSixNQUFNSztJQUNSLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxDQUFDLEVBQ1AsR0FBR0MsSUFBQUEsaUJBQVM7SUFFYixxQkFBTyw2QkFBQ0MsOEJBQXFCO1FBQUNDLGlCQUFpQko7UUFBWUssa0JBQWtCdkI7O0FBQy9FO01BRUEsV0FBZWMifQ==