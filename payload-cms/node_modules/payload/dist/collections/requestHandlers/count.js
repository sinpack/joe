"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return countHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _count = /*#__PURE__*/ _interop_require_default(require("../operations/count"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function countHandler(req, res, next) {
    try {
        const result = await (0, _count.default)({
            collection: req.collection,
            req,
            where: req.query.where
        });
        return res.status(_httpstatus.default.OK).json(result);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvY291bnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbXBvcnQgY291bnQgZnJvbSAnLi4vb3BlcmF0aW9ucy9jb3VudCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY291bnRIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPFJlc3BvbnNlPHsgdG90YWxEb2NzOiBudW1iZXIgfT4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY291bnQoe1xuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICByZXEsXG4gICAgICB3aGVyZTogcmVxLnF1ZXJ5LndoZXJlIGFzIFdoZXJlLCAvLyBUaGlzIGlzIGEgbGl0dGxlIHNoYWR5XG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24ocmVzdWx0KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsiY291bnRIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInJlc3VsdCIsImNvdW50IiwiY29sbGVjdGlvbiIsIndoZXJlIiwicXVlcnkiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFTQTs7O2VBQThCQTs7O21FQVBQOzhEQUtMOzs7Ozs7QUFFSCxlQUFlQSxhQUM1QkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7SUFFbEIsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTUMsSUFBQUEsY0FBSyxFQUFDO1lBQ3pCQyxZQUFZTCxJQUFJSyxVQUFVO1lBQzFCTDtZQUNBTSxPQUFPTixJQUFJTyxLQUFLLENBQUNELEtBQUs7UUFDeEI7UUFFQSxPQUFPTCxJQUFJTyxNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFBRUMsSUFBSSxDQUFDUjtJQUN4QyxFQUFFLE9BQU9TLE9BQU87UUFDZCxPQUFPVixLQUFLVTtJQUNkO0FBQ0YifQ==