"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "initTransaction", {
    enumerable: true,
    get: function() {
        return initTransaction;
    }
});
async function initTransaction(req) {
    const { payload, transactionID } = req;
    if (transactionID instanceof Promise) {
        // wait for whoever else is already creating the transaction
        await transactionID;
        return false;
    }
    if (transactionID) {
        // we already have a transaction, we're not in charge of committing it
        return false;
    }
    if (typeof payload.db.beginTransaction === 'function') {
        // create a new transaction
        req.transactionID = payload.db.beginTransaction().then((transactionID)=>{
            if (transactionID) {
                req.transactionID = transactionID;
            }
            return transactionID;
        });
        await req.transactionID;
        return !!req.transactionID;
    }
    return false;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi9leHByZXNzL3R5cGVzJ1xuXG4vKipcbiAqIFN0YXJ0cyBhIG5ldyB0cmFuc2FjdGlvbiB1c2luZyB0aGUgZGIgYWRhcHRlciB3aXRoIGEgcmFuZG9tIGlkIGFuZCB0aGVuIGFzc2lnbnMgaXQgdG8gdGhlIHJlcS50cmFuc2FjdGlvblxuICogQHJldHVybnMgdHJ1ZSBpZiBiZWdpbm5pbmcgYSB0cmFuc2FjdGlvbiBhbmQgZmFsc2Ugd2hlbiByZXEgYWxyZWFkeSBoYXMgYSB0cmFuc2FjdGlvbiB0byB1c2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRUcmFuc2FjdGlvbihyZXE6IFBheWxvYWRSZXF1ZXN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHsgcGF5bG9hZCwgdHJhbnNhY3Rpb25JRCB9ID0gcmVxXG4gIGlmICh0cmFuc2FjdGlvbklEIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgIC8vIHdhaXQgZm9yIHdob2V2ZXIgZWxzZSBpcyBhbHJlYWR5IGNyZWF0aW5nIHRoZSB0cmFuc2FjdGlvblxuICAgIGF3YWl0IHRyYW5zYWN0aW9uSURcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0cmFuc2FjdGlvbklEKSB7XG4gICAgLy8gd2UgYWxyZWFkeSBoYXZlIGEgdHJhbnNhY3Rpb24sIHdlJ3JlIG5vdCBpbiBjaGFyZ2Ugb2YgY29tbWl0dGluZyBpdFxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmICh0eXBlb2YgcGF5bG9hZC5kYi5iZWdpblRyYW5zYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gY3JlYXRlIGEgbmV3IHRyYW5zYWN0aW9uXG4gICAgcmVxLnRyYW5zYWN0aW9uSUQgPSBwYXlsb2FkLmRiLmJlZ2luVHJhbnNhY3Rpb24oKS50aGVuKCh0cmFuc2FjdGlvbklEKSA9PiB7XG4gICAgICBpZiAodHJhbnNhY3Rpb25JRCkge1xuICAgICAgICByZXEudHJhbnNhY3Rpb25JRCA9IHRyYW5zYWN0aW9uSURcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uSURcbiAgICB9KVxuICAgIGF3YWl0IHJlcS50cmFuc2FjdGlvbklEXG4gICAgcmV0dXJuICEhcmVxLnRyYW5zYWN0aW9uSURcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbiJdLCJuYW1lcyI6WyJpbml0VHJhbnNhY3Rpb24iLCJyZXEiLCJwYXlsb2FkIiwidHJhbnNhY3Rpb25JRCIsIlByb21pc2UiLCJkYiIsImJlZ2luVHJhbnNhY3Rpb24iLCJ0aGVuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFNc0JBOzs7ZUFBQUE7OztBQUFmLGVBQWVBLGdCQUFnQkMsR0FBbUI7SUFDdkQsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRSxHQUFHRjtJQUNuQyxJQUFJRSx5QkFBeUJDLFNBQVM7UUFDcEMsNERBQTREO1FBQzVELE1BQU1EO1FBQ04sT0FBTztJQUNUO0lBRUEsSUFBSUEsZUFBZTtRQUNqQixzRUFBc0U7UUFDdEUsT0FBTztJQUNUO0lBQ0EsSUFBSSxPQUFPRCxRQUFRRyxFQUFFLENBQUNDLGdCQUFnQixLQUFLLFlBQVk7UUFDckQsMkJBQTJCO1FBQzNCTCxJQUFJRSxhQUFhLEdBQUdELFFBQVFHLEVBQUUsQ0FBQ0MsZ0JBQWdCLEdBQUdDLElBQUksQ0FBQyxDQUFDSjtZQUN0RCxJQUFJQSxlQUFlO2dCQUNqQkYsSUFBSUUsYUFBYSxHQUFHQTtZQUN0QjtZQUVBLE9BQU9BO1FBQ1Q7UUFDQSxNQUFNRixJQUFJRSxhQUFhO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDRixJQUFJRSxhQUFhO0lBQzVCO0lBQ0EsT0FBTztBQUNUIn0=