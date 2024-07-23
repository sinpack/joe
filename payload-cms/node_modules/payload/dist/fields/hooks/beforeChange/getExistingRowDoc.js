/**
 * If there is an incoming row id,
 * and it matches the existing sibling doc id,
 * this is an existing row, so it should be merged.
 * Otherwise, return an empty object.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getExistingRowDoc", {
    enumerable: true,
    get: function() {
        return getExistingRowDoc;
    }
});
const getExistingRowDoc = (incomingRow, existingRows)=>{
    if (incomingRow.id && Array.isArray(existingRows)) {
        const matchedExistingRow = existingRows.find((existingRow)=>{
            if (typeof existingRow === 'object' && 'id' in existingRow) {
                if (existingRow.id === incomingRow.id) return existingRow;
            }
            return false;
        });
        if (matchedExistingRow) return matchedExistingRow;
    }
    return {};
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlL2dldEV4aXN0aW5nUm93RG9jLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSWYgdGhlcmUgaXMgYW4gaW5jb21pbmcgcm93IGlkLFxuICogYW5kIGl0IG1hdGNoZXMgdGhlIGV4aXN0aW5nIHNpYmxpbmcgZG9jIGlkLFxuICogdGhpcyBpcyBhbiBleGlzdGluZyByb3csIHNvIGl0IHNob3VsZCBiZSBtZXJnZWQuXG4gKiBPdGhlcndpc2UsIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGdldEV4aXN0aW5nUm93RG9jID0gKFxuICBpbmNvbWluZ1JvdzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIGV4aXN0aW5nUm93cz86IHVua25vd24sXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9PiB7XG4gIGlmIChpbmNvbWluZ1Jvdy5pZCAmJiBBcnJheS5pc0FycmF5KGV4aXN0aW5nUm93cykpIHtcbiAgICBjb25zdCBtYXRjaGVkRXhpc3RpbmdSb3cgPSBleGlzdGluZ1Jvd3MuZmluZCgoZXhpc3RpbmdSb3cpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZXhpc3RpbmdSb3cgPT09ICdvYmplY3QnICYmICdpZCcgaW4gZXhpc3RpbmdSb3cpIHtcbiAgICAgICAgaWYgKGV4aXN0aW5nUm93LmlkID09PSBpbmNvbWluZ1Jvdy5pZCkgcmV0dXJuIGV4aXN0aW5nUm93XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAobWF0Y2hlZEV4aXN0aW5nUm93KSByZXR1cm4gbWF0Y2hlZEV4aXN0aW5nUm93XG4gIH1cblxuICByZXR1cm4ge31cbn1cbiJdLCJuYW1lcyI6WyJnZXRFeGlzdGluZ1Jvd0RvYyIsImluY29taW5nUm93IiwiZXhpc3RpbmdSb3dzIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXRjaGVkRXhpc3RpbmdSb3ciLCJmaW5kIiwiZXhpc3RpbmdSb3ciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDOzs7OytCQUVZQTs7O2VBQUFBOzs7QUFBTixNQUFNQSxvQkFBb0IsQ0FDL0JDLGFBQ0FDO0lBRUEsSUFBSUQsWUFBWUUsRUFBRSxJQUFJQyxNQUFNQyxPQUFPLENBQUNILGVBQWU7UUFDakQsTUFBTUkscUJBQXFCSixhQUFhSyxJQUFJLENBQUMsQ0FBQ0M7WUFDNUMsSUFBSSxPQUFPQSxnQkFBZ0IsWUFBWSxRQUFRQSxhQUFhO2dCQUMxRCxJQUFJQSxZQUFZTCxFQUFFLEtBQUtGLFlBQVlFLEVBQUUsRUFBRSxPQUFPSztZQUNoRDtZQUVBLE9BQU87UUFDVDtRQUVBLElBQUlGLG9CQUFvQixPQUFPQTtJQUNqQztJQUVBLE9BQU8sQ0FBQztBQUNWIn0=