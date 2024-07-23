"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ThumbnailCard", {
    enumerable: true,
    get: function() {
        return ThumbnailCard;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _useTitle = require("../../../hooks/useTitle");
const _Config = require("../../utilities/Config");
const _Thumbnail = /*#__PURE__*/ _interop_require_default(require("../Thumbnail"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'thumbnail-card';
const ThumbnailCard = (props)=>{
    const { alignLabel, className, collection, doc, label: labelFromProps, onClick, thumbnail } = props;
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const config = (0, _Config.useConfig)();
    const classes = [
        baseClass,
        className,
        typeof onClick === 'function' && `${baseClass}--has-on-click`,
        alignLabel && `${baseClass}--align-label-${alignLabel}`
    ].filter(Boolean).join(' ');
    let title = labelFromProps;
    if (!title) {
        title = (0, _useTitle.formatUseAsTitle)({
            collection,
            config,
            doc,
            i18n
        }) || doc?.filename || `[${t('untitled')}]`;
    }
    return /*#__PURE__*/ _react.default.createElement("button", {
        className: classes,
        onClick: onClick,
        title: title,
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__thumbnail`
    }, thumbnail && thumbnail, !thumbnail && collection && doc && /*#__PURE__*/ _react.default.createElement(_Thumbnail.default, {
        collection: collection,
        doc: doc,
        size: "expand"
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__label`
    }, title));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RodW1ibmFpbENhcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGZvcm1hdFVzZUFzVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaXRsZSdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgVGh1bWJuYWlsIGZyb20gJy4uL1RodW1ibmFpbCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndGh1bWJuYWlsLWNhcmQnXG5cbmV4cG9ydCBjb25zdCBUaHVtYm5haWxDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGFsaWduTGFiZWwsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgZG9jLFxuICAgIGxhYmVsOiBsYWJlbEZyb21Qcm9wcyxcbiAgICBvbkNsaWNrLFxuICAgIHRodW1ibmFpbCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICAgIHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nICYmIGAke2Jhc2VDbGFzc30tLWhhcy1vbi1jbGlja2AsXG4gICAgYWxpZ25MYWJlbCAmJiBgJHtiYXNlQ2xhc3N9LS1hbGlnbi1sYWJlbC0ke2FsaWduTGFiZWx9YCxcbiAgXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpXG5cbiAgbGV0IHRpdGxlID0gbGFiZWxGcm9tUHJvcHNcblxuICBpZiAoIXRpdGxlKSB7XG4gICAgdGl0bGUgPVxuICAgICAgZm9ybWF0VXNlQXNUaXRsZSh7XG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZG9jLFxuICAgICAgICBpMThuLFxuICAgICAgfSkgfHxcbiAgICAgIChkb2M/LmZpbGVuYW1lIGFzIHN0cmluZykgfHxcbiAgICAgIGBbJHt0KCd1bnRpdGxlZCcpfV1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzfSBvbkNsaWNrPXtvbkNsaWNrfSB0aXRsZT17dGl0bGV9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190aHVtYm5haWxgfT5cbiAgICAgICAge3RodW1ibmFpbCAmJiB0aHVtYm5haWx9XG4gICAgICAgIHshdGh1bWJuYWlsICYmIGNvbGxlY3Rpb24gJiYgZG9jICYmIChcbiAgICAgICAgICA8VGh1bWJuYWlsIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IGRvYz17ZG9jfSBzaXplPVwiZXhwYW5kXCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3RpdGxlfTwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApXG59XG4iXSwibmFtZXMiOlsiVGh1bWJuYWlsQ2FyZCIsImJhc2VDbGFzcyIsInByb3BzIiwiYWxpZ25MYWJlbCIsImNsYXNzTmFtZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJsYWJlbCIsImxhYmVsRnJvbVByb3BzIiwib25DbGljayIsInRodW1ibmFpbCIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJjb25maWciLCJ1c2VDb25maWciLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJ0aXRsZSIsImZvcm1hdFVzZUFzVGl0bGUiLCJmaWxlbmFtZSIsImJ1dHRvbiIsInR5cGUiLCJkaXYiLCJUaHVtYm5haWwiLCJzaXplIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBWWFBOzs7ZUFBQUE7Ozs4REFaSzs4QkFDYTswQkFJRTt3QkFDUDtrRUFDSjtRQUNmOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsZ0JBQWlDLENBQUNFO0lBQzdDLE1BQU0sRUFDSkMsVUFBVSxFQUNWQyxTQUFTLEVBQ1RDLFVBQVUsRUFDVkMsR0FBRyxFQUNIQyxPQUFPQyxjQUFjLEVBQ3JCQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVixHQUFHUjtJQUVKLE1BQU0sRUFBRVMsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUNuQyxNQUFNQyxTQUFTQyxJQUFBQSxpQkFBUztJQUV4QixNQUFNQyxVQUFVO1FBQ2RmO1FBQ0FHO1FBQ0EsT0FBT0ssWUFBWSxjQUFjLENBQUMsRUFBRVIsVUFBVSxjQUFjLENBQUM7UUFDN0RFLGNBQWMsQ0FBQyxFQUFFRixVQUFVLGNBQWMsRUFBRUUsV0FBVyxDQUFDO0tBQ3hELENBQ0VjLE1BQU0sQ0FBQ0MsU0FDUEMsSUFBSSxDQUFDO0lBRVIsSUFBSUMsUUFBUVo7SUFFWixJQUFJLENBQUNZLE9BQU87UUFDVkEsUUFDRUMsSUFBQUEsMEJBQWdCLEVBQUM7WUFDZmhCO1lBQ0FTO1lBQ0FSO1lBQ0FLO1FBQ0YsTUFDQ0wsS0FBS2dCLFlBQ04sQ0FBQyxDQUFDLEVBQUVWLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEI7SUFFQSxxQkFDRSw2QkFBQ1c7UUFBT25CLFdBQVdZO1FBQVNQLFNBQVNBO1FBQVNXLE9BQU9BO1FBQU9JLE1BQUs7cUJBQy9ELDZCQUFDQztRQUFJckIsV0FBVyxDQUFDLEVBQUVILFVBQVUsV0FBVyxDQUFDO09BQ3RDUyxhQUFhQSxXQUNiLENBQUNBLGFBQWFMLGNBQWNDLHFCQUMzQiw2QkFBQ29CLGtCQUFTO1FBQUNyQixZQUFZQTtRQUFZQyxLQUFLQTtRQUFLcUIsTUFBSzt1QkFHdEQsNkJBQUNGO1FBQUlyQixXQUFXLENBQUMsRUFBRUgsVUFBVSxPQUFPLENBQUM7T0FBR21CO0FBRzlDIn0=