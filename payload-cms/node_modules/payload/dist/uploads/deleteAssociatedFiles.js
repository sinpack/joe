"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteAssociatedFiles", {
    enumerable: true,
    get: function() {
        return deleteAssociatedFiles;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _errors = require("../errors");
const _fileExists = /*#__PURE__*/ _interop_require_default(require("./fileExists"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const deleteAssociatedFiles = async ({ collectionConfig, config, doc, files = [], overrideDelete, t })=>{
    if (!collectionConfig.upload) return;
    if (overrideDelete || files.length > 0) {
        const { staticDir } = collectionConfig.upload;
        const staticPath = _path.default.resolve(config.paths.configDir, staticDir);
        const fileToDelete = `${staticPath}/${doc.filename}`;
        try {
            if (await (0, _fileExists.default)(fileToDelete)) {
                _fs.default.unlinkSync(fileToDelete);
            }
        } catch (err) {
            throw new _errors.ErrorDeletingFile(t);
        }
        if (doc.sizes) {
            const sizes = Object.values(doc.sizes);
            // Since forEach will not wait until unlink is finished it could
            // happen that two operations will try to delete the same file.
            // To avoid this it is recommended to use "sync" instead
            // eslint-disable-next-line no-restricted-syntax
            for (const size of sizes){
                const sizeToDelete = `${staticPath}/${size.filename}`;
                try {
                    // eslint-disable-next-line no-await-in-loop
                    if (await (0, _fileExists.default)(sizeToDelete)) {
                        _fs.default.unlinkSync(sizeToDelete);
                    }
                } catch (err) {
                    throw new _errors.ErrorDeletingFile(t);
                }
            }
        }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2RlbGV0ZUFzc29jaWF0ZWRGaWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWxlRGF0YSwgRmlsZVRvU2F2ZSB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IEVycm9yRGVsZXRpbmdGaWxlIH0gZnJvbSAnLi4vZXJyb3JzJ1xuaW1wb3J0IGZpbGVFeGlzdHMgZnJvbSAnLi9maWxlRXhpc3RzJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGNvbGxlY3Rpb25Db25maWc6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWdcbiAgZG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBmaWxlcz86IEZpbGVUb1NhdmVbXVxuICBvdmVycmlkZURlbGV0ZTogYm9vbGVhblxuICB0OiBURnVuY3Rpb25cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFzc29jaWF0ZWRGaWxlczogKGFyZ3M6IEFyZ3MpID0+IFByb21pc2U8dm9pZD4gPSBhc3luYyAoe1xuICBjb2xsZWN0aW9uQ29uZmlnLFxuICBjb25maWcsXG4gIGRvYyxcbiAgZmlsZXMgPSBbXSxcbiAgb3ZlcnJpZGVEZWxldGUsXG4gIHQsXG59KSA9PiB7XG4gIGlmICghY29sbGVjdGlvbkNvbmZpZy51cGxvYWQpIHJldHVyblxuICBpZiAob3ZlcnJpZGVEZWxldGUgfHwgZmlsZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHsgc3RhdGljRGlyIH0gPSBjb2xsZWN0aW9uQ29uZmlnLnVwbG9hZFxuICAgIGNvbnN0IHN0YXRpY1BhdGggPSBwYXRoLnJlc29sdmUoY29uZmlnLnBhdGhzLmNvbmZpZ0Rpciwgc3RhdGljRGlyKVxuXG4gICAgY29uc3QgZmlsZVRvRGVsZXRlID0gYCR7c3RhdGljUGF0aH0vJHtkb2MuZmlsZW5hbWV9YFxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChhd2FpdCBmaWxlRXhpc3RzKGZpbGVUb0RlbGV0ZSkpIHtcbiAgICAgICAgZnMudW5saW5rU3luYyhmaWxlVG9EZWxldGUpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JEZWxldGluZ0ZpbGUodClcbiAgICB9XG5cbiAgICBpZiAoZG9jLnNpemVzKSB7XG4gICAgICBjb25zdCBzaXplczogRmlsZURhdGFbXSA9IE9iamVjdC52YWx1ZXMoZG9jLnNpemVzKVxuICAgICAgLy8gU2luY2UgZm9yRWFjaCB3aWxsIG5vdCB3YWl0IHVudGlsIHVubGluayBpcyBmaW5pc2hlZCBpdCBjb3VsZFxuICAgICAgLy8gaGFwcGVuIHRoYXQgdHdvIG9wZXJhdGlvbnMgd2lsbCB0cnkgdG8gZGVsZXRlIHRoZSBzYW1lIGZpbGUuXG4gICAgICAvLyBUbyBhdm9pZCB0aGlzIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSBcInN5bmNcIiBpbnN0ZWFkXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3Qgc2l6ZSBvZiBzaXplcykge1xuICAgICAgICBjb25zdCBzaXplVG9EZWxldGUgPSBgJHtzdGF0aWNQYXRofS8ke3NpemUuZmlsZW5hbWV9YFxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgaWYgKGF3YWl0IGZpbGVFeGlzdHMoc2l6ZVRvRGVsZXRlKSkge1xuICAgICAgICAgICAgZnMudW5saW5rU3luYyhzaXplVG9EZWxldGUpXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3JEZWxldGluZ0ZpbGUodClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImRlbGV0ZUFzc29jaWF0ZWRGaWxlcyIsImNvbGxlY3Rpb25Db25maWciLCJjb25maWciLCJkb2MiLCJmaWxlcyIsIm92ZXJyaWRlRGVsZXRlIiwidCIsInVwbG9hZCIsImxlbmd0aCIsInN0YXRpY0RpciIsInN0YXRpY1BhdGgiLCJwYXRoIiwicmVzb2x2ZSIsInBhdGhzIiwiY29uZmlnRGlyIiwiZmlsZVRvRGVsZXRlIiwiZmlsZW5hbWUiLCJmaWxlRXhpc3RzIiwiZnMiLCJ1bmxpbmtTeW5jIiwiZXJyIiwiRXJyb3JEZWxldGluZ0ZpbGUiLCJzaXplcyIsIk9iamVjdCIsInZhbHVlcyIsInNpemUiLCJzaXplVG9EZWxldGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXFCYUE7OztlQUFBQTs7OzJEQW5CRTs2REFDRTt3QkFNaUI7bUVBQ1g7Ozs7OztBQVdoQixNQUFNQSx3QkFBdUQsT0FBTyxFQUN6RUMsZ0JBQWdCLEVBQ2hCQyxNQUFNLEVBQ05DLEdBQUcsRUFDSEMsUUFBUSxFQUFFLEVBQ1ZDLGNBQWMsRUFDZEMsQ0FBQyxFQUNGO0lBQ0MsSUFBSSxDQUFDTCxpQkFBaUJNLE1BQU0sRUFBRTtJQUM5QixJQUFJRixrQkFBa0JELE1BQU1JLE1BQU0sR0FBRyxHQUFHO1FBQ3RDLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdSLGlCQUFpQk0sTUFBTTtRQUM3QyxNQUFNRyxhQUFhQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ1YsT0FBT1csS0FBSyxDQUFDQyxTQUFTLEVBQUVMO1FBRXhELE1BQU1NLGVBQWUsQ0FBQyxFQUFFTCxXQUFXLENBQUMsRUFBRVAsSUFBSWEsUUFBUSxDQUFDLENBQUM7UUFFcEQsSUFBSTtZQUNGLElBQUksTUFBTUMsSUFBQUEsbUJBQVUsRUFBQ0YsZUFBZTtnQkFDbENHLFdBQUUsQ0FBQ0MsVUFBVSxDQUFDSjtZQUNoQjtRQUNGLEVBQUUsT0FBT0ssS0FBSztZQUNaLE1BQU0sSUFBSUMseUJBQWlCLENBQUNmO1FBQzlCO1FBRUEsSUFBSUgsSUFBSW1CLEtBQUssRUFBRTtZQUNiLE1BQU1BLFFBQW9CQyxPQUFPQyxNQUFNLENBQUNyQixJQUFJbUIsS0FBSztZQUNqRCxnRUFBZ0U7WUFDaEUsK0RBQStEO1lBQy9ELHdEQUF3RDtZQUN4RCxnREFBZ0Q7WUFDaEQsS0FBSyxNQUFNRyxRQUFRSCxNQUFPO2dCQUN4QixNQUFNSSxlQUFlLENBQUMsRUFBRWhCLFdBQVcsQ0FBQyxFQUFFZSxLQUFLVCxRQUFRLENBQUMsQ0FBQztnQkFDckQsSUFBSTtvQkFDRiw0Q0FBNEM7b0JBQzVDLElBQUksTUFBTUMsSUFBQUEsbUJBQVUsRUFBQ1MsZUFBZTt3QkFDbENSLFdBQUUsQ0FBQ0MsVUFBVSxDQUFDTztvQkFDaEI7Z0JBQ0YsRUFBRSxPQUFPTixLQUFLO29CQUNaLE1BQU0sSUFBSUMseUJBQWlCLENBQUNmO2dCQUM5QjtZQUNGO1FBQ0Y7SUFDRjtBQUNGIn0=