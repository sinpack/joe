"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "enforceMaxVersions", {
    enumerable: true,
    get: function() {
        return enforceMaxVersions;
    }
});
const enforceMaxVersions = async ({ id, collection, global, max, payload, req })=>{
    const entityType = collection ? 'collection' : 'global';
    const slug = collection ? collection.slug : global?.slug;
    try {
        const where = {};
        let oldestAllowedDoc;
        if (collection) {
            where.parent = {
                equals: id
            };
            const query = await payload.db.findVersions({
                collection: collection.slug,
                pagination: false,
                req,
                skip: max,
                sort: '-updatedAt',
                where
            });
            [oldestAllowedDoc] = query.docs;
        } else if (global) {
            const query = await payload.db.findGlobalVersions({
                global: global.slug,
                req,
                skip: max,
                sort: '-updatedAt',
                where
            });
            [oldestAllowedDoc] = query.docs;
        }
        if (oldestAllowedDoc?.updatedAt) {
            const deleteQuery = {
                updatedAt: {
                    less_than_equal: oldestAllowedDoc.updatedAt
                }
            };
            if (collection) {
                deleteQuery.parent = {
                    equals: id
                };
            }
            await payload.db.deleteVersions({
                collection: collection?.slug,
                req,
                where: deleteQuery
            });
        }
    } catch (err) {
        payload.logger.error(`There was an error cleaning up old versions for the ${entityType} ${slug}`);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9lbmZvcmNlTWF4VmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9nbG9iYWxzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbnR5cGUgQXJncyA9IHtcbiAgY29sbGVjdGlvbj86IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgZ2xvYmFsPzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIGlkPzogbnVtYmVyIHwgc3RyaW5nXG4gIG1heDogbnVtYmVyXG4gIHBheWxvYWQ6IFBheWxvYWRcbiAgcmVxPzogUGF5bG9hZFJlcXVlc3Rcbn1cblxuZXhwb3J0IGNvbnN0IGVuZm9yY2VNYXhWZXJzaW9ucyA9IGFzeW5jICh7XG4gIGlkLFxuICBjb2xsZWN0aW9uLFxuICBnbG9iYWwsXG4gIG1heCxcbiAgcGF5bG9hZCxcbiAgcmVxLFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBlbnRpdHlUeXBlID0gY29sbGVjdGlvbiA/ICdjb2xsZWN0aW9uJyA6ICdnbG9iYWwnXG4gIGNvbnN0IHNsdWcgPSBjb2xsZWN0aW9uID8gY29sbGVjdGlvbi5zbHVnIDogZ2xvYmFsPy5zbHVnXG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3aGVyZTogV2hlcmUgPSB7fVxuICAgIGxldCBvbGRlc3RBbGxvd2VkRG9jXG5cbiAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgd2hlcmUucGFyZW50ID0ge1xuICAgICAgICBlcXVhbHM6IGlkLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBxdWVyeSA9IGF3YWl0IHBheWxvYWQuZGIuZmluZFZlcnNpb25zKHtcbiAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbi5zbHVnLFxuICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgcmVxLFxuICAgICAgICBza2lwOiBtYXgsXG4gICAgICAgIHNvcnQ6ICctdXBkYXRlZEF0JyxcbiAgICAgICAgd2hlcmUsXG4gICAgICB9KVxuXG4gICAgICA7W29sZGVzdEFsbG93ZWREb2NdID0gcXVlcnkuZG9jc1xuICAgIH0gZWxzZSBpZiAoZ2xvYmFsKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IGF3YWl0IHBheWxvYWQuZGIuZmluZEdsb2JhbFZlcnNpb25zKHtcbiAgICAgICAgZ2xvYmFsOiBnbG9iYWwuc2x1ZyxcbiAgICAgICAgcmVxLFxuICAgICAgICBza2lwOiBtYXgsXG4gICAgICAgIHNvcnQ6ICctdXBkYXRlZEF0JyxcbiAgICAgICAgd2hlcmUsXG4gICAgICB9KVxuXG4gICAgICA7W29sZGVzdEFsbG93ZWREb2NdID0gcXVlcnkuZG9jc1xuICAgIH1cblxuICAgIGlmIChvbGRlc3RBbGxvd2VkRG9jPy51cGRhdGVkQXQpIHtcbiAgICAgIGNvbnN0IGRlbGV0ZVF1ZXJ5OiBXaGVyZSA9IHtcbiAgICAgICAgdXBkYXRlZEF0OiB7XG4gICAgICAgICAgbGVzc190aGFuX2VxdWFsOiBvbGRlc3RBbGxvd2VkRG9jLnVwZGF0ZWRBdCxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgZGVsZXRlUXVlcnkucGFyZW50ID0ge1xuICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXdhaXQgcGF5bG9hZC5kYi5kZWxldGVWZXJzaW9ucyh7XG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24/LnNsdWcsXG4gICAgICAgIHJlcSxcbiAgICAgICAgd2hlcmU6IGRlbGV0ZVF1ZXJ5LFxuICAgICAgfSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHBheWxvYWQubG9nZ2VyLmVycm9yKFxuICAgICAgYFRoZXJlIHdhcyBhbiBlcnJvciBjbGVhbmluZyB1cCBvbGQgdmVyc2lvbnMgZm9yIHRoZSAke2VudGl0eVR5cGV9ICR7c2x1Z31gLFxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbImVuZm9yY2VNYXhWZXJzaW9ucyIsImlkIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsIm1heCIsInBheWxvYWQiLCJyZXEiLCJlbnRpdHlUeXBlIiwic2x1ZyIsIndoZXJlIiwib2xkZXN0QWxsb3dlZERvYyIsInBhcmVudCIsImVxdWFscyIsInF1ZXJ5IiwiZGIiLCJmaW5kVmVyc2lvbnMiLCJwYWdpbmF0aW9uIiwic2tpcCIsInNvcnQiLCJkb2NzIiwiZmluZEdsb2JhbFZlcnNpb25zIiwidXBkYXRlZEF0IiwiZGVsZXRlUXVlcnkiLCJsZXNzX3RoYW5fZXF1YWwiLCJkZWxldGVWZXJzaW9ucyIsImVyciIsImxvZ2dlciIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWVhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSxxQkFBcUIsT0FBTyxFQUN2Q0MsRUFBRSxFQUNGQyxVQUFVLEVBQ1ZDLE1BQU0sRUFDTkMsR0FBRyxFQUNIQyxPQUFPLEVBQ1BDLEdBQUcsRUFDRTtJQUNMLE1BQU1DLGFBQWFMLGFBQWEsZUFBZTtJQUMvQyxNQUFNTSxPQUFPTixhQUFhQSxXQUFXTSxJQUFJLEdBQUdMLFFBQVFLO0lBRXBELElBQUk7UUFDRixNQUFNQyxRQUFlLENBQUM7UUFDdEIsSUFBSUM7UUFFSixJQUFJUixZQUFZO1lBQ2RPLE1BQU1FLE1BQU0sR0FBRztnQkFDYkMsUUFBUVg7WUFDVjtZQUVBLE1BQU1ZLFFBQVEsTUFBTVIsUUFBUVMsRUFBRSxDQUFDQyxZQUFZLENBQUM7Z0JBQzFDYixZQUFZQSxXQUFXTSxJQUFJO2dCQUMzQlEsWUFBWTtnQkFDWlY7Z0JBQ0FXLE1BQU1iO2dCQUNOYyxNQUFNO2dCQUNOVDtZQUNGO1lBRUMsQ0FBQ0MsaUJBQWlCLEdBQUdHLE1BQU1NLElBQUk7UUFDbEMsT0FBTyxJQUFJaEIsUUFBUTtZQUNqQixNQUFNVSxRQUFRLE1BQU1SLFFBQVFTLEVBQUUsQ0FBQ00sa0JBQWtCLENBQUM7Z0JBQ2hEakIsUUFBUUEsT0FBT0ssSUFBSTtnQkFDbkJGO2dCQUNBVyxNQUFNYjtnQkFDTmMsTUFBTTtnQkFDTlQ7WUFDRjtZQUVDLENBQUNDLGlCQUFpQixHQUFHRyxNQUFNTSxJQUFJO1FBQ2xDO1FBRUEsSUFBSVQsa0JBQWtCVyxXQUFXO1lBQy9CLE1BQU1DLGNBQXFCO2dCQUN6QkQsV0FBVztvQkFDVEUsaUJBQWlCYixpQkFBaUJXLFNBQVM7Z0JBQzdDO1lBQ0Y7WUFFQSxJQUFJbkIsWUFBWTtnQkFDZG9CLFlBQVlYLE1BQU0sR0FBRztvQkFDbkJDLFFBQVFYO2dCQUNWO1lBQ0Y7WUFFQSxNQUFNSSxRQUFRUyxFQUFFLENBQUNVLGNBQWMsQ0FBQztnQkFDOUJ0QixZQUFZQSxZQUFZTTtnQkFDeEJGO2dCQUNBRyxPQUFPYTtZQUNUO1FBQ0Y7SUFDRixFQUFFLE9BQU9HLEtBQUs7UUFDWnBCLFFBQVFxQixNQUFNLENBQUNDLEtBQUssQ0FDbEIsQ0FBQyxvREFBb0QsRUFBRXBCLFdBQVcsQ0FBQyxFQUFFQyxLQUFLLENBQUM7SUFFL0U7QUFDRiJ9