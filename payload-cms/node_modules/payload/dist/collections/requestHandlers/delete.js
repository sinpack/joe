"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return deleteHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
const _getTranslation = require("../../utilities/getTranslation");
const _delete = /*#__PURE__*/ _interop_require_default(require("../operations/delete"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function deleteHandler(req, res, next) {
    try {
        const result = await (0, _delete.default)({
            collection: req.collection,
            depth: parseInt(String(req.query.depth), 10),
            req,
            where: req.query.where
        });
        if (result.errors.length === 0) {
            const message = req.t('general:deletedCountSuccessfully', {
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
        const message = req.t('error:unableToDeleteCount', {
            count: result.errors.length,
            label: (0, _getTranslation.getTranslation)(req.collection.config.labels[total > 1 ? 'plural' : 'singular'], req.i18n),
            total
        });
        res.status(_httpstatus.default.BAD_REQUEST).json({
            message,
            ...result
        });
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZGVsZXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgRG9jdW1lbnQsIFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCBmb3JtYXRTdWNjZXNzUmVzcG9uc2UgZnJvbSAnLi4vLi4vZXhwcmVzcy9yZXNwb25zZXMvZm9ybWF0U3VjY2VzcydcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IGRlbGV0ZU9wZXJhdGlvbiBmcm9tICcuLi9vcGVyYXRpb25zL2RlbGV0ZSdcblxuZXhwb3J0IHR5cGUgRGVsZXRlUmVzdWx0ID0ge1xuICBkb2M6IERvY3VtZW50XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkZWxldGVIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPFJlc3BvbnNlPERlbGV0ZVJlc3VsdD4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlT3BlcmF0aW9uKHtcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgZGVwdGg6IHBhcnNlSW50KFN0cmluZyhyZXEucXVlcnkuZGVwdGgpLCAxMCksXG4gICAgICByZXEsXG4gICAgICB3aGVyZTogcmVxLnF1ZXJ5LndoZXJlIGFzIFdoZXJlLFxuICAgIH0pXG5cbiAgICBpZiAocmVzdWx0LmVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXEudCgnZ2VuZXJhbDpkZWxldGVkQ291bnRTdWNjZXNzZnVsbHknLCB7XG4gICAgICAgIGNvdW50OiByZXN1bHQuZG9jcy5sZW5ndGgsXG4gICAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihcbiAgICAgICAgICByZXEuY29sbGVjdGlvbi5jb25maWcubGFiZWxzW3Jlc3VsdC5kb2NzLmxlbmd0aCA+IDEgPyAncGx1cmFsJyA6ICdzaW5ndWxhciddLFxuICAgICAgICAgIHJlcS5pMThuLFxuICAgICAgICApLFxuICAgICAgfSlcblxuICAgICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHtcbiAgICAgICAgLi4uZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlKG1lc3NhZ2UsICdtZXNzYWdlJyksXG4gICAgICAgIC4uLnJlc3VsdCxcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbCA9IHJlc3VsdC5kb2NzLmxlbmd0aCArIHJlc3VsdC5lcnJvcnMubGVuZ3RoXG4gICAgY29uc3QgbWVzc2FnZSA9IHJlcS50KCdlcnJvcjp1bmFibGVUb0RlbGV0ZUNvdW50Jywge1xuICAgICAgY291bnQ6IHJlc3VsdC5lcnJvcnMubGVuZ3RoLFxuICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKFxuICAgICAgICByZXEuY29sbGVjdGlvbi5jb25maWcubGFiZWxzW3RvdGFsID4gMSA/ICdwbHVyYWwnIDogJ3Npbmd1bGFyJ10sXG4gICAgICAgIHJlcS5pMThuLFxuICAgICAgKSxcbiAgICAgIHRvdGFsLFxuICAgIH0pXG5cbiAgICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIC4uLnJlc3VsdCxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkZWxldGVIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInJlc3VsdCIsImRlbGV0ZU9wZXJhdGlvbiIsImNvbGxlY3Rpb24iLCJkZXB0aCIsInBhcnNlSW50IiwiU3RyaW5nIiwicXVlcnkiLCJ3aGVyZSIsImVycm9ycyIsImxlbmd0aCIsIm1lc3NhZ2UiLCJ0IiwiY291bnQiLCJkb2NzIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImNvbmZpZyIsImxhYmVscyIsImkxOG4iLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIiwidG90YWwiLCJCQURfUkVRVUVTVCIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQkE7OztlQUE4QkE7OzttRUFkUDtzRUFLVztnQ0FDSDsrREFDSDs7Ozs7O0FBT2IsZUFBZUEsY0FDNUJDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCO0lBRWxCLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1DLElBQUFBLGVBQWUsRUFBQztZQUNuQ0MsWUFBWUwsSUFBSUssVUFBVTtZQUMxQkMsT0FBT0MsU0FBU0MsT0FBT1IsSUFBSVMsS0FBSyxDQUFDSCxLQUFLLEdBQUc7WUFDekNOO1lBQ0FVLE9BQU9WLElBQUlTLEtBQUssQ0FBQ0MsS0FBSztRQUN4QjtRQUVBLElBQUlQLE9BQU9RLE1BQU0sQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7WUFDOUIsTUFBTUMsVUFBVWIsSUFBSWMsQ0FBQyxDQUFDLG9DQUFvQztnQkFDeERDLE9BQU9aLE9BQU9hLElBQUksQ0FBQ0osTUFBTTtnQkFDekJLLE9BQU9DLElBQUFBLDhCQUFjLEVBQ25CbEIsSUFBSUssVUFBVSxDQUFDYyxNQUFNLENBQUNDLE1BQU0sQ0FBQ2pCLE9BQU9hLElBQUksQ0FBQ0osTUFBTSxHQUFHLElBQUksV0FBVyxXQUFXLEVBQzVFWixJQUFJcUIsSUFBSTtZQUVaO1lBRUFwQixJQUFJcUIsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQztnQkFDN0IsR0FBR0MsSUFBQUEsc0JBQXFCLEVBQUNiLFNBQVMsVUFBVTtnQkFDNUMsR0FBR1YsTUFBTTtZQUNYO1lBQ0E7UUFDRjtRQUVBLE1BQU13QixRQUFReEIsT0FBT2EsSUFBSSxDQUFDSixNQUFNLEdBQUdULE9BQU9RLE1BQU0sQ0FBQ0MsTUFBTTtRQUN2RCxNQUFNQyxVQUFVYixJQUFJYyxDQUFDLENBQUMsNkJBQTZCO1lBQ2pEQyxPQUFPWixPQUFPUSxNQUFNLENBQUNDLE1BQU07WUFDM0JLLE9BQU9DLElBQUFBLDhCQUFjLEVBQ25CbEIsSUFBSUssVUFBVSxDQUFDYyxNQUFNLENBQUNDLE1BQU0sQ0FBQ08sUUFBUSxJQUFJLFdBQVcsV0FBVyxFQUMvRDNCLElBQUlxQixJQUFJO1lBRVZNO1FBQ0Y7UUFFQTFCLElBQUlxQixNQUFNLENBQUNDLG1CQUFVLENBQUNLLFdBQVcsRUFBRUgsSUFBSSxDQUFDO1lBQ3RDWjtZQUNBLEdBQUdWLE1BQU07UUFDWDtJQUNGLEVBQUUsT0FBTzBCLE9BQU87UUFDZDNCLEtBQUsyQjtJQUNQO0FBQ0YifQ==