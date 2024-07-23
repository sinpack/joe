"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return canResizeImage;
    }
});
function canResizeImage(mimeType) {
    return [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/tiff'
    ].indexOf(mimeType) > -1;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2NhblJlc2l6ZUltYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblJlc2l6ZUltYWdlKG1pbWVUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2UvZ2lmJywgJ2ltYWdlL3dlYnAnLCAnaW1hZ2UvdGlmZiddLmluZGV4T2YobWltZVR5cGUpID4gLTFcbn1cbiJdLCJuYW1lcyI6WyJjYW5SZXNpemVJbWFnZSIsIm1pbWVUeXBlIiwiaW5kZXhPZiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBQUE7OztlQUF3QkE7OztBQUFULFNBQVNBLGVBQWVDLFFBQWdCO0lBQ3JELE9BQU87UUFBQztRQUFjO1FBQWE7UUFBYTtRQUFjO0tBQWEsQ0FBQ0MsT0FBTyxDQUFDRCxZQUFZLENBQUM7QUFDbkcifQ==