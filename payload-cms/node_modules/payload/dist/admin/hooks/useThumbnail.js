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
const _isImage = /*#__PURE__*/ _interop_require_default(require("../../uploads/isImage"));
const _Config = require("../components/utilities/Config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const absoluteURLPattern = new RegExp('^(?:[a-z]+:)?//', 'i');
const base64Pattern = new RegExp(/^data:image\/[a-z]+;base64,/);
const useThumbnail = (collection, doc)=>{
    const { upload: { adminThumbnail, staticURL } } = collection;
    const { filename, mimeType, sizes, url } = doc;
    const { serverURL } = (0, _Config.useConfig)();
    let pathURL = `${serverURL}${staticURL || ''}`;
    if (absoluteURLPattern.test(staticURL)) {
        pathURL = staticURL;
    }
    if (typeof adminThumbnail === 'function') {
        const thumbnailURL = adminThumbnail({
            doc
        });
        if (!thumbnailURL) return false;
        if (absoluteURLPattern.test(thumbnailURL) || base64Pattern.test(thumbnailURL)) {
            return thumbnailURL;
        }
        return `${pathURL}/${thumbnailURL}`;
    }
    if (adminThumbnail || (0, _isImage.default)(mimeType)) {
        if (typeof adminThumbnail === 'undefined' && url) {
            return url;
        }
        if (sizes?.[adminThumbnail]?.url) {
            return sizes[adminThumbnail].url;
        }
        if (sizes?.[adminThumbnail]?.filename) {
            return `${pathURL}/${sizes[adminThumbnail].filename}`;
        }
        if (url) {
            return url;
        }
        return `${pathURL}/${filename}`;
    }
    return false;
};
const _default = useThumbnail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VUaHVtYm5haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgaXNJbWFnZSBmcm9tICcuLi8uLi91cGxvYWRzL2lzSW1hZ2UnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdGllcy9Db25maWcnXG5cbmNvbnN0IGFic29sdXRlVVJMUGF0dGVybiA9IG5ldyBSZWdFeHAoJ14oPzpbYS16XSs6KT8vLycsICdpJylcbmNvbnN0IGJhc2U2NFBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eZGF0YTppbWFnZVxcL1thLXpdKztiYXNlNjQsLylcblxuY29uc3QgdXNlVGh1bWJuYWlsID0gKFxuICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLFxuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuKTogZmFsc2UgfCBzdHJpbmcgPT4ge1xuICBjb25zdCB7XG4gICAgdXBsb2FkOiB7IGFkbWluVGh1bWJuYWlsLCBzdGF0aWNVUkwgfSxcbiAgfSA9IGNvbGxlY3Rpb25cblxuICBjb25zdCB7IGZpbGVuYW1lLCBtaW1lVHlwZSwgc2l6ZXMsIHVybCB9ID0gZG9jXG5cbiAgY29uc3QgeyBzZXJ2ZXJVUkwgfSA9IHVzZUNvbmZpZygpXG4gIGxldCBwYXRoVVJMID0gYCR7c2VydmVyVVJMfSR7c3RhdGljVVJMIHx8ICcnfWBcblxuICBpZiAoYWJzb2x1dGVVUkxQYXR0ZXJuLnRlc3Qoc3RhdGljVVJMKSkge1xuICAgIHBhdGhVUkwgPSBzdGF0aWNVUkxcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWRtaW5UaHVtYm5haWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB0aHVtYm5haWxVUkwgPSBhZG1pblRodW1ibmFpbCh7IGRvYyB9KVxuXG4gICAgaWYgKCF0aHVtYm5haWxVUkwpIHJldHVybiBmYWxzZVxuXG4gICAgaWYgKGFic29sdXRlVVJMUGF0dGVybi50ZXN0KHRodW1ibmFpbFVSTCkgfHwgYmFzZTY0UGF0dGVybi50ZXN0KHRodW1ibmFpbFVSTCkpIHtcbiAgICAgIHJldHVybiB0aHVtYm5haWxVUkxcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cGF0aFVSTH0vJHt0aHVtYm5haWxVUkx9YFxuICB9XG5cbiAgaWYgKGFkbWluVGh1bWJuYWlsIHx8IGlzSW1hZ2UobWltZVR5cGUgYXMgc3RyaW5nKSkge1xuICAgIGlmICh0eXBlb2YgYWRtaW5UaHVtYm5haWwgPT09ICd1bmRlZmluZWQnICYmIHVybCkge1xuICAgICAgcmV0dXJuIHVybCBhcyBzdHJpbmdcbiAgICB9XG5cbiAgICBpZiAoc2l6ZXM/LlthZG1pblRodW1ibmFpbF0/LnVybCkge1xuICAgICAgcmV0dXJuIHNpemVzW2FkbWluVGh1bWJuYWlsXS51cmxcbiAgICB9XG5cbiAgICBpZiAoc2l6ZXM/LlthZG1pblRodW1ibmFpbF0/LmZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gYCR7cGF0aFVSTH0vJHtzaXplc1thZG1pblRodW1ibmFpbF0uZmlsZW5hbWV9YFxuICAgIH1cblxuICAgIGlmICh1cmwpIHtcbiAgICAgIHJldHVybiB1cmwgYXMgc3RyaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3BhdGhVUkx9LyR7ZmlsZW5hbWV9YFxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRodW1ibmFpbFxuIl0sIm5hbWVzIjpbImFic29sdXRlVVJMUGF0dGVybiIsIlJlZ0V4cCIsImJhc2U2NFBhdHRlcm4iLCJ1c2VUaHVtYm5haWwiLCJjb2xsZWN0aW9uIiwiZG9jIiwidXBsb2FkIiwiYWRtaW5UaHVtYm5haWwiLCJzdGF0aWNVUkwiLCJmaWxlbmFtZSIsIm1pbWVUeXBlIiwic2l6ZXMiLCJ1cmwiLCJzZXJ2ZXJVUkwiLCJ1c2VDb25maWciLCJwYXRoVVJMIiwidGVzdCIsInRodW1ibmFpbFVSTCIsImlzSW1hZ2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTREQTs7O2VBQUE7OztnRUExRG9CO3dCQUNNOzs7Ozs7QUFFMUIsTUFBTUEscUJBQXFCLElBQUlDLE9BQU8sbUJBQW1CO0FBQ3pELE1BQU1DLGdCQUFnQixJQUFJRCxPQUFPO0FBRWpDLE1BQU1FLGVBQWUsQ0FDbkJDLFlBQ0FDO0lBRUEsTUFBTSxFQUNKQyxRQUFRLEVBQUVDLGNBQWMsRUFBRUMsU0FBUyxFQUFFLEVBQ3RDLEdBQUdKO0lBRUosTUFBTSxFQUFFSyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUUsR0FBR1A7SUFFM0MsTUFBTSxFQUFFUSxTQUFTLEVBQUUsR0FBR0MsSUFBQUEsaUJBQVM7SUFDL0IsSUFBSUMsVUFBVSxDQUFDLEVBQUVGLFVBQVUsRUFBRUwsYUFBYSxHQUFHLENBQUM7SUFFOUMsSUFBSVIsbUJBQW1CZ0IsSUFBSSxDQUFDUixZQUFZO1FBQ3RDTyxVQUFVUDtJQUNaO0lBRUEsSUFBSSxPQUFPRCxtQkFBbUIsWUFBWTtRQUN4QyxNQUFNVSxlQUFlVixlQUFlO1lBQUVGO1FBQUk7UUFFMUMsSUFBSSxDQUFDWSxjQUFjLE9BQU87UUFFMUIsSUFBSWpCLG1CQUFtQmdCLElBQUksQ0FBQ0MsaUJBQWlCZixjQUFjYyxJQUFJLENBQUNDLGVBQWU7WUFDN0UsT0FBT0E7UUFDVDtRQUVBLE9BQU8sQ0FBQyxFQUFFRixRQUFRLENBQUMsRUFBRUUsYUFBYSxDQUFDO0lBQ3JDO0lBRUEsSUFBSVYsa0JBQWtCVyxJQUFBQSxnQkFBTyxFQUFDUixXQUFxQjtRQUNqRCxJQUFJLE9BQU9ILG1CQUFtQixlQUFlSyxLQUFLO1lBQ2hELE9BQU9BO1FBQ1Q7UUFFQSxJQUFJRCxPQUFPLENBQUNKLGVBQWUsRUFBRUssS0FBSztZQUNoQyxPQUFPRCxLQUFLLENBQUNKLGVBQWUsQ0FBQ0ssR0FBRztRQUNsQztRQUVBLElBQUlELE9BQU8sQ0FBQ0osZUFBZSxFQUFFRSxVQUFVO1lBQ3JDLE9BQU8sQ0FBQyxFQUFFTSxRQUFRLENBQUMsRUFBRUosS0FBSyxDQUFDSixlQUFlLENBQUNFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZEO1FBRUEsSUFBSUcsS0FBSztZQUNQLE9BQU9BO1FBQ1Q7UUFFQSxPQUFPLENBQUMsRUFBRUcsUUFBUSxDQUFDLEVBQUVOLFNBQVMsQ0FBQztJQUNqQztJQUVBLE9BQU87QUFDVDtNQUVBLFdBQWVOIn0=