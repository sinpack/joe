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
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const errorHandler = async (payload, err, debug, afterErrorHook)=>{
    const status = err.originalError.status || _httpstatus.default.INTERNAL_SERVER_ERROR;
    let errorMessage = err.message;
    payload.logger.error(err.stack);
    // Internal server errors can contain anything, including potentially sensitive data.
    // Therefore, error details will be hidden from the response unless `config.debug` is `true`
    if (!debug && status === _httpstatus.default.INTERNAL_SERVER_ERROR) {
        errorMessage = 'Something went wrong.';
    }
    let response = {
        extensions: {
            name: err?.originalError?.name || undefined,
            data: err && err.originalError && err.originalError.data || undefined,
            stack: debug ? err.stack : undefined,
            statusCode: status
        },
        locations: err.locations,
        message: errorMessage,
        path: err.path
    };
    if (afterErrorHook) {
        ({ response } = await afterErrorHook(err, response, null, null) || {
            response
        });
    }
    return response;
};
const _default = errorHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2Vycm9ySGFuZGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IEFmdGVyRXJyb3JIb29rIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vcGF5bG9hZCdcblxuY29uc3QgZXJyb3JIYW5kbGVyID0gYXN5bmMgKFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBlcnI6IGFueSxcbiAgZGVidWc6IGJvb2xlYW4sXG4gIGFmdGVyRXJyb3JIb29rOiBBZnRlckVycm9ySG9vayxcbik6IFByb21pc2U8R3JhcGhRTEZvcm1hdHRlZEVycm9yPiA9PiB7XG4gIGNvbnN0IHN0YXR1cyA9IGVyci5vcmlnaW5hbEVycm9yLnN0YXR1cyB8fCBodHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUlxuICBsZXQgZXJyb3JNZXNzYWdlID0gZXJyLm1lc3NhZ2VcblxuICBwYXlsb2FkLmxvZ2dlci5lcnJvcihlcnIuc3RhY2spXG5cbiAgLy8gSW50ZXJuYWwgc2VydmVyIGVycm9ycyBjYW4gY29udGFpbiBhbnl0aGluZywgaW5jbHVkaW5nIHBvdGVudGlhbGx5IHNlbnNpdGl2ZSBkYXRhLlxuICAvLyBUaGVyZWZvcmUsIGVycm9yIGRldGFpbHMgd2lsbCBiZSBoaWRkZW4gZnJvbSB0aGUgcmVzcG9uc2UgdW5sZXNzIGBjb25maWcuZGVidWdgIGlzIGB0cnVlYFxuICBpZiAoIWRlYnVnICYmIHN0YXR1cyA9PT0gaHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpIHtcbiAgICBlcnJvck1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuJ1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgPSB7XG4gICAgZXh0ZW5zaW9uczoge1xuICAgICAgbmFtZTogZXJyPy5vcmlnaW5hbEVycm9yPy5uYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IChlcnIgJiYgZXJyLm9yaWdpbmFsRXJyb3IgJiYgZXJyLm9yaWdpbmFsRXJyb3IuZGF0YSkgfHwgdW5kZWZpbmVkLFxuICAgICAgc3RhY2s6IGRlYnVnID8gZXJyLnN0YWNrIDogdW5kZWZpbmVkLFxuICAgICAgc3RhdHVzQ29kZTogc3RhdHVzLFxuICAgIH0sXG4gICAgbG9jYXRpb25zOiBlcnIubG9jYXRpb25zLFxuICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICBwYXRoOiBlcnIucGF0aCxcbiAgfVxuXG4gIGlmIChhZnRlckVycm9ySG9vaykge1xuICAgIDsoeyByZXNwb25zZSB9ID0gKGF3YWl0IGFmdGVyRXJyb3JIb29rKGVyciwgcmVzcG9uc2UsIG51bGwsIG51bGwpKSB8fCB7IHJlc3BvbnNlIH0pXG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5kbGVyXG4iXSwibmFtZXMiOlsiZXJyb3JIYW5kbGVyIiwicGF5bG9hZCIsImVyciIsImRlYnVnIiwiYWZ0ZXJFcnJvckhvb2siLCJzdGF0dXMiLCJvcmlnaW5hbEVycm9yIiwiaHR0cFN0YXR1cyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJsb2dnZXIiLCJlcnJvciIsInN0YWNrIiwicmVzcG9uc2UiLCJleHRlbnNpb25zIiwibmFtZSIsInVuZGVmaW5lZCIsImRhdGEiLCJzdGF0dXNDb2RlIiwibG9jYXRpb25zIiwicGF0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTJDQTs7O2VBQUE7OzttRUF6Q3VCOzs7Ozs7QUFLdkIsTUFBTUEsZUFBZSxPQUNuQkMsU0FDQUMsS0FDQUMsT0FDQUM7SUFFQSxNQUFNQyxTQUFTSCxJQUFJSSxhQUFhLENBQUNELE1BQU0sSUFBSUUsbUJBQVUsQ0FBQ0MscUJBQXFCO0lBQzNFLElBQUlDLGVBQWVQLElBQUlRLE9BQU87SUFFOUJULFFBQVFVLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDVixJQUFJVyxLQUFLO0lBRTlCLHFGQUFxRjtJQUNyRiw0RkFBNEY7SUFDNUYsSUFBSSxDQUFDVixTQUFTRSxXQUFXRSxtQkFBVSxDQUFDQyxxQkFBcUIsRUFBRTtRQUN6REMsZUFBZTtJQUNqQjtJQUVBLElBQUlLLFdBQWtDO1FBQ3BDQyxZQUFZO1lBQ1ZDLE1BQU1kLEtBQUtJLGVBQWVVLFFBQVFDO1lBQ2xDQyxNQUFNLEFBQUNoQixPQUFPQSxJQUFJSSxhQUFhLElBQUlKLElBQUlJLGFBQWEsQ0FBQ1ksSUFBSSxJQUFLRDtZQUM5REosT0FBT1YsUUFBUUQsSUFBSVcsS0FBSyxHQUFHSTtZQUMzQkUsWUFBWWQ7UUFDZDtRQUNBZSxXQUFXbEIsSUFBSWtCLFNBQVM7UUFDeEJWLFNBQVNEO1FBQ1RZLE1BQU1uQixJQUFJbUIsSUFBSTtJQUNoQjtJQUVBLElBQUlqQixnQkFBZ0I7UUFDaEIsQ0FBQSxFQUFFVSxRQUFRLEVBQUUsR0FBRyxBQUFDLE1BQU1WLGVBQWVGLEtBQUtZLFVBQVUsTUFBTSxTQUFVO1lBQUVBO1FBQVMsQ0FBQTtJQUNuRjtJQUVBLE9BQU9BO0FBQ1Q7TUFFQSxXQUFlZCJ9