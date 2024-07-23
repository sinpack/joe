"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionsHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _isNumber = require("../../utilities/isNumber");
const _findVersions = /*#__PURE__*/ _interop_require_default(require("../operations/findVersions"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findVersionsHandler(global) {
    return async function handler(req, res, next) {
        try {
            let page;
            if (typeof req.query.page === 'string') {
                const parsedPage = parseInt(req.query.page, 10);
                if (!Number.isNaN(parsedPage)) {
                    page = parsedPage;
                }
            }
            const options = {
                depth: (0, _isNumber.isNumber)(req.query.depth) ? Number(req.query.depth) : undefined,
                globalConfig: global,
                limit: (0, _isNumber.isNumber)(req.query.limit) ? Number(req.query.limit) : undefined,
                page,
                req,
                sort: req.query.sort,
                where: req.query.where
            };
            const result = await (0, _findVersions.default)(options);
            return res.status(_httpstatus.default.OK).json(result);
        } catch (error) {
            return next(error);
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9maW5kVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGFnaW5hdGVkRG9jcyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaXNOdW1iZXInXG5pbXBvcnQgZmluZFZlcnNpb25zIGZyb20gJy4uL29wZXJhdGlvbnMvZmluZFZlcnNpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kVmVyc2lvbnNIYW5kbGVyKGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBoYW5kbGVyPFQgZXh0ZW5kcyBUeXBlV2l0aElEID0gYW55PihcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlPFBhZ2luYXRlZERvY3M8VD4+IHwgdm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcGFnZVxuXG4gICAgICBpZiAodHlwZW9mIHJlcS5xdWVyeS5wYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBwYXJzZWRQYWdlID0gcGFyc2VJbnQocmVxLnF1ZXJ5LnBhZ2UsIDEwKVxuXG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZFBhZ2UpKSB7XG4gICAgICAgICAgcGFnZSA9IHBhcnNlZFBhZ2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkZXB0aDogaXNOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSA/IE51bWJlcihyZXEucXVlcnkuZGVwdGgpIDogdW5kZWZpbmVkLFxuICAgICAgICBnbG9iYWxDb25maWc6IGdsb2JhbCxcbiAgICAgICAgbGltaXQ6IGlzTnVtYmVyKHJlcS5xdWVyeS5saW1pdCkgPyBOdW1iZXIocmVxLnF1ZXJ5LmxpbWl0KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgcmVxLFxuICAgICAgICBzb3J0OiByZXEucXVlcnkuc29ydCBhcyBzdHJpbmcsXG4gICAgICAgIHdoZXJlOiByZXEucXVlcnkud2hlcmUgYXMgV2hlcmUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbmRWZXJzaW9ucyhvcHRpb25zKVxuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHJlc3VsdClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmluZFZlcnNpb25zSGFuZGxlciIsImdsb2JhbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwicGFnZSIsInF1ZXJ5IiwicGFyc2VkUGFnZSIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJvcHRpb25zIiwiZGVwdGgiLCJpc051bWJlciIsInVuZGVmaW5lZCIsImdsb2JhbENvbmZpZyIsImxpbWl0Iiwic29ydCIsIndoZXJlIiwicmVzdWx0IiwiZmluZFZlcnNpb25zIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBYUE7OztlQUF3QkE7OzttRUFYRDswQkFRRTtxRUFDQTs7Ozs7O0FBRVYsU0FBU0Esb0JBQW9CQyxNQUE2QjtJQUN2RSxPQUFPLGVBQWVDLFFBQ3BCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtRQUVsQixJQUFJO1lBQ0YsSUFBSUM7WUFFSixJQUFJLE9BQU9ILElBQUlJLEtBQUssQ0FBQ0QsSUFBSSxLQUFLLFVBQVU7Z0JBQ3RDLE1BQU1FLGFBQWFDLFNBQVNOLElBQUlJLEtBQUssQ0FBQ0QsSUFBSSxFQUFFO2dCQUU1QyxJQUFJLENBQUNJLE9BQU9DLEtBQUssQ0FBQ0gsYUFBYTtvQkFDN0JGLE9BQU9FO2dCQUNUO1lBQ0Y7WUFFQSxNQUFNSSxVQUFVO2dCQUNkQyxPQUFPQyxJQUFBQSxrQkFBUSxFQUFDWCxJQUFJSSxLQUFLLENBQUNNLEtBQUssSUFBSUgsT0FBT1AsSUFBSUksS0FBSyxDQUFDTSxLQUFLLElBQUlFO2dCQUM3REMsY0FBY2Y7Z0JBQ2RnQixPQUFPSCxJQUFBQSxrQkFBUSxFQUFDWCxJQUFJSSxLQUFLLENBQUNVLEtBQUssSUFBSVAsT0FBT1AsSUFBSUksS0FBSyxDQUFDVSxLQUFLLElBQUlGO2dCQUM3RFQ7Z0JBQ0FIO2dCQUNBZSxNQUFNZixJQUFJSSxLQUFLLENBQUNXLElBQUk7Z0JBQ3BCQyxPQUFPaEIsSUFBSUksS0FBSyxDQUFDWSxLQUFLO1lBQ3hCO1lBRUEsTUFBTUMsU0FBUyxNQUFNQyxJQUFBQSxxQkFBWSxFQUFDVDtZQUVsQyxPQUFPUixJQUFJa0IsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQ0w7UUFDeEMsRUFBRSxPQUFPTSxPQUFPO1lBQ2QsT0FBT3JCLEtBQUtxQjtRQUNkO0lBQ0Y7QUFDRiJ9