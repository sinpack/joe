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
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class QueryError extends _APIError.default {
    constructor(results, t){
        const message = t ? t('error:unspecific', {
            count: results.length
        }) : `The following path${results.length === 1 ? '' : 's'} cannot be queried:`;
        super(`${message} ${results.map((err)=>err.path).join(', ')}`, _httpstatus.default.BAD_REQUEST, results);
    }
}
const _default = QueryError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvUXVlcnlFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcidcblxuY2xhc3MgUXVlcnlFcnJvciBleHRlbmRzIEFQSUVycm9yPHsgcGF0aDogc3RyaW5nIH1bXT4ge1xuICBjb25zdHJ1Y3RvcihyZXN1bHRzOiB7IHBhdGg6IHN0cmluZyB9W10sIHQ/OiBURnVuY3Rpb24pIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdFxuICAgICAgPyB0KCdlcnJvcjp1bnNwZWNpZmljJywgeyBjb3VudDogcmVzdWx0cy5sZW5ndGggfSlcbiAgICAgIDogYFRoZSBmb2xsb3dpbmcgcGF0aCR7cmVzdWx0cy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gY2Fubm90IGJlIHF1ZXJpZWQ6YFxuICAgIHN1cGVyKFxuICAgICAgYCR7bWVzc2FnZX0gJHtyZXN1bHRzLm1hcCgoZXJyKSA9PiBlcnIucGF0aCkuam9pbignLCAnKX1gLFxuICAgICAgaHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgIHJlc3VsdHMsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5RXJyb3JcbiJdLCJuYW1lcyI6WyJRdWVyeUVycm9yIiwiQVBJRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlc3VsdHMiLCJ0IiwibWVzc2FnZSIsImNvdW50IiwibGVuZ3RoIiwibWFwIiwiZXJyIiwicGF0aCIsImpvaW4iLCJodHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFtQkE7OztlQUFBOzs7bUVBakJ1QjtpRUFFRjs7Ozs7O0FBRXJCLE1BQU1BLG1CQUFtQkMsaUJBQVE7SUFDL0JDLFlBQVlDLE9BQTJCLEVBQUVDLENBQWEsQ0FBRTtRQUN0RCxNQUFNQyxVQUFVRCxJQUNaQSxFQUFFLG9CQUFvQjtZQUFFRSxPQUFPSCxRQUFRSSxNQUFNO1FBQUMsS0FDOUMsQ0FBQyxrQkFBa0IsRUFBRUosUUFBUUksTUFBTSxLQUFLLElBQUksS0FBSyxJQUFJLG1CQUFtQixDQUFDO1FBQzdFLEtBQUssQ0FDSCxDQUFDLEVBQUVGLFFBQVEsQ0FBQyxFQUFFRixRQUFRSyxHQUFHLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxFQUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3pEQyxtQkFBVSxDQUFDQyxXQUFXLEVBQ3RCVjtJQUVKO0FBQ0Y7TUFFQSxXQUFlSCJ9