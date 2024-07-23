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
class Forbidden extends _APIError.default {
    constructor(t){
        super(t ? t('error:notAllowedToPerformAction') : 'You are not allowed to perform this action.', _httpstatus.default.FORBIDDEN);
    }
}
const _default = Forbidden;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvRm9yYmlkZGVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBGb3JiaWRkZW4gZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHQ/OiBURnVuY3Rpb24pIHtcbiAgICBzdXBlcihcbiAgICAgIHQgPyB0KCdlcnJvcjpub3RBbGxvd2VkVG9QZXJmb3JtQWN0aW9uJykgOiAnWW91IGFyZSBub3QgYWxsb3dlZCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLicsXG4gICAgICBodHRwU3RhdHVzLkZPUkJJRERFTixcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yYmlkZGVuXG4iXSwibmFtZXMiOlsiRm9yYmlkZGVuIiwiQVBJRXJyb3IiLCJjb25zdHJ1Y3RvciIsInQiLCJodHRwU3RhdHVzIiwiRk9SQklEREVOIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZUE7OztlQUFBOzs7bUVBYnVCO2lFQUVGOzs7Ozs7QUFFckIsTUFBTUEsa0JBQWtCQyxpQkFBUTtJQUM5QkMsWUFBWUMsQ0FBYSxDQUFFO1FBQ3pCLEtBQUssQ0FDSEEsSUFBSUEsRUFBRSxxQ0FBcUMsK0NBQzNDQyxtQkFBVSxDQUFDQyxTQUFTO0lBRXhCO0FBQ0Y7TUFFQSxXQUFlTCJ9