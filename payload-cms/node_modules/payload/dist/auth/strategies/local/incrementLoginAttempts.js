"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "incrementLoginAttempts", {
    enumerable: true,
    get: function() {
        return incrementLoginAttempts;
    }
});
const incrementLoginAttempts = async ({ collection, doc, payload, req })=>{
    const { auth: { lockTime, maxLoginAttempts } } = collection;
    if ('lockUntil' in doc && typeof doc.lockUntil === 'string') {
        const lockUntil = new Date(doc.lockUntil).getTime();
        // Expired lock, restart count at 1
        if (lockUntil < Date.now()) {
            await payload.update({
                id: doc.id,
                collection: collection.slug,
                data: {
                    lockUntil: null,
                    loginAttempts: 1
                },
                req
            });
        }
        return;
    }
    const data = {
        loginAttempts: Number(doc.loginAttempts) + 1
    };
    // Lock the account if at max attempts and not already locked
    if (typeof doc.loginAttempts === 'number' && doc.loginAttempts + 1 >= maxLoginAttempts) {
        const lockUntil = new Date(Date.now() + lockTime);
        data.lockUntil = lockUntil;
    }
    await payload.update({
        id: doc.id,
        collection: collection.slug,
        data,
        req
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvaW5jcmVtZW50TG9naW5BdHRlbXB0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLidcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZywgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGNvbGxlY3Rpb246IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgZG9jOiBUeXBlV2l0aElEICYgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgcGF5bG9hZDogUGF5bG9hZFxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG59XG5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRMb2dpbkF0dGVtcHRzID0gYXN5bmMgKHtcbiAgY29sbGVjdGlvbixcbiAgZG9jLFxuICBwYXlsb2FkLFxuICByZXEsXG59OiBBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdXRoOiB7IGxvY2tUaW1lLCBtYXhMb2dpbkF0dGVtcHRzIH0sXG4gIH0gPSBjb2xsZWN0aW9uXG5cbiAgaWYgKCdsb2NrVW50aWwnIGluIGRvYyAmJiB0eXBlb2YgZG9jLmxvY2tVbnRpbCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBsb2NrVW50aWwgPSBuZXcgRGF0ZShkb2MubG9ja1VudGlsKS5nZXRUaW1lKClcblxuICAgIC8vIEV4cGlyZWQgbG9jaywgcmVzdGFydCBjb3VudCBhdCAxXG4gICAgaWYgKGxvY2tVbnRpbCA8IERhdGUubm93KCkpIHtcbiAgICAgIGF3YWl0IHBheWxvYWQudXBkYXRlKHtcbiAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbi5zbHVnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbG9ja1VudGlsOiBudWxsLFxuICAgICAgICAgIGxvZ2luQXR0ZW1wdHM6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICBsb2dpbkF0dGVtcHRzOiBOdW1iZXIoZG9jLmxvZ2luQXR0ZW1wdHMpICsgMSxcbiAgfVxuXG4gIC8vIExvY2sgdGhlIGFjY291bnQgaWYgYXQgbWF4IGF0dGVtcHRzIGFuZCBub3QgYWxyZWFkeSBsb2NrZWRcbiAgaWYgKHR5cGVvZiBkb2MubG9naW5BdHRlbXB0cyA9PT0gJ251bWJlcicgJiYgZG9jLmxvZ2luQXR0ZW1wdHMgKyAxID49IG1heExvZ2luQXR0ZW1wdHMpIHtcbiAgICBjb25zdCBsb2NrVW50aWwgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgbG9ja1RpbWUpXG4gICAgZGF0YS5sb2NrVW50aWwgPSBsb2NrVW50aWxcbiAgfVxuXG4gIGF3YWl0IHBheWxvYWQudXBkYXRlKHtcbiAgICBpZDogZG9jLmlkLFxuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24uc2x1ZyxcbiAgICBkYXRhLFxuICAgIHJlcSxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJpbmNyZW1lbnRMb2dpbkF0dGVtcHRzIiwiY29sbGVjdGlvbiIsImRvYyIsInBheWxvYWQiLCJyZXEiLCJhdXRoIiwibG9ja1RpbWUiLCJtYXhMb2dpbkF0dGVtcHRzIiwibG9ja1VudGlsIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJ1cGRhdGUiLCJpZCIsInNsdWciLCJkYXRhIiwibG9naW5BdHRlbXB0cyIsIk51bWJlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBV2FBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLHlCQUF5QixPQUFPLEVBQzNDQyxVQUFVLEVBQ1ZDLEdBQUcsRUFDSEMsT0FBTyxFQUNQQyxHQUFHLEVBQ0U7SUFDTCxNQUFNLEVBQ0pDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxnQkFBZ0IsRUFBRSxFQUNyQyxHQUFHTjtJQUVKLElBQUksZUFBZUMsT0FBTyxPQUFPQSxJQUFJTSxTQUFTLEtBQUssVUFBVTtRQUMzRCxNQUFNQSxZQUFZLElBQUlDLEtBQUtQLElBQUlNLFNBQVMsRUFBRUUsT0FBTztRQUVqRCxtQ0FBbUM7UUFDbkMsSUFBSUYsWUFBWUMsS0FBS0UsR0FBRyxJQUFJO1lBQzFCLE1BQU1SLFFBQVFTLE1BQU0sQ0FBQztnQkFDbkJDLElBQUlYLElBQUlXLEVBQUU7Z0JBQ1ZaLFlBQVlBLFdBQVdhLElBQUk7Z0JBQzNCQyxNQUFNO29CQUNKUCxXQUFXO29CQUNYUSxlQUFlO2dCQUNqQjtnQkFDQVo7WUFDRjtRQUNGO1FBRUE7SUFDRjtJQUVBLE1BQU1XLE9BQWdDO1FBQ3BDQyxlQUFlQyxPQUFPZixJQUFJYyxhQUFhLElBQUk7SUFDN0M7SUFFQSw2REFBNkQ7SUFDN0QsSUFBSSxPQUFPZCxJQUFJYyxhQUFhLEtBQUssWUFBWWQsSUFBSWMsYUFBYSxHQUFHLEtBQUtULGtCQUFrQjtRQUN0RixNQUFNQyxZQUFZLElBQUlDLEtBQUtBLEtBQUtFLEdBQUcsS0FBS0w7UUFDeENTLEtBQUtQLFNBQVMsR0FBR0E7SUFDbkI7SUFFQSxNQUFNTCxRQUFRUyxNQUFNLENBQUM7UUFDbkJDLElBQUlYLElBQUlXLEVBQUU7UUFDVlosWUFBWUEsV0FBV2EsSUFBSTtRQUMzQkM7UUFDQVg7SUFDRjtBQUNGIn0=