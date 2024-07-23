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
const _APIError = /*#__PURE__*/ _interop_require_default(require("../../errors/APIError"));
const _formatError = /*#__PURE__*/ _interop_require_default(require("../responses/formatError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// NextFunction must be passed for Express to use this middleware as error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (config, logger)=>async (err, req, res, next)=>{
        let response = (0, _formatError.default)(err);
        let status = err.status || _httpstatus.default.INTERNAL_SERVER_ERROR;
        logger.error(err.stack);
        // Internal server errors can contain anything, including potentially sensitive data.
        // Therefore, error details will be hidden from the response unless `config.debug` is `true`
        if (!config.debug && status === _httpstatus.default.INTERNAL_SERVER_ERROR) {
            response = (0, _formatError.default)(new _APIError.default('Something went wrong.'));
        }
        if (config.debug && config.debug === true) {
            response.stack = err.stack;
        }
        if (req.collection && typeof req.collection.config.hooks.afterError === 'function') {
            ({ response, status } = await req.collection.config.hooks.afterError(err, response, req.context, req.collection.config) || {
                response,
                status
            });
        }
        if (typeof config.hooks.afterError === 'function') {
            ({ response, status } = await config.hooks.afterError(err, response, req.context, null) || {
                response,
                status
            });
        }
        res.status(status).send(response);
    };
const _default = errorHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvZXJyb3JIYW5kbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgdHlwZSB7IExvZ2dlciB9IGZyb20gJ3Bpbm8nXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRXJyb3JSZXNwb25zZSB9IGZyb20gJy4uL3Jlc3BvbnNlcy9mb3JtYXRFcnJvcidcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4uLy4uL2Vycm9ycy9BUElFcnJvcidcbmltcG9ydCBmb3JtYXRFcnJvclJlc3BvbnNlIGZyb20gJy4uL3Jlc3BvbnNlcy9mb3JtYXRFcnJvcidcblxuZXhwb3J0IHR5cGUgRXJyb3JIYW5kbGVyID0gKFxuICBlcnI6IEFQSUVycm9yLFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pID0+IFByb21pc2U8UmVzcG9uc2U8RXJyb3JSZXNwb25zZT4gfCB2b2lkPlxuXG4vLyBOZXh0RnVuY3Rpb24gbXVzdCBiZSBwYXNzZWQgZm9yIEV4cHJlc3MgdG8gdXNlIHRoaXMgbWlkZGxld2FyZSBhcyBlcnJvciBoYW5kbGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBlcnJvckhhbmRsZXIgPVxuICAoY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGxvZ2dlcjogTG9nZ2VyKSA9PlxuICBhc3luYyAoXG4gICAgZXJyOiBBUElFcnJvcixcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlPEVycm9yUmVzcG9uc2U+IHwgdm9pZD4gPT4ge1xuICAgIGxldCByZXNwb25zZSA9IGZvcm1hdEVycm9yUmVzcG9uc2UoZXJyKVxuICAgIGxldCBzdGF0dXMgPSBlcnIuc3RhdHVzIHx8IGh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SXG5cbiAgICBsb2dnZXIuZXJyb3IoZXJyLnN0YWNrKVxuXG4gICAgLy8gSW50ZXJuYWwgc2VydmVyIGVycm9ycyBjYW4gY29udGFpbiBhbnl0aGluZywgaW5jbHVkaW5nIHBvdGVudGlhbGx5IHNlbnNpdGl2ZSBkYXRhLlxuICAgIC8vIFRoZXJlZm9yZSwgZXJyb3IgZGV0YWlscyB3aWxsIGJlIGhpZGRlbiBmcm9tIHRoZSByZXNwb25zZSB1bmxlc3MgYGNvbmZpZy5kZWJ1Z2AgaXMgYHRydWVgXG4gICAgaWYgKCFjb25maWcuZGVidWcgJiYgc3RhdHVzID09PSBodHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikge1xuICAgICAgcmVzcG9uc2UgPSBmb3JtYXRFcnJvclJlc3BvbnNlKG5ldyBBUElFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcuJykpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kZWJ1ZyAmJiBjb25maWcuZGVidWcgPT09IHRydWUpIHtcbiAgICAgIHJlc3BvbnNlLnN0YWNrID0gZXJyLnN0YWNrXG4gICAgfVxuXG4gICAgaWYgKHJlcS5jb2xsZWN0aW9uICYmIHR5cGVvZiByZXEuY29sbGVjdGlvbi5jb25maWcuaG9va3MuYWZ0ZXJFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgOyh7IHJlc3BvbnNlLCBzdGF0dXMgfSA9IChhd2FpdCByZXEuY29sbGVjdGlvbi5jb25maWcuaG9va3MuYWZ0ZXJFcnJvcihcbiAgICAgICAgZXJyLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgcmVxLmNvbnRleHQsXG4gICAgICAgIHJlcS5jb2xsZWN0aW9uLmNvbmZpZyxcbiAgICAgICkpIHx8IHsgcmVzcG9uc2UsIHN0YXR1cyB9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmhvb2tzLmFmdGVyRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIDsoeyByZXNwb25zZSwgc3RhdHVzIH0gPSAoYXdhaXQgY29uZmlnLmhvb2tzLmFmdGVyRXJyb3IoXG4gICAgICAgIGVycixcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIHJlcS5jb250ZXh0LFxuICAgICAgICBudWxsLFxuICAgICAgKSkgfHwge1xuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKHN0YXR1cykuc2VuZChyZXNwb25zZSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsZXJcbiJdLCJuYW1lcyI6WyJlcnJvckhhbmRsZXIiLCJjb25maWciLCJsb2dnZXIiLCJlcnIiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVzcG9uc2UiLCJmb3JtYXRFcnJvclJlc3BvbnNlIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVycm9yIiwic3RhY2siLCJkZWJ1ZyIsIkFQSUVycm9yIiwiY29sbGVjdGlvbiIsImhvb2tzIiwiYWZ0ZXJFcnJvciIsImNvbnRleHQiLCJzZW5kIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0VBOzs7ZUFBQTs7O21FQWpFdUI7aUVBTUY7b0VBQ1c7Ozs7OztBQVNoQyxrRkFBa0Y7QUFDbEYsNkRBQTZEO0FBQzdELE1BQU1BLGVBQ0osQ0FBQ0MsUUFBeUJDLFNBQzFCLE9BQ0VDLEtBQ0FDLEtBQ0FDLEtBQ0FDO1FBRUEsSUFBSUMsV0FBV0MsSUFBQUEsb0JBQW1CLEVBQUNMO1FBQ25DLElBQUlNLFNBQVNOLElBQUlNLE1BQU0sSUFBSUMsbUJBQVUsQ0FBQ0MscUJBQXFCO1FBRTNEVCxPQUFPVSxLQUFLLENBQUNULElBQUlVLEtBQUs7UUFFdEIscUZBQXFGO1FBQ3JGLDRGQUE0RjtRQUM1RixJQUFJLENBQUNaLE9BQU9hLEtBQUssSUFBSUwsV0FBV0MsbUJBQVUsQ0FBQ0MscUJBQXFCLEVBQUU7WUFDaEVKLFdBQVdDLElBQUFBLG9CQUFtQixFQUFDLElBQUlPLGlCQUFRLENBQUM7UUFDOUM7UUFFQSxJQUFJZCxPQUFPYSxLQUFLLElBQUliLE9BQU9hLEtBQUssS0FBSyxNQUFNO1lBQ3pDUCxTQUFTTSxLQUFLLEdBQUdWLElBQUlVLEtBQUs7UUFDNUI7UUFFQSxJQUFJVCxJQUFJWSxVQUFVLElBQUksT0FBT1osSUFBSVksVUFBVSxDQUFDZixNQUFNLENBQUNnQixLQUFLLENBQUNDLFVBQVUsS0FBSyxZQUFZO1lBQ2hGLENBQUEsRUFBRVgsUUFBUSxFQUFFRSxNQUFNLEVBQUUsR0FBRyxBQUFDLE1BQU1MLElBQUlZLFVBQVUsQ0FBQ2YsTUFBTSxDQUFDZ0IsS0FBSyxDQUFDQyxVQUFVLENBQ3BFZixLQUNBSSxVQUNBSCxJQUFJZSxPQUFPLEVBQ1hmLElBQUlZLFVBQVUsQ0FBQ2YsTUFBTSxLQUNqQjtnQkFBRU07Z0JBQVVFO1lBQU8sQ0FBQTtRQUMzQjtRQUVBLElBQUksT0FBT1IsT0FBT2dCLEtBQUssQ0FBQ0MsVUFBVSxLQUFLLFlBQVk7WUFDL0MsQ0FBQSxFQUFFWCxRQUFRLEVBQUVFLE1BQU0sRUFBRSxHQUFHLEFBQUMsTUFBTVIsT0FBT2dCLEtBQUssQ0FBQ0MsVUFBVSxDQUNyRGYsS0FDQUksVUFDQUgsSUFBSWUsT0FBTyxFQUNYLFNBQ0k7Z0JBQ0paO2dCQUNBRTtZQUNGLENBQUE7UUFDRjtRQUVBSixJQUFJSSxNQUFNLENBQUNBLFFBQVFXLElBQUksQ0FBQ2I7SUFDMUI7TUFFRixXQUFlUCJ9