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
const _APIError = /*#__PURE__*/ _interop_require_default(require("../../errors/APIError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const formatErrorResponse = (incoming)=>{
    if (incoming) {
        if (incoming instanceof _APIError.default && incoming.data) {
            return {
                errors: [
                    {
                        name: incoming.name,
                        data: incoming.data,
                        message: incoming.message
                    }
                ]
            };
        }
        // mongoose
        if (!(incoming instanceof _APIError.default || incoming instanceof Error) && incoming.errors) {
            return {
                errors: Object.keys(incoming.errors).reduce((acc, key)=>{
                    acc.push({
                        field: incoming.errors[key].path,
                        message: incoming.errors[key].message
                    });
                    return acc;
                }, [])
            };
        }
        if (Array.isArray(incoming.message)) {
            return {
                errors: incoming.message
            };
        }
        if (incoming.name) {
            return {
                errors: [
                    {
                        message: incoming.message
                    }
                ]
            };
        }
    }
    return {
        errors: [
            {
                message: 'An unknown error occurred.'
            }
        ]
    };
};
const _default = formatErrorResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi4vLi4vZXJyb3JzL0FQSUVycm9yJ1xuXG5leHBvcnQgdHlwZSBFcnJvclJlc3BvbnNlID0geyBkYXRhPzogYW55OyBlcnJvcnM6IHVua25vd25bXTsgc3RhY2s/OiBzdHJpbmcgfVxuXG5jb25zdCBmb3JtYXRFcnJvclJlc3BvbnNlID0gKFxuICBpbmNvbWluZzogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0gfCBBUElFcnJvciB8IEVycm9yLFxuKTogRXJyb3JSZXNwb25zZSA9PiB7XG4gIGlmIChpbmNvbWluZykge1xuICAgIGlmIChpbmNvbWluZyBpbnN0YW5jZW9mIEFQSUVycm9yICYmIGluY29taW5nLmRhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IGluY29taW5nLm5hbWUsXG4gICAgICAgICAgICBkYXRhOiBpbmNvbWluZy5kYXRhLFxuICAgICAgICAgICAgbWVzc2FnZTogaW5jb21pbmcubWVzc2FnZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vbmdvb3NlXG4gICAgaWYgKCEoaW5jb21pbmcgaW5zdGFuY2VvZiBBUElFcnJvciB8fCBpbmNvbWluZyBpbnN0YW5jZW9mIEVycm9yKSAmJiBpbmNvbWluZy5lcnJvcnMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yczogT2JqZWN0LmtleXMoaW5jb21pbmcuZXJyb3JzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgZmllbGQ6IGluY29taW5nLmVycm9yc1trZXldLnBhdGgsXG4gICAgICAgICAgICBtZXNzYWdlOiBpbmNvbWluZy5lcnJvcnNba2V5XS5tZXNzYWdlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9LCBbXSksXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jb21pbmcubWVzc2FnZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yczogaW5jb21pbmcubWVzc2FnZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5jb21pbmcubmFtZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWVzc2FnZTogaW5jb21pbmcubWVzc2FnZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzOiBbXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicsXG4gICAgICB9LFxuICAgIF0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RXJyb3JSZXNwb25zZVxuIl0sIm5hbWVzIjpbImZvcm1hdEVycm9yUmVzcG9uc2UiLCJpbmNvbWluZyIsIkFQSUVycm9yIiwiZGF0YSIsImVycm9ycyIsIm5hbWUiLCJtZXNzYWdlIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwicHVzaCIsImZpZWxkIiwicGF0aCIsIkFycmF5IiwiaXNBcnJheSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTJEQTs7O2VBQUE7OztpRUEzRHFCOzs7Ozs7QUFJckIsTUFBTUEsc0JBQXNCLENBQzFCQztJQUVBLElBQUlBLFVBQVU7UUFDWixJQUFJQSxvQkFBb0JDLGlCQUFRLElBQUlELFNBQVNFLElBQUksRUFBRTtZQUNqRCxPQUFPO2dCQUNMQyxRQUFRO29CQUNOO3dCQUNFQyxNQUFNSixTQUFTSSxJQUFJO3dCQUNuQkYsTUFBTUYsU0FBU0UsSUFBSTt3QkFDbkJHLFNBQVNMLFNBQVNLLE9BQU87b0JBQzNCO2lCQUNEO1lBQ0g7UUFDRjtRQUVBLFdBQVc7UUFDWCxJQUFJLENBQUVMLENBQUFBLG9CQUFvQkMsaUJBQVEsSUFBSUQsb0JBQW9CTSxLQUFJLEtBQU1OLFNBQVNHLE1BQU0sRUFBRTtZQUNuRixPQUFPO2dCQUNMQSxRQUFRSSxPQUFPQyxJQUFJLENBQUNSLFNBQVNHLE1BQU0sRUFBRU0sTUFBTSxDQUFDLENBQUNDLEtBQUtDO29CQUNoREQsSUFBSUUsSUFBSSxDQUFDO3dCQUNQQyxPQUFPYixTQUFTRyxNQUFNLENBQUNRLElBQUksQ0FBQ0csSUFBSTt3QkFDaENULFNBQVNMLFNBQVNHLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDTixPQUFPO29CQUN2QztvQkFDQSxPQUFPSztnQkFDVCxHQUFHLEVBQUU7WUFDUDtRQUNGO1FBRUEsSUFBSUssTUFBTUMsT0FBTyxDQUFDaEIsU0FBU0ssT0FBTyxHQUFHO1lBQ25DLE9BQU87Z0JBQ0xGLFFBQVFILFNBQVNLLE9BQU87WUFDMUI7UUFDRjtRQUVBLElBQUlMLFNBQVNJLElBQUksRUFBRTtZQUNqQixPQUFPO2dCQUNMRCxRQUFRO29CQUNOO3dCQUNFRSxTQUFTTCxTQUFTSyxPQUFPO29CQUMzQjtpQkFDRDtZQUNIO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTEYsUUFBUTtZQUNOO2dCQUNFRSxTQUFTO1lBQ1g7U0FDRDtJQUNIO0FBQ0Y7TUFFQSxXQUFlTiJ9