"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RowLabel", {
    enumerable: true,
    get: function() {
        return RowLabel;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../utilities/getTranslation");
const _context = require("../Form/context");
const _types = require("./types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'row-label';
const RowLabel = ({ className, ...rest })=>{
    return /*#__PURE__*/ _react.default.createElement("span", {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' '),
        style: {
            pointerEvents: 'none'
        }
    }, /*#__PURE__*/ _react.default.createElement(RowLabelContent, rest));
};
const RowLabelContent = (props)=>{
    const { label, path, rowNumber } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const { getDataByPath, getSiblingData } = (0, _context.useWatchForm)();
    const collapsibleData = getSiblingData(path);
    const arrayData = getDataByPath(path);
    const data = arrayData || collapsibleData;
    if ((0, _types.isComponent)(label)) {
        const Label = label;
        return /*#__PURE__*/ _react.default.createElement(Label, {
            data: data,
            index: rowNumber,
            path: path
        });
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, typeof label === 'function' ? label({
        data,
        index: rowNumber,
        path
    }) : (0, _getTranslation.getTranslation)(label, i18n));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1Jvd0xhYmVsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IHVzZVdhdGNoRm9ybSB9IGZyb20gJy4uL0Zvcm0vY29udGV4dCdcbmltcG9ydCB7IGlzQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3Jvdy1sYWJlbCdcblxuZXhwb3J0IGNvbnN0IFJvd0xhYmVsOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9e1tiYXNlQ2xhc3MsIGNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFJvd0xhYmVsQ29udGVudCB7Li4ucmVzdH0gLz5cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuY29uc3QgUm93TGFiZWxDb250ZW50OiBSZWFjdC5GQzxPbWl0PFByb3BzLCAnY2xhc3NOYW1lJz4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIHBhdGgsIHJvd051bWJlciB9ID0gcHJvcHNcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgeyBnZXREYXRhQnlQYXRoLCBnZXRTaWJsaW5nRGF0YSB9ID0gdXNlV2F0Y2hGb3JtKClcbiAgY29uc3QgY29sbGFwc2libGVEYXRhID0gZ2V0U2libGluZ0RhdGEocGF0aClcbiAgY29uc3QgYXJyYXlEYXRhID0gZ2V0RGF0YUJ5UGF0aChwYXRoKVxuICBjb25zdCBkYXRhID0gYXJyYXlEYXRhIHx8IGNvbGxhcHNpYmxlRGF0YVxuXG4gIGlmIChpc0NvbXBvbmVudChsYWJlbCkpIHtcbiAgICBjb25zdCBMYWJlbCA9IGxhYmVsXG4gICAgcmV0dXJuIDxMYWJlbCBkYXRhPXtkYXRhfSBpbmRleD17cm93TnVtYmVyfSBwYXRoPXtwYXRofSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7dHlwZW9mIGxhYmVsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gbGFiZWwoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGluZGV4OiByb3dOdW1iZXIsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgIH0pXG4gICAgICAgIDogZ2V0VHJhbnNsYXRpb24obGFiZWwsIGkxOG4pfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSb3dMYWJlbCIsImJhc2VDbGFzcyIsImNsYXNzTmFtZSIsInJlc3QiLCJzcGFuIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJSb3dMYWJlbENvbnRlbnQiLCJwcm9wcyIsImxhYmVsIiwicGF0aCIsInJvd051bWJlciIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImdldERhdGFCeVBhdGgiLCJnZXRTaWJsaW5nRGF0YSIsInVzZVdhdGNoRm9ybSIsImNvbGxhcHNpYmxlRGF0YSIsImFycmF5RGF0YSIsImRhdGEiLCJpc0NvbXBvbmVudCIsIkxhYmVsIiwiaW5kZXgiLCJSZWFjdCIsIkZyYWdtZW50IiwiZ2V0VHJhbnNsYXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFXYUE7OztlQUFBQTs7OzhEQVhLOzhCQUNhO2dDQUlBO3lCQUNGO3VCQUNEOzs7Ozs7QUFFNUIsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELFdBQTRCLENBQUMsRUFBRUUsU0FBUyxFQUFFLEdBQUdDLE1BQU07SUFDOUQscUJBQ0UsNkJBQUNDO1FBQ0NGLFdBQVc7WUFBQ0Q7WUFBV0M7U0FBVSxDQUFDRyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUN2REMsT0FBTztZQUNMQyxlQUFlO1FBQ2pCO3FCQUVBLDZCQUFDQyxpQkFBb0JQO0FBRzNCO0FBRUEsTUFBTU8sa0JBQXNELENBQUNDO0lBQzNELE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxHQUFHSDtJQUVuQyxNQUFNLEVBQUVJLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUMvQixNQUFNLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFLEdBQUdDLElBQUFBLHFCQUFZO0lBQ3RELE1BQU1DLGtCQUFrQkYsZUFBZUw7SUFDdkMsTUFBTVEsWUFBWUosY0FBY0o7SUFDaEMsTUFBTVMsT0FBT0QsYUFBYUQ7SUFFMUIsSUFBSUcsSUFBQUEsa0JBQVcsRUFBQ1gsUUFBUTtRQUN0QixNQUFNWSxRQUFRWjtRQUNkLHFCQUFPLDZCQUFDWTtZQUFNRixNQUFNQTtZQUFNRyxPQUFPWDtZQUFXRCxNQUFNQTs7SUFDcEQ7SUFFQSxxQkFDRSw2QkFBQ2EsY0FBSyxDQUFDQyxRQUFRLFFBQ1osT0FBT2YsVUFBVSxhQUNkQSxNQUFNO1FBQ0pVO1FBQ0FHLE9BQU9YO1FBQ1BEO0lBQ0YsS0FDQWUsSUFBQUEsOEJBQWMsRUFBQ2hCLE9BQU9HO0FBR2hDIn0=