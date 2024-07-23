"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WatchFormErrors", {
    enumerable: true,
    get: function() {
        return WatchFormErrors;
    }
});
const _useThrottledEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThrottledEffect"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const WatchFormErrors = ({ buildRowErrors })=>{
    (0, _useThrottledEffect.default)(()=>{
        buildRowErrors();
    }, 250, [
        buildRowErrors
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vV2F0Y2hGb3JtRXJyb3JzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdXNlVGhyb3R0bGVkRWZmZWN0IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRocm90dGxlZEVmZmVjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgYnVpbGRSb3dFcnJvcnM6ICgpID0+IHZvaWRcbn1cbmV4cG9ydCBjb25zdCBXYXRjaEZvcm1FcnJvcnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGJ1aWxkUm93RXJyb3JzIH0pID0+IHtcbiAgdXNlVGhyb3R0bGVkRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGJ1aWxkUm93RXJyb3JzKClcbiAgICB9LFxuICAgIDI1MCxcbiAgICBbYnVpbGRSb3dFcnJvcnNdLFxuICApXG5cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJuYW1lcyI6WyJXYXRjaEZvcm1FcnJvcnMiLCJidWlsZFJvd0Vycm9ycyIsInVzZVRocm90dGxlZEVmZmVjdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFPYUE7OztlQUFBQTs7OzJFQUxrQjs7Ozs7O0FBS3hCLE1BQU1BLGtCQUFtQyxDQUFDLEVBQUVDLGNBQWMsRUFBRTtJQUNqRUMsSUFBQUEsMkJBQWtCLEVBQ2hCO1FBQ0VEO0lBQ0YsR0FDQSxLQUNBO1FBQUNBO0tBQWU7SUFHbEIsT0FBTztBQUNUIn0=