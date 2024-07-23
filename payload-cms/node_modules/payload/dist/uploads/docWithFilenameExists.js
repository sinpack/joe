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
const docWithFilenameExists = async ({ collectionSlug, filename, req })=>{
    const doc = await req.payload.db.findOne({
        collection: collectionSlug,
        req,
        where: {
            filename: {
                equals: filename
            }
        }
    });
    if (doc) return true;
    return false;
};
const _default = docWithFilenameExists;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2RvY1dpdGhGaWxlbmFtZUV4aXN0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcydcblxudHlwZSBBcmdzID0ge1xuICBjb2xsZWN0aW9uU2x1Zzogc3RyaW5nXG4gIGZpbGVuYW1lOiBzdHJpbmdcbiAgcGF0aDogc3RyaW5nXG4gIHJlcTogUGF5bG9hZFJlcXVlc3Rcbn1cblxuY29uc3QgZG9jV2l0aEZpbGVuYW1lRXhpc3RzID0gYXN5bmMgKHsgY29sbGVjdGlvblNsdWcsIGZpbGVuYW1lLCByZXEgfTogQXJncyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBjb25zdCBkb2MgPSBhd2FpdCByZXEucGF5bG9hZC5kYi5maW5kT25lKHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uU2x1ZyxcbiAgICByZXEsXG4gICAgd2hlcmU6IHtcbiAgICAgIGZpbGVuYW1lOiB7XG4gICAgICAgIGVxdWFsczogZmlsZW5hbWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4gIGlmIChkb2MpIHJldHVybiB0cnVlXG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvY1dpdGhGaWxlbmFtZUV4aXN0c1xuIl0sIm5hbWVzIjpbImRvY1dpdGhGaWxlbmFtZUV4aXN0cyIsImNvbGxlY3Rpb25TbHVnIiwiZmlsZW5hbWUiLCJyZXEiLCJkb2MiLCJwYXlsb2FkIiwiZGIiLCJmaW5kT25lIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiZXF1YWxzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXdCQTs7O2VBQUE7OztBQWZBLE1BQU1BLHdCQUF3QixPQUFPLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxHQUFHLEVBQVE7SUFDMUUsTUFBTUMsTUFBTSxNQUFNRCxJQUFJRSxPQUFPLENBQUNDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDO1FBQ3ZDQyxZQUFZUDtRQUNaRTtRQUNBTSxPQUFPO1lBQ0xQLFVBQVU7Z0JBQ1JRLFFBQVFSO1lBQ1Y7UUFDRjtJQUNGO0lBQ0EsSUFBSUUsS0FBSyxPQUFPO0lBRWhCLE9BQU87QUFDVDtNQUVBLFdBQWVKIn0=