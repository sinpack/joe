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
const getCookieExpiration = (seconds = 7200)=>{
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + seconds);
    return currentTime;
};
const _default = getCookieExpiration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0Q29va2llRXhwaXJhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRDb29raWVFeHBpcmF0aW9uID0gKHNlY29uZHMgPSA3MjAwKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKVxuICBjdXJyZW50VGltZS5zZXRTZWNvbmRzKGN1cnJlbnRUaW1lLmdldFNlY29uZHMoKSArIHNlY29uZHMpXG4gIHJldHVybiBjdXJyZW50VGltZVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb29raWVFeHBpcmF0aW9uXG4iXSwibmFtZXMiOlsiZ2V0Q29va2llRXhwaXJhdGlvbiIsInNlY29uZHMiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBTUE7OztlQUFBOzs7QUFOQSxNQUFNQSxzQkFBc0IsQ0FBQ0MsVUFBVSxJQUFJO0lBQ3pDLE1BQU1DLGNBQWMsSUFBSUM7SUFDeEJELFlBQVlFLFVBQVUsQ0FBQ0YsWUFBWUcsVUFBVSxLQUFLSjtJQUNsRCxPQUFPQztBQUNUO01BRUEsV0FBZUYifQ==