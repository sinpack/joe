'use client';
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
const _WatchCondition = require("./WatchCondition");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const withCondition = (Field)=>{
    const CheckForCondition = (props)=>{
        const { admin: { condition } = {} } = props;
        if (condition) {
            return /*#__PURE__*/ _react.default.createElement(WithCondition, props);
        }
        return /*#__PURE__*/ _react.default.createElement(Field, props);
    };
    const WithCondition = (props)=>{
        const { name, admin: { condition } = {}, path } = props;
        const [showField, setShowField] = _react.default.useState(false);
        if (showField) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_WatchCondition.WatchCondition, {
                condition: condition,
                name: name,
                path: path,
                setShowField: setShowField
            }), /*#__PURE__*/ _react.default.createElement(Field, props));
        }
        return /*#__PURE__*/ _react.default.createElement(_WatchCondition.WatchCondition, {
            condition: condition,
            name: name,
            path: path,
            setShowField: setShowField
        });
    };
    return CheckForCondition;
};
const _default = withCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL3dpdGhDb25kaXRpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgRmllbGRCYXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgV2F0Y2hDb25kaXRpb24gfSBmcm9tICcuL1dhdGNoQ29uZGl0aW9uJ1xuXG5jb25zdCB3aXRoQ29uZGl0aW9uID0gPFAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oXG4gIEZpZWxkOiBSZWFjdC5Db21wb25lbnRUeXBlPFA+LFxuKTogUmVhY3QuRkM8UD4gPT4ge1xuICBjb25zdCBDaGVja0ZvckNvbmRpdGlvbjogUmVhY3QuRkM8UD4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFkbWluOiB7IGNvbmRpdGlvbiB9ID0ge30gfSA9IHByb3BzIGFzIFBhcnRpYWw8RmllbGRCYXNlPlxuXG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuIDxXaXRoQ29uZGl0aW9uIHsuLi5wcm9wc30gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gPEZpZWxkIHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIGNvbnN0IFdpdGhDb25kaXRpb246IFJlYWN0LkZDPFA+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIGFkbWluOiB7IGNvbmRpdGlvbiB9ID0ge30sXG4gICAgICBwYXRoLFxuICAgIH0gPSBwcm9wcyBhcyBQYXJ0aWFsPEZpZWxkQmFzZT4gJiB7XG4gICAgICBwYXRoPzogc3RyaW5nXG4gICAgfVxuXG4gICAgY29uc3QgW3Nob3dGaWVsZCwgc2V0U2hvd0ZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gICAgaWYgKHNob3dGaWVsZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxXYXRjaENvbmRpdGlvblxuICAgICAgICAgICAgY29uZGl0aW9uPXtjb25kaXRpb259XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgIHNldFNob3dGaWVsZD17c2V0U2hvd0ZpZWxkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZpZWxkIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdhdGNoQ29uZGl0aW9uIGNvbmRpdGlvbj17Y29uZGl0aW9ufSBuYW1lPXtuYW1lfSBwYXRoPXtwYXRofSBzZXRTaG93RmllbGQ9e3NldFNob3dGaWVsZH0gLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gQ2hlY2tGb3JDb25kaXRpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvblxuIl0sIm5hbWVzIjpbIndpdGhDb25kaXRpb24iLCJGaWVsZCIsIkNoZWNrRm9yQ29uZGl0aW9uIiwicHJvcHMiLCJhZG1pbiIsImNvbmRpdGlvbiIsIldpdGhDb25kaXRpb24iLCJuYW1lIiwicGF0aCIsInNob3dGaWVsZCIsInNldFNob3dGaWVsZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJGcmFnbWVudCIsIldhdGNoQ29uZGl0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OzsrQkFzREE7OztlQUFBOzs7OERBcERrQjtnQ0FJYTs7Ozs7O0FBRS9CLE1BQU1BLGdCQUFnQixDQUNwQkM7SUFFQSxNQUFNQyxvQkFBaUMsQ0FBQ0M7UUFDdEMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUdGO1FBRXRDLElBQUlFLFdBQVc7WUFDYixxQkFBTyw2QkFBQ0MsZUFBa0JIO1FBQzVCO1FBRUEscUJBQU8sNkJBQUNGLE9BQVVFO0lBQ3BCO0lBRUEsTUFBTUcsZ0JBQTZCLENBQUNIO1FBQ2xDLE1BQU0sRUFDSkksSUFBSSxFQUNKSCxPQUFPLEVBQUVDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUN6QkcsSUFBSSxFQUNMLEdBQUdMO1FBSUosTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDO1FBRWpELElBQUlILFdBQVc7WUFDYixxQkFDRSw2QkFBQ0UsY0FBSyxDQUFDRSxRQUFRLHNCQUNiLDZCQUFDQyw4QkFBYztnQkFDYlQsV0FBV0E7Z0JBQ1hFLE1BQU1BO2dCQUNOQyxNQUFNQTtnQkFDTkUsY0FBY0E7OEJBRWhCLDZCQUFDVCxPQUFVRTtRQUdqQjtRQUVBLHFCQUNFLDZCQUFDVyw4QkFBYztZQUFDVCxXQUFXQTtZQUFXRSxNQUFNQTtZQUFNQyxNQUFNQTtZQUFNRSxjQUFjQTs7SUFFaEY7SUFFQSxPQUFPUjtBQUNUO01BRUEsV0FBZUYifQ==