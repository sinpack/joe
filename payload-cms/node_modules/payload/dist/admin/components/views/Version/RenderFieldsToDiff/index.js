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
const _types = require("../../../../../fields/config/types");
const _Nested = /*#__PURE__*/ _interop_require_default(require("./fields/Nested"));
const _diffMethods = require("./fields/diffMethods");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'render-field-diffs';
const RenderFieldsToDiff = ({ comparison, fieldComponents, fieldPermissions, fields, locales, version })=>/*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, fields.map((field, i)=>{
        const Component = fieldComponents[field.type];
        const isRichText = field.type === 'richText';
        const diffMethod = _diffMethods.diffMethods[field.type] || 'CHARS';
        if (Component) {
            if ((0, _types.fieldAffectsData)(field)) {
                const valueIsObject = field.type === 'code' || field.type === 'json';
                const versionValue = valueIsObject ? JSON.stringify(version?.[field.name]) : version?.[field.name];
                const comparisonValue = valueIsObject ? JSON.stringify(comparison?.[field.name]) : comparison?.[field.name];
                const hasPermission = fieldPermissions?.[field.name]?.read?.permission;
                const subFieldPermissions = fieldPermissions?.[field.name]?.fields;
                if (hasPermission === false) return null;
                if (field.localized) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: `${baseClass}__field`,
                        key: i
                    }, locales.map((locale, index)=>{
                        const versionLocaleValue = versionValue?.[locale];
                        const comparisonLocaleValue = comparisonValue?.[locale];
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            className: `${baseClass}__locale`,
                            key: [
                                locale,
                                index
                            ].join('-')
                        }, /*#__PURE__*/ _react.default.createElement("div", {
                            className: `${baseClass}__locale-value`
                        }, /*#__PURE__*/ _react.default.createElement(Component, {
                            comparison: comparisonLocaleValue,
                            diffMethod: diffMethod,
                            field: field,
                            fieldComponents: fieldComponents,
                            isRichText: isRichText,
                            locale: locale,
                            locales: locales,
                            permissions: subFieldPermissions,
                            version: versionLocaleValue
                        })));
                    }));
                }
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: `${baseClass}__field`,
                    key: i
                }, /*#__PURE__*/ _react.default.createElement(Component, {
                    comparison: comparisonValue,
                    diffMethod: diffMethod,
                    field: field,
                    fieldComponents: fieldComponents,
                    isRichText: isRichText,
                    locales: locales,
                    permissions: subFieldPermissions,
                    version: versionValue
                }));
            }
            if (field.type === 'tabs') {
                const Tabs = fieldComponents.tabs;
                return /*#__PURE__*/ _react.default.createElement(Tabs, {
                    comparison: comparison,
                    field: field,
                    fieldComponents: fieldComponents,
                    key: i,
                    locales: locales,
                    version: version
                });
            }
            // At this point, we are dealing with a `row` or similar
            if ((0, _types.fieldHasSubFields)(field)) {
                return /*#__PURE__*/ _react.default.createElement(_Nested.default, {
                    comparison: comparison,
                    disableGutter: true,
                    field: field,
                    fieldComponents: fieldComponents,
                    key: i,
                    locales: locales,
                    permissions: fieldPermissions,
                    version: version
                });
            }
        }
        return null;
    }));
const _default = RenderFieldsToDiff;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERpZmZNZXRob2QgfSBmcm9tICdyZWFjdC1kaWZmLXZpZXdlci1jb250aW51ZWQnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEsIGZpZWxkSGFzU3ViRmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCBOZXN0ZWQgZnJvbSAnLi9maWVsZHMvTmVzdGVkJ1xuaW1wb3J0IHsgZGlmZk1ldGhvZHMgfSBmcm9tICcuL2ZpZWxkcy9kaWZmTWV0aG9kcydcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmVuZGVyLWZpZWxkLWRpZmZzJ1xuXG5jb25zdCBSZW5kZXJGaWVsZHNUb0RpZmY6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGNvbXBhcmlzb24sXG4gIGZpZWxkQ29tcG9uZW50cyxcbiAgZmllbGRQZXJtaXNzaW9ucyxcbiAgZmllbGRzLFxuICBsb2NhbGVzLFxuICB2ZXJzaW9uLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IENvbXBvbmVudCA9IGZpZWxkQ29tcG9uZW50c1tmaWVsZC50eXBlXVxuXG4gICAgICBjb25zdCBpc1JpY2hUZXh0ID0gZmllbGQudHlwZSA9PT0gJ3JpY2hUZXh0J1xuICAgICAgY29uc3QgZGlmZk1ldGhvZDogRGlmZk1ldGhvZCA9IGRpZmZNZXRob2RzW2ZpZWxkLnR5cGVdIHx8ICdDSEFSUydcblxuICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZUlzT2JqZWN0ID0gZmllbGQudHlwZSA9PT0gJ2NvZGUnIHx8IGZpZWxkLnR5cGUgPT09ICdqc29uJ1xuICAgICAgICAgIGNvbnN0IHZlcnNpb25WYWx1ZSA9IHZhbHVlSXNPYmplY3RcbiAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkodmVyc2lvbj8uW2ZpZWxkLm5hbWVdKVxuICAgICAgICAgICAgOiB2ZXJzaW9uPy5bZmllbGQubmFtZV1cbiAgICAgICAgICBjb25zdCBjb21wYXJpc29uVmFsdWUgPSB2YWx1ZUlzT2JqZWN0XG4gICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KGNvbXBhcmlzb24/LltmaWVsZC5uYW1lXSlcbiAgICAgICAgICAgIDogY29tcGFyaXNvbj8uW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGZpZWxkUGVybWlzc2lvbnM/LltmaWVsZC5uYW1lXT8ucmVhZD8ucGVybWlzc2lvblxuICAgICAgICAgIGNvbnN0IHN1YkZpZWxkUGVybWlzc2lvbnMgPSBmaWVsZFBlcm1pc3Npb25zPy5bZmllbGQubmFtZV0/LmZpZWxkc1xuXG4gICAgICAgICAgaWYgKGhhc1Blcm1pc3Npb24gPT09IGZhbHNlKSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgaWYgKGZpZWxkLmxvY2FsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpZWxkYH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7bG9jYWxlcy5tYXAoKGxvY2FsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25Mb2NhbGVWYWx1ZSA9IHZlcnNpb25WYWx1ZT8uW2xvY2FsZV1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmlzb25Mb2NhbGVWYWx1ZSA9IGNvbXBhcmlzb25WYWx1ZT8uW2xvY2FsZV1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGVgfSBrZXk9e1tsb2NhbGUsIGluZGV4XS5qb2luKCctJyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGUtdmFsdWVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvbkxvY2FsZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmTWV0aG9kPXtkaWZmTWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29tcG9uZW50cz17ZmllbGRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JpY2hUZXh0PXtpc1JpY2hUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlcz17bG9jYWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e3N1YkZpZWxkUGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb249e3ZlcnNpb25Mb2NhbGVWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpZWxkYH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNvbXBhcmlzb249e2NvbXBhcmlzb25WYWx1ZX1cbiAgICAgICAgICAgICAgICBkaWZmTWV0aG9kPXtkaWZmTWV0aG9kfVxuICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgICBmaWVsZENvbXBvbmVudHM9e2ZpZWxkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBpc1JpY2hUZXh0PXtpc1JpY2hUZXh0fVxuICAgICAgICAgICAgICAgIGxvY2FsZXM9e2xvY2FsZXN9XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e3N1YkZpZWxkUGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvblZhbHVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgICAgIGNvbnN0IFRhYnMgPSBmaWVsZENvbXBvbmVudHMudGFic1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgIGNvbXBhcmlzb249e2NvbXBhcmlzb259XG4gICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgZmllbGRDb21wb25lbnRzPXtmaWVsZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgbG9jYWxlcz17bG9jYWxlc31cbiAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgd2UgYXJlIGRlYWxpbmcgd2l0aCBhIGByb3dgIG9yIHNpbWlsYXJcbiAgICAgICAgaWYgKGZpZWxkSGFzU3ViRmllbGRzKGZpZWxkKSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmVzdGVkXG4gICAgICAgICAgICAgIGNvbXBhcmlzb249e2NvbXBhcmlzb259XG4gICAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJcbiAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICBmaWVsZENvbXBvbmVudHM9e2ZpZWxkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzfVxuICAgICAgICAgICAgICBwZXJtaXNzaW9ucz17ZmllbGRQZXJtaXNzaW9uc31cbiAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJGaWVsZHNUb0RpZmZcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJSZW5kZXJGaWVsZHNUb0RpZmYiLCJjb21wYXJpc29uIiwiZmllbGRDb21wb25lbnRzIiwiZmllbGRQZXJtaXNzaW9ucyIsImZpZWxkcyIsImxvY2FsZXMiLCJ2ZXJzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZmllbGQiLCJpIiwiQ29tcG9uZW50IiwidHlwZSIsImlzUmljaFRleHQiLCJkaWZmTWV0aG9kIiwiZGlmZk1ldGhvZHMiLCJmaWVsZEFmZmVjdHNEYXRhIiwidmFsdWVJc09iamVjdCIsInZlcnNpb25WYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiY29tcGFyaXNvblZhbHVlIiwiaGFzUGVybWlzc2lvbiIsInJlYWQiLCJwZXJtaXNzaW9uIiwic3ViRmllbGRQZXJtaXNzaW9ucyIsImxvY2FsaXplZCIsImtleSIsImxvY2FsZSIsImluZGV4IiwidmVyc2lvbkxvY2FsZVZhbHVlIiwiY29tcGFyaXNvbkxvY2FsZVZhbHVlIiwiam9pbiIsInBlcm1pc3Npb25zIiwiVGFicyIsInRhYnMiLCJmaWVsZEhhc1N1YkZpZWxkcyIsIk5lc3RlZCIsImRpc2FibGVHdXR0ZXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBMkhBOzs7ZUFBQTs7OzhEQXpIa0I7dUJBSWtDOytEQUNqQzs2QkFDUztRQUNyQjs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxxQkFBc0MsQ0FBQyxFQUMzQ0MsVUFBVSxFQUNWQyxlQUFlLEVBQ2ZDLGdCQUFnQixFQUNoQkMsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLE9BQU8sRUFDUixpQkFDQyw2QkFBQ0M7UUFBSUMsV0FBV1Q7T0FDYkssT0FBT0ssR0FBRyxDQUFDLENBQUNDLE9BQU9DO1FBQ2xCLE1BQU1DLFlBQVlWLGVBQWUsQ0FBQ1EsTUFBTUcsSUFBSSxDQUFDO1FBRTdDLE1BQU1DLGFBQWFKLE1BQU1HLElBQUksS0FBSztRQUNsQyxNQUFNRSxhQUF5QkMsd0JBQVcsQ0FBQ04sTUFBTUcsSUFBSSxDQUFDLElBQUk7UUFFMUQsSUFBSUQsV0FBVztZQUNiLElBQUlLLElBQUFBLHVCQUFnQixFQUFDUCxRQUFRO2dCQUMzQixNQUFNUSxnQkFBZ0JSLE1BQU1HLElBQUksS0FBSyxVQUFVSCxNQUFNRyxJQUFJLEtBQUs7Z0JBQzlELE1BQU1NLGVBQWVELGdCQUNqQkUsS0FBS0MsU0FBUyxDQUFDZixTQUFTLENBQUNJLE1BQU1ZLElBQUksQ0FBQyxJQUNwQ2hCLFNBQVMsQ0FBQ0ksTUFBTVksSUFBSSxDQUFDO2dCQUN6QixNQUFNQyxrQkFBa0JMLGdCQUNwQkUsS0FBS0MsU0FBUyxDQUFDcEIsWUFBWSxDQUFDUyxNQUFNWSxJQUFJLENBQUMsSUFDdkNyQixZQUFZLENBQUNTLE1BQU1ZLElBQUksQ0FBQztnQkFDNUIsTUFBTUUsZ0JBQWdCckIsa0JBQWtCLENBQUNPLE1BQU1ZLElBQUksQ0FBQyxFQUFFRyxNQUFNQztnQkFDNUQsTUFBTUMsc0JBQXNCeEIsa0JBQWtCLENBQUNPLE1BQU1ZLElBQUksQ0FBQyxFQUFFbEI7Z0JBRTVELElBQUlvQixrQkFBa0IsT0FBTyxPQUFPO2dCQUVwQyxJQUFJZCxNQUFNa0IsU0FBUyxFQUFFO29CQUNuQixxQkFDRSw2QkFBQ3JCO3dCQUFJQyxXQUFXLENBQUMsRUFBRVQsVUFBVSxPQUFPLENBQUM7d0JBQUU4QixLQUFLbEI7dUJBQ3pDTixRQUFRSSxHQUFHLENBQUMsQ0FBQ3FCLFFBQVFDO3dCQUNwQixNQUFNQyxxQkFBcUJiLGNBQWMsQ0FBQ1csT0FBTzt3QkFDakQsTUFBTUcsd0JBQXdCVixpQkFBaUIsQ0FBQ08sT0FBTzt3QkFDdkQscUJBQ0UsNkJBQUN2Qjs0QkFBSUMsV0FBVyxDQUFDLEVBQUVULFVBQVUsUUFBUSxDQUFDOzRCQUFFOEIsS0FBSztnQ0FBQ0M7Z0NBQVFDOzZCQUFNLENBQUNHLElBQUksQ0FBQzt5Q0FDaEUsNkJBQUMzQjs0QkFBSUMsV0FBVyxDQUFDLEVBQUVULFVBQVUsY0FBYyxDQUFDO3lDQUMxQyw2QkFBQ2E7NEJBQ0NYLFlBQVlnQzs0QkFDWmxCLFlBQVlBOzRCQUNaTCxPQUFPQTs0QkFDUFIsaUJBQWlCQTs0QkFDakJZLFlBQVlBOzRCQUNaZ0IsUUFBUUE7NEJBQ1J6QixTQUFTQTs0QkFDVDhCLGFBQWFSOzRCQUNickIsU0FBUzBCOztvQkFLbkI7Z0JBR047Z0JBRUEscUJBQ0UsNkJBQUN6QjtvQkFBSUMsV0FBVyxDQUFDLEVBQUVULFVBQVUsT0FBTyxDQUFDO29CQUFFOEIsS0FBS2xCO2lDQUMxQyw2QkFBQ0M7b0JBQ0NYLFlBQVlzQjtvQkFDWlIsWUFBWUE7b0JBQ1pMLE9BQU9BO29CQUNQUixpQkFBaUJBO29CQUNqQlksWUFBWUE7b0JBQ1pULFNBQVNBO29CQUNUOEIsYUFBYVI7b0JBQ2JyQixTQUFTYTs7WUFJakI7WUFFQSxJQUFJVCxNQUFNRyxJQUFJLEtBQUssUUFBUTtnQkFDekIsTUFBTXVCLE9BQU9sQyxnQkFBZ0JtQyxJQUFJO2dCQUVqQyxxQkFDRSw2QkFBQ0Q7b0JBQ0NuQyxZQUFZQTtvQkFDWlMsT0FBT0E7b0JBQ1BSLGlCQUFpQkE7b0JBQ2pCMkIsS0FBS2xCO29CQUNMTixTQUFTQTtvQkFDVEMsU0FBU0E7O1lBR2Y7WUFFQSx3REFBd0Q7WUFDeEQsSUFBSWdDLElBQUFBLHdCQUFpQixFQUFDNUIsUUFBUTtnQkFDNUIscUJBQ0UsNkJBQUM2QixlQUFNO29CQUNMdEMsWUFBWUE7b0JBQ1p1QyxlQUFBQTtvQkFDQTlCLE9BQU9BO29CQUNQUixpQkFBaUJBO29CQUNqQjJCLEtBQUtsQjtvQkFDTE4sU0FBU0E7b0JBQ1Q4QixhQUFhaEM7b0JBQ2JHLFNBQVNBOztZQUdmO1FBQ0Y7UUFFQSxPQUFPO0lBQ1Q7TUFJSixXQUFlTiJ9