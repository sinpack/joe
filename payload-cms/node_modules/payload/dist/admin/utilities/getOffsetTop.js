"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getOffsetTop", {
    enumerable: true,
    get: function() {
        return getOffsetTop;
    }
});
const getOffsetTop = (element)=>{
    let el = element;
    // Set our distance placeholder
    let distance = 0;
    // Loop up the DOM
    if (el.offsetParent) {
        do {
            distance += el.offsetTop;
            el = el.offsetParent;
        }while (el)
    }
    // Return our distance
    return distance < 0 ? 0 : distance;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvZ2V0T2Zmc2V0VG9wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRPZmZzZXRUb3AgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIgPT4ge1xuICBsZXQgZWwgPSBlbGVtZW50XG4gIC8vIFNldCBvdXIgZGlzdGFuY2UgcGxhY2Vob2xkZXJcbiAgbGV0IGRpc3RhbmNlID0gMFxuXG4gIC8vIExvb3AgdXAgdGhlIERPTVxuICBpZiAoZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgZG8ge1xuICAgICAgZGlzdGFuY2UgKz0gZWwub2Zmc2V0VG9wXG4gICAgICBlbCA9IGVsLm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudFxuICAgIH0gd2hpbGUgKGVsKVxuICB9XG5cbiAgLy8gUmV0dXJuIG91ciBkaXN0YW5jZVxuICByZXR1cm4gZGlzdGFuY2UgPCAwID8gMCA6IGRpc3RhbmNlXG59XG4iXSwibmFtZXMiOlsiZ2V0T2Zmc2V0VG9wIiwiZWxlbWVudCIsImVsIiwiZGlzdGFuY2UiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRUb3AiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBQWFBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLGVBQWUsQ0FBQ0M7SUFDM0IsSUFBSUMsS0FBS0Q7SUFDVCwrQkFBK0I7SUFDL0IsSUFBSUUsV0FBVztJQUVmLGtCQUFrQjtJQUNsQixJQUFJRCxHQUFHRSxZQUFZLEVBQUU7UUFDbkIsR0FBRztZQUNERCxZQUFZRCxHQUFHRyxTQUFTO1lBQ3hCSCxLQUFLQSxHQUFHRSxZQUFZO1FBQ3RCLFFBQVNGLEdBQUc7SUFDZDtJQUVBLHNCQUFzQjtJQUN0QixPQUFPQyxXQUFXLElBQUksSUFBSUE7QUFDNUIifQ==