/**
  Turns: 'arrayField.0.group123field.arrayField.0.textField'

  Into: ['arrayField', '0', 'group123field.arrayField', '0', 'textField']
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "splitPathByArrayFields", {
    enumerable: true,
    get: function() {
        return splitPathByArrayFields;
    }
});
function splitPathByArrayFields(str) {
    const regex = /\.(\d+)\./g;
    return str.split(regex).filter(Boolean);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3BsaXRQYXRoQnlBcnJheUZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgVHVybnM6ICdhcnJheUZpZWxkLjAuZ3JvdXAxMjNmaWVsZC5hcnJheUZpZWxkLjAudGV4dEZpZWxkJ1xuXG4gIEludG86IFsnYXJyYXlGaWVsZCcsICcwJywgJ2dyb3VwMTIzZmllbGQuYXJyYXlGaWVsZCcsICcwJywgJ3RleHRGaWVsZCddXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0UGF0aEJ5QXJyYXlGaWVsZHMoc3RyOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJlZ2V4ID0gL1xcLihcXGQrKVxcLi9nXG4gIHJldHVybiBzdHIuc3BsaXQocmVnZXgpLmZpbHRlcihCb29sZWFuKVxufVxuIl0sIm5hbWVzIjpbInNwbGl0UGF0aEJ5QXJyYXlGaWVsZHMiLCJzdHIiLCJyZWdleCIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQTs7OzsrQkFDZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLHVCQUF1QkMsR0FBVztJQUNoRCxNQUFNQyxRQUFRO0lBQ2QsT0FBT0QsSUFBSUUsS0FBSyxDQUFDRCxPQUFPRSxNQUFNLENBQUNDO0FBQ2pDIn0=