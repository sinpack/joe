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
function uppercase(str) {
    const array1 = str.split(' ');
    const newarray1 = [];
    for(let x = 0; x < array1.length; x += 1){
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
const _default = uppercase;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy91cHBlcmNhc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdXBwZXJjYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgYXJyYXkxID0gc3RyLnNwbGl0KCcgJylcbiAgY29uc3QgbmV3YXJyYXkxID0gW11cblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IGFycmF5MS5sZW5ndGg7IHggKz0gMSkge1xuICAgIG5ld2FycmF5MS5wdXNoKGFycmF5MVt4XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGFycmF5MVt4XS5zbGljZSgxKSlcbiAgfVxuICByZXR1cm4gbmV3YXJyYXkxLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cHBlcmNhc2VcbiJdLCJuYW1lcyI6WyJ1cHBlcmNhc2UiLCJzdHIiLCJhcnJheTEiLCJzcGxpdCIsIm5ld2FycmF5MSIsIngiLCJsZW5ndGgiLCJwdXNoIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVVBOzs7ZUFBQTs7O0FBVkEsU0FBU0EsVUFBVUMsR0FBVztJQUM1QixNQUFNQyxTQUFTRCxJQUFJRSxLQUFLLENBQUM7SUFDekIsTUFBTUMsWUFBWSxFQUFFO0lBRXBCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxPQUFPSSxNQUFNLEVBQUVELEtBQUssRUFBRztRQUN6Q0QsVUFBVUcsSUFBSSxDQUFDTCxNQUFNLENBQUNHLEVBQUUsQ0FBQ0csTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS1AsTUFBTSxDQUFDRyxFQUFFLENBQUNLLEtBQUssQ0FBQztJQUNyRTtJQUNBLE9BQU9OLFVBQVVPLElBQUksQ0FBQztBQUN4QjtNQUVBLFdBQWVYIn0=