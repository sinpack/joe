"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("./types"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vdHlwZXMnXG4iXSwibmFtZXMiOltdLCJyYW5nZU1hcHBpbmdzIjoiOzs7OyIsIm1hcHBpbmdzIjoiOzs7O3FCQUFjIn0=