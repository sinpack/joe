/**
 * Function to determine whether two sets are equal or not.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setsAreEqual", {
    enumerable: true,
    get: function() {
        return setsAreEqual;
    }
});
const setsAreEqual = (lhs, rhs)=>{
    return lhs.size === rhs.size && Array.from(lhs).every((value)=>rhs.has(value));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvc2V0c0FyZUVxdWFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdHdvIHNldHMgYXJlIGVxdWFsIG9yIG5vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNldHNBcmVFcXVhbCA9IDxUPihsaHM6IFNldDxUPiwgcmhzOiBTZXQ8VD4pID0+IHtcbiAgcmV0dXJuIGxocy5zaXplID09PSByaHMuc2l6ZSAmJiBBcnJheS5mcm9tKGxocykuZXZlcnkoKHZhbHVlKSA9PiByaHMuaGFzKHZhbHVlKSlcbn1cbiJdLCJuYW1lcyI6WyJzZXRzQXJlRXF1YWwiLCJsaHMiLCJyaHMiLCJzaXplIiwiQXJyYXkiLCJmcm9tIiwiZXZlcnkiLCJ2YWx1ZSIsImhhcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7Ozs7K0JBQ1lBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLGVBQWUsQ0FBSUMsS0FBYUM7SUFDM0MsT0FBT0QsSUFBSUUsSUFBSSxLQUFLRCxJQUFJQyxJQUFJLElBQUlDLE1BQU1DLElBQUksQ0FBQ0osS0FBS0ssS0FBSyxDQUFDLENBQUNDLFFBQVVMLElBQUlNLEdBQUcsQ0FBQ0Q7QUFDM0UifQ==