"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resetLoginAttempts", {
    enumerable: true,
    get: function() {
        return resetLoginAttempts;
    }
});
const resetLoginAttempts = async ({ collection, doc, payload, req })=>{
    if (!('lockUntil' in doc && typeof doc.lockUntil === 'string') || doc.loginAttempts === 0) return;
    await payload.update({
        id: doc.id,
        collection: collection.slug,
        data: {
            lockUntil: null,
            loginAttempts: 0
        },
        overrideAccess: true,
        req
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvcmVzZXRMb2dpbkF0dGVtcHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBUeXBlV2l0aElEIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5cbnR5cGUgQXJncyA9IHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBkb2M6IFR5cGVXaXRoSUQgJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBwYXlsb2FkOiBQYXlsb2FkXG4gIHJlcTogUGF5bG9hZFJlcXVlc3Rcbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0TG9naW5BdHRlbXB0cyA9IGFzeW5jICh7XG4gIGNvbGxlY3Rpb24sXG4gIGRvYyxcbiAgcGF5bG9hZCxcbiAgcmVxLFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoISgnbG9ja1VudGlsJyBpbiBkb2MgJiYgdHlwZW9mIGRvYy5sb2NrVW50aWwgPT09ICdzdHJpbmcnKSB8fCBkb2MubG9naW5BdHRlbXB0cyA9PT0gMCkgcmV0dXJuXG4gIGF3YWl0IHBheWxvYWQudXBkYXRlKHtcbiAgICBpZDogZG9jLmlkLFxuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24uc2x1ZyxcbiAgICBkYXRhOiB7XG4gICAgICBsb2NrVW50aWw6IG51bGwsXG4gICAgICBsb2dpbkF0dGVtcHRzOiAwLFxuICAgIH0sXG4gICAgb3ZlcnJpZGVBY2Nlc3M6IHRydWUsXG4gICAgcmVxLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbInJlc2V0TG9naW5BdHRlbXB0cyIsImNvbGxlY3Rpb24iLCJkb2MiLCJwYXlsb2FkIiwicmVxIiwibG9ja1VudGlsIiwibG9naW5BdHRlbXB0cyIsInVwZGF0ZSIsImlkIiwic2x1ZyIsImRhdGEiLCJvdmVycmlkZUFjY2VzcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVdhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSxxQkFBcUIsT0FBTyxFQUN2Q0MsVUFBVSxFQUNWQyxHQUFHLEVBQ0hDLE9BQU8sRUFDUEMsR0FBRyxFQUNFO0lBQ0wsSUFBSSxDQUFFLENBQUEsZUFBZUYsT0FBTyxPQUFPQSxJQUFJRyxTQUFTLEtBQUssUUFBTyxLQUFNSCxJQUFJSSxhQUFhLEtBQUssR0FBRztJQUMzRixNQUFNSCxRQUFRSSxNQUFNLENBQUM7UUFDbkJDLElBQUlOLElBQUlNLEVBQUU7UUFDVlAsWUFBWUEsV0FBV1EsSUFBSTtRQUMzQkMsTUFBTTtZQUNKTCxXQUFXO1lBQ1hDLGVBQWU7UUFDakI7UUFDQUssZ0JBQWdCO1FBQ2hCUDtJQUNGO0FBQ0YifQ==