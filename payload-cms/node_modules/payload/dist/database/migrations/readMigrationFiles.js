"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "readMigrationFiles", {
    enumerable: true,
    get: function() {
        return readMigrationFiles;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const readMigrationFiles = async ({ payload })=>{
    if (!_fs.default.existsSync(payload.db.migrationDir)) {
        payload.logger.error({
            msg: `No migration directory found at ${payload.db.migrationDir}`
        });
        return [];
    }
    payload.logger.info({
        msg: `Reading migration files from ${payload.db.migrationDir}`
    });
    const files = _fs.default.readdirSync(payload.db.migrationDir).sort().filter((f)=>{
        return f.endsWith('.ts') || f.endsWith('.js');
    }).map((file)=>{
        return _path.default.resolve(payload.db.migrationDir, file);
    });
    return files.map((filePath)=>{
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const migration = require(filePath);
        migration.name = _path.default.basename(filePath).split('.')?.[0];
        return migration;
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL3JlYWRNaWdyYXRpb25GaWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8nXG5pbXBvcnQgdHlwZSB7IE1pZ3JhdGlvbiB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vKipcbiAqIFJlYWQgdGhlIG1pZ3JhdGlvbiBmaWxlcyBmcm9tIGRpc2tcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRNaWdyYXRpb25GaWxlcyA9IGFzeW5jICh7XG4gIHBheWxvYWQsXG59OiB7XG4gIHBheWxvYWQ6IFBheWxvYWRcbn0pOiBQcm9taXNlPE1pZ3JhdGlvbltdPiA9PiB7XG4gIGlmICghZnMuZXhpc3RzU3luYyhwYXlsb2FkLmRiLm1pZ3JhdGlvbkRpcikpIHtcbiAgICBwYXlsb2FkLmxvZ2dlci5lcnJvcih7XG4gICAgICBtc2c6IGBObyBtaWdyYXRpb24gZGlyZWN0b3J5IGZvdW5kIGF0ICR7cGF5bG9hZC5kYi5taWdyYXRpb25EaXJ9YCxcbiAgICB9KVxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcGF5bG9hZC5sb2dnZXIuaW5mbyh7XG4gICAgbXNnOiBgUmVhZGluZyBtaWdyYXRpb24gZmlsZXMgZnJvbSAke3BheWxvYWQuZGIubWlncmF0aW9uRGlyfWAsXG4gIH0pXG5cbiAgY29uc3QgZmlsZXMgPSBmc1xuICAgIC5yZWFkZGlyU3luYyhwYXlsb2FkLmRiLm1pZ3JhdGlvbkRpcilcbiAgICAuc29ydCgpXG4gICAgLmZpbHRlcigoZikgPT4ge1xuICAgICAgcmV0dXJuIGYuZW5kc1dpdGgoJy50cycpIHx8IGYuZW5kc1dpdGgoJy5qcycpXG4gICAgfSlcbiAgICAubWFwKChmaWxlKSA9PiB7XG4gICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHBheWxvYWQuZGIubWlncmF0aW9uRGlyLCBmaWxlKVxuICAgIH0pXG5cbiAgcmV0dXJuIGZpbGVzLm1hcCgoZmlsZVBhdGgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuICAgIGNvbnN0IG1pZ3JhdGlvbiA9IHJlcXVpcmUoZmlsZVBhdGgpIGFzIE1pZ3JhdGlvblxuICAgIG1pZ3JhdGlvbi5uYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aCkuc3BsaXQoJy4nKT8uWzBdXG4gICAgcmV0dXJuIG1pZ3JhdGlvblxuICB9KVxufVxuIl0sIm5hbWVzIjpbInJlYWRNaWdyYXRpb25GaWxlcyIsInBheWxvYWQiLCJmcyIsImV4aXN0c1N5bmMiLCJkYiIsIm1pZ3JhdGlvbkRpciIsImxvZ2dlciIsImVycm9yIiwibXNnIiwiaW5mbyIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJzb3J0IiwiZmlsdGVyIiwiZiIsImVuZHNXaXRoIiwibWFwIiwiZmlsZSIsInBhdGgiLCJyZXNvbHZlIiwiZmlsZVBhdGgiLCJtaWdyYXRpb24iLCJyZXF1aXJlIiwibmFtZSIsImJhc2VuYW1lIiwic3BsaXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBU2FBOzs7ZUFBQUE7OzsyREFURTs2REFDRTs7Ozs7O0FBUVYsTUFBTUEscUJBQXFCLE9BQU8sRUFDdkNDLE9BQU8sRUFHUjtJQUNDLElBQUksQ0FBQ0MsV0FBRSxDQUFDQyxVQUFVLENBQUNGLFFBQVFHLEVBQUUsQ0FBQ0MsWUFBWSxHQUFHO1FBQzNDSixRQUFRSyxNQUFNLENBQUNDLEtBQUssQ0FBQztZQUNuQkMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFUCxRQUFRRyxFQUFFLENBQUNDLFlBQVksQ0FBQyxDQUFDO1FBQ25FO1FBQ0EsT0FBTyxFQUFFO0lBQ1g7SUFFQUosUUFBUUssTUFBTSxDQUFDRyxJQUFJLENBQUM7UUFDbEJELEtBQUssQ0FBQyw2QkFBNkIsRUFBRVAsUUFBUUcsRUFBRSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUNoRTtJQUVBLE1BQU1LLFFBQVFSLFdBQUUsQ0FDYlMsV0FBVyxDQUFDVixRQUFRRyxFQUFFLENBQUNDLFlBQVksRUFDbkNPLElBQUksR0FDSkMsTUFBTSxDQUFDLENBQUNDO1FBQ1AsT0FBT0EsRUFBRUMsUUFBUSxDQUFDLFVBQVVELEVBQUVDLFFBQVEsQ0FBQztJQUN6QyxHQUNDQyxHQUFHLENBQUMsQ0FBQ0M7UUFDSixPQUFPQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ2xCLFFBQVFHLEVBQUUsQ0FBQ0MsWUFBWSxFQUFFWTtJQUMvQztJQUVGLE9BQU9QLE1BQU1NLEdBQUcsQ0FBQyxDQUFDSTtRQUNoQiw4REFBOEQ7UUFDOUQsTUFBTUMsWUFBWUMsUUFBUUY7UUFDMUJDLFVBQVVFLElBQUksR0FBR0wsYUFBSSxDQUFDTSxRQUFRLENBQUNKLFVBQVVLLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN4RCxPQUFPSjtJQUNUO0FBQ0YifQ==