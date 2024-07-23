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
const _ = /*#__PURE__*/ _interop_require_default(require("../.."));
const _getTranslation = require("../../../../../../../utilities/getTranslation");
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'nested-diff';
const Nested = ({ comparison, disableGutter = false, field, fieldComponents, locale, locales, permissions, version })=>{
    const { i18n } = (0, _reacti18next.useTranslation)();
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, field.label && /*#__PURE__*/ _react.default.createElement(_Label.default, null, locale && /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__locale-label`
    }, locale), (0, _getTranslation.getTranslation)(field.label, i18n)), /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            `${baseClass}__wrap`,
            !disableGutter && `${baseClass}__wrap--gutter`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_.default, {
        comparison: comparison,
        fieldComponents: fieldComponents,
        fieldPermissions: permissions,
        fields: field.fields,
        locales: locales,
        version: version
    })));
};
const _default = Nested;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9OZXN0ZWQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBGaWVsZFdpdGhTdWJGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgUmVuZGVyRmllbGRzVG9EaWZmIGZyb20gJy4uLy4uJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ25lc3RlZC1kaWZmJ1xuXG5jb25zdCBOZXN0ZWQ6IFJlYWN0LkZDPFByb3BzICYgeyBmaWVsZDogRmllbGRXaXRoU3ViRmllbGRzIH0+ID0gKHtcbiAgY29tcGFyaXNvbixcbiAgZGlzYWJsZUd1dHRlciA9IGZhbHNlLFxuICBmaWVsZCxcbiAgZmllbGRDb21wb25lbnRzLFxuICBsb2NhbGUsXG4gIGxvY2FsZXMsXG4gIHBlcm1pc3Npb25zLFxuICB2ZXJzaW9uLFxufSkgPT4ge1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAge2ZpZWxkLmxhYmVsICYmIChcbiAgICAgICAgPExhYmVsPlxuICAgICAgICAgIHtsb2NhbGUgJiYgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGUtbGFiZWxgfT57bG9jYWxlfTwvc3Bhbj59XG4gICAgICAgICAge2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVsLCBpMThuKX1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICl9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17W2Ake2Jhc2VDbGFzc31fX3dyYXBgLCAhZGlzYWJsZUd1dHRlciAmJiBgJHtiYXNlQ2xhc3N9X193cmFwLS1ndXR0ZXJgXVxuICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAuam9pbignICcpfVxuICAgICAgPlxuICAgICAgICA8UmVuZGVyRmllbGRzVG9EaWZmXG4gICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvbn1cbiAgICAgICAgICBmaWVsZENvbXBvbmVudHM9e2ZpZWxkQ29tcG9uZW50c31cbiAgICAgICAgICBmaWVsZFBlcm1pc3Npb25zPXtwZXJtaXNzaW9uc31cbiAgICAgICAgICBmaWVsZHM9e2ZpZWxkLmZpZWxkc31cbiAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzfVxuICAgICAgICAgIHZlcnNpb249e3ZlcnNpb259XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXN0ZWRcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJOZXN0ZWQiLCJjb21wYXJpc29uIiwiZGlzYWJsZUd1dHRlciIsImZpZWxkIiwiZmllbGRDb21wb25lbnRzIiwibG9jYWxlIiwibG9jYWxlcyIsInBlcm1pc3Npb25zIiwidmVyc2lvbiIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiTGFiZWwiLCJzcGFuIiwiZ2V0VHJhbnNsYXRpb24iLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIlJlbmRlckZpZWxkc1RvRGlmZiIsImZpZWxkUGVybWlzc2lvbnMiLCJmaWVsZHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW1EQTs7O2VBQUE7Ozs4REFuRGtCOzhCQUNhO3lEQUtBO2dDQUNBOzhEQUNiO1FBQ1g7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsU0FBMEQsQ0FBQyxFQUMvREMsVUFBVSxFQUNWQyxnQkFBZ0IsS0FBSyxFQUNyQkMsS0FBSyxFQUNMQyxlQUFlLEVBQ2ZDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUjtJQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLDRCQUFjO0lBRS9CLHFCQUNFLDZCQUFDQztRQUFJQyxXQUFXYjtPQUNiSSxNQUFNVSxLQUFLLGtCQUNWLDZCQUFDQyxjQUFLLFFBQ0hULHdCQUFVLDZCQUFDVTtRQUFLSCxXQUFXLENBQUMsRUFBRWIsVUFBVSxjQUFjLENBQUM7T0FBR00sU0FDMURXLElBQUFBLDhCQUFjLEVBQUNiLE1BQU1VLEtBQUssRUFBRUosc0JBR2pDLDZCQUFDRTtRQUNDQyxXQUFXO1lBQUMsQ0FBQyxFQUFFYixVQUFVLE1BQU0sQ0FBQztZQUFFLENBQUNHLGlCQUFpQixDQUFDLEVBQUVILFVBQVUsY0FBYyxDQUFDO1NBQUMsQ0FDOUVrQixNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztxQkFFUiw2QkFBQ0MsU0FBa0I7UUFDakJuQixZQUFZQTtRQUNaRyxpQkFBaUJBO1FBQ2pCaUIsa0JBQWtCZDtRQUNsQmUsUUFBUW5CLE1BQU1tQixNQUFNO1FBQ3BCaEIsU0FBU0E7UUFDVEUsU0FBU0E7O0FBS25CO01BRUEsV0FBZVIifQ==