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
const _ = /*#__PURE__*/ _interop_require_default(require("../.."));
const _Nested = /*#__PURE__*/ _interop_require_default(require("../Nested"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'tabs-diff';
const Tabs = ({ comparison, field, fieldComponents, locales, permissions, version })=>/*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, field.tabs.map((tab, i)=>{
        if ('name' in tab) {
            return /*#__PURE__*/ _react.default.createElement(_Nested.default, {
                comparison: comparison?.[tab.name],
                field: tab,
                fieldComponents: fieldComponents,
                key: i,
                locales: locales,
                permissions: permissions,
                version: version?.[tab.name]
            });
        }
        return /*#__PURE__*/ _react.default.createElement(_.default, {
            comparison: comparison,
            fieldComponents: fieldComponents,
            fieldPermissions: permissions,
            fields: tab.fields,
            key: i,
            locales: locales,
            version: version
        });
    })));
const _default = Tabs;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9UYWJzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgVGFic0ZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IFJlbmRlckZpZWxkc1RvRGlmZiBmcm9tICcuLi8uLidcbmltcG9ydCBOZXN0ZWQgZnJvbSAnLi4vTmVzdGVkJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndGFicy1kaWZmJ1xuXG5jb25zdCBUYWJzOiBSZWFjdC5GQzxQcm9wcyAmIHsgZmllbGQ6IFRhYnNGaWVsZCB9PiA9ICh7XG4gIGNvbXBhcmlzb24sXG4gIGZpZWxkLFxuICBmaWVsZENvbXBvbmVudHMsXG4gIGxvY2FsZXMsXG4gIHBlcm1pc3Npb25zLFxuICB2ZXJzaW9uLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAge2ZpZWxkLnRhYnMubWFwKCh0YWIsIGkpID0+IHtcbiAgICAgICAgaWYgKCduYW1lJyBpbiB0YWIpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5lc3RlZFxuICAgICAgICAgICAgICBjb21wYXJpc29uPXtjb21wYXJpc29uPy5bdGFiLm5hbWVdfVxuICAgICAgICAgICAgICBmaWVsZD17dGFifVxuICAgICAgICAgICAgICBmaWVsZENvbXBvbmVudHM9e2ZpZWxkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzfVxuICAgICAgICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgIHZlcnNpb249e3ZlcnNpb24/Llt0YWIubmFtZV19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlbmRlckZpZWxkc1RvRGlmZlxuICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvbn1cbiAgICAgICAgICAgIGZpZWxkQ29tcG9uZW50cz17ZmllbGRDb21wb25lbnRzfVxuICAgICAgICAgICAgZmllbGRQZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgICBmaWVsZHM9e3RhYi5maWVsZHN9XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzfVxuICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJUYWJzIiwiY29tcGFyaXNvbiIsImZpZWxkIiwiZmllbGRDb21wb25lbnRzIiwibG9jYWxlcyIsInBlcm1pc3Npb25zIiwidmVyc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsInRhYnMiLCJtYXAiLCJ0YWIiLCJpIiwiTmVzdGVkIiwibmFtZSIsImtleSIsIlJlbmRlckZpZWxkc1RvRGlmZiIsImZpZWxkUGVybWlzc2lvbnMiLCJmaWVsZHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW1EQTs7O2VBQUE7Ozs4REFuRGtCO3lEQUthOytEQUNaOzs7Ozs7QUFFbkIsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxPQUErQyxDQUFDLEVBQ3BEQyxVQUFVLEVBQ1ZDLEtBQUssRUFDTEMsZUFBZSxFQUNmQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsT0FBTyxFQUNSLGlCQUNDLDZCQUFDQztRQUFJQyxXQUFXVDtxQkFDZCw2QkFBQ1E7UUFBSUMsV0FBVyxDQUFDLEVBQUVULFVBQVUsTUFBTSxDQUFDO09BQ2pDRyxNQUFNTyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQztRQUNwQixJQUFJLFVBQVVELEtBQUs7WUFDakIscUJBQ0UsNkJBQUNFLGVBQU07Z0JBQ0xaLFlBQVlBLFlBQVksQ0FBQ1UsSUFBSUcsSUFBSSxDQUFDO2dCQUNsQ1osT0FBT1M7Z0JBQ1BSLGlCQUFpQkE7Z0JBQ2pCWSxLQUFLSDtnQkFDTFIsU0FBU0E7Z0JBQ1RDLGFBQWFBO2dCQUNiQyxTQUFTQSxTQUFTLENBQUNLLElBQUlHLElBQUksQ0FBQzs7UUFHbEM7UUFFQSxxQkFDRSw2QkFBQ0UsU0FBa0I7WUFDakJmLFlBQVlBO1lBQ1pFLGlCQUFpQkE7WUFDakJjLGtCQUFrQlo7WUFDbEJhLFFBQVFQLElBQUlPLE1BQU07WUFDbEJILEtBQUtIO1lBQ0xSLFNBQVNBO1lBQ1RFLFNBQVNBOztJQUdmO01BS04sV0FBZU4ifQ==