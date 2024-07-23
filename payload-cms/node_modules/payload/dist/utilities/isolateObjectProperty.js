/**
 * Creates a proxy for the given object that has its own property
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return isolateObjectProperty;
    }
});
function isolateObjectProperty(object, key) {
    const keys = Array.isArray(key) ? key : [
        key
    ];
    const delegate = {};
    // Initialize delegate with the keys, if they exist in the original object
    for (const k of keys){
        if (k in object) {
            delegate[k] = object[k];
        }
    }
    const handler = {
        deleteProperty (target, p) {
            return Reflect.deleteProperty(keys.includes(p) ? delegate : target, p);
        },
        get (target, p, receiver) {
            return Reflect.get(keys.includes(p) ? delegate : target, p, receiver);
        },
        has (target, p) {
            return Reflect.has(keys.includes(p) ? delegate : target, p);
        },
        set (target, p, newValue, receiver) {
            if (keys.includes(p)) {
                // in case of transactionID we must ignore any receiver, because
                // "If provided and target does not have a setter for propertyKey, the property will be set on receiver instead."
                return Reflect.set(delegate, p, newValue);
            } else {
                return Reflect.set(target, p, newValue, receiver);
            }
        }
    };
    return new Proxy(object, handler);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaXNvbGF0ZU9iamVjdFByb3BlcnR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlcyBhIHByb3h5IGZvciB0aGUgZ2l2ZW4gb2JqZWN0IHRoYXQgaGFzIGl0cyBvd24gcHJvcGVydHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNvbGF0ZU9iamVjdFByb3BlcnR5PFQgZXh0ZW5kcyBvYmplY3Q+KFxuICBvYmplY3Q6IFQsXG4gIGtleTogKGtleW9mIFQpW10gfCBrZXlvZiBULFxuKTogVCB7XG4gIGNvbnN0IGtleXMgPSBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XVxuICBjb25zdCBkZWxlZ2F0ZSA9IHt9IGFzIFRcblxuICAvLyBJbml0aWFsaXplIGRlbGVnYXRlIHdpdGggdGhlIGtleXMsIGlmIHRoZXkgZXhpc3QgaW4gdGhlIG9yaWdpbmFsIG9iamVjdFxuICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgIGlmIChrIGluIG9iamVjdCkge1xuICAgICAgZGVsZWdhdGVba10gPSBvYmplY3Rba11cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVyOiBQcm94eUhhbmRsZXI8VD4gPSB7XG4gICAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShrZXlzLmluY2x1ZGVzKHAgYXMga2V5b2YgVCkgPyBkZWxlZ2F0ZSA6IHRhcmdldCwgcClcbiAgICB9LFxuICAgIGdldCh0YXJnZXQsIHAsIHJlY2VpdmVyKSB7XG4gICAgICByZXR1cm4gUmVmbGVjdC5nZXQoa2V5cy5pbmNsdWRlcyhwIGFzIGtleW9mIFQpID8gZGVsZWdhdGUgOiB0YXJnZXQsIHAsIHJlY2VpdmVyKVxuICAgIH0sXG4gICAgaGFzKHRhcmdldCwgcCkge1xuICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKGtleXMuaW5jbHVkZXMocCBhcyBrZXlvZiBUKSA/IGRlbGVnYXRlIDogdGFyZ2V0LCBwKVxuICAgIH0sXG4gICAgc2V0KHRhcmdldCwgcCwgbmV3VmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICBpZiAoa2V5cy5pbmNsdWRlcyhwIGFzIGtleW9mIFQpKSB7XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgdHJhbnNhY3Rpb25JRCB3ZSBtdXN0IGlnbm9yZSBhbnkgcmVjZWl2ZXIsIGJlY2F1c2VcbiAgICAgICAgLy8gXCJJZiBwcm92aWRlZCBhbmQgdGFyZ2V0IGRvZXMgbm90IGhhdmUgYSBzZXR0ZXIgZm9yIHByb3BlcnR5S2V5LCB0aGUgcHJvcGVydHkgd2lsbCBiZSBzZXQgb24gcmVjZWl2ZXIgaW5zdGVhZC5cIlxuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQoZGVsZWdhdGUsIHAsIG5ld1ZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgcCwgbmV3VmFsdWUsIHJlY2VpdmVyKVxuICAgICAgfVxuICAgIH0sXG4gIH1cbiAgcmV0dXJuIG5ldyBQcm94eShvYmplY3QsIGhhbmRsZXIpXG59XG4iXSwibmFtZXMiOlsiaXNvbGF0ZU9iamVjdFByb3BlcnR5Iiwib2JqZWN0Iiwia2V5Iiwia2V5cyIsIkFycmF5IiwiaXNBcnJheSIsImRlbGVnYXRlIiwiayIsImhhbmRsZXIiLCJkZWxldGVQcm9wZXJ0eSIsInRhcmdldCIsInAiLCJSZWZsZWN0IiwiaW5jbHVkZXMiLCJnZXQiLCJyZWNlaXZlciIsImhhcyIsInNldCIsIm5ld1ZhbHVlIiwiUHJveHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOztDQUVDOzs7OytCQUNEOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQSxzQkFDdEJDLE1BQVMsRUFDVEMsR0FBMEI7SUFFMUIsTUFBTUMsT0FBT0MsTUFBTUMsT0FBTyxDQUFDSCxPQUFPQSxNQUFNO1FBQUNBO0tBQUk7SUFDN0MsTUFBTUksV0FBVyxDQUFDO0lBRWxCLDBFQUEwRTtJQUMxRSxLQUFLLE1BQU1DLEtBQUtKLEtBQU07UUFDcEIsSUFBSUksS0FBS04sUUFBUTtZQUNmSyxRQUFRLENBQUNDLEVBQUUsR0FBR04sTUFBTSxDQUFDTSxFQUFFO1FBQ3pCO0lBQ0Y7SUFFQSxNQUFNQyxVQUEyQjtRQUMvQkMsZ0JBQWVDLE1BQU0sRUFBRUMsQ0FBQztZQUN0QixPQUFPQyxRQUFRSCxjQUFjLENBQUNOLEtBQUtVLFFBQVEsQ0FBQ0YsS0FBZ0JMLFdBQVdJLFFBQVFDO1FBQ2pGO1FBQ0FHLEtBQUlKLE1BQU0sRUFBRUMsQ0FBQyxFQUFFSSxRQUFRO1lBQ3JCLE9BQU9ILFFBQVFFLEdBQUcsQ0FBQ1gsS0FBS1UsUUFBUSxDQUFDRixLQUFnQkwsV0FBV0ksUUFBUUMsR0FBR0k7UUFDekU7UUFDQUMsS0FBSU4sTUFBTSxFQUFFQyxDQUFDO1lBQ1gsT0FBT0MsUUFBUUksR0FBRyxDQUFDYixLQUFLVSxRQUFRLENBQUNGLEtBQWdCTCxXQUFXSSxRQUFRQztRQUN0RTtRQUNBTSxLQUFJUCxNQUFNLEVBQUVDLENBQUMsRUFBRU8sUUFBUSxFQUFFSCxRQUFRO1lBQy9CLElBQUlaLEtBQUtVLFFBQVEsQ0FBQ0YsSUFBZTtnQkFDL0IsZ0VBQWdFO2dCQUNoRSxpSEFBaUg7Z0JBQ2pILE9BQU9DLFFBQVFLLEdBQUcsQ0FBQ1gsVUFBVUssR0FBR087WUFDbEMsT0FBTztnQkFDTCxPQUFPTixRQUFRSyxHQUFHLENBQUNQLFFBQVFDLEdBQUdPLFVBQVVIO1lBQzFDO1FBQ0Y7SUFDRjtJQUNBLE9BQU8sSUFBSUksTUFBTWxCLFFBQVFPO0FBQzNCIn0=