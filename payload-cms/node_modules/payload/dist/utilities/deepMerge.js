"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deepMerge", {
    enumerable: true,
    get: function() {
        return deepMerge;
    }
});
function deepMerge(obj1, obj2) {
    const output = {
        ...obj1
    };
    for(const key in obj2){
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key]) && obj1[key]) {
                output[key] = deepMerge(obj1[key], obj2[key]);
            } else {
                output[key] = obj2[key];
            }
        }
    }
    return output;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGVlcE1lcmdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWVwTWVyZ2Uob2JqMSwgb2JqMikge1xuICBjb25zdCBvdXRwdXQgPSB7IC4uLm9iajEgfVxuXG4gIGZvciAoY29uc3Qga2V5IGluIG9iajIpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iajIsIGtleSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqMltrZXldID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmoyW2tleV0pICYmIG9iajFba2V5XSkge1xuICAgICAgICBvdXRwdXRba2V5XSA9IGRlZXBNZXJnZShvYmoxW2tleV0sIG9iajJba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dFtrZXldID0gb2JqMltrZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuIl0sIm5hbWVzIjpbImRlZXBNZXJnZSIsIm9iajEiLCJvYmoyIiwib3V0cHV0Iiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiQXJyYXkiLCJpc0FycmF5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFBZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLFVBQVVDLElBQUksRUFBRUMsSUFBSTtJQUNsQyxNQUFNQyxTQUFTO1FBQUUsR0FBR0YsSUFBSTtJQUFDO0lBRXpCLElBQUssTUFBTUcsT0FBT0YsS0FBTTtRQUN0QixJQUFJRyxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDTixNQUFNRSxNQUFNO1lBQ25ELElBQUksT0FBT0YsSUFBSSxDQUFDRSxJQUFJLEtBQUssWUFBWSxDQUFDSyxNQUFNQyxPQUFPLENBQUNSLElBQUksQ0FBQ0UsSUFBSSxLQUFLSCxJQUFJLENBQUNHLElBQUksRUFBRTtnQkFDM0VELE1BQU0sQ0FBQ0MsSUFBSSxHQUFHSixVQUFVQyxJQUFJLENBQUNHLElBQUksRUFBRUYsSUFBSSxDQUFDRSxJQUFJO1lBQzlDLE9BQU87Z0JBQ0xELE1BQU0sQ0FBQ0MsSUFBSSxHQUFHRixJQUFJLENBQUNFLElBQUk7WUFDekI7UUFDRjtJQUNGO0lBRUEsT0FBT0Q7QUFDVCJ9