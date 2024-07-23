"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "adminInit", {
    enumerable: true,
    get: function() {
        return adminInit;
    }
});
const _ = require("..");
const _oneWayHash = require("../oneWayHash");
const adminInit = (req)=>{
    const { payload, user } = req;
    const { host } = req.headers;
    let domainID;
    let userID;
    if (host) {
        domainID = (0, _oneWayHash.oneWayHash)(host, payload.secret);
    }
    if (user?.id) {
        userID = (0, _oneWayHash.oneWayHash)(String(user.id), payload.secret);
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (0, _.sendEvent)({
        event: {
            domainID,
            type: 'admin-init',
            userID
        },
        payload
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L2V2ZW50cy9hZG1pbkluaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5cbmltcG9ydCB7IHNlbmRFdmVudCB9IGZyb20gJy4uJ1xuaW1wb3J0IHsgb25lV2F5SGFzaCB9IGZyb20gJy4uL29uZVdheUhhc2gnXG5cbmV4cG9ydCB0eXBlIEFkbWluSW5pdEV2ZW50ID0ge1xuICBkb21haW5JRD86IHN0cmluZ1xuICB0eXBlOiAnYWRtaW4taW5pdCdcbiAgdXNlcklEPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBhZG1pbkluaXQgPSAocmVxOiBQYXlsb2FkUmVxdWVzdCk6IHZvaWQgPT4ge1xuICBjb25zdCB7IHBheWxvYWQsIHVzZXIgfSA9IHJlcVxuICBjb25zdCB7IGhvc3QgfSA9IHJlcS5oZWFkZXJzXG5cbiAgbGV0IGRvbWFpbklEOiBzdHJpbmdcbiAgbGV0IHVzZXJJRDogc3RyaW5nXG5cbiAgaWYgKGhvc3QpIHtcbiAgICBkb21haW5JRCA9IG9uZVdheUhhc2goaG9zdCwgcGF5bG9hZC5zZWNyZXQpXG4gIH1cblxuICBpZiAodXNlcj8uaWQpIHtcbiAgICB1c2VySUQgPSBvbmVXYXlIYXNoKFN0cmluZyh1c2VyLmlkKSwgcGF5bG9hZC5zZWNyZXQpXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gIHNlbmRFdmVudCh7XG4gICAgZXZlbnQ6IHtcbiAgICAgIGRvbWFpbklELFxuICAgICAgdHlwZTogJ2FkbWluLWluaXQnLFxuICAgICAgdXNlcklELFxuICAgIH0sXG4gICAgcGF5bG9hZCxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJhZG1pbkluaXQiLCJyZXEiLCJwYXlsb2FkIiwidXNlciIsImhvc3QiLCJoZWFkZXJzIiwiZG9tYWluSUQiLCJ1c2VySUQiLCJvbmVXYXlIYXNoIiwic2VjcmV0IiwiaWQiLCJTdHJpbmciLCJzZW5kRXZlbnQiLCJldmVudCIsInR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBV2FBOzs7ZUFBQUE7OztrQkFUYTs0QkFDQztBQVFwQixNQUFNQSxZQUFZLENBQUNDO0lBQ3hCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBR0Y7SUFDMUIsTUFBTSxFQUFFRyxJQUFJLEVBQUUsR0FBR0gsSUFBSUksT0FBTztJQUU1QixJQUFJQztJQUNKLElBQUlDO0lBRUosSUFBSUgsTUFBTTtRQUNSRSxXQUFXRSxJQUFBQSxzQkFBVSxFQUFDSixNQUFNRixRQUFRTyxNQUFNO0lBQzVDO0lBRUEsSUFBSU4sTUFBTU8sSUFBSTtRQUNaSCxTQUFTQyxJQUFBQSxzQkFBVSxFQUFDRyxPQUFPUixLQUFLTyxFQUFFLEdBQUdSLFFBQVFPLE1BQU07SUFDckQ7SUFFQSxtRUFBbUU7SUFDbkVHLElBQUFBLFdBQVMsRUFBQztRQUNSQyxPQUFPO1lBQ0xQO1lBQ0FRLE1BQU07WUFDTlA7UUFDRjtRQUNBTDtJQUNGO0FBQ0YifQ==