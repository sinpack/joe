"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "combineQueries", {
    enumerable: true,
    get: function() {
        return combineQueries;
    }
});
const _auth = require("../auth");
const combineQueries = (where, access)=>{
    if (!where && !access) return {};
    const result = {
        and: []
    };
    if (where) result.and.push(where);
    if ((0, _auth.hasWhereAccessResult)(access)) result.and.push(access);
    return result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9jb21iaW5lUXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IGhhc1doZXJlQWNjZXNzUmVzdWx0IH0gZnJvbSAnLi4vYXV0aCdcblxuZXhwb3J0IGNvbnN0IGNvbWJpbmVRdWVyaWVzID0gKHdoZXJlOiBXaGVyZSwgYWNjZXNzOiBXaGVyZSB8IGJvb2xlYW4pOiBXaGVyZSA9PiB7XG4gIGlmICghd2hlcmUgJiYgIWFjY2VzcykgcmV0dXJuIHt9XG5cbiAgY29uc3QgcmVzdWx0OiBXaGVyZSA9IHtcbiAgICBhbmQ6IFtdLFxuICB9XG5cbiAgaWYgKHdoZXJlKSByZXN1bHQuYW5kLnB1c2god2hlcmUpXG4gIGlmIChoYXNXaGVyZUFjY2Vzc1Jlc3VsdChhY2Nlc3MpKSByZXN1bHQuYW5kLnB1c2goYWNjZXNzKVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiJdLCJuYW1lcyI6WyJjb21iaW5lUXVlcmllcyIsIndoZXJlIiwiYWNjZXNzIiwicmVzdWx0IiwiYW5kIiwicHVzaCIsImhhc1doZXJlQWNjZXNzUmVzdWx0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7OztzQkFGd0I7QUFFOUIsTUFBTUEsaUJBQWlCLENBQUNDLE9BQWNDO0lBQzNDLElBQUksQ0FBQ0QsU0FBUyxDQUFDQyxRQUFRLE9BQU8sQ0FBQztJQUUvQixNQUFNQyxTQUFnQjtRQUNwQkMsS0FBSyxFQUFFO0lBQ1Q7SUFFQSxJQUFJSCxPQUFPRSxPQUFPQyxHQUFHLENBQUNDLElBQUksQ0FBQ0o7SUFDM0IsSUFBSUssSUFBQUEsMEJBQW9CLEVBQUNKLFNBQVNDLE9BQU9DLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDSDtJQUVsRCxPQUFPQztBQUNUIn0=