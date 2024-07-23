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
const _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
const _getTranslation = require("../../utilities/getTranslation");
const _update = /*#__PURE__*/ _interop_require_default(require("../operations/update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function updateHandler(req, res, next) {
    try {
        const draft = req.query.draft === 'true';
        const result = await (0, _update.default)({
            collection: req.collection,
            data: req.body,
            depth: parseInt(String(req.query.depth), 10),
            draft,
            req,
            where: req.query.where
        });
        if (result.errors.length === 0) {
            const message = req.t('general:updatedCountSuccessfully', {
                count: result.docs.length,
                label: (0, _getTranslation.getTranslation)(req.collection.config.labels[result.docs.length > 1 ? 'plural' : 'singular'], req.i18n)
            });
            res.status(_httpstatus.default.OK).json({
                ...(0, _formatSuccess.default)(message, 'message'),
                ...result
            });
            return;
        }
        const total = result.docs.length + result.errors.length;
        const message = req.t('error:unableToUpdateCount', {
            count: result.errors.length,
            label: (0, _getTranslation.getTranslation)(req.collection.config.labels[total > 1 ? 'plural' : 'singular'], req.i18n),
            total
        });
        res.status(_httpstatus.default.BAD_REQUEST).json({
            ...(0, _formatSuccess.default)(message, 'message'),
            ...result
        });
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgRG9jdW1lbnQsIFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCBmb3JtYXRTdWNjZXNzUmVzcG9uc2UgZnJvbSAnLi4vLi4vZXhwcmVzcy9yZXNwb25zZXMvZm9ybWF0U3VjY2VzcydcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuLi9vcGVyYXRpb25zL3VwZGF0ZSdcblxuZXhwb3J0IHR5cGUgVXBkYXRlUmVzdWx0ID0ge1xuICBkb2M6IERvY3VtZW50XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPFJlc3BvbnNlPFVwZGF0ZVJlc3VsdD4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZHJhZnQgPSByZXEucXVlcnkuZHJhZnQgPT09ICd0cnVlJ1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlKHtcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgZGF0YTogcmVxLmJvZHksXG4gICAgICBkZXB0aDogcGFyc2VJbnQoU3RyaW5nKHJlcS5xdWVyeS5kZXB0aCksIDEwKSxcbiAgICAgIGRyYWZ0LFxuICAgICAgcmVxLFxuICAgICAgd2hlcmU6IHJlcS5xdWVyeS53aGVyZSBhcyBXaGVyZSxcbiAgICB9KVxuXG4gICAgaWYgKHJlc3VsdC5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gcmVxLnQoJ2dlbmVyYWw6dXBkYXRlZENvdW50U3VjY2Vzc2Z1bGx5Jywge1xuICAgICAgICBjb3VudDogcmVzdWx0LmRvY3MubGVuZ3RoLFxuICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oXG4gICAgICAgICAgcmVxLmNvbGxlY3Rpb24uY29uZmlnLmxhYmVsc1tyZXN1bHQuZG9jcy5sZW5ndGggPiAxID8gJ3BsdXJhbCcgOiAnc2luZ3VsYXInXSxcbiAgICAgICAgICByZXEuaTE4bixcbiAgICAgICAgKSxcbiAgICAgIH0pXG5cbiAgICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbih7XG4gICAgICAgIC4uLmZvcm1hdFN1Y2Nlc3NSZXNwb25zZShtZXNzYWdlLCAnbWVzc2FnZScpLFxuICAgICAgICAuLi5yZXN1bHQsXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG90YWwgPSByZXN1bHQuZG9jcy5sZW5ndGggKyByZXN1bHQuZXJyb3JzLmxlbmd0aFxuICAgIGNvbnN0IG1lc3NhZ2UgPSByZXEudCgnZXJyb3I6dW5hYmxlVG9VcGRhdGVDb3VudCcsIHtcbiAgICAgIGNvdW50OiByZXN1bHQuZXJyb3JzLmxlbmd0aCxcbiAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihcbiAgICAgICAgcmVxLmNvbGxlY3Rpb24uY29uZmlnLmxhYmVsc1t0b3RhbCA+IDEgPyAncGx1cmFsJyA6ICdzaW5ndWxhciddLFxuICAgICAgICByZXEuaTE4bixcbiAgICAgICksXG4gICAgICB0b3RhbCxcbiAgICB9KVxuXG4gICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHtcbiAgICAgIC4uLmZvcm1hdFN1Y2Nlc3NSZXNwb25zZShtZXNzYWdlLCAnbWVzc2FnZScpLFxuICAgICAgLi4ucmVzdWx0LFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcilcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVwZGF0ZUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZHJhZnQiLCJxdWVyeSIsInJlc3VsdCIsInVwZGF0ZSIsImNvbGxlY3Rpb24iLCJkYXRhIiwiYm9keSIsImRlcHRoIiwicGFyc2VJbnQiLCJTdHJpbmciLCJ3aGVyZSIsImVycm9ycyIsImxlbmd0aCIsIm1lc3NhZ2UiLCJ0IiwiY291bnQiLCJkb2NzIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImNvbmZpZyIsImxhYmVscyIsImkxOG4iLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIiwidG90YWwiLCJCQURfUkVRVUVTVCIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQkE7OztlQUE4QkE7OzttRUFkUDtzRUFLVztnQ0FDSDsrREFDWjs7Ozs7O0FBT0osZUFBZUEsY0FDNUJDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCO0lBRWxCLElBQUk7UUFDRixNQUFNQyxRQUFRSCxJQUFJSSxLQUFLLENBQUNELEtBQUssS0FBSztRQUVsQyxNQUFNRSxTQUFTLE1BQU1DLElBQUFBLGVBQU0sRUFBQztZQUMxQkMsWUFBWVAsSUFBSU8sVUFBVTtZQUMxQkMsTUFBTVIsSUFBSVMsSUFBSTtZQUNkQyxPQUFPQyxTQUFTQyxPQUFPWixJQUFJSSxLQUFLLENBQUNNLEtBQUssR0FBRztZQUN6Q1A7WUFDQUg7WUFDQWEsT0FBT2IsSUFBSUksS0FBSyxDQUFDUyxLQUFLO1FBQ3hCO1FBRUEsSUFBSVIsT0FBT1MsTUFBTSxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUM5QixNQUFNQyxVQUFVaEIsSUFBSWlCLENBQUMsQ0FBQyxvQ0FBb0M7Z0JBQ3hEQyxPQUFPYixPQUFPYyxJQUFJLENBQUNKLE1BQU07Z0JBQ3pCSyxPQUFPQyxJQUFBQSw4QkFBYyxFQUNuQnJCLElBQUlPLFVBQVUsQ0FBQ2UsTUFBTSxDQUFDQyxNQUFNLENBQUNsQixPQUFPYyxJQUFJLENBQUNKLE1BQU0sR0FBRyxJQUFJLFdBQVcsV0FBVyxFQUM1RWYsSUFBSXdCLElBQUk7WUFFWjtZQUVBdkIsSUFBSXdCLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUM7Z0JBQzdCLEdBQUdDLElBQUFBLHNCQUFxQixFQUFDYixTQUFTLFVBQVU7Z0JBQzVDLEdBQUdYLE1BQU07WUFDWDtZQUNBO1FBQ0Y7UUFFQSxNQUFNeUIsUUFBUXpCLE9BQU9jLElBQUksQ0FBQ0osTUFBTSxHQUFHVixPQUFPUyxNQUFNLENBQUNDLE1BQU07UUFDdkQsTUFBTUMsVUFBVWhCLElBQUlpQixDQUFDLENBQUMsNkJBQTZCO1lBQ2pEQyxPQUFPYixPQUFPUyxNQUFNLENBQUNDLE1BQU07WUFDM0JLLE9BQU9DLElBQUFBLDhCQUFjLEVBQ25CckIsSUFBSU8sVUFBVSxDQUFDZSxNQUFNLENBQUNDLE1BQU0sQ0FBQ08sUUFBUSxJQUFJLFdBQVcsV0FBVyxFQUMvRDlCLElBQUl3QixJQUFJO1lBRVZNO1FBQ0Y7UUFFQTdCLElBQUl3QixNQUFNLENBQUNDLG1CQUFVLENBQUNLLFdBQVcsRUFBRUgsSUFBSSxDQUFDO1lBQ3RDLEdBQUdDLElBQUFBLHNCQUFxQixFQUFDYixTQUFTLFVBQVU7WUFDNUMsR0FBR1gsTUFBTTtRQUNYO0lBQ0YsRUFBRSxPQUFPMkIsT0FBTztRQUNkOUIsS0FBSzhCO0lBQ1A7QUFDRiJ9