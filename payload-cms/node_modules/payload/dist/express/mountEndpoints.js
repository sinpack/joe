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
function mountEndpoints(express, router, endpoints) {
    endpoints.forEach((endpoint)=>{
        if (!endpoint.root) {
            router[endpoint.method](endpoint.path, endpoint.handler);
        } else {
            express[endpoint.method](endpoint.path, endpoint.handler);
        }
    });
}
const _default = mountEndpoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHByZXNzL21vdW50RW5kcG9pbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRXhwcmVzcywgUm91dGVyIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBFbmRwb2ludCB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuZnVuY3Rpb24gbW91bnRFbmRwb2ludHMoZXhwcmVzczogRXhwcmVzcywgcm91dGVyOiBSb3V0ZXIsIGVuZHBvaW50czogRW5kcG9pbnRbXSk6IHZvaWQge1xuICBlbmRwb2ludHMuZm9yRWFjaCgoZW5kcG9pbnQpID0+IHtcbiAgICBpZiAoIWVuZHBvaW50LnJvb3QpIHtcbiAgICAgIHJvdXRlcltlbmRwb2ludC5tZXRob2RdKGVuZHBvaW50LnBhdGgsIGVuZHBvaW50LmhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cHJlc3NbZW5kcG9pbnQubWV0aG9kXShlbmRwb2ludC5wYXRoLCBlbmRwb2ludC5oYW5kbGVyKVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW91bnRFbmRwb2ludHNcbiJdLCJuYW1lcyI6WyJtb3VudEVuZHBvaW50cyIsImV4cHJlc3MiLCJyb3V0ZXIiLCJlbmRwb2ludHMiLCJmb3JFYWNoIiwiZW5kcG9pbnQiLCJyb290IiwibWV0aG9kIiwicGF0aCIsImhhbmRsZXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFjQTs7O2VBQUE7OztBQVZBLFNBQVNBLGVBQWVDLE9BQWdCLEVBQUVDLE1BQWMsRUFBRUMsU0FBcUI7SUFDN0VBLFVBQVVDLE9BQU8sQ0FBQyxDQUFDQztRQUNqQixJQUFJLENBQUNBLFNBQVNDLElBQUksRUFBRTtZQUNsQkosTUFBTSxDQUFDRyxTQUFTRSxNQUFNLENBQUMsQ0FBQ0YsU0FBU0csSUFBSSxFQUFFSCxTQUFTSSxPQUFPO1FBQ3pELE9BQU87WUFDTFIsT0FBTyxDQUFDSSxTQUFTRSxNQUFNLENBQUMsQ0FBQ0YsU0FBU0csSUFBSSxFQUFFSCxTQUFTSSxPQUFPO1FBQzFEO0lBQ0Y7QUFDRjtNQUVBLFdBQWVUIn0=