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
const _isImage = /*#__PURE__*/ _interop_require_default(require("../../../../uploads/isImage"));
const _Upload = require("../../views/collections/Edit/Upload");
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
const _Thumbnail = /*#__PURE__*/ _interop_require_default(require("../Thumbnail"));
const _Meta = /*#__PURE__*/ _interop_require_default(require("./Meta"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'file-details';
const FileDetails = (props)=>{
    const { canEdit, collection, doc, handleRemove, hasImageSizes, imageCacheTag } = props;
    const { slug: collectionSlug, upload: { staticURL } } = collection;
    const { id, filename, filesize, height, mimeType, url, width } = doc;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("header", null, /*#__PURE__*/ _react.default.createElement(_Thumbnail.default, {
        collection: collection,
        doc: doc,
        imageCacheTag: imageCacheTag
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__main-detail`
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        collection: collectionSlug,
        filename: filename,
        filesize: filesize,
        height: height,
        id: id,
        mimeType: mimeType,
        staticURL: staticURL,
        url: url,
        width: width
    }), (0, _isImage.default)(mimeType) && mimeType !== 'image/svg+xml' && /*#__PURE__*/ _react.default.createElement(_Upload.UploadActions, {
        canEdit: canEdit,
        showSizePreviews: hasImageSizes && doc.filename
    })), handleRemove && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "icon-label",
        className: `${baseClass}__remove`,
        icon: "x",
        iconStyle: "with-border",
        onClick: handleRemove,
        round: true
    })));
};
const _default = FileDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0ZpbGVEZXRhaWxzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgaXNJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi91cGxvYWRzL2lzSW1hZ2UnXG5pbXBvcnQgeyBVcGxvYWRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vdmlld3MvY29sbGVjdGlvbnMvRWRpdC9VcGxvYWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbidcbmltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi4vVGh1bWJuYWlsJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi9NZXRhJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWxlLWRldGFpbHMnXG5cbmNvbnN0IEZpbGVEZXRhaWxzOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjYW5FZGl0LCBjb2xsZWN0aW9uLCBkb2MsIGhhbmRsZVJlbW92ZSwgaGFzSW1hZ2VTaXplcywgaW1hZ2VDYWNoZVRhZyB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgc2x1ZzogY29sbGVjdGlvblNsdWcsXG4gICAgdXBsb2FkOiB7IHN0YXRpY1VSTCB9LFxuICB9ID0gY29sbGVjdGlvblxuXG4gIGNvbnN0IHsgaWQsIGZpbGVuYW1lLCBmaWxlc2l6ZSwgaGVpZ2h0LCBtaW1lVHlwZSwgdXJsLCB3aWR0aCB9ID0gZG9jXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxUaHVtYm5haWwgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gZG9jPXtkb2N9IGltYWdlQ2FjaGVUYWc9e2ltYWdlQ2FjaGVUYWd9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tYWluLWRldGFpbGB9PlxuICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9uU2x1Z31cbiAgICAgICAgICAgIGZpbGVuYW1lPXtmaWxlbmFtZSBhcyBzdHJpbmd9XG4gICAgICAgICAgICBmaWxlc2l6ZT17ZmlsZXNpemUgYXMgbnVtYmVyfVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHQgYXMgbnVtYmVyfVxuICAgICAgICAgICAgaWQ9e2lkIGFzIHN0cmluZ31cbiAgICAgICAgICAgIG1pbWVUeXBlPXttaW1lVHlwZSBhcyBzdHJpbmd9XG4gICAgICAgICAgICBzdGF0aWNVUkw9e3N0YXRpY1VSTH1cbiAgICAgICAgICAgIHVybD17dXJsIGFzIHN0cmluZ31cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aCBhcyBudW1iZXJ9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHtpc0ltYWdlKG1pbWVUeXBlIGFzIHN0cmluZykgJiYgbWltZVR5cGUgIT09ICdpbWFnZS9zdmcreG1sJyAmJiAoXG4gICAgICAgICAgICA8VXBsb2FkQWN0aW9ucyBjYW5FZGl0PXtjYW5FZGl0fSBzaG93U2l6ZVByZXZpZXdzPXtoYXNJbWFnZVNpemVzICYmIGRvYy5maWxlbmFtZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2hhbmRsZVJlbW92ZSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcmVtb3ZlYH1cbiAgICAgICAgICAgIGljb249XCJ4XCJcbiAgICAgICAgICAgIGljb25TdHlsZT1cIndpdGgtYm9yZGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX1cbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVEZXRhaWxzXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRmlsZURldGFpbHMiLCJwcm9wcyIsImNhbkVkaXQiLCJjb2xsZWN0aW9uIiwiZG9jIiwiaGFuZGxlUmVtb3ZlIiwiaGFzSW1hZ2VTaXplcyIsImltYWdlQ2FjaGVUYWciLCJzbHVnIiwiY29sbGVjdGlvblNsdWciLCJ1cGxvYWQiLCJzdGF0aWNVUkwiLCJpZCIsImZpbGVuYW1lIiwiZmlsZXNpemUiLCJoZWlnaHQiLCJtaW1lVHlwZSIsInVybCIsIndpZHRoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiVGh1bWJuYWlsIiwiTWV0YSIsImlzSW1hZ2UiLCJVcGxvYWRBY3Rpb25zIiwic2hvd1NpemVQcmV2aWV3cyIsIkJ1dHRvbiIsImJ1dHRvblN0eWxlIiwiaWNvbiIsImljb25TdHlsZSIsIm9uQ2xpY2siLCJyb3VuZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBMkRBOzs7ZUFBQTs7OzhEQTNEa0I7Z0VBSUU7d0JBQ1U7K0RBQ1g7a0VBQ0c7NkRBQ0w7UUFDVjs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxjQUErQixDQUFDQztJQUNwQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUUsR0FBR047SUFFakYsTUFBTSxFQUNKTyxNQUFNQyxjQUFjLEVBQ3BCQyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxFQUN0QixHQUFHUjtJQUVKLE1BQU0sRUFBRVMsRUFBRSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFLEdBQUdkO0lBRWpFLHFCQUNFLDZCQUFDZTtRQUFJQyxXQUFXckI7cUJBQ2QsNkJBQUNzQiw4QkFDQyw2QkFBQ0Msa0JBQVM7UUFBQ25CLFlBQVlBO1FBQVlDLEtBQUtBO1FBQUtHLGVBQWVBO3NCQUM1RCw2QkFBQ1k7UUFBSUMsV0FBVyxDQUFDLEVBQUVyQixVQUFVLGFBQWEsQ0FBQztxQkFDekMsNkJBQUN3QixhQUFJO1FBQ0hwQixZQUFZTTtRQUNaSSxVQUFVQTtRQUNWQyxVQUFVQTtRQUNWQyxRQUFRQTtRQUNSSCxJQUFJQTtRQUNKSSxVQUFVQTtRQUNWTCxXQUFXQTtRQUNYTSxLQUFLQTtRQUNMQyxPQUFPQTtRQUdSTSxJQUFBQSxnQkFBTyxFQUFDUixhQUF1QkEsYUFBYSxpQ0FDM0MsNkJBQUNTLHFCQUFhO1FBQUN2QixTQUFTQTtRQUFTd0Isa0JBQWtCcEIsaUJBQWlCRixJQUFJUyxRQUFRO1NBR25GUiw4QkFDQyw2QkFBQ3NCLGVBQU07UUFDTEMsYUFBWTtRQUNaUixXQUFXLENBQUMsRUFBRXJCLFVBQVUsUUFBUSxDQUFDO1FBQ2pDOEIsTUFBSztRQUNMQyxXQUFVO1FBQ1ZDLFNBQVMxQjtRQUNUMkIsT0FBQUE7O0FBTVo7TUFFQSxXQUFlaEMifQ==