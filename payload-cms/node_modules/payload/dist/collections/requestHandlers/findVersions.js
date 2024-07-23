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
async function findVersionsHandler(req, res, next) {
    try {
        let page;
        if (typeof req.query.page === 'string') {
            const parsedPage = parseInt(req.query.page, 10);
            if (!Number.isNaN(parsedPage)) {
                page = parsedPage;
            }
        }
        const options = {
            collection: req.collection,
            depth: (0, _isNumber.isNumber)(req.query.depth) ? Number(req.query.depth) : undefined,
            limit: (0, _isNumber.isNumber)(req.query.limit) ? Number(req.query.limit) : undefined,
            page,
            payload: req.payload,
            req,
            sort: req.query.sort,
            where: req.query.where
        };
        const result = await (0, _findVersions.default)(options);
        return res.status(_httpstatus.default.OK).json(result);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBUeXBlV2l0aElEIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pc051bWJlcidcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRWZXJzaW9uc0hhbmRsZXI8VCBleHRlbmRzIFR5cGVXaXRoSUQgPSBhbnk+KFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPFJlc3BvbnNlPFBhZ2luYXRlZERvY3M8VD4+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGxldCBwYWdlOiBudW1iZXIgfCB1bmRlZmluZWRcblxuICAgIGlmICh0eXBlb2YgcmVxLnF1ZXJ5LnBhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBwYXJzZWRQYWdlID0gcGFyc2VJbnQocmVxLnF1ZXJ5LnBhZ2UsIDEwKVxuXG4gICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWRQYWdlKSkge1xuICAgICAgICBwYWdlID0gcGFyc2VkUGFnZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIGRlcHRoOiBpc051bWJlcihyZXEucXVlcnkuZGVwdGgpID8gTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCkgOiB1bmRlZmluZWQsXG4gICAgICBsaW1pdDogaXNOdW1iZXIocmVxLnF1ZXJ5LmxpbWl0KSA/IE51bWJlcihyZXEucXVlcnkubGltaXQpIDogdW5kZWZpbmVkLFxuICAgICAgcGFnZSxcbiAgICAgIHBheWxvYWQ6IHJlcS5wYXlsb2FkLFxuICAgICAgcmVxLFxuICAgICAgc29ydDogcmVxLnF1ZXJ5LnNvcnQgYXMgc3RyaW5nLFxuICAgICAgd2hlcmU6IHJlcS5xdWVyeS53aGVyZSBhcyBXaGVyZSwgLy8gVGhpcyBpcyBhIGxpdHRsZSBzaGFkeSxcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kVmVyc2lvbnMob3B0aW9ucylcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24ocmVzdWx0KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmluZFZlcnNpb25zSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJwYWdlIiwicXVlcnkiLCJwYXJzZWRQYWdlIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsIm9wdGlvbnMiLCJjb2xsZWN0aW9uIiwiZGVwdGgiLCJpc051bWJlciIsInVuZGVmaW5lZCIsImxpbWl0IiwicGF5bG9hZCIsInNvcnQiLCJ3aGVyZSIsInJlc3VsdCIsImZpbmRWZXJzaW9ucyIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJPSyIsImpzb24iLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBWUE7OztlQUE4QkE7OzttRUFWUDswQkFPRTtxRUFDQTs7Ozs7O0FBRVYsZUFBZUEsb0JBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixJQUFJO1FBQ0YsSUFBSUM7UUFFSixJQUFJLE9BQU9ILElBQUlJLEtBQUssQ0FBQ0QsSUFBSSxLQUFLLFVBQVU7WUFDdEMsTUFBTUUsYUFBYUMsU0FBU04sSUFBSUksS0FBSyxDQUFDRCxJQUFJLEVBQUU7WUFFNUMsSUFBSSxDQUFDSSxPQUFPQyxLQUFLLENBQUNILGFBQWE7Z0JBQzdCRixPQUFPRTtZQUNUO1FBQ0Y7UUFFQSxNQUFNSSxVQUFVO1lBQ2RDLFlBQVlWLElBQUlVLFVBQVU7WUFDMUJDLE9BQU9DLElBQUFBLGtCQUFRLEVBQUNaLElBQUlJLEtBQUssQ0FBQ08sS0FBSyxJQUFJSixPQUFPUCxJQUFJSSxLQUFLLENBQUNPLEtBQUssSUFBSUU7WUFDN0RDLE9BQU9GLElBQUFBLGtCQUFRLEVBQUNaLElBQUlJLEtBQUssQ0FBQ1UsS0FBSyxJQUFJUCxPQUFPUCxJQUFJSSxLQUFLLENBQUNVLEtBQUssSUFBSUQ7WUFDN0RWO1lBQ0FZLFNBQVNmLElBQUllLE9BQU87WUFDcEJmO1lBQ0FnQixNQUFNaEIsSUFBSUksS0FBSyxDQUFDWSxJQUFJO1lBQ3BCQyxPQUFPakIsSUFBSUksS0FBSyxDQUFDYSxLQUFLO1FBQ3hCO1FBRUEsTUFBTUMsU0FBUyxNQUFNQyxJQUFBQSxxQkFBWSxFQUFDVjtRQUVsQyxPQUFPUixJQUFJbUIsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQ0w7SUFDeEMsRUFBRSxPQUFPTSxPQUFPO1FBQ2QsT0FBT3RCLEtBQUtzQjtJQUNkO0FBQ0YifQ==