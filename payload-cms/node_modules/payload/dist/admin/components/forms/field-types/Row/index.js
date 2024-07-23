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
const _createNestedFieldPath = require("../../Form/createNestedFieldPath");
const _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../RenderFields"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _shared = require("../shared");
require("./index.scss");
const _provider = require("./provider");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'row';
const Row = (props)=>{
    const { admin: { className, readOnly }, fieldTypes, fields, forceRender = false, indexPath, path, permissions } = props;
    return /*#__PURE__*/ _react.default.createElement(_provider.RowProvider, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
            className
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        className: `${baseClass}__fields`,
        fieldSchema: fields.map((field)=>({
                ...field,
                path: (0, _createNestedFieldPath.createNestedFieldPath)(path, field)
            })),
        fieldTypes: fieldTypes,
        forceRender: forceRender,
        indexPath: indexPath,
        margins: false,
        permissions: permissions,
        readOnly: readOnly
    })));
};
const _default = (0, _withCondition.default)(Row);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1Jvdy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgY3JlYXRlTmVzdGVkRmllbGRQYXRoIH0gZnJvbSAnLi4vLi4vRm9ybS9jcmVhdGVOZXN0ZWRGaWVsZFBhdGgnXG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4uLy4uL1JlbmRlckZpZWxkcydcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nXG5pbXBvcnQgeyBmaWVsZEJhc2VDbGFzcyB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0IHsgUm93UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVyJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncm93J1xuXG5jb25zdCBSb3c6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYWRtaW46IHsgY2xhc3NOYW1lLCByZWFkT25seSB9LFxuICAgIGZpZWxkVHlwZXMsXG4gICAgZmllbGRzLFxuICAgIGZvcmNlUmVuZGVyID0gZmFsc2UsXG4gICAgaW5kZXhQYXRoLFxuICAgIHBhdGgsXG4gICAgcGVybWlzc2lvbnMsXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFJvd1Byb3ZpZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1tmaWVsZEJhc2VDbGFzcywgYmFzZUNsYXNzLCBjbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PlxuICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19maWVsZHNgfVxuICAgICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZHMubWFwKChmaWVsZCkgPT4gKHtcbiAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgcGF0aDogY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGgsIGZpZWxkKSxcbiAgICAgICAgICB9KSl9XG4gICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICBmb3JjZVJlbmRlcj17Zm9yY2VSZW5kZXJ9XG4gICAgICAgICAgaW5kZXhQYXRoPXtpbmRleFBhdGh9XG4gICAgICAgICAgbWFyZ2lucz17ZmFsc2V9XG4gICAgICAgICAgcGVybWlzc2lvbnM9e3Blcm1pc3Npb25zfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm93UHJvdmlkZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oUm93KVxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlJvdyIsInByb3BzIiwiYWRtaW4iLCJjbGFzc05hbWUiLCJyZWFkT25seSIsImZpZWxkVHlwZXMiLCJmaWVsZHMiLCJmb3JjZVJlbmRlciIsImluZGV4UGF0aCIsInBhdGgiLCJwZXJtaXNzaW9ucyIsIlJvd1Byb3ZpZGVyIiwiZGl2IiwiZmllbGRCYXNlQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIlJlbmRlckZpZWxkcyIsImZpZWxkU2NoZW1hIiwibWFwIiwiZmllbGQiLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJtYXJnaW5zIiwid2l0aENvbmRpdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNENBOzs7ZUFBQTs7OzhEQTVDa0I7dUNBSW9CO3FFQUNiO3NFQUNDO3dCQUNLO1FBQ3hCOzBCQUNxQjs7Ozs7O0FBRTVCLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsTUFBdUIsQ0FBQ0M7SUFDNUIsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLEVBQzlCQyxVQUFVLEVBQ1ZDLE1BQU0sRUFDTkMsY0FBYyxLQUFLLEVBQ25CQyxTQUFTLEVBQ1RDLElBQUksRUFDSkMsV0FBVyxFQUNaLEdBQUdUO0lBRUoscUJBQ0UsNkJBQUNVLHFCQUFXLHNCQUNWLDZCQUFDQztRQUFJVCxXQUFXO1lBQUNVLHNCQUFjO1lBQUVkO1lBQVdJO1NBQVUsQ0FBQ1csTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7cUJBQzFFLDZCQUFDQyxxQkFBWTtRQUNYZCxXQUFXLENBQUMsRUFBRUosVUFBVSxRQUFRLENBQUM7UUFDakNtQixhQUFhWixPQUFPYSxHQUFHLENBQUMsQ0FBQ0MsUUFBVyxDQUFBO2dCQUNsQyxHQUFHQSxLQUFLO2dCQUNSWCxNQUFNWSxJQUFBQSw0Q0FBcUIsRUFBQ1osTUFBTVc7WUFDcEMsQ0FBQTtRQUNBZixZQUFZQTtRQUNaRSxhQUFhQTtRQUNiQyxXQUFXQTtRQUNYYyxTQUFTO1FBQ1RaLGFBQWFBO1FBQ2JOLFVBQVVBOztBQUtwQjtNQUNBLFdBQWVtQixJQUFBQSxzQkFBYSxFQUFDdkIifQ==