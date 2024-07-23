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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const RenderCustomComponent = (props)=>{
    const { CustomComponent, DefaultComponent, componentProps } = props;
    if (CustomComponent) {
        return /*#__PURE__*/ _react.default.createElement(CustomComponent, componentProps);
    }
    return /*#__PURE__*/ _react.default.createElement(DefaultComponent, componentProps);
};
const _default = RenderCustomComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmNvbnN0IFJlbmRlckN1c3RvbUNvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgQ3VzdG9tQ29tcG9uZW50LCBEZWZhdWx0Q29tcG9uZW50LCBjb21wb25lbnRQcm9wcyB9ID0gcHJvcHNcblxuICBpZiAoQ3VzdG9tQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDxDdXN0b21Db21wb25lbnQgey4uLmNvbXBvbmVudFByb3BzfSAvPlxuICB9XG5cbiAgcmV0dXJuIDxEZWZhdWx0Q29tcG9uZW50IHsuLi5jb21wb25lbnRQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4iXSwibmFtZXMiOlsiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwicHJvcHMiLCJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0Q29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBY0E7OztlQUFBOzs7OERBZGtCOzs7Ozs7QUFJbEIsTUFBTUEsd0JBQXlDLENBQUNDO0lBQzlDLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsY0FBYyxFQUFFLEdBQUdIO0lBRTlELElBQUlDLGlCQUFpQjtRQUNuQixxQkFBTyw2QkFBQ0EsaUJBQW9CRTtJQUM5QjtJQUVBLHFCQUFPLDZCQUFDRCxrQkFBcUJDO0FBQy9CO01BRUEsV0FBZUoifQ==