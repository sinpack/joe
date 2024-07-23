"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverInit", {
    enumerable: true,
    get: function() {
        return serverInit;
    }
});
const _ = require("..");
const serverInit = (payload)=>{
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (0, _.sendEvent)({
        event: {
            type: 'server-init'
        },
        payload
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L2V2ZW50cy9zZXJ2ZXJJbml0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnXG5cbmltcG9ydCB7IHNlbmRFdmVudCB9IGZyb20gJy4uJ1xuXG5leHBvcnQgdHlwZSBTZXJ2ZXJJbml0RXZlbnQgPSB7XG4gIHR5cGU6ICdzZXJ2ZXItaW5pdCdcbn1cblxuZXhwb3J0IGNvbnN0IHNlcnZlckluaXQgPSAocGF5bG9hZDogUGF5bG9hZCk6IHZvaWQgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gIHNlbmRFdmVudCh7XG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6ICdzZXJ2ZXItaW5pdCcsXG4gICAgfSxcbiAgICBwYXlsb2FkLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbInNlcnZlckluaXQiLCJwYXlsb2FkIiwic2VuZEV2ZW50IiwiZXZlbnQiLCJ0eXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBUWFBOzs7ZUFBQUE7OztrQkFOYTtBQU1uQixNQUFNQSxhQUFhLENBQUNDO0lBQ3pCLG1FQUFtRTtJQUNuRUMsSUFBQUEsV0FBUyxFQUFDO1FBQ1JDLE9BQU87WUFDTEMsTUFBTTtRQUNSO1FBQ0FIO0lBQ0Y7QUFDRiJ9