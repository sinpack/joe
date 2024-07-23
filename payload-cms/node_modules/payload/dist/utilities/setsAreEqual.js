"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setsAreEqual", {
    enumerable: true,
    get: function() {
        return setsAreEqual;
    }
});
const setsAreEqual = (xs, ys)=>xs.size === ys.size && [
        ...xs
    ].every((x)=>ys.has(x));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2V0c0FyZUVxdWFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXRzQXJlRXF1YWwgPSAoeHM6IFNldDx1bmtub3duPiwgeXM6IFNldDx1bmtub3duPikgPT5cbiAgeHMuc2l6ZSA9PT0geXMuc2l6ZSAmJiBbLi4ueHNdLmV2ZXJ5KCh4KSA9PiB5cy5oYXMoeCkpXG4iXSwibmFtZXMiOlsic2V0c0FyZUVxdWFsIiwieHMiLCJ5cyIsInNpemUiLCJldmVyeSIsIngiLCJoYXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSxlQUFlLENBQUNDLElBQWtCQyxLQUM3Q0QsR0FBR0UsSUFBSSxLQUFLRCxHQUFHQyxJQUFJLElBQUk7V0FBSUY7S0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUgsR0FBR0ksR0FBRyxDQUFDRCJ9