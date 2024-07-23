"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // eslint-disable-next-line @typescript-eslint/no-explicit-any
"default", {
    enumerable: true,
    get: function() {
        return findHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _isNumber = require("../../utilities/isNumber");
const _find = /*#__PURE__*/ _interop_require_default(require("../operations/find"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function findHandler(req, res, next) {
    try {
        let page;
        if (typeof req.query.page === 'string') {
            const parsedPage = parseInt(req.query.page, 10);
            if (!Number.isNaN(parsedPage)) {
                page = parsedPage;
            }
        }
        const result = await (0, _find.default)({
            collection: req.collection,
            depth: (0, _isNumber.isNumber)(req.query.depth) ? Number(req.query.depth) : undefined,
            draft: req.query.draft === 'true',
            limit: (0, _isNumber.isNumber)(req.query.limit) ? Number(req.query.limit) : undefined,
            page,
            req,
            sort: req.query.sort,
            where: req.query.where
        });
        return res.status(_httpstatus.default.OK).json(result);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB0eXBlIHsgVHlwZVdpdGhJRCB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaXNOdW1iZXInXG5pbXBvcnQgZmluZCBmcm9tICcuLi9vcGVyYXRpb25zL2ZpbmQnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmaW5kSGFuZGxlcjxUIGV4dGVuZHMgVHlwZVdpdGhJRCA9IGFueT4oXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8UGFnaW5hdGVkRG9jczxUPj4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgbGV0IHBhZ2U6IG51bWJlciB8IHVuZGVmaW5lZFxuXG4gICAgaWYgKHR5cGVvZiByZXEucXVlcnkucGFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHBhcnNlZFBhZ2UgPSBwYXJzZUludChyZXEucXVlcnkucGFnZSwgMTApXG5cbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZFBhZ2UpKSB7XG4gICAgICAgIHBhZ2UgPSBwYXJzZWRQYWdlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmluZCh7XG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIGRlcHRoOiBpc051bWJlcihyZXEucXVlcnkuZGVwdGgpID8gTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCkgOiB1bmRlZmluZWQsXG4gICAgICBkcmFmdDogcmVxLnF1ZXJ5LmRyYWZ0ID09PSAndHJ1ZScsXG4gICAgICBsaW1pdDogaXNOdW1iZXIocmVxLnF1ZXJ5LmxpbWl0KSA/IE51bWJlcihyZXEucXVlcnkubGltaXQpIDogdW5kZWZpbmVkLFxuICAgICAgcGFnZSxcbiAgICAgIHJlcSxcbiAgICAgIHNvcnQ6IHJlcS5xdWVyeS5zb3J0IGFzIHN0cmluZyxcbiAgICAgIHdoZXJlOiByZXEucXVlcnkud2hlcmUgYXMgV2hlcmUsIC8vIFRoaXMgaXMgYSBsaXR0bGUgc2hhZHlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZXN1bHQpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaW5kSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJwYWdlIiwicXVlcnkiLCJwYXJzZWRQYWdlIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsInJlc3VsdCIsImZpbmQiLCJjb2xsZWN0aW9uIiwiZGVwdGgiLCJpc051bWJlciIsInVuZGVmaW5lZCIsImRyYWZ0IiwibGltaXQiLCJzb3J0Iiwid2hlcmUiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVlBLDhEQUE4RDtBQUM5RDs7O2VBQThCQTs7O21FQVhQOzBCQU9FOzZEQUNSOzs7Ozs7QUFHRixlQUFlQSxZQUM1QkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7SUFFbEIsSUFBSTtRQUNGLElBQUlDO1FBRUosSUFBSSxPQUFPSCxJQUFJSSxLQUFLLENBQUNELElBQUksS0FBSyxVQUFVO1lBQ3RDLE1BQU1FLGFBQWFDLFNBQVNOLElBQUlJLEtBQUssQ0FBQ0QsSUFBSSxFQUFFO1lBRTVDLElBQUksQ0FBQ0ksT0FBT0MsS0FBSyxDQUFDSCxhQUFhO2dCQUM3QkYsT0FBT0U7WUFDVDtRQUNGO1FBRUEsTUFBTUksU0FBUyxNQUFNQyxJQUFBQSxhQUFJLEVBQUM7WUFDeEJDLFlBQVlYLElBQUlXLFVBQVU7WUFDMUJDLE9BQU9DLElBQUFBLGtCQUFRLEVBQUNiLElBQUlJLEtBQUssQ0FBQ1EsS0FBSyxJQUFJTCxPQUFPUCxJQUFJSSxLQUFLLENBQUNRLEtBQUssSUFBSUU7WUFDN0RDLE9BQU9mLElBQUlJLEtBQUssQ0FBQ1csS0FBSyxLQUFLO1lBQzNCQyxPQUFPSCxJQUFBQSxrQkFBUSxFQUFDYixJQUFJSSxLQUFLLENBQUNZLEtBQUssSUFBSVQsT0FBT1AsSUFBSUksS0FBSyxDQUFDWSxLQUFLLElBQUlGO1lBQzdEWDtZQUNBSDtZQUNBaUIsTUFBTWpCLElBQUlJLEtBQUssQ0FBQ2EsSUFBSTtZQUNwQkMsT0FBT2xCLElBQUlJLEtBQUssQ0FBQ2MsS0FBSztRQUN4QjtRQUVBLE9BQU9qQixJQUFJa0IsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQ2I7SUFDeEMsRUFBRSxPQUFPYyxPQUFPO1FBQ2QsT0FBT3JCLEtBQUtxQjtJQUNkO0FBQ0YifQ==