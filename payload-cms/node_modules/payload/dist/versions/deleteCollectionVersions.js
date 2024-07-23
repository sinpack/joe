"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteCollectionVersions", {
    enumerable: true,
    get: function() {
        return deleteCollectionVersions;
    }
});
const deleteCollectionVersions = async ({ id, payload, req, slug })=>{
    try {
        await payload.db.deleteVersions({
            collection: slug,
            req,
            where: {
                parent: {
                    equals: id
                }
            }
        });
    } catch (err) {
        payload.logger.error(`There was an error removing versions for the deleted ${slug} document with ID ${id}.`);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9kZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGlkPzogbnVtYmVyIHwgc3RyaW5nXG4gIHBheWxvYWQ6IFBheWxvYWRcbiAgcmVxPzogUGF5bG9hZFJlcXVlc3RcbiAgc2x1Zzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMgPSBhc3luYyAoeyBpZCwgcGF5bG9hZCwgcmVxLCBzbHVnIH06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwYXlsb2FkLmRiLmRlbGV0ZVZlcnNpb25zKHtcbiAgICAgIGNvbGxlY3Rpb246IHNsdWcsXG4gICAgICByZXEsXG4gICAgICB3aGVyZToge1xuICAgICAgICBwYXJlbnQ6IHtcbiAgICAgICAgICBlcXVhbHM6IGlkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwYXlsb2FkLmxvZ2dlci5lcnJvcihcbiAgICAgIGBUaGVyZSB3YXMgYW4gZXJyb3IgcmVtb3ZpbmcgdmVyc2lvbnMgZm9yIHRoZSBkZWxldGVkICR7c2x1Z30gZG9jdW1lbnQgd2l0aCBJRCAke2lkfS5gLFxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRlbGV0ZUNvbGxlY3Rpb25WZXJzaW9ucyIsImlkIiwicGF5bG9hZCIsInJlcSIsInNsdWciLCJkYiIsImRlbGV0ZVZlcnNpb25zIiwiY29sbGVjdGlvbiIsIndoZXJlIiwicGFyZW50IiwiZXF1YWxzIiwiZXJyIiwibG9nZ2VyIiwiZXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVVhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSwyQkFBMkIsT0FBTyxFQUFFQyxFQUFFLEVBQUVDLE9BQU8sRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQVE7SUFDN0UsSUFBSTtRQUNGLE1BQU1GLFFBQVFHLEVBQUUsQ0FBQ0MsY0FBYyxDQUFDO1lBQzlCQyxZQUFZSDtZQUNaRDtZQUNBSyxPQUFPO2dCQUNMQyxRQUFRO29CQUNOQyxRQUFRVDtnQkFDVjtZQUNGO1FBQ0Y7SUFDRixFQUFFLE9BQU9VLEtBQUs7UUFDWlQsUUFBUVUsTUFBTSxDQUFDQyxLQUFLLENBQ2xCLENBQUMscURBQXFELEVBQUVULEtBQUssa0JBQWtCLEVBQUVILEdBQUcsQ0FBQyxDQUFDO0lBRTFGO0FBQ0YifQ==