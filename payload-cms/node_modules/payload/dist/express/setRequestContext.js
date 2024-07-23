/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setRequestContext", {
    enumerable: true,
    get: function() {
        return setRequestContext;
    }
});
function setRequestContext(req = {
    context: null
}, context = {}) {
    if (req.context) {
        if (Object.keys(req.context).length === 0 && req.context.constructor === Object) {
            // check if req.context is just {}
            req.context = context // Faster - ... is bad for performance
            ;
        } else {
            req.context = {
                ...req.context,
                ...context
            } // Merge together
            ;
        }
    } else {
        req.context = context;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0LCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4vdHlwZXMnXG5cbi8qKlxuICogVGhpcyBtYWtlcyBzdXJlIHRoYXQgcmVxLmNvbnRleHQgYWx3YXlzIGV4aXN0cyAoaXMge30pIGFuZCBwb3B1bGF0ZXMgaXQgd2l0aCBhbiBvcHRpb25hbCBkZWZhdWx0IGNvbnRleHQuXG4gKiBUaGlzIGZ1bmN0aW9uIG11dGF0ZXMgZGlyZWN0bHkgdG8gYXZvaWQgY29weWluZyBtZW1vcnkuIEFzIHBheWxvYWRSZXF1ZXN0IGlzIG5vdCBhIHByaW1pdGl2ZSwgdGhlIHNjb3BlIG9mIHRoZSBtdXRhdGlvbiBpcyBub3QgbGltaXRlZCB0byB0aGlzIGZ1bmN0aW9uIGJ1dCBzaG91bGQgYWxzbyBiZSByZWZsZWN0ZWQgaW4gdGhlIGNhbGxpbmcgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZXF1ZXN0Q29udGV4dChcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdCA9IHsgY29udGV4dDogbnVsbCB9IGFzIFBheWxvYWRSZXF1ZXN0LFxuICBjb250ZXh0OiBSZXF1ZXN0Q29udGV4dCA9IHt9LFxuKSB7XG4gIGlmIChyZXEuY29udGV4dCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhyZXEuY29udGV4dCkubGVuZ3RoID09PSAwICYmIHJlcS5jb250ZXh0LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIC8vIGNoZWNrIGlmIHJlcS5jb250ZXh0IGlzIGp1c3Qge31cbiAgICAgIHJlcS5jb250ZXh0ID0gY29udGV4dCAvLyBGYXN0ZXIgLSAuLi4gaXMgYmFkIGZvciBwZXJmb3JtYW5jZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXEuY29udGV4dCA9IHsgLi4ucmVxLmNvbnRleHQsIC4uLmNvbnRleHQgfSAvLyBNZXJnZSB0b2dldGhlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXEuY29udGV4dCA9IGNvbnRleHRcbiAgfVxufVxuIl0sIm5hbWVzIjpbInNldFJlcXVlc3RDb250ZXh0IiwicmVxIiwiY29udGV4dCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBT3BCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxrQkFDZEMsTUFBc0I7SUFBRUMsU0FBUztBQUFLLENBQW1CLEVBQ3pEQSxVQUEwQixDQUFDLENBQUM7SUFFNUIsSUFBSUQsSUFBSUMsT0FBTyxFQUFFO1FBQ2YsSUFBSUMsT0FBT0MsSUFBSSxDQUFDSCxJQUFJQyxPQUFPLEVBQUVHLE1BQU0sS0FBSyxLQUFLSixJQUFJQyxPQUFPLENBQUNJLFdBQVcsS0FBS0gsUUFBUTtZQUMvRSxrQ0FBa0M7WUFDbENGLElBQUlDLE9BQU8sR0FBR0EsUUFBUSxzQ0FBc0M7O1FBQzlELE9BQU87WUFDTEQsSUFBSUMsT0FBTyxHQUFHO2dCQUFFLEdBQUdELElBQUlDLE9BQU87Z0JBQUUsR0FBR0EsT0FBTztZQUFDLEVBQUUsaUJBQWlCOztRQUNoRTtJQUNGLE9BQU87UUFDTEQsSUFBSUMsT0FBTyxHQUFHQTtJQUNoQjtBQUNGIn0=