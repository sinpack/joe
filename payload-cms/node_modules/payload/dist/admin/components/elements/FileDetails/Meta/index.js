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
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _formatFilesize = /*#__PURE__*/ _interop_require_default(require("../../../../../uploads/formatFilesize"));
const _Edit = /*#__PURE__*/ _interop_require_default(require("../../../icons/Edit"));
const _Config = require("../../../utilities/Config");
const _CopyToClipboard = /*#__PURE__*/ _interop_require_default(require("../../CopyToClipboard"));
const _DocumentDrawer = require("../../DocumentDrawer");
const _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../Tooltip"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const baseClass = 'file-meta';
const Meta = (props)=>{
    const { id, collection, filename, filesize, height, mimeType, staticURL, url, width } = props;
    const [hovered, setHovered] = (0, _react.useState)(false);
    const openInDrawer = Boolean(id && collection);
    const [DocumentDrawer, DocumentDrawerToggler] = (0, _DocumentDrawer.useDocumentDrawer)({
        id,
        collectionSlug: collection
    });
    const { serverURL } = (0, _Config.useConfig)();
    const fileURL = url || `${serverURL}${staticURL}/${filename}`;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__url`
    }, openInDrawer && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, null), /*#__PURE__*/ _react.default.createElement("a", {
        href: fileURL,
        rel: "noopener noreferrer",
        target: "_blank"
    }, filename), /*#__PURE__*/ _react.default.createElement(_CopyToClipboard.default, {
        defaultMessage: "Copy URL",
        value: fileURL
    }), openInDrawer && /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
        className: `${baseClass}__edit`,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false)
    }, /*#__PURE__*/ _react.default.createElement(_Edit.default, null), /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        show: hovered
    }, "Edit"))), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__size-type`
    }, (0, _formatFilesize.default)(filesize), width && height && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, " - ", width, "x", height), mimeType && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, " - ", mimeType)));
};
const _default = Meta;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0ZpbGVEZXRhaWxzL01ldGEvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IGZvcm1hdEZpbGVzaXplIGZyb20gJy4uLy4uLy4uLy4uLy4uL3VwbG9hZHMvZm9ybWF0RmlsZXNpemUnXG5pbXBvcnQgRWRpdCBmcm9tICcuLi8uLi8uLi9pY29ucy9FZGl0J1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCBDb3B5VG9DbGlwYm9hcmQgZnJvbSAnLi4vLi4vQ29weVRvQ2xpcGJvYXJkJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnREcmF3ZXIgfSBmcm9tICcuLi8uLi9Eb2N1bWVudERyYXdlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uLy4uL1Rvb2x0aXAnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2ZpbGUtbWV0YSdcblxuY29uc3QgTWV0YTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIGNvbGxlY3Rpb24sIGZpbGVuYW1lLCBmaWxlc2l6ZSwgaGVpZ2h0LCBtaW1lVHlwZSwgc3RhdGljVVJMLCB1cmwsIHdpZHRoIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBvcGVuSW5EcmF3ZXIgPSBCb29sZWFuKGlkICYmIGNvbGxlY3Rpb24pXG5cbiAgY29uc3QgW0RvY3VtZW50RHJhd2VyLCBEb2N1bWVudERyYXdlclRvZ2dsZXJdID0gdXNlRG9jdW1lbnREcmF3ZXIoe1xuICAgIGlkLFxuICAgIGNvbGxlY3Rpb25TbHVnOiBjb2xsZWN0aW9uLFxuICB9KVxuXG4gIGNvbnN0IHsgc2VydmVyVVJMIH0gPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IGZpbGVVUkwgPSB1cmwgfHwgYCR7c2VydmVyVVJMfSR7c3RhdGljVVJMfS8ke2ZpbGVuYW1lfWBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3VybGB9PlxuICAgICAgICB7b3BlbkluRHJhd2VyICYmIDxEb2N1bWVudERyYXdlciAvPn1cbiAgICAgICAgPGEgaHJlZj17ZmlsZVVSTH0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIHtmaWxlbmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIGRlZmF1bHRNZXNzYWdlPVwiQ29weSBVUkxcIiB2YWx1ZT17ZmlsZVVSTH0gLz5cbiAgICAgICAge29wZW5JbkRyYXdlciAmJiAoXG4gICAgICAgICAgPERvY3VtZW50RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19lZGl0YH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVkaXQgLz5cbiAgICAgICAgICAgIDxUb29sdGlwIHNob3c9e2hvdmVyZWR9PkVkaXQ8L1Rvb2x0aXA+XG4gICAgICAgICAgPC9Eb2N1bWVudERyYXdlclRvZ2dsZXI+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zaXplLXR5cGVgfT5cbiAgICAgICAge2Zvcm1hdEZpbGVzaXplKGZpbGVzaXplKX1cbiAgICAgICAge3dpZHRoICYmIGhlaWdodCAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgJm5ic3A7LSZuYnNwO1xuICAgICAgICAgICAge3dpZHRofXh7aGVpZ2h0fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHttaW1lVHlwZSAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgJm5ic3A7LSZuYnNwO1xuICAgICAgICAgICAge21pbWVUeXBlfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRhXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiTWV0YSIsInByb3BzIiwiaWQiLCJjb2xsZWN0aW9uIiwiZmlsZW5hbWUiLCJmaWxlc2l6ZSIsImhlaWdodCIsIm1pbWVUeXBlIiwic3RhdGljVVJMIiwidXJsIiwid2lkdGgiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsInVzZVN0YXRlIiwib3BlbkluRHJhd2VyIiwiQm9vbGVhbiIsIkRvY3VtZW50RHJhd2VyIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJjb2xsZWN0aW9uU2x1ZyIsInNlcnZlclVSTCIsInVzZUNvbmZpZyIsImZpbGVVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsInJlbCIsInRhcmdldCIsIkNvcHlUb0NsaXBib2FyZCIsImRlZmF1bHRNZXNzYWdlIiwidmFsdWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJFZGl0IiwiVG9vbHRpcCIsInNob3ciLCJmb3JtYXRGaWxlc2l6ZSIsIlJlYWN0IiwiRnJhZ21lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW1FQTs7O2VBQUE7OzsrREFuRWdDO3VFQUlMOzZEQUNWO3dCQUNTO3dFQUNFO2dDQUNNO2dFQUNkO1FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxPQUF3QixDQUFDQztJQUM3QixNQUFNLEVBQUVDLEVBQUUsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUUsR0FBR1Q7SUFFeEYsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdDLElBQUFBLGVBQVEsRUFBQztJQUN2QyxNQUFNQyxlQUFlQyxRQUFRYixNQUFNQztJQUVuQyxNQUFNLENBQUNhLGdCQUFnQkMsc0JBQXNCLEdBQUdDLElBQUFBLGlDQUFpQixFQUFDO1FBQ2hFaEI7UUFDQWlCLGdCQUFnQmhCO0lBQ2xCO0lBRUEsTUFBTSxFQUFFaUIsU0FBUyxFQUFFLEdBQUdDLElBQUFBLGlCQUFTO0lBRS9CLE1BQU1DLFVBQVViLE9BQU8sQ0FBQyxFQUFFVyxVQUFVLEVBQUVaLFVBQVUsQ0FBQyxFQUFFSixTQUFTLENBQUM7SUFFN0QscUJBQ0UsNkJBQUNtQjtRQUFJQyxXQUFXekI7cUJBQ2QsNkJBQUN3QjtRQUFJQyxXQUFXLENBQUMsRUFBRXpCLFVBQVUsS0FBSyxDQUFDO09BQ2hDZSw4QkFBZ0IsNkJBQUNFLHFDQUNsQiw2QkFBQ1M7UUFBRUMsTUFBTUo7UUFBU0ssS0FBSTtRQUFzQkMsUUFBTztPQUNoRHhCLHlCQUVILDZCQUFDeUIsd0JBQWU7UUFBQ0MsZ0JBQWU7UUFBV0MsT0FBT1Q7UUFDakRSLDhCQUNDLDZCQUFDRztRQUNDTyxXQUFXLENBQUMsRUFBRXpCLFVBQVUsTUFBTSxDQUFDO1FBQy9CaUMsY0FBYyxJQUFNcEIsV0FBVztRQUMvQnFCLGNBQWMsSUFBTXJCLFdBQVc7cUJBRS9CLDZCQUFDc0IsYUFBSSx1QkFDTCw2QkFBQ0MsZ0JBQU87UUFBQ0MsTUFBTXpCO09BQVMseUJBSTlCLDZCQUFDWTtRQUFJQyxXQUFXLENBQUMsRUFBRXpCLFVBQVUsV0FBVyxDQUFDO09BQ3RDc0MsSUFBQUEsdUJBQWMsRUFBQ2hDLFdBQ2ZLLFNBQVNKLHdCQUNSLDZCQUFDZ0MsY0FBSyxDQUFDQyxRQUFRLFFBQUMsT0FFYjdCLE9BQU0sS0FBRUosU0FHWkMsMEJBQ0MsNkJBQUMrQixjQUFLLENBQUNDLFFBQVEsUUFBQyxPQUViaEM7QUFNYjtNQUVBLFdBQWVQIn0=