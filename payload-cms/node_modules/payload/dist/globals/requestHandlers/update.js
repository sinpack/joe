"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _update = /*#__PURE__*/ _interop_require_default(require("../operations/update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function updateHandler(globalConfig) {
    return async function handler(req, res, next) {
        try {
            const { slug } = globalConfig;
            const draft = req.query.draft === 'true';
            const autosave = req.query.autosave === 'true';
            const result = await (0, _update.default)({
                autosave,
                data: req.body,
                depth: Number(req.query.depth),
                draft,
                globalConfig,
                req,
                slug
            });
            let message = req.t('general:updatedSuccessfully');
            if (draft) message = req.t('version:draftSavedSuccessfully');
            if (autosave) message = req.t('version:autosavedSuccessfully');
            res.status(_httpstatus.default.OK).json({
                message,
                result
            });
        } catch (error) {
            next(error);
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy91cGRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB1cGRhdGUgZnJvbSAnLi4vb3BlcmF0aW9ucy91cGRhdGUnXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUdsb2JhbFJlc3VsdCA9IFByb21pc2U8UmVzcG9uc2U8RG9jdW1lbnQ+IHwgdm9pZD5cbmV4cG9ydCB0eXBlIFVwZGF0ZUdsb2JhbFJlc3BvbnNlID0gKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pID0+IFVwZGF0ZUdsb2JhbFJlc3VsdFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVIYW5kbGVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogVXBkYXRlR2xvYmFsUmVzcG9uc2Uge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzbHVnIH0gPSBnbG9iYWxDb25maWdcbiAgICAgIGNvbnN0IGRyYWZ0ID0gcmVxLnF1ZXJ5LmRyYWZ0ID09PSAndHJ1ZSdcbiAgICAgIGNvbnN0IGF1dG9zYXZlID0gcmVxLnF1ZXJ5LmF1dG9zYXZlID09PSAndHJ1ZSdcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlKHtcbiAgICAgICAgYXV0b3NhdmUsXG4gICAgICAgIGRhdGE6IHJlcS5ib2R5LFxuICAgICAgICBkZXB0aDogTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCksXG4gICAgICAgIGRyYWZ0LFxuICAgICAgICBnbG9iYWxDb25maWcsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2x1ZyxcbiAgICAgIH0pXG5cbiAgICAgIGxldCBtZXNzYWdlID0gcmVxLnQoJ2dlbmVyYWw6dXBkYXRlZFN1Y2Nlc3NmdWxseScpXG5cbiAgICAgIGlmIChkcmFmdCkgbWVzc2FnZSA9IHJlcS50KCd2ZXJzaW9uOmRyYWZ0U2F2ZWRTdWNjZXNzZnVsbHknKVxuICAgICAgaWYgKGF1dG9zYXZlKSBtZXNzYWdlID0gcmVxLnQoJ3ZlcnNpb246YXV0b3NhdmVkU3VjY2Vzc2Z1bGx5JylcblxuICAgICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHsgbWVzc2FnZSwgcmVzdWx0IH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5leHQoZXJyb3IpXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsidXBkYXRlSGFuZGxlciIsImdsb2JhbENvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwic2x1ZyIsImRyYWZ0IiwicXVlcnkiLCJhdXRvc2F2ZSIsInJlc3VsdCIsInVwZGF0ZSIsImRhdGEiLCJib2R5IiwiZGVwdGgiLCJOdW1iZXIiLCJtZXNzYWdlIiwidCIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJPSyIsImpzb24iLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWlCQTs7O2VBQXdCQTs7O21FQWZEOytEQU1KOzs7Ozs7QUFTSixTQUFTQSxjQUFjQyxZQUFtQztJQUN2RSxPQUFPLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7UUFDbEYsSUFBSTtZQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdMO1lBQ2pCLE1BQU1NLFFBQVFKLElBQUlLLEtBQUssQ0FBQ0QsS0FBSyxLQUFLO1lBQ2xDLE1BQU1FLFdBQVdOLElBQUlLLEtBQUssQ0FBQ0MsUUFBUSxLQUFLO1lBRXhDLE1BQU1DLFNBQVMsTUFBTUMsSUFBQUEsZUFBTSxFQUFDO2dCQUMxQkY7Z0JBQ0FHLE1BQU1ULElBQUlVLElBQUk7Z0JBQ2RDLE9BQU9DLE9BQU9aLElBQUlLLEtBQUssQ0FBQ00sS0FBSztnQkFDN0JQO2dCQUNBTjtnQkFDQUU7Z0JBQ0FHO1lBQ0Y7WUFFQSxJQUFJVSxVQUFVYixJQUFJYyxDQUFDLENBQUM7WUFFcEIsSUFBSVYsT0FBT1MsVUFBVWIsSUFBSWMsQ0FBQyxDQUFDO1lBQzNCLElBQUlSLFVBQVVPLFVBQVViLElBQUljLENBQUMsQ0FBQztZQUU5QmIsSUFBSWMsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQztnQkFBRUw7Z0JBQVNOO1lBQU87UUFDbkQsRUFBRSxPQUFPWSxPQUFPO1lBQ2RqQixLQUFLaUI7UUFDUDtJQUNGO0FBQ0YifQ==