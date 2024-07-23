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
const _errors = require("../errors");
const executeAccess = async (operation, access)=>{
    if (access) {
        const result = await access(operation);
        if (!result) {
            if (!operation.disableErrors) throw new _errors.Forbidden(operation.req.t);
        }
        return result;
    }
    if (operation.req.user) {
        return true;
    }
    if (!operation.disableErrors) throw new _errors.Forbidden(operation.req.t);
    return false;
};
const _default = executeAccess;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2V4ZWN1dGVBY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBY2Nlc3MsIEFjY2Vzc1Jlc3VsdCB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgRm9yYmlkZGVuIH0gZnJvbSAnLi4vZXJyb3JzJ1xuXG5jb25zdCBleGVjdXRlQWNjZXNzID0gYXN5bmMgKG9wZXJhdGlvbiwgYWNjZXNzOiBBY2Nlc3MpOiBQcm9taXNlPEFjY2Vzc1Jlc3VsdD4gPT4ge1xuICBpZiAoYWNjZXNzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWNjZXNzKG9wZXJhdGlvbilcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBpZiAoIW9wZXJhdGlvbi5kaXNhYmxlRXJyb3JzKSB0aHJvdyBuZXcgRm9yYmlkZGVuKG9wZXJhdGlvbi5yZXEudClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBpZiAob3BlcmF0aW9uLnJlcS51c2VyKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICghb3BlcmF0aW9uLmRpc2FibGVFcnJvcnMpIHRocm93IG5ldyBGb3JiaWRkZW4ob3BlcmF0aW9uLnJlcS50KVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhlY3V0ZUFjY2Vzc1xuIl0sIm5hbWVzIjpbImV4ZWN1dGVBY2Nlc3MiLCJvcGVyYXRpb24iLCJhY2Nlc3MiLCJyZXN1bHQiLCJkaXNhYmxlRXJyb3JzIiwiRm9yYmlkZGVuIiwicmVxIiwidCIsInVzZXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF1QkE7OztlQUFBOzs7d0JBckIwQjtBQUUxQixNQUFNQSxnQkFBZ0IsT0FBT0MsV0FBV0M7SUFDdEMsSUFBSUEsUUFBUTtRQUNWLE1BQU1DLFNBQVMsTUFBTUQsT0FBT0Q7UUFFNUIsSUFBSSxDQUFDRSxRQUFRO1lBQ1gsSUFBSSxDQUFDRixVQUFVRyxhQUFhLEVBQUUsTUFBTSxJQUFJQyxpQkFBUyxDQUFDSixVQUFVSyxHQUFHLENBQUNDLENBQUM7UUFDbkU7UUFFQSxPQUFPSjtJQUNUO0lBRUEsSUFBSUYsVUFBVUssR0FBRyxDQUFDRSxJQUFJLEVBQUU7UUFDdEIsT0FBTztJQUNUO0lBRUEsSUFBSSxDQUFDUCxVQUFVRyxhQUFhLEVBQUUsTUFBTSxJQUFJQyxpQkFBUyxDQUFDSixVQUFVSyxHQUFHLENBQUNDLENBQUM7SUFDakUsT0FBTztBQUNUO01BRUEsV0FBZVAifQ==