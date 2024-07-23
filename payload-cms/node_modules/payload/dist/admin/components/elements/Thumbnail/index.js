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
const _useThumbnail = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThumbnail"));
const _File = /*#__PURE__*/ _interop_require_default(require("../../graphics/File"));
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
const baseClass = 'thumbnail';
const Thumbnail = (props)=>{
    const { className = '', collection, doc: { filename } = {}, doc, fileSrc, imageCacheTag, size } = props;
    const thumbnailSRC = collection && doc ? (0, _useThumbnail.default)(collection, doc) : fileSrc;
    const [src, setSrc] = (0, _react.useState)(thumbnailSRC);
    const classes = [
        baseClass,
        `${baseClass}--size-${size || 'medium'}`,
        className
    ].join(' ');
    (0, _react.useEffect)(()=>{
        if (thumbnailSRC) {
            setSrc(`${thumbnailSRC}${imageCacheTag ? `?${imageCacheTag}` : ''}`);
        }
    }, [
        doc,
        collection,
        thumbnailSRC,
        fileSrc,
        imageCacheTag
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, src && /*#__PURE__*/ _react.default.createElement("img", {
        alt: filename,
        src: src
    }), !src && /*#__PURE__*/ _react.default.createElement(_File.default, null));
};
const _default = Thumbnail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RodW1ibmFpbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB1c2VUaHVtYm5haWwgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVGh1bWJuYWlsJ1xuaW1wb3J0IEZpbGVHcmFwaGljIGZyb20gJy4uLy4uL2dyYXBoaWNzL0ZpbGUnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RodW1ibmFpbCdcblxuY29uc3QgVGh1bWJuYWlsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgZG9jOiB7IGZpbGVuYW1lIH0gPSB7fSxcbiAgICBkb2MsXG4gICAgZmlsZVNyYyxcbiAgICBpbWFnZUNhY2hlVGFnLFxuICAgIHNpemUsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHRodW1ibmFpbFNSQyA9IGNvbGxlY3Rpb24gJiYgZG9jID8gdXNlVGh1bWJuYWlsKGNvbGxlY3Rpb24sIGRvYykgOiBmaWxlU3JjXG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZSh0aHVtYm5haWxTUkMpXG5cbiAgY29uc3QgY2xhc3NlcyA9IFtiYXNlQ2xhc3MsIGAke2Jhc2VDbGFzc30tLXNpemUtJHtzaXplIHx8ICdtZWRpdW0nfWAsIGNsYXNzTmFtZV0uam9pbignICcpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGh1bWJuYWlsU1JDKSB7XG4gICAgICBzZXRTcmMoYCR7dGh1bWJuYWlsU1JDfSR7aW1hZ2VDYWNoZVRhZyA/IGA/JHtpbWFnZUNhY2hlVGFnfWAgOiAnJ31gKVxuICAgIH1cbiAgfSwgW2RvYywgY29sbGVjdGlvbiwgdGh1bWJuYWlsU1JDLCBmaWxlU3JjLCBpbWFnZUNhY2hlVGFnXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHtzcmMgJiYgPGltZyBhbHQ9e2ZpbGVuYW1lIGFzIHN0cmluZ30gc3JjPXtzcmN9IC8+fVxuICAgICAgeyFzcmMgJiYgPEZpbGVHcmFwaGljIC8+fVxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBUaHVtYm5haWxcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJUaHVtYm5haWwiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJmaWxlbmFtZSIsImZpbGVTcmMiLCJpbWFnZUNhY2hlVGFnIiwic2l6ZSIsInRodW1ibmFpbFNSQyIsInVzZVRodW1ibmFpbCIsInNyYyIsInNldFNyYyIsInVzZVN0YXRlIiwiY2xhc3NlcyIsImpvaW4iLCJ1c2VFZmZlY3QiLCJkaXYiLCJpbWciLCJhbHQiLCJGaWxlR3JhcGhpYyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXVDQTs7O2VBQUE7OzsrREF2QzJDO3FFQUlsQjs2REFDRDtRQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLFlBQTZCLENBQUNDO0lBQ2xDLE1BQU0sRUFDSkMsWUFBWSxFQUFFLEVBQ2RDLFVBQVUsRUFDVkMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDdEJELEdBQUcsRUFDSEUsT0FBTyxFQUNQQyxhQUFhLEVBQ2JDLElBQUksRUFDTCxHQUFHUDtJQUVKLE1BQU1RLGVBQWVOLGNBQWNDLE1BQU1NLElBQUFBLHFCQUFZLEVBQUNQLFlBQVlDLE9BQU9FO0lBQ3pFLE1BQU0sQ0FBQ0ssS0FBS0MsT0FBTyxHQUFHQyxJQUFBQSxlQUFRLEVBQUNKO0lBRS9CLE1BQU1LLFVBQVU7UUFBQ2Y7UUFBVyxDQUFDLEVBQUVBLFVBQVUsT0FBTyxFQUFFUyxRQUFRLFNBQVMsQ0FBQztRQUFFTjtLQUFVLENBQUNhLElBQUksQ0FBQztJQUV0RkMsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUlQLGNBQWM7WUFDaEJHLE9BQU8sQ0FBQyxFQUFFSCxhQUFhLEVBQUVGLGdCQUFnQixDQUFDLENBQUMsRUFBRUEsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3JFO0lBQ0YsR0FBRztRQUFDSDtRQUFLRDtRQUFZTTtRQUFjSDtRQUFTQztLQUFjO0lBRTFELHFCQUNFLDZCQUFDVTtRQUFJZixXQUFXWTtPQUNiSCxxQkFBTyw2QkFBQ087UUFBSUMsS0FBS2Q7UUFBb0JNLEtBQUtBO1FBQzFDLENBQUNBLHFCQUFPLDZCQUFDUyxhQUFXO0FBRzNCO01BQ0EsV0FBZXBCIn0=