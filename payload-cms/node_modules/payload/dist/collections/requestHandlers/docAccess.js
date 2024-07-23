"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return docAccessRequestHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _docAccess = require("../operations/docAccess");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function docAccessRequestHandler(req, res, next) {
    try {
        const accessResults = await (0, _docAccess.docAccess)({
            id: req.params.id,
            req
        });
        return res.status(_httpstatus.default.OK).json(accessResults);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZG9jQWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb25QZXJtaXNzaW9uLCBHbG9iYWxQZXJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vYXV0aCdcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgeyBkb2NBY2Nlc3MgfSBmcm9tICcuLi9vcGVyYXRpb25zL2RvY0FjY2VzcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZG9jQWNjZXNzUmVxdWVzdEhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8Q29sbGVjdGlvblBlcm1pc3Npb24gfCBHbG9iYWxQZXJtaXNzaW9uPiB8IHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhY2Nlc3NSZXN1bHRzID0gYXdhaXQgZG9jQWNjZXNzKHtcbiAgICAgIGlkOiByZXEucGFyYW1zLmlkLFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKGFjY2Vzc1Jlc3VsdHMpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJhY2Nlc3NSZXN1bHRzIiwiZG9jQWNjZXNzIiwiaWQiLCJwYXJhbXMiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVNBOzs7ZUFBOEJBOzs7bUVBUFA7MkJBS0c7Ozs7OztBQUVYLGVBQWVBLHdCQUM1QkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7SUFFbEIsSUFBSTtRQUNGLE1BQU1DLGdCQUFnQixNQUFNQyxJQUFBQSxvQkFBUyxFQUFDO1lBQ3BDQyxJQUFJTCxJQUFJTSxNQUFNLENBQUNELEVBQUU7WUFDakJMO1FBQ0Y7UUFFQSxPQUFPQyxJQUFJTSxNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFBRUMsSUFBSSxDQUFDUDtJQUN4QyxFQUFFLE9BQU9RLE9BQU87UUFDZCxPQUFPVCxLQUFLUztJQUNkO0FBQ0YifQ==