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
async function findOne(args) {
    const { key, req: { payload }, user } = args;
    if (!user) return null;
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const { docs } = await payload.find({
        collection: 'payload-preferences',
        depth: 0,
        pagination: false,
        user,
        where
    });
    if (docs.length === 0) return null;
    return docs[0];
}
const _default = findOne;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9vcGVyYXRpb25zL2ZpbmRPbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJy4uLy4uLydcbmltcG9ydCB0eXBlIHsgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJlZmVyZW5jZVJlcXVlc3QgfSBmcm9tICcuLi90eXBlcydcblxuYXN5bmMgZnVuY3Rpb24gZmluZE9uZShcbiAgYXJnczogUHJlZmVyZW5jZVJlcXVlc3QsXG4pOiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddWydfcHJlZmVyZW5jZSddPiB7XG4gIGNvbnN0IHtcbiAgICBrZXksXG4gICAgcmVxOiB7IHBheWxvYWQgfSxcbiAgICB1c2VyLFxuICB9ID0gYXJnc1xuXG4gIGlmICghdXNlcikgcmV0dXJuIG51bGxcblxuICBjb25zdCB3aGVyZTogV2hlcmUgPSB7XG4gICAgYW5kOiBbXG4gICAgICB7IGtleTogeyBlcXVhbHM6IGtleSB9IH0sXG4gICAgICB7ICd1c2VyLnZhbHVlJzogeyBlcXVhbHM6IHVzZXIuaWQgfSB9LFxuICAgICAgeyAndXNlci5yZWxhdGlvblRvJzogeyBlcXVhbHM6IHVzZXIuY29sbGVjdGlvbiB9IH0sXG4gICAgXSxcbiAgfVxuXG4gIGNvbnN0IHsgZG9jcyB9ID0gYXdhaXQgcGF5bG9hZC5maW5kKHtcbiAgICBjb2xsZWN0aW9uOiAncGF5bG9hZC1wcmVmZXJlbmNlcycsXG4gICAgZGVwdGg6IDAsXG4gICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgdXNlcixcbiAgICB3aGVyZSxcbiAgfSlcblxuICBpZiAoZG9jcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGRvY3NbMF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZE9uZVxuIl0sIm5hbWVzIjpbImZpbmRPbmUiLCJhcmdzIiwia2V5IiwicmVxIiwicGF5bG9hZCIsInVzZXIiLCJ3aGVyZSIsImFuZCIsImVxdWFscyIsImlkIiwiY29sbGVjdGlvbiIsImRvY3MiLCJmaW5kIiwiZGVwdGgiLCJwYWdpbmF0aW9uIiwibGVuZ3RoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFvQ0E7OztlQUFBOzs7QUFoQ0EsZUFBZUEsUUFDYkMsSUFBdUI7SUFFdkIsTUFBTSxFQUNKQyxHQUFHLEVBQ0hDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEVBQ2hCQyxJQUFJLEVBQ0wsR0FBR0o7SUFFSixJQUFJLENBQUNJLE1BQU0sT0FBTztJQUVsQixNQUFNQyxRQUFlO1FBQ25CQyxLQUFLO1lBQ0g7Z0JBQUVMLEtBQUs7b0JBQUVNLFFBQVFOO2dCQUFJO1lBQUU7WUFDdkI7Z0JBQUUsY0FBYztvQkFBRU0sUUFBUUgsS0FBS0ksRUFBRTtnQkFBQztZQUFFO1lBQ3BDO2dCQUFFLG1CQUFtQjtvQkFBRUQsUUFBUUgsS0FBS0ssVUFBVTtnQkFBQztZQUFFO1NBQ2xEO0lBQ0g7SUFFQSxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1QLFFBQVFRLElBQUksQ0FBQztRQUNsQ0YsWUFBWTtRQUNaRyxPQUFPO1FBQ1BDLFlBQVk7UUFDWlQ7UUFDQUM7SUFDRjtJQUVBLElBQUlLLEtBQUtJLE1BQU0sS0FBSyxHQUFHLE9BQU87SUFFOUIsT0FBT0osSUFBSSxDQUFDLEVBQUU7QUFDaEI7TUFFQSxXQUFlWCJ9