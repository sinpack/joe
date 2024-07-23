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
const _delete = /*#__PURE__*/ _interop_require_default(require("../operations/delete"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function deleteHandler(req, res, next) {
    try {
        await (0, _delete.default)({
            key: req.params.key,
            req,
            user: req.user
        });
        return res.status(_httpstatus.default.OK).json({
            ...(0, _formatSuccess.default)(req.t('deletedSuccessfully'), 'message')
        });
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9yZXF1ZXN0SGFuZGxlcnMvZGVsZXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IGZvcm1hdFN1Y2Nlc3NSZXNwb25zZSBmcm9tICcuLi8uLi9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRTdWNjZXNzJ1xuaW1wb3J0IGRlbGV0ZU9wZXJhdGlvbiBmcm9tICcuLi9vcGVyYXRpb25zL2RlbGV0ZSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSGFuZGxlcihcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuKTogUHJvbWlzZTxSZXNwb25zZTx7IG1lc3NhZ2U6IHN0cmluZyB9PiB8IHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBkZWxldGVPcGVyYXRpb24oe1xuICAgICAga2V5OiByZXEucGFyYW1zLmtleSxcbiAgICAgIHJlcSxcbiAgICAgIHVzZXI6IHJlcS51c2VyLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHtcbiAgICAgIC4uLmZvcm1hdFN1Y2Nlc3NSZXNwb25zZShyZXEudCgnZGVsZXRlZFN1Y2Nlc3NmdWxseScpLCAnbWVzc2FnZScpLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkZWxldGVIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImRlbGV0ZU9wZXJhdGlvbiIsImtleSIsInBhcmFtcyIsInVzZXIiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIiwidCIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7OztlQUE4QkE7OzttRUFQUDtzRUFJVzsrREFDTjs7Ozs7O0FBRWIsZUFBZUEsY0FDNUJDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCO0lBRWxCLElBQUk7UUFDRixNQUFNQyxJQUFBQSxlQUFlLEVBQUM7WUFDcEJDLEtBQUtKLElBQUlLLE1BQU0sQ0FBQ0QsR0FBRztZQUNuQko7WUFDQU0sTUFBTU4sSUFBSU0sSUFBSTtRQUNoQjtRQUVBLE9BQU9MLElBQUlNLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUM7WUFDcEMsR0FBR0MsSUFBQUEsc0JBQXFCLEVBQUNYLElBQUlZLENBQUMsQ0FBQyx3QkFBd0IsVUFBVTtRQUNuRTtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9YLEtBQUtXO0lBQ2Q7QUFDRiJ9