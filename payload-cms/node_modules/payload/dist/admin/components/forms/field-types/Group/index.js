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
const _getTranslation = require("../../../../../utilities/getTranslation");
const _provider = require("../../../elements/Collapsible/provider");
const _ErrorPill = require("../../../elements/ErrorPill");
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _context = require("../../Form/context");
const _createNestedFieldPath = require("../../Form/createNestedFieldPath");
const _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../RenderFields"));
const _WatchChildErrors = require("../../WatchChildErrors");
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _provider1 = require("../Row/provider");
const _provider2 = require("../Tabs/provider");
const _shared = require("../shared");
require("./index.scss");
const _provider3 = require("./provider");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'group-field';
const Group = (props)=>{
    const { name, admin: { className, description, hideGutter = false, readOnly, style, width }, fieldTypes, fields, forceRender = false, indexPath, label, path: pathFromProps, permissions } = props;
    const { withinCollapsible } = (0, _provider.useCollapsible)();
    const isWithinGroup = (0, _provider3.useGroup)();
    const isWithinRow = (0, _provider1.useRow)();
    const isWithinTab = (0, _provider2.useTabs)();
    const { i18n } = (0, _reacti18next.useTranslation)();
    const submitted = (0, _context.useFormSubmitted)();
    const [errorCount, setErrorCount] = _react.default.useState(undefined);
    const groupHasErrors = submitted && errorCount > 0;
    const path = pathFromProps || name;
    const isTopLevel = !(withinCollapsible || isWithinGroup || isWithinRow);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
            isTopLevel && `${baseClass}--top-level`,
            withinCollapsible && `${baseClass}--within-collapsible`,
            isWithinGroup && `${baseClass}--within-group`,
            isWithinRow && `${baseClass}--within-row`,
            isWithinTab && `${baseClass}--within-tab`,
            !hideGutter && isWithinGroup && `${baseClass}--gutter`,
            groupHasErrors && `${baseClass}--has-error`,
            className
        ].filter(Boolean).join(' '),
        id: `field-${path.replace(/\./g, '__')}`,
        style: {
            ...style,
            width
        }
    }, /*#__PURE__*/ _react.default.createElement(_WatchChildErrors.WatchChildErrors, {
        fieldSchema: fields,
        path: path,
        setErrorCount: setErrorCount
    }), /*#__PURE__*/ _react.default.createElement(_provider3.GroupProvider, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__header`
    }, (label || description) && /*#__PURE__*/ _react.default.createElement("header", null, label && /*#__PURE__*/ _react.default.createElement("h3", {
        className: `${baseClass}__title`
    }, (0, _getTranslation.getTranslation)(label, i18n)), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        className: `field-description-${path.replace(/\./g, '__')}`,
        description: description,
        path: path,
        value: null
    })), groupHasErrors && /*#__PURE__*/ _react.default.createElement(_ErrorPill.ErrorPill, {
        count: errorCount,
        withMessage: true
    })), /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        fieldSchema: fields.map((subField)=>({
                ...subField,
                path: (0, _createNestedFieldPath.createNestedFieldPath)(path, subField)
            })),
        fieldTypes: fieldTypes,
        forceRender: forceRender,
        indexPath: indexPath,
        margins: "small",
        permissions: permissions?.fields,
        readOnly: readOnly
    }))));
};
const _default = (0, _withCondition.default)(Group);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0dyb3VwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IHVzZUNvbGxhcHNpYmxlIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQ29sbGFwc2libGUvcHJvdmlkZXInXG5pbXBvcnQgeyBFcnJvclBpbGwgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9FcnJvclBpbGwnXG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJ1xuaW1wb3J0IHsgdXNlRm9ybVN1Ym1pdHRlZCB9IGZyb20gJy4uLy4uL0Zvcm0vY29udGV4dCdcbmltcG9ydCB7IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCB9IGZyb20gJy4uLy4uL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoJ1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi9SZW5kZXJGaWVsZHMnXG5pbXBvcnQgeyBXYXRjaENoaWxkRXJyb3JzIH0gZnJvbSAnLi4vLi4vV2F0Y2hDaGlsZEVycm9ycydcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nXG5pbXBvcnQgeyB1c2VSb3cgfSBmcm9tICcuLi9Sb3cvcHJvdmlkZXInXG5pbXBvcnQgeyB1c2VUYWJzIH0gZnJvbSAnLi4vVGFicy9wcm92aWRlcidcbmltcG9ydCB7IGZpZWxkQmFzZUNsYXNzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgeyBHcm91cFByb3ZpZGVyLCB1c2VHcm91cCB9IGZyb20gJy4vcHJvdmlkZXInXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdncm91cC1maWVsZCdcblxuY29uc3QgR3JvdXA6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBhZG1pbjogeyBjbGFzc05hbWUsIGRlc2NyaXB0aW9uLCBoaWRlR3V0dGVyID0gZmFsc2UsIHJlYWRPbmx5LCBzdHlsZSwgd2lkdGggfSxcbiAgICBmaWVsZFR5cGVzLFxuICAgIGZpZWxkcyxcbiAgICBmb3JjZVJlbmRlciA9IGZhbHNlLFxuICAgIGluZGV4UGF0aCxcbiAgICBsYWJlbCxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHBlcm1pc3Npb25zLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IHdpdGhpbkNvbGxhcHNpYmxlIH0gPSB1c2VDb2xsYXBzaWJsZSgpXG4gIGNvbnN0IGlzV2l0aGluR3JvdXAgPSB1c2VHcm91cCgpXG4gIGNvbnN0IGlzV2l0aGluUm93ID0gdXNlUm93KClcbiAgY29uc3QgaXNXaXRoaW5UYWIgPSB1c2VUYWJzKClcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHN1Ym1pdHRlZCA9IHVzZUZvcm1TdWJtaXR0ZWQoKVxuICBjb25zdCBbZXJyb3JDb3VudCwgc2V0RXJyb3JDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IGdyb3VwSGFzRXJyb3JzID0gc3VibWl0dGVkICYmIGVycm9yQ291bnQgPiAwXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuICBjb25zdCBpc1RvcExldmVsID0gISh3aXRoaW5Db2xsYXBzaWJsZSB8fCBpc1dpdGhpbkdyb3VwIHx8IGlzV2l0aGluUm93KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgIGZpZWxkQmFzZUNsYXNzLFxuICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgIGlzVG9wTGV2ZWwgJiYgYCR7YmFzZUNsYXNzfS0tdG9wLWxldmVsYCxcbiAgICAgICAgd2l0aGluQ29sbGFwc2libGUgJiYgYCR7YmFzZUNsYXNzfS0td2l0aGluLWNvbGxhcHNpYmxlYCxcbiAgICAgICAgaXNXaXRoaW5Hcm91cCAmJiBgJHtiYXNlQ2xhc3N9LS13aXRoaW4tZ3JvdXBgLFxuICAgICAgICBpc1dpdGhpblJvdyAmJiBgJHtiYXNlQ2xhc3N9LS13aXRoaW4tcm93YCxcbiAgICAgICAgaXNXaXRoaW5UYWIgJiYgYCR7YmFzZUNsYXNzfS0td2l0aGluLXRhYmAsXG4gICAgICAgICFoaWRlR3V0dGVyICYmIGlzV2l0aGluR3JvdXAgJiYgYCR7YmFzZUNsYXNzfS0tZ3V0dGVyYCxcbiAgICAgICAgZ3JvdXBIYXNFcnJvcnMgJiYgYCR7YmFzZUNsYXNzfS0taGFzLWVycm9yYCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFdhdGNoQ2hpbGRFcnJvcnMgZmllbGRTY2hlbWE9e2ZpZWxkc30gcGF0aD17cGF0aH0gc2V0RXJyb3JDb3VudD17c2V0RXJyb3JDb3VudH0gLz5cbiAgICAgIDxHcm91cFByb3ZpZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJgfT5cbiAgICAgICAgICAgIHsobGFiZWwgfHwgZGVzY3JpcHRpb24pICYmIChcbiAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICB7bGFiZWwgJiYgPGgzIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGl0bGVgfT57Z2V0VHJhbnNsYXRpb24obGFiZWwsIGkxOG4pfTwvaDM+fVxuICAgICAgICAgICAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWVsZC1kZXNjcmlwdGlvbi0ke3BhdGgucmVwbGFjZSgvXFwuL2csICdfXycpfWB9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e251bGx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2dyb3VwSGFzRXJyb3JzICYmIDxFcnJvclBpbGwgY291bnQ9e2Vycm9yQ291bnR9IHdpdGhNZXNzYWdlIC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZHMubWFwKChzdWJGaWVsZCkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uc3ViRmllbGQsXG4gICAgICAgICAgICAgIHBhdGg6IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBzdWJGaWVsZCksXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgICAgZm9yY2VSZW5kZXI9e2ZvcmNlUmVuZGVyfVxuICAgICAgICAgICAgaW5kZXhQYXRoPXtpbmRleFBhdGh9XG4gICAgICAgICAgICBtYXJnaW5zPVwic21hbGxcIlxuICAgICAgICAgICAgcGVybWlzc2lvbnM9e3Blcm1pc3Npb25zPy5maWVsZHN9XG4gICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dyb3VwUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihHcm91cClcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJHcm91cCIsInByb3BzIiwibmFtZSIsImFkbWluIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJoaWRlR3V0dGVyIiwicmVhZE9ubHkiLCJzdHlsZSIsIndpZHRoIiwiZmllbGRUeXBlcyIsImZpZWxkcyIsImZvcmNlUmVuZGVyIiwiaW5kZXhQYXRoIiwibGFiZWwiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInBlcm1pc3Npb25zIiwid2l0aGluQ29sbGFwc2libGUiLCJ1c2VDb2xsYXBzaWJsZSIsImlzV2l0aGluR3JvdXAiLCJ1c2VHcm91cCIsImlzV2l0aGluUm93IiwidXNlUm93IiwiaXNXaXRoaW5UYWIiLCJ1c2VUYWJzIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwic3VibWl0dGVkIiwidXNlRm9ybVN1Ym1pdHRlZCIsImVycm9yQ291bnQiLCJzZXRFcnJvckNvdW50IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImdyb3VwSGFzRXJyb3JzIiwiaXNUb3BMZXZlbCIsImRpdiIsImZpZWxkQmFzZUNsYXNzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJpZCIsInJlcGxhY2UiLCJXYXRjaENoaWxkRXJyb3JzIiwiZmllbGRTY2hlbWEiLCJHcm91cFByb3ZpZGVyIiwiaGVhZGVyIiwiaDMiLCJnZXRUcmFuc2xhdGlvbiIsIkZpZWxkRGVzY3JpcHRpb24iLCJ2YWx1ZSIsIkVycm9yUGlsbCIsImNvdW50Iiwid2l0aE1lc3NhZ2UiLCJSZW5kZXJGaWVsZHMiLCJtYXAiLCJzdWJGaWVsZCIsImNyZWF0ZU5lc3RlZEZpZWxkUGF0aCIsIm1hcmdpbnMiLCJ3aXRoQ29uZGl0aW9uIl0sInJh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