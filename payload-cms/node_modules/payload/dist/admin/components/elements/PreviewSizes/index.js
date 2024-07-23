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
const _Meta = /*#__PURE__*/ _interop_require_default(require("../FileDetails/Meta"));
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
const baseClass = 'preview-sizes';
const sortSizes = (sizes, imageSizes)=>{
    if (!imageSizes || imageSizes.length === 0) return sizes;
    const orderedSizes = {};
    imageSizes.forEach(({ name })=>{
        if (sizes[name]) {
            orderedSizes[name] = sizes[name];
        }
    });
    return orderedSizes;
};
const PreviewSizeCard = ({ name, active, baseURL, meta, onClick, previewSrc })=>{
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            `${baseClass}__sizeOption`,
            active && `${baseClass}--selected`
        ].filter(Boolean).join(' '),
        onClick: typeof onClick === 'function' ? onClick : undefined,
        onKeyDown: (e)=>{
            if (typeof onClick !== 'function') return;
            if (e.key === 'Enter') onClick();
        },
        role: "button",
        tabIndex: 0
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__image`
    }, /*#__PURE__*/ _react.default.createElement("img", {
        alt: meta.filename,
        src: previewSrc
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__sizeMeta`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__sizeName`
    }, name), /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        ...meta,
        staticURL: baseURL
    })));
};
const PreviewSizes = ({ collection, doc, imageCacheTag })=>{
    const { upload: { imageSizes, staticURL } } = collection;
    const { sizes } = doc;
    const [orderedSizes, setOrderedSizes] = (0, _react.useState)(()=>sortSizes(sizes, imageSizes));
    const [selectedSize, setSelectedSize] = (0, _react.useState)(null);
    const generateImageUrl = (doc)=>{
        if (!doc.filename) return null;
        if (doc.url) return `${doc.url}${imageCacheTag ? `?${imageCacheTag}` : ''}`;
    };
    (0, _react.useEffect)(()=>{
        setOrderedSizes(sortSizes(sizes, imageSizes));
    }, [
        sizes,
        imageSizes,
        imageCacheTag
    ]);
    const mainPreviewSrc = selectedSize ? generateImageUrl(doc.sizes[selectedSize]) : generateImageUrl(doc);
    const originalImage = (0, _react.useMemo)(()=>({
            filename: doc.filename,
            filesize: doc.filesize,
            height: doc.height,
            mimeType: doc.mimeType,
            width: doc.width
        }), [
        doc
    ]);
    const originalFilename = 'Original';
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__imageWrap`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__meta`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__sizeName`
    }, selectedSize || originalFilename), /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        ...selectedSize ? orderedSizes[selectedSize] : originalImage,
        staticURL: staticURL
    })), /*#__PURE__*/ _react.default.createElement("img", {
        alt: doc.filename,
        className: `${baseClass}__preview`,
        src: mainPreviewSrc
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__listWrap`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__list`
    }, /*#__PURE__*/ _react.default.createElement(PreviewSizeCard, {
        active: !selectedSize,
        baseURL: staticURL,
        meta: originalImage,
        name: originalFilename,
        onClick: ()=>setSelectedSize(null),
        previewSrc: generateImageUrl(doc)
    }), Object.entries(orderedSizes).map(([key, val])=>{
        const selected = selectedSize === key;
        const previewSrc = generateImageUrl(val);
        if (previewSrc) {
            return /*#__PURE__*/ _react.default.createElement(PreviewSizeCard, {
                active: selected,
                baseURL: staticURL,
                key: key,
                meta: val,
                name: key,
                onClick: ()=>setSelectedSize(key),
                previewSrc: previewSrc
            });
        }
        return null;
    }))));
};
const _default = PreviewSizes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1ByZXZpZXdTaXplcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcbmltcG9ydCB0eXBlIHsgRmlsZVNpemVzLCBVcGxvYWQgfSBmcm9tICcuLi8uLi8uLi8uLi91cGxvYWRzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEYXRhIH0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS90eXBlcydcblxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vRmlsZURldGFpbHMvTWV0YSdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncHJldmlldy1zaXplcydcblxuY29uc3Qgc29ydFNpemVzID0gKHNpemVzOiBGaWxlU2l6ZXMsIGltYWdlU2l6ZXM6IFVwbG9hZFsnaW1hZ2VTaXplcyddKSA9PiB7XG4gIGlmICghaW1hZ2VTaXplcyB8fCBpbWFnZVNpemVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHNpemVzXG5cbiAgY29uc3Qgb3JkZXJlZFNpemVzOiBGaWxlU2l6ZXMgPSB7fVxuXG4gIGltYWdlU2l6ZXMuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcbiAgICBpZiAoc2l6ZXNbbmFtZV0pIHtcbiAgICAgIG9yZGVyZWRTaXplc1tuYW1lXSA9IHNpemVzW25hbWVdXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvcmRlcmVkU2l6ZXNcbn1cblxudHlwZSBQcmV2aWV3U2l6ZUNhcmRQcm9wcyA9IHtcbiAgYWN0aXZlOiBib29sZWFuXG4gIGJhc2VVUkw6IHN0cmluZ1xuICBtZXRhOiBGaWxlU2l6ZXNbMF1cbiAgbmFtZTogc3RyaW5nXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkXG4gIHByZXZpZXdTcmM6IHN0cmluZ1xufVxuY29uc3QgUHJldmlld1NpemVDYXJkOiBSZWFjdC5GQzxQcmV2aWV3U2l6ZUNhcmRQcm9wcz4gPSAoe1xuICBuYW1lLFxuICBhY3RpdmUsXG4gIGJhc2VVUkwsXG4gIG1ldGEsXG4gIG9uQ2xpY2ssXG4gIHByZXZpZXdTcmMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbYCR7YmFzZUNsYXNzfV9fc2l6ZU9wdGlvbmAsIGFjdGl2ZSAmJiBgJHtiYXNlQ2xhc3N9LS1zZWxlY3RlZGBdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgIG9uQ2xpY2s9e3R5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nID8gb25DbGljayA6IHVuZGVmaW5lZH1cbiAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvbkNsaWNrICE9PSAnZnVuY3Rpb24nKSByZXR1cm5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSBvbkNsaWNrKClcbiAgICAgIH19XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbWFnZWB9PlxuICAgICAgICA8aW1nIGFsdD17bWV0YS5maWxlbmFtZX0gc3JjPXtwcmV2aWV3U3JjfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2l6ZU1ldGFgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpemVOYW1lYH0+e25hbWV9PC9kaXY+XG4gICAgICAgIDxNZXRhIHsuLi5tZXRhfSBzdGF0aWNVUkw9e2Jhc2VVUkx9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQcmV2aWV3U2l6ZXM6IFJlYWN0LkZDPHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBkb2M6IERhdGEgJiB7XG4gICAgc2l6ZXM/OiBGaWxlU2l6ZXNcbiAgfVxuICBpbWFnZUNhY2hlVGFnPzogc3RyaW5nXG59PiA9ICh7IGNvbGxlY3Rpb24sIGRvYywgaW1hZ2VDYWNoZVRhZyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1cGxvYWQ6IHsgaW1hZ2VTaXplcywgc3RhdGljVVJMIH0sXG4gIH0gPSBjb2xsZWN0aW9uXG4gIGNvbnN0IHsgc2l6ZXMgfSA9IGRvY1xuXG4gIGNvbnN0IFtvcmRlcmVkU2l6ZXMsIHNldE9yZGVyZWRTaXplc10gPSB1c2VTdGF0ZTxGaWxlU2l6ZXM+KCgpID0+IHNvcnRTaXplcyhzaXplcywgaW1hZ2VTaXplcykpXG4gIGNvbnN0IFtzZWxlY3RlZFNpemUsIHNldFNlbGVjdGVkU2l6ZV0gPSB1c2VTdGF0ZTxudWxsIHwgc3RyaW5nPihudWxsKVxuXG4gIGNvbnN0IGdlbmVyYXRlSW1hZ2VVcmwgPSAoZG9jKSA9PiB7XG4gICAgaWYgKCFkb2MuZmlsZW5hbWUpIHJldHVybiBudWxsXG4gICAgaWYgKGRvYy51cmwpIHJldHVybiBgJHtkb2MudXJsfSR7aW1hZ2VDYWNoZVRhZyA/IGA/JHtpbWFnZUNhY2hlVGFnfWAgOiAnJ31gXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcmRlcmVkU2l6ZXMoc29ydFNpemVzKHNpemVzLCBpbWFnZVNpemVzKSlcbiAgfSwgW3NpemVzLCBpbWFnZVNpemVzLCBpbWFnZUNhY2hlVGFnXSlcblxuICBjb25zdCBtYWluUHJldmlld1NyYyA9IHNlbGVjdGVkU2l6ZVxuICAgID8gZ2VuZXJhdGVJbWFnZVVybChkb2Muc2l6ZXNbc2VsZWN0ZWRTaXplXSlcbiAgICA6IGdlbmVyYXRlSW1hZ2VVcmwoZG9jKVxuXG4gIGNvbnN0IG9yaWdpbmFsSW1hZ2UgPSB1c2VNZW1vKFxuICAgICgpOiBGaWxlU2l6ZXNbMF0gPT4gKHtcbiAgICAgIGZpbGVuYW1lOiBkb2MuZmlsZW5hbWUsXG4gICAgICBmaWxlc2l6ZTogZG9jLmZpbGVzaXplLFxuICAgICAgaGVpZ2h0OiBkb2MuaGVpZ2h0LFxuICAgICAgbWltZVR5cGU6IGRvYy5taW1lVHlwZSxcbiAgICAgIHdpZHRoOiBkb2Mud2lkdGgsXG4gICAgfSksXG4gICAgW2RvY10sXG4gIClcbiAgY29uc3Qgb3JpZ2luYWxGaWxlbmFtZSA9ICdPcmlnaW5hbCdcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ltYWdlV3JhcGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbWV0YWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zaXplTmFtZWB9PntzZWxlY3RlZFNpemUgfHwgb3JpZ2luYWxGaWxlbmFtZX08L2Rpdj5cbiAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgey4uLihzZWxlY3RlZFNpemUgPyBvcmRlcmVkU2l6ZXNbc2VsZWN0ZWRTaXplXSA6IG9yaWdpbmFsSW1hZ2UpfVxuICAgICAgICAgICAgc3RhdGljVVJMPXtzdGF0aWNVUkx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgYWx0PXtkb2MuZmlsZW5hbWV9IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcHJldmlld2B9IHNyYz17bWFpblByZXZpZXdTcmN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saXN0V3JhcGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGlzdGB9PlxuICAgICAgICAgIDxQcmV2aWV3U2l6ZUNhcmRcbiAgICAgICAgICAgIGFjdGl2ZT17IXNlbGVjdGVkU2l6ZX1cbiAgICAgICAgICAgIGJhc2VVUkw9e3N0YXRpY1VSTH1cbiAgICAgICAgICAgIG1ldGE9e29yaWdpbmFsSW1hZ2V9XG4gICAgICAgICAgICBuYW1lPXtvcmlnaW5hbEZpbGVuYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTaXplKG51bGwpfVxuICAgICAgICAgICAgcHJldmlld1NyYz17Z2VuZXJhdGVJbWFnZVVybChkb2MpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMob3JkZXJlZFNpemVzKS5tYXAoKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRTaXplID09PSBrZXlcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdTcmMgPSBnZW5lcmF0ZUltYWdlVXJsKHZhbClcblxuICAgICAgICAgICAgaWYgKHByZXZpZXdTcmMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UHJldmlld1NpemVDYXJkXG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgYmFzZVVSTD17c3RhdGljVVJMfVxuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBtZXRhPXt2YWx9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFNpemUoa2V5KX1cbiAgICAgICAgICAgICAgICAgIHByZXZpZXdTcmM9e3ByZXZpZXdTcmN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3U2l6ZXNcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJzb3J0U2l6ZXMiLCJzaXplcyIsImltYWdlU2l6ZXMiLCJsZW5ndGgiLCJvcmRlcmVkU2l6ZXMiLCJmb3JFYWNoIiwibmFtZSIsIlByZXZpZXdTaXplQ2FyZCIsImFjdGl2ZSIsImJhc2VVUkwiLCJtZXRhIiwib25DbGljayIsInByZXZpZXdTcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInVuZGVmaW5lZCIsIm9uS2V5RG93biIsImUiLCJrZXkiLCJyb2xlIiwidGFiSW5kZXgiLCJpbWciLCJhbHQiLCJmaWxlbmFtZSIsInNyYyIsIk1ldGEiLCJzdGF0aWNVUkwiLCJQcmV2aWV3U2l6ZXMiLCJjb2xsZWN0aW9uIiwiZG9jIiwiaW1hZ2VDYWNoZVRhZyIsInVwbG9hZCIsInNldE9yZGVyZWRTaXplcyIsInVzZVN0YXRlIiwic2VsZWN0ZWRTaXplIiwic2V0U2VsZWN0ZWRTaXplIiwiZ2VuZXJhdGVJbWFnZVVybCIsInVybCIsInVzZUVmZmVjdCIsIm1haW5QcmV2aWV3U3JjIiwib3JpZ2luYWxJbWFnZSIsInVzZU1lbW8iLCJmaWxlc2l6ZSIsImhlaWdodCIsIm1pbWVUeXBlIiwid2lkdGgiLCJvcmlnaW5hbEZpbGVuYW1lIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInZhbCIsInNlbGVjdGVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXdKQTs7O2VBQUE7OzsrREF4Sm9EOzZEQU1uQztRQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsWUFBWSxDQUFDQyxPQUFrQkM7SUFDbkMsSUFBSSxDQUFDQSxjQUFjQSxXQUFXQyxNQUFNLEtBQUssR0FBRyxPQUFPRjtJQUVuRCxNQUFNRyxlQUEwQixDQUFDO0lBRWpDRixXQUFXRyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxJQUFJLEVBQUU7UUFDMUIsSUFBSUwsS0FBSyxDQUFDSyxLQUFLLEVBQUU7WUFDZkYsWUFBWSxDQUFDRSxLQUFLLEdBQUdMLEtBQUssQ0FBQ0ssS0FBSztRQUNsQztJQUNGO0lBRUEsT0FBT0Y7QUFDVDtBQVVBLE1BQU1HLGtCQUFrRCxDQUFDLEVBQ3ZERCxJQUFJLEVBQ0pFLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsVUFBVSxFQUNYO0lBQ0MscUJBQ0UsNkJBQUNDO1FBQ0NDLFdBQVc7WUFBQyxDQUFDLEVBQUVmLFVBQVUsWUFBWSxDQUFDO1lBQUVTLFVBQVUsQ0FBQyxFQUFFVCxVQUFVLFVBQVUsQ0FBQztTQUFDLENBQ3hFZ0IsTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7UUFDUk4sU0FBUyxPQUFPQSxZQUFZLGFBQWFBLFVBQVVPO1FBQ25EQyxXQUFXLENBQUNDO1lBQ1YsSUFBSSxPQUFPVCxZQUFZLFlBQVk7WUFDbkMsSUFBSVMsRUFBRUMsR0FBRyxLQUFLLFNBQVNWO1FBQ3pCO1FBQ0FXLE1BQUs7UUFDTEMsVUFBVTtxQkFFViw2QkFBQ1Y7UUFBSUMsV0FBVyxDQUFDLEVBQUVmLFVBQVUsT0FBTyxDQUFDO3FCQUNuQyw2QkFBQ3lCO1FBQUlDLEtBQUtmLEtBQUtnQixRQUFRO1FBQUVDLEtBQUtmO3VCQUVoQyw2QkFBQ0M7UUFBSUMsV0FBVyxDQUFDLEVBQUVmLFVBQVUsVUFBVSxDQUFDO3FCQUN0Qyw2QkFBQ2M7UUFBSUMsV0FBVyxDQUFDLEVBQUVmLFVBQVUsVUFBVSxDQUFDO09BQUdPLHFCQUMzQyw2QkFBQ3NCLGFBQUk7UUFBRSxHQUFHbEIsSUFBSTtRQUFFbUIsV0FBV3BCOztBQUluQztBQUVBLE1BQU1xQixlQU1ELENBQUMsRUFBRUMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLGFBQWEsRUFBRTtJQUN0QyxNQUFNLEVBQ0pDLFFBQVEsRUFBRWhDLFVBQVUsRUFBRTJCLFNBQVMsRUFBRSxFQUNsQyxHQUFHRTtJQUNKLE1BQU0sRUFBRTlCLEtBQUssRUFBRSxHQUFHK0I7SUFFbEIsTUFBTSxDQUFDNUIsY0FBYytCLGdCQUFnQixHQUFHQyxJQUFBQSxlQUFRLEVBQVksSUFBTXBDLFVBQVVDLE9BQU9DO0lBQ25GLE1BQU0sQ0FBQ21DLGNBQWNDLGdCQUFnQixHQUFHRixJQUFBQSxlQUFRLEVBQWdCO0lBRWhFLE1BQU1HLG1CQUFtQixDQUFDUDtRQUN4QixJQUFJLENBQUNBLElBQUlOLFFBQVEsRUFBRSxPQUFPO1FBQzFCLElBQUlNLElBQUlRLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRVIsSUFBSVEsR0FBRyxDQUFDLEVBQUVQLGdCQUFnQixDQUFDLENBQUMsRUFBRUEsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdFO0lBQ0FRLElBQUFBLGdCQUFTLEVBQUM7UUFDUk4sZ0JBQWdCbkMsVUFBVUMsT0FBT0M7SUFDbkMsR0FBRztRQUFDRDtRQUFPQztRQUFZK0I7S0FBYztJQUVyQyxNQUFNUyxpQkFBaUJMLGVBQ25CRSxpQkFBaUJQLElBQUkvQixLQUFLLENBQUNvQyxhQUFhLElBQ3hDRSxpQkFBaUJQO0lBRXJCLE1BQU1XLGdCQUFnQkMsSUFBQUEsY0FBTyxFQUMzQixJQUFxQixDQUFBO1lBQ25CbEIsVUFBVU0sSUFBSU4sUUFBUTtZQUN0Qm1CLFVBQVViLElBQUlhLFFBQVE7WUFDdEJDLFFBQVFkLElBQUljLE1BQU07WUFDbEJDLFVBQVVmLElBQUllLFFBQVE7WUFDdEJDLE9BQU9oQixJQUFJZ0IsS0FBSztRQUNsQixDQUFBLEdBQ0E7UUFBQ2hCO0tBQUk7SUFFUCxNQUFNaUIsbUJBQW1CO0lBRXpCLHFCQUNFLDZCQUFDcEM7UUFBSUMsV0FBV2Y7cUJBQ2QsNkJBQUNjO1FBQUlDLFdBQVcsQ0FBQyxFQUFFZixVQUFVLFdBQVcsQ0FBQztxQkFDdkMsNkJBQUNjO1FBQUlDLFdBQVcsQ0FBQyxFQUFFZixVQUFVLE1BQU0sQ0FBQztxQkFDbEMsNkJBQUNjO1FBQUlDLFdBQVcsQ0FBQyxFQUFFZixVQUFVLFVBQVUsQ0FBQztPQUFHc0MsZ0JBQWdCWSxpQ0FDM0QsNkJBQUNyQixhQUFJO1FBQ0YsR0FBSVMsZUFBZWpDLFlBQVksQ0FBQ2lDLGFBQWEsR0FBR00sYUFBYTtRQUM5RGQsV0FBV0E7dUJBR2YsNkJBQUNMO1FBQUlDLEtBQUtPLElBQUlOLFFBQVE7UUFBRVosV0FBVyxDQUFDLEVBQUVmLFVBQVUsU0FBUyxDQUFDO1FBQUU0QixLQUFLZTt1QkFFbkUsNkJBQUM3QjtRQUFJQyxXQUFXLENBQUMsRUFBRWYsVUFBVSxVQUFVLENBQUM7cUJBQ3RDLDZCQUFDYztRQUFJQyxXQUFXLENBQUMsRUFBRWYsVUFBVSxNQUFNLENBQUM7cUJBQ2xDLDZCQUFDUTtRQUNDQyxRQUFRLENBQUM2QjtRQUNUNUIsU0FBU29CO1FBQ1RuQixNQUFNaUM7UUFDTnJDLE1BQU0yQztRQUNOdEMsU0FBUyxJQUFNMkIsZ0JBQWdCO1FBQy9CMUIsWUFBWTJCLGlCQUFpQlA7UUFHOUJrQixPQUFPQyxPQUFPLENBQUMvQyxjQUFjZ0QsR0FBRyxDQUFDLENBQUMsQ0FBQy9CLEtBQUtnQyxJQUFJO1FBQzNDLE1BQU1DLFdBQVdqQixpQkFBaUJoQjtRQUNsQyxNQUFNVCxhQUFhMkIsaUJBQWlCYztRQUVwQyxJQUFJekMsWUFBWTtZQUNkLHFCQUNFLDZCQUFDTDtnQkFDQ0MsUUFBUThDO2dCQUNSN0MsU0FBU29CO2dCQUNUUixLQUFLQTtnQkFDTFgsTUFBTTJDO2dCQUNOL0MsTUFBTWU7Z0JBQ05WLFNBQVMsSUFBTTJCLGdCQUFnQmpCO2dCQUMvQlQsWUFBWUE7O1FBR2xCO1FBRUEsT0FBTztJQUNUO0FBS1Y7TUFDQSxXQUFla0IifQ==