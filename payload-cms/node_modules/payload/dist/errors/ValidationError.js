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
class ValidationError extends _APIError.default {
    constructor(results, t){
        const message = t ? t('error:followingFieldsInvalid', {
            count: results.length
        }) : `The following field${results.length === 1 ? ' is' : 's are'} invalid:`;
        super(`${message} ${results.map((f)=>f.field).join(', ')}`, _httpstatus.default.BAD_REQUEST, results);
    }
}
const _default = ValidationError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvVmFsaWRhdGlvbkVycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJ1xuXG5jbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBBUElFcnJvcjx7IGZpZWxkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W10+IHtcbiAgY29uc3RydWN0b3IocmVzdWx0czogeyBmaWVsZDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdLCB0PzogVEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRcbiAgICAgID8gdCgnZXJyb3I6Zm9sbG93aW5nRmllbGRzSW52YWxpZCcsIHsgY291bnQ6IHJlc3VsdHMubGVuZ3RoIH0pXG4gICAgICA6IGBUaGUgZm9sbG93aW5nIGZpZWxkJHtyZXN1bHRzLmxlbmd0aCA9PT0gMSA/ICcgaXMnIDogJ3MgYXJlJ30gaW52YWxpZDpgXG4gICAgc3VwZXIoYCR7bWVzc2FnZX0gJHtyZXN1bHRzLm1hcCgoZikgPT4gZi5maWVsZCkuam9pbignLCAnKX1gLCBodHRwU3RhdHVzLkJBRF9SRVFVRVNULCByZXN1bHRzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRpb25FcnJvclxuIl0sIm5hbWVzIjpbIlZhbGlkYXRpb25FcnJvciIsIkFQSUVycm9yIiwiY29uc3RydWN0b3IiLCJyZXN1bHRzIiwidCIsIm1lc3NhZ2UiLCJjb3VudCIsImxlbmd0aCIsIm1hcCIsImYiLCJmaWVsZCIsImpvaW4iLCJodHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFlQTs7O2VBQUE7OzttRUFidUI7aUVBRUY7Ozs7OztBQUVyQixNQUFNQSx3QkFBd0JDLGlCQUFRO0lBQ3BDQyxZQUFZQyxPQUE2QyxFQUFFQyxDQUFhLENBQUU7UUFDeEUsTUFBTUMsVUFBVUQsSUFDWkEsRUFBRSxnQ0FBZ0M7WUFBRUUsT0FBT0gsUUFBUUksTUFBTTtRQUFDLEtBQzFELENBQUMsbUJBQW1CLEVBQUVKLFFBQVFJLE1BQU0sS0FBSyxJQUFJLFFBQVEsUUFBUSxTQUFTLENBQUM7UUFDM0UsS0FBSyxDQUFDLENBQUMsRUFBRUYsUUFBUSxDQUFDLEVBQUVGLFFBQVFLLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxLQUFLLEVBQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRUMsbUJBQVUsQ0FBQ0MsV0FBVyxFQUFFVjtJQUN4RjtBQUNGO01BRUEsV0FBZUgifQ==